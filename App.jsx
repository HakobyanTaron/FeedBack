import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import "./App.scss"

let count = 0
export default function App() {
    const [users , setUsers] = useState([])

  return (
    <div className='App'>
        <div>
            <h1>Responsive Contact us Form</h1>
        </div>
        <div>
            <Formik 
            initialValues={{ firstName: '', lastName: '', email: '', website: '', message: '' }}
            onSubmit={(values, {resetForm}) => {
                const user = {id: ++count, ...values}
                setUsers([...users, user])
                resetForm()
            }}
            >
            <Form >
                <div className='Box'>
                    <div>
                        <label htmlFor="">First Name</label>
                        <Field type="text"  name="firstName"  id="firstName"/>
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <Field type="text"  name="lastName"  id="lastName"/>
                    </div>
                </div>
                <div className='Box'>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <Field type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="">Website Name</label>
                        <Field type="text"  name="website"  id="website"/>
                    </div>
                </div>
                <div className='Box'>
                    <label htmlFor="">Write your message</label>
                    <Field type="text" name="message" id="message"
                    />
                </div>
                <div className='Btn'>
                    <button type='Submit' className='Submit'>SUBMIT</button>
                </div>
            </Form>
            </Formik>
        </div>
        <div>
            <table className='table_dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Website Name</th>
                        <th>Write your message</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}