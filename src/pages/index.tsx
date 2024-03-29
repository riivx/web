import NavBar from "@/components/NavBar";
import IntroCard from "@/components/IntroCard";
import TwitterCard from "@/components/TwitterCard";
import ToggleCard from "@/components/ToggleCard";
import { useState } from "react";

import OnlineCard from "@/components/OnlineCard";
import TimeCard from "@/components/TimeCard";
import GithubCard from "@/components/GithubCard";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
      >
        <IntroCard section={section} />

        <ToggleCard section={section} />
        <OnlineCard section={section} />
        <TwitterCard section={section} />
        <TimeCard section={section} />
        <GithubCard section={section} />
      </div>
    </div>
  );
}

export default Home;
