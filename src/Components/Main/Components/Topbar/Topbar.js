import React from "react";
import { HiChevronDown } from "react-icons/hi";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="greetings">
        <span className="greet">Hi Lisa 👋</span>
        <span className="greet-subtext">
          You can see all the activities happening at your turbine here
        </span>
      </div>
      <div className="">
        <span className="profieSec">
          <div className="profile">
            <img
              className="profileImg"
              src="https://s3-alpha-sig.figma.com/img/c011/10b6/841874d0f6a59f4c50027f3598051fee?Expires=1645401600&Signature=foDKmrFLmTvd68SiQxAHC3U6r3pT-yrQN9ynVj3np3muNDDauIruSbEs0RhTtfH2T1WZlyrFhYDXyIpWd7Iulei1ZbFOvrtRi0A8cLTDRE1vleUwT-lOMO6bbHzTnhqPeBj~PkXa2K9JGzxL9RBTlNAA2tBTbvcV3JfgPzmYj4z6f2D6b94o-fjbEf8ew9VtBeZY8ziZXNTIV-P1Ir9W95Fpl1eiApNvAhjZteQyf1CCNZ2In2bCRjpB3L7VZ344xCXUIGYXtxhYrxiPJse47GeaBfFxMNcQ3z73~RuU0k8a1AWAFZdpjgbdiBUXpxGebA1TM-SuSnFgQt06IkPzug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          </div>
          <div className="name">Lisa Mathew</div>
          <div className="chevron">
            <HiChevronDown />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Topbar;
