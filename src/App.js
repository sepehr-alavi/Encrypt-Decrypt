import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      n: '',
      d: '',
      e: '',
      length: ''

    }
      this.handleChange = this.handleChange.bind(this)    
      this.generateKey = this.generateKey.bind(this)
      this.encrypt = this.encrypt.bind(this)
      this.decrypt = this.decrypt.bind(this)
  }
  

  handleChange = ({target}) => {
    this.setState({ [target.id] : target.value})
  }

  encrypt = () => {
    const { message , n, e} = this.state
    if(!n) 
      alert('You need to generate a key first!')
    else if(!message) 
      alert('Enter a message!')
    else if(n && message) {
        axios.post('http://localhost:5000/encrypt', {message: message, public_key: { n: n, e: e}, separate_length: 6}).then(res => {

          alert(`encrypted message : ${res.data.encrypted_message}  time : ${res.data.time_elapsed}` )
        })
        
    }
  }

  decrypt = () => {
    const { message, n, d } = this.state
    if(!n) 
      alert('You need to generate a key first!')
    else if(!message) 
      alert('Enter a message!')
    else if(n && message) {
        axios.post('http://localhost:5000/decrypt', {message: message, private_key: { n: n, d: d}}).then(res => {
          alert(`encrypted message : ${res.data.decrypted_message}  time : ${res.data.time_elapsed}` )
        })
    }
  }
  
  generateKey = () => {
    const { length } = this.state
    if( (length.match(/(^[0-9]*$)/g) && length >= 4 && length <= 64) || length === '') {
      axios.get(`http://localhost:5000/generate_keys?length=${length}`).then(res => {
        console.log(res)
      this.setState({n: res.data.n, e: res.data.e, d: res.data.d })
      alert('Key generated!')
    })}
    else 
      alert('length should be a number between 4 and 64')
  }

  render() {
    console.log(this.state)
    return (
      <div className='body'>
        <div className='header'>
          <h1>Encrypt/Decrypt</h1>
        </div>
        <div className='container'>

          <input id="message" className="message" onChange={this.handleChange} placeholder='Enter your message' />
          <div className="generator">
            <input id="length" type="tel" className="key" onChange={this.handleChange} placeholder='Enter the length of key' />
            <div className="generator-button" onClick={this.generateKey}>Generate</div>
          </div>
          <div className='button-container'>
            <div className='button style-1' onClick={this.encrypt}>
              Encrypt
            </div>

            <div className='button style-2' onClick={this.decrypt}>
              Decrypt
            </div>
          </div>

          <style jsx>
            {`
              .body {
                background-color: #f9fafb;
                height: 100vh;
              }

              .container {
                padding: 24px 0;
                text-align: center;
                width: 60%;
                margin: 0 auto;
              }
              .header {
                background-color: #063043;
                color: white;
                text-align: center;
                padding: 24px;
              }
              
              input { 
                width: 100%;
                height: 40px;
                border: none;
                outline: none;
                background: transparent;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 0 16px;
                color: #333;
                font-size: 16px;
                text-align: left;
                transition: 0.3s all;
                margin-bottom: 16px;
              }
              input:hover {
                border: 1px solid #4a90e2;
              }
              input:focus {
                box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.4);
		            border: 1px solid #4a90e2;
              }
              
              input::placeholder {
                color: #ccc;
              }

              .generator {
                width: 100%;
                text-align: left;
                position: relative;
              }
              input.key {
                width: 75%;
              }
              .generator-button {
                position: absolute;
                right: -32px;
                top: 0;
                height: 40px;
                border-radius: 4px;
                width: 23%;
                margin-left: 16px;
                text-align: center;
                background-color: black;
                color: white;
                line-height: 40px;
                cursor: pointer;
              }
              .button-container {
                display: grid;
                list-style: none;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 16px;
                margin-top: 16px;
                padding-left: 32px;
              }

              .button {
                position: relative;
                border-radius: 4px;
                text-align: center;
                cursor: pointer;
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                font-weight: bold;
                border: none;
                
              }

              .button.style-1 {
                background-color: #60bc0f;
                color: #f9fafb;
              }
              .button.style-1:hover {
                background-color: #f9fafb;
                color: #60bc0f;
                border: 1px solid #60bc0f;
              }

              .button.style-2 {
                background-color: #fdbb00;
                color: #f9fafb;
              }
              .button.style-2:hover {
                background-color: #f9fafb;
                color: #fdbb00;
                border: 1px solid #fdbb00;
              }
            `}
          </style>
        </div>
      </div>
    )
  }
}


