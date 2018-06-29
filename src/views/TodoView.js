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
        this.rootEl.innerHTML = '';

        const todoInputView = new app.TodoInputView(this.model, this.controller);
        const todoListView = new app.TodoListView(this.model, this.controller);

        const alternativeModel = new app.TodoCollectionModel();
        const alternativeController = new app.TodoAlternativeController(alternativeModel);

        const todoInputView2 = new app.TodoInputView(alternativeModel, alternativeController);
        const todoListView2 = new app.TodoListView(alternativeModel, alternativeController);

        const todoListView3 = new app.TodoListView(this.model, this.controller);

        const sidebar1 = new app.TodoSidebarView();
        this.rootEl.appendChild(sidebar1.getRootEl());
        sidebar1.render();
        sidebar1.fill([
            todoInputView,
            todoListView,
        ]);

        const sidebar2 = new app.TodoSidebarView();
        this.rootEl.appendChild(sidebar2.getRootEl());
        sidebar2.render();
        sidebar2.fill([
            todoInputView2,
            todoListView2,
        ]);

        const sidebar3 = new app.TodoSidebarView();
        this.rootEl.appendChild(sidebar3.getRootEl());
        sidebar3.render();
        sidebar3.fill([
            todoListView3,
        ]);
      }
    };
  })();
