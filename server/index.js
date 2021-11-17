const express = require('express'); //look inside of my node modules and give me access to all of my express

const path = require('path');//

const app = express()// we invoked the function express on line 1 to act

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))//normal get endpoint first parameter is backslash/2nd is callback function. Inside of the call back function is is we are responding by sending a file and inside the paranthesis the file that were sending, absolute file path. path.join will return the absolute file path and return index.htm,l which is relative file path, dirname is index.js file

})



const port = process.env.PORT || 4006//if i have a port variable inside my env file use that as my port and if it does not exist use 4005. This is going to get the port from heroku app or if we testing locally it will assign to 4005. 

app.listen(port, () =>{
    console.log(`My app is JAMMIN onn port number ${port}`)
});