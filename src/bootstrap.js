(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', function () {
    const model = new app.TodoCollectionModel();
    const controller = new app.TodoController(model);
    const view = new app.TodoView(model, controller);

    controller.setView(view);
    console.log('Application start');
    document.body.appendChild(view.getRootEl());
    view.render();
    app.repositories.http.load()
        .then(data => {
            model.fromJSON(data);
        })
        .catch(err => {
            console.log(err);
        });
  });
})();
