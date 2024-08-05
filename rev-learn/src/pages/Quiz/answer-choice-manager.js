
class AnswerChoiceManager {
  constructor() {
    this.storageKey = 'studentQuizSelection'; // Key for localStorage
    this.sessionKey = 'currentSession';
    this.answerChoiceTemplate = {
      user_id: 0,
      course_id: 0,
      question_id: 0,
      answer_choice: -1,
    };
    this.initializeStorage(); 
    this.studentQuizSelection = this.loadSelections(); // Load from storage on initialization
  }

  createAnswerChoice(user_id, course_id, question_id, answer_choice) {
    return {
      ...this.answerChoiceTemplate,
      user_id,
      course_id,
      question_id,
      answer_choice,
    };
  }

  addOrUpdateAnswerChoice(user_id, course_id, question_id, answer_choice) {
    // Check if the question_id already exists
    const index = this.studentQuizSelection.findIndex(
      (choice) => choice.question_id === question_id
    );

    if (index !== -1) {
      // Check if the answer_choice is the same as the existing one
      if (this.studentQuizSelection[index].answer_choice === answer_choice) {
        // If it is, remove the answer choice (deselect it)
        this.removeAnswerChoice(question_id);
      } else {
        // Update existing answer choice
        this.studentQuizSelection[index].answer_choice = answer_choice;
      }
    } else {
      // Add new answer choice
      const newAnswerChoice = this.createAnswerChoice(user_id, course_id, question_id, answer_choice);
      this.studentQuizSelection.push(newAnswerChoice);
    }
    this.saveSelections(); // Save to localStorage
  }

  getSelections() {
    return this.studentQuizSelection;
  }

  saveSelections() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.studentQuizSelection));
  }

  loadSelections() {
    const savedSelections = localStorage.getItem(this.storageKey);
    return savedSelections ? JSON.parse(savedSelections) : [];
  }

  getCurrentQtnAnswerChoice(question_id) {
    // Find the answer choice for the given question_id
    const selection = this.studentQuizSelection.find(
      (choice) => choice.question_id === question_id
    );
    console.log(`Selection for question_id ${question_id}:`, selection);
    return selection ? selection.answer_choice : null; // Return answer_choice or null if not found
  }
  
  removeAnswerChoice(question_id) {
    this.studentQuizSelection = this.studentQuizSelection.filter(
      (choice) => choice.question_id !== question_id
    );
    this.saveSelections();
  }

  initializeStorage() {
    const currentSession = new Date().toISOString(); // or another session identifier

    localStorage.setItem(this.sessionKey, currentSession);
    
    if (!localStorage.getItem(this.storageKey) || this.isNewSession()) {
      console.log('Initializing storage with default values');
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    } else {
      console.log('Storage already initialized');
    }
  }

  isNewSession() {
    const lastSession = localStorage.getItem(this.sessionKey);
    const currentSession = new Date().toISOString(); // or another session identifier

    // Implement logic to determine if it's a new session
    return lastSession !== currentSession;
  }

  clearSelections() {
    console.log('Clearing selections');
    this.studentQuizSelection = this.studentQuizSelection.map(() => ({
      user_id: 0,
      course_id: 0,
      question_id: 0,
      answer_choice: -1,
    }));
    this.saveSelections();

    // Optionally clear session key if needed
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.sessionKey);

  }

  // Updated method to check answers
  checkAnswers(questions) {
    return questions.map((question, index) => {
      const selectedChoiceIndex = this.getCurrentQtnAnswerChoice(index);
      const selectedChoice = selectedChoiceIndex !== null ? question.question_choices[selectedChoiceIndex] : null;
      const correctChoice = question.question_choices.find(choice => choice.correct);

      return {
        question: question.question_text,
        isCorrect: selectedChoice && selectedChoiceIndex === question.question_choices.indexOf(correctChoice)
      };
    });
  }
}

// Export an instance of the class
export const answerChoiceManager = new AnswerChoiceManager();
