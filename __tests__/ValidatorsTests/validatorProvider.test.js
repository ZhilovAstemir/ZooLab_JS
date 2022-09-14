import Parrot from '../../src/Animals/Bird/Parrot.js'
import logList from '../../src/log.js'
import Zoo from '../../src/Zoo/Zoo.js'

const zoo = new Zoo()

describe('validator provider tests', () => {
  test('validate invalid class', () => {
    const veterinarian = new Parrot()
    zoo.HireEmployee(veterinarian)
    expect(logList).toContain(`Invalid class name ${veterinarian.constructor.name}`)
  })
})
