window.onload = function(){ 
    document.getElementById('card1').onmouseover = function(){
        document.getElementById('cover1').style.display = "block";
    }
    document.getElementById('card1').onmouseout = function(){
        document.getElementById('cover1').style.display = "none";
    }
    document.getElementById('card2').onmouseover = function(){
        document.getElementById('cover2').style.display = "block";
    }
    document.getElementById('card2').onmouseout = function(){
        document.getElementById('cover2').style.display = "none";
    }
};