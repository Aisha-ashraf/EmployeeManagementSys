
import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <div>
        <Header/>
        <TaskNumberList/>
        <TaskList/>
        
      </div>
    </div>
  )
}

export default EmployeeDashboard