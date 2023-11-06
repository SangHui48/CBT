import React from 'react'

export default function Register() {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          계정 생성
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          CBT에 오신걸 환영합니다!
        </p>
      </div>
      <form>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="이름"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="아이디"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
          <input
            type="number"
            placeholder="핸드폰번호"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="block py-3 px-4 w-full text-xl text-white bg-[#38bdf8] rounded-lg hover:bg-[#0284c7] active:bg-[#38bdf8] outline-none"
          >
            계정생성
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
