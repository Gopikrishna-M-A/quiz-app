
var questions= [
    {
        question:'How many days do we have in a week?',
        answer:[
            {text:'7',correct:true},
            {text:'5',correct:false},
            {text:'6',correct:false},
            {text:'10',correct:false}
        ]
    },
    {
        question:'How many days are there in a year?',
        answer:[
            {text:'500',correct:false},
            {text:'360',correct:false},
            {text:'365',correct:true},
            {text:'300',correct:false}
        ]
    },
    {
        question:'How many colors are there in a rainbow?',
        answer:[
            {text:'9',correct:false},
            {text:'7',correct:true},
            {text:'10',correct:false},
            {text:'8',correct:false}
        ]
    },
    {
        question:'Which animal is known as the ‘Ship of the Desert?',
        answer:[
            {text:'dog',correct:false},
            {text:'donkey',correct:false},
            {text:'elephat',correct:false},
            {text:'camel',correct:true}
        ]
    },
    {
        question:'How many letters are there in the English alphabet?',
        answer:[
            {text:'30',correct:false},
            {text:'24',correct:false},
            {text:'20',correct:false},
            {text:'26',correct:true}
        ]
    },
    {
        question:'How many days do we have in a week?',
        answer:[
            {text:'7',correct:true},
            {text:'5',correct:false},
            {text:'6',correct:false},
            {text:'10',correct:false}
        ]
    },
    {
        question:'How many days are there in a year?',
        answer:[
            {text:'500',correct:false},
            {text:'360',correct:false},
            {text:'365',correct:true},
            {text:'300',correct:false}
        ]
    },
    {
        question:'How many colors are there in a rainbow?',
        answer:[
            {text:'9',correct:false},
            {text:'7',correct:true},
            {text:'10',correct:false},
            {text:'8',correct:false}
        ]
    },
    {
        question:'Which animal is known as the ‘Ship of the Desert?',
        answer:[
            {text:'dog',correct:false},
            {text:'donkey',correct:false},
            {text:'elephat',correct:false},
            {text:'camel',correct:true}
        ]
    },
    {
        question:'How many letters are there in the English alphabet?',
        answer:[
            {text:'30',correct:false},
            {text:'24',correct:false},
            {text:'20',correct:false},
            {text:'26',correct:true}
        ]
    }
]
var number 
var old =[10]
var random = 0  
var ans = false
var button
var score = 0
var i
var nextButtonValue = false
var startButtonElement = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var nextButtonElement = document.getElementById('next-btn')
var questionElement = document.getElementById('question')
var optionOne = document.getElementById('optionOne')
var optionTwo = document.getElementById('optionTwo')
var optionThree = document.getElementById('optionThree')
var optionFour = document.getElementById('optionFour')
var bodyElement = document.getElementById('body')
var scoreButtonElement = document.getElementById('score-btn')



function startGame(){
  
    optionOne.disabled = false
    optionTwo.disabled = false
    optionThree.disabled = false
    optionFour.disabled = false
    optionOne.classList.remove('correct')
    optionTwo.classList.remove('correct')
    optionThree.classList.remove('correct')
    optionFour.classList.remove('correct')
    optionOne.classList.remove('wrong')
    optionTwo.classList.remove('wrong')
    optionThree.classList.remove('wrong')
    optionFour.classList.remove('wrong')
    console.log("start ");
    resetColor()
    startButtonElement.classList.add("hide")
    questionContainerElement.classList.remove('hide')
    updateOptions(questionNumber())
    checkClickedButton(correctAnswer(questionNumber()))



  
  
 
   

}

function updateOptions(num) {
        console.log(num);    
        questionElement.innerHTML = questions[num].question
        optionOne.innerHTML = questions[num].answer[0].text
        optionTwo.innerHTML = questions[num].answer[1].text
        optionThree.innerHTML = questions[num].answer[2].text
        optionFour.innerHTML = questions[num].answer[3].text

   
}

function questionNumber(){
    random = math.floor(math.random() * 10) + 1
              
    old.forEach(x=>{
      
        if(old.includes(random)){
         random = math.floor(math.random() * 10) + 1
         
       }else{
        old.push(random)
        number = random

       }
    })
  return(number)
 
}

function checkClickedButton(answer){
    for(i = 0; i<4 ; i++){
            document.getElementsByClassName('btn')[i].addEventListener('click',(e)=>{
            optionOne.disabled = true
            optionTwo.disabled = true
            optionThree.disabled = true
            optionFour.disabled = true
            var clickedButtonId = e.target.innerHTML
            button = e.target.id
           if(clickedButtonId==answer){ 
            var buttonElement = document.getElementById(button)
            buttonElement.classList.remove('wrong')
            buttonElement.classList.add('correct')
            ans = true
            bodyElement.classList.remove('wrong')
            bodyElement.classList.remove('neutral') 
            bodyElement.classList.add('correct')
            
           }else {
            var buttonElement = document.getElementById(button)
            buttonElement.classList.remove('correct')
            buttonElement.classList.add('wrong')
            bodyElement.classList.remove('correct')
            bodyElement.classList.remove('neutral')
            bodyElement.classList.add('wrong')  
           }
           nextButtonElement.classList.remove('hide')
        })
    }
    if(ans){
        score++
        ans = false
    }
    nextButtonClicked(questionNumber())
}

function correctAnswer(num){
    console.log('correct ans');
    var ans1 = questions[num].answer[0].correct
    var ans2 = questions[num].answer[1].correct
    var ans3 = questions[num].answer[2].correct
    var ans4 = questions[num].answer[3].correct
    if(ans1){
        return(questions[num].answer[0].text)
    }else if(ans2){
        return(questions[num].answer[1].text)
    }else if(ans3){
         return(questions[num].answer[2].text)  
    }else if(ans4){
        return(questions[num].answer[3].text)
    }
}

function nextButtonClicked(num){ 
    nextButtonElement.addEventListener('click',()=>{
        console.log('next button click'+num);
            if (num===4){
                endGame()
            }else{
                nextButtonElement.classList.add('hide')
                startGame()
            }
        
         
  
  })
  
}
function resetColor(){
    console.log('reset color');
    bodyElement.classList.remove('correct')
    bodyElement.classList.remove('wrong')
    bodyElement.classList.add('neutral')
}

function endGame(){
    startButtonElement.classList.add("hide")
    questionContainerElement.classList.add('hide')
    nextButtonElement.classList.add('hide')
    scoreButtonElement.classList.remove('hide')
    scoreButtonElement.innerHTML='score is'+" "+ score+"/3"
}