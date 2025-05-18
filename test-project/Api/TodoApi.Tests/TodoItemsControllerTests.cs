using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApi.Controllers;
using TodoApi.Models;
using Xunit;

namespace TodoApi.Tests
{
    public class TodoItemsControllerTests
    {
        private TodoItemsController _controller;
        private TodoContext _context;

        public TodoItemsControllerTests()
        {
            var options = new DbContextOptionsBuilder<TodoContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Ensure a unique database for each test
                .Options;

            _context = new TodoContext(options);

            // Seed the database with initial data
            _context.TodoItems.AddRange(
                new TodoItem
                {
                    Id = Guid.NewGuid(),
                    Task = "Initial Task 1",
                    Deadline = "2024-05-20",
                    Details = "Details for initial task 1",
                    IsComplete = false
                },
                new TodoItem
                {
                    Id = Guid.NewGuid(),
                    Task = "Initial Task 2",
                    Deadline = "2024-06-15",
                    Details = "Details for initial task 2",
                    IsComplete = true
                }
            );

            _context.SaveChanges();

            _controller = new TodoItemsController(_context);
        }

        [Fact]
        public async Task GetTodoItems_ReturnsAllItems()
        {
            // Act
            var result = await _controller.GetTodoItems();

            // Assert
            var items = Assert.IsType<List<TodoItem>>(result.Value);
            Assert.Equal(2, items.Count);
        }

        [Fact]
        public async Task GetTodoItemWithSubTasks_ShouldReturnTodoItemWithSubTasks()
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
            var retrievedTodoItem = okResult.Value as TodoItem;

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
        public async Task GetTodoItem_ReturnsItemById()
        {
            // Arrange
            var newItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Test Task",
                Deadline = DateTime.Now.AddDays(1).ToString(),
                Details = "Test Details",
                IsComplete = false
            };
            _context.TodoItems.Add(newItem);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.GetTodoItem(newItem.Id);
            var okResult = result.Result as OkObjectResult;
            var item = okResult?.Value as TodoItem;

            // Assert
            Assert.NotNull(okResult);
            Assert.Equal(200, okResult.StatusCode);
            Assert.NotNull(item);
            Assert.Equal(newItem.Id, item.Id);
            Assert.Equal(newItem.Task, item.Task);
        }

        [Fact]
        public async Task GetTodoItem_ReturnsNotFound_ForInvalidId()
        {
            // Act
            var result = await _controller.GetTodoItem(Guid.NewGuid());

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async Task CreateTodoItem_AddsNewItem()
        {
            // Arrange
            var newItem = new CandidateTodoItem
            {
                Task = "New Task",
                Deadline = "2024-08-01",
                Details = "Details for new task",
                IsComplete = false
            };

            // Act
            var result = await _controller.PostTodoItem(newItem);
            var createdResult = Assert.IsType<CreatedAtActionResult>(result.Result);
            var createdItem = Assert.IsType<TodoItem>(createdResult.Value);

            // Assert
            Assert.Equal(newItem.Task, createdItem.Task);
            Assert.Equal(newItem.Deadline, createdItem.Deadline);
            Assert.Equal(newItem.Details, createdItem.Details);
            Assert.False(createdItem.IsComplete);
            Assert.NotEqual(Guid.Empty, createdItem.Id);

            var items = await _context.TodoItems.ToListAsync();
            Assert.Equal(3, items.Count); // Verify that the new item was added
        }

        [Fact]
        public async Task UpdateTodoItem_UpdatesExistingItem_WithSubTasks()
        {
            // Arrange
            var existingItem = await _context.TodoItems.FirstAsync();
            var subTask = new SubTask
            {
                Id = Guid.Empty, // Indicate that this is a new subtask
                Task = "Subtask",
                Deadline = "2024-07-01",
                Details = "Subtask details",
                IsComplete = false,
                ParentId = existingItem.Id
            };
            var updatedItem = new TodoItem
            {
                Id = existingItem.Id,
                Task = "Updated Task",
                Deadline = "2024-07-01",
                Details = "Updated details",
                IsComplete = true,
                SubTasks = new List<SubTask> { subTask }
            };

            // Act
            var result = await _controller.PutTodoItem(updatedItem);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedItem = Assert.IsType<TodoItem>(okResult.Value);

            Assert.Equal("Updated Task", returnedItem.Task);
            Assert.Equal("2024-07-01", returnedItem.Deadline);
            Assert.Equal("Updated details", returnedItem.Details);
            Assert.True(returnedItem.IsComplete);
            Assert.NotNull(returnedItem.SubTasks);
            Assert.Single(returnedItem.SubTasks);
            Assert.Equal("Subtask", returnedItem.SubTasks[0].Task);
            Assert.NotEqual(Guid.Empty, returnedItem.SubTasks[0].Id); // Ensure the new GUID is created
        }

        [Fact]
        public async Task UpdateTodoItem_UpdatesExistingItem()
        {
            // Arrange
            var existingItem = await _context.TodoItems.FirstAsync();
            var updatedItem = new TodoItem
            {
                Id = existingItem.Id,
                Task = "Updated Task",
                Deadline = "2024-07-01",
                Details = "Updated details",
                IsComplete = true
            };

            // Act
            var result = await _controller.PutTodoItem(updatedItem);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedItem = Assert.IsType<TodoItem>(okResult.Value);

            Assert.Equal("Updated Task", returnedItem.Task);
            Assert.Equal("2024-07-01", returnedItem.Deadline);
            Assert.Equal("Updated details", returnedItem.Details);
            Assert.True(returnedItem.IsComplete);
        }

        [Fact]
        public async Task UpdateTodoItem_ReturnsNotFound_ForInvalidId()
        {
            // Arrange
            var nonExistentItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = "Non-existent Task",
                Deadline = "2024-07-01",
                Details = "Details for non-existent task",
                IsComplete = false
            };

            // Act
            var result = await _controller.PutTodoItem(nonExistentItem);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task DeleteTodoItem_RemovesItem()
        {
            // Arrange
            var existingItem = await _context.TodoItems.FirstAsync();

            // Act
            var result = await _controller.DeleteTodoItem(existingItem.Id);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result); // Change assertion type

            var items = await _context.TodoItems.ToListAsync();
            Assert.Single(items); // Verify that the item was removed
        }

        [Fact]
        public async Task DeleteTodoItem_ReturnsNotFound_ForInvalidId()
        {
            // Act
            var result = await _controller.DeleteTodoItem(Guid.NewGuid());

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}
