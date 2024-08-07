
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
    static newUserCreated=null

    /**
     * Registers a new user initialized with the given username and password
     */
    static async signup(firstName,lastName,email,password,passwordConfirm)
    {
        //Need to do password confirm check

        console.log(`userAccountController signup() ${firstName} ${lastName} ${email} ${password}`)
        const response=await fetch(`/project-2-back/users2/signup`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user:{
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    role:`educator`
                },
                educator:{
                    degreeLevel : "Dont have it",
                    degreeMajor : "Dont have it",
                    almaMater : "Dont have it",
                    yearOfHire : "Dont have it"
                }
            })
        })
        
        if(response.status!=201)
            throw new Error(await response.text())
            //throw new Error(`response status ${response.status} ${response.statusText} ${await response.text()}`)

        let body=await response.json()
        userAccountController.newUserCreated=body
        userAccountController.newUserCreated.token=body.token
        console.log(`newUserCreated=`,userAccountController.newUserCreated)
    }

    /**
     * Sets the logged in user if the username and password works
     */
    static async signin(email,password)
    {
        console.log(`userAccountController signin() ${email} ${password}`)
        const response=await fetch(`/project-2-back/users2/signin`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user:{
                    firstName:"Dont have it",
                    lastName:"Dont have it",
                    email:email,
                    username:"Dont have it",
                    password:password
                },
                educator:{
                    degreeLevel : "Dont have it",
                    degreeMajor : "Dont have it",
                    almaMater : "Dont have it",
                    yearOfHire : "Dont have it"
                }
            })
        })
        
        if(response.status!=200)
            throw new Error(await response.text())

        let loggerInUser=await response.json()
        loggerInUser.token=`Bearer ${loggerInUser.token}`
        localStorage.setItem("loggedInUser",JSON.stringify(loggerInUser))
        console.log(`userAccountController.getLoggedInUser()=`,userAccountController.getLoggedInUser())
    }

    /**
     * Bearer is already prepended to the token
     * Returns the logged in user object:
     * @example
     * {
     *  "token":"Bearer thisIsTheBase64encodedJWT"
     *  "user" : {
            "userId" : 0,
            "firstName" : null,
            "lastName" : null,
            "email" : null,
            "role" : null
            },
        "educator" : {
            "educatorId" : 0,
            "degreeLevel" : null,
            "degreeMajor" : null,
            "almaMater" : null,
            "year" : null
            }
        }
     */
    static getLoggedInUser()
    {
        let loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"))
        //console.log(`getLoggedInUser() loggedInUser=`,loggedInUser)
        return loggedInUser
    }

    /**
     * Logs out the currently logged in user
     */
    static async signout()
    {
        console.log(`userAccountController signout()`)
        if(userAccountController.getLoggedInUser()==null)return

        //There is no sign out on the backend I guess
        // const response=await fetch(`/project-2-back/users2/signout`,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //         token:userAccountController.getLoggedInUser().token
        //     }
        // })
        // let body=await response.json()

        //error or not, frontend is logging out
        localStorage.removeItem("loggedInUser")

        // if(response.status!=200)
        //     throw new Error(await response.text())
        
        // return body.message
    }

    
}