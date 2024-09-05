import { usePosts } from "../contexts/PostContext";

function ConfirmPrompt() {
  const { handleConfirmDel, handleCancel, closeSideBar } = usePosts();
  return (
    <div className={`${!closeSideBar ? "confirm" : "confirm2"}`}>
      <p>Are you sure you want to delete Chat History?</p>
      <p>You will not be able to recover all the data 😎</p>
      <div className="buttons-confirm">
        <button onClick={() => handleConfirmDel()}>Delete</button>
        <button onClick={() => handleCancel()}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmPrompt;
