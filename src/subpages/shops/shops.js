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


function printMessage(msg){
	var div = document.createElement('span');
	div.innerHTML = msg;
}

const optArticleSelector = '.allShops .post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(customSelector = ''){
   
    const titleList = document.querySelector(optTitleListSelector)

    const articles = document.querySelectorAll(optArticleSelector + customSelector)
    let html = ''
    for(let article of articles){
        
        const articleId = article.getAttribute('id')
            
        const titleEl = article.querySelector('.card h5')
        console.log(titleEl)
            
        const getTitle = titleEl.innerHTML
            
        const elHtml = '<a href="#'+ articleId +'" class="list-group-item list-group-item-action shadow-lg p-3 mb-3 bg-body rounded">' + getTitle + '</a>'
        
        html = html + elHtml
        titleList.innerHTML = html
        const links = document.querySelectorAll('.titles a');

        for(let link of links){
        link.addEventListener('click', titleClickHandler);
        }
    }
}
  
generateTitleLinks();


function generateTags(){
  
    const articles = document.querySelectorAll(optArticleSelector)
    
    for(let article of articles){
        
        const wrapper = article.querySelector(optArticleTagsSelector)
            
        let html = ''
            
        const tagsData = article.getAttribute('data-tags')
        console.log(tagsData)
            
        const oneTag = tagsData.split(' ')
        console.log(oneTag)
        
        for(let tag of oneTag){
    
            const genaratedHtml = '<button href="#tag-' + tag + '" type="button" class="btn btn-light">' + tag + ' </button><span>'+' ' + '</span>'
            console.log(genaratedHtml)
            html = html + genaratedHtml    
        }   
    wrapper.innerHTML = html
    }
}
generateTags();


function tagClickHandler(event){
   
    event.preventDefault()
    
    const clickedTag = this;
    const href = clickedTag.getAttribute('href')  
    const tag = href.replace('#tag-', '')
    console.log(tag)
    const allActiveTags = document.querySelectorAll('button.active[href^="#tag-"]')
    for(let activeTag of allActiveTags){
        activeTag.classList.remove('active')
    }
    
    const match = document.querySelectorAll('button[href="' + href + '"]')
   
    for(let ma of match){
        ma.classList.add('active')
    }
    generateTitleLinks('[data-tags~="' + tag + '"]');
}
  
function addClickListenersToTags(){
     const allTagLinks = document.querySelectorAll('button[href^="#tag-"]')
  
    for(let tagLink of allTagLinks){
        tagLink.addEventListener('click', tagClickHandler)
    }
  }
  
addClickListenersToTags();