function calculateAge(){
    const dateOfBirth=document.getElementById("date_birth").value;
   
    const givenDate=document.getElementById("given_date").value;
   
   
   
   let startDate= new Date(dateOfBirth);
   let endDate= new Date(givenDate);
   
   let stdobYear= startDate.getFullYear();
   let stdobMonth= startDate.getMonth()+1;
   let stdobDate= startDate.getDate();
   
   let givenYear = endDate.getFullYear();
   let givenMonth= endDate.getMonth()+1;
   let givenDate1 = endDate.getDate() ;
   
   leapTest(givenYear);
   
   if(
       stdobYear >givenYear || (stdobMonth > givenMonth  && stdobYear === givenYear) || (stdobDate > givenDate1  &&stdobMonth === givenMonth && stdobYear === givenYear) 
   ){
     alert("Invalid Date")
     return;
   }
   let diffYear=  givenYear-stdobYear;
   
   let diffMonth;
   if(givenMonth >= stdobMonth){
       diffMonth = givenMonth - stdobMonth;
   
   }else{
       diffYear--;
       diffMonth = 12 + givenMonth - stdobMonth;
   }
   
   if( givenDate1 >= stdobDate){
       diffDate = givenDate - stdobDate;
   }else{
       diffMonth--;
       let days = months[givenMonth -2 ];
       diffDate = days + givenDate1 - stdobDate;
       if( diffMonth < 0){
           diffMonth = 11;
           diffYear--;
       }
   }
   showResult(diffYear, diffMonth , diffMonth);
   }
   const showResult= (totalYears, totalMonths, totalDays)=>{
       document.getElementById("years").textContent = `${totalYears} Year(s)`;
       document.getElementById("months").textContent = `${totalMonths} Month(s)`;
       document.getElementById("days").textContent = `${totalDays} Day(s)`;
       document.getElementById("output_box").style.display='flex';
       document.getElementById("msg").style.display="block";
   }
    function leapTest(year){
        if((year % 4==0) && (year %100!=0)|| (year %400==0)){
            months[1]=29;
            console.log("Leap Year")
    }else{
        months[1]=28;
        console.log("Normal year")
    }

   }