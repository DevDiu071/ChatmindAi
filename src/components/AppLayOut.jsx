import { Outlet } from "react-router-dom";
import ConfirmPrompt from "./ConfirmPrompt";
import { usePosts } from "../contexts/PostContext";

function AppLayOut() {
  const { confirmOpen, setConfirmOpen } = usePosts();
  return (
    <div onClick={() => setConfirmOpen()}>
      {confirmOpen && <ConfirmPrompt />}
      <Outlet />
    </div>
  );
}

export default AppLayOut;
