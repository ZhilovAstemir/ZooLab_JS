import Food from './Food.js'

class VegetableEntity extends Food {
  constructor(count) {
    super(count)
    this.count = 10
  }
}
const Vegetable = new VegetableEntity()

export default Vegetable
