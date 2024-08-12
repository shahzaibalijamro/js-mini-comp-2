const storedData = JSON.parse(localStorage.getItem('addedProducts'))
const div = document.querySelector('#div');
const totalPrice = document.querySelector('#totalPrice');

if (storedData) {
  renderData();
}

var totalprice = 0;

function renderData() {
    div.innerHTML = '';
    storedData.map((item,index)=>{
      if (!item.quantity) {
        item.quantity = 1;
      }
      const itemPrice = Number(item.price);
      console.log(itemPrice);
      totalprice = itemPrice*item.quantity;
      console.log(totalprice);
      
      // totalPrice.innerHTML = `${(itemPrice)*(item.quantity)}`
        div.innerHTML += `
        <div class="card" style="width: 12rem;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary"><button onclick="increaseQuantity(${index})">+</button> <span>${item.quantity}</span> <button onclick="decreaseQuantity(${index})">-</button></h6>
              <p class="card-text">${item.description}</p>
              <a href="#" class="card-link">Add to Cart</a>
            </div>
          </div>
        `
    })
}


function increaseQuantity(item) {
  if (storedData[item].quantity) {
    storedData[item].quantity += 1;
  }else{
    storedData[item].quantity = 1;
  }
  renderData();
}

function decreaseQuantity(item) {
  if (storedData[item].quantity > 0) {
    storedData[item].quantity -= 1;
  }else{
    storedData[item].quantity = 0;
  }
  renderData();
}