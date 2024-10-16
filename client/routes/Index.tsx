import DiscordLogoWhite from "../assets/discord-logo-white.svg";

function Index() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-center">
        <img
          src="https://cdn.discordapp.com/avatars/1293594514912579635/9efc3ad7b9416a89fb586a1da382d383.webp?size=512"
          className="size-40 rounded-full border-8 border-zinc-700"
        />
        <h1 className="text-3xl font-bold text-white inline-flex items-center">
          <span className="bg-green-400 h-fit rounded-full p-1.5 mr-2 translate-y-0.5"></span>
          Ingens#9193
        </h1>
        <a
          href="/login"
          className="inline-flex items-center gap-2 w-fit py-2 text-lg mt-2 px-4 rounded-md bg-indigo-800 text-white"
        >
          Login with
          <img src={DiscordLogoWhite} alt="Discord" className="h-5" />
        </a>
      </div>
    </>
  );
}

export default Index;
