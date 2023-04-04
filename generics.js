function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Yalova");
console.log(sehir);
// genericler
// değer tiplerini fonksiyonda başta vermedik onun yerine değer ataması yaparken tipleri belirittik,
// bu sayede bir fonksiyon için farklı tipteki değerler için atama yapabiliyoruz
// T = Type
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir3 = deger3("İstanbul");
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        // this.degisken = parametre
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("Yalova");
