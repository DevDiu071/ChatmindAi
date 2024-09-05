import { usePosts } from "../contexts/PostContext";

function FormInput() {
  const { onInputSubmit, userInput, setUserInput, confirmOpen, closeSideBar } =
    usePosts();

  return (
    <div className={` ${!closeSideBar ? "form2" : "form"}`}>
      <form className={` ${confirmOpen && "adjust-form"}`}>
        <div className="input-box">
          <textarea
            type="text"
            placeholder="Message Chatmind"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onClick={() => console.log("yes")}
          />
          <img
            src="/images/send.svg"
            alt="send icon"
            className="send-icon"
            onClick={(e) => onInputSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default FormInput;
