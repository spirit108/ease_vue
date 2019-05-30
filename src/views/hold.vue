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

export default {
  mounted() {
    console.log(treeData);
    console.log(holdData);
    var graph = new G6.TreeGraph({
      container: "hold",
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: 2,
      modes: {
        default: [
          {
            type: "collapse-expand",
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
        size: 16,
        anchorPoints: [[0, 0.5], [1, 0.5]]
      },
      defaultEdge: {
        shape: "cubic-horizontal"
      },
      nodeStyle: {
        default: {
          fill: "#40a9ff",
          stroke: "#096dd9"
        }
      },
      edgeStyle: {
        default: {
          stroke: "#A3B1BF"
        }
      },
      layout: function layout(data) {
        return Hierarchy.mindmap(data, {
          direction: "H",
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap() {
            return 100;
          }
        });
      }
    });
    graph.data(treeData);
    graph.render();
    var root = graph.find("node", function(node) {
      return node.get("model").data.id === "Modeling Methods";
    });
    var x = root.get("model").x;
    graph.getNodes().forEach(function(node) {
      var model = node.get("model");
      model.label = model.data.id;
      model.labelCfg = {
        offset: 10,
        style: {
          fill: "#666"
        }
      };
      if (model.children && model.children.length > 0) {
        model.labelCfg.position = "top";
      } else {
        if (model.x > x) {
          model.labelCfg.position = "bottom";
        } else {
          model.labelCfg.position = "top";
        }
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
}
</style>
