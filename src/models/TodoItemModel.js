(function () {
    'use strict';

    app.TodoItemModel = class TodoItemModel extends app.Abstract.Model {
      constructor() {
        super();
      }

      remove() {
        this.fireEvent('remove');
      }

      static fromJSON(options) {
        const {name, status, id} = options;
        const todoItemModel = new app.TodoItemModel();

        todoItemModel.set('name', name);
        todoItemModel.set('status', status);
        todoItemModel.set('id', id);

        return todoItemModel;
      }

      static isValid(name) {
          const isNotEmpty = name.length > 0;
          const isNotTooLong = name.length < 20;
          return (isNotEmpty && isNotTooLong);
      }
    };

  })();
