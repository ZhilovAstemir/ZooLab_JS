import {
  Turtle, Elephant, Snake, Parrot, Lion, Bison, Penguin,
} from './import.js'
import Zoo from './Zoo/Zoo.js'
import ZooApp from './Zoo/ZooApp.js'
import Antibiotics from './Medicines/Antibiotics.js'
import ZooKeeper from './Employees/ZooKeeper.js'
import Veterinarian from './Employees/Veterinarian.js'
import logList from './log.js'
import AntiDepression from './Medicines/AntiDepression.js'
import AntiInflammatory from './Medicines/AntiInflammatory.js'

const zooCorp = new ZooApp()
const zoo1 = new Zoo()
const zoo2 = new Zoo()
zooCorp.AddZoo(zoo1)
zooCorp.AddZoo(zoo2)

const turtle = new Turtle.default()
const snake = new Snake.default()
const elephant = new Elephant.default()
const lion = new Lion.default()
const bison = new Bison.default()
const parrot = new Parrot.default()
const penguin = new Penguin.default()

turtle.Sick = true
turtle.NeededMedicine = Antibiotics

elephant.Sick = true
elephant.NeededMedicine = AntiDepression

bison.Sick = true
bison.NeededMedicine = AntiInflammatory

penguin.Sick = true
turtle.NeededMedicine = Antibiotics

const zooKeeper1 = new ZooKeeper('John', 'First', ['Turtle', 'Snake', 'Parrot', 'Penguin', 'Lion', 'Bison', 'Elephant'])
const zooKeeper2 = new ZooKeeper('Jake', 'Second', ['Turtle', 'Snake', 'Parrot'])

const veterinarian1 = new Veterinarian('Adam', 'First', ['Turtle', 'Snake', 'Parrot', 'Penguin', 'Lion', 'Bison', 'Elephant'])
const veterinarian2 = new Veterinarian('Jim', 'Second', ['Turtle', 'Snake', 'Parrot'])

zoo1.AddEnclosures('parrot turtle elephant', 100)
zoo1.AddEnclosures('lion', 100)
zoo1.AddEnclosures('snake', 100)
zoo1.AddEnclosures('penguins', 100)
zoo1.AddEnclosures('bison elephant', 100)

zoo2.AddEnclosures('lion', 100)
zoo2.AddEnclosures('parrot turtle elephant', 100)
zoo2.AddEnclosures('snake', 100)
zoo2.AddEnclosures('penguins', 100)
zoo2.AddEnclosures('bison elephant', 100)

zoo1.AddAnimal(parrot)
zoo1.AddAnimal(turtle)
zoo1.AddAnimal(elephant)
zoo1.AddAnimal(lion)
zoo1.AddAnimal(snake)
zoo1.AddAnimal(penguin)
zoo1.AddAnimal(bison)

zoo2.AddAnimal(turtle)
zoo2.AddAnimal(parrot)
zoo2.AddAnimal(elephant)
zoo2.AddAnimal(lion)
zoo2.AddAnimal(snake)
zoo2.AddAnimal(penguin)
zoo2.AddAnimal(bison)

zoo1.HireEmployee(zooKeeper1)
zoo1.HireEmployee(zooKeeper2)
zoo1.HireEmployee(veterinarian1)
zoo1.HireEmployee(veterinarian2)

zoo2.HireEmployee(zooKeeper1)
zoo2.HireEmployee(zooKeeper2)
zoo2.HireEmployee(veterinarian1)
zoo2.HireEmployee(veterinarian2)

const date = new Date()
date.setHours(19)

zoo1.FeedAnimals(date)
zoo1.HealAnimals()

zoo2.FeedAnimals(date)
zoo2.HealAnimals()

console.log(logList)
