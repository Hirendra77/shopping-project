// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

//chceking user if not exit then redrict to login page
var currUser = JSON.parse(sessionStorage.getItem("Data")); // getting curent Item Obj
if (!currUser) {
    window.location.href = "../login.html";
}

let allshow = document.querySelector('.all');
let menshow = document.querySelector('.allmen');
let womenshow = document.querySelector('.allwomen');
let jewelleryshow = document.querySelector('.alljewellery');
let electronicshow = document.querySelector('.allelectronic');

let cartData = [];

let api = "https://fakestoreapi.com/products";

async function allSearch(){
  // e.preventDefault();
  fetch(api).then((response)=>{
    return response.json();
  }).then((data) => {
    // console.log(data);
    const updateData = data.map(value => {
      return { ...value};
    });
    localStorage.setItem("Product",JSON.stringify(updateData));

    data.map(value => {
      // let show = document.querySelector('.data');
      allshow.style.display = "block";
      menshow.style.display = "none"; 
      womenshow.style.display = "none"; 
      jewelleryshow.style.display = "none"; 
      electronicshow.style.display = "none";

      allshow.style.display = "flex";
      const div = document.createElement('div');
      div.setAttribute('class','div-item');
      const img = document.createElement('img');
      img.setAttribute('src',`${value.image}`);
  
      const nm = document.createElement('p');
      nm.innerText = ` ${value.title} `;
      const category = document.createElement('p');
      category.innerText = `Category : ${value.category}`;
      const money = document.createElement('p');
      money.innerText = `Price : $ ${value.price}`;
  
      
      const rating = document.createElement('p');
      rating.innerText = `Rating : ${value.rating.rate}`;
      const stock = document.createElement('p');
      stock.innerText = `Stock : ${value.rating.count}`;
  
      const newBtn = document.createElement('button');
      newBtn.setAttribute('class','addCart');
      newBtn.innerText = "Add Cart";

      newBtn.addEventListener("click", function() {
        // addItem();
        let obj = {};
        showData.map(data => {
          obj.id = data.id;
          obj.title = data.title;
          obj.price = data.price;
          obj.category = data.category;
          obj.image = data.image;
          obj.rating = data.rating;
          obj.description = data.description;
          
        });
        cartData.push(obj);
        console.log("Data",cartData);
      });
      

      div.append(img,nm,category,money,rating,stock,newBtn);
      allshow.append(div);


    })
  
  });
}

allSearch();//page load show data..


let all = document.querySelector('#all');
all.addEventListener('click',allData);


let men = document.querySelector('#men');
men.addEventListener('click',menData);

let women = document.querySelector('#women');
women.addEventListener('click',womenData);

let jewellery = document.querySelector('#jewellery');
jewellery.addEventListener('click',jewelleryData);


let electronic = document.querySelector('#electronics');
electronic.addEventListener('click',electronicData);


//get data after page load
let showData = JSON.parse(localStorage.getItem("Product"));
console.log("Data",showData);


let addcart ;
// when click all search
function allData(){
  allshow.style.display = "block";
  menshow.style.display = "none"; 
  womenshow.style.display = "none"; 
  jewelleryshow.style.display = "none"; 
  electronicshow.style.display = "none";

  allshow.style.display = "flex";
  
  console.log("inside all");
  for(let value of showData){

    const div = document.createElement('div');
    div.setAttribute('class','div-item');
    const img = document.createElement('img');
    img.setAttribute('src',`${value.image}`);

    const nm = document.createElement('p');
    nm.innerText = ` ${value.title} `;
    const category = document.createElement('p');
    category.innerText = `Category : ${value.category}`;
    const money = document.createElement('p');
    money.innerText = `Price : $ ${value.price}`;

    
    const rating = document.createElement('p');
    rating.innerText = `Rating : ${value.rating.rate}`;
    const stock = document.createElement('p');
    stock.innerText = `Stock : ${value.rating.count}`;

    const newBtn = document.createElement('button');
    newBtn.setAttribute('class','addCart');
    newBtn.innerText = "Add Cart";

    div.append(img,nm,category,money,rating,stock,newBtn);
    allshow.append(div);
    // addcart = document.querySelector('.addCart');
    // addcart.addEventListener('click',addItem);
  }
}


// when click men
function menData(){
  console.log("inside men");
      allshow.style.display = "none";
      menshow.style.display = "block"; 
      womenshow.style.display = "none"; 
      jewelleryshow.style.display = "none"; 
      electronicshow.style.display = "none";

      menshow.style.display = "flex";
  for(let value of showData){
    if(value.category === "men's clothing"){
      let show = document.querySelector('.data');
      const div = document.createElement('div');
      div.setAttribute('class','div-item');
      const img = document.createElement('img');
      img.setAttribute('src',`${value.image}`);

      const nm = document.createElement('p');
      nm.innerText = ` ${value.title} `;
      const category = document.createElement('p');
      category.innerText = `Category : ${value.category}`;
      const money = document.createElement('p');
      money.innerText = `Price : $ ${value.price}`;

      
      const rating = document.createElement('p');
      rating.innerText = `Rating : ${value.rating.rate}`;
      const stock = document.createElement('p');
      stock.innerText = `Stock : ${value.rating.count}`;

      const newBtn = document.createElement('button');
      newBtn.setAttribute('class','addCart');
      newBtn.innerText = "Add Cart";

      div.append(img,nm,category,money,rating,stock,newBtn);
      menshow.append(div);
      addcart = document.querySelector('.addCart');
    }
  }
}

// when click women 

function womenData(){
  console.log("inside women");
      allshow.style.display = "none";
      menshow.style.display = "none"; 
      womenshow.style.display = "block"; 
      jewelleryshow.style.display = "none"; 
      electronicshow.style.display = "none";

      womenshow.style.display = "flex";
  for(let value of showData){
    if(value.category === "women's clothing"){
      let show = document.querySelector('.data');
      const div = document.createElement('div');
      div.setAttribute('class','div-item');
      const img = document.createElement('img');
      img.setAttribute('src',`${value.image}`);

      const nm = document.createElement('p');
      nm.innerText = ` ${value.title} `;
      const category = document.createElement('p');
      category.innerText = `Category : ${value.category}`;
      const money = document.createElement('p');
      money.innerText = `Price : $ ${value.price}`;

      
      const rating = document.createElement('p');
      rating.innerText = `Rating : ${value.rating.rate}`;
      const stock = document.createElement('p');
      stock.innerText = `Stock : ${value.rating.count}`;

      const newBtn = document.createElement('button');
      newBtn.setAttribute('class','addCart');
      newBtn.innerText = "Add Cart";

      div.append(img,nm,category,money,rating,stock,newBtn);
      womenshow.append(div);
      addcart = document.querySelector('.addCart');
    }
  }
}

// when click jewellery
function jewelleryData(){
  console.log("inside jewellery");
      allshow.style.display = "none";
      menshow.style.display = "none"; 
      womenshow.style.display = "none"; 
      jewelleryshow.style.display = "block"; 
      electronicshow.style.display = "none";

      jewelleryshow.style.display = "flex";
  for(let value of showData){
    if(value.category === "jewelery"){
      let show = document.querySelector('.data');
      const div = document.createElement('div');
      div.setAttribute('class','div-item');
      const img = document.createElement('img');
      img.setAttribute('src',`${value.image}`);

      const nm = document.createElement('p');
      nm.innerText = ` ${value.title} `;
      const category = document.createElement('p');
      category.innerText = `Category : ${value.category}`;
      const money = document.createElement('p');
      money.innerText = `Price : $ ${value.price}`;

      
      const rating = document.createElement('p');
      rating.innerText = `Rating : ${value.rating.rate}`;
      const stock = document.createElement('p');
      stock.innerText = `Stock : ${value.rating.count}`;

      const newBtn = document.createElement('button');
      newBtn.setAttribute('class','addCart');
      newBtn.innerText = "Add Cart";

      div.append(img,nm,category,money,rating,stock,newBtn);
      jewelleryshow.append(div);
      addcart = document.querySelector('.addCart');
    }
  }
}


//when click electronics

function electronicData(){
  console.log("inside electronic");
      allshow.style.display = "none";
      menshow.style.display = "none"; 
      womenshow.style.display = "none"; 
      jewelleryshow.style.display = "none"; 
      electronicshow.style.display = "block";

      electronicshow.style.display = "flex";

  for(let value of showData){
    if(value.category === "electronics"){
      let show = document.querySelector('.data');
      const div = document.createElement('div');
      div.setAttribute('class','div-item');
      const img = document.createElement('img');
      img.setAttribute('src',`${value.image}`);

      const nm = document.createElement('p');
      nm.innerText = ` ${value.title} `;
      const category = document.createElement('p');
      category.innerText = `Category : ${value.category}`;
      const money = document.createElement('p');
      money.innerText = `Price : $ ${value.price}`;

      
      const rating = document.createElement('p');
      rating.innerText = `Rating : ${value.rating.rate}`;
      const stock = document.createElement('p');
      stock.innerText = `Stock : ${value.rating.count}`;

      const newBtn = document.createElement('button');
      newBtn.setAttribute('class','addCart');
      newBtn.innerText = "Add Cart";

      div.append(img,nm,category,money,rating,stock,newBtn);
      electronicshow.append(div);
      addcart = document.querySelector('.addCart');
    }
  }
}



// addcart.addEventListener('click',addItem);

// let cartData = [];
// function addItem(){
//   let obj = {};
//   showData.map(data => {
//     obj.id = data.id;
//     obj.title = data.title;
//     obj.price = data.price;
//     obj.category = data.category;
//     obj.image = data.image;
//     obj.rating = data.rating;
//     obj.description = data.description;
    
//   });
//   cartData.push(obj);
//   console.log("Data",cartData);
// }