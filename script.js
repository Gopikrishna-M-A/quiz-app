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
    }
]
var score = 0
var i
var num = 0
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


startButtonElement.addEventListener("click",()=>{

    startGame()
})


function startGame(){
    resetColor()
    startButtonElement.classList.add("hide")
    questionContainerElement.classList.remove('hide')
    updateOptions(questionNumber())
    checkClickedButton(correctAnswer(questionNumber()))
    nextButtonClicked()
   
  
 
   

}

function updateOptions(qno) {
        console.log(qno);
        questionElement.innerHTML = questions[qno].question
        optionOne.innerHTML = questions[qno].answer[0].text
        optionTwo.innerHTML = questions[qno].answer[1].text
        optionThree.innerHTML = questions[qno].answer[2].text
        optionFour.innerHTML = questions[qno].answer[3].text

   
}

function questionNumber(){
    if(nextButtonValue){
        num++
       
    }
    nextButtonValue=false
  return(num)
}

function checkClickedButton(answer){
  
    for(i = 0; i<4 ; i++){
        document.getElementsByClassName('btn')[i].addEventListener('click',(e)=>{
           var clickedButtonId = e.target.innerHTML
           if(clickedButtonId==answer){
               score = score + 1
            bodyElement.classList.remove('wrong')
            bodyElement.classList.remove('neutral') 
            bodyElement.classList.add('correct')
           }else {
            bodyElement.classList.remove('correct')
            bodyElement.classList.remove('neutral')
            bodyElement.classList.add('wrong')
           }
           nextButtonElement.classList.remove('hide')
        })
    }

}

function correctAnswer(qno){
    var ans1 = questions[qno].answer[0].correct
    var ans2 = questions[qno].answer[1].correct
    var ans3 = questions[qno].answer[2].correct
    var ans4 = questions[qno].answer[3].correct
    if(ans1){
        return(questions[qno].answer[0].text)
    }else if(ans2){
        return(questions[qno].answer[1].text)
    }else if(ans3){
         return(questions[qno].answer[2].text)  
    }else if(ans4){
        return(questions[qno].answer[3].text)
    }
}

function nextButtonClicked(){
  
    nextButtonElement.addEventListener('click',()=>{
        
            nextButtonValue=true
            nextButtonElement.classList.add('hide')
           

            if (num===6){
                endGame()
            }else{
                startGame()
            }
        
         
  
  })
  
}
function resetColor(){
    bodyElement.classList.remove('correct')
    bodyElement.classList.remove('wrong')
    bodyElement.classList.add('neutral')
}

function endGame(){
    num = 0
    startButtonElement.classList.add("hide")
    questionContainerElement.classList.add('hide')
    nextButtonElement.classList.add('hide')
    scoreButtonElement.classList.remove('hide')
    scoreButtonElement.innerHTML='score is'+" "+ score
}