import { getPaintColors,setPaintColors} from "./database.js";

const paints=getPaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "Paint") {
            
            setPaintColors(parseInt(changeEvent.target.value))
             // "1" or "2"
        }
    }
)




export const paintColor=()=>{
    let html =`<div >
    <h2>Paint choice</h2>` 
        html +=`<select id="Paint" >`
        html += `<option value="0"> Select the color you want for your car </option>`
        for (const paint of paints){
            html += `<option value=${paint.id}> ${paint.color} Price:${paint.price.toFixed(2)}</option>`
        }
        html +="</select> </div>"
        return html

}