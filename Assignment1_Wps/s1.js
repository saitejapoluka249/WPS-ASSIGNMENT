var votes=0;
var mi=0;
var csk=0;
var dc=0;
var rcb=0;
var ni=0;
var ma=0
var ri=0;
var sai=0;
var flag=1;
function s() {  
    
        document.getElementById("result").innerHTML = ""; 
        var ele = document.getElementsByTagName("input"); 
        for(i = 0; i < ele.length; i++) { if(votes=="30")
        {   document.getElementsByTagName("h4")[1].innerHTML="!!!SORRY YOU CANNOT SUBMIT NOW!!!";
            break;}
            if(ele[i].type=="radio") { 
                if(ele[i].checked) 
                {
                    document.getElementById("result").innerHTML+=ele[i].value+"<br>";
                    ele[i].checked=false;
                    flag=0;
                    if(ele[i].value=="Mumbai Indians")
                    mi++;
                    else if(ele[i].value=="CHENNAI SUPER KINGS")
                    csk++;
                    else if(ele[i].value=="DELHI CAPITALS")
                    dc++;
                    else if(ele[i].value=="Royal Challengers Bangalore")
                    rcb++;
                    else if(ele[i].value=="Rohit Sharma")
                    ni++;
                    else if(ele[i].value=="Virat Kohli")
                    ma++;
                    else if(ele[i].value=="Shreyas Iyer")
                    ri++;
                    else if(ele[i].value=="Mahendra Singh Dhoni")
                    sai++;


                }
            
            } 
        } 
        if(flag==0)
        {votes++;
        document.getElementById("v").innerHTML="No of votes done so far: "+votes;
        flag=1;
        }
        if(votes==30)
        {   var x=document.getElementById("hid");
        x.style.display="none"; 
        document.getElementsByTagName("h4")[2].innerHTML="GRAPH OF VOTED RESULTS";
        document.getElementById("a").innerHTML="MI: "+Math.round(((mi*100)/30)).toFixed(1)+"%";
        document.getElementById("a").setAttribute("class","html");
        var m=document.getElementById("a");
        m.style.width=((mi*100)/30)+"%";
        document.getElementById("b").innerHTML="CSK: "+Math.round(((csk*100)/30)).toFixed(1)+"%";
        document.getElementById("b").setAttribute("class","css");
        var m=document.getElementById("b");
        m.style.width=(csk*100)/30+"%";
        document.getElementById("c").innerHTML="DC: "+Math.round(((dc*100)/30)).toFixed(1)+"%";
        document.getElementById("c").setAttribute("class","php");
        var m=document.getElementById("c");
        m.style.width=(dc*100)/30+"%";
        document.getElementById("d").innerHTML="RCB:"+Math.round(((rcb*100)/30)).toFixed(1)+"%";
        document.getElementById("d").setAttribute("class","js");
        var m=document.getElementById("d");
        m.style.width=(rcb*100)/30+"%";
        document.getElementById("e").innerHTML="Rohit: "+Math.round(((ni*100)/30)).toFixed(1)+"%";
        document.getElementById("e").setAttribute("class","h");
        var m=document.getElementById("e");
        m.style.width=(ni*100)/30+"%";
        document.getElementById("f").innerHTML="Iyer: "+Math.round(((ri*100)/30)).toFixed(1)+"%";
        document.getElementById("f").setAttribute("class","i");
        var m=document.getElementById("f");
        m.style.width=(ri*100)/30+"%";
        document.getElementById("g").innerHTML="Kohli: "+Math.round(((ma*100)/30)).toFixed(1)+"%";
        document.getElementById("g").setAttribute("class","j");
        var m=document.getElementById("g");
        m.style.width=(ma*100)/30+"%";
        document.getElementById("h").innerHTML="Dhoni: "+Math.round(((sai*100)/30)).toFixed(1)+"%";
        document.getElementById("h").setAttribute("class","k");
        var m=document.getElementById("h");
        m.style.width=(sai*100)/30+"%"; 
        document.getElementsByTagName("h4")[3].innerHTML="VOTED RESULTS";
        document.getElementById("vote1").innerHTML="Numbers of Votes to Mumbai Indians: "+mi;
        document.getElementById("vote2").innerHTML="Numbers of Votes to Chennai Super Kings: "+csk;
        document.getElementById("vote3").innerHTML="Numbers of Votes to Delhi Capitals: "+dc;
        document.getElementById("vote4").innerHTML="Numbers of Votes to Royal Challengers Bangalore: "+rcb;
        document.getElementById("vote5").innerHTML="Numbers of Votes to Rohit Sharma: "+ni;
        document.getElementById("vote6").innerHTML="Numbers of Votes to Virat Kohli: "+ri;
        document.getElementById("vote7").innerHTML="Numbers of Votes to Shreyas Iyer: "+ma;
        document.getElementById("vote8").innerHTML="Numbers of Votes to Mahendra Singh Dhoni: "+sai;

        


    }


    } 

