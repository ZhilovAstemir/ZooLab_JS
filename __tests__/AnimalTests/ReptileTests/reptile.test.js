import Reptile from '../../../src/Animals/Reptile/Reptile'

describe('Reptile tests', () => {
  test('create reptile', () => {
    const reptile = new Reptile()
    expect(reptile).toBeDefined()
  })
})
