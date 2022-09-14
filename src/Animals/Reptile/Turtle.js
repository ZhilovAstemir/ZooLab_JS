import Grass from '../../Food/Grass.js'
import Reptile from './Reptile.js'

export default class Turtle extends Reptile {
  constructor() {
    super()
    this.FriendlyWith = ['Parrot', 'Bison', 'Elephant', 'Turtle']
    this.RequiredSpaceSqFt = 10
    this.FavouriteFood = Grass
    this.FeedSchedule = [10, 19]
    this.RequiredSpaceSqFt = 20
  }
}
