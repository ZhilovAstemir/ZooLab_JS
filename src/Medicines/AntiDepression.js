import Medicine from './Medicine.js'

class AntiDepressionEntity extends Medicine {
  constructor(count) {
    super(count)
    this.count = 10
  }
}

const AntiDepression = new AntiDepressionEntity()

export default AntiDepression
