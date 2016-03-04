// function main_all() {
//   var worldMap;
//   var syriaCountry;
//   var irakCountry;
//   var somaliaCountry;
//   var eritreaCountry;
//   var sudanCountry;
//   var southsudanCountry;
//   var zentralafrikanischeRepublikCountry;
//   var congoCountry;
//   var afghanistanCountry;
//   var myanmarCountry;
//
// // Gruppe Import Länder
//   var usaCountry;
//   var turkeyCountry;
//   var saudiarabiaCountry;
//   var uaeCountry;
//   var pakistanCountry;
//   var indienCountry;
//   var chinaCountry;
//   var suedkoreaCountry;
//   var australiaCountry;
//
// // Skalierung der Karte
//   var ww = $(window).width();
//   var wh = $(window).height();
//
//   var svg = d3.select("#vis1").append("svg")
//     .attr("viewBox", "0 0 " + ww + " " + wh)
//     .attr("preserveAspectRatio", "xMidYMid")
//     .attr("width", ww)
//     .attr("height", wh);
//
//   $(window).resize(function(){
//     svg
//       .attr("width", $(window).width())
//       .attr("height", $(window).height());
//   });
//
//   var tooltip = d3.select("#vis1")
//         .append("div")
//         .style("position", "absolute")
//         .style("font-family", "lft-etica", "sans-serif")
//         .style("font-weight", "800")
//         .style("font-size", "12px")
//         .style("text-transform", "uppercase")
//         .style("z-index", "10")
//         .style("padding", "8px")
//         .style("color", "#FFF")
//         .style("background-color", "rgba(0, 0, 0, 0.8)")
//         .style("visibility", "hidden")
//
//
//   function MouseMove(){
//           return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
//         }
//
//   function MouseOut() {
//           return tooltip.style("visibility", "hidden");
//         }
//
//   importPath("img/world_map_nadja.svg", function(path){
//     worldMap = path;
//
//   importPath("img/syria_border.svg", function(path){
//     syriaCountry = path;
//
//   importPath("img/irak_border.svg", function(path){
//     irakCountry = path;
//
//   importPath("img/somalia_border.svg", function(path){
//     somaliaCountry = path;
//
//   importPath("img/eritrea_border.svg", function(path){
//     eritreaCountry = path;
//
//   importPath("img/sudan_border.svg", function(path){
//     sudanCountry = path;
//
//   importPath("img/southsudan_border.svg", function(path){
//     southsudanCountry = path;
//
//   importPath("img/zentralafrikanischeRepublik_border.svg", function(path){
//     zentralafrikanischeRepublikCountry = path;
//
//   importPath("img/congo_border.svg", function(path){
//     congoCountry = path;
//
//   importPath("img/afghanistan_border.svg", function(path){
//     afghanistanCountry = path;
//
//   importPath("img/myanmar_border.svg", function(path){
//     myanmarCountry = path;
//
// // Gruppe Import Länder
//   importPath("img/import_usa.svg", function(path){
//     usaCountry = path;
//
//   importPath("img/import_turkey.svg", function(path){
//     turkeyCountry = path;
//
//   importPath("img/saudiarabiaCountry.svg", function(path){
//     saudiarabiaCountry = path;
//
//   importPath("img/import_uae.svg", function(path){
//     uaeCountry = path;
//
//   importPath("img/import_pakistan.svg", function(path){
//     pakistanCountry = path;
//
//   importPath("img/import_indien.svg", function(path){
//     indienCountry = path;
//
//   importPath("img/import_china.svg", function(path){
//     chinaCountry = path;
//
//   importPath("img/import_suedkorea.svg", function(path){
//     suedkoreaCountry = path;
//
//   importPath("img/import_australien.svg", function(path){
//     australiaCountry = path;
//
//       drawVis();
//     });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//   });
//
//   function drawVis() {
//
//     	svg
//         .append("g")
//           .attr("transform","translate(1000,742)")
//           .append("text")
//         .text("click me to zoom")
//           .on("click", click)
//           .style("opacity", 0.5)
//           .style('fill', 'red')
//           .style('cursor', 'pointer')
//           .style('font-family', 'lft-etica', 'sans-serif')
//           .style('font-weight', '600');
//
//
//       var g = svg.append('g');
//
//
//         var map = g
//         .append("g")
//         .attr('transform', 'translate(-100, 0)')
//         .append("path")
//           .attr("d",worldMap)
//           .style('fill', 'black');
//
//
//
// //
//
//
//         function click(d){
//           var a = this;
//           var b = d;
//           d3.event.preventDefault();
//
//           document.getElementById('titleImport').style.display = 'none';
//           // document.getElementById('titleImport1').style.display = 'none';
//           // document.getElementById('titleImportBreak').style.display = 'none';
//           document.getElementById('vis').style.opacity = 0;
//           document.getElementById('legende1').style.display = 'none';
// 					document.getElementById('legende2').style.display = 'none';
//
//
//           g
//             .transition()
//             .duration(1500)
//             .ease("linear")
//             .attr('transform', 'scale(2.2) translate(-700, -270)');
//
//           Syrien.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Syrien.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 12.5)
//             .attr("transform", "translate(10,10) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Irak.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Irak.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Somalia.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Somalia.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Eritrea.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Eritrea.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Sudan.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Sudan.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Southsudan.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Southsudan.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           ZentralafrikanischeRepublik.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           ZentralafrikanischeRepublik.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Congo.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Congo.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Afghanistan.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Afghanistan.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//           Myanmar.select("path")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("transform", "scale(1)")
//             .style('stroke', '#F6EAA4');
//
//           Myanmar.select("circle")
//             .transition()
//             .duration(1700)
//             .ease("linear")
//             .attr("r", 1)
//             .attr("transform", "translate(20, 20) scale(0)")
//             .style('stroke', '#F6EAA4');
//
//
//     }
//
//     // function click(o){
//     //   var n = this;
//     //   var m = o;
//     //   d3.event.preventDefault();
//     //
//     //   document.getElementById('titleImport').style.display = 'block';
//     //   document.getElementById('titleImport1').style.display = 'block';
//     //   document.getElementById('titleImportBreak').style.display = 'block';
//     //   document.getElementById('vis').style.opacity = 1;
//     //   document.getElementById('legende').style.display = 'block';
//     // }
//
//   }
//
// }
