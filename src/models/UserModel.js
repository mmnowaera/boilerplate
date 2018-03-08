(function () {
  'use strict';

  app.UserModel = class UserModel extends app.Abstract.Model {
    constructor() {
      super();
    }

    getName() {
      return this.get('name');
    }
    getSurname() {
      return this.get('surname');
    }
    getEmail() {
      return this.get('email');
    }

    setName(name) {
      this.set('name', name);
      this.fireEvent('change', this.getUser());
    }
    setSurname(surname) {
      this.set('surname', surname);
      this.fireEvent('change', this.getUser());
    }
    setEmail(email) {
      this.set('email', email);
      this.fireEvent('change', this.getUser());
    }

    remove() {
      this.fireEvent('remove');
    }

    static isValidUserName(name) {
      return name.length;
    }

    static fromJSON(options) {
      const {name, surname, email, token} = options;
      const userModel = new app.UserModel();

      this.set('name', name);
      this.set('surname', surname);
      this.set('email', email);
      this.set('token', token);

      return userModel;
    }
  };

})();
