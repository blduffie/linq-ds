using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoItemsController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        {
            return await _context.TodoItems.Include(t => t.SubTasks).ToListAsync();
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(Guid id)
        {
            var todoItem = await _context.TodoItems
                .Include(t => t.SubTasks)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return Ok(todoItem);
        }

        // POST: api/TodoItems
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(CandidateTodoItem item)
        {
            var todoItem = new TodoItem
            {
                Id = Guid.NewGuid(),
                Task = item.Task,
                Deadline = item.Deadline,
                Details = item.Details,
                IsComplete = item.IsComplete
            };

            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(Guid id)
        {
            var todoItem = await _context.TodoItems
                .Include(t => t.SubTasks)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (todoItem != null)
            {
                _context.TodoItems.Remove(todoItem);
            }
            else
            {
                var subTask = await _context.Subtasks.FindAsync(id);
                if (subTask == null)
                {
                    return NotFound();
                }

                _context.Subtasks.Remove(subTask);

                // Check if parent TodoItem should be updated
                var parentTodoItem = await _context.TodoItems
                    .Include(t => t.SubTasks)
                    .FirstOrDefaultAsync(t => t.Id == subTask.ParentId);

                if (parentTodoItem != null)
                {
                    parentTodoItem.SubTasks.Remove(subTask);
                }
            }

            await _context.SaveChangesAsync();

            // Retrieve all updated TodoItems from the database
            var updatedTodoItems = await _context.TodoItems
                .Include(t => t.SubTasks)
                .ToListAsync();

            return Ok(updatedTodoItems);
        }


        [HttpPut]
        public async Task<IActionResult> PutTodoItem(TodoItem todoItem)
        {

            var existingTodoItem = await _context.TodoItems
                .FirstOrDefaultAsync(t => t.Id == todoItem.Id);

            if (existingTodoItem == null)
            {
                return NotFound();
            }

            // Update existing TodoItem properties
            existingTodoItem.Task = todoItem.Task;
            existingTodoItem.Deadline = todoItem.Deadline;
            existingTodoItem.Details = todoItem.Details;
            existingTodoItem.IsComplete = todoItem.IsComplete;

            // Handle subtasks
            foreach (var subTask in todoItem.SubTasks)
            {
                if (subTask.Id == Guid.Empty)
                {
                    // New subtask, add to Subtasks DbSet
                    subTask.Id = Guid.NewGuid(); // Assign a new ID
                    subTask.ParentId = existingTodoItem.Id; // Set the ParentId
                    _context.Subtasks.Add(subTask);
                    existingTodoItem.SubTasks.Add(subTask);
                }
                else
                {
                    // Existing subtask, update it
                    var existingSubTask = await _context.Subtasks
                        .FirstOrDefaultAsync(s => s.Id == subTask.Id);

                    if (existingSubTask != null)
                    {
                        existingSubTask.Task = subTask.Task;
                        existingSubTask.Deadline = subTask.Deadline;
                        existingSubTask.Details = subTask.Details;
                        existingSubTask.IsComplete = subTask.IsComplete;
                        existingSubTask.ParentId = existingTodoItem.Id; // Ensure the ParentId is correct
                        _context.Subtasks.Update(existingSubTask);
                    }
                }
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(todoItem.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(existingTodoItem);
        }

        private bool TodoItemExists(Guid id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }

        // PUT: api/TodoItems/MarkComplete/{id}
        [HttpPut("MarkComplete/{id}")]
        public async Task<IActionResult> MarkComplete(Guid id)
        {
            var todoItem = await _context.TodoItems
                .Include(t => t.SubTasks)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (todoItem != null)
            {
                todoItem.IsComplete = true;
                foreach (var subTask in todoItem.SubTasks)
                {
                    subTask.IsComplete = true;
                }
            }
            else
            {
                var subTask = await _context.Subtasks.FirstOrDefaultAsync(s => s.Id == id);
                if (subTask == null)
                {
                    return NotFound();
                }
                subTask.IsComplete = true;

                var parentTodoItem = await _context.TodoItems
                    .Include(t => t.SubTasks)
                    .FirstOrDefaultAsync(t => t.Id == subTask.ParentId);

                if (parentTodoItem != null && parentTodoItem.SubTasks.All(s => s.IsComplete))
                {
                    parentTodoItem.IsComplete = true;
                }
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // Retrieve all updated TodoItems from the database
            var updatedTodoItems = await _context.TodoItems
                .Include(t => t.SubTasks)
                .ToListAsync();

            return Ok(updatedTodoItems);
        }

    }
}
