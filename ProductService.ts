//Burası IProductServisi kullanacak sayfamız yani içlerini doldurcak
//IProductService'den implement ettik buraya da gelen methodların içlerini veritabanı vs sorgularıyla doldurabiliriz. 
//veritabanı değişse de sadece methodların içine yazılan sorgu syntaxı değişir

import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimleDataSource } from "./SimpleDataSource";


export class ProductService  implements IProductService{

    private dataSource : SimleDataSource;
    private products : Array<Product>;

    constructor(){
        
        this.dataSource= new SimleDataSource();   //SimleDataSource'dan gelecek liste products içine aktarılır
        this.products = new Array<Product>(); //products ı doldurmak için dizi oluşturduk
        this.dataSource.getProducts().forEach(p => this.products.push(p)); //SimpleDataSource'daki tüm elemanları ProductService içindeki products dizine attık

    }

    getById(id: number): Product {
        return this.products.filter(p=> p.id === id)[0];  //yukardan gönderdiğimiz id'ye karşılık gelen ilk elemanı aldık
    }
    getProducts(): Product[] {
        return this.products;  //tüm ürün listesi gelir
    }
    saveProduct(product: Product) : void {
        if(product.id == 0 || product.id == null){  //yeni eklenecek ürünün ıd si yoktur.  generateId ıd üretir burada kullanırız
            product.id=this.generateId();
            this.products.push(product);
        }
        else{  //ürünün idsi varsa indexini alır liste içinde var mı diye kontrol eder
            let index;
            for(let i=0; i<this.products.length; i++){
                if(this.products[i].id === product.id)   //o anki ulaştığımız i. elemanın idsi ile methoda gönderdiğimiz product id birbirine eşitse aradığımız ürün i nolu ürün demek
                index=i;
            }  
            this.products.splice(index, 1 , product);   //index listede varsa bulunduğu konumdan itibaren 1 ürün siler yerine productı ekler. yani güncellenir
        }
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product);  
        if(index>0){  //silmek istediğimiz ürün liste üzerinde var demek
            this.products.splice(index, 1); //verilen indexten itibaren 1 ürün siler
        }
    }

    //Bu oluşturduğumuz yardımcı method o anki ıd yi 1 arttırır. 4 ürün varsa yeni gelenin ıd si 5 olur gibi
    private generateId(): number{
        let key=1;
        while(this.getById(key) != null){
            key++;
        }
        return key;
    }

}
