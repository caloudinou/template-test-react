import React, { useState, useEffect } from "react";
import TimerWrap from "./TimerWrap";
import StyledButton from "./StyledButton";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const timer = useState(0);

  useEffect(
    () => {
      // setInterval
    },
    [isOn]
  );

  const onReset = () => {
    // handle reset
  };

  return (
    <TimerWrap>
      <h1>Test react</h1>
      <h2>Timer doesn't work</h2>
      Timer: {timer[1]}
      {!isOn && (
        <StyledButton type="button" onClick={() => setIsOn(true)}>
          Start
        </StyledButton>
      )}
      {isOn && (
        <StyledButton isOn type="button" onClick={() => setIsOn(false)}>
          Stop
        </StyledButton>
      )}
      <StyledButton
        isReset
        type="button"
        disabled={timer[0] = 0}
        onClick={onReset}
      >
        Reset
      </StyledButton>
    </TimerWrap>
  );
};

export default App;
