
const deadp = document.querySelector("#child");





deadp.addEventListener("click", e => {
    deadp.style.backgroundColor ="silver";
    
    const create = document.createTextNode("YOU CREATED AN EVENT!");
    document.body.appendChild(create);
    console.log(deadp);
})



deadc.addEventListener("click", e => {
    {capture: false}
})
