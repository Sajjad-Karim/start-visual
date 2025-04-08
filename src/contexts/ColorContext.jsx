import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext({
  backgroundColor: "#1A1A1A",
  textColor: "#FFFFFF",
  updateColors: () => {},
});

export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#1A1A1A");
  const [textColor, setTextColor] = useState("#FFFFFF");

  const updateColors = (bg, text) => {
    setBackgroundColor(bg);
    setTextColor(text);
  };

  return (
    <ColorContext.Provider value={{ backgroundColor, textColor, updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};
