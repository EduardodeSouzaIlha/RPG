
$('span:last').click(()=>{
    console.log("The best game for you")
   
    $.get("ajax.html", function(res){
        $('#container').html(res).css("display","flex").css("flex-direction","column");
    })
})

$('span:first').click(()=>{
 $('p').hide(5000).show(5000).fadeOut(5000).css("color","red")
})