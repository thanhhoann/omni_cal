import CloudDownload from "../SVGs/CloudDownload";

export default function HousingContract() {
  let arr = [
    { name: "Housing Contract", link: "hauoens" },
    { name: "Wifi", link: "hosanh" },
  ];

  return (
    <>
      {arr.map((e) => {
        return (
          <a
            target="_blank"
            href={e.link}
            className="flex items-center my-[1rem]"
          >
            <CloudDownload />
            {e.name}
          </a>
        );
      })}
    </>
  );
}
