/**
 * Created by a2014 on 14-9-7.
 */

function Group(name, data, pager) {
    this.name = name || 'group';
    this.data = data || [];
    this.pager = pager;
    this.item = [];
    this.init();
}

Group.prototype = {
    init: function () {
        var me = this;

        this.el = util.createEl('div', {
            className: 'x-group',
            style: {
                left: me.getLeft() + 'px'
            }
        })

        this.title = util.createEl('div', {
            className: 'x-g-title',
            innerHTML: me.name
        })

        this.content = util.createEl('div', {
            className: 'x-g-content'
        })
        this.el.appendChild(this.title);
        this.el.appendChild(this.content);

        this.data.splice(0, 12).forEach(function (item) {
            var mp = new MagneticPost(item, me.name);
            me.item.push(mp);
            me.content.appendChild(mp.el);
        })
        this.addMore();
    },
    getLeft: function () {
        var left = 0;
        var me = this;
//        console.log(this.pager.groups);
        this.pager.groups.forEach(function (group) {
            console.log(parseInt(group.el.offsetWidth));
            left += parseInt(group.el.offsetWidth);
        })
        left += this.pager.groups.length * 20;

        return left;
    },
    addMore: function () {
        this.more = util.createEl('div', {
            className: 'x-g-more',
            innerHTML: 'get more ...'
        })
        this.el.appendChild(this.more);
    }

}