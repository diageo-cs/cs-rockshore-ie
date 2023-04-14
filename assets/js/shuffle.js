var params = new URLSearchParams(document.location.search);
var param = params.get("brandProduct");

if(param == 'seltzer') {
    var seltzerModule = $('.spalash').clone();
    $('.spalash').remove();
    $('.bottale_slide_bg').before(seltzerModule);
    $('.bottale_slide_bg').css({
        marginBottom: 300
    })
    $('.hero__button').attr('data-product-sku', '768282, 768281, 768280, 768291, 768292, 768260')
}
if(param == 'light') {
    $('.hero__button').attr('data-product-sku', '761964, 761362, 761915, 740972, 740977, 740975, 757590, 768122, 755069, 757926, 768282, 768281, 768280, 768291, 768292, 768260')
}
if(param == 'cider') {
    $('.hero__button').attr('data-product-sku', '755069, 757926, 761362, 761964, 761915, 740972, 740977, 740975, 757590, 768122, 768282, 768281, 768280, 768291, 768292, 768260')
}