import Enclosure from '../Enclosures/Enclosure.js'
import getHireValidator from '../Validators/HireValidatorProvider.js'
import logList from '../log.js'

export default class Zoo {
  constructor(enclosures = [], employees = []) {
    this.Enclosures = enclosures
    this.Employees = employees
  }

  AddEnclosures(name, squreFeet) {
    const enclosule = new Enclosure({ name, parentZoo: this, squreFeet })
    this.Enclosures.push(enclosule)
    logList.push(`You created new enclosure '${name}'`)
  }

  FindAvailableEnclosure(animal) {
    const availableEnclosure = this.Enclosures.find(
      (enclosure) => animal.RequiredSpaceSqFt <= enclosure.SqureFeet
        && enclosure.Animals?.every((item) => item.IsFriendlyWith(animal)),
    )
    if (availableEnclosure) {
      logList.push(`You find available enclosure for ${animal.constructor.name} ${animal.ID}`)
      return availableEnclosure
    }
    logList.push(`There are no available enclosure for ${animal.ID}`)
    return false
  }

  HireEmployee(employee) {
    if (getHireValidator(employee, this)) {
      this.Employees.push(employee)
      logList.push(`You hired ${employee.constructor.name} ${employee.FirstName}`)
    } else {
      logList.push(`Employee ${employee.FirstName} ${employee.LastName} has no needed expirience`)
    }
  }

  FeedAnimals(time) {
    const zooKeepers = this.Employees.filter(
      (employee) => employee.constructor.name === 'ZooKeeper',
    )
    this.Enclosures.forEach((enclosure) => {
      enclosure.Animals.forEach((animal) => {
        const availableZooKeeper = zooKeepers.find(
          (zooKeeper) => zooKeeper.HasAnimalExperience(animal),
        )

        if (availableZooKeeper && animal.FeedSchedule.includes(time.getHours())) {
          availableZooKeeper.FeedAnimal(time, animal)
        }
      })
    })
    logList.push(`You fed animals at ${time}`)
  }

  HealAnimals() {
    const veterinarians = this.Employees.filter(
      (employee) => employee.constructor.name === 'Veterinarian',
    )
    this.Enclosures.forEach((enclosure) => {
      enclosure.Animals.forEach((animal) => {
        const availableVeterinarian = veterinarians.find(
          (veterinarian) => veterinarian.HasAnimalExperience(animal),
        )
        if (availableVeterinarian && animal.IsSick()) {
          availableVeterinarian.HealAnimal(animal)
        }
      })
    })
    logList.push('You heal animals')
  }

  AddAnimal(animal) {
    const availableEnclosure = this.FindAvailableEnclosure(animal)
    if (availableEnclosure) {
      availableEnclosure.AddAnimals(animal)
    }
    logList.push(`You added ${animal.constructor.name} ${animal.ID}`)
  }
}
