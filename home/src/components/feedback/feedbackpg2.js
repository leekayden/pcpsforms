import React from "react";
import "./style.css";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function feedbackpg2() {
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <div>
      <br></br>
      {/* Main form component */}
      <div className="card" style={{ width: "60%" }}>
        <div className="line-top" />
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
          <p className="card-text">
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
          </p>
          <hr></hr>
          <div className="form-group">
            <p>
              Fields marked with a red asterisk{" "}
              <span style={{ color: "red" }}>*</span> are required
            </p>
          </div>
        </div>
      </div>
      {/* End main form component */}

      <br></br>

      <form action="https://submit-form.com/hyD68z2E">
        <input type="hidden" name="_redirect" value="https://pcpsforms.cf/feedback/survey/success/" />
        <input type="hidden" name="_append" value="false" />

        {/* Form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">Your details</h1>
            <hr></hr>
            <div className="form-group">
              <label for="exampleInputEmail1">
                Email address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control form-control-lg col-7"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
                required
              />
              
              <div class="label-float ">
                <input type="text" placeholder=" " id="email" aria-describedby="emailHelp" name="email" className="col-17" required />
                <label>Email</label>
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                Child's name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="name"
                className="form-control form-control-lg col-7"
                id="exampleInputPassword1"
                placeholder="Child's Name (Printed on BC)"
                name="name"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Child's name is printed on BC
              </small>
            </div>
          </div>
        </div>
        {/* End form component */}

        <br></br>

        {/* Form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">Your feedback</h1>
            <p className="card-text">
              Here is where you can tell us all your feedback :D!
            </p>
            <hr></hr>
            <div className="form-group">
              <label for="customRange1" class="form-label">
                How do you rate PCPS Forms?
                <span style={{ color: "red" }}>*</span>
              </label>
              <small id="emailHelp" className="form-text text-muted">
                To the right:&nbsp;
                <span role="img" aria-label="Luv it">
                  🤩
                </span>
                <br />
                To the left:&nbsp;
                <span role="img" aria-label="Hate it">
                  😤
                </span>
              </small>
              <br></br>
              <input
                type="range"
                class="form-range"
                min="0"
                max="10"
                id="customRange2"
                name="range"
                required
              />
              <br></br>
              {/* <label>😤</label>
            
            <label>🤩</label> */}
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                What new features would you like to see in PCPS Forms and how
                can we improve the form in its current state?
              </label>
              <textarea
                className="form-control form-control-lg col-7"
                id="exampleFormControlTextarea1"
                rows="2"
                name="improve"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                What do you dislike about the form?
              </label>
              <textarea
                className="form-control form-control-lg col-7"
                id="exampleFormControlTextarea1"
                rows="2"
                name="dislike"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input form-check-input-lg"
                id="exampleCheck1"
                name="reply"
              />
              <label
                className="form-check-label"
                for="exampleCheck1"
                title="Allow us to reply to your feedback (we may or may not get back to you)"
              >
                Get back to me regarding feedback via email
              </label>
            </div>
          </div>
        </div>
        {/* End form component */}

        <br></br>

        {/* Main form component */}
        <div className="card" style={{ width: "60%" }}>
          <div className="card-body">
            <h1 className="card-title">
              End of the form!{" "}
              <span role="img" aria-label="Yay! End of the form!">
                😊🥳🎈
              </span>
            </h1>
            <h2>Remember to click Submit!</h2>
            <p className="card-text">
              Thank you for giving us feedback! We promise we'll take your
              feedback and implement your awesome suggessions if it is
              appropriate :)!
            </p>
            <hr></hr>
            <button className="btn btn-primary btn-lg" required>
              Submit
            </button>
            {/* <Stack spacing={2} sx={{ width: "100%" }}>
              <Button variant="outlined btn btn-primary btn-lg" onClick={handleClick} endIcon={<SendIcon />}>
                Submit
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Form submitted!
                </Alert>
              </Snackbar>
              <Alert severity="error">This is an error message!</Alert>
              <Alert severity="warning">This is a warning message!</Alert>
              <Alert severity="info">This is an information message!</Alert>
              <Alert severity="success">This is a success message!</Alert>
            </Stack> */}
          </div>
        </div>
        {/* End main form component */}

        <br></br>

        <br></br>
      </form>
    </div>
  );
}

export default feedbackpg2;
