

import uac from "../src/controllers/userAccountController.js"
//import QUnit from "./index.html"

QUnit.test("Register Login Logout",async function(assert)
{
    /*
        Register a new user.
        May need additional two factor steps for creating
        new accounts since anyone can do it right now
    */
    const userToCreate={
        name:"qunitNonAdminUser",
        password:"09j0dia00912hed890qw293irn0-af",
        secretInformation:"This is only accessible to this user"
    }

    await uac.register(userToCreate.name,userToCreate.password,userToCreate.secretInformation)
    assert.true(uac.newUserCreated.userId>0,"new user id was something")
    assert.equal(uac.newUserCreated.name,userToCreate.name, "name matches")
    assert.equal(uac.newUserCreated.password,null,          "responded password is gone. good.")
    assert.equal(uac.newUserCreated.secretInformation,null, "secretInformation was not revealed")
    

    /*
        Login successfully as that new user
    */
    await uac.login(`qunitNonAdminUser`,`09j0dia00912hed890qw293irn0-af`)
    assert.equal(uac.loggedInUser.name,`qunitNonAdminUser`, "name matches")
    assert.equal(uac.loggedInUser.password,null,            "responded password is gone. good.")
    assert.equal(uac.loggedInUser.secretInformation,null,   "secretInformation was not revealed")

    /*
        Access information only that user should have
    */
    await uac.myPrivateInfo()
    assert.equal(uac.loggedInUser.secretInformation,"This is only accessible to this user", "secret information matches")

    /*
            Successfully logout the logged in user
    */
    let logoutMessage=await uac.logout()
    assert.equal(logoutMessage,"You have been logged out","logout worked great")

    
    /*
        Check that the logged in user was set to null after logging out
    */
    let nothing=await uac.myPrivateInfo()
    assert.equal(nothing,"","Nothing happended when we get private info, we're already logged out.")



    /*
        Try to access the secret information without a tokenId or tokenPassword
        1. shows that others are denied access
        2. logged out user is also denied access
    */
    uac.loggedInUser={
        tokenId:"badGuyGuessingTokenId",
        tokenPassword:"badGuyGuessingTokenPassword",
    }

    try{
        await uac.myPrivateInfo()
        assert.true(false,"Error should have happened. Can not reach this")
    }catch(ex){
        //console.log(`ex.message=`,ex.message)
        assert.equal(ex.message,
            `response status 401 "No Valid session for account within database"`,
            `401 error was thrown`)
    }


    /*
        Remove the user we created during testing
        We're using our own tokens so only this logged in user can delete their account
    */
    await uac.login(`qunitNonAdminUser`,`09j0dia00912hed890qw293irn0-af`)

    const anyBody=await myFetch(`DELETE`,`/project1-back/development/user`,true,
        {
            tokenId:uac.loggedInUser.tokenId,
            tokenPassword:uac.loggedInUser.tokenPassword
        },null)
    assert.equal(anyBody.message,"Deleted user qunitNonAdminUser", "Response as successful")
})