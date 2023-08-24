import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  const [isCLicked, setIsCLicked] = useState(false);
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  let charPool = lowercaseChars + uppercaseChars + numberChars + specialChars;
  let randomPassword = "";

  const handleClick = (value) => {
    setIsCLicked(false);
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      randomPassword += charPool[randomIndex];
    }
    setPassword(randomPassword);
  };

  const handleCopyClick = () => {
    setIsCLicked(true);
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <>
      <div className="container-sm d-flex flex-column gap-5 pt-5 border border-light border-5 rounded-4 con ">
        <h1 className="text-center">Password Generator</h1>
        <div>
          <p className="text-center fs-4 mt-2">Input password length: </p>
          <form className="d-flex justify-content-center align-center p-2 gap-3">
            <input
              required
              type="number"
              onChange={(e) => setLength(e.target.value)}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handleClick(length)}>
              Generate!
            </button>
          </form>
        </div>
        <h2 className="text-center">Your Password goes here ⬇️</h2>
        <div className="password-con mx-auto d-flex gap-5 align-items-center">
          {password ? (
            <h3 className="bg-light py-1 px-2 rounded rounded-3 text-center text-success">
              {password}
            </h3>
          ) : (
            <h3 className="text-center text-warning">
              You haven't Generated one yet😒
            </h3>
          )}
          {password ? (
            <button className="btn btn-success " onClick={handleCopyClick}>
              {isCLicked ? "Copied!" : "Copy"}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
