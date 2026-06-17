import { useState } from 'react'

function DemoBookingForm({ onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', level: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: backend integration
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 text-sm">We'll call you to confirm your free demo session.</p>
        {onClose && (
          <button onClick={onClose} className="mt-6 text-sm text-brand-navy underline">
            Close
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          className="input-field"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
          className="input-field"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">German Level</label>
        <select name="level" value={formData.level} onChange={handleChange} className="input-field">
          <option value="">Select level…</option>
          {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
      >
        Book Free Demo
      </button>
    </form>
  )
}

export default DemoBookingForm
