import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faBolt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput";
import { usePosts } from "../contexts/PostContext";
import Loader from "./Loader";
import Header from "./Header";
import ConfirmPrompt from "./ConfirmPrompt";
import Response from "./Response";

function AppContent() {
  const {
    AiResponse,
    startPageOpen,
    isLoading,
    question,
    confirmOpen,
    closeSideBar,
    recentResponse,
  } = usePosts();

  return (
    <div className={`appcontent ${confirmOpen && "layer"}`}>
      <Header />

      <div
        className={` ${!closeSideBar ? "marginLeft" : ""} ${
          !closeSideBar ? "content-wrapper2" : "content-wrapper"
        }`}
      >
        <div className="content">
          {startPageOpen && !isLoading && (
            <>
              <div className="app-heading">
                <img src="/images/chatmind.svg" alt="logo" className="logo" />
                <h1>Welcome! Ask me anything you'd like to know</h1>
              </div>

              <div className="start-interface">
                <div className="box-wrapper">
                  <div className="box-header">
                    <span>
                      <FontAwesomeIcon icon={faSun} />
                    </span>
                    <h2>Examples</h2>
                  </div>
                  <div className="box">
                    <p>Can you explain how neural networks work?</p>
                    <p>
                      Suggest 10 Bible verses that speak about the new Heaven
                    </p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="box-header">
                    <span>
                      <FontAwesomeIcon icon={faBolt} />
                    </span>
                    <h2>Capabilities</h2>
                  </div>
                  <div className="box">
                    <p>
                      Can understand and generate human-like text in many topics
                    </p>
                    <p>
                      ChatMind can provide recommendations and answer questions
                    </p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="box-header">
                    <span>
                      <FontAwesomeIcon icon={faTriangleExclamation} />
                    </span>
                    <h2>limitations</h2>
                  </div>
                  <div className="box">
                    <p>Can provide inaccurate informations sometimes.</p>
                    <p>Doesn't understand in the same way Humans do.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <Response />
        </div>
      </div>
      <FormInput />
    </div>
  );
}

export default AppContent;
