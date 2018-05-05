import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class AddMeetup extends Component {

    onSubmit(e) {
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        Axios.request({
            method: 'post',
            url: `http://localhost/api/product/add.php?name=${newMeetup.name}&city=${newMeetup.city}&address=${newMeetup.address}`,
            data: ''
        }).then(Response => {
            this.props.history.push('/')
        }).catch(err => {
            console.log(err)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <br />
                <Link to="/" className="btn grey">Back</Link>
                <h2>Add MeetUp</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="text" ref="name" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" required />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" required />
                        <label htmlFor="address">Address</label>
                    </div>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default AddMeetup