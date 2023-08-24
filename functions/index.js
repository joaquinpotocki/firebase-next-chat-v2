const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
    axios.post(
        "https://api.chatengine.io/users/",
        {
            username: user.email,
            secret: user.uid,
            email: user.email,
            first_name: user.displayName,
        },
        { headers: { "Private-Key": "c29c946e-b838-4e27-b20b-ca2db45ff7f5" } }
    );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
    axios.delete("https://api.chatengine.io/users/me/", {
        headers: {
            "Project-ID": "ef5aed91-72ec-449a-b65f-94be2c6e4dd4",
            "User-Name": user.email,
            "User-Secret": user.uid,
        },
    });
});