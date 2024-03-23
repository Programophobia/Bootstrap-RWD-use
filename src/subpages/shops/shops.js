'use strict';

function titleClickHandler(event){
    console.log('Link was clicked!');
    event.preventDefault()
    const clickedEl = this;
    const activeLinks = document.querySelectorAll('.titles a');

   for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
   }

    clickedEl.classList.add('active')
    const activeLArt = document.querySelectorAll('.allShops .post');

    for(let activeA of activeLArt){
        activeA.classList.remove('active');
    }
    const href = clickedEl.getAttribute('href')
    console.log(href)
    
    const match =  document.querySelector(href)
    match.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}