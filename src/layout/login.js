import { useDispatch } from "react-redux";
import { React } from 'react';
import { login } from "../Redux/Reducer/userReduce";

const Login = () =>{
  const dispatch = useDispatch();
  const handelLogin = () => {
    const token = 'hardCodedToken';
    const userInfo = {name : "john Doe"};

    dispatch(login({token, userInfo}));
  };


  return (
    <>
      <h1>Login</h1>
      <button onClick={handelLogin}>Connect</button>
    </>
  )
}
  
export default Login;