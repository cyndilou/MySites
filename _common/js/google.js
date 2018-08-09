function GoogleAPIWrapper() {}

GoogleAPIWrapper.registerListeners = function (signInStatusListener, currentUserListener) {
    GoogleAPIWrapper.SIGNIN_STATUS_LISTENER = signInStatusListener;
    GoogleAPIWrapper.CURRENT_USER_LISTENER = currentUserListener;
};

GoogleAPIWrapper.load = function (scriptId, clientId, apiKey, discoveryDocs, scopes) {
    GoogleAPIWrapper.SCRIPT_ID = scriptId;
    GoogleAPIWrapper.CLIENT_ID = clientId;
    GoogleAPIWrapper.API_KEY = apiKey;
    GoogleAPIWrapper.DISCOVERY_DOCS = discoveryDocs;
    GoogleAPIWrapper.SCOPES = scopes; // Authorization scopes required by the API; multiple scopes can be included, separated by spaces.

    gapi.load('client:auth2', GoogleAPIWrapper.initClient);
};

GoogleAPIWrapper.initClient = function () {
    gapi.client.init({
        apiKey: GoogleAPIWrapper.API_KEY,
        clientId: GoogleAPIWrapper.CLIENT_ID,
        discoveryDocs: GoogleAPIWrapper.DISCOVERY_DOCS,
        scope: GoogleAPIWrapper.SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        if (GoogleAPIWrapper.SIGNIN_STATUS_LISTENER !== undefined) {
            gapi.auth2.getAuthInstance().isSignedIn.listen(GoogleAPIWrapper.SIGNIN_STATUS_LISTENER);

            // Handle the initial sign-in state.
            GoogleAPIWrapper.SIGNIN_STATUS_LISTENER(gapi.auth2.getAuthInstance().isSignedIn.get());
        }

        if (GoogleAPIWrapper.CURRENT_USER_LISTENER !== undefined) {
            gapi.auth2.getAuthInstance().currentUser.listen(GoogleAPIWrapper.CURRENT_USER_LISTENER);
            GoogleAPIWrapper.CURRENT_USER_LISTENER(gapi.auth2.getAuthInstance().currentUser.get());
        }
    });
};

GoogleAPIWrapper.signIn = function () {
    gapi.auth2.getAuthInstance().signIn();
};

GoogleAPIWrapper.signOut = function () {
    gapi.auth2.getAuthInstance().signOut();
};

GoogleAPIWrapper.runScript = function (functionName, parameters, successCallback, failureCallback) {
    // Call the Apps Script API run method
    gapi.client.script.scripts.run({
        'scriptId': GoogleAPIWrapper.SCRIPT_ID,
        'resource': {
            'function': functionName,
            'parameters': parameters
        }
    }).then(function (resp) {
        var result = resp.result;
        if (result.error && result.error.status) {
            // The API encountered a problem before the script
            // started executing.
            var message = 'Error calling API:\n' + JSON.stringify(result, null, 2);
        } else if (result.error) {
            // The API executed, but the script returned an error.

            // Extract the first (and only) set of error details.
            // The values of this object are the script's 'errorMessage' and
            // 'errorType', and an array of stack trace elements.
            var error = result.error.details[0];
            var message = error.errorMessage;

            console.error('Script error message: ' + message);

            if (error.scriptStackTraceElements) {
                // There may not be a stacktrace if the script didn't start
                // executing.
                console.error('Script error stacktrace:');
                for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
                    var trace = error.scriptStackTraceElements[i];
                    console.error('\t' + trace.function+':' + trace.lineNumber);
                }
            }

            failureCallback(message);
        } else {
            // The API was successful
            successCallback(result.response.result);
        }
    });
};

export {
    GoogleAPIWrapper
};
