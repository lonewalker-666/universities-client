import React, { useRef, useState } from "react";
const styles: any = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const OtpVerify = () => {
  const [pin, setPin] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value: any, index: any) => {
    // Update the PIN array with the new digit
    const newPin = [...pin];
    newPin[index] = value.slice(-1); // Keep only the last character
    setPin(newPin);

    // Move to the next input box if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Log the pin value
    console.log(newPin.join(""));
  };

  const handleBackspace = (event: any, index: any) => {
    if (event.key === "Backspace" && index > 0 && !pin[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleComplete = () => {
    if (pin.every((digit) => digit !== "")) {
      console.log("PIN Complete:", pin.join(""));
    }
  };
  return (
    <div style={styles}>
      <h2>Test PIN Input ✨</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          background: "red",
        }}
      >
        {pin.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            onBlur={handleComplete}
            ref={(el) => (inputRefs.current[index] = el)}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              borderColor: "red",
              outline: "none",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpVerify;
