const questions = [
    {
        "id":1,
        "question": "Who has won the most Ballon d'Ors in history?",
        "options":["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Johan Cruyff"],
        "answer":"Lionel Messi",
        "desc":"Lionel Messi has won 6 Ballon d'Ors, the most in history"
    },
    {
        "id":2,
        "question": "Which Football Club has won the most Champions League trophies in history?",
        "options":["FC Barcelona", "AC Milan", "Real Madrid", "Manchester United"],
        "answer":"Real Madrid",
        "desc":"Real Madrid has won 13 Champions Leagues, the most in history"
    },
    {
        "id":3,
        "question": "Who is the currently active player who has the most Internation Goals?",
        "options":["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Sunil Chhetri"],
        "answer":"Cristiano Ronaldo",
        "desc":"Cristiano Ronaldo has 109 international goals, the most in history"
    },
    {
        "id":4,
        "question": "Which country has won the most World Cups?",
        "options":["Brazil", "Netherlands", "Argentina", "France"],
        "answer":"Brazil",
        "desc":"Brazil has won 5 World Cups, the most in history"
    },
    {
        "id":5,
        "question": "Who is the only Goalkeeper in history to win the Ballon d'Or?",
        "options":["Iker Casillas", "Peter Schmeichel", "Lev Yashin", "Oliver Kahn"],
        "answer":"Lev Yashin",
        "desc":"Lev Yashin is the only Goalkeeper to win the Ballon d'Or in history"
    }
]

const score_field = document.getElementById('score');
const question_no_field = document.getElementById('question-no');
const question_field = document.getElementById('question');
const answer_desc_div = document.querySelector('.answer-description');
const answer_desc_field = document.getElementById('answer-desc');
const next_button = document.getElementById('next-bttn');
const option_fields = [];
let current_question_id = 0;
let current_score = 0;
const attempted_questions = [];

const end_quiz = () => {
    next_button.innerHTML = "End Quiz!"
    next_button.removeEventListener('click', handle_next);
    next_button.addEventListener('click', handle_finish);
    //answer_desc_div.style.visibility = "visible";
    attempted_questions.push(current_question_id);
}

const handle_answer_click = (event) => {
    if(attempted_questions.indexOf(current_question_id) != -1) return;
    setTimeout(() => {
        let question = questions[current_question_id]
        console.log(event.target.innerHTML);
        if (event.target.innerHTML == question.answer){
            //event.target.style = "background-color: #179213";
            answer_desc_field.style.color = "#179213";
            answer_desc_field.innerHTML = "Correct! " + question.desc;
            current_score += 5;
            score_field.innerHTML = "Score : " + current_score;
        }else{
            answer_desc_field.style.color = "#f50a16";
            answer_desc_field.innerHTML = "Wrong! " + question.desc;
        }
        if (current_question_id == (questions.length - 1)) end_quiz();
        answer_desc_div.style.visibility = "visible";
        attempted_questions.push(current_question_id);
    }, 325);
}

const handle_next = () => {
    current_question_id += 1;
    answer_desc_div.style.visibility = "hidden";
    setTimeout(() => {load_question(current_question_id)}, 500);

}

const handle_finish = () => {
    const quiz_div = document.querySelector('.quiz-div');
    const quiz_end_div = document.querySelector('.quiz-end');
    const end_score_field = document.getElementById('end-score');
    end_score_field.innerHTML = current_score + "/25";
    quiz_div.style.visibility = "hidden";
    quiz_div.style.maxHeight = "0";
    answer_desc_div.style.visibility = "hidden";
    quiz_end_div.style.visibility = "visible";
}

next_button.addEventListener('click', handle_next);

for (let i=0; i < 4; i++){
    let curr_option = document.getElementById('option-'+(i+1));
    curr_option.addEventListener('click', handle_answer_click);
    option_fields.push(curr_option);
}

const load_question = (question_no) => {
    let curr_question = questions[question_no];
    question_no_field.innerHTML = "#" + curr_question.id;
    question_field.innerHTML = curr_question.question;

    for (let i=0; i < 4; i++){
        option_fields[i].innerHTML = "" + curr_question.options[i] + "";
    }
}

load_question(current_question_id);