//sadece method imzalarımızı tanımladığımız bi sayfa burası
//mysql vs veritabanların hepsinde geçerli olur burası
import { Product } from "./Product";

export interface IProductService {
    getById(id:number):Product;  //id değer alır ve bu değere göre Product döndürür
    getProducts():Array<Product>;  //tüm ürünleri dizi tipinde getirir
    saveProduct(product : Product) : void;  //dışardan product tipinde product alsın geriye bişey döndürmesin
    deleteProduct(product : Product) : void;
}