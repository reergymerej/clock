'use babel';

import ClockView from './clock-view';
import { CompositeDisposable } from 'atom';

export default {

  clockView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.clockView = new ClockView(state.clockViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.clockView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'clock:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.clockView.destroy();
  },

  serialize() {
    return {
      clockViewState: this.clockView.serialize()
    };
  },

  toggle() {
    console.log('Clock was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
