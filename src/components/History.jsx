import { usePosts } from "../contexts/PostContext";

function History({ history, onClick }) {
  const {
    handleClickHistory,
    setMouseEnter,
    mouseEnter,
    setStartPageOpen,
    setConfirmOpen,
  } = usePosts();

  function handleClick(content, input) {
    handleClickHistory(content, input);
    setStartPageOpen((start) => start && !start);
  }

  function handleDelPrompt() {
    setConfirmOpen(true);
  }

  return (
    <div
      className="history-container"
      key={Math.random()}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={() => handleClick(history.content, history.input)}
    >
      <p className="history-para">{history.input.slice(0, 24)}...</p>
      <img
        src="/images/del.svg"
        alt="delete-icon"
        className={`${!mouseEnter ? "hidden" : ""} del`}
        onClick={() => onClick(history.id)}
      />
    </div>
  );
}

export default History;
