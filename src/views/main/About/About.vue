<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div
      id="mountNode"
      style="width: 500px; height: 300px; overflow: hidden; margin: 0 auto"
    ></div>
  </div>
</template>
<script>
// import G6 from "@antv/g6";
import echarts from "echarts";
// 引入测试数据
import test from "@/data/test.js";
// 生成随机位置方法
import RandomPosition from "@/utils/randomPosition.js";

export default {
  data() {
    return {
      charts: null,
      symbolSize: 30,
      name: "北京电信规划设计院有限公司"
    };
  },
  mounted() {
    let positionArr = new RandomPosition(
      test.nodes.length,
      10
    ).getRandomPosition();
    console.log(test);
    let nodeArr = [];
    test.nodes.forEach(val => {
      if (val.properties.name === this.name) {
        val.x = 0;
        val.y = 0;
        nodeArr.push(val);
      }
    });
    console.log(nodeArr);
    // test.relationships.forEach( val => {
    //   // console.log(val);
    //   // if (val.startNode === nodeArr[0].id || val.endNode === nodeArr[0].id) {
    //   //   console.log(val);
    //   //   // let id = val.startNode != nodeArr[0].id ?  val.startNode : val.endNode;
    //   // }
    // });
    var option = {
      series: [
        {
          type: "graph",
          layout: "none",
          data: test.nodes.map((val, i) => {
            return {
              x: positionArr[i].x,
              y: positionArr[i].y,
              id: val.id,
              name: val.properties.name,
              symbolSize: 30 - i > 10 ? 30 - i : 10
              // label: {
              //   normal: {
              //       show: this.symbolSize > 30
              //   }
              // },
              // itemStyle: {
              //     normal: {
              //         color: val.color
              //     }
              // }
            };
          }),
          edges: test.relationships.map(val => {
            return {
              source: val.startNode,
              target: val.endNode
            };
          }),
          roam: true,
          label: {
            emphasis: {
              color: "#333",
              position: "center",
              show: true
            }
          },
          edgeSymbol: ["circle", "arrow"],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          focusNodeAdjacency: true,
          lineStyle: {
            normal: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          }
        }
      ]
    };
    let mountNode = document.getElementById("mountNode");
    this.charts = echarts.init(mountNode);
    this.charts.setOption(option);
  }
};
</script>
