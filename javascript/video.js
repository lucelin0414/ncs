//vegas 적용
$('.imgslide').vegas({
    slides: [
        {video: {
                src: [
                    '/resources/videos/steakcooking.mp4'
                ],
                loop: true,
                mute: true
            }
        }
    ]
});



//bxslider 적용
$(function(){
    $('.slide_gallery').bxSlider({
        auto:true,  //자동으로 애니메이션 시작
        autoControls:true,   //시작 및 중지 버튼 표시
        speed:1000,   //애니메이션 전환 속도 설정(1000 = 1000ms = 1s = 1초)
        pause:3000,   //애니메이션 유지 시간(3000 = 3000ms = 3s = 3초)
        stopAutoOnClick:true,  //이전(<)또는 다음(>) 버튼을 누르면 슬라이드가 정지됨
        pager:true    //pager Default 기본값(pager:false 페이지 표시 안함)
    });
});





//메뉴클릭
jQuery(document).ready(function(){
    //.navi의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        // $(this) : 현재 선택된 태그(요소)
        //find('.submenu') : 선택된 태그의 자식 태그중 .submenu와 일치하는 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식 태그를 반환함.
        //stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함.
        //slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 함. 이때, 매개변수값(인수) 500은 0.5초를 의미함.
        $(this).find('.submenu').stop().slideDown(500);   //500ms = 0.5s(0.5초)
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
});


//팝업
 // 로고를 누르면 팝업창 실행
 $('.logo').click(function(){
    //#modal과 일치하는 요소에 'active'클래스를 추가함.
    $('#modal').addClass('active');
});
//.btn 요소를 클릭하면
$('.btn').click(function(){
    //#modal의 'active' 클래스를 삭제함.
    $('#modal').removeClass('active');
})        