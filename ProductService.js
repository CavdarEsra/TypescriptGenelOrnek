"use strict";
//Burası IProductServisi kullanacak sayfamız yani içlerini doldurcak
//IProductService'den implement ettik buraya da gelen methodların içlerini veritabanı vs sorgularıyla doldurabiliriz. 
//veritabanı değişse de sadece methodların içine yazılan sorgu syntaxı değişir
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimleDataSource(); //SimleDataSource'dan gelecek liste products içine aktarılır
        this.products = new Array(); //products ı doldurmak için dizi oluşturduk
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); //SimpleDataSource'daki tüm elemanları ProductService içindeki products dizine attık
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //yukardan gönderdiğimiz id'ye karşılık gelen ilk elemanı aldık
    };
    ProductService.prototype.getProducts = function () {
        return this.products; //tüm ürün listesi gelir
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { //yeni eklenecek ürünün ıd si yoktur.  generateId ıd üretir burada kullanırız
            product.id = this.generateId();
            this.products.push(product);
        }
        else { //ürünün idsi varsa indexini alır liste içinde var mı diye kontrol eder
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) //o anki ulaştığımız i. elemanın idsi ile methoda gönderdiğimiz product id birbirine eşitse aradığımız ürün i nolu ürün demek
                    index = i;
            }
            this.products.splice(index, 1, product); //index listede varsa bulunduğu konumdan itibaren 1 ürün siler yerine productı ekler. yani güncellenir
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) { //silmek istediğimiz ürün liste üzerinde var demek
            this.products.splice(index, 1); //verilen indexten itibaren 1 ürün siler
        }
    };
    //Bu oluşturduğumuz yardımcı method o anki ıd yi 1 arttırır. 4 ürün varsa yeni gelenin ıd si 5 olur gibi
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
