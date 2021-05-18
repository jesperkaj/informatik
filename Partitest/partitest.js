const sendknap = document.getElementById("send");
sendknap.addEventListener("click", svar);

const spørgsmålform = document.getElementById("spørgsmål");

function svar() {
    const svar1 = spørgsmålform.elements["spørgsmål1"].value;
    const svar2 = spørgsmålform.elements["spørgsmål2"].value;
    console.log(svar1);
    console.log(svar2);
}