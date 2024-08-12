const inputPrice = document.querySelector('#input-price');
const inputDesc = document.querySelector('#input-desc');
const inputTitle = document.querySelector('#input-title');
const div = document.querySelector('#div');
const form = document.querySelector('#form');
const titleRegex = /^[a-zA-Z0-9 ]{3,50}$/;
const descriptionRegex = /^[a-zA-Z0-9.,!?\s]{5,200}$/;
const priceRegex = /^(0|[1-9]\d*)(\.\d{2})?$/;
const arr = [];

function addData() {
    arr.push({
        title: inputTitle.value,
        description: inputDesc.value,
        price: inputPrice.value,
    })
    renderData();
}

function renderData() {
    div.innerHTML = '';
    arr.map((item,index) =>{
        div.innerHTML += `
        <div class="card" style="width: 12rem;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
              <p class="card-text">${item.description}</p>
              <a href="#" class="card-link" onclick="addToCart(${index})">Add to Cart</a>
            </div>
          </div>
        `
    })
}

const addedProducts = [];
function addToCart(index) {
    addedProducts.push(arr[index])
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
}

function goToCart() {
    window.location = 'checkout.html';
}