export default function Help({ text }) {
  let heading = "",
    body = "";

  if (text == "help") {
    heading = "Hi there !";
    body = "";
  }

  return (
    <>
      <div className="text-white text-[2rem] opacity-[50%] ml-[1rem] mt-[0.5rem]">
        <h1>{heading}</h1>
        <h2>{body}</h2>
      </div>
    </>
  );
}
