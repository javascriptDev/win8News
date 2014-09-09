/**
 * Created by a2014 on 14-9-7.
 */
function MagneticPost(o, group) {
    this.data = o;
    this.group = group;
    this.init();
}

MagneticPost.prototype = {

    init: function () {
        var d = this.data;
        var me = this;
        this.el = util.createEl('div', {
            className: 'x-mp ',
            innerHTML: '<div className="x-title">' + d.title + '</div><div class="x-content">' + d.content + '</div>',
            group: me.group
        });

    }

}
