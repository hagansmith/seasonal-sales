function domProductString (products){
	getCategories(products);
}

	function getCategories (data){
		var categoriesRequest = new XMLHttpRequest();
		categoriesRequest.addEventListener("load", executeCategoriesRequest);
		categoriesRequest.addEventListener("error", executeThisCodeIfFileErrors);
		categoriesRequest.open("GET", "categories.json");
		categoriesRequest.send();

	function executeCategoriesRequest(){
		var categories = JSON.parse(this.responseText).categories;
	combinator(data, categories)
	}
}

function combinator (products, categories){
	products.forEach(function(product){
		var currentProductId = product["category_id"];		
			categories.forEach(function(category){
				if(currentProductId === category.id){
					product["category_name"] = category.name;
					product["season"] = category.season_discount;
					product["discount"] = category.discount;
					product["finalPrice"] = product.price - (product.price * product.discount);
				} 		
		});	
	});
domproductString(products);
};
var productsContainer = document.getElementById('products');
function domproductString(products) {
	var productString = '';
		for (var i = 0; i < products.length; i ++){
			var string = "";
			string += `<div class="products col-sm-2 text-center" name ='${products[i].name}' id="${products[i].category_id}">`
			string += 	`<p>${(products[i].name)}</p>`	
			string +=		`<p>Department: ${(products[i].category_name)}</p>`
			string += 	`<p id='price-${[i]}'>Price: ${(products[i].price)}</p>`
			string += 	`<p id='finalPrice-${[i]}' class="hidden redText">Discounted Price: ${(products[i].finalPrice).toFixed(2)	}</p>`
			string +=	`</div>`
			productString += string;
		}
	writeToDom(productString);
};
	
function writeToDom(string){
	productsContainer.innerHTML = string;
}

var discount = document.getElementById('season_discount');
discount.addEventListener("change", changeEvent);
function changeEvent(e) {
var products = document.getElementsByClassName('products');
 
	 for (var x = 0; x < products.length; x++){
		 var originalPrice = document.getElementById(`price-${[x]}`);
		 if (`${e.target.selectedIndex}` === products[x].id){
		 	 products[x].classList.add('border-red');
		 	 products[x].lastChild.classList.remove('hidden');
		 	 originalPrice.classList.add('hidden'); 
		 } else if (`${e.target.selectedIndex}` !== products[x].id) {
		 	 	products[x].classList.remove('border-red');
		 	 	products[x].lastChild.classList.add('hidden');
		 	 	originalPrice.classList.remove('hidden');
		 }
	}
}

// ---- XHR Request ---- //
function executeProductsRequest(){
	var products = JSON.parse(this.responseText).products;
	domProductString(products);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit Broke");
}

var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", executeProductsRequest);
productsRequest.addEventListener("error", executeThisCodeIfFileErrors);
productsRequest.open("GET", "products.json");
productsRequest.send();

