import {composeWithTracker} from 'react-komposer'
import PeopleList from '../components/people.jsx'

let comoposer = (props, onData) => {
  const handle = Meteor.subscribe('people')
  if(handle.ready()) {
    const peopleList = People.find().fetch()
    onData(null, {peopleList})
  }
}

export default composeWithTracker(comoposer)(PeopleList)
