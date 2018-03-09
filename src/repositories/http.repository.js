(function () {
  'use strict';

  class HTTPRepository {
    constructor(options) {
      const {rootUrl} = options;
      const localStorageUser = localStorage.getItem('loggedUser') || null;
      this.rootUrl = rootUrl || '/';
      this.loggedUser = (localStorageUser)
        ? app.UserModel.fromJSON(JSON.parse(localStorageUser))
        : null;
      this.token = (localStorageUser)
        ? this.loggedUser.get('token')
        : null;
    }
    login(data) {
      const {login, password} = data;

    }
  }

  app.repositories.http = new HTTPRepository();
})();
