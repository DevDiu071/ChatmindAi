import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { usePosts } from "../contexts/PostContext";

function Header({ setPush }) {
  const {
    setCloseSideBar,
    setPushPage,
    setStartPageOpen,
    pushPage,
    closeSideBar,
    setClosePhoneSideBar,
  } = usePosts();

  function handleOpenSideBar() {
    setCloseSideBar(false);
    setPushPage(false);
    setClosePhoneSideBar(false);
  }

  return (
    <nav className="header">
      <div className="align-header">
        <span
          className={`open ${closeSideBar && "hide"}`}
          onClick={() => handleOpenSideBar()}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>

        <ul className={`leftSpace ${!closeSideBar && "push"}`}>
          <li>
            <NavLink to="/chats" className="link">
              Chats
            </NavLink>
          </li>
          <li>
            <NavLink to="/how_it_works" className="link">
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
        </ul>
        <span className="new-chat-icon" onClick={() => setStartPageOpen(true)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
      </div>

      <p className="remove">ChatMinds version 4.5</p>
    </nav>
  );
}

export default Header;
