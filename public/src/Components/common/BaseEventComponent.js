class BaseEventComponent {
  constructor() {
    this.eventListeners = {};
  }

  addEventListener(eventName, callback) {
    this.eventListeners[eventName] = callback;
  }
}

export default BaseEventComponent;
