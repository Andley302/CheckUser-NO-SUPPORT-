const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const https = require('https');
const express = require("express");
const cors = require('cors');
var mysql = require('mysql');
require('dotenv').config();
//AQUI SEUS DADOS DO MYSQL
var getPass = process.env.MYSQL_PASS;


var app = express();

app.use(cors());
// app.use(timeout(120000));
// app.use(haltOnTimedout);
app.use(express.json({
    limit: '20mb',
    extended: true
}));

var scriptPort = process.env.PORT ? process.env.PORT : 8989;

if (process.env.HTTPS == 1) { //with ssl
    https.createServer(
        {
            key: fs.readFileSync(process.env.SSL_KEY_PATH),
            cert: fs.readFileSync(process.env.SSL_CERT_PATH)
        },
        app).listen(scriptPort);
    console.log("Https server running on port " + scriptPort);
} else { //http
    app.listen(scriptPort, () => {
        console.log("Http server running on port " + scriptPort);
    });
}//http

app.post("/checkUser", async function checkUser(req,user) {
	var usertoCheck = req.body.user;
	
	connectToDatabase(usertoCheck,user);
});//sendText

async function connectToDatabase(usertoCheck,user){
	//CRIA NOVA CONEXAO
	var con = mysql.createConnection({ 
    host : "localhost",
    database : "sshplus",
    user : "root",
    password : getPass
});

	resultToReturn = '';
    con.connect(function(err) {
      if (err) throw err;
        con.query("SELECT * FROM usuario_ssh", function (err, result, fields) {
          if (err) throw err;
		   
          //console.log(result);
		  
		  //CONSULTA USUÁRIO
		  const resultToParse = Object.values(JSON.parse(JSON.stringify(result)));
		  var getUser  = resultToParse.filter(function (selection){ 
               return selection.login === usertoCheck;
          });	
		  
		 

		  //PEGA DATA 
		  var getData = getUser[0].data_validade;
		  var format_data = new Date(getData).toISOString().slice(0, 10).replace('T', ' ')
		  console.log("Validade: " + format_data);
		  
		  //FORMATA PARA RESPONDER REQUEST
		
		  var resultToSend = format_data;
	
		  //RETORNA RESPOSTA
		  console.log("Send response...");
		  user.json(resultToSend);
		  
		  //LOG
		  console.log(resultToSend);
	
        });

    });
    return resultToReturn;
}



async function exitHandler(options, exitCode) {
    if (options.cleanup) {
        console.log('cleanup');
        await Sessions.getSessions().forEach(async session => {
            await Sessions.closeSession(session.sessionName);
        });
    }
    if (exitCode || exitCode === 0) {
        console.log(exitCode);
    }

    if (options.exit) {
        process.exit();
    }
} //exitHandler 
//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));
//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
