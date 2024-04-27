import React, { useContext } from 'react'
import ProfileContext from '../context/profile-context'

function useProfileContext() {
  return useContext(ProfileContext)
}

export default useProfileContext