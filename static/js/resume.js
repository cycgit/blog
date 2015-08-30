var sHeight = $('.a').height();
var sLength = $('.section').length;
var sIndex = 0;
var sScroll = false;

window.onmousewheel = function(e){
    if(!sScroll){
        if(e.wheelDelta>0){
            //上一页
            if(sIndex == 0){return; }
            sIndex--;
            scrollTo(sIndex);
        }else{
            //下一页
            if(sIndex == sLength-1){return;}
            sIndex++;
            scrollTo(sIndex);
        }
    }
}
function scrollTo(i){
    sScroll = true;
    $('.main').css({top: -i*sHeight});
    setTimeout(function(){sScroll = false}, 700);
}

var hamm = new Hammer(document.querySelector('.main-wrap'));
hamm.get('swipe').set({ direction: Hammer.DIRECTION_ALL});
hamm.on('swipedown', function(){
        if(!sScroll){
                //上一页
                if(sIndex == 0){return; }
                sIndex--;
                scrollTo(sIndex);
        }

});
hamm.on('swipeup', function(){
        if(!sScroll){
                //下一页
                if(sIndex == sLength-1){return;}
                sIndex++;
                scrollTo(sIndex);
        }        

});
        