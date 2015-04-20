'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	question: String, 
	answer: String, 
	value: Number
});

var TopicSchema = new Schema({
	questions: [QuestionSchema],
	topicName: String
});

var PlayerSchema = new Schema({
	name: String,
	score: Number
});

/**
 * Game Schema
 */
var GameSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please name your game'
	},
	topics: {
		type: [TopicSchema],
		default: [],
		required: 'Please add topics'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});
mongoose.model('Question', QuestionSchema);
mongoose.model('Topic', TopicSchema);
mongoose.model('Player', PlayerSchema);
mongoose.model('Game', GameSchema);