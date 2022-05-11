var params = new URLSearchParams(document.location.search);
var param = params.get("brandProduct");

if(param == 'seltzer') {
    var seltzerModule = $('.spalash').clone();
    $('.spalash').remove();
    $('.bottale_slide_bg').before(seltzerModule);
    $('.bottale_slide_bg').css({
        marginBottom: 300
    })
    $('.hero__button').attr('data-product-sku', '768282, 768292, 768280, 768291, 768260, 768281, 757926, 740972, 740975, 740977, 755069, 757590, 761362, 761964, 761915, 768122')
}
if(param == 'light') {
    $('.hero__button').attr('data-product-sku', '740972, 740975, 740977, 755069, 757926, 757590, 761362, 761964, 761915, 768122, 768291, 768260, 768281, 768282, 768292, 768280')
}
if(param == 'cider') {
    $('.hero__button').attr('data-product-sku', '757926, 740972, 740975, 740977, 755069, 757590, 761362, 761964, 761915, 768122, 768291, 768260, 768281, 768282, 768292, 768280')
}