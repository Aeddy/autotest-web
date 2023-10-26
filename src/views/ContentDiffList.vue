<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="filename" label="文件名" width="300">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="1000">
        <template slot-scope="scope">
          <el-button @click="getContentDiff(scope.row)" type="text" size="small" slot="reference">获取文件差异详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "ContentDiffList",
  created() {
    const _this = this;

    axios.get('http://localhost:8000/contentDiffList?pageNum=0&pageSize=' + this.pageSize)
      .then((response) => {
        _this.tableData = response.data.contentDiffList
        _this.total = response.data.TotalNum
      })
  },
  methods: {
    page(currentPage) {
      const _this = this

      axios.get('http://localhost:8000/contentDiffList?pageNum=' + (currentPage - 1) + '&pageSize=' + this.pageSize)
        .then((response) => {
          _this.tableData = response.data.contentDiffList
        })
    },
    // 前往路由contentDiff
    getContentDiff(row) {
      this.$router.push({
        path: '/contentFileDiff'
      })
    }

  },
  data() {
    return {
      total: 0,
      pageSize: 5,
      tableData: []
    }
  }
}
</script>

<style scoped>
</style>