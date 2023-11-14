import React from 'react';

const Loader = () => (
  <div  style={{display:"flex " , height:"100vh" , width:"100%" , alignItems:"center" ,justifyContent:"center"}}>
    <div className="spinner ">
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{'--delay': (index + 1) * 0.1, '--rotation': (index + 1) * 36, '--translation': 150}}></div>
      ))}
    </div>

    <style>
      {`
        .spinner {
          position: absolute;
          width: 9px;
          height: 9px;
        }

        .spinner div {
          position: absolute;
          width: 50%;
          height: 150%;
          background: green;
          transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
        }

        @keyframes spinner-fzua35 {
          0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
          }

          50% {
            transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
          }
        }
      `}
    </style>
  </div>
);

export default Loader;
