// import React from "react";
// import SignUp from "../Pages/SignUp";
// import PersonalInfo from "../Pages/PersonalInfo";
// import Address from "../Pages/Address";
// import Button from "../components/Button";

// function Forms() {
//   return (
//     <>
//       <form className="form-container">
//         <SignUp />
//         <PersonalInfo />
//         <Address />
//         <div className="mt-5">
//           <Button
//             text={"Next"}
//             className="btn"
//             onClick={(e) => {
//               const onClick = "click";
//               return onClick();
//             }}
//           />
//         </div>
//       </form>
//     </>
//   );
// }

// export default Forms;

//2ND TRYOUT FORM

// import React, { useState } from "react";
// import SignUp from "../Pages/SignUp";
// import PersonalInfo from "../Pages/PersonalInfo";
// import Address from "../Pages/Address";
// import Button from "../components/Button";
// import Welcome from "../Pages/Welcome";

// function Forms() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNextClick = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrevClick = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   return (
//     <main
//       className="container shadow p-5 mt-5 rounded-3"
//       style={{ maxWidth: 500 }}
//     >
//       <form className="form-container">
//         {currentStep === 1 && <SignUp />}
//         {currentStep === 2 && <PersonalInfo />}
//         {currentStep === 3 && <Address />}
//         {currentStep === 4 && <Welcome />}

//         <div className="mt-4"></div>
//         <div className="mt-4">
//           <button text={"Prev"} onClick={handlePrevClick}>
//             Prev
//           </button>

//           <Button text={"Next"} onClick={handleNextClick} />
//         </div>
//       </form>
//     </main>
//   );
// }

// export default Forms;

//3RD CODE

import React, { useState } from "react";
import SignUp from "../Pages/SignUp";
import PersonalInfo from "../Pages/PersonalInfo";
import Address from "../Pages/Address";
import Button from "../components/Button";
import Welcome from "../Pages/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

function Forms() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <main
      className="container shadow p-5 mt-5 rounded-3"
      style={{ maxWidth: 500 }}
    >
      <form className="form-container">
        {currentStep === 1 && <SignUp />}
        {currentStep === 2 && <PersonalInfo />}
        {currentStep === 3 && <Address />}
        {currentStep === 4 && <Welcome />}

        <div className="mt-4"></div>
        <div className="mt-4 m-3 d-flex justify-content-between">
          <div className="">
            {currentStep > 1 && (
              <Button text={"Prev"} onClick={handlePrevClick} />
            )}
          </div>

          <div>
            {currentStep < 4 && (
              <Button text={"Next"} onClick={handleNextClick} />
            )}
          </div>

          <div>
            {currentStep > 3 && <Button text={"Done"} className="bg-success" />}
          </div>
        </div>
      </form>
    </main>
  );
}

export default Forms;
