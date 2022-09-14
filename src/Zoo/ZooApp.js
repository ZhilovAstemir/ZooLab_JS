import logList from '../log.js'

export default class ZooApp {
  constructor(zoos = []) {
    this.zoos = zoos
    logList.push('You created the new ZooApp')
  }

  AddZoo(zoo) {
    this.zoos.push(zoo)
    logList.push('You add the new zoo')
  }
}
