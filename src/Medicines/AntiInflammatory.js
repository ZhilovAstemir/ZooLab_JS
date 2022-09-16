import Medicine from './Medicine.js'

class AntiInflammatoryEntity extends Medicine {
  constructor(count) {
    super(count)
    this.count = 10
  }
}
const AntiInflammatory = new AntiInflammatoryEntity()

export default AntiInflammatory
