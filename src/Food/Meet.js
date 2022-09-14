import Food from './Food.js'

class MeetEntity extends Food {
  constructor(count) {
    super(count)
    this.count = 10
  }
}
const Meet = new MeetEntity()

export default Meet
