import React from "react";
import Namaskar from "../assets/images/sakar2.jpg";

const About = (props) => {
  document.title = "About - Techiesakar";

  return (
    <>
      <section className={`container transition container-about`}>
        <div className="about-wrapper">
          <div className="about-left">
            <div className="image">
              <img src={Namaskar} alt="" />
            </div>
            <div className="details">
              <ul className="details-list">
                <li>
                  <h3>Name</h3>
                  <span>Sakar Aryal</span>
                </li>
                <li>
                  <h3>Birthday</h3>
                  <span>01 Jan, 199X</span>
                </li>
                <li>
                  <h3>Mail</h3>
                  <span>contact@techiesakar.com</span>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>+977-98677XXXXX</span>
                </li>
                <li>
                  <h3>Address</h3>
                  <span>Tilottama, Manigram</span>
                </li>
                <li>
                  <h3>Nationality</h3>
                  <span>Nepalese</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-right">
            <div className="about-text-wrapper">
              <div className="about-title">
                <span>About Me</span>
                <h3>A Passionate Web Developer</h3>
              </div>
              <div className="about-subtitle">
                A passionate UI/UX Designer and Web Developer based Butwal,
                Nepal
              </div>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  libero cum voluptate aperiam quia unde soluta ex aspernatur,
                  voluptas obcaecati, hic est cumque quas ipsam voluptatibus,
                  doloremque nesciunt rerum suscipit reiciendis iure quo aliquam
                  maxime ut? Asperiores repudiandae expedita blanditiis!
                </p>
              </div>
              <div className="about-btn-wrapper">
                <button className="about-btn">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default About;
