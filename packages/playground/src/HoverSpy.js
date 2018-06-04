import React from 'react';

import EventSpy from './EventSpy';

export default class HoverSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePointerEnter = this.handlePointerEnter.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);

    this.state = { pointers: {} };
  }

  handlePointerEnter({ pointerId }) {
    this.setState(({ pointers }) => {
      if (
        this.props.onEnter
        && !Object.keys(pointers).length
      ) {
        this.props.onEnter();
      }

      return {
        pointers: {
          ...pointers,
          [pointerId]: true
        }
      };
    });
  }

  handlePointerLeave({ pointerId }) {
    this.setState(({ pointers }) => {
      pointers = { ...pointers };

      delete pointers[pointerId];

      if (
        this.props.onLeave
        && !Object.keys(pointers).length
      ) {
        this.props.onLeave();
      }

      return { pointers };
    });
  }

  render() {
    return (
      <React.Fragment>
        <EventSpy
          name="pointerenter"
          onEvent={ this.handlePointerEnter }
          target={ this.props.target }
        />
        <EventSpy
          name="pointerleave"
          onEvent={ this.handlePointerLeave }
          target={ this.props.target }
        />
      </React.Fragment>
    );
  }
}
