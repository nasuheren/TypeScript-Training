class Ev{
    _odaSayisi:number // önünde default olarak public var. --> public _odaSayisi:number şeklinde. public sayesinde dışarıdanda erişim sağlanabiliyor.
    private _pencereSayisi:number
    _kat:number
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi
        this._kat = kat
        this._pencereSayisi = pencereSayisi
    }
    yemekYe(){ // class içerisindeki fonksiyon
        console.log(this._kat + " katlı evde " + "yemek yiyildi")
    }
}

let ev = new Ev(3,4,5)
console.log(ev._kat)
console.log(ev._odaSayisi)
// console.log(ev._pencereSayisi) --> _pencereSayisi buna dışarıdan erişilemiyor çünkü private sadece tanımlandığı class içerisinde geçerlidir. Dışarıdan erişilemez.
ev.yemekYe()


// inheritance
class Kisi{
    protected _isim:string

    // private değer get ve set ile class dışında da kullanılabilir hale geliyor.
    // get ve set aynı isimde olmalı.
    private _soyisim:string

    get soyisim():string{
        return "Sayın: " + this._soyisim
    }

    set soyisim(soyad:string){
        this._soyisim = soyad
    } 


    kaydet(){
        console.log("Kişi kaydedildi")
    }    
}

class Musteri extends Kisi{
    satisYap(){
        this._isim // protected key li. protected key private ile aynı özelliklere sahip sadece inherit edildiği classta kullanılmasını sağlar.
        // this.soyisim --> private key li
        console.log("Satış yapıldı")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi")
    }
}

let kisi = new Kisi()
kisi.kaydet()

let musteri = new Musteri()
// alttaki 2 satır get ve set için
musteri.soyisim = "Demirci"
console.log(musteri.soyisim)

musteri.soyisim
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()