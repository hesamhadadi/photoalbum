<template>
    <div>
        <input type="file" @change="addimage">
    </div>
</template>
<script>
export default {
    methods: {
        addimage:function(){
         const newimage = {
          img:this.newimages,
       }
        this.comments.push(newCommentObj)
        console.log("img")
        this.ajaxRequest = true;
        this.$http.post('https://rasanehbartar.ir/project/api/services/addcomment.php', {
              pid: this.$route.params.id,
             comment:this.newComment,
             
            }, function (data, status, request) {
                this.postResults = data;
                this.ajaxRequest = true;
                console.log('کامنت ثبت شد')
            });
                    body: this.newComment;
                    this.newComment = '';
        },
        addComment: function() {
        const newCommentObj = {
          comment:this.newComment,
       }
      this.comments.push(newCommentObj)
        this.ajaxRequest = true;
        this.$http.post('https://rasanehbartar.ir/project/api/services/addcomment.php', {
              pid: this.$route.params.id,
             comment:this.newComment,
             
            }, function (data, status, request) {
                this.postResults = data;
                this.ajaxRequest = true;
                console.log('کامنت ثبت شد')
            });
                    body: this.newComment;
                    this.newComment = '';

      }
    },
}
</script>
<style>

</style>
