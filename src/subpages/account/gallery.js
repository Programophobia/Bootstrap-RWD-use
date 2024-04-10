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