import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import DefaultLayout from "../../adminlayout/DefaultLayout";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    const updatedUser = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      password: event.target.password.value,
      accountBalance: event.target.accountBalance.value,
      kycApproved: event.target.kycApproved.value === "true",
      kycDocuments: {
        govtId: event.target.govtId.value,
        passport: event.target.passport.value,
      },
    };

    try {
      await axios.put(
        `http://localhost:4000/api/users/${selectedUser._id}`,
        updatedUser,
        {
          headers: { "auth-token": localStorage.getItem("token") },
        }
      );

      // Update user list state
      setUsers(
        users.map((user) =>
          user._id === selectedUser._id ? { ...user, ...updatedUser } : user
        )
      );
      setSuccess("User updated successfully!");
      setShowEditModal(false);
    } catch (error) {
      setError("Error updating user.");
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users", {
          headers: { "auth-token": localStorage.getItem("token") },
        });
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Error fetching users.");
      }
    };

    fetchUsers();
  }, []);

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/users/${userToDelete._id}`,
        {
          headers: { "auth-token": localStorage.getItem("token") },
        }
      );

      // Update user list state
      setUsers(users.filter((user) => user._id !== userToDelete._id));
      setSuccess("User deleted successfully!");
      setShowDeleteModal(false);
    } catch (error) {
      setError("Error deleting user.");
      console.error("Error deleting user:", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="w-full font-roboto bg-[#01071C] h-screen">
        <div className="container mx-auto mt-6 px-4 py-6 shadow-md shadow-[#272f4f] text-slate-300 rounded-md">
          <div className="grid gap-6">
            {users.length === 0 ? (
              <div className="text-center text-gray-500">
                No users available
              </div>
            ) : (
              users.map((user) => (
                <div
                  key={user._id}
                  className="bg-[#01071C] rounded-md shadow-md shadow-[#272f4f] p-5 flex justify-between items-center"
                >
                  <div className="text-slate-300">{user.fullName}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-[#ffb400] hover:text-[#f8f8f8]"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user)}
                      className="text-red-600 hover:text-red-400"
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Success/Error Messages */}
          {success && (
            <div className="bg-green-100 text-green-800 p-4 rounded-md mt-4">
              {success}
            </div>
          )}
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mt-4">
              {error}
            </div>
          )}

          {/* Edit Modal */}
          {showEditModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-slate-700 font-semibold">
                    Edit User
                  </h2>
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {selectedUser && (
                  <form onSubmit={handleSaveChanges}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={selectedUser.fullName}
                        name="fullName"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={selectedUser.email}
                        name="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        defaultValue={selectedUser.phone}
                        name="phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Wallet Balance
                      </label>
                      <input
                        type="number"
                        defaultValue={selectedUser.accountBalance}
                        name="accountBalance"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="text"
                        defaultValue={selectedUser.password}
                        name="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        KYC Approved
                      </label>
                      <select
                        name="kycApproved"
                        defaultValue={selectedUser.kycApproved.toString()}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </div>
                    <div className="mb-4 flex gap-4">
                      <div className="flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700">
                          Government ID
                        </label>
                        {selectedUser.kycDocuments.govtId ? (
                          <img
                            src={`data:image/png;base64,${selectedUser.kycDocuments.govtId}`}
                            alt="Government ID"
                            className="w-24 h-24 object-cover"
                          />
                        ) : (
                          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700">
                          Passport
                        </label>
                        {selectedUser.kycDocuments.passport ? (
                          <img
                            src={`data:image/png;base64,${selectedUser.kycDocuments.passport}`}
                            alt="Passport"
                            className="w-24 h-24 object-cover"
                          />
                        ) : (
                          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#ffb400] text-white px-4 py-2 rounded-md hover:bg-[#ca9b2e]"
                    >
                      Save Changes
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]">
              <div className="bg-white text-slate-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl  font-semibold">Confirm Delete</h2>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p>Are you sure you want to delete this user?</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleConfirmDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Users;
