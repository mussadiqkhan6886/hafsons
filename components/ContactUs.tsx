import React from 'react'
import Title from './Title'

const ContactUs = () => {
  return (
    <section>
      <Title content='Get in touch' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati voluptatibus cumque, quam consequatur ad iure vel sit quas corrupti incidunt, dignissimos minima dolore? Facilis hic mollitia quam amet numquam debitis?</p>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input type="text" id='name' placeholder='Full Name' />
        <label htmlFor="email">Email: </label>
        <input type="email" id='email' placeholder='Email' />
        <label htmlFor="number">Phone Number: </label>
        <input type="tel" id='number' placeholder='phone number'/>
        <label htmlFor="message">Message: </label>
        <textarea  id="message" />
        <button type='submit'>SEND MESSAGE</button>
      </form>
    </section>
  )
}

export default ContactUs
