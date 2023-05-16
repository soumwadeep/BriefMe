import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <h1>Get In Touch</h1>
      <form className="formfix">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="email" name="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <input type="text" name="message" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default page;
