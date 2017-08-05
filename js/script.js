$(document).ready(function(){

    var sidebar=$('#sidebar');

    $('.mobile-nav').click(function(){
        var l = sidebar.css('left');
        l = parseInt(l);
        if(l<0)
            l = 0;
        else
            l = -260;
        sidebar.show();
        sidebar.animate(
            {
                left: l + 'px',
                duration:300
            },
            function(){
                sidebarTimeout = setTimeout(
                    function(){
                        sidebar.animate({left:'-260px',duration:300});
                    },
                    5000
                );
            }

        );



    });

    $('#sidebar li > a').click(function(){
        if(!$(this).hasClass('active'))
        {
            $("#sidebar li > a.active").removeClass("active");
            $(this).addClass("active");        
        }
    });

    $( ".slides" ).slidesjs({
        width:  600,
        height: 400,
        navigation: {
            active: false,
        },
        callback: {
            loaded: function(number) {
                var images = $( ".slides .slidesjs-control").find('img');
                images.each(function(idx, img){
                    var $img = $(img);
                    var imgUrl = $img.attr('src');
                    var $div = $('<div class="slide-image"></div>');
                    $div.css('background-image', 'url(' + imgUrl + ')');
                    var imgIdx = $img.attr('data-image-index');
                    var imgThumb = $img.attr('data-image-thumb');
                    $div.attr('data-image-index', imgIdx);
                    $div.attr('data-image-thumb', imgThumb);
                    $div.css({
                        'background-image': 'url(' + imgUrl + ')',
                        'left': $img.css('left'),
                        'z-index': $img.css('z-index'),
                        'display': $img.css('display')
                    });
                    $img.replaceWith($div);
                });
                $( '.slidesjs-pagination-item' ).each( function( index, element ) {
                    var target = $( element ).find( 'a' ),
                        src    = $( '.slides [data-image-index=' + index + ']' ).data( 'image-thumb' );

                    $( target ).html( '<img src="' + src + '" alt="" />' );
                });
            },
        },
    });



});