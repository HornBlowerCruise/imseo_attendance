// import "./App.css";
import "../css/Table.css"
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components'

function Table() {
  const { worshipStat } = useSelector((state) => state.worshipStat);
  const targetDate = useSelector((state)=> state.worshipStat.targetDate);
  const group27 = worshipStat.group27;
  const group26 = worshipStat.group26;
  const group25 = worshipStat.group25;
  const group24 = worshipStat.group24;
  const group23 = worshipStat.group23;
  const group22 = worshipStat.group22;
  const under21 = worshipStat.under21;
  const [maxLen, setMaxLen] = useState("10")
  const [group27Len, setGroup27Len] = useState(0)
  const [group26Len, setGroup26Len] = useState(0)
  const [group25Len, setGroup25Len] = useState(0) 
  const [group24Len, setGroup24Len] = useState(0)
  const [group23Len, setGroup23Len] = useState(0)
  const [group22Len, setGroup22Len] = useState(0)
  const [under21Len, setUnder21Len] = useState(0)
  const [group27On, setGroup27On] = useState(0)
  const [group26On, setGroup26On] = useState(0)
  const [group25On, setGroup25On] = useState(0) 
  const [group24On, setGroup24On] = useState(0)
  const [group23On, setGroup23On] = useState(0)
  const [group22On, setGroup22On] = useState(0)
  const [under21On, setUnder21On] = useState(0)
  const temp = ["", "", "", "", "", "", "", ""];
  
  console.log(group27Len, "잘나옴?")

  console.log(maxLen, "길이")

  console.log(worshipStat, '??')
  console.log(targetDate, 'tar?')
  const obj = {
    header: ["구분", "27기", "26기", "25기", "24기", "23기", "22기"],
  };

  useEffect(()=> {
    setMaxLen(worshipStat.length+1)
    setGroup27Len(worshipStat.filter(item => item.group27!=="").length);
    setGroup26Len(worshipStat.filter(item => item.group26!=="").length);
    setGroup25Len(worshipStat.filter(item => item.group25!=="").length);
    setGroup24Len(worshipStat.filter(item => item.group24!=="").length);
    setGroup23Len(worshipStat.filter(item => item.group23!=="").length);    
    setGroup22Len(worshipStat.filter(item => item.group22!=="").length);
    setUnder21Len(worshipStat.filter(item => item.under21!=="").length);
    setGroup27On(worshipStat.filter(item => item.group27State==="MANUEL").length);
    setGroup26On(worshipStat.filter(item => item.group26State==="MANUEL").length);
    setGroup25On(worshipStat.filter(item => item.group25State==="MANUEL").length);
    setGroup24On(worshipStat.filter(item => item.group24State==="MANUEL").length);
    setGroup23On(worshipStat.filter(item => item.group23State==="MANUEL").length);
    setGroup22On(worshipStat.filter(item => item.group22State==="MANUEL").length);
    setUnder21On(worshipStat.filter(item => item.under21NameState==="MANUEL").length);

    console.log(group27Len, "잘나옴?")
}, [worshipStat])

  return (
    <a>
    <table className="t7">
      <thead>
        <tr className="t1"><td colSpan="9">{targetDate} 대학국 예배 참석 명단</td></tr>
        <tr className="t2">
          {obj.header.map((item) => {
            return <th className="t5">{item}</th>;
          })}
          <th colSpan="2">21기 이상</th>
        </tr>
      </thead>
      <tbody>
        <tr className="t3"><td rowSpan={maxLen+1}>명단</td></tr>
        <tr className={worshipStat.length!==0 ? 'hidden' : ''}>
            {temp.map((item) => {
              return <td>{item}</td>
            })}
        </tr>
        {worshipStat.map((item) => {
          return (
            <tr>
              <td className={item.group27State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group27}</td>
              <td className={item.group26State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group26}</td>
              <td className={item.group25State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group25}</td>
              <td className={item.group24State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group24}</td>
              <td className={item.group23State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group23}</td>
              <td className={item.group22State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group22}</td>
              <td className={item.under21NameState == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.under21Name}</td>
              <td>{item.under21Group}</td>

            </tr>
          );
        })}
        
      </tbody>
      <tbody className="t7">
        <tr className="t3"><td rowSpan={maxLen+1}>멘토</td></tr>
        <tr className={worshipStat.length!==0 ? 'hidden' : ''}>
            {temp.map((item) => {
              return <td>{item}</td>
            })}
        </tr>
        {worshipStat.map((item) => {
          return (
            <tr>
              <td className={item.group27State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group27}</td>
              <td className={item.group26State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group26}</td>
              <td className={item.group25State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group25}</td>
              <td className={item.group24State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group24}</td>
              <td className={item.group23State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group23}</td>
              <td className={item.group22State == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.group22}</td>
              <td className={item.under21NameState == "MANUEL" ? 'onlineColor' : 'offlineColor'}>{item.under21Name}</td>
              <td>{item.under21Group}</td>

            </tr>
          );
        })}
        
      </tbody>
      <tbody className="onlineColor">
        <tr ><td rowSpan="2"><b>온라인</b></td></tr>
        <td >{group27On}</td>
        <td >{group26On}</td>
        <td >{group25On}</td>
        <td >{group24On}</td>
        <td >{group23On}</td>
        <td >{group22On}</td>
        <td >{under21On}</td>
        <td className="t8"><b>{group27On+group26On+group25On+group24On+group23On+group22On+under21On}</b></td>
      </tbody>
      <tbody>
        <tr ><td rowSpan="2"><b>오프라인</b></td></tr>
        <td >{group27Len-group27On}</td>
        <td >{group26Len-group26On}</td>
        <td >{group25Len-group25On}</td>
        <td >{group24Len-group24On}</td>
        <td >{group23Len-group23On}</td>
        <td >{group22Len-group22On}</td>
        <td >{under21Len-under21On}</td>
        <td className="t8"><b>{group27Len-group27On+group26Len-group26On+group25Len-group25On+group24Len-group24On+group23Len-group23On+group22Len-group22On+under21Len-under21On}</b></td>
      </tbody>
      <tbody className="t6">
        <tr ><td rowSpan="2"><b>총계</b></td></tr>
        <td >{group27Len}</td>
        <td >{group26Len}</td>
        <td >{group25Len}</td>
        <td >{group24Len}</td>
        <td >{group23Len}</td>
        <td >{group22Len}</td>
        <td >{under21Len}</td>
        <td className="t8"><b>{group27Len+group26Len+group25Len+group24Len+group23Len+group22Len+under21Len}</b></td>
      </tbody>
    </table>
    </a>
  );
}

export default Table;