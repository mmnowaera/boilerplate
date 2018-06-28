(function () {
    'use strict';
    class TodoRepository {
        constructor() {
            this.url = 'http://localhost:8080/';
        }
        save(item) {
            const {name, status} = item;
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('POST', `${this.url }tasks`, true);
                request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                request.onload = function () {
                    if (request.status >= 200 && request.status < 400) {
                        // Success!
                        const data = JSON.parse(request.responseText);
                        resolve(data);
                    } else {
                        // We reached our target server, but it returned an error
                        reject({msg: 'nie dziala'});
                    }
                };
                request.onerror = function () {
                // There was a connection error of some sort
                    reject({msg: 'nie dziala'});
                };
                request.send(JSON.stringify({name, status}));
            });
        }
        remove(id) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('DELETE', `${this.url }tasks/${id}`, true);
                request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    const resp = request.responseText;
                    resolve(resp);
                } else {
                    // We reached our target server, but it returned an error
                    reject({msg: 'server: nie dziala usuwanie'});
                }
                };
                request.onerror = function () {
                    // There was a connection error of some sort
                    reject({msg: 'client: nie dziala usuwanie'});
                };
                request.send();
            });
        }
        load() {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                // reject({msg: 'nie dziala'});
                request.open('GET', `${this.url }tasks`, true);
                request.onload = function () {
                    if (request.status >= 200 && request.status < 400) {
                        // Success!
                        const data = JSON.parse(request.responseText);
                        resolve(data);
                    } else {
                        // We reached our target server, but it returned an error
                        reject({msg: 'nie dziala'});
                    }
                };
                request.onerror = function () {
                // There was a connection error of some sort
                    reject({msg: 'nie dziala'});
                };
                request.send();
            });
        }
    }
    app.repositories.http = new TodoRepository({});
})();
