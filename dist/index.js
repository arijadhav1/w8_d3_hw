"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
function createUser(name, age) {
    return {
        id: myUuid,
        name,
        age,
        cart: []
    };
}
function createItem(name, price, description) {
    return {
        id: myUuid,
        name,
        price,
        description
    };
}
function addCart(item, user) {
    user.cart.push(item.id);
}
function removeFromCart(item, user) {
    while (user.cart.indexOf(item.name) != -1) {
        delete user.cart[user.cart.indexOf(item.name)];
    }
    console.log(user.cart);
}
// Not using code below V
// function removeQuantityFromCart (item:Item, user:User, quantity:number):void {
//     let newArr: string[] = []
//     for (let i = 0; i < user.cart.length; i++) {
//         if (quantity > 0){
//             if (item.name == user.cart[i]) {
//                 continue;
//             } else {
//                 newArr.push()
//             }
//         }
//     }
//     user.cart = newArr
//     console.log(user.cart)
// }
function cartTotal(user, item) {
    let total = 0;
    for (let i = 0; i < user.cart.length; i++) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    for (let i = 0; i < user.cart.length; i++) {
        console.log(user.cart[i]);
    }
}
let user = createUser('Aryan', 22);
let banana = createItem('banana', 1.00, 'this is a banana');
let apple = createItem('apple', 2.00, 'this is an apple');
let grape = createItem('grape', 1.50, 'These are grapes');
addCart(banana, user);
printCart(user);
console.log(cartTotal(user, banana));
addCart(banana, user);
addCart(apple, user);
addCart(grape, user);
printCart(user);
let food = [banana, apple, grape];
let sum = 0;
for (let i = 0; i < user.cart.length; i++) {
    for (let j = 0; j < food.length; j++) {
        if (String(food[j]) == user.cart[i]) {
            sum += food[j].price;
        }
    }
}
console.log(sum);
removeFromCart(banana, user);
printCart(user);
removeFromCart(apple, user);
printCart(user);
removeFromCart(grape, user);
printCart(user);
let food2 = [banana, apple, grape];
let sum2 = 0;
for (let i = 0; i < user.cart.length; i++) {
    for (let j = 0; j < food.length; j++) {
        if (String(food2[j]) == user.cart[i]) {
            sum2 += food2[j].price;
        }
    }
}
console.log(sum2);
