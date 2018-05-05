import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class EditMeetup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            city: '',
            address: ','
        }
    }
    componentWillMount() {
        this.getMeetupDetails();
    }

    getMeetupDetails = () => {
        let id = this.props.match.params.id
        Axios.get(`http://localhost/api/product/read.php?id=${id}`)
            .then(response => {
                this.setState(
                    {
                        id: response.data[0].id,
                        name: response.data[0].name,
                        city: response.data[0].city,
                        address: response.data[0].address
                    }
                )
            })
    }

    onSubmit(e) {
        const editMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        Axios.request({
            method: 'put',
            url: `http://localhost/api/product/edit.php?id=${this.state.id}&name=${editMeetup.name}&city=${editMeetup.city}&address=${editMeetup.address}`,
            data: ''
        }).then(Response => {
            this.props.history.push('/')
        }).catch(err => {
            this.props.history.push('/')
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <br />
                <Link to="/" className="btn grey">Back</Link>
                <h2>Edit MeetUp</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="text" ref="name" placeholder={this.state.name} required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" placeholder={this.state.city} required />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" placeholder={this.state.address} required />
                        <label htmlFor="address">Address</label>
                    </div>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default EditMeetup