var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredisi = /** @class */ (function (_super) {
    __extends(TuketiciKredisi, _super);
    function TuketiciKredisi() {
        return _super.call(this) || this; // TuketiciKredisi sınıfı KrediBase sınfının constructor fonksiyonunu çağırmak için kullanılıyor.
    }
    TuketiciKredisi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredisi;
}(KrediBase));
var KonutKredisi = /** @class */ (function (_super) {
    __extends(KonutKredisi, _super);
    function KonutKredisi() {
        return _super.call(this) || this;
    }
    KonutKredisi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı");
    };
    return KonutKredisi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
var konutKredisi = new KonutKredisi();
konutKredisi.hesapla();
konutKredisi.kaydet();
// KrediBase fonksiyonuna parametre olarak "kredi" verildi
var kredi;
// TuketiciKredisi ne parametre olarak "kredi" yollandı
kredi = new TuketiciKredisi();
// KonutKredisi ne parametre olarak "kredi" yollandı
kredi = new KonutKredisi();
