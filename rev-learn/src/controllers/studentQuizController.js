import { quizDescription, QuizDescriptionDTO } from "../pages/Quiz/quiz-data";

export const getAllQuizzes = async () => {
  try {
    const response = await fetch("http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizzes", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.log("response is NOT ok.");
      console.log('Transaction response', response );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if( response.status >= 200 && response.status <= 299 ) {
      console.log('Transaction was successful');
  
      const body = await response.json();
  
      console.log("response.json is : ", body);
    } else if( response.status >= 400 && response.status <= 499 ) {
      console.log("response is a 400");
      // Read the response text
      const responseText = await response.text();
      console.log('Response Text with 400:', responseText);
    } else {
      // Read the response text
      const responseText = await response.text();
      console.log('Raw response:', responseText);
    }
  } catch (error) {
    console.log('Catch block error:', error);
  }

  console.log('Finished with get Quiz Details response:');
}

export const getAllQuizDetails = async () => {
  try {
    const response = await fetch("http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizzes", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.log("response is NOT ok.");
      console.log('Transaction response', response );
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if( response.status >= 200 && response.status <= 299 ) {
      console.log('Transaction was successful');
  
      const body = await response.json();
  
      console.log("response.json is : ", body);
    } else if( response.status >= 400 && response.status <= 499 ) {
      console.log("response is a 400");
      // Read the response text
      const responseText = await response.text();
      console.log('Response Text with 400:', responseText);
    } else {
      // Read the response text
      const responseText = await response.text();
      console.log('Raw response:', responseText);
    }
  } catch (error) {
    console.log('Catch block error:', error);
  }

  console.log('Finished with get Quiz Details response:');
}

export const getAllQuizQuestions = async () => {
//   console.log("🚀 ~ QuizItem ~ handleGetQuizDescription")
//   console.log("Getting Reservation");
//   const response = await fetch("http://127.0.0.1:8010/questions", {
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//   });
//   if( response.status >= 200 && response.status <= 299 ) {
//     console.log('Transaction was successful');
//     const body = await response.json();
//     console.log(body);
//     const newQuestions = body;
//     let nextIdx = quizQuestions[ quizQuestions.length - 1 ];
//     newQuestions.map((q, idx) => (
//       quizQuestions.push(
//         {
//           'question_seq': q.nextIdx, 
//           'question': q.questionText, 
//           'correct_choice' : 3,
//         }
//       )));
//     console.log(quizQuestions);
//   } else if( response.status >= 400 && response.status <= 499 ) {
//     console.log("response is a 400");
//     // Read the response text
//     const responseText = await response.text();
//     console.log('Response Text with 400:', responseText);
//   } else if (!response.ok) {
//     console.log("response is NOT ok.");
//     console.log('HTTP status code:', response.status);
//     console.log('HTTP status text:', response.statusText);
//     console.log('Empty response');
//     // Read the response text
//     const responseText = await response.text();
//     console.log('Raw response:', responseText);
//     if (response.headers.get('Content-Length') === '0') {
//       // Check if the response is okay and has content
//       console.log('HTTP status code:', response.status);
//       console.log('HTTP status text:', response.statusText);
//       console.log('Empty response');
//       throw new Error('Empty response');
//     }
//   }
}

export const getAllQuizAnswers = async () => {
  try {
    const response = await fetch("http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/choices", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    console.log("🚀 ~ getAllQuizAnswers ~ data:", data)
    
    
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export const getQuizAttemptByStudentId = async (userId) => {

  try {
    const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizAttemptsFromUser/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return unpackQuizDTO(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


export const getSingleIdQuiz = async (quizId) => {

  try {
    const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizzes/${quizId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return unpackQuizDTO(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


export const submitQuizAttempt = async (quizAttempt) => {

  const requestUrl = 
    "http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/newQuizAttempts";

  console.log( "Submit Quiz Attempt", quizAttempt );

  try {
    const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizAttempt)
    });

    if( response.status >= 200 && response.status <= 299 ) {
      console.log('Transaction was successful');

      const body = await response.json();

      console.log("Body: ", body);

    } else if( response.status >= 400 && response.status <= 499 ) {
      // Read the response text
      const responseText = await response.text();
      console.log('Error on Response:', responseText); 
    } else if (response.headers.get('Content-Length') === '0') {

      console.log('Empty response');
      // throw new Error('Empty response');
    } else {
      // Check if the response is okay and has content
      console.log('HTTP status code:', response.status);
      console.log('HTTP status text:', response.statusText || 'No status text available');
      // Read the response text
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      // throw new Error('Network response was not ok ' + response.statusText);
    }
  } catch (error) {
    console.log('Try/Catch Error: Empty response', error );
  }
}


export const simpleTest = async () => {
  fetch("http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/answers", {mode: 'no-cors'})
    .then(response => response.text())
    .then(data => {
      console.log("simpleTest()", data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

const unpackQuizDTO = (jsonData) => {
  
  // Create a QuizDTO object from the parsed JSON data
  const quizDescription = new QuizDescriptionDTO(
    jsonData.course_id,
    jsonData.title,
    jsonData.timer,
    jsonData.attempts_allowed,
    jsonData.open,
    jsonData.questions
  );
    
  // console.log("🎪 ~ unpackQuizDTO ~ quizDescription:", quizDescription);

  return quizDescription;
}
