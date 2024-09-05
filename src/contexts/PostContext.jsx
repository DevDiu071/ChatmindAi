import { createContext, useContext, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBOpQ5GlFbDEY30oPC6qqv_zd2wlvjjcOc";
const PostContext = createContext();

const resl = JSON.parse(localStorage.getItem("Response"));
const quest = JSON.parse(localStorage.getItem("Question"));
const start = JSON.parse(localStorage.getItem("start") || true);
const history = JSON.parse(localStorage.getItem("History"));

function PostProvider({ children }) {
  const [AiResponse, setAiResponse] = useState(resl || {});
  const [isLoading, setIsLoading] = useState(false);
  const [recentResponse, setRecentResponse] = useState(history || []);
  const [userInput, setUserInput] = useState("");
  const [startPageOpen, setStartPageOpen] = useState(start);
  const [searchHistory, setSearchHistory] = useState([]);
  const [question, setQuestion] = useState(quest || "");
  const [mouseEnter, setMouseEnter] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [closeSideBar, setCloseSideBar] = useState(false);
  const [pushPage, setPushPage] = useState(false);
  const [closePhoneSideBar, setClosePhoneSideBar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(false);

  const genAI = new GoogleGenerativeAI(API_KEY);

  async function fetchOutPut() {
    try {
      setIsLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(userInput);
      console.log(model);
      const response = await result.response;
      const text = response.text();

      let responseArray = text.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }

      setAiResponse(newResponse2);

      setRecentResponse([
        ...recentResponse,
        { content: newResponse2, input: userInput, id: Math.random() },
      ]);
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  }

  function delayPara(index, nextword) {
    setTimeout(function () {
      setAiResponse((prev) => prev + nextword);
    }, 20 * index);
  }

  function handleInputSubmit(e) {
    e.preventDefault();
    if (!userInput) return;
    fetchOutPut();
    setSearchHistory([
      ...searchHistory,
      { content: AiResponse, input: userInput },
    ]);
    setRecentResponse([...recentResponse, { input: userInput }]);

    setUserInput("");
    setStartPageOpen(false);
    setQuestion(userInput);
    setError(false);
  }

  function handleClickHistory(history, input) {
    setAiResponse(history);
    setQuestion(input);
  }

  function deleteHistory(id) {
    setRecentResponse(recentResponse.filter((recent) => recent.id !== id));
    console.log(id);
  }

  function handleConfirm() {
    if (recentResponse.length > 0) setConfirmOpen(true);
  }

  function handleConfirmDel() {
    setConfirm(true);
    setRecentResponse([]);
    setConfirmOpen(false);
    setConfirm(false);
  }

  function handleCancel() {
    setConfirmOpen(false);
  }

  useEffect(
    function () {
      localStorage.setItem("Response", JSON.stringify(AiResponse));
    },
    [recentResponse]
  );
  useEffect(
    function () {
      localStorage.setItem("Question", JSON.stringify(question));
    },
    [question]
  );
  useEffect(
    function () {
      localStorage.setItem("start", JSON.stringify(startPageOpen));
    },
    [startPageOpen]
  );
  useEffect(
    function () {
      localStorage.setItem("History", JSON.stringify(recentResponse));
    },
    [recentResponse]
  );

  return (
    <PostContext.Provider
      value={{
        AiResponse,
        userInput,
        setUserInput,
        isLoading,
        setIsLoading,
        startPageOpen,
        setStartPageOpen,
        onInputSubmit: handleInputSubmit,
        searchHistory,
        setSearchHistory,
        recentResponse,
        setRecentResponse,
        handleClickHistory,
        question,
        mouseEnter,
        setMouseEnter,
        deleteHistory,
        handleConfirm,
        confirmOpen,
        setConfirmOpen,
        handleConfirmDel,
        handleCancel,
        closeSideBar,
        setCloseSideBar,
        pushPage,
        setPushPage,
        closePhoneSideBar,
        setClosePhoneSideBar,
        darkMode,
        setDarkMode,
        error,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined || context === null)
    throw new Error("PostContext was used outside of the postProvider");
  return context;
}

export { PostProvider, usePosts };
