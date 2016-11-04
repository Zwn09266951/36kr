<template>
  <div class="list">
    <ul>

      <li v-for="info in list">
        <a :href="info.link">
            <h2 class="title">{{ info.title.__cdata}}</h2>
            <div class="">
              <span class="author">{{info.author}}</span><span class="category">{{info.category}}</span>
              <span class="datatime">{{info.pubDate.__cdata}}</span>
              <!-- 把重新赋值的日期数组进行渲染 -->
            </div>
            <div class="infobox">
              <div class="left w70 infmainbox">
                <div v-html="info.description.__cdata" class="">
                </div>
              </div>
              <div class="right">
                  <img v-if="info.demo[0]" :src="info.demo[0]" alt="" height="100" width="100"/>
              </div>
            </div>
          </a>
      </li>

    </ul>

    <!-- <button type="button" name="button" v-on:click="showData"></button> -->
  </div>
</template>

<script>
import App from '../App'

export default {
  data () {
    return {
      list:[]
    }
  },
  methods: {
      showData: function(){
        var self = this
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/feed',
            dataType: 'text',
            success: function(data) {
              /* eslint-disable */
              var x2js = new X2JS();
              var newdata = x2js.xml_str2json(data);
              console.log(newdata);

              self.list = newdata.rss.channel.item;  //给渲染数组添加数组数据//
              console.log(self.list.link);
              self.list.forEach(function(item, index) {
                var d = new Date(item.pubDate.__cdata);
                item.pubDate.__cdata = (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes()  //数组重新进行赋值//
              });

              self.list.forEach(function(item, index) {
                var str = item.description.__cdata;
                //获取html内容//
                var s = str;
                if(str.length>10){
                    s = str.substring(0,250)+"...";
                    item.description.__cdata = s;
                  }
                var patt = /<img[^>]+src=['"]([^'"]+)['"]+/g;
                //图片地址url匹配正则//
                var result = [], temp;
                if( (temp= patt.exec(str)) != null ) {
                  result.push(temp[1]);
                } else {
                  result.push('');
                };

                item.demo = result
                //插入新的字段，并把新的数组赋予给它//
              })
              // $(data).find('item').each((index, item) => {
              //   $(item).find('author').each((index, author) => {
              //     console.log($(author).html())
              //   })
              // })

            }
        });
      }

    },
    mounted () {
      this.showData();
    }
}
/**
 * [XMLtoString 转换]
 * @param {[type]} elem [description]
 */
function XMLtoString(elem){
  var serialized;
  try {
      // XMLSerializer exists in current Mozilla browsers
      serializer = new XMLSerializer();
      serialized = serializer.serializeToString(elem);
  }
  catch (e) {
      // Internet Explorer has a different approach to serializing XML
      serialized = elem.xml;
  }
  return serialized;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
  left:0;
}
.w70 {
  width: 70%;
}
p {
  margin: 0;
  padding: 0;
  color: #b1b1b1;
}
ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}

li {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 10px;
  border-bottom: 1px solid #f2f2f2;
}

a {
  text-decoration: none;
  color: inherit;
}
.left {
  float:left;
}
.right {
  float:right;;
}
.right img  {
  border-radius: 3px;
}
img {
  vertical-align: middle;
  /*border-radius: 25px;*/
}
.title {
  line-height: 50px;
  font-weight: bold;
}
.author {
  color: #fff;
  background-color: rgb(29, 138, 238);
  border-radius: 2px;
  padding: 0 10px;
  margin-right: 10px;
}
.category {
  color:rgb(230, 139, 18);
  background-color:#f1f1f1;
  padding: 0 10px;
  border-radius: 2px;
}
.datatime {
  color:#fff;
  background-color:#b1b1b1;
  padding: 0 10px;
  border-radius: 2px;
  float: right;
}
.infobox {
  margin: 10px 0;
  overflow: hidden;
}
.infmainbox {
  overflow: hidden;
  line-height: 25px;
}
</style>
