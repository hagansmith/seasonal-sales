# seasonal-sales

## Synopsis:

The seasonal sales exercise uses JavaScript with JSON files and XHR calls to write products to the DOM and modify them based on event listeners placed on a selector.

## What to expect:

User can see a listing of all the products and then filter specific products to show discounted prices based on season.

![DEMO](https://github.com/hagansmith/seasonal-sales/blob/master/seasonal%20sales.gif)

## Requirements
Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

The two JSON representations above should be in two files: products.json, and categories.json. You should load both files via XHRs and store the contents in two different JavaScript variables in your code.

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/seasonal-sales.git
cd seasonal-sales
npm install http-server -g
hs -c-1
```
Navigate to: http://localhost:8080
