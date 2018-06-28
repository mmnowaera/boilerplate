(function () {
    'use strict';

    app.TodoCollectionModel = class TodoCollectionModel extends app.Abstract.Model {
      constructor() {
        super();
        this.set('collection', []);
      }
      getItems() {
        return this.get('collection');
      }
      findItemById(id) {
        const store = this.get('collection');
        const result = store.filter(elem => (elem.get('id') === id));

        return result[0] || null;
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
      }
      removeById(id) {
        const item = this.findItemById(id);
        if (!item) {
            return;
        }
        item.fireEvent('remove');
      }
      fromJSON(data) {
          const array = [];
          data.forEach(item => {
            const itemModel = app.TodoItemModel.fromJSON(item);
            array.push(itemModel);
          });
          this.set('collection', array);
          this.fireEvent('change');
      }
    };

  })();
