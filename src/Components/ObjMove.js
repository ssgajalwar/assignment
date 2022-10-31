import React from "react";
import "./ObjMove.css";
import Img1 from "../images/moving-div-1.png";
import Img5 from "../images/moving-div-5.png";
import Img2 from "../images/moving-div-2.png";
import Img3 from "../images/moving-div-3.png";
import Img4 from "../images/moving-div-4.png";
import button from "../images/button.png";
import "animate.css";

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

const small = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
};

const big = { ...small };

const animate = () => {
  const element = document.querySelector(".icon");
  const element_small = document.querySelector(".icon-holder");
  let x = lerp(big.x1, big.x2, 0.1);
  let y = lerp(big.y1, big.y2, 0.1);
  if (x + 40 >= window.innerWidth) x = window.innerWidth - 140;
  if (y + 40 >= window.innerHeight) y = window.innerHeight - 140;
  element.style.transform = "translate(" + x + "px," + y + "px)";
  big.x1 = x;
  big.y1 = y;

  // ---------
  let x_small = lerp(small.x1, small.x2, 0.3);
  let y_small = lerp(small.y1, small.y2, 0.3);
  element_small.style.transform =
    "translate(" + x_small + "px," + y_small + "px)";
  small.x1 = x_small;
  small.y1 = y_small;
};
setInterval(() => {
  animate();
}, 60);
document.addEventListener("mousemove", (e) => {
  big.x2 = e.clientX + 20;
  big.y2 = e.clientY + 20;
  small.x2 = e.clientX;
  small.y2 = e.clientY;
});
document.addEventListener("mousedown", (e) => {
  document.querySelector(".icon").classList.add("depressed");
});
document.addEventListener("mouseup", (e) => {
  document.querySelector(".icon").classList.remove("depressed");
});

const ObjMove = () => {
  return (
    <div className="ObjMove">
      <div>
        <section id="ipad-section">
          <div className="stick-bg">
            <div className="button-box">
              <div className="icon"></div>
              <div className="icon-holder">
                <img src={button} alt="" className="button-img" />
              </div>
              <h1
                id="text-trusted-by"
                className=" "
              >
                Trusted By
              </h1>
              <h1 className="text-thousand ">10,000+</h1>
            </div>
          </div>
          <img src={Img1} alt="img1" className="img1" />
          <img src={Img2} alt="img1" className="img2 " />
          <img src={Img3} alt="img1" className="img1 img3" />
          <img src={Img4} alt="img1" className="img2 img4" />
          <img src={Img5} alt="img1" className="img1 img5" />
        </section>
      </div>
    </div>
  );
};

// ----------------------------------

// let myDiv = document.getElementById("my-div");
// //Detect touch device
// function isTouchDevice() {
//   try {
//     //We try to create TouchEvent. It would fail for desktops and throw error
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
// const move = (e) => {
//   //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
//   try {
//     //PageX and PageY return the position of client's cursor from top left of screen
//     var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//     var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
//   } catch (e) {}
//   //set left and top of div based on mouse position
//   myDiv.style.left = x - 50 + "px";
//   myDiv.style.top = y - 50 + "px";
// };
// //For mouse
// document.addEventListener("mousemove", (e) => {
//   move(e);
// });
// //For touch
// document.addEventListener("touchmove", (e) => {
//   move(e);
// });

// ---------------------------------------------

export default ObjMove;
