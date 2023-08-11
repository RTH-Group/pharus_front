import React from "react";
import {axiosPrivate} from '../../services/axios'
import {mySelf} from '../../services/userService'
import {getCookie} from './cookies'

export const handleSessionLogin = async (setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const token = getCookie("token")
    if (!token) return
    setIsAuthenticated(true)
    axiosPrivate.defaults.headers.common['Authorization'] = "Bearer " + token.accessToken
    const user = await mySelf()
    return user;


  } catch (error) {
    console.error(error);
  }
}