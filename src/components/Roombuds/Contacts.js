import { useState } from "react";
import Check from "../SVGs/Check";

let arr = [
  { name: "Thanh Hoan", phone_num: "0344443549", bidv_id: "02349813891" },
  { name: "Phuong Khanh", phone_num: "0376764402", bidv_id: "10923910293" },
  { name: "Hoang Khanh", phone_num: "0888305887", bidv_id: "12903102" },
  { name: "Minh Thong", phone_num: "0866955840", bidv_id: "12390129301" },
  { name: "Hoang Tu", phone_num: "0336549849", bidv_id: "12301299301290" },
  { name: "Duc Thinh", phone_num: "0356524245", bidv_id: "10239092910" },
];

export default function Contacts() {
  const [isCopied, setIsCopied] = useState("");

  async function copyToClipboard(text) {
    if ("clipboard" in navigator) {
      console.log(text.target.innerText);
      setIsCopied(text.target.innerText);
      return await navigator.clipboard.writeText(text.target.innerText);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  return (
    <>
      <h1>(Click to copy)</h1>

      {arr.map((e) => {
        return (
          <>
            <h1 className="my-[1rem] flex flex-col sm:flex-row">{e.name}</h1>

            <div className="ml-[1rem] font-light rounded-lg p-[3px] my-[1rem] flex items-center cursor-pointer">
              Phone
              <span
                className="ml-[1rem] font-light border-white border-[2px] rounded-lg p-[3px]"
                onClick={copyToClipboard}
              >
                {e.phone_num}
              </span>
              {isCopied == e.phone_num && <Check />}
            </div>

            <div className="ml-[1rem] font-light rounded-lg p-[3px] flex items-center cursor-pointer">
              BIDV
              <span
                className="ml-[1rem] font-light border-white border-[2px] rounded-lg p-[3px]"
                onClick={copyToClipboard}
              >
                {e.bidv_id}
              </span>
              {isCopied == e.bidv_id && <Check />}
            </div>
          </>
        );
      })}
    </>
  );
}
