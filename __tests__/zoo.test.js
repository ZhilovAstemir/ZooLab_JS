import Parrot from '../src/Animals/Bird/Parrot.js'
import Snake from '../src/Animals/Reptile/Snake.js'
import Veterinarian from '../src/Employees/Veterinarian.js'
import ZooKeeper from '../src/Employees/ZooKeeper.js'
import logList from '../src/log.js'
import Zoo from '../src/Zoo/Zoo.js'

const zoo = new Zoo()
zoo.AddEnclosures('parrot', 100)

describe('Zoo tests', () => {
  test('create Zoo', () => {
    expect(zoo).toBeDefined()
  })

  test('add enclosure', () => {
    expect(zoo.Enclosures[0].Name).toEqual('parrot')
  })

  test('find available enclosure', () => {
    const parrot = new Parrot()
    const availableEnclosure = zoo.FindAvailableEnclosure(parrot)
    expect(availableEnclosure.Name).toEqual('parrot')
    zoo.AddAnimal(parrot)
    expect(zoo.Enclosures[0].Animals[0].constructor.name).toEqual('Parrot')
  })

  test('hire employee', () => {
    const veterinarian = new Veterinarian('Jim', 'Second', [
      'Turtle',
      'Snake',
      'Parrot',
    ])

    const zooKeeper = new ZooKeeper('Jim', 'Second', [
      'Turtle',
      'Snake',
      'Parrot',
    ])
    zoo.HireEmployee(veterinarian)
    zoo.HireEmployee(zooKeeper)
    expect(zoo.Employees).toContain(veterinarian)
  })

  test('hire employee without experience', () => {
    const veterinarian = new Veterinarian('Dave', 'Second', [
      'Penguin',
    ])
    zoo.HireEmployee(veterinarian)
    expect(logList).toContain(`Employee ${veterinarian.FirstName} ${veterinarian.LastName} has no needed expirience`)
  })

  test('cant find available enclosure', () => {
    const snake = new Snake()
    const availableEnclosure = zoo.FindAvailableEnclosure(snake)
    expect(availableEnclosure).toEqual(false)
  })

  test('feed animals', () => {
    const date = new Date()
    date.setHours(19)
    zoo.FeedAnimals(date)
    expect(logList).toContain(`You fed animals at ${date}`)
  })

  test('heal animals', () => {
    zoo.HealAnimals()
    expect(logList).toContain('You heal animals')
  })
})
