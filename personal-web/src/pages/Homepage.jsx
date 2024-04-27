import React from 'react'
import Transition from '../components/Transition'
import useProfileContext from '../hooks/use-profile-context'

function Homepage() {

  const {userData, profile_api} = useProfileContext()

  return (
    <Transition>
          <div>
            {console.log(profile_api)}
          </div>
    </Transition>
  )
}

export default Homepage