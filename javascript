// Smart Gym Camera + Machine Dashboard

document.body.innerHTML = `
<div class="app">
    <div class="sidebar">
        <h2>GYM AI</h2>
        <button onclick="showCamera()">Camera</button>
        <button onclick="showMachines()">Machines</button>
    </div>

    <div class="main">
        <div class="topbar">Smart Gym System</div>
        <div id="content" class="content"></div>
    </div>
</div>
`;

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.background = "#0f0f0f";
document.body.style.color = "white";

const style = document.createElement("style");
style.innerHTML = `
.app{
    display:flex;
    height:100vh;
}
.sidebar{
    width:220px;
    background:#1a1a1a;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:15px;
}
.sidebar h2{
    color:#00ff99;
}
.sidebar button{
    padding:12px;
    border:none;
    border-radius:10px;
    background:#222;
    color:white;
    cursor:pointer;
}
.sidebar button:hover{
    background:#00ff99;
    color:black;
}
.main{
    flex:1;
}
.topbar{
    padding:20px;
    background:#111;
    font-size:24px;
    font-weight:bold;
}
.content{
    padding:20px;
}
.card{
    background:#1a1a1a;
    padding:20px;
    border-radius:20px;
    box-shadow:0 0 15px rgba(0,255,153,0.2);
}
.camera{
    height:300px;
    background:black;
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#666;
    font-size:22px;
}
.machine{
    padding:12px;
    background:#222;
    margin-top:10px;
    border-radius:12px;
}
`;
document.head.appendChild(style);

function showCamera(){
    document.getElementById("content").innerHTML = `
        <div class="card">
            <h2>Live Camera</h2>
            <div class="camera">Camera Feed</div>
        </div>
    `;
}

function showMachines(){
    document.getElementById("content").innerHTML = `
        <div class="card">
            <h2>Machine Status</h2>
            <div class="machine">Treadmill: Active</div>
            <div class="machine">Bench Press: Available</div>
            <div class="machine">Bike: In Use</div>
            <div class="machine">Calories Today: 1240</div>
        </div>
    `;
}

showCamera();
