import { useState } from 'react';
import { usePageSeo } from '../hooks/useSeo.js';
import { contact } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  usePageSeo('contact');
  const [values, setValues] = useState({ name: '', email: '', business: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!values.email.trim()) next.email = 'Enter your email address.';
    else if (!emailOk(values.email)) next.email = 'Enter a valid email address, for example name@company.com.';
    if (!values.message.trim()) next.message = 'Tell us about your business and requirements.';
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`f-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    if (e.target.website?.value) return; // honeypot

    setStatus('sending');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Request failed');
      }
      setStatus('ok');
      setValues({ name: '', email: '', business: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const err = (k) => (errors[k] ? `e-${k}` : undefined);

  return (
    <>
      <PageHero crumb="Contact Us" title={contact.headline} lead={contact.lead} />
      <section className="section section--white" aria-label="Contact SocialMint">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>{contact.getInTouch}</h2>
            <h3>{contact.tellUs}</h3>
            {contact.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="form-card">
            <h2>{contact.formTitle}</h2>
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="f-name">
                  Name <span className="req" aria-hidden="true">*</span>
                </label>
                <input id="f-name" name="name" type="text" autoComplete="name" required value={values.name}
                  onChange={onChange} aria-invalid={!!errors.name} aria-describedby={err('name')} />
                {errors.name && <p className="field-error" id="e-name">{errors.name}</p>}
              </div>
              <div className="field">
                <label htmlFor="f-email">
                  Email <span className="req" aria-hidden="true">*</span>
                </label>
                <input id="f-email" name="email" type="email" autoComplete="email" required value={values.email}
                  onChange={onChange} aria-invalid={!!errors.email} aria-describedby={err('email')} />
                {errors.email && <p className="field-error" id="e-email">{errors.email}</p>}
              </div>
              <div className="field">
                <label htmlFor="f-business">Business</label>
                <input id="f-business" name="business" type="text" autoComplete="organization" value={values.business}
                  onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="f-message">
                  Requirements <span className="req" aria-hidden="true">*</span>
                </label>
                <textarea id="f-message" name="message" required value={values.message} onChange={onChange}
                  aria-invalid={!!errors.message} aria-describedby={err('message')} />
                {errors.message && <p className="field-error" id="e-message">{errors.message}</p>}
              </div>
              <div className="hp" aria-hidden="true">
                <label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send enquiry'}
              </button>
              <div aria-live="polite">
                {status === 'ok' && <p className="form-status form-status--ok">Thank you. We will get in touch.</p>}
                {status === 'error' && (
                  <p className="form-status form-status--err">Your enquiry was not sent. Please try again.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
