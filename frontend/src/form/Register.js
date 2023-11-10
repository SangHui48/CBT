import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePickerWidth.css";

export default function Register() {
  const options = [
    { value: "", label: "성별을 선택하세요" },
    { value: "MALE", label: "남성" },
    { value: "FEMALE", label: "여성" },
  ];

  // Register Form
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    birth: "",
    sex: "",
    profile: "",
  });

  //    default value datepicker
  const [birthDate, setBirthDate] = useState(null);


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
          {/* 버그 노란띠 생성이 안됨. 이거 해결해야한다. 어떻게 할지 고민해보기 */}
          <div className="customDatePickerWidth">

          </div>
          <DatePicker
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
            dateFormat="dd-MM-yyyy"
            placeholderText="Birth date"
          />
          {/* <div className="relative block text-sm py-3 px-4 rounded-lg w-full border focus-within:ring focus-within:ring-yellow-400">
            <DatePicker
              popperClassName="w-full"
              className="w-full focus:outline-none"
              dateFormat="dd-MM-yyyy"
              placeholderText="생년월일"
            />
          </div> */}
          <select
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400">
              {options.map((data) => {
              if (data.value === "") {
                return (
                  <option key={data.label} value={data.value} disabled>
                    {data.label}
                  </option>
                );
              } else {
                return (
                  <option key={data.label} value={data.value}>
                    {data.label}
                  </option>
                );
              }
            })}
          </select>
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
