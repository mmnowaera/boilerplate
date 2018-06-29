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
        this.get('collection').push(item);
        this.fireEvent('change');
      }
      removeById(id) {
        const item = this.findItemById(id);
        if (!item) {
            return;
        }
        const index = this.get('collection').indexOf(item);
        item.fireEvent('remove');
        this.get('collection').splice(index, 1);
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
