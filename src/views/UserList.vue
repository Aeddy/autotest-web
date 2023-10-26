<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="#"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="realName"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="useType"
                    label="用户类别">
            </el-table-column>
            <el-table-column
                    prop="docTitleID"
                    label="职称">
            </el-table-column>
            <el-table-column
                    prop="isScheduling"
                    label="是否排班">
            </el-table-column>
            <el-table-column
                    prop="deptID"
                    label="科室">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="del(scope.row)" type="text" size="small" slot="reference">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                small
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total" @current-change="page">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        name: "UserList",
        created() {
            const _this = this;

            axios.get('http://localhost:8089/userList?pageNum=0&pageSize=' + this.pageSize)
                .then((response) => {
                    _this.tableData = response.data.userList
                    _this.total = response.data.TotalNum
                })
        },
        methods: {
            page(currentPage) {
                const _this = this

                axios.get('http://localhost:8089/userList?pageNum=' + (currentPage - 1) + '&pageSize=' + this.pageSize)
                    .then((response) => {
                        _this.tableData = response.data.userList
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