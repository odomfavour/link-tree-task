// import logo from './logo.svg';
import "./App.css";
import logo from "./images/I4G.png";
import zuri from "./images/Zuri.Internship_Logo.png";
import profPic from "./images/ogo1.jpeg";
import mobileShare from "./images/mobile-share.png";
import desktopShare from "./images/desktop-share.png";
import slack from "./images/slack.png";
import git from "./images/git.png";
import { links } from "./appData";

function App() {
  return (
    <section>
      <div className="container">
        <div className="share-holder">
          <img
            src={desktopShare}
            alt=""
            className="view-desktop"
            role="button"
          />
          <img src={mobileShare} alt="" className="view-mobile" role="button" />
        </div>
        <div className="profile-section">
          <div className="image-box">
            <img src={profPic} alt="" />
          </div>
          <div className="user-info">
            <h5 id="twitter">godsfavourodom</h5>
            <h5 id="slack">Ogochuks</h5>
          </div>
        </div>
        <div className="links-section">
          {links.map((link) => {
            const { id, name, pageId, url } = link;
            return (
              <a href={url} id={pageId} className="btn" key={id}>
                {name}
              </a>
            );
          })}
        </div>
        <div className="mid-section">
          <div className="inner">
            <div className="social-box">
              <img src={slack} alt="" />
            </div>
            <div className="">
              <img src={git} alt="" />
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-inner">
            <div>
              <img src={zuri} alt="" />
            </div>
            <p>HNG Internship 9 Frontend Task</p>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default App;
