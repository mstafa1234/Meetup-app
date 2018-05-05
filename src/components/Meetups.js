import React, { Component } from 'react'
import Axios from 'axios'
import MeetupItem from './MeetupItem';

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups = () => {
    Axios.get('http://localhost/api/product/read.php')
      .then(Response => {
        this.setState({
          meetups: Response.data
        }, () => { })
      })
  }
  render() {
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return (
        <MeetupItem key={meetup.id} item={meetup} />
      )
    })

    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}
export default Meetups;

