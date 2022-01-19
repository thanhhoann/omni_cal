export default function Operators({ text }) {
  const calculator = () => {
    if (text.includes("&") || text.includes("|") || text.includes("^")) {
      let a = [],
        b = [];

      for (let i = 0; i < text.indexOf("&"); i++) {
        if (text[i] == " ") continue;
        else a.push(Number(text[i]));
      }
      for (let i = text.indexOf("&") + 1; i < text.length; i++) {
        if (text[i] == " ") continue;
        else b.push(Number(text[i]));
      }

      let num_a = a.join(""),
        num_b = b.join("");

      return num_a & num_b;
    }
  };

  return (
    <>
      <div className="mt-[300px] ml-[100px]">{calculator()}</div>
    </>
  );
}
