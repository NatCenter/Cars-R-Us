import { getInteriors,setInteriors } from "./database.js";

const interiors=getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
           
            setInteriors(parseInt(changeEvent.target.value))
             // "1" or "2"
        }
    }
)


export const interior=()=>{
    let html =`<div><h2>interior</h2>` 
        html +=`<select id="interior" >`
        html += `<option value="0"> Select the interior of the car</option>`
        for (const interior of interiors){
            html += `<option value=${interior.id}> ${interior.materialColor} Price: ${interior.price.toFixed(2)}</option>`
        }
        html +="</select></div>"
        return html

}