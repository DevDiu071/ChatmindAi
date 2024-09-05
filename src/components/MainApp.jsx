import AppContent from "./AppContent";
import Aside from "./Aside";
import { PostProvider, usePosts } from "../contexts/PostContext";
import { HistoryProvider } from "../contexts/SearchHistoryContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import How from "../pages/How";
import About from "../pages/About";
import AppLayOut from "./AppLayOut";
import ConfirmPrompt from "./ConfirmPrompt";
import { useState } from "react";
import Header from "./Header";

function MainApp() {
  const [push, setPush] = useState(false);
  const [notShow, setNotShow] = useState(false);

  const { pushPage, closeSideBar } = usePosts();

  return (
    <div className="mainApp">
      <Aside setPush={setPush} />

      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayOut />}>
              <Route index element={<Navigate replace to="chats" />} />
              <Route path="/chats" element={<AppContent />} />
              <Route path="how_it_works" element={<How />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<p>Page not found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default MainApp;
