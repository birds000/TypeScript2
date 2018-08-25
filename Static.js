var Square = /** @class */ (function () {
    function Square() {
    }
    Square.SumSqure = function () {
        Square.sum = Square.weght * Square.hight;
        console.log("Weght : " + Square.SumSqure + " X  Hight : " + Square.hight + "  = " + Square.sum);
    };
    Square.sum = 0;
    return Square;
}());
console.log(Square.SumSqure());
