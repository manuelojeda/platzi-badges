import React from 'react'
import { Link } from 'react-router-dom'

const handleClick = e => {
  console.log('Button was clicked')
}

const handleSubmit = e => {
  e.preventDefault()
  console.log('Form was submitted')
}

const BadgeForm = ({onChange, formValues}) => {
  return (
    <div>
      <h1>New attendant</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="FirstName">First Name</label>
          <input onChange={onChange} type="text" className="form-control" value={formValues.FirstName} name="FirstName" />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input onChange={onChange} type="text" className="form-control" value={formValues.LastName} name="LastName" />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input onChange={onChange} type="email" className="form-control" value={formValues.Email} name="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="JobTitle">Job Title</label>
          <input onChange={onChange} type="text" className="form-control" value={formValues.JobTitle} name="JobTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="Twitter">Twitter</label>
          <input onChange={onChange} type="text" className="form-control" value={formValues.Twitter} name="Twitter" />
        </div>

        <div className="float-right">
          <Link className="btn btn-secondary mr-2" to="/badges">
            Cancel
          </Link>
          <button onClick={handleClick} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default BadgeForm;
