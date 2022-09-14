import logList from '../log.js'

export default class ZooKeeper {
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

  FeedAnimal(time, animal) {
    if (this.HasAnimalExperience(animal) && animal.FavouriteFood.count) {
      logList.push(`You fed ${animal.constructor.name} ${animal.ID} with ${animal.FavouriteFood.constructor.name.slice(0, -6)}`)
      return animal.Feed(time, this)
    }
    return false
  }
}
