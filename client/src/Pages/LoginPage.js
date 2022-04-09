import React from "react";

function LoginPage() {
  return (
    <div>
      <center>
        <h1>Remember Trip</h1>
        <form>
          <div>
            <span>ID</span>
            <input type="email" placeholder="아이디를 입력해요" />
          </div>
          <div>
            <span>PASSWORD</span>
            <input type="password" placeholder="비밀번호를 입력해요" />
          </div>
          <button className="btn btn-login" type="submit">
            Login
          </button>
        </form>
      </center>
    </div>
  );
}

export default LoginPage;
