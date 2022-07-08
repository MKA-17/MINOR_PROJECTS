

//localStorage.clear()
let addbtn = document.getElementById("addbtn");
let addtxt = document.getElementById("addtext");
let newel = document.getElementById("newnote");
let note_title = document.getElementById("titleofnote");
let date = new Date();
 //console.log(date.getMonth())
function NOTECLASS (x ,y){
    this.notetxt = x;
    this.notetitle = y;
    this.time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+"     "+date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    this.get = ()=>
    {
        console.log(this.notetxt," ", this.notetitle) ;
    }

}

show();

addbtn.addEventListener("click",()=>{
    let note = localStorage.getItem("note");
    //console.log(localStorage.getItem("note"))
    if (note == null)
    {
        obj = [];
    }
    else{
        obj = JSON.parse(note);
    }

    let noteobj = new NOTECLASS(addtxt.value , (note_title.value));
    
    obj.push(noteobj);
    //console.log("TILTE ");noteobj.get();
   
    localStorage.setItem("note" , JSON.stringify(obj));
    //console.log(obj.length );
    addtxt.value = '';
    note_title.value = '';
    show();

    document.location.reload();

})

function show()
{
     let note = localStorage.getItem("note");
    //console.log(localStorage.getItem("note"))
    if (note == null)
    {
        obj = [];
    }
    else{
        obj = JSON.parse(note);
    }

    let newnotes =  '';
     obj.forEach((element,index) => {
        newnotes +=  '<div id="notes" class="notesdiv row container-fluid"> <div class="card" style="width: 28rem;"> <div class="card-body"><h5 class="card-title"></h5>NOTE '+eval(index+1)+'<b><p class="notetitle">TITLE: '+element.notetitle+'</p></b><textarea class="notetxtclas form-control" rows="4" cols="30" >'+element.notetxt+'</textarea><br><button  class="btn btn-primary"  onclick="delete_note('+eval(index)+')" >delete note</button></div><p>'+element.time+'</p></div>';
      // let c=  document.getElementsByClassName("notetitle")
       //c[index].innerHTML = 876;
//        onclick="document.getElementById('newnote').style.display='none'"
        
    });
   
    if(obj.length != 0)
    {
        newel.innerHTML = newnotes; }
        else{
            newel.innerHTML = "ADD SOME NOTES!";

        }

        editing();
        searching();
    

}



function delete_note(index)
{
// console.log(index);
    let note = localStorage.getItem("note");
    //console.log(localStorage.getItem("note"))
    if (note == null)
    {
        obj = [];
    }
    else{
        obj = JSON.parse(note);
    }
    obj.splice(index,1);
    localStorage.setItem("note" , JSON.stringify(obj))

    
    
    show();

}
//console.log("del ",n );


//SEARCH CODE
function searching(){
let newnotesdiv = document.getElementsByClassName("notesdiv")
let notetxt = document.getElementsByClassName("notetxtclas");
//console.log('g',notetxt.length) 
let searchbtn = document.getElementById("searchnote");


searchbtn.addEventListener("input",()=>{
    //console.log("new input")
     for(let i = 0 ; i < notetxt.length ; i++)
    {
       

        console.log('TEXT ',notetxt[i].value.toLowerCase(),' CHECK ',notetxt[i].value.toLowerCase().includes(searchbtn.value.toLowerCase()));
   
        if(notetxt[i].value.toLowerCase().includes(searchbtn.value.toLowerCase()))
        {
         //   console.log(true);
           // console.log( newnotesdiv[i].innerHTML)
           newnotesdiv[i].style.visibility = 'visible'//style.display="block";       
        }
        else{
           // console.log(false)  ;
            //console.log( notetxt[i].innerHTML) 
            newnotesdiv[i].style.visibility = 'hidden'//style.display="block";

        }
      // console.log( notetxt[i].innerHTML)

    }
    
})
}

//                CODE TO EDIT NOTES

function editing(){
    let arr = []
    //console.log('newwwwwwwwwww')
    edit_not = document.getElementsByClassName("notetxtclas");


    
    for(let i=0;i<edit_not.length;i++)
    {
        arr.push((edit_not[i]));
       // console.log(edit_not[i].value);
    }
    arr.forEach((element,index) => {
    
        let note = localStorage.getItem("note");
        //console.log(localStorage.getItem("note"))
        if (note == null)
        {
            obj = [];
        }
        else{
            obj = JSON.parse(note);
        }
        edit_not[index].addEventListener("input",()=>{//console.log(edit_not[index].value)
        
            
    
        obj[index].notetxt = element.value;
    
       // console.log( obj[index].notetxt);
        localStorage.setItem("note" , JSON.stringify(obj));
        //console.log("storage")//,localStorage.getItem("note"))
        
    
    })
    console.log("HAPPY SAD ",obj.length)
    });
    }
    //*************************************************** */