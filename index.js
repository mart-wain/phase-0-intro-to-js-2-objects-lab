// Write your solution in this file!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name) {
    return[...cats, name];
}
function prependCat(name) {
    return[name, ...cats];
}
function removeFirstCat(name) {
    return cats.slice(1);
}
function removeLastCat(name){
    return cats.slice(0,cats.length-1)
}