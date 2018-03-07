import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import './Contact.css';
import phoneIcon from '../../assets/cell.svg';
import gmail from '../../assets/gmail.svg';
import linkedInColor from '../../assets/linkedin-color.svg';
import slack from '../../assets/slack.svg';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      first: '',
      last: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  checkForSpecialChars = (string1) => {
    const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    for (let i = 0; i < specialChars.length; i++) {
      if (string1.indexOf(specialChars[i]) > -1) {
        alert('No special characters allowed');
        return true;
      }
      return false;
    }
  };

  validateEmail = (inputText) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
      return true;
    } else {
      alert('You have entered an invalid email address');
      document.contact.email.focus();
      return false;
    }
  }

  sendEmail = (event, first, last, email, message) => {
    // const firstName = this.checkForSpecialChars(first);
    // const lastName = this.checkForSpecialChars(last);
    // const emailVerify = this.validateEmail(email);
    event.preventDefault();
    const messageToSend = {
      first,
      last,
      email,
      message
    };

    fetch(`/contact`, {
      method: 'POST',
      accept: 'application/json',
      headers: {
        Authorization: `AIzaSyAK8jzjqJP8N70BwkfBtawj0lYONXTJY6g`
      },
      body: messageToSend
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  backgroundImage = (url) => ({
    backgroundImage: 'url(' + url + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })

  updateOnChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  render() {
    const { first, last, email, message } = this.state;
    return (
      <section id='contact'>
        <header id='contact-header'>
          <NavBar />
          <section id='contact-quote-container'>
            <p class='contact-quote-text fade-in one'>
              a simple hello can lead to a million things...
            </p>
            <h1 id='contact-quote'>LET'S HAVE A CHAT</h1>
          </section>
        </header>
        <main id='contact-main'>
          <section id='contact-main-intro'>
            <h1 id='contact-main-intro-title'>
              I'm just a phone call or message away
            </h1>
            <p id='contact-main-intro-text'>
              Getting in touch is easy, do not hesitate
              to reach out to me if you have any
              questions or comments.  Let's start something
              great together.
            </p>
          </section>
          <section id='contact-main-form-container'>
            <div id='form-container-left'>
              <div id='form-container-left-wrapper'>
                <div className='contact-info-boxes'>
                  <div className='contact-icon-containers'>
                    <img src={phoneIcon} alt='' className='contact-icons'/>
                  </div>
                  <div className='contact-info-text-container'>
                    <p className='contact-info-text'>(720) 999-7826</p>
                  </div>
                </div>
                <div className='contact-info-boxes'>
                  <div className='contact-icon-containers'>
                    <img src={gmail} alt='' className='contact-icons'/>
                  </div>
                  <div className='contact-info-text-container'>
                    <p className='contact-info-text'>hsanchez7934@gmail.com</p>
                  </div>
                </div>
                <div className='contact-info-boxes'>
                  <div className='contact-icon-containers'>
                    <img src={linkedInColor} alt='' className='contact-icons'/>
                  </div>
                  <div className='contact-info-text-container'>
                    <p className='contact-info-text'>linkedin.com/in/hector-a-sanchez</p>
                  </div>
                </div>
                <div className='contact-info-boxes'>
                  <div className='contact-icon-containers'>
                    <img src={slack} alt='' className='contact-icons'/>
                  </div>
                  <div className='contact-info-text-container'>
                    <p className='contact-info-text'>@HectorASanchez</p>
                  </div>
                </div>
              </div>
            </div>

            <div id='form-container-right'>
              <form id='form-wrapper' method='POST' action='/contact' name='contact'>
                {/* <div id='form-wrapper'> */}
                  <div id='form-box'>
                    <div id='form-heading'>
                      SEND ME A MESSAGE
                    </div>
                    <div id='full-name'>
                      FULL NAME*
                    </div>
                    <div id='name-inputs-box'>
                      <fieldset>
                        <legend>First Name</legend>
                      </fieldset>
                      <div id='first-last-name-input-box'>
                        <div className='input-wrappers'>
                          <input
                            type='text'
                            className='name-inputs'
                            value={first}
                            name='first'
                            required
                            onChange={(event) => this.updateOnChange(event)} />
                            <label>First Name</label>
                        </div>
                        <div className='input-wrappers'>
                          <input
                            type='text'
                            className='name-inputs'
                            name='last'
                            required
                            onChange={(event) => this.updateOnChange(event)} />
                            <label>Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div id='email-input-box'>
                      <div id='email-input-title'>EMAIL ADDRESS*</div>
                      <input
                        type='email'
                        id='email-input-tag'
                        name='email'
                        required
                        onChange={(event) => this.updateOnChange(event)} />

                    </div>
                    <div id='message-textarea-box'>
                      <div id='message-textarea-box-title'>
                        YOUR MESSAGE*
                      </div>
                      <div id='message-textarea'>
                        <textarea
                          name='message'
                          required
                          onChange={(event) => this.updateOnChange(event)}>
                          </textarea>
                      </div>
                    </div>
                    <div id='submit-button-container'>
                      <input
                        type='submit'
                        value='SUBMIT'
                        id='submit-button'
                        onClick={(event) => this.sendEmail(event, first, last, email, message)} />
                    </div>
                  </div>
                {/* </div> */}
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    );
  }
}
