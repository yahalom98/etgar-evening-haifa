import React from 'react'

export default function AnotherForm() {
  return (
    <div>
        <div className="container">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button className="btn">Save</button>
            </div>
    </div>
  )
}
