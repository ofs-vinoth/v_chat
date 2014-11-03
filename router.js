var chat = require("./routes/chat");

module.exports = function(app) {
	app.get('/chat', chat);
};