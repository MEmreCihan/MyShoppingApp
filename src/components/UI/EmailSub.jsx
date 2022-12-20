import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../store/toggleSlice";

const EmailSub = () => {
    const dispatch = useDispatch();

    async function addEmail(emailData) {
        const response = await fetch("https://e-commerce-app-fe353-default-rtdb.firebaseio.com/email.json", {
          method: 'POST',
          body: JSON.stringify(emailData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.message || 'Could not create email.');
        }
      
        return null;
      }

  const [userMail, setUserMail] = useState("");
  const [successfulAccess, setSuccessAccess] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userMail.includes("@")) {
      setSuccessAccess(true);
      addEmail(userMail);
      setUserMail("");
      dispatch(toggleActions.toggleSub(true));
    } else {
      setSuccessAccess(false);
      setUserMail("");
      return;
    }
  };

  const changeHandler = (e) => {
    setUserMail(e.target.value);
  };

  const inputClass = successfulAccess ? "bg-transparent rounded-md" : "bg-transparent rounded-md border border-red-500";

  return (
    <form onSubmit={submitHandler} className="form-control">
      <input
        type="email"
        placeholder="Enter your email here.."
        className={inputClass}
        onChange={changeHandler}
        value={userMail}
      />
      {!successfulAccess && (
        <p className="text-red-500">Please enter a valid e-mail!</p>
      )}
      <button className="text-lg font-semibold" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default EmailSub;
