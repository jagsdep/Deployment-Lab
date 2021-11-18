const express = require('express'); //look inside of my node modules and give me access to all of my express

const path = require('path');//

const app = express()// we invoked the function express on line 1 to act

//ROLLBAR
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: 'b88e6a2e08c146c0bee0065b6ef78965',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
//normal get endpoint first parameter is backslash/2nd is callback function. Inside of the call back function is is we are responding by sending a file and inside the paranthesis the file that were sending, absolute file path. path.join will return the absolute file path and return index.htm,l which is relative file path, dirname is index.js file

app.use('/css', express.static(path.join(__dirname, '../style.css')))//../ means look in my parent and find css file inside it
app.use('/images', express.static(path.join(__dirname, '../images')))



const port = process.env.PORT || 4006//if i have a port variable inside my env file use that as my port and if it does not exist use 4005. This is going to get the port from heroku app or if we testing locally it will assign to 4005. 

app.listen(port, () =>{
    console.log(`My app is JAMMIN onn port number ${port}`)
});