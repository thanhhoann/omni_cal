export default function Layout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;1,200&display=swap"
        rel="stylesheet"
      />

      <div className="w-screen h-auto bg-[#000000] pt-[1rem] font-['Fira_Sans'] z-10">
        {children}
      </div>
      <div className="z-0 w-screen h-screen bg-black"></div>
    </>
  );
}
