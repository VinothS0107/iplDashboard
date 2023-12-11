// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {
      result,
      competingTeam,
      competingTeamLogo,
      matchStatus,
      uniqueId,
    } = this.props

    return (
      <li className={`match-card ${matchStatus}`} key={uniqueId}>
        <img
          className="match-card-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
