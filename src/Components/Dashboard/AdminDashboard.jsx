import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
        <div>
            <form action = "" required>
                <h3>
                    Task Title
                </h3>
                <input type = "text" placeholder='Make UI design' />
                <h3>Description</h3>
                <textarea name='' id = '' cols = "30" rows = "10"></textarea>
                <h3>Date</h3>
                <input type = "date" />
                <h3>Asign to</h3>
                <input type = "text" placeholder='Employee Name'/>
                <h3>Category</h3>
                <input type = "text" placeholder = "Design , dev , etc" />
                <button>Create Task</button>

            </form>
        </div>

    </div>
  )
}

export default AdminDashboard