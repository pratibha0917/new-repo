import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Newsletter = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="newletter">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 ">
                    <br/>
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                 
                </div>
                
              
                
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
          <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
          </div>
       
        </div>
      </div>
     
    </div>
  );
};
export default Newsletter;