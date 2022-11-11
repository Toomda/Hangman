type wordProps = {
  wordToGuess: string;
  lettersGuessed: string[];
  isLoser: boolean;
};

export function Words({ wordToGuess, lettersGuessed, isLoser }: wordProps) {
  return (
    <div className="wordsWrapper" style={{ display: "flex", gap: 20 }}>
      {wordToGuess.split("").map((char) => {
        return (
          <>
            <div
              style={{
                borderBottom: "5px solid black",
                fontSize: 50,
                fontWeight: "bold",
                fontFamily: "sans-serif",
                width: "50px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  height: 10,
                  visibility:
                    lettersGuessed.includes(char) || isLoser
                      ? "visible"
                      : "hidden",
                  color: lettersGuessed.includes(char) ? "" : "red",
                }}
              >
                {char.toLocaleUpperCase()}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
