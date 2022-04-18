import React from "react";
import SocialItem from "../social/SocialItem";
import Sakar from "../assets/images/sakar.jpg";

const Home = (props) => {
  document.title = "Techiesakar - Home";
  return (
    <>
      <section className={`container transition container-home`}>
        <div className="home-wrapper">
          <div className="home-left">
              <div className="text-wrapper">
                <span className="subtitle">I'm</span>
                <h2 className="full-name">Sakar Aryal</h2>
                <p className="desc">A Front-end developer from Butwal, Nepal</p>
              </div>
              <div className="home-social">
                <SocialItem />
            </div>
          </div>
          <div className="home-right">
            <div className="avatar-wrapper">
              <img src={Sakar} alt="" />
            </div>
          </div>
        </div>
        <div className="home-fixed"></div>
        <div className="home-full home-animation">
          

        </div>
      </section>
    </>
  );
};

export default Home;
