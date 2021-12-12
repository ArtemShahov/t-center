import BaseEventComponent from "./BaseEventComponent.js";

class ContextMenu extends BaseEventComponent {
  constructor($node, options) {
    super();
    this.options = options;
    this.$view = document.createElement('div');
    this.$menu = document.createElement('ul');

    this.options.forEach(item => {
      this.$menu.append(this.createOption(item));
    });
    this.$view.append(this.$menu);

    this.$view.classList.add('back-drop');
    this.$menu.classList.add('context-menu');
    this.$node = $node;
    this.$node.addEventListener('click', this.openModal.bind(this));
    this.$view.addEventListener('click', this.closeModal.bind(this));
    this.$view.addEventListener('click', this.onItemClick.bind(this));
  }

  openModal(event) {
    document.body.append(this.$view);
    this.$menu.style.top = event.clientY + 'px';
    this.$menu.style.left = event.clientX + 'px';
  }

  closeModal() {
    this.$view.remove();
  }

  createOption(option) {
    const $item = document.createElement('li');
    $item.classList.add('context-menu__item')
    $item.textContent = option.label;
    $item.dataset.action = option.onClick;
    return $item;
  }

  onItemClick(event) {
    const { action } = event.target.dataset;
    if (this.eventListeners[action]) {
      this.eventListeners[action]();
    }
  }
}

export default ContextMenu;