import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 758,
    expectedReturn: 78,
    duration: 7,
  });

  const isInputValid = userInput.duration >1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserinput) => {
      return {
        ...prevUserinput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!isInputValid && <p className="center">Please Enter Valid data</p>}
      {isInputValid && <Results user={userInput}/> }
    </>
  );
}

export default App;
