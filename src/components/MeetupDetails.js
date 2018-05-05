import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class MeetupDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      details: []
    }
  }

  componentWillMount() {
    this.getMeetupDetails();
  }

  getMeetupDetails = () => {
    let meetupId = this.props.match.params.id;
    Axios.get(`http://localhost/api/product/read.php?id=${meetupId}`)
      .then(Response => {
        this.setState({
          details: Response.data[0]
        }, () => { })
      })
  }

  onClick() {
    let id = this.state.details.id;
    Axios.delete(`http://localhost/api/product/delete.php?id=${id}`)
      .then(response => {
        this.props.history.push('/')
      }).catch(err => {
        this.props.history.push('/')
      })
  }
  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">{this.state.details.city}</li>
          <li className="collection-item">{this.state.details.address}</li>
        </ul>
        <Link to={`/meetups/edit/${this.state.details.id}`} className="btn">Edit</Link>
        <button onClick={this.onClick.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}
export default MeetupDetails