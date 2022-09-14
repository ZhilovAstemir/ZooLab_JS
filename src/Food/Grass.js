import Food from './Food.js'

class GrassEntity extends Food {
  constructor(count) {
    super(count)
    this.count = 10
  }
}
const Grass = new GrassEntity()

export default Grass
