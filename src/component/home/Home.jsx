import React from "react";
import { useNavigate } from "react-router-dom";
import Me from "../../assets/pic_eden.jpeg";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Replace '1234567890' with the phone number you want to chat with
    const phoneNumber = "0528383680";

    // Construct the WhatsApp API URL with the phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div style={{ height: "900px", background: "#eee4e2" }}>
      <div className="home">
        <div className="wapper-picture">
          <img className="picture" src={Me} />
        </div>

        <div className="social-media">
          <a
            className="social-text"
            href="https://www.instagram.com/eden_azulayy_1/"
            target="_blank"
            style={{ color: "black", fontSize: "20px" }}
          >
            Instagram
          </a>
        </div>

        <div className="option">
          <div className="top">
            <div className="move-explanation">
              <div
                onClick={() => navigate("/explanation")}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                {" "}
                ?מהי נומרולוגיה{" "}
              </div>
            </div>
            <div className="move-about-me">
              <div
                onClick={() => navigate("/aboutme")}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                {" "}
                על עצמי
              </div>
            </div>
          </div>
          <div className="bottom">
            <div
              className="move-contact"
              style={{ color: "black", fontSize: "20px" }}
            >
              <div onClick={handleClick}>צור קשר</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
