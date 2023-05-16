import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import a1 from "@/img/a1.jpeg";
import a2 from "@/img/a2.jpg";
import a3 from "@/img/a3.jpg";
import a4 from "@/img/a4.jpg";
import a5 from "@/img/a5.jpg";
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
                  <h5>
                    Welcome to Brief Me, the ultimate multilingual article
                    summarizer web app! Our mission is to make it easy for you
                    to stay informed and up-to-date on the latest news and
                    trends, no matter what language you speak. With our powerful
                    API, you can quickly and easily get the gist of any article
                    from your favorite websites.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image src={a1} alt="article1" className="imgfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image src={a2} alt="article2" className="imgfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h5>
                    All you need to do is paste the link to the article you want
                    to summarize, and our API will do the rest. It will extract
                    the main text from the article, translate it if necessary,
                    and summarize it in a concise and easy-to-read format. You
                    can then save the brief for later or share it with your
                    friends and colleagues.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h5>
                    But that's not all – Brief Me also lets you save your recent
                    searches and view your history of summarized articles. When
                    you log in, you'll be able to see a personalized feed of
                    articles that you've recently searched and read briefs for.
                    This makes it easy to keep track of the latest developments
                    in your favorite topics, and to catch up on any articles you
                    may have missed.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image src={a3} alt="article3" className="imgfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image src={a4} alt="article4" className="imgfix" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h5>
                    Our team of developers and designers worked tirelessly to
                    create a user-friendly interface that makes it easy to
                    extract the main text from any article, translate it, and
                    summarize it in a concise and easy-to-read format. We're
                    committed to providing the most accurate and relevant
                    summaries possible, and we're always on the lookout for new
                    ways to make our app even better.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h5>
                    So whether you're a busy professional, a student, or just
                    someone who wants to stay informed without getting bogged
                    down in details, Brief Me is the perfect tool for you. Give
                    it a try today and see for yourself how easy it is to stay
                    on top of the news!
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <Image src={a5} alt="article5" className="imgfix" />
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
