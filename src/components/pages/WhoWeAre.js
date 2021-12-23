import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import '../Cards.css';

function WhoWeAre() {
  return (
    <>
      <div className="whoweare">
        <h2
          dir="ltr"
          style={{
            lineHeight: "1",
            textAlign: "left",
            marginTop: "0pt",
            marginBottom: "0pt",
          }}
        >
          <span
            style={{
              fontSize: "17pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "transparent",
              fontWeight: 700,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            WHO WE ARE
          </span>
        </h2>

        <p
          dir="ltr"
          style={{ lineHeight: "1.38", marginTop: "12pt", marginBottom: "0pt" }}
        >
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            Technology is changing the world around us and every person is looking
            for the latest information and a solution to their everyday problems.
            You often have to spend a lot of time finding the information you are
            seeking. Well, we designed this platform to save your time and
            eliminate any confusion or stress.
          </span>
        </p>
        <p
          dir="ltr"
          style={{ lineHeight: "1.38", marginTop: "12pt", marginBottom: "0pt" }}
        >
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontWeight: 700,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            JC PETAVERSE
          </span>
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            &nbsp;is an All-In-One Tech platform where you can catch up on the
            latest technologies, gadgets, software, tools, product reviews, and
            solutions to all your tech problems. Our team will work diligently to
            provide you with the most up-to-date information based on our research
            and analysis. We encourage you to get in touch with us if you find any
            information to be incorrect or incomplete so that we can correct it
            and improve our services.
          </span>
        </p>
        <p>
          <br />
        </p>
        <p
          dir="ltr"
          style={{ lineHeight: "1.38", marginTop: "12pt", marginBottom: "0pt" }}
        >
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            Our ultimate goal is to add value to our community and to help as many
            people as possible. We value reader trust above all else. We assure
            you that all of our product reviews and recommendations are thoroughly
            researched and analyzed. Nothing will be promoted for the sake of
            earning money or out of bias.
          </span>
        </p>
        <p
          dir="ltr"
          style={{ lineHeight: "1.38", marginTop: "12pt", marginBottom: "0pt" }}
        >
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "#ffffff",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            Let us know if you encounter any issues on our website or if you would
            like us to publish a blog related to a specific and relevant topic of
            your choice, or if you need our advice or solutions for a problem you
            are facing.
          </span>
          <span
            style={{
              fontSize: "11pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "transparent",
              fontWeight: 400,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            &nbsp;
          </span>
        </p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <h3
          dir="ltr"
          style={{
            lineHeight: "1",
            textAlign: "left",
            marginTop: "12pt",
            marginBottom: "0pt",
          }}
        >
          <span
            style={{
              fontSize: "13pt",
              fontFamily: "Arial",
              color: "#000000",
              backgroundColor: "transparent",
              fontWeight: 700,
              fontStyle: "normal",
              fontVariant: "normal",
              textDecoration: "none",
              verticalAlign: "baseline",
              whiteSpace: "pre-wrap",
            }}
          >
            MEET THE TEAM
          </span>
        </h3>
        <p>
          <br />
        </p>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.png'
              text='In a week'
              label='coming soon'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Cyril Mathew'
              text1='Just another founder'
              // label='Cyril Mathew'
              path='/'
            />
          </ul>
        </div>
      </div>
    </>

  );
}

export default WhoWeAre;
