using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Controllers;
using TodoApi.Models;
using Xunit;

namespace TodoApi.Tests
{
    public class TodoItemTests
    {
        private readonly TodoItemsController _controller;
        private readonly TodoContext _context;

        public TodoItemTests()
        {
            var options = new DbContextOptionsBuilder<TodoContext>()
                .UseInMemoryDatabase(databaseName: "TodoList")
                .Options;

            _context = new TodoContext(options);
            _controller = new TodoItemsController(_context);
        }

        [Fact]
        public async Task GetTodoItem_ShouldReturnTodoItemWithSubTasks()
        {
            // Arrange
            var mainTaskId = Guid.NewGuid();
            var mainTask = new TodoItem
            {
                Id = mainTaskId,
                Task = "Main Task",
                Deadline = "2024-05-20",
                Details = "Main task details",
                IsComplete = false,
                SubTasks = new List<SubTask>
                {
                    new SubTask
                    {
                        Id = Guid.NewGuid(),
                        Task = "Subtask 1",
                        Deadline = "2024-05-21",
                        Details = "Subtask details 1",
                        IsComplete = false,
                        ParentId = mainTaskId
                    },
                    new SubTask
                    {
                        Id = Guid.NewGuid(),
                        Task = "Subtask 2",
                        Deadline = "2024-05-22",
                        Details = "Subtask details 2",
                        IsComplete = false,
                        ParentId = mainTaskId
                    }
                }
            };

            _context.TodoItems.Add(mainTask);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.GetTodoItem(mainTask.Id);
            var okResult = result.Result as OkObjectResult;
            var retrievedTodoItem = okResult?.Value as TodoItem;

            // Assert
            Assert.NotNull(okResult);
            Assert.Equal(200, okResult.StatusCode);
            Assert.NotNull(retrievedTodoItem);
            Assert.Equal("Main Task", retrievedTodoItem.Task);
            Assert.Equal(2, retrievedTodoItem.SubTasks.Count);
            Assert.Contains(retrievedTodoItem.SubTasks, subTask => subTask.Task == "Subtask 1");
            Assert.Contains(retrievedTodoItem.SubTasks, subTask => subTask.Task == "Subtask 2");
        }

        [Fact]
        public void CanCreateTodoItem()
        {
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Sample Task",
                Deadline = "2024-05-20",
                Details = "Sample details",
                IsComplete = false,
            };

            Assert.NotNull(todoItem);
            Assert.Equal("Sample Task", todoItem.Task);
            Assert.Equal("2024-05-20", todoItem.Deadline);
            Assert.Equal("Sample details", todoItem.Details);
            Assert.False(todoItem.IsComplete);
        }

        [Fact]
        public void CanAddSubTasksToTodoItem()
        {
            var subTask1 = new SubTask
            {
                Id = Guid.NewGuid(),
                Task = "Subtask 1",
                Deadline = "2024-05-21",
                Details = "Subtask details 1",
                IsComplete = false,
                ParentId = Guid.NewGuid()
            };

            var subTask2 = new SubTask
            {
                Id = Guid.NewGuid(),
                Task = "Subtask 2",
                Deadline = "2024-05-22",
                Details = "Subtask details 2",
                IsComplete = false,
                ParentId = Guid.NewGuid()
            };

            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Main Task",
                Deadline = "2024-05-20",
                Details = "Main task details",
                IsComplete = false,
                SubTasks = new List<SubTask> { subTask1, subTask2 }
            };

            Assert.NotNull(todoItem.SubTasks);
            Assert.Equal(2, todoItem.SubTasks.Count);
            Assert.Contains(todoItem.SubTasks, subTask => subTask.Task == "Subtask 1");
            Assert.Contains(todoItem.SubTasks, subTask => subTask.Task == "Subtask 2");
        }

        [Fact]
        public void TodoItem_ValidModel_ShouldPassValidation()
        {
            // Arrange
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Valid Task",
                Details = "Valid details with sufficient length",
                Deadline = "2024-08-01",
                IsComplete = false
            };

            // Act
            var validationResults = ValidationHelper.ValidateModel(todoItem);

            // Assert
            Assert.Empty(validationResults);
        }

        [Fact]
        public void TodoItem_InvalidTaskLength_ShouldFailValidation()
        {
            // Arrange
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "S", // Invalid length
                Details = "Valid details with sufficient length",
                Deadline = "2024-08-01",
                IsComplete = false
            };

            // Act
            var validationResults = ValidationHelper.ValidateModel(todoItem);

            // Assert
            Assert.Single(validationResults);
            Assert.Contains(validationResults, v => v.MemberNames.Contains("Task") && v.ErrorMessage.Contains("minimum length"));
        }

        [Fact]
        public void TodoItem_InvalidDetailsLength_ShouldFailValidation()
        {
            // Arrange
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Valid Task",
                Details = "S", // Invalid length
                Deadline = "2024-08-01",
                IsComplete = false
            };

            // Act
            var validationResults = ValidationHelper.ValidateModel(todoItem);

            // Assert
            Assert.Single(validationResults);
            Assert.Contains(validationResults, v => v.MemberNames.Contains("Details") && v.ErrorMessage.Contains("minimum length"));
        }

        [Fact]
        public void TodoItem_TaskTooLong_ShouldFailValidation()
        {
            // Arrange
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = new string('A', 101), // Too long
                Details = "Valid details with sufficient length",
                Deadline = "2024-08-01",
                IsComplete = false
            };

            // Act
            var validationResults = ValidationHelper.ValidateModel(todoItem);

            // Assert
            Assert.Single(validationResults);
            Assert.Contains(validationResults, v => v.MemberNames.Contains("Task") && v.ErrorMessage.Contains("maximum length"));
        }

        [Fact]
        public void TodoItem_DetailsTooLong_ShouldFailValidation()
        {
            // Arrange
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Valid Task",
                Details = new string('A', 501), // Too long
                Deadline = "2024-08-01",
                IsComplete = false
            };

            // Act
            var validationResults = ValidationHelper.ValidateModel(todoItem);

            // Assert
            Assert.Single(validationResults);
            Assert.Contains(validationResults, v => v.MemberNames.Contains("Details") && v.ErrorMessage.Contains("maximum length"));
        }

        [Fact]
        public async Task PutTodoItem_Should_Return_NotFound_When_Item_Does_Not_Exist()
        {
            // Arrange
            var id = Guid.NewGuid();
            var item = new TodoItem
            {
                Id = id,
                Task = "Test Task",
                Deadline = "2024-05-20",
                Details = "Sample details",
                IsComplete = false,
            };

            // Act
            var result = await _controller.PutTodoItem(item);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task PutTodoItem_Should_Update_Item()
        {
            // Arrange
            var id = Guid.NewGuid();
            var item = new TodoItem
            {
                Id = id,
                Task = "Original Task",
                Deadline = "2024-05-20",
                Details = "Original details",
                IsComplete = false,
            };
            _context.TodoItems.Add(item);
            await _context.SaveChangesAsync();

            var updatedItem = new TodoItem
            {
                Id = id,
                Task = "Updated Task",
                Deadline = "2024-05-20",
                Details = "Updated details",
                IsComplete = false,
            };

            // Act
            var result = await _controller.PutTodoItem(updatedItem);

            // Assert
            Assert.IsType<OkObjectResult>(result);
            var updatedItemFromDb = await _context.TodoItems.FindAsync(id);
            Assert.Equal("Updated Task", updatedItemFromDb.Task);
        }

        [Fact]
        public async Task MarkComplete_Should_Mark_Item_And_SubTasks_As_Complete()
        {
            // Arrange
            var subTask1 = new SubTask
            {
                Id = Guid.NewGuid(),
                Task = "Subtask 1",
                Deadline = "2024-05-21",
                Details = "Subtask details 1",
                IsComplete = false,
                ParentId = Guid.NewGuid()
            };

            var subTask2 = new SubTask
            {
                Id = Guid.NewGuid(),
                Task = "Subtask 2",
                Deadline = "2024-05-22",
                Details = "Subtask details 2",
                IsComplete = false,
                ParentId = Guid.NewGuid()
            };

            var parentItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Parent Task",
                Deadline = "2024-05-20",
                Details = "Parent details",
                IsComplete = false,
                SubTasks = new List<SubTask> { subTask1, subTask2 }
            };

            _context.TodoItems.Add(parentItem);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.MarkComplete(parentItem.Id);

            // Assert
            var okObjectResult = Assert.IsType<OkObjectResult>(result); // Change to OkObjectResult
            var updatedParent = await _context.TodoItems.Include(t => t.SubTasks).FirstOrDefaultAsync(t => t.Id == parentItem.Id);
            Assert.True(updatedParent.IsComplete);
            Assert.All(updatedParent.SubTasks, subTask => Assert.True(subTask.IsComplete));
        }

        [Fact]
        public async Task MarkComplete_Should_Mark_SubTask_As_Complete()
        {
            // Arrange
            var subTask = new SubTask
            {
                Id = Guid.NewGuid(),
                Task = "Subtask",
                Deadline = "2024-05-21",
                Details = "Subtask details",
                IsComplete = false,
                ParentId = Guid.NewGuid()
            };

            var parentItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Parent Task",
                Deadline = "2024-05-20",
                Details = "Parent details",
                IsComplete = false,
                SubTasks = new List<SubTask> { subTask }
            };

            _context.TodoItems.Add(parentItem);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.MarkComplete(subTask.Id);

            // Assert
            var okObjectResult = Assert.IsType<OkObjectResult>(result); // Change to OkObjectResult
            var updatedSubTask = await _context.Subtasks.FirstOrDefaultAsync(t => t.Id == subTask.Id);
            Assert.True(updatedSubTask.IsComplete);
        }

        [Fact]
        public async Task MarkComplete_Should_Return_NotFound_For_Invalid_Id()
        {
            // Arrange
            var id = Guid.NewGuid();

            // Act
            var result = await _controller.MarkComplete(id);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}
