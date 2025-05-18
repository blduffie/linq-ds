using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TodoApi.Tests
{
    public static class ValidationHelper
    {
        public static IList<ValidationResult> ValidateModel(object model)
        {
            var validationResults = new List<ValidationResult>();
            var validationContext = new ValidationContext(model, null, null);
            Validator.TryValidateObject(model, validationContext, validationResults, true);
            return validationResults;
        }
    }
}
