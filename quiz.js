p1n=localStorage.getItem("name1");
p1s=0;
p2n=localStorage.getItem("name2");
p2s=0;

document.getElementById("p1n").innerHTML=p1n+" : ";
document.getElementById("p2n").innerHTML=p2n+" : ";
document.getElementById("p1s").innerHTML=p1s;
document.getElementById("p2s").innerHTML=p2s;
document.getElementById("playerQ").innerHTML="Question turn: "+p1n;
document.getElementById("playerA").innerHTML="Answer turn: "+p2n;


function send(){
    n1=Number(document.getElementById("n1").value);
    n2=Number(document.getElementById("n2").value);
    question=n1+" + "+n2;
    Qword = "<h4 id='word_display' > Q." + question + "</h4>";
    ibox = "<br> Answer: <input type='number' id='inputbox' class='form-control'>";
    cb = "<br> <br> <button class='btn btn-success' onclick='check()'>Check</button>";

    row = Qword + ibox + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("questionQ").style.display="none";
}

qT="p1"
aT="p2"

function check(){
    answer=Number(document.getElementById("inputbox").value);
    if (qT == "p1") {
        qT = "p2";
        aT = "p1";
        document.getElementById("playerQ").innerHTML = "Question turn - " + p2n;
        document.getElementById("playerA").innerHTML = "Answer turn - " + p1n;
        if (answer == (n1+n2)) {
            p2s += 1;
            document.getElementById("p2s").innerHTML = p2s;
        }

    }
    else{
        qT = "p1";
        aT = "p2";
        document.getElementById("playerQ").innerHTML = "Ouestion turn - " + p1n;
        document.getElementById("playerA").innerHTML = "Answer turn - " + p2n;
        if (answer == (n1+n2)) {
            p1s += 1;
            document.getElementById("p1s").innerHTML = p1s;
        }
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("questionQ").style.display="block";
}