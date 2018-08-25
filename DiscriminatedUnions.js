function Result(shape) {
    return shape.kind === 'square' ?
        Math.pow(shape.size, 2) : shape.height * shape.width;
}