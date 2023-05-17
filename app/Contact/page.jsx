import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <h1>Get In Touch</h1>
      <form
        action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862"
        method="POST"
        className="formfix"
      >
        {/* Email Preferences */}
        <div>
          <input
            type="hidden"
            name="_subject"
            value="An User Has Just Send You A Message From Brief Me's Contact Form.Please Have A Look!"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://briefme.soumwadeepguha.com/contact"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="TextHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Mobile Number</label>
          <input
            type="text"
            name="Mobile-Number"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="TextHelp"
            required
          />
          <div id="phoneHelp" className="form-text">
            We'll Never Share Your Mobile Number With Anyone Else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Your Email Id</label>
          <input
            type="email"
            name="Email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll Never Share Your Email With Anyone Else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            type="text"
            name="Message"
            className="form-control"
            id="exampleInputText1"
            aria-describedby="TextHelp"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default page;
