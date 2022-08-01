
class addQS  {
    constructor(op , answer,theQs, img){
        this.op = op;
        this.answer = answer;
        this.theQs = theQs;
        this.img = img;

    }
}

let qs =[
    new addQS([9,09.01,09.02,09.03],09.03,'מתי דנאיל מתחיל השיעור?','https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1808/vectorgalaxy180819663/108271411-clock-vector-icon-isolated-on-transparent-background-clock-logo-concept.jpg'),
    new addQS(['להרים ידים','גמרנו את השיור','כככ לא יודע','  כככ לא יודע'],'להרים ידים','מה המילה הכי אהובה על דנאיל','https://media.istockphoto.com/vectors/hand-drawing-doodle-smile-illustration-vector-isolated-background-vector-id1249378167?k=20&m=1249378167&s=612x612&w=0&h=gU0EWxUumOAfSzO7vRLiHcyxu2oEeN4FFxLgR9wNwLc='),
];

let opshin = document.getElementsByClassName('opshin');
let nextQs = document.getElementById('nextQs');
let h1 = document.getElementById('h1');
let img = document.getElementById('img');
let theScor = document.getElementById('theScor')

let yourPlace =0; 
let score = 0;
console.log(score);

renderOP()
initialize()

function renderOP(){
    for(let i=0; i<opshin.length; i++){
         opshin[i].innerHTML = qs[yourPlace].op[i] 
    }

    h1.innerHTML = qs[yourPlace].theQs
    img.src  = qs[yourPlace].img
    theScor.style.backgroundColor = 'white'
};

nextQs.addEventListener("click" , next);


function next(){

    if(yourPlace == qs.length -1){ 
        alert('finch')
      theScor.innerHTML = `<h1>`+score+`</h1> <h1>good goob</h1>` 
      
      theScor.style.backgroundColor = 'green'
    }
    yourPlace++
    
    renderOP();
};




function initialize(){
    for(let i =0; i<opshin.length; i++){
      opshin[i].addEventListener("click" ,checkAnswer)
      
    }
  }
  
  
function checkAnswer(e){

    if(qs[yourPlace].answer == e.target.innerHTML){
        score++
        theScor.style.backgroundColor = 'green'  
        next()    
                  
    } else if(qs[yourPlace].answer !== e.target.innerHTML){
        theScor.style.backgroundColor = 'red' 
    }
    
}



