interface Square{
    kind : 'square'; 
    size:number;
}

interface Rectangle{
    kind : 'rectangle';
    width : number;
    height : number;
}

type Area = Square | Rectangle;

function Result(shape:Area):number{
    return shape.kind === 'square'?
        Math.pow(shape.size,2) : shape.height * shape.width;
}