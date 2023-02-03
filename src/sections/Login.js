import "../css/MainPage.css";
import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginAction } from "../redux/actions/loginAction";
import { worshipStatAction } from "../redux/actions/worshipStatAction";

function Login() {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(()=> {

    }, [msg])

    const LoginFunc = (e) => {
        e.preventDefault();
        if (!id) {
            return alert("ID를 입력하세요.");
          }
          else if (!password) {
            return alert("Password를 입력하세요.");
          }
          else {
            let body = {
              id: id,
              password : password
            };
            axios.post("http://localhost:9090/api/v1/univ/login", body
            )
            .then((res) => {
              console.log(res.data);
              localStorage.setItem ("token", res.data.token);
              if(res.data.code === 200) {
                console.log("로그인");
                dispatch(loginAction.setUserInfo(res.data.id));
                setMsg("로그인 성공");
              }
              if(res.data.code === 400) {
                setMsg("ID, Password가 비어있습니다.");
              }
              if(res.data.code === 401) {
                setMsg("존재하지 않는 ID입니다.");
              }
              if(res.data.code === 402) {
                setMsg("Password가 틀립니다.");
              }
            });
          }
          setLoading(true);
    }
    
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    
    return (
        <div>
        <h1>LoginComponent</h1>
        <form onSubmit={LoginFunc}>
            <label htmlFor="id">ID : </label>
            <input type="text" id ="id" name="id" value={id} onChange={onIdHandler} />
            <br />
            <label htmlFor="password">Password : </label>
            <input type="text" value={password} onChange={onPasswordHandler}/>
            <br />
            <button type="submit">로그인</button>
            <br />
            {msg}
        </form>

        {/* {user.isLogin ? <MyPage /> : <Login/>} */}
        </div>
    )
}

export default Login