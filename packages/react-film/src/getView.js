/* eslint no-magic-numbers: "off" */

// eslint-disable-next-line import/no-namespace
import * as browser from './browser.js';
import best from './util/best.js';

export default function getView(dir, scrollable, itemContainer, scrollingTo) {
  const rtl = dir === 'rtl';

  if (itemContainer && scrollable) {
    const scrollLeft = scrollingTo || scrollable.scrollLeft;
    const trueScrollLeft = rtl && (browser.edgeUWP || browser.internetExplorer) ? -scrollLeft : scrollLeft;
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const scrollCenter = trueScrollLeft + scrollable.offsetWidth / 2;
    const index = best([].slice.call(items), item => {
      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;

      return 1 / Math.abs(scrollCenter - offsetCenter);
    });

    if (~index) {
      const item = items[index];

      const offsetCenter = item.offsetLeft + item.offsetWidth / 2;
      let indexFraction = index + ((scrollCenter - offsetCenter) / item.offsetWidth) * (rtl ? -1 : 1);

      // We "fix" indexFraction if the viewport is at the start/end of the content
      // This is to simplify code that use Math.round(indexFraction) to find the scrollable index
      // if (scrollLeft === 0) {
      //   indexFraction = 0;
      // } else if (scrollLeft >= scrollable.scrollWidth - scrollable.offsetWidth) {
      //   indexFraction = items.length - 1;
      // } else if (indexFraction % 1 > .99 || indexFraction % 1 < .01) {
      //   indexFraction = Math.round(indexFraction);
      // }

      if (indexFraction % 1 > 0.99 || indexFraction % 1 < 0.01) {
        indexFraction = Math.round(indexFraction);
      }

      let selectedIndex;

      if (Math.abs(trueScrollLeft) < 1) {
        selectedIndex = 0;
      } else if (
        rtl
          ? trueScrollLeft <= scrollable.offsetWidth - scrollable.scrollWidth
          : trueScrollLeft >= scrollable.scrollWidth - scrollable.offsetWidth
      ) {
        selectedIndex = items.length - 1;
      } else {
        selectedIndex = Math.round(indexFraction);
      }

      return {
        index: selectedIndex,
        indexFraction
      };
    }
  }
}
