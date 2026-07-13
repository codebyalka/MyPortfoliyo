*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:#0f172a;
    color:white;
}

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:rgba(15,23,42,.8);
    backdrop-filter:blur(15px);
    z-index:1000;
}

.logo{
    font-size:30px;
    font-weight:700;
    color:#38bdf8;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:30px;
    transition:.3s;
}

nav a:hover{
    color:#38bdf8;
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:120px 8%;
}

.left{
    width:50%;
}

.left h3{
    font-size:25px;
    color:#38bdf8;
}

.left h1{
    font-size:60px;
    margin:10px 0;
}

.left h2{
    font-size:28px;
    color:#cbd5e1;
}

.left p{
    margin:25px 0;
    line-height:1.8;
    color:#94a3b8;
}

.buttons{
    display:flex;
    gap:20px;
}

.btn,
.btn2{
    padding:14px 30px;
    border-radius:10px;
    text-decoration:none;
    transition:.3s;
    font-weight:600;
}

.btn{
    background:#38bdf8;
    color:black;
}

.btn:hover{
    transform:translateY(-5px);
}

.btn2{
    border:2px solid #38bdf8;
    color:#38bdf8;
}

.btn2:hover{
    background:#38bdf8;
    color:black;
}

.right img{
    width:380px;
    border-radius:50%;
    border:5px solid #38bdf8;
    box-shadow:0 0 40px #38bdf8;
}

section{
    padding:100px 8%;
}

section h1{
    text-align:center;
    font-size:40px;
    margin-bottom:50px;
    color:#38bdf8;
}

#about p{
    max-width:800px;
    margin:auto;
    text-align:center;
    line-height:2;
    color:#cbd5e1;
}

.skills{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:25px;
}

.card{
    padding:30px;
    background:#1e293b;
    border-radius:15px;
    text-align:center;
    transition:.3s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-10px);
    background:#38bdf8;
    color:black;
}

.project-box{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.project{
    background:#1e293b;
    padding:30px;
    border-radius:15px;
    transition:.4s;
}

.project:hover{
    transform:translateY(-10px);
    box-shadow:0 0 30px #38bdf8;
}

#contact{
    text-align:center;
}

#contact p{
    margin:15px;
    font-size:18px;
}

@media(max-width:900px){

.hero{
flex-direction:column;
text-align:center;
}

.left{
width:100%;
}

.right img{
width:260px;
margin-top:40px;
}

nav{
display:none;
}

.left h1{
font-size:45px;
}

.left h2{
font-size:22px;
}

}