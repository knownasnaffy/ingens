import { ArrowLeft, User } from "lucide-react";
import DiscordWhiteLogo from "../assets/discord-logo-white.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const authorized = false;
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 border-zinc-700 border-2 bg-zinc-800 rounded-2xl min-w-72 max-w-96 flex flex-col items-center gap-3">
          <User className="bg-zinc-900 border-2 border-zinc-700 stroke-zinc-100  size-32 p-5 rounded-full" />
          {authorized && (
            <h2 className="text-2xl font-semibold">Welcome back, Naffy!</h2>
          )}
          <a
            href="/login/discord"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 inline-flex w-full mt-4 justify-center items-center gap-2 bg-indigo-700 rounded-md hover:bg-indigo-800 transition-all"
          >
            Authenticate using{" "}
            <img src={DiscordWhiteLogo} alt="Discord" className="h-5" />
          </a>
          <Link
            to="/"
            className="py-2 px-4 inline-flex w-full justify-center items-center gap-2 hover:bg-zinc-100/10 rounded-md transition-all"
          >
            <ArrowLeft className="size-5" /> Back home
          </Link>
          <p className="text-zinc-500 italic text-sm text-center w-full">Note: Only the server admins can access the bot dashboard</p>
        </div>
      </div>
    </>
  );
};

export default Login;
