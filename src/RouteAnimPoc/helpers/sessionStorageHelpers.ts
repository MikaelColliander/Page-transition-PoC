export const getStorageItem = (key: string, propName?: string): any | null => {
  const item = window.sessionStorage.getItem(key);
  const parsedItem = item ? JSON.parse(item) : null;
  if (propName) {
    return propName && parsedItem ? parsedItem[propName] : null;
  }
  return parsedItem;
};

export const setStorageItem = (
  key: string,
  propName: string,
  value: string | number | unknown
) => {
  const item = getStorageItem(key);
  if (item) {
    item[propName] = value;
    window.sessionStorage.setItem(
      key,
      JSON.stringify(item)
    );
  } else {
    window.sessionStorage.setItem(key, JSON.stringify({ [propName]: value }));
  }
};
