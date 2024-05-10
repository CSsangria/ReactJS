import React, { Component } from 'react';

export class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
        
        {/* Sidebar */}
        <div className="flex flex-col sm:flex-row mb-8">
          <div className="w-full sm:w-1/4 bg-white rounded-lg p-4 mr-4 mb-4">
            <h3 className="text-lg font-semibold mb-4">Welcome admin</h3>
            <ul>
              <li>Users</li>
              <li>Posts</li>
              <li>Settings</li>
            </ul>
          </div>

          {/* Analytics Widgets */}
          <div className="w-full sm:w-3/4 bg-white rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-4">Analytics</h3>
            {/* Placeholder for analytics widgets */}
            <div className="flex justify-between">
              <div className="w-1/2 bg-gray-200 p-4 rounded-lg mr-2">
                <h4 className="text-lg font-semibold mb-2">Users</h4>
                <p>Total Users: 1000</p>
                <p>New Users Today: 10</p>
              </div>
              <div className="w-1/2 bg-gray-200 p-4 rounded-lg ml-2">
                <h4 className="text-lg font-semibold mb-2">Posts</h4>
                <p>Total Posts: 500</p>
                <p>New Posts Today: 5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <ul>
            <li>User John Doe registered.</li>
            <li>User Jane Smith posted a new article.</li>
            <li>User Admin updated settings.</li>
          </ul>
        </div>
      </main>
    );
  }
}

export default Admin;