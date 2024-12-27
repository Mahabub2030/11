import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext); // Assuming there's an updateUser method in AuthContext to handle updates
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [isEditing, setIsEditing] = useState(false); // State to track if the form is in editing mode
  const [name, setName] = useState(user?.displayName || ''); // User's name state
  const [email, setEmail] = useState(user?.email || ''); // User's email state

  const handleUpdate = () => {
    setIsLoading(true); // Set loading to true when the update starts

    // Simulate an update operation (e.g., API call)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the update

      // You would typically call updateUser here to actually update the user data.
      // For example:
      // updateUser({ displayName: name, email });

      setIsEditing(false); // After update, stop editing
    }, 2000); // Simulate a 2-second delay for the update
  };

  if (!user) {
    return <div>Loading...</div>; // Handle loading or no user
  }

  return (
    <div className="p-10 container mx-auto shadow-amber-500 bg-white w-1/2 h-auto">
      <h2 className="text-2xl mb-2">User Profile</h2>
      <div className="flex items-center">
        {/* Conditionally render photo URL */}
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
        ) : (
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Fallback Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
        )}
        <div className="flex items-center gap-2">
          <div>
            {/* Display either the profile info or the editing form */}
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 p-2 border rounded"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2 p-2 border rounded"
                />
              </div>
            ) : (
              <div>
                <span className="text-lg font-bold">Name: {user.displayName || user.user}</span>
                <br />
                <span className="text-lg font-bold">Email: {user.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Show loading state when updating */}
      {isLoading ? (
        <div className="mt-4 text-center text-gray-500">Tossy... Updating...</div>
      ) : (
        <button
          onClick={isEditing ? handleUpdate : () => setIsEditing(true)} // Toggle between edit and update
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isEditing ? 'Save Changes' : 'Update'}
        </button>
      )}
    </div>
  );
};

export default Profile;
