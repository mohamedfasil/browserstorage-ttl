const checkLocalStorage = () => {
  try {
    localStorage.setItem('a', 'a');
    localStorage.removeItem('a');
    return true;
  } catch (exception) {
    return false;
  }
};

const hasSupport = checkLocalStorage();

class Storage {
  /**
   * @param {item} string
   * @returns item if available, otherwise false
   */
  get = item => {
    if (hasSupport) {
      let record = sessionStorage.getItem(item);
      if (record) {
        return record;
      }
      record = JSON.parse(localStorage.getItem(item));
      if (record && new Date().getTime() < record.timestamp) {
        return record.value;
      }
      this.remove(item);
    }
    return false;
  };

  /**
   * @param {item} string
   * @param {value} string, if its an object pass it through JSON,stringify
   * @param {ttl} number in minutes
   * @returns true if stored successfully
   */

  set = (item, value, ttl) => {
    if (hasSupport) {
      try {
        if (ttl === 0) {
          sessionStorage.setItem(item, value);
          if (localStorage.getItem(item)) {
            localStorage.removeItem(item);
          }
          return true;
        }
        const ttlMilliSec = ttl * 60 * 1000;
        const record = { value, timestamp: new Date().getTime() + ttlMilliSec };
        localStorage.setItem(item, JSON.stringify(record));
        return true;
      } catch (exception) {
        console.error(exception);
      }
    }
    return false;
  };

  remove = item => {
    if (hasSupport) {
      localStorage.removeItem(item);
    }
  };
}

const Store = new Storage();

export default Store;
