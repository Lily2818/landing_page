document.addEventListener("DOMContentLoaded", function(){
    const section4 = document.querySelector(".section4");
    const section4_btn = document.querySelector("#section4-btn");
        section4_btn.addEventListener("click", function(){
            if(section4.style.backgroundColor === "dodgerblue"){
                purple_color(section4);
            }
            else if(section4.style.backgroundColor === "red"){
                blue_color(section4);
            }
            else{
                red_color(section4);
            }
        })
    const section1_btn = document.querySelector("#section1-button");
    const pop_up=document.querySelector(".modal");
        section1_btn.addEventListener("click", function(){
            pop_up.style.display = "block";
        })
    const signup = document.querySelector("#signup_btn");
        signup.addEventListener("click", function (){
            const message=document.querySelector("#message");
            message.innerHTML="Sign Up Successful";
        })

})


function purple_color(section4){
    //const section4 = document.querySelector(".section4");
    section4.style.backgroundColor = "#8C30F5";
}
function blue_color(section4){
    //const section4 = document.querySelector(".section4");
    section4.style.backgroundColor = "dodgerblue";
}
function red_color(section4){
    //const section4 = document.querySelector(".section4");
    section4.style.backgroundColor = "red";
}