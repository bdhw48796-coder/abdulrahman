let userName = document.querySelector("#name");
let userAge = document.querySelector("#age");
let userJob = document.querySelector("#job");
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener(`click`, function () {
    if (userName.value === "" || userAge.value === "" || userJob.value === "") {
    alert("Please fill all fields");
}else {
    console.log(`name : ${userName.value}`);
    console.log(`age : ${userAge.value}`);
    console.log(`job : ${userJob.value}`);
}
if (userAge.value < 18) {
    alert("You are under age");
} else {
    alert("Registration Completed");
}
});