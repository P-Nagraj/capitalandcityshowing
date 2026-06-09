import {Component} from "react";
import "./index.css"
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

class Capitals extends Component{
    state={activeCapitalId:countryAndCapitalsList[0].id}

    onChangeCapitals=(event)=>this.setState({
        activeCapitalId:event.target.value
    })
    getCountry=()=>{
        const {activeCapitalId}=this.state
        const selectedCapital=countryAndCapitalsList.find(eachItem=>eachItem.id===activeCapitalId)
        return selectedCapital.country
    }

    render(){
        const {activeCapitalId}=this.state
        const country=this.getCountry()                
        return(
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Countries And Capitals</h1>
                    <div className="select-container">
                        <select className="select" value={activeCapitalId} onChange={this.onChangeCapitals}>
                            {countryAndCapitalsList.map(eachItem=>(
                                <option key={eachItem.id}value={eachItem.id}>{eachItem.capitalDisplayText}</option>
                            ))}
                        </select>
                        <p className="description">is capital of which country?</p>
                    </div>
                    <h1 className="country">{country}</h1>

                </div>
            </div>
        )
    }
}

export default Capitals;