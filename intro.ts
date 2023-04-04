// sona ";" zorunlu değil
function selamVer(isim:string){
    return "Merhaba " + isim 
}

let mesaj = selamVer("Nasuh Eren")

console.log(mesaj)

// değişken tanımlama
let sayi : number = 11
sayi = 10
sayi = 10.4

let sehir : string = "Artvin"
sehir = "İstanbul"
sehir = "Yalova"

let dogruMu : boolean = true
dogruMu = false
dogruMu = true

let sayilar : number[] = [1,2,3]
// generic tipler
let sayilar2 : Array<number> = [1,2,3] // aynı anlama geliyor

let sehirler : string[] = ["Artvin","İstanbul","Yalova"]
// generic tipler
let sehirler2 : Array<string> = ["Artvin","İstanbul","Yalova"] // aynı anlama geliyor

// tuple
// sadece 1 tane number, 1 tane de string değeri alabilir
let dizi : [number,string] = [2,"Ankara"]
dizi[0] // number
dizi[1] // string

// enum
enum Renk{Kirmizi=1,Siyah,Mavi} // 1 başlangıç değeridir.
let renk : Renk = Renk.Mavi

// any
let deger : any = "Ankara"
deger = 2
deger = {
    name: "John",
    age: 30,
    isStudent: false
}

// void birşey döndürmemek için kullanılır
let deger2 : void = undefined
 
function selamVer2():void{
    console.log("Merhaba")
}

// undefined null
let yas : number // undefined
yas = 10 // undefined değil

class Musteri{

}
