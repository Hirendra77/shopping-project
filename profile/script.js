// Write your script here
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let oldpass = document.querySelector('.old-password');
let pass = document.querySelector('.password');
let conpass = document.querySelector('.confirm-password');
let update = document.querySelector('.saveinfo-btn');
let logout = document.querySelector('.logout-btn');

let data = [];
let data_show = JSON.parse(localStorage.getItem("Data"));

const loadData = () => {
    let name =  data_show[0].name.split(" ");
    fname.value = name[0];
    lname.value = name[1];

    email.value = data_show[0].email;
    console.log(name,email);

}

loadData();

update.addEventListener('click',(e)=>{
    e.preventDefault();

    let data_show = JSON.parse(localStorage.getItem("Data"));
    console.log(data_show);
    for(let data=0;data<data_show.length;data++){
        if(data_show[data].password === oldpass.value){
            if(pass.value === conpass.value){
                alert("Password change successfull...");
                data_show[data].password = pass.value;
                console.log("update password");

                localStorage.setItem("Data",JSON.stringify(data_show));
                clear();
            }
            else{
                alert("Password and Confirm Password are not match");
            }
        }
        else{
            alert("Old Password is not match");
        }
    }
   
    
});

logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "../login.html";
});

// empty input box 
function clear(){
    oldpass.value = "";
    pass.value = "";
    conpass.value = "";
}