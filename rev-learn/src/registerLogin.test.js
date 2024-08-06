
/*
    npm run test command looks for files with .test.js extensions
*/

const { default: uac } = require("./controllers/userAccountController")

it('Registers, signs in, signs out',async()=>
{
    const response=await fetch(`/project-2-back/clear-all`,{method:"DELETE"})
    expect(await response.text()).toBe("Cleared all database tables");

    await uac.signup("testFirstName","testLastName","testEmail","testPass","testPass")
    expect(uac.newUserCreated.user.firstName).toBe("testFirstName")
    expect(uac.newUserCreated.user.lastName) .toBe("testLastName")
    expect(uac.newUserCreated.user.email)    .toBe("testEmail")
    expect(uac.newUserCreated.user.password) .toBe(undefined)

    await uac.signin("testEmail","testPass")
    console.log(`uac.getLoggedInUser()=`,uac.getLoggedInUser())
    expect(uac.getLoggedInUser().user.firstName).toBe("testFirstName")
    expect(uac.getLoggedInUser().user.lastName) .toBe("testLastName")
    expect(uac.getLoggedInUser().user.email)    .toBe("testEmail")
    expect(uac.getLoggedInUser().user.password) .toBe(undefined)


    

    
    await uac.signout()
})