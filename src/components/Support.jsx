import React from "react";
import support from "../assets/support-team.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

export const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div>
        <img src={support} alt="/"/>
      </div>
      <div>
        <div>
            <h2>Support</h2>
            <h3>We have the right team</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div>
            <div>
                <div>
                    <PhoneIcon />
                    <h3>Sales</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div>
                    Contact Us <ArrowSmRightIcon />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
