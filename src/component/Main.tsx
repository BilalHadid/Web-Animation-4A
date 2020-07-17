import React from "react";
import "./webAnimate.scss";

import useWebAnimations from "@wellyshen/use-web-animations";

export const Main = () => {
  const { ref, getAnimation } = useWebAnimations<HTMLDivElement>({
    autoPlay: true,
    keyframes: { sceneryFrames: ["translateX(100%)", "translateX(-100%)"] },
    timing: {
      duration: 500,
      iterations: Infinity,
      fill: "forwards",
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  var background1 = document.getElementById("background1");
  var background2 = document.getElementById("background2");

  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_andalice" className="target">
          <img
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt="Alice and the Red Queen running to stay in place."
          />
        </div>
      </div>

      <div className="scenery" id="foreground1">
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="foreground2">
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          alt="  "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="background1">
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="background2">
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          alt=" "
        />
      </div>
    </div>
  );
};
