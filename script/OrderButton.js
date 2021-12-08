import { addCustomerOrder } from "./database.js";

document.addEventListener("click",(event)=>{
    if (event.target.id ==="orderSumbitBtn"){
        addCustomerOrder()
        console.log("button clicked")

    }
    

})

export const OrderButton=()=>'<button id ="orderSumbitBtn">Submit Order</button>'

