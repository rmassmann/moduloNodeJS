//importar lib http
var http = require('http');

http.createServer(function (req, res){

	if(req.method == 'GET'){
		// valida path da url
		if(req.url == '/hello'){
			//codigo http e formato da resposta
			res.writeHead(200, {
			'Content-Type':
			'text/html'});
			res.write('Hello world');
		}else{
			res.writeHead(400, {
			'Content-Type':
			'text/html'});
			res.write('DENIED');
		}	
	}else{
			//codigo http e formato da resposta
		res.writeHead(405, {
			'Content-Type':
			'text/html'
		});
		res.write('Method Not Allowed');
	}
		
	return res.end();
	
}).listen(2121);