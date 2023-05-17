import Image from "next/image";
import tick from "@/img/tick.gif";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1 className="text-center">
                    <Image
                      src={tick}
                      className="imgfix"
                      style={{ maxWidth: "400px" }}
                      alt="tick"
                    />
                    <br />
                    Thank You!
                  </h1>
                  <h4>
                    Thanks A Bunch For Filling That Out. It Means A Lot To Me,
                    Just Like You Do! I Really Appreciate You Giving Me A Moment
                    Of Your Time Today. Thanks For Being You.I Will Soon Reply
                    You!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
