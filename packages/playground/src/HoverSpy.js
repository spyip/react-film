import React, { useCallback, useState } from 'react';

import EventSpy from './EventSpy';

const HoverSpy = ({ onEnter, onLeave, target }) => {
  const [_, setPointers] = useState({});

  const handlePointerEnter = useCallback(
    ({ pointerId }) => {
      setPointers(pointers => {
        if (onEnter && !Object.keys(pointers).length) {
          onEnter();
        }

        return {
          ...pointers,
          [pointerId]: true
        };
      });
    },
    [setPointers]
  );

  const handlePointerLeave = useCallback(
    ({ pointerId }) => {
      setPointers(pointers => {
        pointers = { ...pointers };

        delete pointers[pointerId];

        if (onLeave && !Object.keys(pointers).length) {
          onLeave();
        }

        return pointers;
      });
    },
    [setPointers]
  );

  return (
    <React.Fragment>
      <EventSpy name="pointerenter" onEvent={handlePointerEnter} target={target} />
      <EventSpy name="pointerleave" onEvent={handlePointerLeave} target={target} />
    </React.Fragment>
  );
};

export default HoverSpy;
