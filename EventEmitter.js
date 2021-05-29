class EventEmitter {
  constructor() {
    this.listeners = [];
  }
  on(name, func) {
    console.log(name);
    this.listeners.push({ name, func });
  }
  emit(name, val) {
    for (const n of this.listeners) {
      if (n.name == name) {
        n.func(val);
      }
    }
  }
  listenerCount(name) {
    let cnt = 0;
    for (const n of this.listeners) {
      if (n.name == name) {
        cnt++;
      }
    }
    return cnt;
  }
}
export { EventEmitter };
