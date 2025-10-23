# Documentation
1. Introduction
Created a registration form with real-time client-side validation using HTML, CSS, and JavaScript.
The goal was to validate inputs instantly without reloading the page and give clear feedback to the user.

2. Main Concepts Applied
DOM Selection → Used getElementById() to access form inputs and error message areas.
Event Listeners → Used input events to trigger validation as the user types.
Form Validation Rules → Implemented logic to check length, format, and matching values.
Regular Expressions (Regex) → Used to validate email format and password strength.
Conditional Logic → Enabled the submit button only when all fields are valid.
DOM Manipulation → Used .textContent, .classList.add(), and .classList.remove() to update UI dynamically.
CSS Styling → Applied red borders for invalid inputs and green borders for valid ones.

3. Validation Rules Implemented
Username: Must be at least 3 characters.
Email: Must follow standard email format (checked using Regex).
Password: Must be at least 8 characters, include one uppercase, one lowercase, and one special character.
Confirm Password: Must match the password.

# Challenges faced
1. Validation not updating instantly.
2. Handling multiple password rules at once.
3. Ensuring submit button stays disabled until all fields are valid.
4. Styling input borders correctly based on validation.

# How i overcame them
1. Added real-time input event listeners for all fields.
2. Used a single Regex pattern to handle all password rules.
3. Used a boolean valid flag to control the submit button state.
4. Applied and removed CSS classes (valid-input and invalid-input) for styling.

# Final Outcome
The form now:

Shows dynamic error messages below each field
Validates in real-time
Shows green borders for valid input
Shows red borders for invalid input
Disables the Submit button until all validations pass
Achieved a clean, user-friendly validation experience.