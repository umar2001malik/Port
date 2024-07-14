import React from 'react';

const Contact = () => {
  // Function to handle sending WhatsApp message
  const handleSendWhatsApp = () => {
    // Get form data
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Compose WhatsApp message
    const whatsappMessage = `Name: ${name}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Open WhatsApp with the composed message
    const url = `https://wa.me/+923345380203?text=${whatsappMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className=' h-screen'>

    <h2 className="text-3xl md:text-4xl lg:text-5xl  mt-10  ml-12 heading" id='Contact'>Contact Me</h2>
    <div className="flex flex-col items-center justify-center mt-10 mb-48" >
      
      <h3 className="md:text-3xl text-center mb-6 heading ">Send me a message</h3>
 
      <div className="w-80 ml-10 md:ml-0 md:w-full">
        <div className="rounded-md shadow-2xl p-6">
          <div className="mb-4">  
            <label htmlFor="name" className="block text-sm font-medium heading">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border card-body rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium heading">Subject</label>
            <input type="text" id="subject" name="subject" className="mt-1 p-2 w-full border card-body rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium heading">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border card-body rounded-md focus:outline-none focus:border-indigo-500"></textarea>
          </div>
          <button type="button" onClick={handleSendWhatsApp} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  heading card-body">Send</button>
        </div>
        {/* hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 */}
      </div>
    
    </div>
    <div>
    <hr className=" md:block border-t-2 border-black " />
      <h6 className=' text-center heading'>
        All Right Reserved
      </h6> 
     </div>
    </div>
  );
};

export default Contact;
