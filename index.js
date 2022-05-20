const timer=document.getElementById("stopwatch");
let Stopwatch=true;
let sec=0;
let min=0;
let hr=0;
function startbutton()
{
    if(Stopwatch==true)
    {
        Stopwatch=false;
        TimeCycle();
    }
}
function stopbutton()
{
    if(Stopwatch==false)
    {
        Stopwatch=true;
    }
}
function resetbutton()
{
    timer.innerHTML="00:00:00";
    Stopwatch=true;
    sec=0;
    min=0;
    hr=0;
}
function TimeCycle()
{
    if(Stopwatch==false)
    {
        sec=parseInt(sec);
        min=parseInt(min);
        hr=parseInt(hr);
        sec=sec+1;
        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
        if(min==60)
        {
            hr=hr+1;
            min=0;
            sec=0;
        }
        if(sec<10)
        {
            sec="0"+sec;

        }
        if(min<10)
        {
            min="0"+min;
        }
        if(hr<10)
        {
            hr="0"+hr;
        }
        timer.innerHTML=hr + ":" + min + ":" +sec;
        setTimeout("TimeCycle()",1000);
    }
}



