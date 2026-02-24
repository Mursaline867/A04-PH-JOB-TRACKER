### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
----getElementById() selects a single element using its unique id. It returns only one element.
----getElementsByClassName() selects all elements with a specific class name. It returns an HTMLCollection (like a list).
----querySelector() selects the first element that matches a CSS selector (id, class, tag, etc.)
----querySelectorAll() selects all elements that match a CSS selector and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?
----First, create an element using document.createElement(). Then, add content using innerText or innerHTML.
Finally, insert it into the page using methods like appendChild() or append(). Example steps:
     1. Create element
     2. Add text/content
     3. Append it to a parent element

### 3. What is Event Bubbling? And how does it work?
----Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements. For example, if I click a button inside a div, the click event first runs on the button, then on the div, then on the body and so on.

### 4. What is Event Delegation in JavaScript? Why is it useful?
----Event Delegation is a technique where a parent element handles events for its child elements using event bubbling.
Instead of adding event listeners to many child elements, we add one listener to the parent.
It is useful because It improves performance and works for dynamically added elements and reduces duplicate code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
----preventDefault() stops the default action of an element (for example, preventing a form from submitting).
----stopPropagation() stops the event from moving to parent elements (stops bubbling).
