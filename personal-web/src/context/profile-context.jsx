import { createContext,useCallback,useState,useEffect } from "react";
import axios from "axios";

const ProfileContext = createContext();

function Provider({children}){

   const [userData,setUserData] = useState(null);
   //const profile_api = import.meta.env.REACT_APP_GITHUB_PROFILE

   const fetchProfile = useCallback(async () => {
    const response = await axios.get("https://api.github.com/users/gedeastu")
    setUserData(response.data);
   },[])

    const valueToShare = {
        userData:userData,
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