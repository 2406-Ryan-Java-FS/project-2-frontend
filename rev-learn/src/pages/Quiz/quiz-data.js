
export const user_id = 1001;
export const course_id = 5001;

export const quizQuestions = [
  { 'course_id' : 1,
    'question_seq': 1, 
    'question': 'What is the correct syntax to output "Hello World" in JavaScript?', 
  },
  {'question_seq': 2, 
    'question': 'How do you create a function in JavaScript?', 
  },
  {'question_seq': 3, 
    'question': 'What is the correct way to write a for loop in JavaScript?', 
  },
  {'question_seq': 4, 
    'question': 'What does the slice method do in JavaScript arrays?', 
  },
  {'question_seq': 5, 
    'question': 'How do you convert an array to a string in JavaScript?', 
  },
]


export const multiple_choice_question = {
  "mc_question_id" : 0,
  "course_id" : 0,
  "author_id" : 0,
  "mc_question_sequence" : 0,
  "mc_question_text" : "",
  "mc_correct_choice" : 0,
  "version_id" : 0,
}


export const quizAnswers = [
  {'answer-seq': 1, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'echo("Hello World");'}, 
      { 'ans_id': 2, 'ans_text': 'print("Hello World");'}, 
      { 'ans_id': 3, 'ans_text': 'console.log("Hello World");'}, 
      { 'ans_id': 4, 'ans_text': 'document.write("Hello World");'}, 
      { 'ans_id': 5, 'ans_text': 'System.out.println("Hello World")'},
    ],
  },
  {'answer-seq': 2, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'function myFunction() {}'}, 
      { 'ans_id': 2, 'ans_text': 'def myFunction() {}' }, 
      { 'ans_id': 3, 'ans_text': 'create myFunction() {}'}, 
      { 'ans_id': 4, 'ans_text': 'function:myFunction() {}'}, 
      { 'ans_id': 5, 'ans_text': 'myFunction function() {}'},
    ],
    'correct-answer' : 1,
  },
  { 'answer-seq': 3, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'for (var i = 0; i < 5; i++) {}'},
      { 'ans_id': 2, 'ans_text': 'for var i = 0; i < 5; i++ {}'}, 
      { 'ans_id': 3, 'ans_text': 'for (i < 5; i++) {var i = 0;}'}, 
      { 'ans_id': 4, 'ans_text': 'for (var i = 0; i++) {}'}, 
      { 'ans_id': 5, 'ans_text': 'for (i++) {var i = 0; i < 5;'}
    ],
    'correct-answer' : 1,
  },
  {'answer-seq': 4, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'Modifies the original array}'},
      { 'ans_id': 2, 'ans_text': 'Removes elements from the original array}'}, 
      { 'ans_id': 3, 'ans_text': 'Extracts a section of the original array without modifying it}'},
      { 'ans_id': 4, 'ans_text': 'Adds new elements to the original array}'}, 
      { 'ans_id': 5, 'ans_text': 'Sorts the elements of the array'}
    ],
    'correct-answer' : 1,
  },
  {'answer-seq': 5, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'array.toString()'}, 
      { 'ans_id': 2, 'ans_text': 'array.join()'}, 
      { 'ans_id': 3, 'ans_text': 'array.concat()'}, 
      { 'ans_id': 4, 'ans_text': 'array.convert()'}, 
      { 'ans_id': 5, 'ans_text': 'array.splice()'},
    ],
    'correct-answer' : 1,
  },
];

export const multiple_choice_answer = {
  "mc_answer_id" : 0,
  "author_id" : 0,
  "course_id" : 0,
  "question_id" : 0,
  "mca_sequence" : 1,
  "version_id" : 0,
  "mc_answer_text" : "",
}

export const quizSolution = {
  'course_id': 0,
  'question_id': 0,
  'answer_id': 0,
}

export let studentQuizSelection = [];

export const answerChoice = {
  'user_id': 0,
  'course_id' : 0,
  'question_id': 0,
  'answer_choice' : -1,
}

export const quizAttempt = {
  'user_id': 0,
  'course_id' : 0,
  'attempt' : 0,
  'attempt_date' : 0,
  'attempt_duration': 0,
  'status' : "pending",
  'score' : 0,
}

export const quiz = {
  "quiz_id" : 1,
  "couse_id" : 1,
  "author_id" : 1,
  "title" : "",
  "description" : "",
  "topics" : "",
  "time_allowed" : 2,
  "max_attemps" : 5,
  "status" : "available",
  "version_id" : 0,
}

