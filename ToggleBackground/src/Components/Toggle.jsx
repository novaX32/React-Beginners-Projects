import { useState } from "react";
import "../Styles.css";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => setIsDark(!isDark);

  const backgroundColor = isDark ? "#1b1b1b" : "white";
  const textColor = isDark ? "white" : "#1b1b1b";
  const buttonColor = isDark ? "#1b1b1b" : "white";

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        {isDark ? "Dark Theme" : "Light Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome to A <br />
          Real World.......
        </h1>
      </section>
    </div>
  );
};

export default Toggle;
