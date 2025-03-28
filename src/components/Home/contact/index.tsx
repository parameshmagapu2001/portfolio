"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formEndpoint = "https://formspree.io/f/xblgdvbp"; // Replace with your Formspree Form ID

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err); // Log the error to the console
      setError("An error occurred. Please check your internet connection.");
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 bg-[rgb(253,246,227)] text-black p-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center font-[Nosifer]">
            Get in Touch
            </h2>
          <Image src="/contact.png" alt="Contact" width={500} height={300} />
        </div>

        {/* Right Section - Form */}
        <motion.div 
          className="w-full md:w-2/2 p-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-black text-center mb-10 text-lg">
            Feel free to reach out with any questions or collaboration ideas!
          </p>

          {isSubmitted && (
            <p className="text-green-600 text-center mb-4">Your message has been sent successfully!</p>
          )}

          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                <FaUser className="absolute left-4 top-4 text-black" />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full pl-14 p-4 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300 text-lg text-black"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-black" />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full pl-14 p-4 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300 text-lg text-black"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
            </div>

            <select
                name="subject"
                className="w-full p-4 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300 text-lg text-black"
                value={formData.subject}
                onChange={handleChange}
                required
            >
                <option value="">Select subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
            </select>

            <textarea
                name="message"
                placeholder="Text the message"
                rows={5}
                className="w-full p-4 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300 text-lg text-black"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <button
                type="button"
                className="w-full md:w-auto px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 text-lg"
              >
                Back to Home
              </button>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-[rgb(253,187,45)] text-white rounded-lg flex items-center justify-center gap-3 hover:bg-[rgb(34,193,195)] transition duration-300 text-lg"
              >
                <FaPaperPlane /> Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
