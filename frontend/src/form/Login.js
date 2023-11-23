import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function Login(props) {

  const [loginForm, setLoginform] = useState({
    username: "",
    password: "",
  });

  const onChangeForm = (label, event) => {
    switch (label) {
      case "username":
        setLoginform({ ...loginForm, username: event.target.value });
        break;
      case "password":
        setLoginform({ ...loginForm, password: event.target.value });
        break;
    }
  };
  return (
    <React.Fragment>
        <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          CBT
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          수능 문제풀이 시스템
        </p>
      </div>
      <form>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("username", event);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            onChange={(event) => {
              onChangeForm("username", event);
            }}
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="block py-3 px-4 w-full text-xl text-white bg-[#38bdf8] rounded-lg hover:bg-[#0284c7] active:bg-[#38bdf8] outline-none"
          >
            로그인
          </button>
          <p className="mt-4 text-sm mb-2">
            <span className='mr-2'>계정이 없으신가요?{" "}</span>
            <Link
              to="/?register"
              onClick={() => {
                props.setPage("register");
              }}
            >
              <span className="underline cursor-pointer">회원가입</span>
            </Link>{" "}
            or{" "}
            <Link
              to="/?forgot"
              onClick={() => {
                props.setPage("forgot");
              }}
            >
              <span className="underline cursor-pointer">비밀번호 찾기</span>
            </Link>
          </p>
        </div>
      </form>
    </React.Fragment>
  )
}
