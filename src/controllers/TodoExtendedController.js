(function () {
    'use strict';
    app.TodoExtendedController = class TodoExtendedController extends app.TodoController {
        constructor(model) {
            super(model);
            this.i = 0;
        }
        addItem(name) {
            if (app.TodoItemModel.isValid(name)) {
                const newModel = app.TodoItemModel.fromJSON({
                    name,
                    status: 'unresolved',
                    id: this.i++,
                });
                this.model.setItem(newModel);
            } else {
                console.error('client: nie dziala dodawanie');
            }
        }
        removeItem(id) {
            this.model.removeById(parseInt(id));
        }
        toggleItemStatus(id) {
            const itemModel = this.model.findItemById(id);
            if (itemModel) {
                itemModel.toggleStatus();
            }
        }
    };
  })();
