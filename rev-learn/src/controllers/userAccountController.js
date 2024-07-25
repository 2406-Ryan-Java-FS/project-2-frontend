
/*
    Attemping to use controllers on the frontend.
    These can manage state/data.
    These can hold functions which can be called from React OR qunit for testing.

    Attempting to make the app testable.
    React side will go through menus/pages/modals and 
    make things look pretty, but I would like it to be 
    as dumb as possible so we aren't tangled in state management hell.
*/

export default class userAccountController
{
    static loggedInUser=null
    static newUserCreated=null

    //this should be removed and a gateway on the server should re-direct requests
    //React build can also be used to prepend all project urls with /project-2/ for example
    static tempUrl=""//"http://localhost:8080"

    /*
        This will avoid CORS errors and we won't need to 
        configure the server to allow cross origin since
        all requests will go through nginx port 80 on server

        nginx.conf to redirect /project-2-back/ to localhost:8080/
        location /project2-back/ {
			proxy_pass http://localhost:8080/;
		}
    */

    /**
     * Registers a new user initialized with the given username and password
     */
    static async signup(firstName,lastName,email,password)
    {
        console.log(`userAccountController signup() ${firstName} ${lastName} ${email} ${password}`)
        const response=await fetch(`/project-2-back/signup`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
                "password":password
            })
        })
        
        if(response.status!=200)
            throw new Error(JSON.stringify(response,null,2))
            //throw new Error(`response status ${response.status} ${response.statusText} ${await response.text()}`)

        let body=await response.json()

        userAccountController.newUserCreated=body
        console.log(`userAccountController.newUserCreated=`,userAccountController.newUserCreated)
    }

    /**
     * Sets the logged in user if the username and password works
     */
    static async login(username,password)
    {
        console.log(`userAccountController login() ${username} ${password}`)
        const response=await fetch(`${userAccountController.tempUrl}/users/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "username":username,
                "password":password
            }
        })
        let body=await response.json()

        if(response.status!=200)
            throw new Error(`response status ${response.status} `+JSON.stringify(body.errorMessage))

        userAccountController.loggedInUser=body
        console.log(`userAccountController.loggedInUser=`,userAccountController.loggedInUser)
    }

    /**
     * Fetches and stores the private information of the currently logged in user
     */
    static async myPrivateInfo()
    {
        console.log(`userAccountController myPrivateInfo()`)
        if(userAccountController.loggedInUser==null)return ""

        const response=await fetch(`${userAccountController.tempUrl}/users/my-private-info`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                tokenId:        userAccountController.loggedInUser.tokenId,
                tokenPassword:  userAccountController.loggedInUser.tokenPassword
            }
        })
        let body=await response.json()

        if(response.status!=200)
            throw new Error(`response status ${response.status} `+JSON.stringify(body.errorMessage))
        userAccountController.loggedInUser.secretInformation=body.secretInformation
    }

    /**
     * Logs out the currently logged in user
     */
    static async logout()
    {
        console.log(`userAccountController logout()`)
        if(userAccountController.loggedInUser==null)return

        const response=await fetch(`${userAccountController.tempUrl}/users/logout`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                tokenId:        userAccountController.loggedInUser.tokenId,
                tokenPassword:  userAccountController.loggedInUser.tokenPassword
            }
        })
        let body=await response.json()

        //error or not, frontend is logging out
        userAccountController.loggedInUser=null

        if(response.status!=200)
            throw new Error(`response status ${response.status} `+JSON.stringify(body.errorMessage))
        
        return body.message
    }

    
}