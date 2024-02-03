import { saveData } from "./localStorageHandler";

export function lightDarkToggle() {
        const body = document.body;
        body.classList.toggle("dark-body");

        const header = document.getElementsByClassName("header");
        for (let i = 0; i < header.length; i++) {
            header[i].classList.toggle("header-dark");
        }

        const container = document.getElementsByClassName("container");
        for (let i = 0; i < container.length; i++) {
            container[i].classList.toggle("container-dark");
        }

        const checkmark = document.getElementsByClassName("checkmark");
        for (let i = 0; i < checkmark.length; i++) {
            checkmark[i].classList.toggle("checkmark-dark");
        }

        const switcher = document.querySelector('.modeswitch');
        switcher.classList.toggle("modeswitch-dark");
        
        const todoheader = document.getElementsByClassName("todoheader");
        for (let i = 0; i < todoheader.length; i++) {
            todoheader[i].classList.toggle("todoheader-dark");
        }

        const todoinfo = document.getElementsByClassName("todoinfo");
        for (let i = 0; i < todoinfo.length; i++) {
            todoinfo[i].classList.toggle("todoinfo-dark");
        }

        const todobox = document.getElementsByClassName("todobox");
        for (let i = 0; i < todobox.length; i++) {
            todobox[i].classList.toggle("todobox-dark");
        }

        const todofooter = document.getElementsByClassName("todofooter");
        for (let i = 0; i < todofooter.length; i++) {
            todofooter[i].classList.toggle("todofooter-dark");
        }     
        saveData();
}