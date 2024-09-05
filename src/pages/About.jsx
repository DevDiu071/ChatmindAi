import Header from "../components/Header";
import { usePosts } from "../contexts/PostContext";

function About({ setPush }) {
  const { confirmOpen, closeSideBar } = usePosts();

  return (
    <>
      <Header setPush={setPush} />
      <div
        className={`${closeSideBar ? "how-page2" : "about-page"} ${
          confirmOpen && "layer"
        }`}
      >
        <div className="about">
          <h1>About ChatMind</h1>
          <p>
            Welcome to chatMind, your AI-powered conversation companion!
            chatMind is designed to revolutionize how we interact with
            technology, offering a dynamic and engaging chat experience driven
            by cutting-edge artificial intelligence.
          </p>
          <p>
            At the heart of chatMind lies state-of-the-art natural language
            processing algorithms, inspired by the advancements in deep learning
            and neural networks. These algorithms enable chatMind to understand,
            interpret, and respond to a wide range of user queries and prompts
            with remarkable accuracy and fluency.
          </p>
          <p>
            Whether you're seeking intelligent conversation, looking for
            information, or simply want to engage in casual banter, chatMind is
            here to be your virtual conversation partner. With its
            ever-expanding knowledge base and adaptive learning capabilities,
            chatMind continuously evolves to provide more personalized and
            relevant interactions tailored to your preferences and interests.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
