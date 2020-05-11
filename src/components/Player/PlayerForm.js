import React, { useState } from "react";
import axios from 'axios'

export default function PlayerForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const submitPlayer = (event) => {
        event.preventDefault()

        axios.post('http://localhost:4000/players', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,

        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))

    }

  return (
    <div className="row">
      <h1 className="center">Add a new player</h1>
      <form className="col s12" onSubmit={submitPlayer.bind(this)}>
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input id="Phone" type="text" onChange={e => setPhone(e.target.value)} />
            <label htmlFor="Phone">Phone</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Add player</button>
      </form>
    </div>
  );
}
