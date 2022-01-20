import CloudDownload from "../SVGs/CloudDownload";

export default function Papers() {
  let arr = [
    {
      name: "Housing Contract",
      link: "https://cdn.discordapp.com/attachments/929546384414220331/933519811693146162/H_Thue_BM_A.21.13.docx",
    },
    {
      name: "Wifi",
      link: "https://cdn.discordapp.com/attachments/929546384414220331/933519811693146162/H_Thue_BM_A.21.13.docx",
    },
  ];

  return (
    <>
      {arr.map((e) => {
        return (
          <a href={e.link} className="flex items-center my-[1rem]">
            <CloudDownload />
            {e.name}
          </a>
        );
      })}
    </>
  );
}
