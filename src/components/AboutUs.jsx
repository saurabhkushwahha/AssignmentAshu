import { useState } from 'react';
import { Mail, Phone, Home, BookOpen, Lightbulb, FileText, Calendar, Bell } from 'lucide-react';
function AboutUs() {
  const [activeTab, setActiveTab] = useState('about');

  return (

    <>
      {/* Header */}
      <div className="bg-purple-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop="
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-white">
            <span>Hello, Welcome 👋</span>
            <p className="font-semibold">John Weak</p>
          </div>
        </div>
        <Bell className="text-white" size={24} />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-4">
        {activeTab === 'about' ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">About Us</h2>
            <div className="space-y-6">
              <img
              src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt="Professional"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 leading-relaxed">
                We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional design. With years of expertise in mobile application and website design, we specialize in transforming ideas into captivating digital experiences that seamlessly combine functionality and aesthetics. Our approach is centered on understanding the unique needs of each client, ensuring every project we undertake not only aligns with their vision but also elevates their brand in the digital space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At the core of our work is our mastery of modern design tools like Figma, which allows us to bring concepts to life with precision and style. We take pride in crafting user-centric designs that are intuitive, visually appealing, and optimized for performance. From creating sleek mobile applications to designing impactful websites, we aim to deliver solutions that resonate with users and leave a lasting impression.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Contact us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-800" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">workforeign@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-800" />
                <div>
                  <p className="font-semibold">Phone No.</p>
                  <p className="text-gray-600">+44 (0) XXXX XXX XXX</p>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="John Weak"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    placeholder="Enter your query......"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto flex justify-around p-3">
          <button
            onClick={() => setActiveTab('home')}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <Home size={20} />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <BookOpen size={20} />
            <span>Compliance</span>
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <Lightbulb size={20} />
            <span>Eligibility</span>
          </button>
          <button
            onClick={() => setActiveTab('resource')}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <FileText size={20} />
            <span>Resource</span>
          </button>
          <button
            onClick={() => setActiveTab('reminder')}
            className="flex flex-col items-center text-sm text-gray-600"
          >
            <Calendar size={20} />
            <span>Reminder</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;