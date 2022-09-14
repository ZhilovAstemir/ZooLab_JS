import Parrot from '../../src/Animals/Bird/Parrot'
import ZooKeeper from '../../src/Employees/ZooKeeper'
import Grass from '../../src/Food/Grass'

const parrot = new Parrot()
const zooKeeper = new ZooKeeper('Jim', 'Second', ['Turtle', 'Snake', 'Parrot'])

describe('grass tests', () => {
  test('check grass count', () => {
    let grassCount = Grass.count
    parrot.Feed(new Date(), zooKeeper)
    expect(Grass.count).toEqual(grassCount - 1)
  })
})
