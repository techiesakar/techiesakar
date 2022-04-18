import React from "react";

const Contact = (props) => {
  document.body.classList.add(props.class);

  document.title = "Contact - Techiesakar";
  return (
    <>
      <section className="container container-contact">
        <div className="contact-wrapper">
          <h2>Contact Me</h2>
          <form action="">
            <div className="form-control">
              <label htmlFor="">
                Name: <span className="required">*</span>
              </label>
              <div className="form-data data-name">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="">
                Email: <span className="required">*</span>
              </label>
              <div className="form-data">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="">
                Subject: <span className="required">*</span>
              </label>
              <div className="form-data">
                <input type="text" placeholder="Subject" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="">
                Message: <span className="required">*</span>
              </label>
              <div className="form-data">
                <textarea name="" id="" cols="30" rows="4"></textarea>
              </div>
            </div>
            <div className="form-control">
              <p>
                <input required type="checkbox" /> I agree the terms and
                conditions.
              </p>
            </div>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
