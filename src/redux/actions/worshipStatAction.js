import api from "../api";
import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


function getWorshipStat(date){
    return async (dispatch) => {
        const worshipStatApi = api.get(`front/worships/univ?date=${date}`, {
            headers: {
                "Authorization": `${localStorage.getItem('token')}`,
              }
        })

        let [worshipStat] = await Promise.all([
            worshipStatApi]);
            
        dispatch({
            type:"GET_WORSHIP_STAT",
            payload: { 
                worshipStat : worshipStat.data, 
            }
        })
    };
    
}

function postNewWorshiper(data){
    return async (dispatch) => {
        console.log("체크", data)
        const postNewWorshiperApi = api.post(`front/worships/univ/addworshiper`, data, {
            headers: {
                "Authorization": `${localStorage.getItem('token')}`,
              }
        })

        let [postNewWorshiper] = await Promise.all([
            postNewWorshiperApi]);
        
        dispatch(worshipStatAction.getWorshipStat(data.date))

        dispatch({
            type:"POST_WORSHIPER",
            payload: { 
                postNewWorshiper : postNewWorshiper.data, 
            }
        })
        

    };
}

    
    function deleteWorshiper(name, group, date){
    return async (dispatch) => {
        const deleteWorshiperApi = api.delete(`front/worships/univ/deleteworshiper?name=${name}&group=${group}&date=${date}`, {
            headers: {
                "Authorization": `${localStorage.getItem('token')}`,
                }
        })

        let [deleteWorshiper] = await Promise.all([
            deleteWorshiperApi]);
        
        dispatch(worshipStatAction.getWorshipStat(date))

        dispatch({
            type:"DELETE_WORSHIPER",
            payload: { 
                deleteWorshiper : deleteWorshiper.data, 
            }
        })
    };
    }

    function setTargetDate(date){
        return async (dispatch) => {
                
            dispatch({
                type:"SET_DATE",
                payload: { 
                    targetDate : date, 
                }
            })
        };
        }
    

export const worshipStatAction = {
    getWorshipStat, postNewWorshiper, deleteWorshiper, setTargetDate
}