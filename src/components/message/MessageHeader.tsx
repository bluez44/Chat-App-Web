import { Info } from "lucide-react";

function MessageHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-slate-50 w-14 h-14 flex items-center justify-center">
          <img src="/vite.svg" alt="user avatar" className="rounded-full" />
        </div>
        <div className="text-white">
          <h1 className="text-xl">Username</h1>
          <p className="text-md text-slate-400">Active - 1 hour ago</p>
        </div>
      </div>

      <Info
        className="text-purple-500 hover:text-purple-700 hover:cursor-pointer duration-150"
        size={30}
      />
    </div>
  );
}

export default MessageHeader;
