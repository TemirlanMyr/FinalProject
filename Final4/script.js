function fetchData(){
  fetch("https://my-json-server.typicode.com/TemirlanMyr/Moca/cars").then(response =>{
   
   if(!response.ok){
     throw Error("ERROR");
   }
   return response.json();
  })
  .then(data => {
    console.log(data);
    const html=data.map(car => {
      return '<div class="car"> <p>Id:'+car.id+'<p>Model:'+car.model+'<p><img class="img1" src="'+car.image+'" alt="'+car.model+'"/></p> <p>Price:'+car.price+'</p> </div>'
      
    }).join("");
    console.log(html);
    document.querySelector('#id1').insertAdjacentHTML("afterbegin", html);
  })
  .catch(error=>{
    console.log(error);
  });
}
fetchData();
function fetchData2(){
  fetch("https://my-json-server.typicode.com/TemirlanMyr/Mono/Bikes").then(response =>{
   
   if(!response.ok){
     throw Error("ERROR");
   }
   return response.json();
  })
  .then(data => {
    console.log(data);
    const html=data.map(bike => {
      return '<div class="bike"> <p>Id:'+bike.id+'<p>Model:'+bike.model+'<p><img class="img1" src="'+bike.image+'" alt="'+bike.model+'"/></p> <p>Price:'+bike.price+'</p> </div>'
      
    }).join("");
    console.log(html);
    document.querySelector('#id2').insertAdjacentHTML("afterbegin", html);
  })
  .catch(error=>{
    console.log(error);
  });
}
fetchData2();
function fetchData3(){
  fetch("https://my-json-server.typicode.com/TemirlanMyr/Ano/Planes").then(response =>{
   
   if(!response.ok){
     throw Error("ERROR");
   }
   return response.json();
  })
  .then(data => {
    console.log(data);
    const html=data.map(plane => {
      return '<div class="plane"> <p>Id:'+plane.id+'<p>Model:'+plane.model+'<p><img class="img1" src="'+plane.image+'" alt="'+plane.model+'"/></p> <p>Price:'+plane.price+'</p> </div>'
      
    }).join("");
    console.log(html);
    document.querySelector('#id3').insertAdjacentHTML("afterbegin", html);
  })
  .catch(error=>{
    console.log(error);
  });
}
fetchData3();