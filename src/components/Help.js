export default function Help({ text }) {
  let body = [
    { content: "Hi there ! This is OMNINUM, your friendly calculator." },
    { content: "I can solve equations, mathematics operations." },
    { content: "I can convert currencies too." },
    { content: "Also, there are some secret entrances for you to explore :)" },
    { content: "Hope you have a good time here !" },
  ];

  return (
    <>
      {text == "help" && (
        <div className="text-white text-[1.2rem] sm:text-[2rem] opacity-[50%] ml-[1rem] mt-[0.5rem]">
          {body.map((e) => (
            <h2 className="my-[1rem]">{e.content}</h2>
          ))}
        </div>
      )}
    </>
  );
}
