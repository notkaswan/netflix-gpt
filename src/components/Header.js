import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center p-4">
          <p className="p-4 font-bold text-red-700">{user.displayName}</p>
          <img
            className=" w-12 h-12"
            alt="usericon"
            src="data:image/jpeg;base64,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"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 mx-2 rounded-lg p-2 my-2 h-2/3"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
