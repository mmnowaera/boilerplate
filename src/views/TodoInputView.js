(function () {
    'use strict';

    app.TodoInputView = class TodoInputView extends app.Abstract.View {
        constructor(model, controller) {
            super(model, controller);
            this.setRootEl(document.createElement('form'));
        }

        render() {
            this.rootEl.innerHTML = `
                <input type="text" class="new-todo">
                <input type="submit" value="dodej">`;
            this.rootEl.addEventListener('submit', event => {
                event.preventDefault();
                this.controller.addItem(this.rootEl.querySelector('.new-todo').value);
            });
        }
    };

  })();
