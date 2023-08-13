

const quizDiv = document.querySelector('.quiz');

const Next = document.getElementById('next')

const questionElement = document.createElement('h3')
const questionArea = document.createElement('div');
const AnsArea = document.createElement('div')



const questions = [

    {
        question:"what comes after y",
        ans:[
            {text:"z",correct:true},
            {text:"x",correct:false},
            {text:"w",correct:false},
            {text:"a",correct:false}
        ]
    },
    {
        question:"2+2",
        ans:[
            {text:"4",correct:true},
            {text:"3",correct:false},
            {text:"1",correct:false},
            {text:"44",correct:false}
        ]
    },
    {
        question:"3*1",
        ans:[
            {text:"3",correct:true},
            {text:"2",correct:false},
            {text:"33",correct:false},
            {text:"31",correct:false}
        ]
    }
]


let index = 0
let score = 0
function start(){

    index = 0;
    score = 0;

    Next.innerHTML = "Next"
    createQuizArea();

}

function createQuizArea(){

   


    questionArea.classList.add('questionArea')
    AnsArea.classList.add('answerArea')


    quizDiv.appendChild(questionArea);
    questionArea.appendChild(questionElement);
    quizDiv.appendChild(AnsArea);   

    showQuestions();
   

}


function showQuestions(){

    resetPrev()
    const currentQuestion = questions[index]

    questionElement.textContent = currentQuestion.question
    
    currentQuestion.ans.forEach((item)=>{
        
        const btn = document.createElement('button')
        btn.classList.add('ans-btn')
        btn.textContent = item.text
        btn.dataset.correct  = item.correct
        AnsArea.appendChild(btn)

        btn.addEventListener('click',()=>{
            if(btn.dataset.correct === "true"){
                btn.classList.add("correct")
                score++
            }else{

                btn.classList.add('incorrect')
            }


            AnsArea.childNodes.forEach((e)=>{
                if(e.dataset.correct ==="true"){
                    e.classList.add("correct")
                }
            })

            Next.style.display = "block"

        })

        Next.addEventListener('click',NextPage)
    })


}
function hadleNextPage(){
    index++;
    if(index < questions.length){
        showQuestions();
    }else{
        showScoreBoard();
    }
}

function NextPage(){

    if(index < questions.length){
        hadleNextPage()
        
    }else{
        start();
    }
}

function showScoreBoard(){
    resetPrev()

    questionElement.textContent = score
    Next.innerHTML = "playAgain"

}


function resetPrev(){

    while(AnsArea.firstChild){
        AnsArea.removeChild(AnsArea.firstChild)
    }
   
}


start();