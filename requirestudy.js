function require(path){

}

//路径转换
require.resolve=function(path){
	var index=path+'/index.js';
	var reg=path+'/.js';
	var orig=path;

	return require.modules[reg]&&reg||require.modules[index]&&index||orig;
}

require.modules={};

//注册模块
reqire.register=function(path,fn){
	require.modules[path]=fn;
}

//在模块中引入另一个模块时获取路径
require.relative=function(parent){

}

