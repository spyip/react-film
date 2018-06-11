import React from 'react';

export default class CallFunction extends React.Component {
  componentDidMount() {
    const { props: { arg, fn } } = this;

    fn && fn(arg);
  }

  componentDidUpdate(prevProps) {
    const { props: { arg, fn } } = this;

    (arg !== prevProps.arg || fn !== prevProps.fn) && fn(arg);
  }

  render() {
    return false;
  }
}
