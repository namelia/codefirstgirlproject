function sleephours() {
    var x = document.getElementById("ageGroup").value;
    var y;
    switch (x)
    {
        case "1":
            y= "12-18 hours";
            break;
        case "2":
            y="14-15 hours";
            break;
        case "3":
            y="12-15 hours";
            break;
        case "4":
            y="11-13 hours";
            break;
        case "5":
           y="9-11 hours";
            break;
        case "6":
            y="8.5-9 hours";
            break;
        case "7":
           y="7-9 hours";
            break;
        default:
           y=" ";
            break;
    }
    document.getElementById("result").innerHTML = y;
}


function testresult()
{
    var form= document.getElementById("test");
    var count=0;
    var result;
    var name= document.getElementById("NAME").value;
    for ( var i=1;i<=8;i++) {

       myObj= document.getElementsByName(i);
       if (form[i].name==i && form[i].checked)
       {
           count++;
       }
    }
    if (count>0&& count <3)
    {
        result="Hey "+name+"! You're showing  mild symptoms of sleep deprivation";
    }
    else if ( count>=3 && count <=6)
    {
        result="Hey "+name+"!  You're showing some symptoms of sleep deprivation.You seriously need some good rest!";
    }
    else if(count>6 && count <9)
    {
        result="Hey "+name+"! You're showing severe symptoms of sleep deprivation.You are advised to seek medical assistance";
    }
    else
    {
        result="Hey "+name+"!  You have no symptoms of symptoms of sleep deprivation.Keep up your current sleeping routine!";
    }
    document.getElementById("result2").innerHTML = result;
}