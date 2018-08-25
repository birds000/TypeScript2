var Color;
(function (Color) {
    Color[Color["rad"] = 1] = "rad";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
console.log(Color.rad);
