import Parrot from '../../src/Animals/Bird/Parrot'
import Penguin from '../../src/Animals/Bird/Penguin'
import Bison from '../../src/Animals/Mammal/Bison'
import ZooKeeper from '../../src/Employees/ZooKeeper'
import Zoo from '../../src/Zoo/Zoo'

const zooKeeper = new ZooKeeper('Jake', 'Last', ['Turtle', 'Snake', 'Parrot'])
const zoo = new Zoo()
zoo.AddEnclosures('parrot', 100)

describe('ZooKeeper tests', () => {
  test('create ZooKeeper', () => {
    expect(zooKeeper.FirstName).toBe('Jake')
    expect(zooKeeper.LastName).toBe('Last')
    expect(zooKeeper.AnimalExperience).toContain('Turtle', 'Snake', 'Parrot')
  })

  test('feed animal', () => {
    const parrot = new Parrot()
    zoo.AddAnimal(parrot)
    expect(zooKeeper.FeedAnimal(new Date(), parrot)).toEqual(true)
  })

  test('feed unknown animal', () => {
    const bison = new Bison()
    expect(zooKeeper.FeedAnimal(new Date(), bison)).toEqual(false)
  })

  test('add animal experience', () => {
    zooKeeper.AddAnimalExperience(new Bison())
    expect(zooKeeper.AnimalExperience).toContain('Bison')
  })

  test('check false animal experience', () => {
    expect(zooKeeper.HasAnimalExperience(new Penguin())).toBeFalsy()
  })
})
