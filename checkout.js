const storedData = JSON.parse(localStorage.getItem('addedProducts'))
console.log(storedData);

const div = document.querySelector('#div');
function renderData() {
    div.innerHTML = '';
    storedData.map((item,index)=>{
        div.innerHTML += `
        <div class="card" style="width: 12rem;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.price}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary"><button>+</button> <span>1</span> <button>-</button></h6>
              <p class="card-text">${item.description}</p>
              <a href="#" class="card-link">Add to Cart</a>
            </div>
          </div>
        `
    })
}

console.log(10%3);
console.log(5 * "3");
console.log(typeof(null));
console.log(3 == "3");
console.log(typeof NaN);
console.log(Math.max(10, 20, 30));
console.log("JavaScript".charAt(3));
console.log(Math.floor(5.8));
console.log();
Boolean(10 > 9);
console.log(Boolean(10 > 9));