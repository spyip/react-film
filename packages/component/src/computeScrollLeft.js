import * as browser from './browser';

export default function computeScrollLeft(dir, scrollable, itemContainer, index) {
  const rtl = dir === 'rtl';

  if (itemContainer && scrollable) {
    const items = itemContainer.children; // This will enumerate <li> inside <FilmStrip>
    const item = items[Math.max(0, Math.min(items.length - 1, index))];

    if (item) {
      if (scrollable.offsetWidth === scrollable.scrollWidth) {
        return 0;
      }

      let result = item.offsetLeft + (item.offsetWidth - scrollable.offsetWidth) / 2;

      if (rtl) {
        result = Math.min(result, 0);
        result = Math.max(result, scrollable.offsetWidth - scrollable.scrollWidth);
      } else {
        result = Math.max(result, 0);
        result = Math.min(result, scrollable.scrollWidth - scrollable.offsetWidth);
      }

      if (rtl) {
        if (browser.chrome) {
          result += scrollable.scrollWidth - scrollable.offsetWidth;
        } else if (browser.edgeUWP || browser.internetExplorer) {
          result = -result;
        }
      }
      return result;
    }
  }
}
