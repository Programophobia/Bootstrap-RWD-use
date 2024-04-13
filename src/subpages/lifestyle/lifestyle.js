// Step 1: Add an event listener to the "Post" button
document.getElementById("btn-post").addEventListener("click", function (event) {
    event.preventDefault()
    // This line sets up an event listener for the click event on the "Post" button.
    // When the button is clicked, the function provided as the second argument will run.

    // Step 2: Get the comment from the textarea
    const newComment = document.getElementById("new-comment").value;

    // Step 3: Create a new paragraph element for the comment
    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    commentElement.innerHTML = '<p class="newComment">Anonim: </p>' + newComment;

    // Step 4: Append the comment to the comment container
    commentContainer.appendChild(commentElement);

    // Clear the textarea after posting the comment
    document.getElementById("new-comment").value = "";
});
function showInput() {
    document.getElementById('comment-container').innerHTML =
      document.getElementById("new-comment").value;
  }
const localStorageKey = "myData";
document.getElementById("new-comment").value = getDataFromLocalStorage();
document.getElementById('comment-container').innerHTML = getDataFromLocalStorage();

function showInput() {
  var user_input = document.getElementById("new-comment").value;
  setDataToLocalStorage(user_input);
  document.getElementById('comment-container').innerHTML = user_input;
}

function setDataToLocalStorage(newData){
   localStorage.setItem(localStorageKey, newData);
}

function getDataFromLocalStorage(){
  return localStorage.getItem(localStorageKey) || "";
}