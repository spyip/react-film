import React from 'react';
import ReactDOM from 'react-dom';

export default class EventSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    const { name } = this.props;
    const target = ReactDOM.findDOMNode(this.props.target);

    name && target && target.addEventListener(name, this.handleEvent, { passive: this.props.passive });
  }

  componentDidUpdate(prevProps) {
    const { name: prevName } = prevProps;
    const { name } = this.props;

    if (
      prevName !== name
      || prevProps.target !== this.props.target
    ) {
      const prevTarget = ReactDOM.findDOMNode(prevProps.target);
      const target = ReactDOM.findDOMNode(this.props.target);

      prevName && prevTarget && prevTarget.removeEventListener(prevName, this.handleEvent);
      name && target && target.addEventListener(name, this.handleEvent, { passive: this.props.passive });
    }
  }

  componentWillUnmount() {
    const { name } = this.props;
    const target = ReactDOM.findDOMNode(this.props.target);

    target && target.removeEventListener(name, this.handleEvent);
  }

  handleEvent(event) {
    this.props.onEvent && this.props.onEvent(event);
  }

  render() {
    return false;
  }
}
