var count = 5;
var redirect = "https://akshunn-sharma.github.io/srm-wol/";
function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "This page will redirect in "+count+" seconds.";
        setTimeout("countDown()", 1000);
}else{
        window.location.href = redirect;
    }
}
countDown();
