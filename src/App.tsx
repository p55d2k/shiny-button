import ShinyButton from "./components/ShinyButton";

const App = () => {
  return (
    <main className="h-screen w-full justify-center flex flex-col space-y-16 items-center">
      <div className="flex flex-col space-y-1">
        <h1 className="text-red-500 text-4xl text-center">shiny-button</h1>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=jcpLprT5F0I"
          className="text-neutral-200 hover:underline text-3xl text-center"
        >
          youtube video
        </a>
        <a
          target="_blank"
          href="https://github.com/p55d2k/shiny-button"
          className="text-neutral-200 hover:underline text-3xl text-center"
        >
          source code
        </a>
      </div>
      <ShinyButton />
    </main>
  );
};

export default App;
