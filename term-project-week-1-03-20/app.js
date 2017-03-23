// Declare variables.
var button = document.querySelector("#yakker-submit");
var input = document.querySelector("#yakker-input");
var postList = document.querySelector("#yakker-list-container");

button.addEventListener('click', post);

function post () {
  // Check if there is input or not.
  if (input.value === "") {
    alert("Post cannot be empty!");
  }
  else {
    // Get time.
    var date = new Date();

    // Add new post to the start of the list.
    postList.innerHTML = "<li>" + input.value + " <small>(" + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ")</small>"+ "</li>" + postList.innerHTML;

    // Reset input textbox.
    input.value = "";
  }
}

// Add zero for time.
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
