'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

export default class ClockView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('clock');
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  toggle(visible) {
    return visible
      ? ReactDOM.render(<Clock />, this.element)
      : ReactDOM.unmountComponentAtNode(this.element);
  }
}
