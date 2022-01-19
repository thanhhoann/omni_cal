export default function Contacts() {
  let arr = [
    { name: "Thanh Hoan", phone_num: "0344443549" },
    { name: "Duc Thinh", phone_num: "0356524245" },
    { name: "Minh Thong", phone_num: "0866955840" },
    { name: "Hoang Tu", phone_num: "0336549849" },
    { name: "Phuong Khanh", phone_num: "0376764402" },
    { name: "Hoang Khanh", phone_num: "0888305887" },
  ];

  return (
    <>
      {arr.map((e) => {
        return (
          <h1 className="my-[1rem]">
            {e.name}
            <span className="ml-[1rem] font-light border-white border-[2px] rounded-lg p-[3px]">
              {e.phone_num}
            </span>
          </h1>
        );
      })}
    </>
  );
}
