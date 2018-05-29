class Tabs {
  constructor(selector) {
    this.element = $(selector)
    this.init()
    this.bindEvent()
  }
  init() {
    this.element.each(function (index, element) {
      $(element).children('.tab-bar').children('li').eq(0).addClass('active').siblings().removeClass('active')
      $(element).children('.tab-content').children('li').eq(0).addClass('active').siblings().removeClass('active')
    })
  }
  bindEvent() {
    this.element.on('click', '.tab-bar>li', function (e) {
      var ele = e.currentTarget
      var $li = $(ele); $li.addClass('active').siblings().removeClass('active')
      var index = $li.index()
      $li.closest('.tabs').find('.tab-content>li').eq(index).addClass('active')
        .siblings().removeClass('active')
    })
  }
}


var tab = new Tabs('.tabs')



















