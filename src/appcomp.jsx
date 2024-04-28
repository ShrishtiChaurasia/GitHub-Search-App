import React from "react";
import { useState } from "react";
import Search from "./components/search/search";
import Preview from "./components/preview/preview";

function Appcomp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  return (
    <div className="flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg">
      <h2 className="text-3xl font-extrabold text-white">
        GitHub-User-Search-App
      </h2>
      <div>
        <Search setIsloading={setIsloading} setData={setData} />
      </div>
      <div>
        <Preview
          avatarUrl={data.avatar_url}
          blog={data.blog}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split("T")[0]}
          html_url={data.html_url}
        />
      </div>
    </div>
  );
}

export default Appcomp;
