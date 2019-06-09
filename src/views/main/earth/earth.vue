<template>
  <div>
    <h1>地球</h1>
    <div id="earthChart" style="width: 800px;height: 800px;"></div>
  </div>
</template>
<script>
import echart from "echarts";
import "echarts-gl";
import nodeData from "@/data/node";
import world from "@/data/world";
export default {
  name: "earth",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    let earth = document.getElementById("earthChart");
    this.chart = echart.init(earth);
    let _data = nodeData.map(element => {
      let val = [0, 0, 0];
      let data = {};
      if (!world[element.abbr]) {
        data.name = "";
        data.value = val;
        return data;
      } else {
        val[0] = world[element.abbr].longitude;
        val[1] = world[element.abbr].latitude;
        val[2] = element.value;
        data.name = element.cnName;
        data.value = val;
        return data;
      }
    });
    let option = {
      backgroundColor: "#000",
      globe: {
        baseTexture: "/earth/earth.jpg",
        heightTexture: "",
        shading: "color",
        environment: "/earth/starfield.jpg",
        viewControl: {
          autoRotate: true
        }
      },
      visualMap: {
        show: true,
        max: _data.length && _data[0].value[2],
        calculable: true,
        realtime: false,
        inRange: {
          symbolSize: [5, 100],
          colorLightness: [1, 0.3]
        },
        textStyle: {
          color: "#fff"
        },
        controller: {
          inRange: {
            color: "#f30"
          }
        },
        outOfRange: {
          colorAlpha: 0
        }
      },
      series: [
        {
          type: "scatter3D",
          coordinateSystem: "globe",
          // yAxisIndex: 100,
          polarIndex: 0,
          blendMode: "lighter",
          symbolSize: function(value) {
            if (value[2] > 5000) {
              return 100;
            } else if (value[2] > 2000) {
              return 80;
            } else if (value[2] > 1000) {
              return 70;
            } else if (value[2] > 500) {
              return 60;
            } else if (value[2] > 300) {
              return 40;
            } else if (value[2] > 100) {
              return 20;
            } else if (value[2] > 50) {
              return 10;
            } else {
              return 5;
            }
          },
          itemStyle: {
            color: "#f30",
            opacity: 1
          },
          data: _data,
          label: {
            show: false,
            formatter: c => {
              return c.name + ": " + c.data.value[2];
            }
          }
          //  type: 'bar3D',
          // coordinateSystem: 'globe',
          // barSize: 1,
          // minHeight: 1,
          // silent: true,
          // itemStyle: {
          //     color: '#f32'
          // },
          // label: {
          //   show: false,
          //   formatter: (c) => {
          //     console.log();
          //     return c.data[2]
          //   }
          // }
        }
      ]
    };

    this.chart.setOption(option);
  }
};
</script>
