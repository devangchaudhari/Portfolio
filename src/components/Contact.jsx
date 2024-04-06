import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative bg-gray-900 text-white py-20">
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
      <br /><br />
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Stanza+Living+Kingston+House,+Gulabtara+Hills,+Domkhel+Rd,+Kalubai+Nagar,+Wagholi,+Pune,+Maharashtra+412207,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-8 px-10 rounded-lg shadow-md">

            <div className="lg:w-1/2 px-6">
              <h2 className="font-semibold text-xs">ADDRESS</h2>
              <p className="mt-1">
                Stanza Kingston <br />
                GH Raisoni College Road <br />
                Wagholi, Pune 412207
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-semibold text-xs">EMAIL</h2>
              <a href="mailto:devangchaudhari2003@gmail.com" className="text-indigo-400 leading-relaxed">
                devangchaudhari2003@gmail.com
              </a>
              <h2 className="font-semibold text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+91 9405193251</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-3xl md:text-4xl mb-1 font-medium">Contact Me</h2>
          <p className="mb-5">
          Welcome to my portfolio! Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. Please fill out the form below, and I'll get back to you as soon as possible.
          </p>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm text-gray-100 py-1 px-3 leading-6 transition duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-sm text-gray-100 py-1 px-3 leading-6 transition duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-sm text-gray-100 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
