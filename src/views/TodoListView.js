(function () {
    'use strict';
    app.TodoListView = class TodoListView extends app.Abstract.View {
      constructor(model, controller) {
        super(model, controller);
        this.setRootEl(document.createElement('ul'));
        this.model.addEventListener('change', () => {
            this.render();
        });
      }
      render() {
        this.rootEl.innerHTML = '';
        this.model.getItems().forEach(modelItem => {
            const view = new app.TodoItemView(modelItem, this.controller);
            view.render();
            this.rootEl.appendChild(view.getRootEl());
        });
      }
    };
  })();
