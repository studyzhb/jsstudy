var EventsListener=function(){
    var uniqid=-1,obj={};
    //添加监听
    var listen=function(key,fn){
        obj[key]?'':obj[key]=[];
        var tagid=(++uniqid).toString();
        obj[key].push({
            id:tagid,
            fn:fn
        });
        return tagid;
    };
    //发布
    var publish=function(){
        var key=Array.prototype.shift.call(arguments);
        if(obj[key]&&obj[key].length){
            for(var i=0;i<obj[key].length;i++){
                var isBreak=obj[key][i].fn.apply(this,arguments);
                if(isBreak===false){
                    return false;
                }
            }
        }else{
            alert("没有监听到需要发布的对象，请核对后再次发布！！！")
        }
    };
    //删除单个的监听
    var removeone=function(token){
        for(var kindlisten in obj){
            if(obj[kindlisten]){
                for(var i=0;i<obj[kindlisten].length;i++){
                    if(obj[kindlisten][i].id==token){
                        obj[kindlisten].splice(i,1);
                        return token;
                    }
                }
            }
        }
    };
    //删除某一类的监听
    var removelistener=function(key){
        if(obj[key]){
            delete obj[key];
        }
    };
    
    return {
        listen:listen,
        removelistener:removelistener,
        removeone:removeone,
        publish:publish
    }
}();