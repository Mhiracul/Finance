import "./App.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container bg-[#ffb400]">
      <div className="loader">
        <div className="text-center loader-text ">
          <h1 className="text-5xl font-extrabold tracking-wide mt-0 mb-0">
            <ClipLoader />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
