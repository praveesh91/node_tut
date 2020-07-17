const path  = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events')
const http = require('http')



var pathObj = path.parse(__filename)
console.log(pathObj);

var totMem = os.totalmem()
var freeMem = os.freemem()
console.log(`The total memmory is ${totMem} and free memory is ${freeMem}`)

var syncFiles = fs.readdirSync('./');
console.log(`Files in the current folrder are ${syncFiles}`);

var asyncFiles = fs.readdir('../',function(err,value){
    if(err) console.log("Error", err)
    else console.log("Result", value)
})

var emitter = new EventEmitter();
//Register an emitter
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg)
})
//Raise an emitter
emitter.emit('messageLogged', {id:1, url:'http://demo.com'})
//We should always register an emitter beforebefore raising the emitter


var server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write("Hello World");
        res.end();
    }

    if(req.url === '/api/endpoint'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});
// server.on('connection', (socket) =>{
//     console.log("New connection")
// })
server.listen(3000)
console.log("Listening on port 3000....")