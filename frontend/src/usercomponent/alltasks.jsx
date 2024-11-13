// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';
// import Addtask from './addtask';
// import { useContext } from 'react';
// import { AddtaskContext } from '../context/backcontext';
// import { deleteTodo } from '../features/chat/todo';
// import { edittaskContext } from '../context/backcontext';
// import Editask from './edittask';

// const Alltasks = () => {
//     const dispatch = useDispatch();
//     const todos = useSelector((state) => state.todos);
//     const tasktodo = todos.todos;
//     // const [allCompleted, setAllCompleted] = useState(false); // To track the checkbox state
//     const setTaskadd = useContext(AddtaskContext);
//     const setEdittask = useContext(edittaskContext);
//     const [edit, setEdit] = useState();

//     // Function to calculate days left
//     const calculateDaysLeft = (taskDate) => {
//         const today = new Date();
//         const dueDate = new Date(taskDate);
//         const timeDiff = dueDate - today;
//         const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
//         return daysLeft;
//     };

//     const handleDelete = (id) => {
//         dispatch(deleteTodo(id));
//     };

//     const handleEdit = (todo) => {
//         setEdittask.setEdittask(true);
//         setEdit(todo);
//     };

//     // const handleMarkAllCompleted = () => {
//     //     setAllCompleted(!allCompleted);
//     //     tasktodo.forEach((todo) => {
//     //         dispatch(toggleCompletion(todo.id, !allCompleted)); // Call toggle completion action with the current state
//     //     });
//     // };

//     const handleAddNewTask = () => {
//         setTaskadd.setTaskadd(true);
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Tasks</h1>

//             {/* Checkbox to mark all tasks as completed */}
//             <div className="flex items-center mb-4">
//                 <input
//                     type="checkbox"
//                     // checked={allCompleted}
//                     // onChange={handleMarkAllCompleted}
//                     className="mr-2"
//                 />
//                 <span className="text-gray-600">Mark all as completed</span>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {
//                     tasktodo.length > 0
//                         ? tasktodo.map((todo) => (
//                             <div key={todo.id} className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all hover:shadow-xl ${todo.completed ? 'bg-green-100' : ''}`}>
//                                 <div>
//                                     <div className='flex justify-between items-center'>
//                                         <h2 className={`text-xl font-semibold text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
//                                             {todo.title}
//                                         </h2>
//                                         <p className={`text-gray-600 mt-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
//                                             {calculateDaysLeft(todo.date) > 0
//                                                 ? `${calculateDaysLeft(todo.date)} days left`
//                                                 : 'Deadline passed'}
//                                         </p>
//                                     </div>
//                                     <p className={`text-gray-600 ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.desciption}</p>
//                                 </div>
//                                 <div className="flex justify-end space-x-2 mt-4">
//                                     <button
//                                         onClick={() => handleEdit(todo)}
//                                         className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() => handleDelete(todo.id)}
//                                         className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         onClick={() => dispatch(toggleCompletion(todo.id))}
//                                         className={`text-white ${todo.completed ? 'bg-gray-600' : 'bg-yellow-600'} hover:bg-yellow-700 px-3 py-1 rounded`}
//                                     >
//                                         {todo.completed ? 'Completed' : 'Mark as Completed'}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                         : <p className="col-span-full text-center text-gray-600">No tasks available</p>
//                 }
//                 <div
//                     onClick={handleAddNewTask}
//                     className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl items-center justify-center ${setTaskadd.taskadd ? "hidden" : "flex"} `}
//                 >
//                     <div className="text-center">
//                         <span className="text-4xl text-gray-600">+</span>
//                         <p className="mt-2 text-gray-600 font-semibold">Add New Task</p>
//                     </div>
//                 </div>

//                 <div className={`z-30 top-48 left-[50%] ${setTaskadd.taskadd ? "fixed" : "hidden"} `}>
//                     <Addtask/>
//                 </div>
//                 <div className={`z-30 top-48 left-[50%] fixed `}>
//                     <Editask title={edit.title} desciption={edit.desciption} date={edit.date} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Alltasks;



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useContext } from 'react';
import Addtask from './addtask';
import { AddtaskContext } from '../context/backcontext';
import { deleteTodo } from '../features/chat/todo';
import { edittaskContext } from '../context/backcontext';
import Editask from './edittask';

const Alltasks = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const tasktodo = todos.todos;
    const setTaskadd = useContext(AddtaskContext);
    const setEdittask = useContext(edittaskContext);
    const [edit, setEdit] = useState(null); // Initialize edit as null

    // Function to calculate days left
    const calculateDaysLeft = (taskDate) => {
        const today = new Date();
        const dueDate = new Date(taskDate);
        const timeDiff = dueDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
        return daysLeft;
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (todo) => {
        setEdittask.setEdittask(true); // Set the edit context to true
        setEdit(todo); // Set the selected task to be edited
    };

    const handleAddNewTask = () => {
        setTaskadd.setTaskadd(true);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">All Tasks</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    tasktodo.length > 0
                        ? tasktodo.map((todo) => (
                            <div key={todo.id} className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all hover:shadow-xl ${todo.completed ? 'bg-green-100' : ''}`}>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <h2 className={`text-xl font-semibold text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                                            {todo.title}
                                        </h2>
                                        <p className={`text-gray-600 mt-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                                            {calculateDaysLeft(todo.date) > 0
                                                ? `${calculateDaysLeft(todo.date)} days left`
                                                : 'Deadline passed'}
                                        </p>
                                    </div>
                                    <p className={`text-gray-600 ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.desciption}</p>
                                </div>
                                <div className="flex justify-end space-x-2 mt-4">
                                    <button
                                        onClick={() => handleEdit(todo)} // Call handleEdit on click
                                        className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                        : <p className="col-span-full text-center text-gray-600">No tasks available</p>
                }
                <div
                    onClick={handleAddNewTask}
                    className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl items-center justify-center ${setTaskadd.taskadd ? "hidden" : "flex"} `}
                >
                    <div className="text-center">
                        <span className="text-4xl text-gray-600">+</span>
                        <p className="mt-2 text-gray-600 font-semibold">Add New Task</p>
                    </div>
                </div>

                <div className={`z-30 top-48 left-[50%] ${setTaskadd.taskadd ? "fixed" : "hidden"} `}>
                    <Addtask />
                </div>

                <div className={`z-30 top-48 left-[50%] fixed`}>
                    {edit && <Editask edit={edit} />}
                </div>
            </div>
        </div>
    );
};

export default Alltasks;
