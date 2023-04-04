// bütün değerleri vermek zorunda değilsek class kullanılır. Alttaki save2 fonksiyonu
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + "kaydedildi!");
}
function save2(product) {
    console.log(product.name + "kaydedildi!");
}
save({ id: 1, name: "laptop ", unitPrice: 10 });
var mouse = new Product2();
mouse.name = "ATech ";
save2(mouse);
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
        throw new Error("Method not impelented");
    };
    return CustomerService;
}());
