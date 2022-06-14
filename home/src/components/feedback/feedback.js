import React from "react";
import "./style.css";

function feedback() {
  return (
    <div>
      <br></br>
      <div className="card" style={{ width: "60%" }}>
        <div className="line-top"></div>
        <div className="card-body">
          <img
            src="https://pcpsforms.cf/site-logo.png"
            alt="pcps logo"
            width="400"
            height="94"
          />
          <h1 className="card-title">PCPS Forms Feedback</h1>
          <p className="card-text">
            We would love if you could give us some information about your
            experience using PCPS Forms :D!
          </p>
          <hr></hr>
          <div className="form-group">
            <p>
              Dear Parents/Guardians,
              <br />
              <br />
              Thank you for supporting the P3 CCA Experience Programme. We hope
              that your child/ward has gained insights to what each CCA group
              entails in Pei Chun Public School.
              <br />
              The school values feedback from students and parents to improve on
              the form. Please fill up this survey to give us your feedback!
              Thank you very much ;)
              <br />
              <p>Best regards,</p>
              <p>Kayden Lee</p>
              <p>Creator</p>
              <a
                href="mailto:kayden-develop@outlook.sg"
                target="_blank"
                rel="noopener noreferrer"
              >
                kayden-develop@outlook.sg
              </a>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <h1 className="card-title">Let's go!</h1>
          <p className="card-text">
            <a
              type="button"
              className="btn btn-primary btn-lg"
              href="./feedback/survey/"
              rel="noopener noreferrer"
            >
              Enter the form &gt;
            </a>
          </p>
          <div className="form-group"></div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default feedback;