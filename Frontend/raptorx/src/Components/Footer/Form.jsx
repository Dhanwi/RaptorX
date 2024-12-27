import React, { useState, useEffect } from "react";
// import "../../CSS/Footer.css";
import "../../CSS/Landing.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://primary-obliging-koala.ngrok-free.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "unsafe-url",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      // console.log(data); // You can handle the response as needed

      // Show success message and reset the form
      setShowSuccessMessage(true);
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Hide success message after 3 seconds
    const timeout = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showSuccessMessage]);

  return (
    <>
      <div
        className="transaction-image-wrapper"
        style={{ maxWidth: "76.5rem", marginTop: "0", marginBottom: "1rem" }}
      >
        
        <div className="wallet-info">
          <div className="personalized-solution">EXPLORE RAPTORX.ai</div>
          <div id="adjust-text">Curious to find out more?</div>
          <div className="fraud-handling-info">
            Schedule a conversation with our team to find out how to grow your
            business with more confidence.
          </div>
        </div>
        <div className="user-form" id="formData">
          <form onSubmit={handleSubmit}>
            <h1>Schedule a Demo</h1>
            <div className="input-wrapper mt-5">
              <input
                type="text"
                placeholder="*Corporate email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="*First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="*Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="*Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="*Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-content-center place-content-center align-middle items-center mt-5">
              <button
                type="submit"
                className="btnColor rounded-md flex align-middle items-center px-7 py-2 justify-center  gap-4 mt-0 border-none text-white"
              >
                Request a Demo
              </button>
            </div>
          </form>
          {showSuccessMessage && (
            <div className="success-message text-white d-flex justify-content-center">
              Email sent successfully! Form has been reset.
            </div>
          )}
          <div className="info">
            We&apos;d like to stay in touch! By sharing your contact details,
            you allow us to reach out regarding our products and services. If
            you ever wish to stop receiving these messages, you can easily
            unsubscribe. For details on how to do so and to learn more about our
            commitment to keeping your information safe, please review our
            Privacy Policy.
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
