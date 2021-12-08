const database={

paintColors:[
    {id:1, color:"Silver", price:21.00},
    {id:2, color:"Midnight Blue", price:22.00},
    {id:3, color:"Firebrick Red", price:26.00},
    {id:4, color:"Spring Greens",price:29.00},

],
Interiors:[
    {id:1, materialColor:"Beige Fabric", price:21.00},
    {id:2, materialColor:"Charcoal Fabric", price:33.00},
    {id:3, materialColor:"White Leather", price:43.00},
    {id:4, materialColor:"Black Leather", price:43.00},

],
Technologies:[
    {id:1, package:"Basic Package (basic sound system)",price:100.00},
    {id:2, package:"Navigation Package(includes integrated navigation controls)",price:150.00},
    {id:3, package:"Visibility Package (includes side and reat cameras)",price:200.00},
    {id:4, package:"Ultra Package (includes navigation and visibility packages)",price:250.00},



],

Wheels:[
{id:1, inchs:17, pairColor:" Radial", price:21.00},
{id:2, inchs:17, pairColor:" Radial Black", price:25.00},
{id:3, inchs:18, pairColor:"  Spoke Silver", price:35.00},
{id:4, inchs:18, pairColor:"  Spoke Black", price:45.00}

],


orderBuilder:{},
//need a array to store the order
customerOrders:[

]
}

export const getPaintColors=()=>{
    return database.paintColors.map(paintColor=>({...paintColor}))

}

export const getInteriors=()=>{
    return database.Interiors.map(Interior=>({...Interior}))

}
export const getTechnologies=()=>{
    return database.Technologies.map(Technology=>({...Technology}))

}
export const getWheels=()=>{
    return database.Wheels.map(Wheel=>({...Wheel}))

}
//why is .map being undefined will have to look at it tomorrow with help
export const getOrders=()=>{
    return database.customerOrders.map(Order=>({...Order}))

}

//use the set to get the data

export const setPaintColors=(id)=>{
    database.orderBuilder.paintId=id
}
export const setInteriors=(id)=>{
    database.orderBuilder.interiorId=id
}
export const setTechnologies=(id)=>{
    database.orderBuilder.technologyId=id
}
export const setWheels=(id)=>{
    database.orderBuilder.wheelId=id
}

export const addCustomerOrder=()=>{
    //the line of code is getting an copy 
    const newOrder={...database.orderBuilder}

    const theLastIndex=database.customerOrders.length-1
    newOrder.id=database.customerOrders[theLastIndex]+1
    newOrder.timestamp=Date.now()

    database.customerOrders.push(newOrder)

    database.orderBuilder={}
    // this will create a tranist state in the webpage by saving the data that the user selected.
    document.dispatchEvent(new CustomEvent("state changed"))

}