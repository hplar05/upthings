import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:h-[100vh]">
      <div className="flex flex-col lg:flex-row bg-[#2b2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 space-y-5">
          <h1 className="text-5xl font-bold text-white ">
            Welcome to <span className="text-blue-600">UP</span>THINGS. <br />
            <br />
            Store anything for you and for everyone. Your ultimate storage
            solution.
          </h1>

          <p className="pb-20 text-white">
            Store anything you need, from personal belongings to shared
            items,all in one convenient place. Our platform is designed for
            everyone, making storage accessible and hassle-free for all. Say
            goodbye to clutter and hello to organization with UpThings.
          </p>

          <Link
            href="/dashboard"
            className="flex bg-blue-500 p-5 w-fit rounded-sm shadow-md text-white"
          >
            Get started
            <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
