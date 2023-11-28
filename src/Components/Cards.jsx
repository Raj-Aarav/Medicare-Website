import React from "react";
import ReactDOM from "react-dom";

function Cards(props) {
  return (
    <div>
      <div className="Medicines">
        <h2>{props.title}</h2>
        <img src={props.img} alt="Meidcines image" />
        <p>{props.info}</p>
      </div>
    </div>
  );
}

export default Cards;
// (
//   <div>
//     <figure className="Medicine">
//       <App
//         name="Medicines"
//         img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_54xG_gV7gwrI2L_jsPexqzB28z76PjRYzQ&usqp=CAU"
//         info="You are so much more than just a patient. We have designed our patient rooms with an aim to take care of medical needs, maximise comfort, and accommodate personal requirements for recovery."
//       />
//       <figcaption>Medicines</figcaption>
//     </figure>

//     <figure className="Doctor">
//       <App
//         name="Our Doctors"
//         info="Care has been taken to ensure patient-centric design choices, including providing patients a visual connection to the outside environment by bringing natural light and viewing windows into every patient space possible."
//       />
//     </figure>
//   </div>,
//   document.getElementById("root")
// );
