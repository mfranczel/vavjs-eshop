// Michal Franczel
import React, { useState } from 'react';

import {
    Input, Form, FormGroup, Label, Alert
} from 'reactstrap';

function UserForm(props) {

    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        var temp = props.userDetails
        e.target.name === 'zipcode' ? temp[e.target.name] = parseInt(e.target.value) : temp[e.target.name] = e.target.value
        props.setUserDedails(temp)
        setValue(value => ++value)
    }

    return (
        <Form>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={props.userDetails.firstName}
                onChange={(e) => handleChange(e)}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={props.userDetails.lastName}
                onChange={(e) => handleChange(e)}
                required="required"
                />
            </FormGroup>
            <FormGroup>
                <Label for="street">Street</Label>
                <Input
                type="text"
                name="street"
                id="street"
                placeholder="Street"
                value={props.userDetails.street}
                onChange={(e) => handleChange(e)}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label>
                <Input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={props.userDetails.city}
                onChange={(e) => handleChange(e)}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="country">Country</Label>
                <Input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                value={props.userDetails.country}
                onChange={(e) => handleChange(e)}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label for="zipcode">ZIP code</Label>
                <Input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="ZIP"
                value={props.userDetails.zipcode}
                onChange={(e) => handleChange(e)}
                required
                />
            </FormGroup>
            {
                !props.valid ? (
                <Alert color="danger">
                    All fields need to be filled.
                </Alert>):""
            }
        </Form>
    )
}

export default UserForm