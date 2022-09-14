import Vegetable from '../../Food/Vegetable.js'
import Bird from './Bird.js'

export default class Penguin extends Bird {
  constructor() {
    super()
    this.FriendlyWith = ['Penguin']
    this.RequiredSpaceSqFt = 20
    this.FavouriteFood = Vegetable
    this.FeedSchedule = [10, 19]
  }
}
