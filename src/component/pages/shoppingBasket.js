import React, { useEffect, useState } from "react";


let items = ["biscuits", "apple", "Oranges", "banana", "pineapple"];
let boughtItem = {item:items};
let shoppingBasket = [];

function SantaLuciaBasket(){
    items.map(() => {
let loadedBasket =  shoppingBasket.push(boughtItem);

console.log(loadedBasket);
    })
    return (<>

    </>
    )
}

export default SantaLuciaBasket();