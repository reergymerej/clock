'use babel';

import React from 'react';
import moment from 'moment';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPrettyTime() {
    const format = 'dddd, MMMM Do YYYY, HH:mm:ss a';
    return moment(this.state.time).format(format);
  }

  render() {
    return (
      <div>{this.getPrettyTime()}</div>
    );
  }
}
