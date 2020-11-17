$('button.blueText').click(function(){
    $(".blueText").removeClass("blueTextChoose");
    $(this).toggleClass("blueTextChoose");
});

$('button.yellowText').click(function(){
    $(".yellowText").removeClass("yellowTextChoose");
    $(this).toggleClass("yellowTextChoose");
});

$('button.blueTextImg').click(function(){
    $(".blueTextImg").removeClass("blueTextImgChoose");
    $(this).toggleClass("blueTextImgChoose");
});

$('button.yellowTextImg').click(function(){
    $(".yellowTextImg").removeClass("yellowTextImgChoose");
    $(this).toggleClass("yellowTextImgChoose");
});