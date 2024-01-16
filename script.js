const questions=[
    {
        question:"Which of the following is a linear data structure?",
        answer:[
            {text:"Array",correct:true},
            {text:"AVL Trees",correct:false},
            {text:"Binary Trees",correct:false},
            {text:"graphs",correct:false},
        ]
    },
    {
        question:"How is the 2nd element in an array accessed based on pointer notation?",
        answer:[
            {text:"*a+2",correct:false},
            {text:"*(a+2)",correct:true},
            {text:"*(*a+2)",correct:false},
            {text:"&(a+2)",correct:false},
        ]
    },
    {
        question:"Which of the following is not the type of queue?",
        answer:[
            {text:"priority queue",correct:false},
            {text:"single-ended queue",correct:true},
            {text:"circle queue",correct:false},
            {text:"ordinary queue",correct:false},
        ]
    },
    {
        question:"How are String represented in memory in C?",
        answer:[
            {text:"An array of characters",correct:true},
            {text:"the object of some class",correct:false},
            {text:"same as other primitive data types",correct:false},
            {text:"Linked list of characters",correct:false},
        ]
    },
    {
        question:"Which of the following is the advantage of the array data structure?",
        answer:[
            {text:"Element of mixed data type can be store",correct:false},
            {text:"Easier to access the elements in an array",correct:true},
            {text:"index of 1st element start from 1",correct:false},
            {text:"Elements of an array cannot be stored",correct:false},
        ]
    },
    {
        question:"What function is used to append a character at the back of a string in C++?",
        answer:[
            {text:"push_back()",correct:true},
            {text:"append()",correct:false},
            {text:"push()",correct:false},
            {text:"insert()",correct:false},
        ]
    },
    {
        question:"When a pop() operation is called on an empty queue, what is the condition called?",
        answer:[
            {text:"overflow",correct:false},
            {text:"underflow",correct:true},
            {text:"syntax error",correct:false},
            {text:"garbage value",correct:false},
        ]
    },
    {
        question:"Which of the following data structures can be used to implement queues?",
        answer:[
            {text:"Stack",correct:false},
            {text:"Arrays",correct:false},
            {text:"Linked List",correct:false},
            {text:"All of the above",correct:true},
        ]
    },
    {
        question:"Which of the following data structures finds its use in recursion?",
        answer:[
            {text:"Stack",correct:true},
            {text:"Arrays",correct:false},
            {text:"Linked List",correct:false},
            {text:"Queues",correct:false},
        ]
    },
    {
        question:"Which of the following sorting algorithms provide the best time complexity in the worst-case scenario?",
        answer:[
            {text:"Merge sort",correct:true},
            {text:"Quick sort",correct:false},
            {text:"Bubble sort",correct:false},
            {text:"Selection sort",correct:false},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerElement=document.querySelector("#answer-button");

const nextButton=document.querySelector("#next-btn");

let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetQuestion();
    let currentQuestion=questions[currentQuestionindex];
    questionElement.innerHTML=(currentQuestionindex+1)+". "+currentQuestion.question;

    currentQuestion.answer.forEach(ans=>{
        const btn=document.createElement("button");
        btn.innerHTML=ans.text;
        btn.classList.add("btn");
        answerElement.appendChild(btn);
        if(ans.correct){
            btn.dataset.correct=ans.correct;
        }
        btn.addEventListener("click",selectAnswer);
    });
}

function selectAnswer(e){
    const selectButton=e.target;
    const iscorrect=selectButton.dataset.correct==='true';
    if(iscorrect){
        selectButton.classList.add("correct");
        score++;
    }else{
        selectButton.classList.add("incorrect");
    }

    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function resetQuestion(){
    nextButton.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionindex<questions.length){
        handleNextQuestion();
    }else{
        startQuiz();
    }
})

function handleNextQuestion(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetQuestion();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

startQuiz();