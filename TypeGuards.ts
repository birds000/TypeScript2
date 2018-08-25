function slugify(text: string | string[]): string {
    let result: string;

    if (typeof text === 'string') {
        result = text;
    } else {
        result = text.join('');
    }

    return result.toLowerCase().replace(/ /g,'-');
}

console.log(slugify(['Hello', 'World']));
console.log(slugify('Bable Coder'));