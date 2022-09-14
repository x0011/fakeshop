import { useState } from "react"

export const useLocalStorage = (item:string, initState: {}[] = []): [string, (value:{})=> void] => {
    const lsItem = localStorage.getItem(item);
    const setValue = (value: {}):void => localStorage.setItem(item, JSON.stringify(value));
    if (lsItem === null) {
        localStorage.setItem(item, JSON.stringify(initState)); 
        return [lsItem!, setValue];
    }
    return [lsItem!, setValue]
}