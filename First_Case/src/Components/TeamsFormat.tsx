import  { useContext } from 'react'
import { TeamContext } from './Context'

function TeamsFormat() {
    const team = useContext(TeamContext)
   if(!team) throw new Error ("Please there was an error with the teams")
  return (
    <div>
        <h2 
        className='text-sm bg-zinc-300
         text-center mx-auto'>
            I Love Football
         </h2>
 
    {
        team.map((item,index)=> (
            <div key={index} 
            className='lg:flex align-middle justify-evenly 
            text-2xl bg-yellow-200 xs:bg-blue-700 gap-2
             xs:text-white xs:m-4
             xs:flex-col xs:text-center'>
            <div>{item.name}</div>
            <div>{item.coach}</div>
            <div>{item.bestPlayer}</div>
            </div>
        ))
    }
      
    </div>
  )
}

export default TeamsFormat
