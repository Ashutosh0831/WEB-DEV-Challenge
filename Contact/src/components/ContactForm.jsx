import React, { useState } from "react";
import ContactBox from "./ContactBox";
// import { all } from "axios";

const ContactForm = () => {
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [allContact, setAllContact] = useState(() => {
    const stored = localStorage.getItem("contacts");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (err) {
        console.warn("failed to parse stored contacts", err);
      }
    }
    return [];
  });

  const formHandler = (e) => {
    e.preventDefault();

    const newContact = {
      user,
      email: userEmail,
      image: userImage,
      number: userNumber,
      address: userAddress,
    };

    const stored = localStorage.getItem("contacts");
    const contacts = stored ? JSON.parse(stored) : [];
    const updated = [...contacts, newContact];

    localStorage.setItem("contacts", JSON.stringify(updated));
    setAllContact(updated);

    setUser("");
    setUserEmail("");
    setUserAddress("");
    setUserNumber("");
    setUserImage("");
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <form
            className="flex flex-col gap-5 text-center m-10 "
            onSubmit={(e) => {
              formHandler(e);
            }}
          >
            <input
              type="text"
              placeholder="username"
              value={user}
              className="border-2 text-2xl w-100 text-center"
              onChange={(e) => setUser(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="email"
              value={userEmail}
              className="border-2 text-2xl w-100 text-center"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="ImageURL"
              value={userImage}
              className="border-2 text-2xl w-100 text-center"
              onChange={(e) => {
                setUserImage(e.target.value);
              }}
            />

            <input
              type="number"
              placeholder="Phone Number"
              value={userNumber}
              className="border-2 text-2xl w-100 text-center"
              onChange={(e) => {
                setUserNumber(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Address"
              value={userAddress}
              className="border-2 text-2xl w-100 text-center"
              onChange={(e) => {
                setUserAddress(e.target.value);
              }}
            />

            <button className="border-2 text-l font-bold n w-20 rounded-xl p-2 bg-emerald-200 mx-40  active:scale-75">
              Submit
            </button>
          </form>
        </div>
        <div className="flex gap-5 contact-container">
          {allContact.map((contact, idx) => (
            <ContactBox key={idx} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
