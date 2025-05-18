using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class SubTask
    {
        public Guid Id { get; set; }

        public Guid ParentId { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(100)]
        public required string Task { get; set; }

        public required string Deadline { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(500)]
        public required string Details { get; set; }

        public bool IsComplete { get; set; }
    }
}
