// eslint-disable-next-line import/prefer-default-export
import logList from '../log.js'
import FeedTime from './FeedTime.js'

export default class Animal {
  constructor(
    requiredSpaceSqFt,
    favouriteFood,
    feedSchedule,
    id,
    sick = false,
    neededMedicine = '',
    feedTimes = [],
  ) {
    this.RequiredSpaceSqFt = requiredSpaceSqFt
    this.FavouriteFood = favouriteFood
    this.FeedTimes = feedTimes
    this.FeedSchedule = feedSchedule
    this.ID = id
    this.Sick = sick
    this.NeededMedicine = neededMedicine
  }

  IsFriendlyWith(animal) {
    return this.FriendlyWith.includes(animal.constructor.name)
  }

  Feed(time, zooKeeper) {
    this.FavouriteFood.count -= 1
    console.log('-------------', this.FavouriteFood)
    const feed = new FeedTime(time.getHours(), zooKeeper)
    this.FeedTimes.push(feed)
    return true
  }

  IsSick() {
    logList.push(`${this.constructor.name} ${this.ID} sick: ${this.Sick}`)
    return this.Sick
  }

  AddFeedSchedule(hours) {
    logList.push(`You added ${hours} at ${this.constructor.name} ${this.ID} feed schedule`)
    this.FeedSchedule.push(hours)
  }

  Heal(medicine) {
    const medicineItem = medicine
    this.NeededMedicine.length = 0
    this.Sick = false
    medicineItem.count -= 1
    return true
  }
}
