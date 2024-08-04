import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
}

// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../../features/auth/authActions";
// import Error from "../../components/Error";
// import Spinner from "../../components/Spinner";

// const LoginScreen = () => {
//   const { loading, userInfo, error } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const { register, handleSubmit } = useForm();

//   // const navigate = useNavigate();
//   const router = useRouter();

//   // redirect authenticated user to profile screen
//   useEffect(() => {
//     if (userInfo) {
//       router.push("/user-profile");
//     }
//   }, [router.push, userInfo]);

//   const submitForm = (data) => {
//     dispatch(userLogin(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       {error && <Error>{error}</Error>}
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           className="form-input"
//           {...register("email")}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-input"
//           {...register("password")}
//           required
//         />
//       </div>
//       <button type="submit" className="button" disabled={loading}>
//         {loading ? <Spinner /> : "Login"}
//       </button>
//     </form>
//   );
// };

// export default LoginScreen;
