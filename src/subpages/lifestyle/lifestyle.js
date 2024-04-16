
function sendOrder() {
  const thisCart = this;
  const url = 'http://localhost:3131/orders'
  console.log(url);
  const payload = [];

 const newComment = document.getElementById("new-comment").value
  console.log(newComment)
  payload.push(newComment)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options);
}

document.getElementById("btn-post").addEventListener("click", sendOrder) 

document.getElementById("btn-post").addEventListener("click", function (event) {
    event.preventDefault()
   
    const newComment = document.getElementById("new-comment").value
    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    const now = new Date();
    console.dir(now);
    let com = '<p class="newComment" id="postC"><i class="fa-solid fa-user"></i>  Anonim: </p>' + '<p id="postX">"' + newComment + '" </p><br> '+ now +' ';
   // commentElement.innerHTML = com;
    commentContainer.appendChild(commentElement);
    document.getElementById("new-comment").value = "";
    localStorage.setItem("myCat", com);

    const cat = localStorage.getItem("myCat");
    console.log(cat);
    commentElement.innerHTML = cat;
});

