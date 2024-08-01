
/*
    npm run test command looks for files with .test.js extensions
*/

const { default: uac } = require("./controllers/userAccountController")

it('Registers, signs in, signs out',async()=>
{
    const response=await fetch(`/project-2-back/clear-all`,{method:"DELETE"})
    expect(await response.text()).toBe("Cleared all database tables");

    await uac.signup("testFirstName","testLastName","testEmail","testPass","testPass")
    expect(uac.newUserCreated.firstName).toBe("testFirstName")
    expect(uac.newUserCreated.lastName) .toBe("testLastName")
    expect(uac.newUserCreated.email)    .toBe("testEmail")
    expect(uac.newUserCreated.password) .toBe(undefined)

    await uac.signin("testEmail","testPass")
    console.log(`uac.loggedInUser=`,uac.loggedInUser)
    expect(uac.loggedInUser.firstName).toBe("testFirstName")
    expect(uac.loggedInUser.lastName) .toBe("testLastName")
    expect(uac.loggedInUser.email)    .toBe("testEmail")
    expect(uac.loggedInUser.password) .toBe(undefined)

    
    await uac.signout()
})