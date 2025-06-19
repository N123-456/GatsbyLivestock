import React from 'react'
import PrivateRoute from '../components/Routes/PublicRoute'

const userguidance = () => {
  return (
    <PrivateRoute>
    <div>
      <h1>Welcome to User Guidance Page</h1>
    </div>
    </PrivateRoute>
  )
}

export default userguidance
