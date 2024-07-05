import React from 'react'
import { useSelector } from "react-redux";
import {selectUsers} from '../../../StoreRedux/UserSlice'

const Users = () => {
  const storeAllUsers = useSelector(selectUsers);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">User List</h1>
      <div className="grid gap-8">
        {storeAllUsers.map((user) => (
          <div key={user.docId} className="flex items-center bg-white shadow-lg rounded-lg p-4">
            <img
              src={user.photo_url}
              alt={user.display_name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.display_name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users