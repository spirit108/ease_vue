<template>
  <div>
    <h1>股权穿透</h1>
    <div class="wrap">
      <div id="hold" class="hold-box"></div>
    </div>
  </div>
</template>
<script>
import G6 from "@antv/g6";
import holdData from "../data/holding";
import treeData from "../data/tree";
const Hierarchy = require("@antv/hierarchy");

export default {
  created() {
    new Promise(resolve => resolve(treeData)).then((res) => {
      console.log(treeData);
      console.log(holdData);
      let _data = [];
      let holdObj = {};
      _data[0] = {
        id: "dsfdf",
        label: "控股",
        shape: "rect",
        children: holdData.invest.map((val, i)=> {
          let obj = {};
          obj.label = val.name;
          obj.shape = "rect";
          obj.id = val.id || parseInt(Math.random()*10) + i;
          return obj;
        })
      };
      _data[1] = {
        id: "dddsfd",
        label: "投资",
        shape: "rect",
        children: holdData.path.map(val => {
          let obj = {};
          obj.label = val.value
          obj.shape = "rect";
          obj.id = val.id ||  parseInt(Math.random()*10 + new Date().getTime());
          return obj;
        })
      }
      holdObj.id = holdData.structure.id + "root";
      holdObj.label = holdData.structure.name;
      holdObj.children = _data;
      console.log(holdObj);
      var graph = new G6.TreeGraph({
        container: "hold",
        width: 1600,
        height: 800,
        pixelRatio: 2,
        modes: {
          default: [
            {
              type: "collapse-expand", // 定义收缩/展开行为
              onChange: function onChange(item, collapsed) {
                var data = item.get("model").data;
                data.collapsed = collapsed;
                return true;
              }
            },
            "drag-canvas",
            "zoom-canvas"
          ]
        },
        defaultNode: {
          size: [200, 100],
          anchorPoints: [[0.5, 0.5], [0.5, 0.5]]
        },
        defaultEdge: {
          shape: "cubic-horizontal"
        },
        nodeStyle: {
          default: {
            fill: "#40a9ff", // 填充颜色
            stroke: "#096dd9" // 边框颜色
          }
        },
        edgeStyle: {
          default: {
            stroke: "#333"
          }
        },
        layout: function layout(data) {
          return Hierarchy.dendrogram(data, {
            direction: "V", // H / V / LR / RL / TB / BT
            nodeSep: 250, // 节点间距
            rankSep: 200 // 行间距
          });
        }
      });
      graph.data(holdObj)
      graph.render();
      this.graph = graph;
      graph.getNodes().forEach(function(node) {
        var model = node && node.get("model");
        // model.label = model.name;
        // model.shape = "rect";
        model.labelCfg = {
          position: "center",
          style: {
            fill: "#333"
          }
        };
      });
      graph.refresh();
      graph.fitView();
    });
  }
};
</script>
<style class="less" scoped>
.wrap {
  width: 1600px;
  height: 800px;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow: hidden;
}
</style>
