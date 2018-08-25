function slugify(text) {
    var result;
    if (typeof text === 'string') {
        result = text;
    }
    else {
        result = text.join('');
    }
    return result.toLowerCase().replace(/ /g, '-');
}
console.log(slugify(['Hello', 'World']));
console.log(slugify('bable Coder'));
