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
  mounted() {
    console.log(treeData);
    console.log(holdData);
    var graph = new G6.TreeGraph({
      container: "hold",
      width: 800,
      height: 400,
      pixelRatio: 2,
      modes: {
        default: [
          {
            type: "collapse-expand", // 定义收缩/展开行为
            onChange: function onChange(item, collapsed) {
              console.log(item);
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
        anchorPoints: [[0, 0.5], [1, 0.5]]
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
          nodeSep: 200, // 节点间距
          rankSep: 150 // 行间距
        });
      }
    });
    graph.data(treeData);
    graph.render();
    graph.getNodes().forEach(function(node) {
      var model = node.get("model");
      console.log(model);
      // model.label = model.data.id;
      model.labelCfg = {
        offset: 10,
        style: {
          fill: "#666"
        }
      };
      if (model.children && model.children.length > 0) {
        model.labelCfg.position = "center";
      } else {
        model.labelCfg.position = "center";
      }
    });
    graph.refresh();
    graph.fitView();
  }
};
</script>
<style class="less">
.wrap {
  width: 800px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow: hidden;
}
</style>
