function addHoverEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const imgContainer = card.querySelector('.position-absolute');
      card.addEventListener('mouseover', () => {
        imgContainer.classList.add('z-2');
      });
      card.addEventListener('mouseleave', () => {
        imgContainer.classList.remove('z-2');
      });
    });
  }
  
  addHoverEffect();
  


// 1st Product 

const addButton1 = document.querySelector('#addedBtn-1');
const subtractButton1 = document.querySelector('#subtractBtn-1');
const addedProduct1 = document.getElementById('addedProduct-1');
const productRate1 = document.getElementById('product-rate1');


addButton1.addEventListener('click', incrementProduct);
subtractButton1.addEventListener('click', decrementProduct);

function incrementProduct() {
    let currentValue = parseFloat(addedProduct1.textContent);
    let currentAmount = parseFloat(productRate1.textContent);
  if (currentValue >= 0 && currentValue < 5) {
    addedProduct1.textContent = currentValue + 1;
    productRate1.textContent = parseFloat(currentAmount) + 50;

  }else{
    alert("You can't add more than 5 from the product at once");
    addedProduct1.textContent = 1;
    productRate1.textContent = 50;
  }
}

function decrementProduct() {
  let currentValue = parseInt(addedProduct1.textContent);
  let currentAmount = parseInt(productRate1.textContent);
  if (currentValue > 0) {
    addedProduct1.textContent = currentValue - 1;
    productRate1.textContent = currentAmount - 50;
  }
}


// 2nd Product

const addButton2 = document.querySelector('#addedBtn-2');
const subtractButton2 = document.querySelector('#subtractBtn-2');
const addedProduct2 = document.getElementById('addedProduct-2');
const productRate2 = document.getElementById('product-rate2');

addButton2.addEventListener('click', incrementProduct2);
subtractButton2.addEventListener('click', decrementProduct2);

function incrementProduct2() {
  let currentValue2 = parseInt(addedProduct2.textContent);
  let currentAmount2 = parseFloat(productRate2.textContent);
  if (currentValue2 >= 0 && currentValue2 < 5) {
    addedProduct2.textContent = currentValue2 + 1;
    productRate2.textContent = currentAmount2 + 60;
  }else{
    alert("You can't add more than 5 from the product at once");
    addedProduct2.textContent = 1;
    productRate2.textContent = 60;
  }
}

function decrementProduct2() {
    let currentValue2 = parseInt(addedProduct2.textContent);
    let currentAmount2 = parseInt(productRate2.textContent);
    if (currentValue2 > 0) {
      addedProduct2.textContent = currentValue2 - 1;
      productRate2.textContent -= currentAmount2;
    }
}
  
// 3rd Product

const addButton3 = document.querySelector('#addedBtn-3');
const subtractButton3 = document.querySelector('#subtractBtn-3');
const addedProduct3 = document.getElementById('addedProduct-3');
const productRate3 = document.getElementById('product-rate3');

addButton3.addEventListener('click', incrementProduct3);
subtractButton3.addEventListener('click', decrementProduct3);

function incrementProduct3() {
  let currentValue3 = parseFloat(addedProduct3.textContent);
  let currentAmount3 = parseFloat(productRate3.textContent);
  if (currentValue3 >= 0 && currentValue3 < 5) {
    addedProduct3.textContent = currentValue3 + 1;
    productRate3.textContent = parseFloat(currentAmount3) + 50;
  }else{
    alert("You can't add more than 5 from the product at once");
    addedProduct3.textContent = 1;
    productRate3.textContent = 50;
  }
}

function decrementProduct3() {
  let currentValue3 = parseInt(addedProduct3.textContent);
  let currentAmount3 = parseInt(productRate3.textContent);
  if (currentValue3 > 0) {
    addedProduct3.textContent = currentValue3 - 1;
    productRate3.textContent = currentAmount3 - 50;
  }
}

// 4th Product

const addButton4 = document.querySelector('#addedBtn-4');
const subtractButton4 = document.querySelector('#subtractBtn-4');
const addedProduct4 = document.getElementById('addedProduct-4');
const productRate4 = document.getElementById('product-rate4');

addButton4.addEventListener('click', incrementProduct4);
subtractButton4.addEventListener('click', decrementProduct4);

function incrementProduct4() {
  let currentValue4 = parseFloat(addedProduct4.textContent);
  let currentAmount4 = parseFloat(productRate4.textContent);
  if (currentValue4 >= 0 && currentValue4 < 5) {
    addedProduct4.textContent = currentValue4 + 1;
    productRate4.textContent = currentAmount4 + 75;
  } else {
    alert("You can't add more than 5 from the product at once");
    addedProduct4.textContent = 1;
    productRate4.textContent = 75;
  }
}

function decrementProduct4() {
  let currentValue4 = parseInt(addedProduct4.textContent);
  let currentAmount4 = parseInt(productRate4.textContent);
  if (currentValue4 > 0) {
    addedProduct4.textContent = currentValue4 - 1;
    productRate4.textContent = currentAmount4 - 75;
  }
}

// Add cart Function

const cart1 = document.getElementById('product-rate1');
const cart2 = document.getElementById('product-rate2');
const cart3 = document.getElementById('product-rate3');
const cart4 = document.getElementById('product-rate4');


function totalAmount(){
  const total_Amount = document.getElementById('total-Amount')
  total_Amount.innerText = parseFloat(cart1.textContent) + parseFloat(cart2.textContent) + parseFloat(cart3.textContent) + parseFloat(cart4.textContent);
}


const total_value = document.getElementById('total-value');
const total_value2 = document.getElementById('total-value2');
const total_value3 = document.getElementById('total-value3');
const total_value4 = document.getElementById('total-value4');


total_value.addEventListener('click',totalAmount);
total_value2.addEventListener('click',totalAmount);
total_value3.addEventListener('click',totalAmount);
total_value4.addEventListener('click',totalAmount);



total_value.addEventListener('click',checkTotalAmount);
total_value2.addEventListener('click',checkTotalAmount);
total_value3.addEventListener('click',checkTotalAmount);
total_value4.addEventListener('click',checkTotalAmount);




function checkTotalAmount() {
  const totalAmount = document.getElementById("total-Amount").textContent;
  if (totalAmount > 0) {
    document.querySelector('a[href="sucsess.html"]').classList.remove("disabled");
  }
}

