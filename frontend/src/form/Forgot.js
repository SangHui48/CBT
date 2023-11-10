/* eslint-disable default-case */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Forgot(props) {
  const [forgotForm, setForgotForm] = useState({
    email: "",
    new_password: "",
  });

  return (
    <React.Fragment>
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
         비밀번호를 잊어버리셨나요?
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          비밀번호 변경
        </p>
      </div>
      <form >
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="새로운 비밀번호"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
          >
            비밀번호 업데이트
          </button>
          <p className="mt-4 text-sm">
            이미 계정이 있으신가요?{" "}
            <span className="underline cursor-pointer">로그인</span>
          </p>
        </div>
      </form>
    </React.Fragment>
  );
}