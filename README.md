1. getElementById: Selects a single element by its id attribute, returns the element directly, or null if not found.
   getElementsByClassName: Selects all elements with a given class, returns a live HTMLCollection.
   querySelector: Selects the first element matching any valid CSS selector, returns the element or null.
   querySelectorAll: Selects all elements matching a CSS selector, returns a static NodeLis.
   
2. We can create and insert a new element into the DOM in 3 steps :
   (i) Create: Generate the empty element node in memory.
   (ii) Configure: Inject text, add CSS classes, or apply specific tag attributes.
   (iii) Insert: Select a structural parent target on your page and mount the node.

3. Event Bubbling is a mechanism in the browser's Document Object Model (DOM) where an event triggered on a specific element "bubbles up" through its ancestors in the DOM tree.
   Event bubbling works in 3 phases : capturing phase, target phase and bubbling phase.

4. Event Delegation is a design pattern in JavaScript used to manage events efficiently by attaching a single event listener to a parent element instead of adding individual listeners to multiple child elements.
   It is useful because it has high memory efficiency, automatic setup for dynamic elements, cleaner and more maintainable code etc.

5.The fundamental difference is their purpose is preventDefault() cancels the browser's default behavior for an action, while stopPropagation() halts the movement of an event up or down the DOM tree.
