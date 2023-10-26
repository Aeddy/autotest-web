<template>
  <div class="hello">
    <el-button class="left-btn" type="primary" @click="getContentDiff">获取内容差异</el-button>
    <iframe :src="htmlURL" width="1600" height="700" />
  </div>
</template>

  <script>
export default {
  name: "ContentDiff",
  data() {
    return {
      htmlURL: ''
    };
  },
  methods: {
    getContentDiff() {
      // 向后端发送请求并接收HTML文件流  
      axios.get('http://127.0.0.1:8000/diff?fileName')
        .then(response => {
          const reader = response.data;
          const blob = new Blob([reader], { type: 'text/html' });
          // 创建一个可访问的URL  
          this.htmlURL = URL.createObjectURL(blob);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
  </script>

<style scoped>
</style>