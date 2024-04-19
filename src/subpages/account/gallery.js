function cb(x){
    $('.element').css({'background-image':($(x).css('background-image'))});
}

function rest(){
    $('.element').css({'background':'blue'});
}



const products = [
    {
      id: 1, 
      name: 'Pencil', 
      attributes: {
        material: 'wood/graphite',
      }, 
    },
    {
      id: 2, 
      name: 'Pen', 
      attributes: {
        material: 'metal/plastic',
      },
    },
  ];

  const ordersAPI = JSON.stringify(products)
  console.log(ordersAPI)

  function printHeart(event){
event.preventDefault();
const thisPic = this;
thisPic.classList.toggle('a');
const here = thisPic.querySelector('.heart')
here.innerHTML = '<div id="k"><i class="fa-solid fa-heart"></i></div>'
const hey = document.getElementById("k");
hey.classList.remove('j')
  }

  const pics = document.querySelectorAll('.element')
  for(let pi of pics){
    pi.addEventListener('click', printHeart)
  }
