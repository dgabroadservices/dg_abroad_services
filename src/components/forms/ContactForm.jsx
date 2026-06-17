import emailjs from '@emailjs/browser'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Enter a valid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const validationErrors = validate()

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  try {
    await emailjs.send(
      'service_dgabroadservices',
      'template_9wigcus',
      {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.interest,
        message: formData.message,
      },
      '7a8JJ3YJJN7F0lQ3a'
    )

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    })
  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('Failed to send message. Please try again.')
  }
}

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`input-field ${errors.name ? 'border-red-400' : ''}`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`input-field ${errors.email ? 'border-red-400' : ''}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
          className="input-field"
        />
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
          I'm Interested In
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select a service…</option>
          <option value="german-training">German Language Training</option>
          <option value="study-abroad">Study Abroad Consulting</option>
          <option value="ausbildung">Ausbildung Guidance</option>
          {/* <option value="visa">Visa Assistance</option> */}
          <option value="career">Career Counseling</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your Germany goals…"
          className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg text-base
                   hover:bg-brand-navy-light transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
