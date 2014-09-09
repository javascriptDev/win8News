/**
 * Created by a2014 on 14-9-7.
 */
function Page(o) {
    this.groups = [];
    this.init();
}
Page.prototype = {
    init: function () {
        var height = document.documentElement.clientHeight;
        var width = window.screen.availWidth;
        this.el = util.createEl('div', {
            className: 'x-page',
            style: {
                height: height + 'px',
                right: -width + 'px',
            }
        });
        document.body.appendChild(this.el);
    },
    enter: function () {
        this.el.style.right = '0px';
//        this.el.style.webkitTransform = 'rotateZ(360deg)';
    },
    out: function (fn) {
        var width = window.screen.availWidth;
        var me = this;
//        this.el.style.right = width + 'px';
        this.el.style.webkitTransform = 'scale(0)';
        me.el.style.opacity = 0;

        var o = function (e) {
            fn && fn();
            me.el.removeEventListener('webkitTransitionEnd', o);
        }
        this.el.addEventListener('webkitTransitionEnd', o)
    },
    update: function () {
        var me = this;
        this.el.style.webkitTransform = 'rotateY(360deg)';
        me.el.innerHTML = "aasd123";
        me.el.style.background = 'pink';
    },
    add: function (group) {
        this.groups.push(group);
        this.el.appendChild(group.el);
    }

}