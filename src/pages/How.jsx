import Header from "../components/Header";
import { usePosts } from "../contexts/PostContext";

function How() {
  const { confirmOpen, closeSideBar } = usePosts();
  return (
    <div className="howContent">
      <Header />
      <div
        className={`${closeSideBar ? "how-page2" : "how-page"} ${
          confirmOpen && "layer"
        }`}
      >
        <div className="How">
          <h1>Get the Help you need!</h1>
          <p>Welcome to chatMind, your AI-powered conversation companion!</p>
          <ul>
            <li>
              ChatMind leverages advanced artificial intelligence algorithms to
              engage in meaningful conversations with users.
            </li>
            <li>
              The AI learns and adapts to user preferences, providing
              personalized responses over time.
            </li>
            <li>
              Users can initiate conversations on various topics ranging from
              casual chats to seeking advice or information.
            </li>
            <li>
              chatMind responds promptly and intelligently, creating an
              immersive conversational experience.
            </li>
            <li>
              Explore a wide range of topics and witness chatMind's knowledge
              base in action.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default How;
