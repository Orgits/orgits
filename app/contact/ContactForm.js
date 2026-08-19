'use client'
import { useState } from 'react'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity()) {
      // Form is valid - in production, submit to API endpoint
      alert('Thank you for your message! We will get back to you soon.')
      form.reset()
    } else {
      form.reportValidity()
    }
  }

  return (
    <form
      className="contact-page__form contact-form-validated"
      noValidate
      onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="contact-page__input-box">
          <label htmlFor="name" className="visually-hidden">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name*" required/>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="contact-page__input-box">
          <label htmlFor="email" className="visually-hidden">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email*" required/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="contact-page__input-box">
          <label htmlFor="phone" className="visually-hidden">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone*" required/>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="contact-page__input-box">
          <label htmlFor="subject" className="visually-hidden">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject*" required/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="contact-page__input-box">
          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea id="message" name="message" placeholder="Write Message*" required></textarea>
        </div>
        <div className="contact-page__btn">
          <button className="thm-btn" type="submit"
              data-loading-text="Please wait...">
            <span className="txt">
              Send Message
            </span>
          </button>
        </div>
      </div>
    </div>
  </form>
  )
}