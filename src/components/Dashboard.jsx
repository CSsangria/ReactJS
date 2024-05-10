import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Your Account Details</h1>
          <div className="max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
            <p><span className="font-semibold">Name:</span> Johng Ree</p>
            <p><span className="font-semibold">Email:</span> johng.ree@example.com</p>
            <p><span className="font-semibold">Role:</span> User</p>
          </div>
          <div className="max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <ul>
              <li>You updated your profile information.</li>
              <li>You posted a comment on an article.</li>
            </ul>
          </div>
          <div className="max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p>You can update your account settings here.</p>
            {/* Add settings options as needed */}
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;