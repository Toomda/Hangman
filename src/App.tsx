import { Drawing } from "./Components/Drawing";
import { Keyboard } from "./Components/Keyboard";
import { Words } from "./Components/Words";
import wordsList from "./assets/wordList.json";
import { useEffect, useState } from "react";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordsList.at(Math.floor(Math.random() * wordsList.length)) || "";
  });
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  const incorrectLetters = lettersGuessed.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 7;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => lettersGuessed.includes(letter));

  const restartGame = () => {
    console.log("reload");
    window.location.reload();
  };

  const addLetterToGuessedLetters = (letter: string) => {
    if (lettersGuessed.includes(letter)) return;
    setLettersGuessed((oldGuessedLetters) => [
      ...oldGuessedLetters,
      letter.toLocaleLowerCase(),
    ]);
  };

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if ((isLoser || isWinner) && e.key.toLocaleLowerCase() === "enter") {
        restartGame();
      } else if (
        !isLoser &&
        !isWinner &&
        new RegExp("^[a-zA-Z]$").test(e.key)
      ) {
        addLetterToGuessedLetters(e.key);
      }
    };
    document.addEventListener("keydown", handlePress);

    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [lettersGuessed]);

  return (
    <div
      className="mainWrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "800px",
        gap: "2rem",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && `You've Won :) ! The word was: ${wordToGuess}`}
        {isLoser && `You've Lost :( ! The word was: ${wordToGuess}`}
        {isLoser || isWinner ? (
          <div>
            <button
              style={{
                height: "50px",
                width: "100px",
                fontSize: 22,
                fontFamily: "sans-serif",
                backgroundColor: "aqua",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: 30,
              }}
              onClick={restartGame}
            >
              Restart
            </button>
          </div>
        ) : null}
      </div>
      <Drawing wrongGuesses={incorrectLetters.length}></Drawing>
      <Words
        wordToGuess={wordToGuess}
        lettersGuessed={lettersGuessed}
        isLoser={isLoser}
      ></Words>
      <Keyboard
        guessedLetters={lettersGuessed}
        incorrectLetters={incorrectLetters}
        addLetterToGuessedLetter={addLetterToGuessedLetters}
        gameEnded={isLoser || isWinner}
      ></Keyboard>
    </div>
  );
}

export default App;
