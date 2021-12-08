import { getWheels, setWheels } from "./database.js";

const wheels=getWheels()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
           
            setWheels(parseInt(changeEvent.target.value))
             // "1" or "2"
        }
    }
)

export const wheel=()=>{
    let html =`<div><h2>Wheels</h2>` 
        html +=`<select id="wheels" >`
        html += `<option value="0">The wheels of the car</option>`
        for (const wheel of wheels){
            html += `<option value=${wheel.id}> Color:${wheel.pairColor} Inches: ${wheel.inchs} Price: ${wheel.price.toFixed(2)}</option>`
        }
        html +="</select></div>"
        return html

}