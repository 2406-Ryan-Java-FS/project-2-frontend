
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
    static baseUrl=`/project-2-back` //uses nginx to re-direct on local and on server

    /**
     * Registers a new user initialized with the given username and password
     */
    static async signup(firstName,lastName,email,password,passwordConfirm)
    {
        //Need to do password confirm check

        console.log(`userAccountController signup() ${firstName} ${lastName} ${email} ${password}`)
        const response=await fetch(`${userAccountController.baseUrl}/users2/signup`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "user":{
                    "firstName":firstName,
                    "lastName":lastName,
                    "email":email,
                    "password":password
                },
                "educator":{

                }
            })
        })
        
        if(response.status!=201)
            throw new Error(JSON.stringify(response,null,2))
            //throw new Error(`response status ${response.status} ${response.statusText} ${await response.text()}`)

        let body=await response.json()
        userAccountController.newUserCreated=body.user
        userAccountController.newUserCreated.token=body.token
        console.log(`newUserCreated=`,userAccountController.newUserCreated)
    }

    /**
     * Sets the logged in user if the username and password works
     */
    static async signin(email,password)
    {
        console.log(`userAccountController signin() ${email} ${password}`)
        const response=await fetch(`${userAccountController.baseUrl}/users2/signin`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "user":{
                    "firstName":"Dont have it",
                    "lastName":"Dont have it",
                    "email":email,
                    "username":"Dont have it",
                    "password":password
                },
                "educator":{

                }
            })
        })
        
        if(response.status!=200)
            throw new Error(JSON.stringify(response,null,2))

        let body=await response.json()
        userAccountController.loggedInUser=body.user
        userAccountController.loggedInUser.token=body.token
        console.log(`userAccountController.loggedInUser=`,userAccountController.loggedInUser)
    }

    /**
     * Logs out the currently logged in user
     */
    static async signout()
    {
        console.log(`userAccountController signout()`)
        if(userAccountController.loggedInUser==null)return

        const response=await fetch(`${userAccountController.baseUrl}/users2/signout`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                token:userAccountController.loggedInUser.token
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