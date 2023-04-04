abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi")
    }
    abstract hesapla():void
}

class TuketiciKredisi extends KrediBase {
    constructor() {
        super() // TuketiciKredisi sınıfı KrediBase sınfının constructor fonksiyonunu çağırmak için kullanılıyor.
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

class KonutKredisi extends KrediBase {
    constructor() {
        super()
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

let tuketiciKredisi = new TuketiciKredisi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let konutKredisi = new KonutKredisi()
konutKredisi.hesapla()
konutKredisi.kaydet()

// KrediBase fonksiyonuna parametre olarak "kredi" verildi
let kredi : KrediBase
// TuketiciKredisi ne parametre olarak "kredi" yollandı
kredi = new TuketiciKredisi()
// KonutKredisi ne parametre olarak "kredi" yollandı
kredi = new KonutKredisi()