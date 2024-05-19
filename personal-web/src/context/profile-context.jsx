import { createContext,useCallback,useState,useEffect } from "react";
import axios from "axios";

const ProfileContext = createContext();

function Provider({children}){
    const token_api = import.meta.env.REACT_APP_GITHUB_KEY
    const profile_api = import.meta.env.REACT_APP_GITHUB_PROFILE

    const [userData,setUserData] = useState(null);
    const fetchProfile = useCallback(async () => {
        const response = await axios.get("https://api.github.com/users/gedeastu")
        setUserData(response.data);
    },[])

    const [repos,setRepos] = useState([]);
    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios.get('https://api.github.com/users/gedeastu/repos');
            const repoNames = ['Personal_Web', 'Si-Gumi-App', 'Dental_MedicalWeb', 'Pijar_Music', 'ReadAct', 'react_projects'];
            const filteredRepos = response.data.filter(repo => repoNames.includes(repo.name));
            setRepos(filteredRepos);
        }
        fetchRepos();
    },[]);
    // const fetchRepos = useCallback(async () => {
    //     const response = await axios.get("https://api.github.com/users/gedeastu/repos")
    //     const repoNames = ['Personal_Web', 'Si-Gumi-App', 'Dental_MedicalWeb', 'Pijar_Music', 'ReadAct', 'react_projects']
    //     const filterRepos = response.data.filter(repo => repoNames.includes(repo.name))
    //     setRepos(filterRepos)
    // },[])


        // const fetchProfile = async () => {
        //     try {
        //         const response = await axios.get(profile_api,{
        //             headers:{
        //                 Authorization:`token ${token_api}` 
        //             }
        //         })
        //         setUserData(response.data);
        //     }catch(error){
        //         console.error(error)
        //     }
        // }

    const valueToShare = {
        userData:userData,
        fetchProfile:fetchProfile,
        repos:repos,
    }

    return(
        <ProfileContext.Provider value={valueToShare}>
            {children}
        </ProfileContext.Provider>
    )
}

export{Provider}
export default ProfileContext;