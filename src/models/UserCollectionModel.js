(function () {
  'use strict';

  app.UserCollectionModel = class UserCollectionModel extends app.Abstract.Model {
    constructor() {
      super();
      this.set('collection', []);
    }
    getItems() {
      return this.get('collection');
    }
    findItem(query) {
      const store = this.get('collection');
      const result = store.filter(elem => (elem.getName() === query));

      return result;
    }
    setItem(item) {
      item.addEventListener('remove', () => {
        this.removeItem(item);
      });
      this.get('collection').push(item);
      this.fireEvent('change');
    }
    removeItem(item) {
      if (!item) {
        return;
      }
      const index = this.get('collection').indexOf(item);
      this.get('collection').splice(index, 1);
      this.fireEvent('change');
    }
  };

})();
