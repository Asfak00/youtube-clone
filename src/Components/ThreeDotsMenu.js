import React from "react";

import { HiOutlineScissors } from "react-icons/hi";
import { BiListPlus } from "react-icons/bi";
import { TbFlag } from "react-icons/tb";
import { CgTranscript } from "react-icons/cg";

function ThreeDotsMenu() {
  return (
    <div className="hidden_menu_three_dots">
      <p>
        <HiOutlineScissors size={21} />
        <span>Clip</span>
      </p>
      <p>
        <BiListPlus size={21} />
        <span>Save</span>
      </p>
      <p>
        <TbFlag size={21} />
        <span>Report</span>
      </p>
      <p>
        <CgTranscript size={21} />
        <span>Show transcript</span>
      </p>
    </div>
  );
}

export default ThreeDotsMenu;
