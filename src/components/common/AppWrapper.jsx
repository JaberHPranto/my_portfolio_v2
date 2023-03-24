import React from "react";
import useThemeStore from "../../store";

const AppWrapper = (OriginalComponent, idName) =>
  function HOC() {
    const theme = useThemeStore((state) => state.theme);

    return (
      <div
        className="min-h-screen"
        style={{
          backgroundColor: theme.background,
          color: theme.headingColor,
        }}
        id={idName}
      >
        <OriginalComponent />
      </div>
    );
  };

export default AppWrapper;
