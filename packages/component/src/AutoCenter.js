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

export default ({ delay }) =>
  <FilmContext.Consumer>
    { context =>
      <Delay
        duration={ delay }
        onTrigger={ () => context.scrollTo(({ indexFraction }) => {
          const { scrollBarFraction } = context;

          if (scrollBarFraction && scrollBarFraction !== '0%' && scrollBarFraction !== '100%') {
            return Math.round(indexFraction);
          }
        }) }
        start={ !context.scrolling }
      />
    }
  </FilmContext.Consumer>
