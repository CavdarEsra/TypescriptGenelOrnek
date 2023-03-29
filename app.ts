//diğer sayfalarda yazdıklarımızı kullanacağımız yer

import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let result;
result = _productService.getById(3);

let p = new Product();
p.id=2;  //idsi yoksa yeni ürün ekleme varsa güncelleme 
p.name = "Samsung";
p.price = 4000;
p.category = "Telefon";
_productService.saveProduct(p);  
//_productService.deleteProduct(result);  //yukarda çağırdığımız 3 nolu ürünü siler
result = _productService.getProducts();  //eklendikten sonra ürünleri getirir
 
console.log(result);