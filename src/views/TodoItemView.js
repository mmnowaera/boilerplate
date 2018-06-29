(function () {
    'use strict';
    app.TodoItemView = class TodoItemView extends app.Abstract.View {
      constructor(model, controller) {
        super(model, controller);
        this.setRootEl(document.createElement('li'));
        model.addEventListener('remove', () => {
            this.rootEl.remove();
        });
        model.addEventListener('change', () => {
            this.render();
        });
      }
      render() {
          this.rootEl.innerHTML = `
            <input class='status-box' type='checkbox' ${this.model.get('status') === 'done' ? 'checked' : ''}>
            ${this.model.get('name')}
            <button class="remove-item">usun</button>`;
            this.rootEl.querySelector('.remove-item')
                .addEventListener('click', event => {
                    event.preventDefault();
                    this.controller.removeItem(this.model.get('id'));
                });
            this.rootEl.querySelector('.status-box')
                .addEventListener('click', event => {
                    event.preventDefault();
                    this.controller.toggleItemStatus(this.model.get('id'));
                });
      }
    };
  })();
