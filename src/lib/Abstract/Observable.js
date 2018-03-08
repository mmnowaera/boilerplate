(function () {
  'use strict';
  app.Abstract.Observable = class Observable {
    constructor() {
      this.events = {};
    }

    addEventListener(eventName, callback) {
      if (!(eventName in this.events)) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }

    fireEvent(eventName, data) {
      if (Array.isArray(this.events[eventName])) {
        // Copy events to prevent detaching callbacks by themself
        const events = this.events[eventName].concat([]);
        events.forEach(evt => evt(data));
      }
    }
  };
})();
