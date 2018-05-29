
function Tabs(selector) {
  this.element = $(selector)
  this.init()
  this.bindEvent()
}

Tabs.prototype.init = function () {
  //默认 情况应该显示第一个选项卡选中状态  并且 显示选项卡内容
  this.element.each(function (index, element) {
    $(element).children('.tab-bar').children('li').eq(0).addClass('active')
      .siblings().removeClass('active')
    $(element).children('.tab-content').children('li').eq(0).addClass('active')
      .siblings().removeClass('active')
  })
}


Tabs.prototype.bindEvent = function () {
  //点击每一个选项   选项会被选中  改变边框颜色
  this.element.on('click', '.tab-bar>li', function (e) {
    var $li = $(e.currentTarget)
    $li.addClass('active').siblings().removeClass('active')
    //点击对应的选项， 显示对应第几个内容块
    var index = $li.index()
    //   $('.tabs').find('.tab-content>li').eq(index).addClass('active')
    //   .siblings().removeClass('active')
    //效果： 如果有多个选项卡  那么其他点击选项 控制的都是第一个的内容
    $li.closest('.tabs').find('.tab-content>li').eq(index).addClass('active')
      .siblings().removeClass('active')

  })
}

var tab = new Tabs('.tabs')




















