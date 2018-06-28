(function () {
    'use strict';
    app.TodoItemView = class TodoItemView extends app.Abstract.View {
      constructor(model, controller) {
        super(model, controller);
        this.setRootEl(document.createElement('li'));
        model.addEventListener('remove', () => {
            this.rootEl.parentNode.removeChild(this.rootEl);
        });
      }
      render() {
          this.rootEl.innerHTML = `
            ${this.model.get('name')}
            <button class="remove-item">usun</button>`;
            this.rootEl.querySelector('.remove-item')
                .addEventListener('click', event => {
                    event.preventDefault();
                    this.controller.removeItem(this.model.get('id'));
                });
      }
    };
  })();
