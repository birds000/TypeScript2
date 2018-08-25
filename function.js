function ShowText() {
    console.log("Your Massege");
}
function MyProduct1(name, price, amount) {
    console.log("Name : " + name + "  Amount : " + amount + "  Price : " + price);
}
MyProduct1("Mile", 2000, 1);
console.log("------------optinal paramiters---------------");
// optinal paramiters
function MyProduct2(name, price, amount) {
    console.log("Name : " + name + "  Price : " + price);
    if (amount != undefined) {
        console.log("  Amount : " + amount);
    }
}
MyProduct2("Mile", 2000);
console.log("------------Rest Paramiters---------------");
// Rest Paramiters
function SumNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum : " + sum);
}
SumNumber(2, 4, 6, 8, 10);
SumNumber(1, 2, 3);
