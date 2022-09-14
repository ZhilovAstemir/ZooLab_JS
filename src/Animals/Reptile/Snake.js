import Meet from '../../Food/Meet.js'
import Reptile from './Reptile.js'

export default class Snake extends Reptile {
  constructor() {
    super()
    this.FriendlyWith = ['Snake']
    this.FavouriteFood = Meet
    this.FeedSchedule = [10, 19]
    this.RequiredSpaceSqFt = 10
  }
}
