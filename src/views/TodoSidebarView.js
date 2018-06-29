(function () {
    'use strict';
    app.TodoSidebarView = class TodoSidebarView extends app.Abstract.View {
      constructor() {
        super();
        this.setRootEl(document.createElement('div'));
      }

      fill(components = []) {
        components.forEach(component => {
            this.rootEl.appendChild(component.getRootEl());
            component.render();
        });
      }

      render() {
            this.rootEl.innerHTML = '';
            this.rootEl.style.width = '33%';
            this.rootEl.style.display = 'inline-block';
      }
    };
  })();
