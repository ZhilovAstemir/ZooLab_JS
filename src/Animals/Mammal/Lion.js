import Meet from '../../Food/Meet.js'
import Mammal from './Mammal.js'

export default class Lion extends Mammal {
  constructor() {
    super()
    this.FriendlyWith = ['Lion']
    this.FavouriteFood = Meet
    this.FeedSchedule = [10, 19]
    this.RequiredSpaceSqFt = 40
  }
}
