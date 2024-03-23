'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
event.preventDefault()
const clickedEl = this;
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
clickedEl.classList.add('active')
  /* remove class 'active' from all articles */
  const activeLArt = document.querySelectorAll('.allShops .post');

  for(let activeA of activeLArt){
    activeA.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
const href = clickedEl.getAttribute('href')
console.log(href)
  /* find the correct article using the selector (value of 'href' attribute) */
const match =  document.querySelector(href)
  /* add class 'active' to the correct article */
  match.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}