import Mammal from './Mammal.js'
import Grass from '../../Food/Grass.js'

export default class Elephant extends Mammal {
  constructor() {
    super()
    this.FriendlyWith = ['Bison', 'Parrot', 'Turtle']
    this.RequiredSpaceSqFt = 50
    this.FavouriteFood = Grass
    this.FeedSchedule = [10, 19]
  }
}
