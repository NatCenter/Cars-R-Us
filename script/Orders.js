import { getPaintColors } from "./database.js";

import { getTechnologies } from "./database.js";
import { getWheels } from "./database.js";
import { getOrders } from "./database.js";
import { getInteriors } from "./database.js";
const paints=getPaintColors()
const tech=getTechnologies()
const wheels=getWheels()
const theInteror=getInteriors()

//what is the logic when you click on a drop down
export const Orders=()=>{
    const orders=getOrders()

    let html=""
    if(orders.length>0){
    const orderArray=orders.map((order)=>{
        const paintColor=paints.find((paint)=>paint.id===order.paintId)
        const techPackage=tech.find((tech)=>tech.id===order.technologyId)
        const interor=theInteror.find((interors)=>interors.id===order.interiorId)
        const wheel=wheels.find((wheel)=>wheel.id===order.wheelId)
        const totalPrice=paintColor.price+techPackage.price+interor.price+wheel.price
        const today=new Date()
        const month=today.getMonth()+1
        //const month=today.getMonth()
         html+=`<br> ${paintColor.color} Price:${paintColor.price.toFixed(2)},<br> ${techPackage.package}Price: ${techPackage.price.toFixed(2)}<br>   ${interor.materialColor} Price: ${interor.price.toFixed(2)} <br>Wheels: ${wheel.inchs} inchs <br> Pair:${wheel.pairColor} Price: ${wheel.price.toFixed(2)} <br> Date:${month}/${today.getDate()}/${today.getFullYear()}
               <br> Total Price: ${totalPrice}
         `

  
    })

html+=orderArray.join("")
}          
return html

  
}
