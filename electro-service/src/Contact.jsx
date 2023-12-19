import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Contact.Module.css";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const writeToDatabase = async () => {
    const database = getDatabase();
    const contactRef = ref(database, "contactService");

    const newContactData = {
      name: contactData.name,
      email: contactData.email,
      phoneNumber: contactData.phoneNumber,
      message: contactData.message,
    };

    const newContactRef = push(contactRef, newContactData);
    const newContactId = newContactRef.key;
    console.log("New Contact Id:", newContactId);

    setContactData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section className="contact_section layout_padding">
      <div className="container ">
        <div className="heading_container">
          <h2>Contact Us</h2>
          <img src="images/plug.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={contactData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={contactData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={contactData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  name="message"
                  placeholder="Message"
                  value={contactData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex-contact">
                <button type="button" onClick={writeToDatabase}>
                  SEND
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
