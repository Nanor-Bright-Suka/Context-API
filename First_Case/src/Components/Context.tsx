import React, { createContext, useState, ReactNode } from 'react'

//Interface
export interface TeamIntfc {
  name: string
  coach: string
  bestPlayer: string
}

// interface TeamCtxt {
//    team: TeamIntfc
//    x
// }

//Create Context For Teams
export const TeamContext = createContext<TeamIntfc[] | undefined>(undefined)
 

//Form Interface for States
interface FormInterface {
  newTeam: string
  newCoach: string
  newBestPlayer: string
}

//Form Interface and functions
export interface FormIntCntxt {
  fteam: FormInterface
  SetNewTeam: (newTeam: string)=> void
  SetNewCoach: (newCoach: string) => void
  SetNewBestPlayer: (newBestPlayer: string) => void
  addTeam: (nwTeam: TeamIntfc)=> void
}

//


//Create Context for Form
  export const FormContext = createContext<FormIntCntxt | undefined>(undefined)






//Context Provider
const  TeamContextProvider = ({children}: { children: ReactNode }): JSX.Element => {
    const [team,setTeam] = useState<TeamIntfc[]>([
      {name: "Real Madrid", coach: "Don Carlo" , bestPlayer: "Ronaldo"},
      {name: "Manchester City", coach: "Pep Guardiola ", bestPlayer: "Haaland"},
      {name: "Brighton", coach:  "Fabian Hurtzeler", bestPlayer: "Welbeck"},
     ])
     
     //Form Provider
     const [fteam, setFteam] = useState<FormInterface>({
      newTeam: "",
      newCoach: "",
      newBestPlayer: "",
     })


     const SetNewTeam = (newTeam: string) => setFteam((oldvalue)=> ({...oldvalue,newTeam}))
     const SetNewCoach =(newCoach: string) => setFteam((oldvalue) => ({...oldvalue,newCoach}))
     const SetNewBestPlayer = (newBestPlayer: string) => setFteam((oldvalue) => ({...oldvalue,newBestPlayer}))


     const addTeam = (nwTeam: TeamIntfc) => setTeam((oldvalue)=> ([...oldvalue, nwTeam]))
  return (
    <TeamContext.Provider value={team}>
      <FormContext.Provider value={{fteam, addTeam, SetNewTeam, SetNewCoach, SetNewBestPlayer}}> 
      {children}
      </FormContext.Provider> 
    </TeamContext.Provider>
  )
}

export default TeamContextProvider;
