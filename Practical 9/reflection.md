# Documentation

1. Selecting Elements from the DOM
document.getElementById() → selects a single element by its ID.
document.getElementsByClassName() → selects elements by class (returns a live HTMLCollection).
document.querySelectorAll() → selects all matching elements using CSS selectors (returns a NodeList).

2. Traversing the DOM
parentElement → access the parent of a node.
children → get all direct child elements of a node.
firstElementChild / lastElementChild → access the first or last child element.

3. Manipulating Content and Styles
textContent → change or read the text of an element.
style → modify CSS styles directly (e.g., element.style.color = "green").
classList.add(), classList.remove(), classList.toggle() → manage CSS classes dynamically.

4. Creating and Removing Elements
document.createElement() → create a new HTML element dynamically.
appendChild() → add a new element as a child of a parent element.
removeChild() → remove a specific child element from its parent.

5. Event Handling
addEventListener("click", callback) → attach a function to respond when a button is clicked.
Enables dynamic updates to the DOM based on user interactions.

6. Iterating Over Elements
Using forEach on NodeLists (from querySelectorAll) to apply changes to multiple elements at once (e.g., toggling a class on all paragraphs).

# problems faced and how i overcame them

1. Problem: Accidentally selected a wrong element when using getElementsByClassName (returns HTMLCollection, not an array).
Solution: Used index [0] or converted it to an array with Array.from() when needed.

2. Problem: Removing elements sometimes removed non-paragraph elements.
Solution: Checked tagName before removing the last child.

3. Problem: Toggling a class on multiple elements.
Solution: Used querySelectorAll("p") with forEach and classList.toggle() for batch updates.