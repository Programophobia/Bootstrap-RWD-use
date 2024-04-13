
function executeClick(event){
    event.preventDefault();
   const thisStar = this;
   const newMessage = document.querySelector('.rating')
   const mess = thisStar.getAttribute('title')
   newMessage.innerHTML = '<p class="newComment"><i class="fa-solid fa-user"></i> Anonim: </p>' + '"' + mess + '"';
}


const clickableStars = document.querySelectorAll('.x')
for(let clickableStar of clickableStars){
    clickableStar.addEventListener('click', executeClick)
}

function reload(){
    location.reload();
    return false;
}

const refreashButt = document.querySelector('.refresh')

refreashButt.addEventListener('click', reload)