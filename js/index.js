$('button.blueText').click(function(){
    $(".blueText").removeClass("blueTextChoose");
    $(this).toggleClass("blueTextChoose");
});

$('button.yellowText').click(function(){
    $(".yellowText").removeClass("yellowTextChoose");
    $(this).toggleClass("yellowTextChoose");
});

$('button.blueImg').click(function(){
    $(".blueImg").removeClass("blueImgChoose");
    $(this).toggleClass("blueImgChoose");
});

$('button.yellowImg').click(function(){
    $(".yellowImg").removeClass("yellowImgChoose");
    $(this).toggleClass("yellowImgChoose");
});