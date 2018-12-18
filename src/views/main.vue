<template>
  <div style="width:500px">
    <avue-dynamicquery
      :placeholder="placeholder"
      :multiple="true"
      :dic="data"
      :options="option"
      :value="value"
      v-model="value"/>
    <el-button type="button" @click="click">点我</el-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: [1, 3],
    placeholder: '请选择...',
    data: [
      {
        id: 1,
        name: '张三',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 2,
        name: '李四',
        sex: '女',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 3,
        name: '王五',
        sex: '女',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 4,
        name: '赵六',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 5,
        name: '赵六1',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 6,
        name: '赵六2',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 7,
        name: '赵六3',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 8,
        name: '赵六4',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 9,
        name: '赵六5',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }, {
        id: 10,
        name: '赵六6',
        sex: '男',
        date: '1994-02-23 00:00:00',
        sex1: '男',
        date1: '1994-02-23 00:00:00'
      }
    ],
    option: {
      title: '表格的标题',
      page: false,
      props: { label: 'name', value: 'id' },
      search: false,
      column: [
        {
          prop: 'id',
          hide: true
        },
        {
          label: '姓名',
          prop: 'name',
          fixed: true,
          width: 100
        },
        {
          label: '性别',
          prop: 'sex',
          width: 100
        }, {
          label: '日期',
          prop: 'date',
          type: 'date',
          format: 'yyyy-MM-dd',
          width: 180
        }, {
          label: 'sex1',
          prop: 'sex1',
          width: 100
        }, {
          label: '日期1',
          prop: 'date1',
          type: 'date',
          format: 'yyyy-MM-dd',
          width: 180
        }
      ],
      searchChange: function(val) {
        debugger
        switch (val) {
          case '1':
            return [{
              id: 1,
              name: '张三1111',
              sex: '男',
              date: '1994-02-23 00:00:00',
              sex1: '男',
              date1: '1994-02-23 00:00:00'
            }]
          case '2':
            return [{
              id: 2,
              name: '李四2222',
              sex: '女',
              date: '1994-02-23 00:00:00',
              sex1: '男',
              date1: '1994-02-23 00:00:00'
            }]
          case '3':
            return [{
              id: 3,
              name: '王五333',
              sex: '女',
              date: '1994-02-23 00:00:00',
              sex1: '男',
              date1: '1994-02-23 00:00:00'
            }]
          default:
            return [
              {
                id: 1,
                name: '张三',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 2,
                name: '李四',
                sex: '女',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 3,
                name: '王五',
                sex: '女',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 4,
                name: '赵六',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 5,
                name: '赵六1',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 6,
                name: '赵六2',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 7,
                name: '赵六3',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 8,
                name: '赵六4',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 9,
                name: '赵六5',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }, {
                id: 10,
                name: '赵六6',
                sex: '男',
                date: '1994-02-23 00:00:00',
                sex1: '男',
                date1: '1994-02-23 00:00:00'
              }
            ]
        }
      }
    }
  }),
  methods: {
    click() {
      this.$message({
        message: this.value,
        type: 'success'
      })
    }
  }
}
</script>
