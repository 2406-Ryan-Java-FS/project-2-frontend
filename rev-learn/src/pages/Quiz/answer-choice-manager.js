
class AnswerChoiceManager {
  constructor() {
    this.storageKey = 'studentQuizSelection'; // Key for localStorage
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

  addAnswerChoice(user_id, course_id, question_id, answer_choice) {
    const newAnswerChoice = this.createAnswerChoice(user_id, course_id, question_id, answer_choice);
    this.studentQuizSelection.push(newAnswerChoice);
    this.saveSelections(); // Save to localStorage
  }

  addOrUpdateAnswerChoice(user_id, course_id, question_id, answer_choice) {
    // Check if the question_id already exists
    const index = this.studentQuizSelection.findIndex(
      (choice) => choice.question_id === question_id
    );

    if (index !== -1) {
      // Update existing answer choice
      this.studentQuizSelection[index].answer_choice = answer_choice;
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
    return selection ? selection.answer_choice : null; // Return answer_choice or null if not found
  }

  initializeStorage() {
    // Check if storage is empty or needs initialization
    if (localStorage.getItem(this.storageKey) === null) {
      // Set default values if needed
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
}

// Export an instance of the class
export const answerChoiceManager = new AnswerChoiceManager();
