import * as functions from "firebase-functions";
import axios from "axios";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const client = axios.create({
    baseURL: 'https://cloudrun-api-thuvxv3vya-an.a.run.app/',
    timeout: 5000
});  

module.exports.helloWorld = functions.https.onCall((request, response) => {
    return {message: "Hello"}
});

module.exports.test1 = functions.https.onCall((request, response) => {
    return {message: "test1"}
});

module.exports.test2 = functions.https.onCall((request, response) => {

    client.get('/test2')
    .then(function(response: any) {
        console.log(response.data);
    })
    .catch(function (error: any) {
        console.log(error);
    }); 
    return {message: "test2"}
});
