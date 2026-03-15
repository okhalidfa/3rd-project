Question 1 :  getElementById("id") always picks one element with that ID. Easy and fast. and getElementsByClassName("class")  picks all elements with that class  it’s a livelist, so it changes when we add/remove elements. And querySelector("selector") picks the first element that matches a CSS selector like ID, class etc like querySelectorAll("selector")  picks all elements matching the selector. This one is static; it doesn’t update automatically.

Question 2: first we have reate the element with document.createElement(). And add text or classes in js and attach it to the DOM with appendChild().

Question 3: Event sbubbes  in JavaScript bubble up the DOM tree. That means if we click a button inside a div and  the click is first handled by the button in js, then the div, then the body,

Question 4 : by adding a click listener to every child, you attach it to the parent and check which child was clicked. This is event delegation. It is useful because because its fewer event listeners  is faster. And works even if you add elements later.

Question 5 : the main differences are preventDefault() stops the browser’s default action. For example: clicking a link normally navigates, but you can stop it. And stopPropagation()  stops the event from bubbling up. For example: clicking a button inside a div won’t trigger the div’s click event.
