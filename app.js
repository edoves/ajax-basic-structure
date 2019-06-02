document.getElementById('button').addEventListener('click', loadData);



function loadData() {
    // 1. first step create a new XMLHttpRequest Object
    const xhr = new XMLHttpRequest();
    /*
        open(method, url)
        open(method, url, async)
        open(method, url, async, user)
        open(method, url, async, user, password)
        The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
        paramertes
        1. method
        2. url: A DOMString representing the URL to send the request to.
        3. async: An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. 
                  If this value is false, the send() method does not return until the response is received.
                  If true, notification of a completed transaction is provided using event listeners. 
                  This must be true if the multipart attribute is true, or an exception will be thrown.

    */
    // open the conenction recive 3 paramertes 
    xhr.open('GET', 'data.txt', true);

    // execution of Ajax call
    xhr.onload = function () {
        // Codes Status
        // 200: Correct
        // 403: Forbidden
        // 404: Not Found
        console.log(this);
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}<h1>`;
        }
    }

    /*
        xhr.onreadystatechange = function () {
            console.log('Ready State', xhr.readyState);
            // Ready States rxhr.readyState meanung ung codes
            // 0 = Unset
            // 1 = Opened
            // 2 = recieved
            // 3 = Loading
            // 4 = done
            if (this.status === 200 && this.readyState === 4) {
                document.getElementById('output').innerHTML = `<h1>${this.responseText}<h1>`;
            }
        }
    */

    // send the Request
    xhr.send();
}