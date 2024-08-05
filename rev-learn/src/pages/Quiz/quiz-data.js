
export const user_id = 1001;
export const course_id = 5001;

const quizQuestions = [
  { 
    'question_seq': 1, 
    'question': 'What is the correct syntax to output "Hello World" in JavaScript?', 
    'correct_choice' : 3,
  },
  {
    'question_seq': 2, 
    'question': 'How do you create a function in JavaScript?', 
    'correct_choice' : 1,
  },
  {
    'question_seq': 3, 
    'question': 'What is the correct way to write a for loop in JavaScript?', 
    'correct_choice' : 4,
  },
  {
    'question_seq': 4, 
    'question': 'What does the slice method do in JavaScript arrays?', 
    'correct_choice' : 2,
  },
  {
    'question_seq': 5, 
    'question': 'How do you convert an array to a string in JavaScript?', 
    'correct_choice' : 1,
  },
  {
    'question_seq': 6, 
    'question': 'What is the result of typeof NaN?', 
    'correct_choice' : 5,
  },
  {
    'question_seq': 7, 
    'question': 'How do you create an immediately invoked function expression (IIFE) in JavaScript?', 
    'correct_choice' : 2,
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

const quizAnswers = [
  {'answer-seq': 1, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'echo("Hello World");', 'choice': 'false'}, 
      { 'ans_id': 2, 'ans_text': 'print("Hello World");', 'choice': 'false'}, 
      { 'ans_id': 3, 'ans_text': 'console.log("Hello World");', 'choice': 'true'},
      { 'ans_id': 4, 'ans_text': 'document.write("Hello World");', 'choice': 'false'}, 
      { 'ans_id': 5, 'ans_text': 'System.out.println("Hello World")', 'choice': 'false'},
    ],
  },
  {'answer-seq': 2, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'function myFunction() {}',  'choice' : 'true' },
      { 'ans_id': 2, 'ans_text': 'def myFunction() {}',       'choice' : 'false' },
      { 'ans_id': 3, 'ans_text': 'create myFunction() {}' ,   'choice' : 'false' },
      { 'ans_id': 4, 'ans_text': 'function:myFunction() {}',  'choice' : 'false' },
      { 'ans_id': 5, 'ans_text': 'myFunction function() {}',  'choice' : 'false' },
    ],
  },
  { 'answer-seq': 3, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'for var i = 0; i < 5; i++ {}',    'choice' : 'true' },
      { 'ans_id': 2, 'ans_text': 'for (i < 5; i++) {var i = 0;}',   'choice' : 'false' },
      { 'ans_id': 3, 'ans_text': 'for (var i = 0; i++) {}',         'choice' : 'false' },
      { 'ans_id': 4, 'ans_text': 'for (var i = 0; i < 5; i++) {}',  'choice' : 'false' },
      { 'ans_id': 5, 'ans_text': 'for (i++) {var i = 0; i < 5;',    'choice' : 'false' },
    ],
  },
  {'answer-seq': 4, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'Modifies the original array}','choice' : 'true' },
      { 'ans_id': 2, 'ans_text': 'Extracts a section of the original array without modifying it}','choice' : 'true' },
      { 'ans_id': 3, 'ans_text': 'Removes elements from the original array}', 'choice' : 'false' },
      { 'ans_id': 4, 'ans_text': 'Adds new elements to the original array}', 'choice' : 'false' },
      { 'ans_id': 5, 'ans_text': 'Sorts the elements of the array', 'choice' : 'false' },
    ],
  },
  {'answer-seq': 5, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'array.toString()', 'choice' : 'false' }, 
      { 'ans_id': 2, 'ans_text': 'array.join()', 'choice' : 'false' }, 
      { 'ans_id': 3, 'ans_text': 'array.concat()', 'choice' : 'false' }, 
      { 'ans_id': 4, 'ans_text': 'array.convert()', 'choice' : 'false' }, 
      { 'ans_id': 5, 'ans_text': 'array.splice()', 'choice' : 'false' },
    ],
  },
  {'answer-seq': 6, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'object', 'choice' : 'false' }, 
      { 'ans_id': 2, 'ans_text': 'undefined', 'choice' : 'false' },
      { 'ans_id': 3, 'ans_text': 'NaN', 'choice' : 'false' },
      { 'ans_id': 4, 'ans_text': 'null', 'choice' : 'false' },
      { 'ans_id': 5, 'ans_text': 'number', 'choice' : 'true' },
    ],
  },
  {'answer-seq': 7, 
    'answers': [
      { 'ans_id': 1, 'ans_text': 'function() {}();', 'choice' : 'false' }, 
      { 'ans_id': 2, 'ans_text': '(function() {})();', 'choice' : 'false' }, 
      { 'ans_id': 3, 'ans_text': '(()function {})();', 'choice' : 'false' },
      { 'ans_id': 4, 'ans_text': '(()function() {});', 'choice' : 'false' },
    ],
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

export const quizDescription = {
  "quiz_id" : 1,
  "course_id" : 1,
  "author_id" : 1,
  "title" : "",
  "description" : "",
  "topics" : "",
  "time_allowed" : 2,
  "max_attemps" : 5,
  "status" : "available",
  "version_id" : 0,
}

export class v1_mcAnswersDTO {
  constructor(text, correct) {
    this.mcAnswerId = 0;
    this.text = text;
    this.correct = correct;
  }
}

export class v1_QuizQuestionDTO {
  constructor(question_text, question_choices) {
    this.quizQuestionId = 0;
    this.question_text = question_text;
    this.question_choices = question_choices.map(choice => new v1_mcAnswersDTO(choice.text, choice.correct));
  }
}

export class v1_QuizDescriptionDTO {
  constructor(course_id, title, timer, attempts_allowed, open, questions) {
    this.quiz_id = 0;
    this.course_id = course_id;
    this.title = title;
    this.timer = timer;
    this.attempts_allowed = attempts_allowed;
    this.open = open;
    this.questions = questions.map(question => new v1_QuizQuestionDTO(question.question_text, question.question_choices));
  }
}

export class QuestionChoiceDTO {
  constructor(text, correct) {
    this.text = text || "";
    this.correct = correct || false;
  }
}

export class QuizQuestionDTO {
  constructor(question_text, question_choices) {
    this.question_text = question_text || "";
    this.question_choices = Array.isArray(question_choices)
      ? question_choices.map(choice => new QuestionChoiceDTO(choice.text, choice.correct))
      : [];
  }
}
export class QuizDescriptionDTO {
  constructor(course_id, title, timer, attempts_allowed, open, questions) {
    this.course_id = course_id || 0;
    this.title = title || "";
    this.timer = timer || 0;
    this.attempts_allowed = attempts_allowed || 0;
    this.open = open || false;
    this.questions = Array.isArray(questions)
      ? questions.map(question => new QuizQuestionDTO(question.question_text, question.question_choices))
      : [];
  }
}
