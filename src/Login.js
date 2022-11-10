import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a9bee67-1b86-42ba-893f-8a8c5a3e1733/d8wpo2o-c62ef7c1-9ec5-43d6-b328-659d5f4f7866.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhOWJlZTY3LTFiODYtNDJiYS04OTNmLThhOGM1YTNlMTczM1wvZDh3cG8yby1jNjJlZjdjMS05ZWM1LTQzZDYtYjMyOC02NTlkNWY0Zjc4NjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5HM5mrE2AgSxyTWke0BTrIVO_2LOndPDxmggHatYi_I"
        alt=""
      />
      <a href={accessUrl}>LOGIN</a>
    </div>
  );
}

export default Login;


