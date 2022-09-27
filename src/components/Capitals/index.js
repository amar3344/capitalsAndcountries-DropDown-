import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  getCounty = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getOptionalCountry = () => {
    const {activeCapitalId} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getOptionalCountry(activeCapitalId)
    return (
      <div className="container">
        <div className="main-container">
          <div className="bg-container">
            <h1 className="heading">Countries And Capitals</h1>
            <div className="drop-down-container">
              <select
                className="drop-down-text"
                onChange={this.getCounty}
                value={activeCapitalId}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <option key={eachItem.id} value={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <h1 className="question-text">is Capital of which Country?</h1>
            </div>
            <p className="result-country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
