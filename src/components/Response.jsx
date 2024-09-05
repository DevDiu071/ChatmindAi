import { usePosts } from "../contexts/PostContext";
import Loader from "./Loader";

function Response() {
  const { AiResponse, startPageOpen, isLoading, question, error } = usePosts();
  console.log(!AiResponse ? "no" : AiResponse.length);
  return (
    <div>
      {error && !startPageOpen && !isLoading && (
        <p className="error">Oops something went wrong, please try again!</p>
      )}
      {!startPageOpen && !error && (
        <div className="user-icon">
          <div className="user-abbr">
            <p>DG</p>
          </div>
          <div className="user-quest">
            <p>You</p>
            <p className="question">{question}</p>
          </div>
        </div>
      )}

      {!startPageOpen && !error && (
        <div className="response-wrapper">
          <img
            src="/images/chatmind.svg"
            alt="Ai-logo"
            className="response-logo2"
          />
          <p>ChatMind</p>
        </div>
      )}

      {isLoading && !startPageOpen && !error && <Loader />}

      {!isLoading && !error && !startPageOpen && (
        <p
          className="response"
          dangerouslySetInnerHTML={{
            __html: AiResponse.length > 0 ? AiResponse : "",
          }}
        ></p>
      )}
    </div>
  );
}

export default Response;
