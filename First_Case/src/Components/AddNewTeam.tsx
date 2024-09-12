import React, { useContext } from 'react'
import { TeamContext, FormContext } from './Context';


function AddNewTeam() {
    const teamContext = useContext(TeamContext)
  const formContext = useContext(FormContext)
  if(!teamContext || !formContext){
    return null
  }

 
  const {fteam, addTeam, SetNewTeam, SetNewCoach, SetNewBestPlayer} = formContext
  
  
  return (
    <div>

        <div>
       
        </div>
      <form onSubmit={(e) => {
        e.preventDefault()
    addTeam({ name: fteam.newTeam, coach: fteam.newCoach, bestPlayer: fteam.newBestPlayer });
      }}
      className='grid grid-cols-4 gap-2
      xs:grid-flow-col mb-10'
      >
        <input 
        type="text" 
        placeholder='Team'
        name='newTeam'
        value={fteam.newTeam}
        onChange={(e)=> SetNewTeam(e.target.value)}
        className='w-40 ml-5'
        required
        />

        <input 
        type="text"
         placeholder='Coach'
         name='newCoach'
         value={fteam.newCoach}
         onChange={(e)=> SetNewCoach(e.target.value)}
          className='w-40'
          required
         />

        <input 
        type="text" 
        placeholder='Best Player'
        name='newBestPlayer'
        value={fteam.newBestPlayer}
        onChange={(e)=> SetNewBestPlayer(e.target.value)}
         className='w-40'
         required
        />
        <button className='w-40 bg-slate-900 text-white '>Sumbit</button>
      </form>
    </div>
  )
}

export default AddNewTeam
