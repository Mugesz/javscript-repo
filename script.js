// document.addEventListener('DOMContentLoaded', function() {
//     const customCursorImg = document.querySelector('.custom-cursor-img');
//     const linkBlocks = document.querySelectorAll('.custom-link');

//     function moveCursor(e) {
//         // Position the image directly at the mouse pointer
//         customCursorImg.style.left = e.clientX -150 + 'px';
//         customCursorImg.style.top = e.clientY - 280 + 'px';
//     }

//     linkBlocks.forEach(linkBlock => {
//         // Show the image on hover and track cursor movement
//         linkBlock.addEventListener('mouseenter', function() {
//             customCursorImg.style.display = 'flex';
//             window.addEventListener('mousemove', moveCursor);
//         });

//         // Hide the image when not hovering
//         linkBlock.addEventListener('mouseleave', function() {
//             customCursorImg.style.display = 'none';
//             window.removeEventListener('mousemove', moveCursor);
//         });
//     });
// });

// var Webflow = Webflow || [];
// Webflow.push(function () {
//   // Fix for Safari
//   if (navigator.userAgent.includes("Safari")) {
//     document.querySelectorAll(".tab-button").forEach(
//       (t) =>
//         (t.focus = function () {
//           const x = window.scrollX,
//             y = window.scrollY;
//           const f = () => {
//             setTimeout(() => window.scrollTo(x, y), 1);
//             t.removeEventListener("focus", f);
//           };
//           t.addEventListener("focus", f);
//           HTMLElement.prototype.focus.apply(this, arguments);
//         })
//     );
//   }

//   // Start Tabs
//   var tabTimeout;
//   clearTimeout(tabTimeout);
//   tabLoop();

//   // Connect your class names to elements.
//   function tabLoop() {
//     tabTimeout = setTimeout(function () {
//       var $next = $(".tabs-menu").children(".w--current:first").next();

//       if ($next.length) {
//         $next.click(); // user click resets timeout
//       } else {
//         $(".tab-button:first").click();
//       }
//     }, 7000); // 5 Second Rotation
//   }

//   // Reset Loops
//   $(".tab-button").click(function () {
//     clearTimeout(tabTimeout);
//     tabLoop();
//   });
// });


//  // circle wobble animation
// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#f0173c",


// ];

// circles.forEach(function (circle, index) {
//   circle.x = 0;
//   circle.y = 0;
//   circle.style.backgroundColor = "#f0173c";
// });

// window.addEventListener("mousemove", function(e){
//   coords.x = e.clientX;
//   coords.y = e.clientY;
  
// });

// function animateCircles() {
  
//   let x = coords.x;
//   let y = coords.y;
  
//   circles.forEach(function (circle, index) {
//     circle.style.left = x - 12 + "px";
//     circle.style.top = y - 12 + "px";
    
//     circle.style.scale = (circles.length - index) / circles.length;
    
//     circle.x = x;
//     circle.y = y;

//     const nextCircle = circles[index + 1] || circles[0];
//     x += (nextCircle.x - x) * 0.3;
//     y += (nextCircle.y - y) * 0.3;
//   });
 
//   requestAnimationFrame(animateCircles);
// }

// animateCircles();

arr = ["x", "y", "z"]


//  const print =((val)=>{
//    console.log(val)
//  })/

arr.forEach(print)
function print(val){
  console.log(val)
}

for (i=0; i<(arr.length); i++){
   console.log(arr[i])
}

document.querySelector