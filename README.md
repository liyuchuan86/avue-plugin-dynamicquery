
# avue-plugin-dynamicquery

## avue 表格查询框

## npm
[avue-plugin-dynamicquery](https://www.npmjs.com/package/avue-plugin-dynamicquery)

## git
[avue-plugin-dynamicquery](https://github.com/liyuchuan86/avue-plugin-dynamicquery)

## demo
<p align="center">
  <img width="600" src="https://github.com/liyuchuan86/avue-plugin-dynamicquery/raw/master/packages/demo/demo.png">
</p>

## changelog
fix sortChange、currentChange、scrollbar style <br>
add table total <br>
fix other <br>
currentChange、sortChange、searchChange mast result data total

version 0.1.1
## use
```
1.安装
npm install avue-plugin-dynamicquery --save

2.导入
import 'avue-plugin-dynamicquery/packages'

3.使用
...
column:[
  ...
    {
      label: 'test',
      prop: 'test',
      component: 'AvueDynamicquery',
    }
  ...
]
或者直接
 <avue-dynamicquery 
      :placeholder="placeholder"
      :multiple="true"
      :dic="data"
      :options="option"
      :value="value"/>
...
```



