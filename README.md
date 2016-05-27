# Alfred frontend tools
[Alfred](https://www.alfredapp.com/)这个效率工具真的是键盘党的得力神器，通过键盘快捷键就可以实现打开文件(夹)、查看剪切板历史、搜索、自定义工作流(脚本)等等，通过“关键字+输入=输出”实现各种玩法。

这个workflow包含了几个前端开发常用的功能，功能不定期更新，目标是添加前端开发常见的查询工作流。安装自定义workflow需要powerpack(17欧)，请支持正版。

## 1. 速查设备dpr,ppi,device-width,physical size等信息
将会定期更新、尤其是国产手机的设备信息
```
1).dpr [your mobile device name]

2).click or press [enter] to copy all the device info
```

## 2. 搜索npmjs.com
直接在alfred界面显示改npm包的相关信息
```
1).npm [your npm pakage name]

2).press [shift] to preview the result

3).press [enter] to open target in browser
```

## 3. 搜索代码、变量命名参考
从github/bitbucket/google code等代码托管网址搜索源代码，可展示相关关键字、变量命名参考，支持中英文查询
```
1).code [your keyword]

2).click or press [enter] to copy the codes and url
```

## 4. 有道翻译
有道汉英双向翻译的，mac的内置翻译系统满足不了的话可以试试
```
1).yd [your word]
```

## 5. Gist搜索
搜索你的gist代码片段，并拷贝
```
1).git set 设置你的github用户名(本地保存)
2).git set 设置你的github密码(本地保存，可不设置，但这样会搜索不到你的私有gist代码)
3).gist [your keyword]；如没有匹配的结果则输出你的全部gist
4).press [enter] to copy the codes
```

## 6. 勾股定理计算器
输入三个参数：直角边 直角边 斜边，未知数用x代替
```
1).gougu 3 4 x
2).press [enter] to copy the result
```


## Thanks:
http://screensiz.es/

有道翻译http://fanyi.youdao.com/openapi

https://searchcode.com/

github api：https://developer.github.com/v3/


