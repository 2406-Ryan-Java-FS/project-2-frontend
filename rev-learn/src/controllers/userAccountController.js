
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
    static tempUrl=""//"http://localhost:8080"

    /**
     * Registers a new user initialized with the given username and password
     */
    static async register(username,password,secretInformation="default secret info")
    {
        console.log(`userAccountController register() ${username} ${password} ${secretInformation}`)
        const response=await fetch(`${userAccountController.tempUrl}/users/register`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "name":username,
                "password":password,
                "secretInformation":secretInformation
            })
        })
        let body=await response.json()

        if(response.status!=200)
            throw new Error(`response status ${response.status} `+JSON.stringify(body.errorMessage))

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