

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


const submitB = document.getElementById("3")

    submitB.addEventListener("click", function(){
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
  