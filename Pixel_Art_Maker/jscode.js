
let main = document.getElementsByClassName("main");
let gridsize = document.getElementById("gridsize");
let pix = document.getElementsByClassName("pix");
let btn = document.getElementById("btn");
let choose_colour = document.getElementById("colouring");
let slideval = document.getElementById("slideval");
choose_colour.value = '#07EDB4';
let draw = false;
//INITIALIZE grid value
gridsize.value = 25;
make_grid(gridsize.value);
slideval.innerHTML = "Value: "+gridsize.value;
console.log(choose_colour.value)
function make_grid(siz)
{
    main[0].innerHTML = '';
    main[0].style.setProperty('--siz',siz); 
    for (let i = 0 ; i< siz**2 ; i++)
    {
        const newpix = document.createElement("div");
        newpix.className='pix';
        main[0].appendChild(newpix);
    }

    drawing();
}
//make_grid(gridsize.value);
gridsize.addEventListener("input",()=>
{
    slideval.innerHTML ="Value: "+gridsize.value;
    make_grid(gridsize.value);
})


function drawing()
{

let arr = [];
console.log(pix.length)
for (i = 0 ; i< pix.length ; i++)
{

    arr.push(pix[i]);

}
n = 0;

    console.log("INSIDE WINDOW");




arr.forEach((element)=>{
    element.addEventListener("mouseover" , ()=>
    {
        if(!draw) {return }
        
            element.style.backgroundColor = (choose_colour.value);
        
        
        n++;
       console.log("INSIDE grid");

    })
    element.addEventListener("mousedown",()=>{
        console.log("2nd")
        element.style.backgroundColor = (choose_colour.value);
        

    })
    console.log("inside foreach")

})
}
window.addEventListener("mousedown", ()=>{
    draw = true;
    console.log("mouseudown",draw)
})
window.addEventListener("mouseup" , ()=>
{
    draw = false;
    console.log("mouseup",draw)
})
btn.addEventListener("click" , ()=>
{
    gridsize.value = 25;
    slideval.innerHTML ="Value: "+gridsize.value;
   
    make_grid(gridsize.value);
    console.log(gridsize.value);

})


