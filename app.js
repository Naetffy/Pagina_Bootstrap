const nav1 = document.getElementById("Navegation1");
const nav2 = document.getElementById("Navegation2");
const nav3 = document.getElementById("Navegation3");

const yLocalize = (id) =>{
    const element= document.getElementById(id)
    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset = elemRect.top - bodyRect.top;
    console.log(offset)
    return offset;
}
nav1.addEventListener("click",()=>{window.scroll(0,yLocalize("AboutPg"));})
nav2.addEventListener("click",()=>{window.scrollBy(0, yLocalize("Team"));})
nav3.addEventListener("click",()=>{window.scrollBy(0, yLocalize("FinPg"));})
