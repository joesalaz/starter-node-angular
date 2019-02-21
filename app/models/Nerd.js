// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('I\'m a Nerd', {
	name : {type : String, default: ''}
});
