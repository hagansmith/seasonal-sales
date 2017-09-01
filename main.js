var productsContainer = document.getElementById('products');
var discount = document.getElementById('season_discount');

// ----  Categories to DOM Selector ---- //

function discountString(cat){
	var categoriesString = "";
		for (var i = 0; i < cat.length; i ++){
			var catString = '';
			catString +=	`<option class ="options" value="${cat[i].discount}" name="${cat[i].name}" id="${cat[i].id}">${cat[i].season_discount}</option>`
			categoriesString += catString;
	}
	writeValue(categoriesString);
}

function writeValue (cats) {
	discount.innerHTML += cats;
}

// ---- Event Listener for Select ---- //
discount.addEventListener("change", changeEvent);
var disc = ''
function changeEvent(e) {
	// console.log(e.target.value)
	var originalPrice = document.getElementsByClassName('products'); 
	var priceArray = [];
	for (var x = 0; x < originalPrice.length; x++){
		

		if (originalPrice[x].id === `${e.target.selectedIndex}`){
			var price = document.getElementById(`price-${x}`);
			var newPrice = price.innerHTML.replace( /^\D+/g, '');
			priceArray.push(newPrice);
			disc = parseInt(newPrice) * e.target.value;
			newPrice = newPrice - disc;
			newPrice = newPrice.toFixed(2);
			price.innerHTML += `<p>Discounted Price: ${newPrice}</p>`;
			originalPrice[x].classList.add('border-red');
			// console.log(originalPrice[x].lastChild.innerHTML.replace( /^\D+/g, ''))
		  //} else if (originalPrice[x].lastChild.innerHTML.replace( /^\D+/g, '') !== originalPrice[x].lastChild.lastChild.innerHTML.replace( /^\D+/g, '')) {
		 	//console.log('not equal')
			// price = document.getElementById(`price-${x}`);
			// newPrice = price.innerHTML;
			// price.innerHTML = priceArray[x];
			// originalPrice[x].classList.remove('border-red')
		}
	}
}

// ---- Category Key ---- //

function key(data) {
	var category = ''
	if (data === 1) {
		category = "Apparel";
	} else if (data === 2){
    category = "Furniture";
  } else if (data === 3){
  	category = "Household";   
  }
  return category;
};


function executeThisCodeAfterFileLoads1(){
	var data = JSON.parse(this.responseText);
	discountString(data.categories);
	key(data.categories);
};

// ----  Products to DOM ---- //

function domproductString(products) {
	var productString = '';
		for (var i = 0; i < products.length; i ++){
			var string = "";
			string += `<div class="products" name = '${products[i].name}' id="${products[i].category_id}">`
			string += 	`<p>Product: ${(products[i].name)}</p>`	
			string +=		`<p>Category: ${key(products[i].category_id)}</p>`
			string += 	`<p id='price-${[i]}'>Price: ${(products[i].price)}</p>`
			string +=	`</div>`
			productString += string;
		}
	writeToDom(productString);
	};
	
function writeToDom(string){
	productsContainer.innerHTML = string;
}

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	domproductString(data.products);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit Broke");
}

// ---- XHR Request ---- //

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads1);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "categories.json");
myRequest.send();