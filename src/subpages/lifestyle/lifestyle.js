
document.getElementById("btn-post").addEventListener("click", function (event) {
    event.preventDefault()
   
    const newComment = document.getElementById("new-comment").value
    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    commentElement.innerHTML = '<p class="newComment"><i class="fa-solid fa-user"></i> Anonim: </p>' + newComment;
    commentContainer.appendChild(commentElement);
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