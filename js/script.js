function scrollAnimation(HTMLDivElement)
{
    $('html, body').animate(
        {scrollTop: $(HTMLDivElement).offset().top} , 1500);
};