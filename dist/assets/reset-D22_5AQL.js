import{A as m}from"./main-CGyi1V_7.js";const r=document.getElementById("resetpasswordform"),o=document.getElementById("msg");r.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("resetemail").value.trim(),{resetPassword:s}=m();s(t,o)});