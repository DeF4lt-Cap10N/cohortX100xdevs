const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "index.html"; 
}

axios.get("http://localhost:3005/profile", {
    headers: {
        Authorization: `Bearer ${token}`,
    }
})
.then(res => {
    document.getElementById("welcome").innerText = res.data;
})
.catch(err => {
    console.error(err.response?.data || "Unauthorized");
    window.location.href = "index.html"; 
});

function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
