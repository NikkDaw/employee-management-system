import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='flex flex-nowrap overflow-x-auto items-center justify-start gap-5 h-[55%] py-5 px-5 w-full mt-10 rounded-xl bg-neutral-950'>
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} employeeId={data.id} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} employeeId={data.id} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList