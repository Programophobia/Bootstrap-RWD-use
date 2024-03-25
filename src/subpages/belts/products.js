
'use strict';



console.log('hello')

function titleClickHandler(event){
    console.log('Link was clicked!');
    event.preventDefault();
    const clickedBtn = this;
    const allLinks = document.querySelectorAll('.titles a');

    for(let link of allLinks){
     link.classList.remove('active')
    }
    
    clickedBtn.classList.add('active');
    const allArt = document.querySelectorAll('.oneArt');
    for(let art of allArt){
        art.classList.remove('active')
    }

    const href = clickedBtn.getAttribute('href');
    console.log(href);
    const match = document.querySelectorAll(href)
    for(let m of match){
        m.classList.add('active')
        console.log(m, match)
    }
}



function generateTitle(){
    const allTitles = document.querySelectorAll('.title')
    console.log(allTitles)
    let html =''
    for(let title of allTitles){
        const readtitle = title.innerHTML
        console.log(readtitle)
        const printEl = '<a class="btn btn-primary" href="#'+ readtitle +'">'+ readtitle +'</a>'
        console.log(printEl)
        html = html + printEl
    }
    const titleList = document.querySelector('.titles')
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
} 

}
generateTitle()


function generateTags(){

  const allArt = document.querySelectorAll('.oneArt')
  for(let art of allArt){
    const wrapper = art.querySelector('.list-horizontal')
    let html =''
    const tagAt = art.getAttribute('data-tags')
    console.log(tagAt)
    const tagArray = tagAt.split(' ')
        for(let oneTag of tagArray){
            const htmlEl = '<li><a href="#'+ oneTag +'">'+oneTag+'</a></li>'
            html += htmlEl
            }
    wrapper.innerHTML = html
  }
}
  
  generateTags();


 