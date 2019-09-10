let storage = window.localStorage

export default {
  set (key, value) {
    if (value === undefined) {
      return
    }
    storage.setItem(key, serialize(value))
  },
  get (key, def) {
    let val = deserialize(storage.getItem(key))
    return val === undefined ? def : val
  },
  remove (key) {
    storage.removeItem(key)
  },
  clear () {
    storage.clear()
  }
}
function serialize (value) {
  return JSON.stringify(value)
}
function deserialize (val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (err) {
    return val || undefined
  }
}
