import React from 'react'

const PeopleList = ({peopleList}) => (
  <div className="row">
    <div className="col-sm-12">
      {peopleList.map(({_id, card, avatar}) => (
        <div className="media" key={_id}>
          <a className="media-left" href="#">
            <img className="media-object" data-src="..." alt={card.name} src={avatar} style={{width: '4rem'}} />
          </a>
          <div className="media-body">
            <h6 className="media-heading">{card.name}</h6>
            at {card.company.name} - {card.company.catchPhrase},  {card.company.bs}.
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default PeopleList
