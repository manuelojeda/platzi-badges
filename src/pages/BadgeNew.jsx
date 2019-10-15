import React, { useState } from 'react'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'

const BadgeNew = () => {
  const [data, setData] = useState({
    form: {
      FirstName: '',
      LastName: '',
      JobTitle: '',
      Email: '',
      Twitter: ''
    }
  })

  const handleChange = e => {
    setData({
      form: {
        ...data.form,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Badge
              firstName={data.form.FirstName}
              lastName={data.form.LastName}
              jobtitle={data.form.JobTitle}
              twitter={data.form.Twitter}
              email={data.form.Email}
              avatarUrl="https://www.manuelojeda.xyz/img/profile_pic.jpg"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <BadgeForm onChange={handleChange} formValues={data}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeNew;
