var Circle = /** @class */ (function () {
    function Circle(radlus) {
        this.radlus = radlus;
    }
    Circle.prototype.log = function () {
        console.log('Circle');
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radlus, 2);
    };
    return Circle;
}());
var Circle1 = new Circle(10);
var Circle2 = new Circle(10);
console.log(Circle1.getArea);
console.log(Circle1.log);
// UnoinType
