function login(){
    name1=document.getElementById("N1").value;
    name2=document.getElementById("N2").value;
    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    window.location="quiz.html"
}