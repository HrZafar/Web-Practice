var operator="";
function setOperator(clicked_id) {
    operator=clicked_id;
    document.getElementById("operator").value=document.getElementById(clicked_id).value;
}
function calculate(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var answer=5;
    switch(operator){
        case '1':
            answer=num1+num2;
            break;
        case '2':
            answer=num1-num2;
            break;
        case '3':
            answer=num1*num2;
            break;
        case '4':
            answer=num1/num2;
            break;
    }
    document.getElementById("res").value=answer;
}