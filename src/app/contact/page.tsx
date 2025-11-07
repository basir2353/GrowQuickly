'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-beige flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-glacial text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
            THANK YOU
          </h2>
          <p className="font-courier text-lg text-brand-dark uppercase tracking-wide">
            WE'LL GET BACK TO YOU SOON
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-beige">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="font-glacial text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mb-12 text-center">
            GET IN TOUCH
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block font-courier text-sm uppercase tracking-wide text-brand-dark mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-brand-dark focus:outline-none focus:border-brand-coral font-courier text-brand-dark"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-courier text-sm uppercase tracking-wide text-brand-dark mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-brand-dark focus:outline-none focus:border-brand-coral font-courier text-brand-dark"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-courier text-sm uppercase tracking-wide text-brand-dark mb-2">
                PHONE
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-brand-dark focus:outline-none focus:border-brand-coral font-courier text-brand-dark"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-courier text-sm uppercase tracking-wide text-brand-dark mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-brand-dark focus:outline-none focus:border-brand-coral font-courier text-brand-dark resize-none"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-dark text-white font-courier text-lg uppercase tracking-wide hover:bg-brand-dark/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
