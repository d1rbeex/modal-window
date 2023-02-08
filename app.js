const parent = document.querySelector(".parent");

const callModalWindow = document.querySelector(".callModalWindow").addEventListener("click", (e) => {
    parent.style = "display: flex"
});

document.querySelector(".parent").addEventListener("click", () => {
    parent.style = "display: none"
})
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();
});
document.querySelector(".child__btnyes").addEventListener("click", (e) => {
    document.querySelector(".child2").style = "display: flex"
});
document.querySelector(".child__btnno").addEventListener("click", (e)=>{
    parent.style = "display: none"
})