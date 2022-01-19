import HousingContract from "./Roombuds/HousingContract";
import Contacts from "./Roombuds/Contacts";
import Savings from "./Roombuds/Savings";

export default function Roombuds({ text }) {
  let body = "";
  let recommendations = "";

  if (text == "roombuds") {
    recommendations = (
      <>
        <h1>papers</h1>
        <h1>contacts</h1>
        <h1>savings</h1>
      </>
    );
  }

  return (
    <>
      <div className="text-white text-[1rem] sm:text-[2rem] opacity-[50%] ml-[1rem] mt-[0.5rem]">
        {recommendations}
        {text.includes("roombuds papers") && <HousingContract />}
        {text.includes("roombuds contacts") && <Contacts />}
        {text.includes("roombuds savings") && <Savings />}
      </div>
    </>
  );
}
