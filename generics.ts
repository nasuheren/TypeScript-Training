function deger(x: number): number {
  return x;
}

function deger2(x: string): string {
  return x;
}

let sayi = deger(10);
console.log(sayi);

let sehir = deger2("Yalova");
console.log(sehir);

// genericler
// değer tiplerini fonksiyonda başta vermedik onun yerine değer ataması yaparken tipleri belirittik,
// bu sayede bir fonksiyon için farklı tipteki değerler için atama yapabiliyoruz
// T = Type
function deger3<T>(x:T):T{
    return x
}

let sayi3 = deger3<number>(2)
let sehir3 = deger3<string>("İstanbul")

class GenericClass<T>{
    degisken:T
    fonksiyon(parametre:T):T{
        // this.degisken = parametre
        return parametre
    }
}

let sinif = new GenericClass<string>()
sinif.fonksiyon("Yalova")