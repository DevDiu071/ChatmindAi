import { useState } from "react";
import { PostProvider, usePosts } from "../contexts/PostContext";
import ConfirmPrompt from "./ConfirmPrompt";
import MainApp from "./MainApp";

function App() {
  return (
    <div className="app">
      <PostProvider>
        <MainApp />
      </PostProvider>
    </div>
  );
}

export default App;
