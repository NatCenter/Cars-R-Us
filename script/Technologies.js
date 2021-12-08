import { getTechnologies,setTechnologies } from "./database.js";

const techs=getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
           
            setTechnologies(parseInt(changeEvent.target.value))
             // "1" or "2"
        }
    }
)



export const TechnologyRate=()=>{
    let html ="<div> <h2> Technology</h2>"
        html +='<select id=tech>'
        html += '<option value="0">Select a technology package</option>'
        const arrayofOptions= techs.map((tech )=>{
            return `<option value=${tech.id}>${tech.package} ${tech.price.toFixed(2)}</option>`

        })
        html += arrayofOptions.join("")
        html+="</select> </div>"
    return html
}