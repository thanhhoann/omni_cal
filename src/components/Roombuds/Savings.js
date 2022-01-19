export default function Savings() {
  let travel = "";

  let arr = [
    { name: "Trip", pocket: "123.000" },
    { name: "Party", pocket: "456.000" },
    { name: "Households", pocket: "789.000" },
  ];

  travel = "123.000";

  return (
    <>
      <div>
        {arr.map((e) => {
          return (
            <h1 className="mb-[2rem] mt-[1rem]">
              <span className="font-light border-[2px] border-white p-[10px] rounded-lg mr-[1rem]">
                {e.name}
              </span>
              {e.pocket}
            </h1>
          );
        })}
      </div>
    </>
  );
}
