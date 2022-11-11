import React from "react";
import styles from "./Keyboard.module.css";

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  guessedLetters: string[];
  incorrectLetters: string[];
  addLetterToGuessedLetter(letter: string): void;
  gameEnded: boolean;
};

export function Keyboard({
  guessedLetters,
  incorrectLetters,
  addLetterToGuessedLetter,
  gameEnded,
}: KeyboardProps) {
  const onButtonClick = (e: any) => {
    e.preventDefault();
    addLetterToGuessedLetter(e.target.innerHTML);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        marginTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      {ALPHABET.map((key) => {
        var wrongKey =
          incorrectLetters.includes(key) && guessedLetters.includes(key);
        var correctKey =
          !incorrectLetters.includes(key) && guessedLetters.includes(key);

        return (
          <button
            className={
              guessedLetters.includes(key) ? styles.btn : styles.btnInactive
            }
            disabled={guessedLetters.includes(key) || gameEnded}
            style={{
              backgroundColor: wrongKey ? "red" : correctKey ? "lime" : "",
              color: wrongKey ? "white" : correctKey ? "black" : "",
              cursor:
                guessedLetters.includes(key) || gameEnded
                  ? "default"
                  : "pointer",
            }}
            onClick={onButtonClick}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
