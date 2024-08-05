
#nginx can proxy pass localhost/s3 into someones aws S3 bucket

#Prepends /s3 to all the urls in the React build so it can fetch it's own files
##WATCH OUT!!! The beginning / must have a space, otherwise this command will append the wrong thing to all the links

BUILD_PATH=./s3 PUBLIC_URL=" /s3" npx react-scripts build

#Links and Route components change the browser url. They are not what they seem.