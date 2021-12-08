import { paintColor } from "./paintColor.js";
import {TechnologyRate} from "./Technologies.js"
import { interior } from "./Interiors.js";
import { wheel } from "./Wheels.js";
import{Orders} from "./Orders.js"
import { OrderButton } from "./OrderButton.js";
export const carsRus=()=>{
    return `<h1> cars R us</h1>
    
    <section class="paints">
      ${paintColor()}
    </section>
    <section class="Tech">
      ${TechnologyRate()}
    </section>
    <section class="Tech">
    ${interior()}
  </section>
    <section class="Tech">
    ${wheel()}
  </section>
  <br>
<article>
  ${OrderButton()}
</article>
<br>
<article class="CustomerOrder">
   <h2> Order:</h2>
  ${Orders()}
</article>

    `



}
