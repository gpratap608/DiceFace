const press = ()=>{
    var randomX = Math.floor(Math.random()*6)+1
    var image = document.querySelector("#imageId")
    var headingEle = document.getElementById("declaration") 
    switch(randomX){
        case 1 : image.setAttribute("src","diceImages/1.svg")
                 headingEle.innerHTML = "A small number! try again"   
                 break
        case 2 : image.setAttribute("src","diceImages/2.svg")
                 headingEle.innerHTML = "Please One more time"   
                 break          
        case 3 : image.setAttribute("src","diceImages/3.svg")
                 headingEle.innerHTML = "That's very average"   
                 break
        case 4 : image.setAttribute("src","diceImages/4.svg")
                 headingEle.innerHTML = "This is something good"   
                 break                 
        case 5 : image.setAttribute("src","diceImages/5.svg")
                 headingEle.innerHTML = "Too close!!!"   
                 break
        case 6 : image.setAttribute("src","diceImages/6.svg")
                 headingEle.innerHTML = "Wow yrr Bhaii!!!"   
                 break
        default: headingEle.innerHTML = "Something wrong happened"            
    }
}