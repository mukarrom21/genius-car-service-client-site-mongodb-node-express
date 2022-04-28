import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
//   const [user, setUser] = useState({
//     name: "Akbar The Great",
//     email: "akbar@momo.taj",
//     address: "Tajmohol Road Md.pur",
//     phone: "01711111111",
//   });

//   //Change controlled field
//   const handleOnChange = (e) => {
//     const { address, ...rest } = user;
//     const newAddress = e.target.value;
//     const newUser = { address: newAddress, ...rest };
//     setUser(newUser);
//   };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.name}
          name="name"
          id=""
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          id=""
          placeholder="Email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="name"
          value={service.name}
          id=""
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          name="address"
          id=""
          placeholder="Address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="Phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <input type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
