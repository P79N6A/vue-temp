以vue-cli官方模板“webpack”修改的模板，适用于公司项目。

  改动
  
1.assetsPublicPath
2.ExtractTextPlugin的参数中增加`publicPath: '../../'`以正确加载css文件中的图片
3.DllReferencePlugin插件的应用
4.内部包的引入
