// Create web server
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for new connections
io.on('connection', function(socket) {
  console.log('New client connected!');
});

server.listen(8080, function() {
  console.log('Server listening on port 8080');
});