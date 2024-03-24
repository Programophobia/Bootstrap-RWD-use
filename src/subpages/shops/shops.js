'use strict';

function printMessage(msg){
	var div = document.createElement('span');
	div.innerHTML = msg;
    document.getElementById('new-msg').appendChild(div);
}


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

function printMessage(msg){
	var div = document.createElement('span');
	div.innerHTML = msg;
}

const optArticleSelector = '.allShops .post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list'

function generateTags(){
    /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector)
    /* START LOOP: for every article: */
  for(let article of articles){
      /* find tags wrapper */
  const wrapper = article.querySelector(optArticleTagsSelector)
      /* make html variable with empty string */
  let html = ''
      /* get tags from data-tags attribute */
  const tagsData = article.getAttribute('data-tags')
  console.log(tagsData)
      /* split tags into array */
  const oneTag = tagsData.split(' ')
  console.log(oneTag)
      /* START LOOP: for each tag */
      for(let tag of oneTag){
  
        /* generate HTML of the link */
  const genaratedHtml = '<button type="button" class="btn btn-light">' + tag + ' </button>'
        /* add generated code to html variable */
  html = html + genaratedHtml
      /* END LOOP: for each tag */
  }
      /* insert HTML of all the links into the tags wrapper */
  wrapper.innerHTML = html
    /* END LOOP: for every article: */
}
  }
  
  generateTags();