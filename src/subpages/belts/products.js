
'use strict';

//API

const select = {
  db: {
    url: 'http//localhost:3131',
    orders: 'orders',
  },
}
const placeOrder = document.querySelector(".API-getaway");
placeOrder.addEventListener("click", function(){
  location.reload();
  alert('Thank you for your order. It went straight into the abbys')
  return false;
})

const sentOrderButton = document.querySelector('.API-getaway');
sentOrderButton.addEventListener('click', sendOrder)



function sendOrder() {
  const thisCart = this;
  const url = 'http://localhost:3131/orders'
  console.log(url);
  const payload = {};

 
  payload.deliveryFee = 20
  payload.items = 1
  payload.price = 88

  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, options);
}



//Rest
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


  function generateAount(){
    const allWrappers = document.querySelectorAll('.widget-amount')
    console.log(allWrappers)
    for(let wrapper of allWrappers){
      let html = ''
      const el = '<h5 class="product__params-title">' + 'Select quantity and add: ' + '<span></h5><p> '+' '+' </p><a class="btn-quantity" href="#less"><i class="fas fa-minus"></i></a><input class="inputAmount" type="text" name="amount" value="1"><a class="btn-quantity" href="#more"><i class="fas fa-plus"></i></a> <a href="#" class="btn-quantity add">Add to cart</a></span>'
      html = el + html;
      wrapper.innerHTML = html;
    }
  }
  generateAount()

  function accord(event){
    event.preventDefault;
    const thisProduct = this
    const activeProduct = document.querySelector('.cart__content')
      activeProduct.classList.toggle('activeCart')
  }

  const clickableTrigger = document.querySelector('.cart__summary');
  clickableTrigger.addEventListener('click', accord);

 //Price element count



 function aaccord(){
  const thisProduct = this;
  console.log(thisProduct)

const price = document.querySelector('.price')
const stablePrice = document.querySelector('.diplayNone')
console.log(price)
let elPrice = stablePrice.innerHTML
let replase = elPrice.replace('<p class="diplayNone">', '')
let moreReplase = replase.replace('</p>', '')
console.log(moreReplase)
let matNewPrice = moreReplase * 1.3;
console.log(matNewPrice)

let html = '';
const el = '<span class="price">'+matNewPrice+'</span>'
html = html + el;
price.innerHTML = html
btn.classList.add('addd')

 }

const btn =  document.querySelector('.ggg');
console.log(btn)

btn.addEventListener('click', aaccord);



function aaccorda(){
  const thisProduct = this;
  
    const ell = this;

  // the closest ancestor with the id of "div-02"
    const mamyTo = ell.closest("div"); 
    console.log(mamyTo)
    const attNew = mamyTo.getAttribute('id')
    console.log(attNew)
    const price = document.querySelector('.price')
    let priceSpan = price.firstChild
    const stablePrice = document.querySelector('.diplayNone')
    console.log(price)
    let elPrice = stablePrice.innerHTML
    let replase = elPrice.replace('<p class="diplayNone">', '')
    let moreReplase = replase.replace('</p>', '')
    console.log(moreReplase)
    let matNewPrice = moreReplase

    let html = '';
    const el = '<span class="price">'+ matNewPrice +'</span>'
    html = html + el;
    price.innerHTML = html
    btn.classList.add('addd')

 }

const btnS =  document.querySelector('.kkk');
console.log(btn)

btnS.addEventListener('click', aaccorda);

//counting
const plus = document.querySelectorAll('.fa-plus')

for(let p of plus){
      p.addEventListener('click', function(){
    const thisBtn = this;
    const cat = thisBtn.closest("div")
    console.log(cat)
    let number = cat.querySelector('.inputAmount')
    let read = number.getAttribute("value")
    let numbro = parseInt(read);
    let newAmount = numbro + 1;
    number.setAttribute("value", newAmount);
    const cartDiv = thisBtn.closest(".card-body");
    let price = cartDiv.querySelector("p")
    let currentPrice = price.innerText
    let omg = currentPrice.replace("PRICE: ", "")
    let numberOmg = parseInt(omg)
    console.log(omg)
    const st = cartDiv.getAttribute("id")
    console.log(cartDiv)
    const parsedValue = parseInt(st)
    let newcountPrice = numberOmg + parsedValue;
    console.log(newcountPrice)


    let html = '';
    const el = '<span class="price">PRICE: '+ newcountPrice +'</span>'
    html = html + el;
    price.innerHTML = html


  })
}


const minus = document.querySelectorAll('.fa-minus')

for(let m of minus){
      m.addEventListener('click', function(){
    const thisBtn = this;
    const cat = thisBtn.closest("div")
    console.log(cat)
    let number = cat.querySelector('.inputAmount')
    let read = number.getAttribute("value")
    let numbro = parseInt(read);

    let newAmount = numbro - 1;
    if(newAmount>0){
    number.setAttribute("value", newAmount);
    const cartDiv = thisBtn.closest(".card-body");
    let price = cartDiv.querySelector("p")
    let currentPrice = price.innerText
    let omg = currentPrice.replace("PRICE: ", "")
    let numberOmg = parseInt(omg)
    console.log(omg)
    const st = cartDiv.getAttribute("id")
    console.log(cartDiv)
    const parsedValue = parseInt(st)
    let newcountPrice = numberOmg - parsedValue;
    console.log(newcountPrice)
    let html = '';
    const el = '<span class="price">PRICE: '+ newcountPrice +'</span>'
    html = html + el;
    price.innerHTML = html
    }
  })}


const submitBTN = document.querySelectorAll(".add")

for(let subBtn of submitBTN){
  subBtn.addEventListener("click", function(){
    const thisPrice = this;
    const sumEl = document.querySelector(".cart__order-price-sum");
    const totalAllIn = document.getElementById("1")
    const deliveryPr = document.querySelector(".deliv");
    const total = document.querySelector(".sum");
    let html = ''
    const cartDiv = thisPrice.closest(".card-body");
    let price = cartDiv.querySelector("p")
    let currentPrice = price.innerText
    let omg = currentPrice.replace("PRICE: ", "")
    let numberOmg = parseInt(omg)
    console.log(omg)
    const el = '<span class="price"> '+ numberOmg +'</span>'
    html = html + el;
    sumEl.innerHTML = html
    deliveryPr.innerHTML = 20;
    let allTogether = 20 + numberOmg
    total.innerHTML = allTogether;
    totalAllIn.innerHTML = allTogether;

    const cat = thisPrice.closest("div")
    console.log(cat)
    let number = cat.querySelector('.inputAmount')
    let read = number.getAttribute("value")
    const amountInCart = document.querySelector(".cart__total-number")
amountInCart.innerHTML = read
  })
}

