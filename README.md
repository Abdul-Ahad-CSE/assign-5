Readme for Assignment 5:

Q1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
The key difference between them is the return type. 
getElementById() always returns a single or one element with the matching id and null if not found while getElementsByClassName() returns a live HTMLCollection of all elements with the given class. Here live means if DOM changes, it updates automatically.

querySelector() returns the first element matching the CSS selector.It Can be selected by class, id, attribute, or even nested selectors.On the other hand querySelectorAll() returns a static NodeList of all elements matching the selector.Here static means it won’t auto-update when DOM changes.


Q2. How do you **create and insert a new element into the DOM**?
Ans:
1. Create a new element
Example: 
const newDiv = document.createElement("div");
2. Add content or attributes
Example:
newDiv.textContent = "Hello World!";
newDiv.className = "greeting";
Example:
3. Insert into DOM
document.body.appendChild(newDiv); 

There are also some other methods available to add in the specific area, like 
appendChild(newElement) → add at the end.
prepend(newElement) → add at the beginning.


Q3. What is **Event Bubbling** and how does it work?
Ans:
Event bubbling means that when an event is triggered on a child element, it bubbles up (propagates) to its parent, then grandparent, and so on until document.

Example: 
suppose we have a div like this: 
<!-- <div id="parent">
  <button id="child">Click Me</button>
</div> -->

now , in the javascript file, if we write this: 
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

Here, output will be 'Child clicked' then
Output will be 'Parent clicked'


Q4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event delegation is a technique of attaching one event listener to a parent element to handle events from its child elements (instead of attaching listeners to each child).It works because of event bubbling.

Example: 
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});

It is useful for better performance as we have to attach listeners. We can also handle dynamic elements with this.


q5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: 
preventDefault() prevents the default browser action for an event.

Example:

We can stop a form from submitting, a link from redirecting, right-click menu from opening.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload
  console.log("Form not submitted!");
});


stopPropagation() stops the event from bubbling up (or down, in capturing phase).

Example:
We can prevent parent handlers from running.

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); // stops parent event
  console.log("Only child clicked");
});



//Copy button functionality :
function addCopyListener(boxId,boxNum) {

    document.getElementById(boxId).addEventListener('click', function(e) {
    e.preventDefault();

    const mainCopy = document.getElementById('main-copy');
    
        switch(boxNum){
            case 1:
                alert("Copied number 999..."); break;
            case 2:
                alert("Copied number 999..."); break;
            case 3:
                alert("Copied number 999..."); break;
            case 4:
                alert("Copied number 1994-999999..."); break;
            case 5:
                alert("Copied number 109..."); break;
            case 6:
                alert("Copied number 106..."); break;
            case 7:
                alert("Copied number 16216..."); break;
            case 8:
                alert("Copied number 16445..."); break;
            case 9:
                alert("Copied number 163..."); break;
        }

    const currentCount = parseInt(mainCopy.innerText);

   

    mainCopy.innerText = currentCount + 1;
  });
}


for (let i = 1; i <= 9; i++) {
  addCopyListener(`box-${i}-copy`,i);
}