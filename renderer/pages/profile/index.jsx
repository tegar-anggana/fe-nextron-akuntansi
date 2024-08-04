import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
}

// import React from "react";
// import { useSelector } from "react-redux";

// export default function index() {
//   const { userInfo } = useSelector((state) => state.auth);
//   return (
//     <div>
//       <figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
//       <span>
//         Welcome <strong>{userInfo?.firstName}!</strong> You can view this page
//         because you're logged in
//       </span>
//     </div>
//   );
// }
