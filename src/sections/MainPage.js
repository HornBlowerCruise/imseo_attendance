import "../css/MainPage.css";
import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginAction } from "../redux/actions/loginAction";
import { worshipStatAction } from "../redux/actions/worshipStatAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "./Table";
import moment from 'moment';

const MainPage = (props) => {
    
    const user = useSelector((state) => state.userId.userId);
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [postDate, setPostDate] = useState("");
    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [deleteName, setDeleteName] = useState("")
    const [deleteGroup, setDeleteGroup] = useState("")
    const [selectedRole, setSelectedRole] = useState("default")
    const [selectedPlace, setSelectedPlace] = useState("default")
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    const LogoutFunc = () => {
      console.log('로그아웃');
      dispatch(loginAction.setUserInfo(null));
      localStorage.removeItem('token');
    }

    const updateDateAsync = (e) => {
        setStartDate(e);
      }

      const addWorshiper = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("이름을 입력하세요.");
          }
          else if (!group) {
            return alert("기수를 입력하세요.");
          }
          else if (selectedPlace==="default") {
            return alert("장소를 선택하세요.");
          }
          else if (selectedRole==="default") {
            return alert("직분을 선택하세요.");
          }
          else {
              let worshiperData = {
                  name : name, group : group, role : selectedRole, 
                  place : selectedPlace, date : postDate
              }
              console.log(worshiperData, "data")
                dispatch(worshipStatAction.postNewWorshiper(worshiperData))
              setName("");
              setGroup("");
              setSelectedPlace("장소선택")
              setSelectedRole("직분선택")
            };
          }
        
          const deleteWorshiper = (e) => {
            e.preventDefault();
            if (!deleteName) {
                return alert("이름을 입력하세요.");
              }
              else if (!deleteGroup) {
                return alert("기수를 입력하세요.");
              }
              else {
                    dispatch(worshipStatAction.deleteWorshiper(
                        deleteName, deleteGroup, postDate))
                };
              }
        
        // 예배자 수기추가 코드 
        const onNameHandler = (event) => {
            setName(event.currentTarget.value);
            console.log(name, "이름?")
        }
        const onGroupHandler = (event) => {
            setGroup(event.currentTarget.value);
        }

        // 예배자 수기추가 코드 
        const onDeleteNameHandler = (event) => {
            setDeleteName(event.currentTarget.value);
        }
        const onDeleteGroupHandler = (event) => {
            setDeleteGroup(event.currentTarget.value);
        }

        
        
        // onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
        const handleRoleCheck = e => {
        setSelectedRole(e.target.value);
        console.log(selectedRole, "체크2")
        };
        
        // onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
        const handleOnOffCheck = e => {
        setSelectedPlace(e.target.value);
        console.log(selectedPlace)
        };

        // onChange 이벤트가 발생한 target을 받아와 value값이 할당해준다.
        const queryFunc = () => {
          dispatch(worshipStatAction.getWorshipStat(postDate)); 
          dispatch(worshipStatAction.setTargetDate(moment(startDate).format('YYYY.MM.DD').substring(2)))
          };

        useEffect(()=> {
            setPostDate(moment(startDate).format('YYYY-MM-DD'))
            
        }, [startDate])

    return (
        <div>
        <div className="containerHG">
  <header >
  
  </header>
  <section className="content">
      <nav >
      </nav>
      <aside>
      </aside>
      <main className='mainpageMain'>
      <div className="userInfo">
        <span>관리자님, 안녕하세요!</span>
        <br></br>
        <button className="inlineButton btnDesign" onClick={() => LogoutFunc()}>로그아웃</button>
        </div>
      <Table/>
        <br></br>
            <span className="borderlessTable2">
            <tr >
        <td className="borderlessTable"><DatePicker selected={startDate} onChange={updateDateAsync} /></td>
        <td className="borderlessTable"><button className="inlineButton btnDesign" onClick={queryFunc} >조회</button></td>
        </tr>
        </span>
        
        <br></br><br></br><br></br><br></br>
        <div className="container2">
            <div>
        {showAddModal ? 
        <button className="btnDesign" onClick={() => setShowAddModal(false)}>닫기</button>:
        <button className="inlineButton btnDesign" style={{float:'left'}} onClick={() => setShowAddModal(true)}>참석자 추가</button>
        }
        <br></br>
        
        {showAddModal && (
        <div className="addModal">
        <form onSubmit={addWorshiper}>
            <label htmlFor="name">이름 : </label>
            <input type="text" id ="name" name="name" value={name} onChange={onNameHandler} />
            <br />
            <label htmlFor="group">기수 : </label>
            <input type="text" value={group} onChange={onGroupHandler}/>    
            <br />
            <select value={selectedPlace} onChange={handleOnOffCheck}>
            <option value="default">장소선택</option>
            <option value="online">온라인</option>
    		<option value="offline">오프라인</option>
       		</select>
           <select value={selectedRole} onChange={handleRoleCheck}>
           <option value="default">역할선택</option>   
            <option value="remnant">렘넌트</option>
    		<option value="mentor">멘토</option>
   		</select>
           <br></br><a>날짜 : {postDate}</a>
           <br />
        <button className="btnDesign" type="submit">추가</button>
        </form>
        </div>
        )}
        </div>
        <div>
        

        {showDeleteModal ? 
        <button className="btnDesign" onClick={() => setShowDeleteModal(false)}>닫기</button>:
        <button className="inlineButton btnDesign" style={{float:'left'}} onClick={() => setShowDeleteModal(true)}>참석자 삭제</button>
        }
      {showDeleteModal && (
        <div className="deleteModal" style={{ position: "relative"}}>
          <form onSubmit={deleteWorshiper}>
            <label htmlFor="deleteName">이름 : </label>
            <input type="text" id ="deleteName" deleteName="deleteName" value={deleteName} onChange={onDeleteNameHandler} />
            <br />
            <label htmlFor="deleteGroup">기수 : </label>
            <input type="text" value={deleteGroup} onChange={onDeleteGroupHandler}/>    
            <br></br><a>날짜 : {postDate}</a>
            <br />
           <br />
        <button className="btnDesign" type="submit">삭제</button>
        </form>
        </div>
      )}
      </div>
      </div>
      </main>
      <aside>
      </aside>
      <nav >
      </nav>
  </section>
  <footer>

  </footer>
</div>
</div>
    )
    }

export default MainPage;

