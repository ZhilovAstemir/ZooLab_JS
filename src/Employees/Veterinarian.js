import logList from "../log.js"

export default class Veterinarian {
  constructor(firstName, lastName, animalExperience) {
    this.FirstName = firstName
    this.LastName = lastName
    this.AnimalExperience = animalExperience
  }

  AddAnimalExperience(animal) {
    this.AnimalExperience.push(animal.constructor.name)
  }

  HasAnimalExperience(animal) {
    return this.AnimalExperience.includes(animal.constructor.name)
  }

  HealAnimal(animal) {
    if (this.HasAnimalExperience(animal) && animal.NeededMedicine.count) {
      logList.push(`You heal animal ${animal.constructor.name} ${animal.ID}`)
      return animal.Heal(animal.NeededMedicine)
    }
    return false
  }
}
