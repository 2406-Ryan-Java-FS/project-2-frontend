
#Prepends /project-2 to all the urls in the React build so it can fetch it's own files

#nginx can serve the build folder on localhost/project-2

##WATCH OUT!!! The beginning / must have a space, otherwise this command will append the wrong thing to all the links
# PUBLIC_URL=" /project-2" npx react-scripts build

npx react-scripts build

#Links and Route components change the browser url. They are not what they seem.