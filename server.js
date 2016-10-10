var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');

function accept(req, res) 
{
	var obj;
    switch(req.url)
    {
	    case '/vote':
	    {
		  obj=fs.readFileSync('\\test\\objects.json', 'utf8');
		  res.end(obj);
		  break;
	    }
	    case '/recept':
	    {
		   obj=fs.readFileSync('\\test\\recepts.json', 'utf8');
		   res.end(obj);
		   break; 
	    }
	    default:
	    {
		  file.serve(req, res);
	    }
    }
}
http.createServer(accept).listen(8080);