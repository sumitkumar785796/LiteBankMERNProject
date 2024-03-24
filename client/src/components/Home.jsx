import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className='text-center'>LiteBank: Simple Banking System</h1>

        <h4>Introduction:</h4>
        <p>
          LiteBank is a simple banking system project designed to showcase basic banking functionalities. It allows users to add accounts, transfer money between accounts, and view transaction history.
        </p>

        <h4>Features</h4>

        <p>
          User management: Add new users with specified initial balances.
        </p>
        <p>
          Transaction handling: Transfer money securely between users within the system.
        </p>
        <p>
          Transaction history: Display a comprehensive list of all transactions made.
        </p>
        <h4>
          Technology Stack:
        </h4>
        <p>
          Developed using Mern.
        </p>
      </div>
    </>
  )
}

export default Home