const { application } = require("express");

module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "zach",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang,
	api
}) {
	if (event.body && event.body.toLowerCase() == "hi") return api.shareContact("━━━━━━━━━━━━━━━\nhello love, how can i help you?\n━━━━━━━━━━━━━━━",event.threadID, event.messsageID);
}
};