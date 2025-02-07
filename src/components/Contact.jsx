import { useState } from 'react';
import { Bell } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-purple-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <p className="flex items-center gap-2">
                Hello, Welcome <span className="text-yellow-300">👋</span>
              </p>
              <p className="font-semibold">John Weak</p>
            </div>
          </div>
          <Bell className="text-white" size={24} />
        </div>

        {/* Contact Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Contact us</h2>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">✉️ Email</span>
              <a href="mailto:workforeign@gmail.com" className="text-gray-800">
                workforeign@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">📞 Phone No.</span>
              <span className="text-gray-800">+44 (0) XXXX XXX XXX</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Enter your query......"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Navigation
        <div className="flex justify-around border-t p-4 bg-gray-50">
          <button className="text-gray-600 flex flex-col items-center text-sm">
            <span>🏠</span>
            Menu
          </button>
          <button className="text-gray-600 flex flex-col items-center text-sm">
            <span>📋</span>
            Consultation
          </button>
          <button className="text-gray-600 flex flex-col items-center text-sm">
            <span>✅</span>
            Eligibility
          </button>
          <button className="text-gray-600 flex flex-col items-center text-sm">
            <span>📚</span>
            Resources
          </button>
          <button className="text-gray-600 flex flex-col items-center text-sm">
            <span>📅</span>
            Interview
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;