

// import AddNewTeam from './Components/AddNewTeam'
import AddNewTeam from './Components/AddNewTeam'
import TeamContextProvider from './Components/Context'
import TeamsFormat from './Components/TeamsFormat'


 

function App() {
  
  return (
    <div className='bg-slate-800 h-screen overflow-scroll'>
      <TeamContextProvider> 
     <TeamsFormat />  
     <AddNewTeam />  
    </TeamContextProvider>
    </div>
  )
}

export default App
