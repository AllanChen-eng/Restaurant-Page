import "./styles.css";
console.log("hello World");
const content = document.querySelector(".content");

function createHome(){

}
function createMenu(){

}
function createAbout(){

}
function clearContents(){
    const clearBtn = document.querySelector("#clear-btn");
    const removeContent = () =>{
        content.innerHTML="";
    }
    clearBtn.addEventListener("click", ()=>{
        removeContent();
    });
}
clearContents();