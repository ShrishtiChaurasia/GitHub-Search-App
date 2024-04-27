// import React from "react";

// function Preview({
//   avtarUrl,
//   name,
//   login,
//   public_repos,
//   followers,
//   following,
//   location,
//   blog,
//   twitter,
//   email,
//   isLoading,
//   date,
//   bio,
// }) {
//   return (
//     <div className="bg-dark-gray p-5 flex text-white justify-center rounded-md">
//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col gap-10 items-center">
//           <div>
//             <img className="w-28 rounded-full" src={avtarUrl} alt="" />
//           </div>
//           <div>
//             <h1>{name}</h1>
//             <h3 className="text-dark-blue"> {login}</h3>
//             <p>joined at {date}</p>
//           </div>
//           <div>
//             <p className="max-w-xs">{bio}</p>
//           </div>
//           <div className="flex bg-dark-bg p-4 rounded-md justify-evenly">
//             <div>
//               <h3>Repos</h3>
//               <span>{public_repos}</span>
//             </div>
//             <div>
//               <h3>following</h3>
//               <span>{following}</span>
//             </div>
//             <div>
//               <h3>followers</h3>
//               <span>{followers}</span>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <div className="flex justify-evenly">
//               <div className="flex gap-5 item-center">
//                 <span>
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     height="1em"
//                     width="1em"
//                   >
//                     <path d="M18 4.48a8.45 8.45 0 00-12 12l5.27 5.28a1 1 0 001.42 0L18 16.43a8.45 8.45 0 000-11.95zM16.57 15L12 19.59 7.43 15a6.46 6.46 0 119.14 0zM9 7.41a4.32 4.32 0 000 6.1 4.31 4.31 0 007.36-3 4.24 4.24 0 00-1.26-3.05A4.3 4.3 0 009 7.41zm4.69 4.68a2.33 2.33 0 11.67-1.63 2.33 2.33 0 01-.72 1.63z" />
//                   </svg>
//                 </span>
//                 <span>{location ? location : "Not found"}</span>
//               </div>
//               <div className="flex gap-5 item-center">
//                 <span>
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     height="1em"
//                     width="1em"
//                   >
//                     <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
//                   </svg>
//                 </span>
//                 <span>{twitter ? twitter : "Not found"}</span>
//               </div>
//             </div>

//             <div className="flex justify-evenly">
//               <div className="flex gap-5 item-center">
//                 <span>
//                   <svg
//                     viewBox="0 0 1024 1024"
//                     fill="currentColor"
//                     height="1em"
//                     width="1em"
//                   >
//                     <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
//                   </svg>
//                 </span>
//                 <span>{blog ? blog : "Not found"}</span>
//               </div>
//               <div className="flex gap-5 item-center">
//                 <span>
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     height="1em"
//                     width="1em"
//                   >
//                     <path d="M18.84 7h-2.62L10.5 4 4 7.41V17a2 2 0 01-2-2V7.17c0-.67.28-1.11.81-1.36L10.5 2l7.55 3.81c.45.28.73.69.79 1.19M7 8h13a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2m13 3.67V10l-6.5 3.31L7 10v1.67L13.5 15l6.5-3.33z" />
//                   </svg>
//                 </span>
//                 <span>{email ? email : "Not Found"}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Preview;
import React from "react";

function Preview({
  avatarUrl,
  name,
  login,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter,
  email,
  isLoading,
  bio,
  joinedAt,
}) {
  return (
    <div className="bg-dark-gray p-5 flex text-white justify-center rounded-md ">
      {!isLoading ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 items-center">
            <div>
              <img className="w-28 rounded-full" src={avatarUrl} alt="image" />
            </div>
            <div>
              <h1>{name}</h1>
              <h3 className="text-dark-blue">{login}</h3>
              <p>Joined at {joinedAt}</p>
            </div>
          </div>
          <div>
            <p className="max-w-xs">{bio}</p>
          </div>
          <div className="flex  bg-dark-bg p-3 gap-10 rounded-md ">
            <div>
              <h3>Repos</h3>
              <span>{public_repos}</span>
            </div>
            <div>
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>{following}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center ">
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 500 1000"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                  </svg>
                </span>
                <span>{location ? location : "Not Found"}</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  {" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </span>
                <span>{twitter ? twitter : "Not Found"}</span>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center ">
                <span>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                  </svg>
                </span>
                <a href={blog}>
                  <span>{blog ? blog : "Not Found"}</span>
                </a>
                {/* <span>{blog ? blog : "Not Found"}</span> */}
              </div>
              <div className="flex gap-5 items-center ">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M18 8l-8 5-8-5V6l8 5 8-5m0-2H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m6 3h-2v6h2V7m0 8h-2v2h2v-2z" />
                  </svg>
                </span>
                <span>{email ? email : "Not Found"}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-full h-4 w-4 border animate-spin border-dark-blue border-t-transparent"></div>
      )}
    </div>
  );
}

export default Preview;
