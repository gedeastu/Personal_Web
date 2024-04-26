import React from 'react'
import Transition from '../components/Transition'
import useProfileContext from '../hooks/use-profile-context'
function Homepage() {

  const {userData} = useProfileContext()

  return (
    <Transition>
          <div>
            {console.log(userData)}
        </div>
    </Transition>
  )
}

export default Homepage