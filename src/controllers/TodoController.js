(function () {
    'use strict';

    app.TodoController = class TodoController extends app.Abstract.Controller {
        constructor(model) {
            super(model);
        }
        addItem(name) {
            if (app.TodoItemModel.isValid(name)) {
                app.repositories.http.save({name, status: 'unresolved'})
                    .then(data => {
                        const newModel = app.TodoItemModel.fromJSON(data);
                        this.model.setItem(newModel);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else {
                console.error('client: nie dziala dodawanie');
            }
        }
        removeItem(id) {
            app.repositories.http.remove(id)
                .then(() => {
                    this.model.removeById(parseInt(id));
                })
                .catch(err => {
                    console.error(err);
                });
        }
        toggleItemStatus(id) {
            const itemModel = this.model.findItemById(id);
            if (itemModel) {
                const status = (itemModel.get('status') === 'done') ? 'unresolved' : 'done';
                app.repositories.http.updateItemById({name: itemModel.get('name'), id, status})
                    .then(() => {
                        itemModel.toggleStatus();
                })
                .catch(err => {
                    console.error(err);
                });
            }
        }
    };
  })();
