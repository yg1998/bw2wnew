


var text1 = '体育产业作为一个朝阳、健康、绿色的产业，' +
    '已成为21世纪国际公认的最具活力的产业。' +
    '体育产业具有高渗透性、交叉性、拉动性的特点,' +
    '2017年全球体育产业总规模突破1.6万美元，随着网络技术的演进' +
    '和消费技术的不断升级，广大用户对于体育尤其是互联网体育的' +
    '热情愈加高涨，由此促进体育社交平台的快速发展和高度融合，内容' +
    '+电商+社交的模式成为一大趋势。';

var text2 = '传统模式下。体育在多项融合发展的过程中。也出现了诸多行业痛点：' +
    '如中心化所出现的多环节高成本问题、平台操纵问题' +
    '、信息和交易隐患等。'+'<br>'+'' +
    'BW2B利用成熟的区块链技术，融合了云计算。大数据、人工智能和物联网等前沿的科技，针对体育' +
    '行业所存在的痛点形成了一整套完整的解决方案。';

$('.text-detail1').html(text1)
$('.text-detail2').html(text2)

$('.ploy').on('click',function () {
    console.log(1)
   $('.ploy').removeClass('onclick');
    $(this).addClass('onclick')
});