const { useState, useEffect, useRef } = React;

const generateOtp = () => {
  const num = Math.floor(Math.random() * 1000000);
  return num.toString();
};

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    if (secondsLeft === 0) {
      setIsActive(false);
      return;
    }

    const timerId = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [isActive, secondsLeft]);

  const handleGenerateOtp = () => {
    setOtp(generateOtp());
    setSecondsLeft(5);
    setIsActive(true);
  };

  const renderTimerMessage = () => {
    if (!otp) return "";
    if (secondsLeft > 0) return `Expires in: ${secondsLeft} seconds`;
    return "OTP expired. Click the button to generate a new OTP.";
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {renderTimerMessage()}
      </p>
      <button
        id="generate-otp-button"
        onClick={handleGenerateOtp}
        disabled={isActive}
      >
        Generate OTP
      </button>
    </div>
  );
};