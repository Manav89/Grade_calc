function ans()
{
    let a = parseFloat(document.getElementById('m1').value);
    let b = parseFloat(document.getElementById('m2').value);
    let c = parseFloat(document.getElementById('m3').value);
    let d = parseFloat(document.getElementById('m4').value);

    let sum = (a+b+c+d);
    document.getElementById('o1').innerHTML = sum;

    let per = ((sum*100)/400);
    document.getElementById('o2').innerHTML = per;

    if(per > 90)
    {
        document.getElementById('o3').innerHTML = "a";
    }
    else if(per > 80 && per <= 90)
    {
        document.getElementById('o3').innerHTML = "b";
    }
    else if(per > 70 && per <= 80)
    {
        document.getElementById('o3').innerHTML = "c";
    }
    else if(per > 60 && per <= 70)
    {
        document.getElementById('o3').innerHTML = "d";
    }
    else if(per > 50 && per <= 40)
    {
        document.getElementById('o3').innerHTML = "e";
    }
    else if(per > 40 && per <= 30)
    {
        document.getElementById('o3').innerHTML = "f";
    }
    else if(per > 30 && per <= 20)
    {
        document.getElementById('o3').innerHTML = "g";
    }
    else if(per > 20 && per <= 10)
    {
        document.getElementById('o3').innerHTML = "h";
    }
    else
    {
        document.getElementById('o3').innerHTML = "i";
    }

    if(per > 33)
    {
        document.getElementById('o4').innerHTML = "passed";
    }  
    else
    {
        document.getElementById('o4').innerHTML = "failed";
    }

}