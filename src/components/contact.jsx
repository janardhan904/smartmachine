import React, { Component } from "react";
import emailjs from 'emailjs-com';


export class Contact extends Component {
  render() {
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sb0xtqb', 'template_u07u2dm', e.target, 'user_bAmEFd2KONm9DpWzfCR4w')
      .then((result) => {
          console.log(result.text);
          console.log("Submitting complete", result.success);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch with Us</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                          name="name"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          name="email"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="phnumber"
                          id="phnumber"
                          className="form-control"
                          placeholder="Ph Number"
                          required="required"
                          name="phnumber"
                        />
                        <p className="help-block text-danger"></p>
                      </div>        
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="stuwrk"
                          id="stuwrk"
                          className="form-control"
                          placeholder=""
                          required="required"
                          name="stuwrk"
                        />
                        <p className="help-block text-danger"></p>
                      </div>        
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <h4>United Kingdom</h4>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address1 : "loading"}
                  {/* <br />
                  <b>Alternative Contact</b>
                  <br />
                  {this.props.data ? this.props.data.address2 : "loading"}
                  <br />
                  <span>Contact Ph: 07424942942</span> */}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            {/*<div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    */}
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; All rights reserved to Smart Machine Solutions Ltd.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
