$.get("components/home/home.html", function(res){
    $('#menu').html(res);
    
})

let URL = document.createElement('base')
URL.href= document.location.href       
document.head.appendChild(URL)
