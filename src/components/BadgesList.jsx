import React from 'react'
import './styles/BadgesList.css'

const BadgesList = ({Badges}) => {
  return (
    <div>
      <ul className="list-unstyled row">
        {
          Badges.map((badge) => {
            return (
              <li className="col-12 card mb-3" key={badge.id}>
                <div className="float-left mr-3">
                  <img src={badge.avatarUrl} alt="" className="img-fluid rounded-circle"/>
                </div>
                <h5 className="BadgeList__name">{badge.firstName} {badge.lastName}</h5>

                <a href={`https://www.twitter.com/${badge.twitter}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter mr-1"></i>
                  @{badge.twitter}
                </a>

                <p className="mb-0">
                  {badge.jobTitle}
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BadgesList;
