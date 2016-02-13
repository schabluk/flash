Meteor.publish('people', () => {
  return People.find()
})
