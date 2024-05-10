import React, { useState } from 'react';

const Students = () => {
  // State to manage the active department
  const [activeDepartment, setActiveDepartment] = useState(null);

  // Dummy data for departments and students
  const departments = [
    {
      id: 1,
      name: 'Information Technology',
      students: ['Amanda Singh', 'Alex Landi', 'Harley Kanson'],
    },
    {
      id: 2,
      name: 'Data Science',
      students: ['Bobbie Mille', 'Kevin lamar', 'Jahseh Onodera'],
    },
    {
      id: 3,
      name: 'Computer Science',
      students: ['Ezra Miller', 'Emma Myres', 'Jenna Ortega'],
    },
    {
      id: 4,
      name: 'Telecommunications',
      students: ['Walter White', 'Jessie Pinkman', 'Gustavo Fring'],
    },
    {
      id: 5,
      name: 'Architechture',
      students: ['Jackie Roberts', 'Abu adil', 'Sam Hunnied'],
    },
    {
      id: 6,
      name: 'Civil Engineering',
      students: ['Latrell Star', 'Stark Kent', 'Ada Wong'],
    },
  ];

  // Function to toggle active department
  const toggleDepartment = (departmentId) => {
    setActiveDepartment(activeDepartment === departmentId ? null : departmentId);
  };

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-center text-gray-700 text-2xl font-semibold mb-4">List of Students by Department</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {departments.map((department) => (
          <div
            key={department.id}
            className={`bg-white shadow rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-100 hover:-translate-y-1 ${
              activeDepartment === department.id ? 'border border-blue-500' : ''
            }`}
            onClick={() => toggleDepartment(department.id)}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{department.name}</h3>
            {/* Show students only if the department is active */}
            {activeDepartment === department.id && (
              <ul className="list-disc list-inside text-gray-700">
                {department.students.map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Students;