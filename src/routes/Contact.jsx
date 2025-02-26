import React from 'react'

function Contact() {
  return (
    <div>
      <div>
        <h2 className="text-pink-600">Contact Us</h2>
      </div>
      <form className="grid grid-cols-2 gap-4 p-7 absolute -translate-x-2/4 w-2/5 h-3/6 border-3 border-solid border-[#ff0080] left-2/4 top-[20%] rounded-xl bg-[#d3ee39] items-center justify-center min-h-screen">
        {/* First Name and Last Name */}
        <div className="mb-4 ">
          <h5 className="text-black tracking-wide text-2xl p-1">First Name</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-3/4" type="text" required placeholder="Enter your first name" />
        </div>
        <div className="mb-4 ">
          <h5 className="text-black tracking-wide text-2xl p-1">Last Name</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-3/4" type="text" required placeholder="Enter your last name" />
        </div>
  
        {/* Email and Phone Number */}
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-2xl p-1">E-Mail</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-3/4" type="text" required placeholder="Enter your E-mail" />
        </div>
        <div className="mb-4">
          <h5 className="text-black tracking-wide text-2xl p-1">Phone Number</h5>
          <input className="text-pink-900 border border-solid border-[#ff0080] p-1 w-3/4" type="text" placeholder="Enter your phone number" />
        </div>
  
        {/* Reason for Contacting Us */}
        <div className="mb-4 col-span-2">
          <h5 className="text-black tracking-wide text-2xl p-1">Reason for contacting us</h5>
          <select className="text-pink-900 bg-teal-300 border border-solid border-[#ff0080]] p-1 w-3/4" type="text" placeholder="Choose one">
            <option value="feedback">Feedback</option>
            <option value="general">General question</option>
            <option value="appointment">Appointment</option>
            <option value="">To tell us how great we are</option>
          </select>
        </div>
  
        {/* Message */}
        <div className="mb-4 col-span-2">
          <h5 className="text-black tracking-wide text-2xl p-1">Message</h5>
          <textarea className="text-pink-900 border border-solid border-[#ff0080] p-1 bg-teal-300" name="message" rows="5" cols="100" placeholder="Write your message here" />
        </div>
  
        {/* Submit Button */}
        <button className="btn col-span-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact