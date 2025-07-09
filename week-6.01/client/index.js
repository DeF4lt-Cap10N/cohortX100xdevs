

const formsubmit = document.querySelector(".signupForm");
formsubmit.addEventListener("submit", userSignUp);


const loginformsubmit = document.querySelector(".loginupForm");
loginformsubmit.addEventListener("submit", userloginUp);



function userSignUp(e) {
    e.preventDefault();

    const userName = document.querySelector("#username").value;
    const userPass = document.querySelector("#userpass").value;

    if (userName.length < 4 || userPass.length < 4) return;

    axios.post("http://localhost:3005/signUp", {
        userName,
        userPass
    })
        .then((res) =>
            console.log(res.data))
        .catch((err) =>
            console.log(`${err} server issue`))
}

function userloginUp(e) {
    e.preventDefault();



    const userName = document.querySelector("#username").value;
    const userPass = document.querySelector("#userpass").value;

    if (userName.length < 4 || userPass.length < 4) return;

    axios.post("http://localhost:3005/signIn", {
        userName,
        userPass
    })
        .then((res) => {
            const token = res.data.user.token;
            localStorage.setItem("token", token),
            console.log("signIN successfully!!")
            window.location.href = "profile.html";
        })
        .catch((err) =>
            console.log(`${err} server issue`))
}
