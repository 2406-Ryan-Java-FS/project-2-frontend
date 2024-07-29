## Using nginx as a gateway to serve frontend files and proxy requests to backend jars

WHY?

1. So you are not hard coding fetches to localhost:8080 in the frontend which will fail on aws.
2. So you can serve frontend files even when your backend is not working.
3. So you can proxy many requests from a frontend to any backend. microservice ideas.
4. So you can avoid CORS errors because the browser is going through the same port, 80.
5. So can easily setup https on your server in the future.

Download stable nginx command line tool https://nginx.org/en/download.html

```
cd ~
curl -O https://nginx.org/download/nginx-1.27.0.tar.gz
tar -xf nginx-1.27.0.tar.gz
```

1. Extract files to your home folder ~/

2. create and place nginx.exe into a bin folder at ~/bin/nginx.exe

3. open ~/conf/nginx.conf to configure it for proxying requests

4. Inside nginx.conf within http {} section, within server {} section, add these locations to redirect:
```
location / {
    proxy_pass http://localhost:3000/;
    root   html;
    index  index.html index.htm;
}

location /project-2-back/ {
	proxy_pass http://localhost:8080/;
}

location /project-2 {
    alias C:/Users/rene/project-2-frontend/rev-learn/build;
    try_files $uri $uri/ $uri/index.html =404;
}
```

5. Goto command line or gitbash and start nginx from your home folder ~ so it can read the conf folder
```start nginx```

6. In the browser, on port 80, goto localhost. It redirects to localhost:3000

7. It can also serve the React build folder from localhost/project-2

When changes are made to nginx.conf, reload the config using:
```nginx -s reload```

If you see this error, ```start nginx``` from where the conf folder is

nginx: [error] OpenEvent("Global\ngx_reload_9456") failed (2: The system cannot find the file specified)