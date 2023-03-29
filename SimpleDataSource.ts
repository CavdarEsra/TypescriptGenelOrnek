//veritabanımız yok diyelim burdan ProductService e veri göndericez

import { Product } from "./Product";

export class SimleDataSource{
    private products : Array<Product>;  //ürünler dizisi oluşturduk 

    constructor(){
        this.products = new Array <Product>(  //burada içini doldurucaz
            new Product(1, "SamsungS5", "Telefon" ,1000),
            new Product(2, "SamsungS6", "Telefon" ,2000),
            new Product(3, "SamsungS7", "Telefon" ,3000),
            new Product(4, "SamsungS8", "Telefon" ,4000),
            new Product(5, "SamsungS9", "Telefon" ,5000)
        );
    }
    getProducts():Product[] {  //products private tanımlandığı için dışardan erişimi yok. SimleDataSource üzerinden getProducts diyerek private üyeye erişiriz
        return this.products;
    }
}
//let p=new SimleDataSource();   //SimpleDataSource'dan bir örnek oluşturmak istediğimiz anda constructor çalışır ve constructor içinde tanımlı olan products içerisine liste atanacak