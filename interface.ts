// bütün değerleri vermek zorundaysak interface kullanılır. Alttaki save fonksiyonu
interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

// bütün değerleri vermek zorunda değilsek class kullanılır. Alttaki save2 fonksiyonu
class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product:Product){
    console.log(product.name + "kaydedildi!")
}

function save2(product:Product2){
    console.log(product.name + "kaydedildi!")
}

save({id:1, name:"laptop ", unitPrice:10})

let mouse = new Product2()
mouse.name = "ATech "

save2(mouse)

interface PersonService {
    save()
}

class CustomerService implements PersonService{
    save() {
        throw new Error("Method not impelented")
    }
}