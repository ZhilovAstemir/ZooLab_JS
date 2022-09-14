import Grass from '../../Food/Grass.js'
import Mammal from './Mammal.js'

export default class Bison extends Mammal {
  constructor() {
    super()
    this.FriendlyWith = ['Elephant']
    this.FavouriteFood = Grass
    this.FeedSchedule = [10, 19]
    this.RequiredSpaceSqFt = 30
  }
}
