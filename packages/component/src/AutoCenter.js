import React from 'react';

import FilmContext from './FilmContext';

class Delay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.start && this.schedule();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.start !== this.props.start
      || prevProps.duration !== this.props.duration
    ) {
      clearTimeout(this.timeout);

      this.props.start && this.schedule();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  schedule() {
    this.timeout = setTimeout(() => {
      this.props.onTrigger && this.props.onTrigger();
    }, this.props.duration);
  }

  render() {
    return false;
  }
}

export default class AutoCenter extends React.Component {
  render() {
    return (
      <FilmContext.Consumer>
        { context =>
          <Delay
            duration={ this.props.delay }
            onTrigger={ () => context.scrollTo(({ indexFraction }) => Math.round(indexFraction)) }
            start={ !context.scrolling }
          />
        }
      </FilmContext.Consumer>
    );
  }
}
