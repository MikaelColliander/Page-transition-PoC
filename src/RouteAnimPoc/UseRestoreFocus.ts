import { setStorageItem, getStorageItem } from "./helpers/sessionStorageHelpers";

const useRestoreFocus = () => {
  return (parent: HTMLElement | null) => {
    const focusableElements = parent?.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
    ) as NodeListOf<HTMLElement>;
    const elementsArr = focusableElements ? Array.from(focusableElements) : [];

    const restoreFocusIdx:number = getStorageItem(window.location.pathname, 'activeElementIndex');
    const restoreFocusElem = elementsArr[typeof restoreFocusIdx === 'number' ? restoreFocusIdx : -1];

    document.body.addEventListener(
      "focus",
      (event) => {
        if (parent?.contains(event.target as Element)) {
          const idx = elementsArr.findIndex((item) => item === event.target);
          setStorageItem(window.location.pathname, 'activeElementIndex', idx);
        }
      },
      true
    );
    // document.body.addEventListener(
    //   "blur",
    //   (event) => {
    //     if (parent?.contains(event.target as Element)) {
    //       focusableElements.forEach(item => {item.classList.remove('Mui-focusVisible'); item.blur()});          
    //     }
    //   },
    //   true
    // );

    // window.setTimeout(() => {
    //   restoreFocusElem?.classList.add('Mui-focusVisible');
    //   restoreFocusElem?.focus();
    // }, 300);
  };
};

export default useRestoreFocus;
