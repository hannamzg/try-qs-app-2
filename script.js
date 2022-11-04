let addQss = document.getElementById("addQs")

class addQS  {
    constructor(op , answer,theQs, img){
        this.op = op;
        this.answer = answer;
        this.theQs = theQs;
        this.img = img;

    }
}

let qs =[
 
];

function  addToYourAnsers() {
    let TheAnsers = document.getElementsByClassName("TheAnsers");
    let corectAnser = document.getElementById("corectAnser");
    let addTheQss = document.getElementById("addTheQss");
    let AddImage = document.getElementById("AddImage")
    /* let imgee = document.createElement("img") */
    imgee = URL.createObjectURL(AddImage.files[0]);
    
    qs.push(new addQS([TheAnsers[0].value,TheAnsers[1].value,TheAnsers[2].value,TheAnsers[3].value],corectAnser.value,addTheQss.value,imgee));  
    for(let i=0; i<TheAnsers.length;i++){
        TheAnsers[i].value=""
    }  
    corectAnser.value = "";
    addTheQss.value = "";
    
}
addQss.addEventListener("click" , ()=>{
    addToYourAnsers();
    addValueTooBun();
    initialize();
})

let opshin = document.getElementsByClassName('opshin');
let nextQs = document.getElementById('nextQs');
let h1 = document.getElementById('h1');
let img = document.getElementById('img');
let theScor = document.getElementById('theScor');

let yourPlace = 0;
let score = 0;



addValueTooBun();
initialize();

function addValueTooBun(){
    for(let i=0; i<opshin.length; i++){
        opshin[i].innerHTML = qs[yourPlace].op[i]
    }
    h1.innerHTML = qs[yourPlace].theQs;
    img.src = qs[yourPlace].img;
    theScor.style.backgroundColor = 'white' ;
}


nextQs.addEventListener("click" , next)

function next(){
   if(yourPlace == qs.length -1){
    alert('bay')
   }
   yourPlace++
   addValueTooBun()
}




function initialize(){
    for(let i=0; i<opshin.length; i++){
        opshin[i].addEventListener("click" , moveToNextQs);
    }
}


function moveToNextQs(e){
    if(qs[yourPlace].answer == e.target.innerHTML){
        score++;
        next()
    }
    
    
}