const { useState } = React;

export function EventRSVPForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attendees: 1,
    diet: '',
    extraGuests: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    const value = field === 'extraGuests' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rsvp-card">
      <h1>You're Invited — RSVP</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange('name')}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange('email')}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="attendees">Number of Attendees</label>
          <input
            id="attendees"
            type="number"
            min="1"
            value={form.attendees}
            onChange={handleChange('attendees')}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="diet">Dietary Preferences (Optional)</label>
          <input
            id="diet"
            type="text"
            placeholder="e.g. Vegetarian"
            value={form.diet}
            onChange={handleChange('diet')}
          />
        </div>

        <div className="field checkbox-field">
          <input
            id="extraGuests"
            type="checkbox"
            checked={form.extraGuests}
            onChange={handleChange('extraGuests')}
          />
          <label htmlFor="extraGuests">Bringing additional guests?</label>
        </div>

        <button className="submit-btn" type="submit">
          Submit RSVP
        </button>
      </form>

      {submitted && (
        <div className="confirmation">
          <h2>RSVP Submitted!</h2>
          <p data-testid="name-output">Name: {form.name}</p>
          <p data-testid="email-output">Email: {form.email}</p>
          <p data-testid="attendees-output">
            Number of attendees: {form.attendees}
          </p>
          <p data-testid="diet-output">
            Dietary preferences: {form.diet || 'None'}
          </p>
          <p data-testid="extra-guests-output">
            Bringing additional guests: {form.extraGuests ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>
  );
}