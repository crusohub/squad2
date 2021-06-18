import React, {useState} from 'react'

const CurrentProjectContext = new React.createContext([{}, () => {}]);

const CurrentProjectProvider = (props)=>{
    const initialProject = {
        id: "",
        image: "",
        projectname: "",
        status: "",
        budget: "",
        completed: ""
    }
    const [currentProject, setCurrentProject] = useState(initialProject);
    
    return(
        <CurrentProjectContext.Provider
                value ={{currentProject, setCurrentProject}}
            >
                {props.children}
        </CurrentProjectContext.Provider>
    )
}
export {CurrentProjectContext, CurrentProjectProvider};