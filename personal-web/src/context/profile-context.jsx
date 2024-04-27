import { createContext,useCallback,useState,useEffect } from "react";
import axios from "axios";
import env from 'react-dotenv'


const ProfileContext = createContext();

function Provider({children}){

    const [userData,setUserData] = useState(null);
    const profile_api = env.REACT_APP_GITHUB_API;
    //const token_api = env.REACT_APP_GITHUB_KEY

   const fetchProfile = useCallback(async () => {
    const response = await axios.get(profile_api,{
        // headers: {
        //     Authorization: token_api,
        // }
    })
    setUserData(response.data);
   },[])

    const valueToShare = {
        userData:userData,
        profile_api:profile_api,
        fetchProfile:fetchProfile,
    }

    return(
        <ProfileContext.Provider value={valueToShare}>
            {children}
        </ProfileContext.Provider>
    )
}

export{Provider}
export default ProfileContext;