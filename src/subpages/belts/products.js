
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



function generateTitle(customSelector = ''){
    const allTitles = document.querySelectorAll('.title' + customSelector)
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


/*function generateTags(){

  const allArt = document.querySelectorAll('.oneArt')
  for(let art of allArt){
    const wrapper = art.querySelector('.list-horizontal')
    let html =''
    const tagAt = art.getAttribute('data-tags')
    console.log(tagAt)
    const tagArray = tagAt.split(' ')
        for(let oneTag of tagArray){
            const htmlEl = '<li><a class="tag" href="#tag-'+ oneTag +'">'+oneTag+'</a></li>'
            html += htmlEl
            }
    wrapper.innerHTML = html
  }
}
  
  generateTags();


  function tagClickHandler(event){
  
  event.preventDefault
  
  const clickedEl = this;
 
  const href = clickedEl.getAttribute('href')
  
    console.log(href)
  const lol = href.replace('#tag-', '')
  console.log(lol)
 
  const allActiveTags = document.querySelectorAll('a.active[href^="#tag-"]')
  console.log(allActiveTags)

  for(let activeTag of allActiveTags){
activeTag.classList.remove('active')
  
  }
  const match = document.querySelectorAll('a[href="' + href + '"]')
   
  for(let m of match){
    m.classList.add('active')
  }

generateTitle(('[data-tags~="' + lol + '"]'))
console.log(('[data-tags~="' + lol + '"]'))

  
}
  function addClickListenersToTags(){

  const allLinks = document.querySelectorAll('a[href^="#tag-"]')
  console.log(allLinks)

  for(let p of allLinks){
    p.addEventListener('click', tagClickHandler)
  }
  }
  
  addClickListenersToTags();*/

  function myMessage(){
    alert('Cart and RWD not Ready yet!')
  }

  function generateAount(){
    const allWrappers = document.querySelectorAll('.widget-amount')
    console.log(allWrappers)
    for(let wrapper of allWrappers){
      let html = ''
      const el = '<h5 class="product__params-title">' + 'Select quantity and add: ' + '<span></h5><p> '+' '+' </p><a class="btn-quantity" href="#less"><i class="fas fa-minus"></i></a><input type="text" name="amount" value="1"><a class="btn-quantity" href="#more"><i class="fas fa-plus"></i></a> <a href="#"  onclick="myMessage()" class="btn-quantity add">Add to cart</a></span>'
      html = el + html;
      wrapper.innerHTML = html;
    }
  }
  generateAount()