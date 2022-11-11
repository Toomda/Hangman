{/* prettier-ignore */}
const HEAD = (
  <div
    style={{
      border: "10px solid black",
      borderRadius: "100%",
      width: "50px",
      height: "50px",
      position: "absolute",
      right: -30,
      top: 50,
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: 0,
      top: 120,
      backgroundColor: "black",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: 0,
      top: 70,
      backgroundColor: "black",
      transform: "rotate(-55deg)",
      transformOrigin: "bottom",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: 0,
      top: 70,
      backgroundColor: "black",
      transform: "rotate(55deg)",
      transformOrigin: "bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: 0,
      top: 215,
      backgroundColor: "black",
      transform: "rotate(20deg)",
      transformOrigin: "top",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: 0,
      top: 215,
      backgroundColor: "black",
      transform: "rotate(-20deg)",
      transformOrigin: "top",
    }}
  />
);
const COCK = (
  <div
    style={{
      width: "5px",
      height: "50px",
      position: "absolute",
      right: 2.5,
      top: 215,
      backgroundColor: "black",
      transform: "rotate(0deg)",
      transformOrigin: "top",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG, COCK];

type DrawingProps = {
  wrongGuesses: number;
};

export function Drawing({ wrongGuesses }: DrawingProps) {
  return (
    <div className="drawingWrapper" style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, wrongGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          top: 0,
          right: 0,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "240px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}
