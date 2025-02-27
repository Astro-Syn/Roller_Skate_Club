import React from 'react'

function Contact() {
  return (
    <div>
      <div>
        <h2 className="text-pink-600 text-3xl md:text-4xl text-center mb-4">Contact Us</h2> {/* Centered heading */}
      </div>
      <form className="grid grid-cols-1 gap-4 p-4 md:p-7 md:grid-cols-2 md:w-2/5 md:h-3/6 lg:w-1/3 lg:h-auto border-3 border-solid border-[#ff0080] rounded-xl bg-[#d3ee39] mx-auto md:absolute md:-translate-x-2/4 md:left-2/4 md:top-[20%] items-center justify-center"> {/* Responsive form layout */}
        {/* First Name and Last Name */}
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">First Name</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-full" type="text" required placeholder="Enter your first name" />
        </div>
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">Last Name</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-full" type="text" required placeholder="Enter your last name" />
        </div>

        {/* Email and Phone Number */}
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">E-Mail</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-full" type="email" required placeholder="Enter your E-mail" />
        </div>
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">Phone Number</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-full" type="tel" placeholder="Enter your phone number" />
        </div>

        {/* Reason for Contacting Us */}
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">Reason for contacting us</h5>
          <select className="text-pink-900 bg-teal-300 border border-solid border-[#ff0080] p-1 w-full" type="text" placeholder="Choose one">
            <option value="feedback">Feedback</option>
            <option value="general">General question</option>
            <option value="appointment">Appointment</option>
            <option value="praise">To tell us how great we are</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-xl md:text-2xl p-1">Message</h5>
          <textarea className="text-pink-900 border border-solid border-[#ff0080] p-1 bg-teal-300 w-full" name="message" rows="5" placeholder="Write your message here" />
        </div>

        {/* Submit Button */}
        <button className="btn w-full md:col-span-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact