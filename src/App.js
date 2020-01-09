import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''

    }
      this.handleChange = this.handleChange.bind(this)    
  }

  

  handleChange = ({target}) => {
    this.setState({input: target.value})
  }

  handleSubmit = () => {}

  encode = () => {}

  decode = () => {}
  
  render() {
    return (
      <div className='body'>
        <div className='header'>
          <h1>Encoder/Decoder</h1>
        </div>
        <div className='container'>

          <form>
            <input onChange={this.handleChange} placeholder='Enter your message' />
          </form>
          <div className='button-container'>
            <div className='button style-1' >
              Encode
            </div>

            <div className='button style-2' >
              Decode
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

              .button-container {
                display: grid;
                list-style: none;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 16px;
                grid-row-gap: 8px;
                margin-top: 32px;
                padding-left: 16px;
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


