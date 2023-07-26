const axios = require("axios") 


function getexpenses(){
   const expenses = axios({
        method: "GET",
        url: "http://localhost:3001/expenses"
    })
    console.log(expenses)
}

const addbutton = document.getElementById("addexpense")

addbutton.addEventListener("click", ()=>getexpenses())