/**
 * By default this hook saves the scrollposition for a location (url) to session storage. The scroll position will be recorded once a scroll action has stopped.
 * A function may be passed so that the scroll position may be recorded to any desired storage, i. e. application state.
 */

import { setStorageItem } from "./helpers/sessionStorageHelpers";

const useSaveRouteScroll = (scrollTarget: Element | null, onSaveValues?: () => void) => {
  let timer: ReturnType<typeof setTimeout> | null;

  scrollTarget?.addEventListener(
    "scroll",
    function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        if (onSaveValues) {
          onSaveValues();
          return;
        }
        setStorageItem(window.location.pathname, 'x', scrollTarget?.scrollLeft);
        setStorageItem(window.location.pathname, 'y', scrollTarget?.scrollTop);
      }, 150);
    },
    false
  );
};

export default useSaveRouteScroll;
