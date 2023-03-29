"use strict";
//diğer sayfalarda yazdıklarımızı kullanacağımız yer
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getById(3);
var p = new Product_1.Product();
p.id = 2; //idsi yoksa yeni ürün ekleme varsa güncelleme 
p.name = "Samsung";
p.price = 4000;
p.category = "Telefon";
_productService.saveProduct(p);
//_productService.deleteProduct(result);  //yukarda çağırdığımız 3 nolu ürünü siler
result = _productService.getProducts(); //eklendikten sonra ürünleri getirir
console.log(result);
