var productsContainer = document.getElementById('products');
var discount = document.getElementById('season_discount');

// ----  Categories to DOM ---- //

function discountString(cat){
	var categoriesString = "";
		for (var i = 0; i < cat.length; i ++){
			var catString = "";
			catString +=	`<option class ="options" value="${cat[i].discount}" name="${cat[i].name}" id="category-${cat[i].id}">${cat[i].season_discount}</option>`
			categoriesString += catString;
	}
	writeValue(categoriesString);
}

function writeValue (cats) {
	discount.innerHTML = cats;
}

// ---- Event Listener for Select ---- //
discount.addEventListener("change", changeEventHandler);
// document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('select[id="season_discount"]').onchange=changeEventHandler;
// },false);

function changeEventHandler(event) {
 	console.log(discount.value);
// 	// if (){};  
 }


function executeThisCodeAfterFileLoads1(){
	var data = JSON.parse(this.responseText);
	discountString(data.categories);
}

// ----  Products to DOM ---- //

function domproductString(products) {
	var productString = "";
		for (var i = 0; i < products.length; i ++){
			var string = "";
			string += `<div class="products" id = '${products[i].name}'>`
			string += 	`<p>Product:${products[i].name}</p>`
			string += 	`<p>Price:${products[i].price}</p>`
			string +=	`</div>`
			productString += string;
		}
	writeToDom(productString);
}

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

// ---- JSON GET Requests ---- //

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