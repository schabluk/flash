import Faker from 'faker'

People = new Meteor.Collection('people')

if(Meteor.isServer) {
  // Populate collection with fake data
  if(People.find().count() === 0) {
    _.range(10).map(function(index) {
      People.insert({
        card: Faker.helpers.userCard(),
        avatar: Faker.image.avatar()
      })
    })
  }
}
