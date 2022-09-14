import Parrot from '../../src/Animals/Bird/Parrot.js'

const parrot = new Parrot()

describe('animal tests', () => {
  test('add new feed schedule', () => {
    parrot.AddFeedSchedule(15)
    expect(parrot.FeedSchedule).toContain(15)
  })
})
