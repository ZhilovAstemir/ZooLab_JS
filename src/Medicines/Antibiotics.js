import Medicine from './Medicine.js'

class AntibioticsEtntity extends Medicine {
  constructor() {
    super()
    this.count = 10
  }
}

const Antibiotics = new AntibioticsEtntity()

export default Antibiotics
