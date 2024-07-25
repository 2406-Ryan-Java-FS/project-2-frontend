
/*
    npm run test command looks for files with .test.js extensions
*/

it('Registers, login, logout',async()=>{

    /*
        This will avoid CORS errors and we won't need to 
        configure the server to allow cross origin since
        all requests will go through nginx port 80 on server

        nginx.conf to redirect /project-2-back/ to localhost:8080/
        location /project2-back/ {
			proxy_pass http://localhost:8080/;
		}
    */
    let response=await fetch(`project-2-back/development`)
    let body=await response.text()
    console.log(`response text body=`,body)

    expect(response.status).toBe(200)
})