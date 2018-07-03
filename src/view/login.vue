<template>
  <div>
    <div class="title">图片上传：</div>
    <el-form>
      <el-upload
        list-type="picture-card"
        :file-list="fileList"
        :limit="2"
        accept="image/jpeg,image/png"
        :on-preview="handlePictureCardPreview"
        :on-exceed="handleExceed"
        :on-change="handleChange"
        :on-remove="handleRemove"
        :action="action"
        :data="postData">
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form>
    <ul class="info">
      <li v-for="(item,index) in fileList" v-if="item.response" v-clipboard:copy="domain+item.response.hash" v-clipboard:success="onCopy" v-clipboard:error="onError">{{domain}}{{item.response.hash}}</li>
    </ul>
    <el-dialog
      :visible.sync="bigImgDialog"
      width="40%"
      center>
      <div class="bigproimg">
        <img :src="url" alt="" class="bigImg">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {token,action,domain} from "../plugins/qiniuToken";
  export default {
    data() {
      return {
        input:'',
        maxlength:10,
        fileList:[],
        postData:{
          token: token()
        },
        action: action,
        bigImgDialog: false,
        url: '',
        domain: domain
      };
    },
    mounted(){
    },
    methods: {
      handleChange(file, fileList){
        this.fileList = fileList

      },
      handleRemove(file, fileList){
        this.fileList = fileList
      },
      handlePictureCardPreview(file) {
        this.bigImg(file.url)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      bigImg(url) {
        this.url = url;
        this.bigImgDialog = true;
      },
      onCopy: function (e) {
        this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      onError: function (e) {
        this.$message.error('复制失败');
      }
    }
  }

</script>

<style lang="scss">
  .title{
    margin-bottom: 10px;
  }
  .el-upload-list__item{
    img{
      object-fit: contain;
    }
  }
  .info{
    li{
      margin-bottom: 10px;
    }
  }
</style>
