/**
 * Created by addison on 14-6-23.
 */
function inherit(subclass, superclass) {
    var F = function () {
        },
        subclassProto = subclass.prototype,
        superclassProto = superclass.prototype;
    F.prototype = superclassProto;
    subclass.prototype = new F();
    subclass.prototype.constructor = subclass;
    subclass.superclass = superclassProto;
    if (superclassProto.constructor === Object.constructor) {
        superclassProto.constructor = superclass;
    }
    var subProtoMethod = Object.keys(subclassProto);
    Array.prototype.forEach.call(subProtoMethod, function (item) {
        if (subclassProto.hasOwnProperty(item)) {
            if (Object.prototype.toString.call(subclassProto[item]) == '[object Function]') {
                subclass.prototype[item] = subclassProto[item];
            }
        }
    });
    return subclass;
}

var util = {

    createEl: function (domName, cfg) {
        var el = document.createElement(domName);
        util.recursion(el, cfg);
        return el;
    },
    //递归函数
    recursion: function (dom, o) {
        for (var i in o) {
            if (Object.prototype.toString.call(o[i]) == '[object Object]') {
               util.recursion(dom[i], o[i]);
            } else {
                dom[i] = o[i];
            }
        }
    }





}

