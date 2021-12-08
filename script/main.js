import {carsRus} from "./carsRus.js"
import { getOrders } from "./database.js"


const mainCotainer=document.querySelector("#container")
const renderAllHtML=()=>{
mainCotainer.innerHTML=carsRus()

}
document.addEventListener("state changed",renderAllHtML)
renderAllHtML()