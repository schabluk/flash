import Faker from 'Faker'

People = new Meteor.Collection('people')

if(Meteor.isServer) {
  // Populate collection with fake data
  if(People.find().count() === 0) {
    _.range(20).map(function(index) {
      People.insert({
        card: Faker.Helpers.userCard(),
        avatar: Faker.Image.avatar()
      })
    })
  }
}
