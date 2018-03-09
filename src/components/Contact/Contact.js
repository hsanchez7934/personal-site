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

  resetForm = () => {
    setTimeout(() => {
      this.setState({
        first: '',
        last: '',
        email: '',
        message: ''
      });
    });
  }

  sendEmail = (first, last, email, message) => {
    const params = [first, last, email, message];

    for(let i = 0; i < params.length; i++) {
      if(params[i] === '') {
        alert(`Please fill out entire form.`);
        return;
      }
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
        console.log('good email');
    } else {
        alert("You have entered an invalid email address!");
        return;
    }

    let messageToSend = {
      first,
      last,
      email,
      message
    };

    fetch(`/api/v1/sender`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageToSend)
    })
    .then(() => console.log('success'))
    .catch(() => console.log('da fuck'));
    this.resetForm();
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
              <form
                id='form-wrapper'
                name='sender'>

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
                            value={last}
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
                        value={email}
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
                          value={message}
                          onChange={(event) => this.updateOnChange(event)}>
                          </textarea>
                      </div>
                    </div>
                    <div id='submit-button-container'>
                      <input
                        type='submit'
                        value='SUBMIT'
                        id='submit-button'
                        onClick={(e) =>{
                          e.preventDefault();
                          this.sendEmail(first, last, email, message);
                        }} />
                    </div>
                  </div>

              </form>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    );
  }
}
