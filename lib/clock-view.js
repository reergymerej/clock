'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

export default class ClockView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('clock');

    ReactDOM.render(<Clock />, this.element);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
