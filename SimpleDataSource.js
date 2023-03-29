"use strict";
//veritabanımız yok diyelim burdan ProductService e veri göndericez
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimleDataSource = void 0;
var Product_1 = require("./Product");
var SimleDataSource = /** @class */ (function () {
    function SimleDataSource() {
        this.products = new Array(//burada içini doldurucaz
        new Product_1.Product(1, "SamsungS5", "Telefon", 1000), new Product_1.Product(2, "SamsungS6", "Telefon", 2000), new Product_1.Product(3, "SamsungS7", "Telefon", 3000), new Product_1.Product(4, "SamsungS8", "Telefon", 4000), new Product_1.Product(5, "SamsungS9", "Telefon", 5000));
    }
    SimleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimleDataSource;
}());
exports.SimleDataSource = SimleDataSource;
//let p=new SimleDataSource();   //SimpleDataSource'dan bir örnek oluşturmak istediğimiz anda constructor çalışır ve constructor içinde tanımlı olan products içerisine liste atanacak
