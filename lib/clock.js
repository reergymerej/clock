'use babel';

import ClockView from './clock-view';
import { CompositeDisposable } from 'atom';

export default {

  clockView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.clockView = new ClockView();
    this.panel = atom.workspace.addFooterPanel({
      item: this.clockView.getElement(),
      visible: false,
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(

      // Register command that toggles this view
      atom.commands.add('atom-workspace', {
        'clock:toggle': () => this.toggle()
      }),

      this.panel.onDidChangeVisible(this.onDidChangeVisible.bind(this))
    );
  },

  deactivate() {
    this.panel.destroy();
    this.subscriptions.dispose();
    this.clockView.destroy();
  },

  serialize() {
    return {
      clockViewState: this.clockView.serialize()
    };
  },

  onDidChangeVisible(visible) {
    this.clockView.toggle(visible);
  },

  toggle() {
    return this.panel.isVisible()
      ? this.panel.hide()
      : this.panel.show();
  },
};
