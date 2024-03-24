function tagClickHandler(event){
    /* prevent default action for this event */
  event.preventDefault()
    /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedTag = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedTag.getAttribute('href')
    /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('href-', "")
  console.log(tag)
    /* find all tag links with class active */
  const allActiveTags = document.querySelectorAll('.list-horizontal button.active')
    /* START LOOP: for each active tag link */
  for(let activeTag of allActiveTags){
    activeTag.classList.remove('active')
  }
      /* remove class active */
  
    /* END LOOP: for each active tag link */
  
    /* find all tag links with "href" attribute equal to the "href" constant */
    const allTagLinks = document.querySelectorAll('.list-horizontal button')
  const match = allTagLinks.getAttribute(href)
    /* START LOOP: for each found tag link */
  for(let ma of match){
    ma.classList.add('active')
  }
      /* add class active */
  
    /* END LOOP: for each found tag link */
  
    /* execute function "generateTitleLinks" with article selector as argument */
    titleClickHandler(optArticleSelector)
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
  const allTagLinks = document.querySelectorAll('.list-horizontal button')
    /* START LOOP: for each link */
  for(let tagLink of allTagLinks){
    tagLink.addEventListener('click', tagClickHandler)
  }
      /* add tagClickHandler as event listener for that link */
  
    /* END LOOP: for each link */
  }
  
  addClickListenersToTags();




  function generateTags(){
    const articles = document.querySelectorAll(cos)
    let html = ''
    for(let article of articles){
        const att = article.getAttribute('data-tags')
        const one = att.split(' ')
        for(on of one){
            const el = '<a>'+ on +'</a>'
            html = html + el
        }
    }
  }
  wwrapper.innerHTML = html
  generateTags();