import React from 'react'
import './Contact.css'
import geoIcon from '../../Assets/geo-alt-fill.svg'
import phoneIcon from '../../Assets/telephone.svg'
import mailIcon from '../../Assets/icon/Instragram.png'

export default function Contact() {
  return (
    <section id='contact'>
      <h2 className='h2-contact'>Contact</h2>
      <div className='contact-w-map'>
        <div className='contact-container'>
          <div className='phone contact-info'>
            <img className='contact-icons' src={phoneIcon} alt="phone icon" />
            <p>+52 248 174 08 75</p>
          </div>
          <div className='phone contact-info'>
            <img className='contact-icons' src={mailIcon} alt="envelope icon" />
            <p>pateleria_avilez</p>
          </div>
          <div className='phone contact-info'>
            <img className='contact-icons' src={geoIcon} alt="map mark" />
            <p>Hidalgo 25, La Trinidad Tenexyecac Centro, 90121 Huiloapan, Tlax.</p>
          </div>
        </div>
        <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!4v1791001144821!6m8!1m7!1s76Z4buIIf33sxjLqZUsp1Q!2m2!1d19.33542675694449!2d-98.31395962302419!3f318.15!4f-18.230000000000004!5f2.2021578239782444"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='google map'></iframe>
      </div>
      <div className='form-w-title'>
        <div className='backdrop'>
          <h3 className='contact-h3'>Write to us!</h3>
          <form className='form-container' action="#" method='get'>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-name">Name</label>
              <input type="text" className="form-input" name="name" id='form-name' required />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-mail">E-mail</label>
              <input type="email" className="form-input" name="email" id='form-mail' required />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-phone">Telephone</label>
              <input type="tel" className="form-input" name='Telephone' id='form-phone' />
            </div>
            <div className='form-sub-container'>
              <label className='form-label' htmlFor="form-message">Message</label>
              <textarea name="message" className="form-input form-textarea" id='form-message' required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
