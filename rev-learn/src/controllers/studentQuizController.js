

export const getAllQuizzes = async () => {

  try {
    const response = await fetch("http://127.0.0.1:8010/quizzes", {
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



export const getQuizDetails = async () => {

  try {
    const response = await fetch("http://127.0.0.1:8010/quizzes", {
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

  console.log("🚀 ~ QuizItem ~ handleGetQuizDescription")
  console.log("Getting Reservation");

  const response = await fetch("http://127.0.0.1:8010/questions", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
  });

  if( response.status >= 200 && response.status <= 299 ) {
    console.log('Transaction was successful');

    const body = await response.json();

    console.log(body);
  } else if( response.status >= 400 && response.status <= 499 ) {
    console.log("response is a 400");

    // Read the response text
    const responseText = await response.text();
    console.log('Response Text with 400:', responseText);
  } else if (!response.ok) {
    console.log("response is NOT ok.");

    console.log('HTTP status code:', response.status);
    console.log('HTTP status text:', response.statusText);
    console.log('Empty response');
    
    // Read the response text
    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (response.headers.get('Content-Length') === '0') {
      // Check if the response is okay and has content
      console.log('HTTP status code:', response.status);
      console.log('HTTP status text:', response.statusText);
      console.log('Empty response');
      
      throw new Error('Empty response');
    }
  }
}

/**
 * Logs out the currently logged in user
 */
export const getAllQuizAnswers = async () => {

  try {
    const response = await fetch("http://127.0.0.1:8010/quizzes/9", {
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
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export const simpleTest = async () => {

  fetch("http://127.0.0.1:8010/answers", {mode: 'no-cors'})
    .then(response => response.text())
    .then(data => {
      console.log("simpleTest()", data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
