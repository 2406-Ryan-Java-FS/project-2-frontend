
/*
    npm run test command looks for files with .test.js extensions
*/

const { default: uac } = require("./controllers/userAccountController")

it('Registers, login, logout',async()=>
{
    const response=await fetch(`/project-2-back/clear-all`,{method:"DELETE"})
    expect(await response.text()).toBe("Cleared all database tables");

    await uac.signup("testFirstName","testLastName","testEmail","testPass","testPass")
    

    await uac.signin("testEmail","testPass")
    console.log(`uac.loggedInUser=`,uac.loggedInUser)
    expect(uac.newUserCreated.firstName).toBe("testFirstName")
    expect(uac.newUserCreated.lastName) .toBe("testLastName")
    expect(uac.newUserCreated.email)    .toBe("testEmail")
    expect(uac.newUserCreated.password) .toBe(undefined)

    
    // let response=await fetch(`project-2-back/development`)
    // let body=await response.text()
    // console.log(`response text body=`,body)

    //expect(response.status).toBe(200)
})