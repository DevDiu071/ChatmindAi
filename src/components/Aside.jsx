import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMoon,
  faCommentDots,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { usePosts } from "../contexts/PostContext";
import History from "./History";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function Aside({ setPush }) {
  const {
    recentResponse,
    setRecentResponse,
    deleteHistory,
    setStartPageOpen,
    handleConfirm,
    closeSideBar,
    setCloseSideBar,
    setPushPage,
    closePhoneSideBar,
    setClosePhoneSideBar,
    pushPage,
  } = usePosts();

  function handleHarmburger() {
    setPush(true);
    setPushPage(true);
    setCloseSideBar(true);
  }

  return (
    <aside
      className={`aside ${closeSideBar && "close"} ${
        closePhoneSideBar && "hideSideBar"
      }`}
    >
      {/* <Header /> */}
      <div className="padd-btn">
        <div
          className="new-conservation-btn"
          onClick={() => setStartPageOpen(true)}
        >
          <p>New Conversation</p>
          <span className="new-converse-icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
        </div>
        <span className="harmburger" onClick={() => handleHarmburger()}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <div className="search-history">
        {recentResponse?.map((history) => (
          <History
            history={history}
            onClick={deleteHistory}
            key={Math.random()}
          />
        ))}
      </div>

      <hr />
      <div className="aside-actions">
        <div className="action">
          <span>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <p onClick={() => handleConfirm()}>Clear Conversations</p>
        </div>
        <div className="action">
          <span>
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <p>Theme mode</p>
        </div>

        <div className="action">
          <span>
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <p>Feedback</p>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
