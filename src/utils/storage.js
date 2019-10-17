class Storage {
  static setItem(key, value) {
    if (process.browser) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  static getItem(key) {
    if (process.browser) {
      return JSON.parse(localStorage.getItem(key))
    }

    return undefined
  }
}

export default Storage
