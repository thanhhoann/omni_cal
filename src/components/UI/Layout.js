export default function Layout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
        rel="stylesheet"
      />

      <div className="w-[100vw] h-[100vh] bg-[#000000] pt-[1rem] font-['Fira_Sans']">
        {children}
      </div>
    </>
  );
}