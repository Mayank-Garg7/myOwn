import React, { useState } from 'react';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ddf682ce-9503-423d-8362-beac0533ae0b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage(''); // Clear any previous error message
        event.target.reset(); // Reset the form fields
      } else {
        setErrorMessage("Failed to send the message, please try again.");
        setSuccessMessage(''); // Clear any previous success message
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while sending the message.");
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We would love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out.
      </p>
      <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name='name'
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name='email'
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows="4"
            name='message'
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-6 p-4 bg-green-200 text-green-800 border border-green-400 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-6 p-4 bg-red-200 text-red-800 border border-red-400 rounded">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
