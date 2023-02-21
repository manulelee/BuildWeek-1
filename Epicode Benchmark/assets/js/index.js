let btn = document.getElementById('WPbtn');
let checked = false;
let btnProceed = document.getElementById("pulsante")

btn.addEventListener('click,', function() {
    btnProceed.disabled=true;
    checked=true;
})

function check(){
    
    
    if (checked == false){
        
    btnProceed.disabled = true;
}else{
    btnProceed.disabled = false;

}}

check();
const fatto=function(event){
   
    if(event.target.className=="fatto")
    {
        event.target.classList.remove('fatto');
    }else{
          event.target.classList.add('fatto');
    }
}