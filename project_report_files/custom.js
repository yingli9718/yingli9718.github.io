(function($) {
    $(document).ready(function(){
        $('.article-structure li a').each(function(){
            var $a = $(this);
            $a.attr('href', '#' + $(this).attr('href').split('#')[1].replace(/[^\w]/g,'').toLowerCase());
            $a.after('<span class="divider"></span>');
            $('.chapter-title').each(function(){
                if ($(this).text().replace(/[^\w]/g,'').toLowerCase() == $a.attr('href').split('#')[1]){
                    $(this).attr('id', $(this).text().replace(/[^\w]/g,'').toLowerCase());
                }
            });
        })
    });

    $(document).on('click', '.article-structure li a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - ( $('.admin-bar').length ? 64 : 32 ) - ($(window).width() < 768 ? $('.ya-share2').innerHeight() : 0)
        }, 500);
    });

    $(window).on('scroll touchmove', function(){
        if ($(window).width() < 768){
            if($(window).scrollTop() > 0 ){
                $('.ya-share2').addClass('active');
            }else{
                $('.ya-share2').removeClass('active');
            }
        }
    });
})(jQuery);
