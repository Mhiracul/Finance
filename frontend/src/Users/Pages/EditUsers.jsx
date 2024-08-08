import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { setUsers } from "../../redux/userSlice";
import { apiBaseUrl } from "../../config";
import DefaultLayout from "../../layout/DefaultLayout";
import RingLoader from "react-spinners/RingLoader"; // Import the RingLoader

const walletTypes = [
  { name: "Eth balance", key: "eth" },
  { name: "Bitcoin balance", key: "btc" },
  { name: "XRP balance", key: "xrp" },
  { name: "XLM balance", key: "xlm" },
  { name: "XDC balance", key: "xdc" },
  { name: "ALGO balance", key: "algo" },
  { name: "MIOTA balance", key: "miota" },
  { name: "ADA balance", key: "ada" },
  { name: "HBAR balance", key: "hbar" },
  { name: "QTUM balance", key: "qtum" },
];

function EditUsers() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const myUsers = Array.isArray(usersData) ? usersData : [];
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // State for saving/loading spinner
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [walletBalances, setWalletBalances] = useState({});
  const [selectedWallet, setSelectedWallet] = useState(walletTypes[0].key);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/admin/users/${userId}`, {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });

        if (res.status === 200) {
          const userData = res.data.data;
          setFirstName(userData.firstName);
          setEmail(userData.email);
          setPassword(userData.password);
          setStatus(userData.status);
          setWalletBalances(userData.walletBalances || {});
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleEditUser = async () => {
    setSaving(true); // Set saving state to true when saving starts
    const editedUser = {
      firstName,
      email,
      password,
      status,
      walletBalances,
    };

    try {
      const res = await axios.put(
        `${apiBaseUrl}/admin/users/${userId}`,
        editedUser,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      if (res.data.message === "User updated successfully") {
        const updatedUsers = myUsers.map((user) =>
          user._id === userId ? { ...user, ...editedUser } : user
        );
        dispatch(setUsers(updatedUsers));
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to edit user");
      }
    } catch (err) {
      console.error("Failed to edit user:", err);
      toast.error("Failed to edit user");
    } finally {
      setSaving(false); // Set saving state to false when saving ends
    }
  };

  const handleGoBack = () => {
    navigate("/edit");
  };

  const handleWalletBalanceChange = (e) => {
    setWalletBalances((prevBalances) => ({
      ...prevBalances,
      [selectedWallet]: parseFloat(e.target.value),
    }));
  };

  return (
    <DefaultLayout>
      <div className="mx-auto py-20 max-w-270 text-black">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : saving ? (
            <div className="flex items-center justify-center h-screen">
              <RingLoader color="fuchsia" size={150} />
            </div>
          ) : (
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="text-sm">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded border border-stroke bg-[#EFF4FB] py-3 px-4 text-black focus:border-primary focus-visible:outline-none"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-sm">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-stroke bg-[#EFF4FB] py-3 px-4 text-black"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="text-sm">
                  Password:
                </label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded border border-stroke bg-[#EFF4FB] py-3 px-4 text-black"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="walletType" className="text-sm">
                  Select Wallet:
                </label>
                <select
                  id="walletType"
                  value={selectedWallet}
                  onChange={(e) => setSelectedWallet(e.target.value)}
                  className="w-full rounded border border-stroke bg-[#EFF4FB] py-3 px-4 text-black"
                >
                  {walletTypes.map((wallet) => (
                    <option key={wallet.key} value={wallet.key}>
                      {wallet.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="walletBalance" className="text-sm">
                  {
                    walletTypes.find((wallet) => wallet.key === selectedWallet)
                      ?.name
                  }
                  :
                </label>
                <input
                  type="number"
                  id="walletBalance"
                  value={walletBalances[selectedWallet]}
                  onChange={handleWalletBalanceChange}
                  className="w-full rounded border border-stroke bg-[#EFF4FB] py-3 px-4 text-black"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleEditUser}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default EditUsers;
