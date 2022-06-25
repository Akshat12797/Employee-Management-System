import React, { useState } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../Data';


function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);


    const handleEdit = (id) => {
console.log('Eid', id);
    }
    const handleDelete = (id) => {
console.log('Did', id)
    }
    return (

        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>

                    <Header
                        setIsAdding={setIsAdding}
                    />

                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Add
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>

    )
}

export default Dashboard