import { createContext,useCallback,useState,useEffect } from "react";
//import dotenv from 'dotenv';
import axios from "axios";

// dotenv.config();

const ProfileContext = createContext();
function Provider({children}){
    const [userData,setUserData] = useState(null);
    const profile_api = import.meta.env.GITHUB_PROFILE;
    const token_api = import.meta.env.GITHUB_TOKEN

    const fetchProfileGithub = useCallback(async () => {
        if (!token_api) {
            console.error(`Github token not found`);
            return;
        }
        try {
            const response = await axios.get(profile_api,{
                headers: {
                    Authorization: `token${token_api}`,
                },
            })
            setUserData(response.data); 
            console.log(response.data) 
        } catch (error) {
            console.error(`Error fetch data: `,error);
        }
        console.log(res);
    },[])

    const valueToShare = {
        userData:userData,
        fetchProfileGithub:fetchProfileGithub
    }

    return(
        <ProfileContext.Provider value={valueToShare}>
            {children}
        </ProfileContext.Provider>
    )
}
export{Provider}
export default ProfileContext;