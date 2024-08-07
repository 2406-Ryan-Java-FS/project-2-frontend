/*
    Attemping to use controllers on the frontend.
    These can manage state/data.
    These can hold functions which can be called from React OR qunit for testing.

    Attempting to make the app testable.
    React side will go through menus/pages/modals and 
    make things look pretty, but I would like it to be 
    as dumb as possible so we aren't tangled in state management hell.
*/

export default class userAccountController {
  static loggedInUser = null;
  static newUserCreated = null;

  /**
   * Registers a new user initialized with the given username and password
   */
  static async signup(firstName, lastName, email, password, passwordConfirm) {
    //Need to do password confirm check

    console.log(
      `userAccountController signup() ${firstName} ${lastName} ${email} ${password}`
    );
    const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
      }}),
    });

    if (response.status != 201)
      throw new Error(JSON.stringify(response, null, 2));
    //throw new Error(`response status ${response.status} ${response.statusText} ${await response.text()}`)

    let body = await response.json();

    userAccountController.newUserCreated = body;
    console.log(
      `userAccountController.newUserCreated=`,
      userAccountController.newUserCreated
    );
  }

  /**
   * Sets the logged in user if the username and password works
   */
  static async signin(email, password) {
    console.log(`userAccountController login() ${email} ${password}`);
    const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Dont have it",
        lastName: "Dont have it",
        email: email,
        username: "Dont have it",
        password: password,
      }),
    });

    if (response.status != 200)
      throw new Error(JSON.stringify(response, null, 2));

    let body = await response.json();
    userAccountController.loggedInUser = body.user;
    userAccountController.loggedInUser.token = body.token;
    console.log(
      `userAccountController.loggedInUser=`,
      userAccountController.loggedInUser
    );
    localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser)); // Save as JSON string
  }

  /**
   * Fetches and stores the private information of the currently logged in user
   */
  static async myPrivateInfo() {
    console.log(`userAccountController myPrivateInfo()`);
    if (userAccountController.loggedInUser == null) return "";

    const response = await fetch(
      `${userAccountController.tempUrl}/users/my-private-info`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          tokenId: userAccountController.loggedInUser.tokenId,
          tokenPassword: userAccountController.loggedInUser.tokenPassword,
        },
      }
    );
    let body = await response.json();

    if (response.status != 200)
      throw new Error(
        `response status ${response.status} ` +
          JSON.stringify(body.errorMessage)
      );
    userAccountController.loggedInUser.secretInformation =
      body.secretInformation;
  }

  /**
   * Logs out the currently logged in user
   */
  static async logout() {
    console.log(`userAccountController logout()`);
    if (userAccountController.loggedInUser == null) return;

    const response = await fetch(
      `${userAccountController.tempUrl}/users/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          tokenId: userAccountController.loggedInUser.tokenId,
          tokenPassword: userAccountController.loggedInUser.tokenPassword,
        },
      }
    );
    let body = await response.json();

    //error or not, frontend is logging out
    userAccountController.loggedInUser = null;

    if (response.status != 200)
      throw new Error(
        `response status ${response.status} ` +
          JSON.stringify(body.errorMessage)
      );

    return body.message;
  }
}