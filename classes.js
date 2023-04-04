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
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde " + "yemek yiyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
console.log(ev._kat);
console.log(ev._odaSayisi);
// console.log(ev._pencereSayisi) --> _pencereSayisi buna dışarıdan erişilemiyor çünkü private sadece tanımlandığı class içerisinde geçerlidir. Dışarıdan erişilemez.
ev.yemekYe();
// inheritance
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "soyisim", {
        get: function () {
            return "Sayın: " + this._soyisim;
        },
        set: function (soyad) {
            this._soyisim = soyad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        this._isim; // protected key li. protected key private ile aynı özelliklere sahip sadece inherit edildiği classta kullanılmasını sağlar.
        // this.soyisim --> private key li
        console.log("Satış yapıldı");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş ödendi");
    };
    return Personel;
}(Kisi));
var kisi = new Kisi();
kisi.kaydet();
var musteri = new Musteri();
// alttaki 2 satır get ve set için
musteri.soyisim = "Demirci";
console.log(musteri.soyisim);
musteri.soyisim;
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
