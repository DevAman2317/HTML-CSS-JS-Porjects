
let rl=[{
    rollNo:11546,
    center:"R.A.College,Washim",
    Name:"Aman Kamble",
    marathi:78,
    hindi:56,
    english:90,
    percentage:80,
    Result:"You are Pass"

},
{
    rollNo:11547,
    center:"R.A.College,Washim",
    Name:"Rohan Mahindkar",
    marathi:67,
    hindi:89,
    english:90,
    percentage:80,
    Result:"You are Pass"

},
{
    rollNo:11548,
    center:"R.A.College,Washim",
    Name:"Dinesh Thorat",
    marathi:67,
    hindi:32,
    english:90,
    percentage:80,
    Result:"You are Fail"

}]


document.getElementById('btn').addEventListener('click',result)

function result(){
var res=document.getElementById('ele');
rlNum=Number(document.getElementById('rlNum').value)
if(rlNum==rl[0].rollNo){
    
   
    

    ele.innerHTML= `<h1>Your Result is ready</h1>
                    <table border='1'><tr><th>Seat No.</th><td>${rl[0].rollNo}</td></tr>
                    <tr><th>Name</th><td>${rl[0].Name}</td> </tr> 
                    
                    <tr><th>Marathi</th> <td>${rl[0].marathi}</td></tr> 
                    <tr><th>Hindi</th> <td>${rl[0].hindi}</td> </tr> 
                    <tr><th>English</th><td>${rl[0].english}</td></tr>  
                    <tr><th>percentages</th><td>${rl[0].percentage}</td><tr>
                    <tr><th>Result</th><td>${rl[0].Result}</td> </tr> `
}else if(rlNum==rl[1].rollNo){

    
    ele.innerHTML= `<h1>Your Result is ready</h1>
                    <table border='1'><tr><th>Seat No.</th><td>${rl[1].rollNo}</td></tr>
                    <tr><th>Name</th><td>${rl[1].Name}</td> </tr> 
                    
                    <tr><th>Marathi</th> <td>${rl[1].marathi}</td></tr> 
                    <tr><th>Hindi</th> <td>${rl[1].hindi}</td> </tr> 
                    <tr><th>English</th><td>${rl[1].english}</td></tr>  
                    <tr><th>percentages</th><td>${rl[1].percentage}</td><tr>
                    <tr><th>Result</th><td>${rl[1].Result}</td> </tr> `
}else if(rlNum==rl[2].rollNo){

    
    ele.innerHTML= `<h1>Your Result is ready</h1>
                    <table border='1'><tr><th>Seat No.</th><td>${rl[2].rollNo}</td></tr>
                    <tr><th>Name</th><td>${rl[2].Name}</td> </tr> 
                   
                    <tr><th>Marathi</th> <td>${rl[2].marathi}</td></tr> 
                    <tr><th>Hindi</th> <td>${rl[2].hindi}</td> </tr> 
                    <tr><th>English</th><td>${rl[2].english}</td></tr>  
                    <tr><th>percentages</th><td>${rl[2].percentage}</td><tr>
                    <tr><th>Result</th><td>${rl[2].Result}</td> </tr> `
}


else{
    ele.innerHTML=`<h1>Check Your Roll Number</h1>`
}
}


function resultbg(){
    if(rl[0,1,2].Result.innerHTML=="You are Pass"){
        rl[0,1,2].Result.style.backgroundColor='green'; 

    }else{
        rl[0,1,2].Result.style.backgroundColor='red'; 
    }
}
resultbg()