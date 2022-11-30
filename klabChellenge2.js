const item = [ {name: 'Bike', price:100}, 
{name: 'TV', price:200}, {name: 'Album', price:10}, 
{name: 'Book', price:5}, {name: 'Phone', price:500}, 
{name: 'Computer', price:1000}, ]

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
const cheap = Math.min(...item.map(item => item.price));
for(let i = 0; i < item.length; i++){
    if(item[i].price == cheap){
console.log('cheap product is ' + item[i].name + ' with ' + cheap + '$');
    }
}

//2 . Filter and show the product that will be expensive in the array
const expensive = Math.max(...item.map(item => item.price));
for(let i = 0; i < item.length; i++){
if(item[i].price == expensive){
    console.log('expensive product is ' + item[i].name + ' with ' + expensive + '$');
}
}
//3 . Calculate the full price of all product combined

const sum = item.reduce((partialSum, a) => partialSum + a.price , 0);
console.log('full price of all product is ' + sum + '$');

//4 . Calculate the full price of all product combined and remove product that are under the 10 dollar
var sumOf = item.reduce((partialSum, a) => partialSum + (a.price > 10), 0);

console.log('price of all product(>10$) is ' + sumOf + '$');