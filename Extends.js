var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.names = name;
    }
    Animal.prototype.setAge = function (age) {
        this.age = age;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.display = function (age) {
        console.log("Name : " + this.names + "  Age : " + age);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Dog1 = new Dog("Hachi");
Dog1.setAge(5);
Dog1.display(Dog1.getAge());
