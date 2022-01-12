
// Create a "close" button and append it to each list item
var workoutItems = document.getElementsByClassName("workout-item");
for (let i = 0; i < workoutItems.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7"); // 'x'
  span.className = "workout-item-close";
  span.appendChild(txt);
  workoutItems[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeButtons = document.getElementsByClassName("workout-item-close");

function addClickEventToCloseButtons() {
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

addClickEventToCloseButtons();

// Add a "checked" symbol when clicking on a list item
var workoutItemList = document.getElementById("workout-item-list");
workoutItemList.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.tagName.toLowerCase() === 'h5') {
    clickEvent.target.parentElement.parentElement.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function createWorkoutItem() {
  // grab the value from the input
  var inputValue = document.getElementById("exercise-to-add").value.trim();
  
  if (inputValue === '') {
    // if nothing input, do nothing
    alert("You must write something!");
  } else {
    // list item to hold wrapper div and 'x'
    var newWorkoutListItem = document.createElement("li");
    newWorkoutListItem.className = "list-group-item workout-item p-4";

    // wrapper div to hold h5 text
    var wrapperDiv = document.createElement("div");
    wrapperDiv.className = "d-flex justify-content-between";

    // h5 to hold textNode
    var wrapperH5 = document.createElement("h5");
    wrapperH5.className = "mb-0 example-list-item";

    // create and add the new exercise textNode to h5
    var newExerciseTextNode = document.createTextNode(inputValue);
    
    // add text to h5, h5 to div, then div back to list item
    wrapperH5.appendChild(newExerciseTextNode);
    wrapperDiv.appendChild(wrapperH5);
    newWorkoutListItem.appendChild(wrapperDiv);

    // create the 'x' span
    var xSpan = document.createElement("span");
    xSpan.className = "workout-item-close";
    var xTextNode = document.createTextNode("\u00D7"); // 'x'
    
    // add the 'x' to the span, then the span to the list item
    xSpan.appendChild(xTextNode);
    newWorkoutListItem.appendChild(xSpan);

    // add the list item to the ul
    document.getElementById("workout-item-list").appendChild(newWorkoutListItem);

    // clear the input
    document.getElementById("exercise-to-add").value = "";

    // add the close button listener
    addClickEventToCloseButtons();
  }
}

// when page loads...
document.addEventListener("DOMContentLoaded", function() {
  // get the text box
  const exerciseToAddBox = document.getElementById("exercise-to-add");
  // when user releases a key while in the box
  exerciseToAddBox.addEventListener("keyup", function(e) {
    // and if that key was 'enter'
    if (e.key.toUpperCase() === "ENTER") {
      // add the workout item
      createWorkoutItem();
    }
  });
});