(function () {
    'use strict';
    app.TodoView = class TodoView extends app.Abstract.View {
      constructor(model, controller) {
        super(model, controller);
        this.setRootEl(document.createElement('div'));
        this.model.addEventListener('change', () => {
            this.render();
        });
      }
      render() {
        this.rootEl.innerHTML = '<ul></ul>';
        const todoInputView = new app.TodoInputView(this.model, this.controller);
        this.rootEl.prepend(todoInputView.getRootEl());
        todoInputView.render();
        this.model.getItems().forEach(modelItem => {
            const view = new app.TodoItemView(modelItem, this.controller);
            this.rootEl.querySelector('ul').appendChild(view.getRootEl());
            view.render();
        });
      }
    };
  })();
