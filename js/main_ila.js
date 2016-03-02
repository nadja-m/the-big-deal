$(function(){
  function resize() {
    $('.page').css('height', $(window).height());
  }

  $(window).on('resize', resize);

  resize();
});


function export1() {

   var chartWidth = window.innerWidth;
   var chartHeight = window.innerHeight;

   var x = d3.scale.ordinal()
        .rangeRoundBands([0, chartWidth], 0.001);

   var y = d3.scale.linear()
        .range([chartHeight, 1]);

   var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10 , 0])
        .style("position", "absolute")
        .style("z-index", "10")
        .html(function(d) {
          return "<strong>" + d.Country + ":</strong> <span style='color:white'>" + d.Export + "Mio $</span>";
          // return tip.style("top", (event.pageY-10) + "px")
          //        tip.style("left", (event.pageX+10) + "px");
        });

    // var tooltip1 = d3.select(".bar")
    //         	.append("div")
    //         	.style("position", "absolute")
    //           .style("font-family", "lft-etica", "sans-serif")
    //           .style("font-size", "12px")
    //           .style("text-transform", "uppercase")
    //         	.style("z-index", "10")
    //           .style("padding", "8px")
    //           .style("color", "#FFF")
    //           .style("background-color", "rgba(0, 0, 0, 0.8)")
    //         	.style("visibility", "hidden")
    //           .html(function(d) {
    //                  return "<strong>" + d.Country + ":</strong> <span style='color:red'>" + d.Export + "Mio $</span>";
    //                });
    //
    //
    //     function MouseMove2(){
    //             return tooltip1.style("top", (event.pageY-10)+"px")
    //     			                 .style("left",(event.pageX+10)+"px");
    //           }
    //
    //     function MouseOut2() {
    //             return tooltip1.style("visibility", "hidden");
    //           }

    var svg = d3.select(".section.export1").append("svg")
       .attr("width", chartWidth)
       .attr("height", chartHeight)
       .append("g")
         .attr("transform", "translate");

    svg.call(tip);

      function convert(d) {
        d.Export = +d.Export;
        return d;
      }

    d3.csv("data/data_export.csv", convert, function(error, data) {
        if (error) throw error;

    x.domain(data.map(function(d) { return d.Country; }));
    y.domain([d3.max(data, function(d) { return d.Export; }), 0]);

        svg.selectAll(".bar")
           .data(data)
             .enter()
             .append("rect")
               .attr("class", "bar")
               .attr("x", function(d) { return x(d.Country); })
               .attr("width", x.rangeBand() - 1)
               .attr("y", 0)
               .attr('height', 0)
               .attr("rx", 3)
               .attr("ry", 3)
               .on("mousemove", tip.show)
               .on("mouseout", tip.hide);
       });



       function dropsFall() {
         svg.selectAll('.bar')
           .transition()
             .duration(5000)
             .attr("y", chartHeight - chartHeight)
             .attr("height", function(d) { return  y(d.Export); });
       }

       function dropsRise() {
         svg.selectAll('.bar')
           .transition()
             .duration(2000)
             .attr("y", 0)
             .attr("height", 0);
       }


       var controller2 = new ScrollMagic.Controller();


       new ScrollMagic.Scene({
           triggerElement: '.triggerExport1', // the element to scroll inside
           triggerHook: 'onLeave', // set trigger to top
           duration: 20
         })
         .addTo(controller2)
        //  .addIndicators()
         .on("progress", function (e) {
           if(e.progress > 0) {
             dropsFall();
           } else {
             dropsRise();
           }
         });

      var controller1 = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
          triggerElement: '.triggerTitleExport', // the element to scroll inside
          triggerHook: 'onLeave', // set trigger to top
          duration: 400
        })
        .setPin(".titleExport")
        .addTo(controller1)
}

// function showTooltip(exportGraph){
//   var tooltip = document.getElementById('export-tooltip2');
//   tooltip.innerHTML = exportGraph;
//   tooltip.style.display = 'block';
// }
// window.onmousemove = function(e) {
//   var tooltipSpan = document.getElementById('export-tooltip2');
//   var x = e.clientX, y = e.clientY;
//   tooltipSpan.style.top = (y - 10) + 'px';
//   tooltipSpan.style.left = (x + 10) + 'px';
// }
//
// function hideTooltip(){
//   document.getElementById('export-tooltip2').style.display = 'none';
// }


function visibility() {

 document.getElementById('titleExport2').style.display = 'block';

  function showGraph() {
    d3.selectAll('.section.export2')
      .transition()
        .duration(500)
        .ease("linear")
        .style("opacity", 1);
  }

  function hideGraph() {
    d3.selectAll('.section.export2')
        .style("opacity", 0);
  }

  hideGraph();


  var controller = new ScrollMagic.Controller();


  new ScrollMagic.Scene({
      triggerElement: '.triggerExport2', // the element to scroll inside
      triggerHook: 'onLeave', // set trigger to top
      duration: 20
    })
    .addTo(controller)
//    .addIndicators()
    .on("progress", function (e) {
      if(e.progress > 0) {
        showGraph();
      }
      else {
        hideGraph();
      }
    });

    var controller3 = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.triggerTitleExport2', // the element to scroll inside
        triggerHook: 'onLeave', // set trigger to top
        duration: 700
      })
      .setPin(".titleExport2")
      .addTo(controller3)
//      .addIndicators()
}


function importPath(file, cb) {
  d3.xml(file, "image/svg+xml", function(xml) {
    console.log("loaded path");
    cb(xml.documentElement.getElementsByTagName("path")[0].attributes.d.value);
  });
}

function main() {
  var worldMap;
  var syriaCountry;
  var irakCountry;
  var somaliaCountry;
  var eritreaCountry;
  var sudanCountry;
  var southsudanCountry;
  var zentralafrikanischeRepublikCountry;
  var congoCountry;
  var afghanistanCountry;
  var myanmarCountry;

// Gruppe Import Länder
  var usaCountry;
  var turkeyCountry;
  var saudiarabiaCountry;
  var uaeCountry;
  var pakistanCountry;
  var indienCountry;
  var chinaCountry;
  var suedkoreaCountry;
  var australiaCountry;

  var ww = $(window).width();
  var wh = $(window).height();

  var svg = d3.select("#vis").append("svg")
    .attr("width", ww)
    .attr("height", wh)
    .attr("viewBox", "0 0 " + ww + " " + wh)
    .attr("preserveAspectRatio", "xMidYMid");

  $(window).resize(function(){
    svg
      .attr("width", $(window).width())
      .attr("height", $(window).height());
  });

  var tooltip_2 = d3.select("#vis")
      	.append("div")
      	.style("position", "absolute")
        .style("font-family", "lft-etica", "sans-serif")
        .style("font-weight", "800")
        .style("font-size", "12px")
        .style("text-transform", "uppercase")
      	.style("z-index", "10")
        .style("padding", "8px")
        .style("color", "#FFF")
        .style("background-color", "rgba(0, 0, 0, 0.8)")
      	.style("visibility", "hidden");


  function MouseMove(){
          return tooltip_2.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
        }

  function MouseOut() {
          return tooltip_2.style("visibility", "hidden");
        }

  importPath("img/world_map_nadja.svg", function(path){
    worldMap = path;

  importPath("img/syria_border.svg", function(path){
    syriaCountry = path;

  importPath("img/irak_border.svg", function(path){
    irakCountry = path;

  importPath("img/somalia_border.svg", function(path){
    somaliaCountry = path;

  importPath("img/eritrea_border.svg", function(path){
    eritreaCountry = path;

  importPath("img/sudan_border.svg", function(path){
    sudanCountry = path;

  importPath("img/southsudan_border.svg", function(path){
    southsudanCountry = path;

  importPath("img/zentralafrikanischeRepublik_border.svg", function(path){
    zentralafrikanischeRepublikCountry = path;

  importPath("img/congo_border.svg", function(path){
    congoCountry = path;

  importPath("img/afghanistan_border.svg", function(path){
    afghanistanCountry = path;

  importPath("img/myanmar_border.svg", function(path){
    myanmarCountry = path;

// Gruppe Import Länder
  importPath("img/import_usa.svg", function(path){
    usaCountry = path;

  importPath("img/import_turkey.svg", function(path){
    turkeyCountry = path;

  importPath("img/saudiarabiaCountry.svg", function(path){
    saudiarabiaCountry = path;

  importPath("img/import_uae.svg", function(path){
    uaeCountry = path;

  importPath("img/import_pakistan.svg", function(path){
    pakistanCountry = path;

  importPath("img/import_indien.svg", function(path){
    indienCountry = path;

  importPath("img/import_china.svg", function(path){
    chinaCountry = path;

  importPath("img/import_suedkorea.svg", function(path){
    suedkoreaCountry = path;

  importPath("img/import_australien.svg", function(path){
    australiaCountry = path;

      drawVis();
    });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });


  var controller9 = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: '.triggerImportTitle', // the element to scroll inside
      triggerHook: 'onLeave', // set trigger to top
      duration: 600
    })
    .setPin(".titleImport")
    .addTo(controller9)
    // .addIndicators();

  // var controller10 = new ScrollMagic.Controller();
  //
  //   new ScrollMagic.Scene ({
  //     triggerElement: '.triggerLegende1', // the element to scroll inside
  //     triggerHook: 'onLeave', // set trigger to top
  //     duration: 600
  //   })
  //   .setPin(".legendeTriggerd")
  //   .addTo(controller10);



  function drawVis() {

    	svg
        .append("g")
          .attr("transform","translate(20,20)")

      var g = svg.append('g');

        var map = g
        .append("g")
        .attr('transform', 'translate(-100, 0)')
        .append("path")
          .attr("d",worldMap)
          .style('fill', 'black');



// Gruppe Import Länder

      var raster = g;

      svg
        .append('defs')
        .append('pattern')
          .attr('id', 'diagonalHatch')
          .attr('patternUnits', 'userSpaceOnUse')
          .attr('width', 8)
          .attr('height', 8)
        .append('path')
          .attr('d', 'M-1,1 l2,-2 M0,8 l8,-8 M7.5,8.6 l2,-2')
          .attr('stroke', '#F6EAA4')
          .attr('stroke-width', 2);

          var Usa = raster
            .append("g")
            .attr('transform', 'translate(112, 294)')
            .style('fill', 'red')
            .style('opacity',0);

            Usa.append("path")
            .attr("d",usaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Usa.append("path")
            .attr("d",usaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("USA") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Turkey = raster
            .append("g")
            .attr('transform', 'translate(848, 340)')
            .style('fill', 'red')
            .style('opacity',0);

            Turkey.append("path")
            .attr("d",turkeyCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Turkey.append("path")
            .attr("d",turkeyCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Turkey") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var SaudiArabia = raster
            .append("g")
            .attr('transform', 'translate(889, 396)')
            .style('fill', 'red')
            .style('opacity',0);


            SaudiArabia.append("path")
            .attr("d",saudiarabiaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            SaudiArabia.append("path")
            .attr("d",saudiarabiaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Saudi Arabia") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Uae = raster
            .append("g")
            .attr('transform', 'translate(973, 427)')
            .style('fill', 'red')
            .style('opacity',0);

            Uae.append("path")
            .attr("d",uaeCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Uae.append("path")
            .attr("d",uaeCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("United Arabian Emirates") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Pakistan = raster
            .append("g")
            .attr('transform', 'translate(1019, 369)')
            .style('fill', 'red')
            .style('opacity',0);

            Pakistan.append("path")
            .attr("d",pakistanCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Pakistan.append("path")
            .attr("d",pakistanCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Pakistan") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Indien = raster
            .append("g")
            .attr('transform', 'translate(1055, 378)')
            .style('fill', 'red')
            .style('opacity',0);

            Indien.append("path")
            .attr("d",indienCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Indien.append("path")
            .attr("d",indienCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("India") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var China = raster
            .append("g")
            .attr('transform', 'translate(1082, 270)')
            .style('fill', 'red')
            .style('opacity',0);

            China.append("path")
            .attr("d",chinaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            China.append("path")
            .attr("d",chinaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("China") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var SuedKorea = raster
            .append("g")
            .attr('transform', 'translate(1332, 361)')
            .style('fill', 'red')
            .style('opacity',0);

            SuedKorea.append("path")
            .attr("d",suedkoreaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            SuedKorea.append("path")
            .attr("d",suedkoreaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("South Korea") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Australia = raster
            .append("g")
            .attr('transform', 'translate(1266, 613)')
            .style('fill', 'red')
            .style('opacity',0);

            Australia.append("path")
            .attr("d",australiaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Australia.append("path")
            .attr("d",australiaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Australia") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);


//




var Syrien = g
  .append("g")
  .attr('transform', 'translate(893, 367)')
  .style('fill', '#ED1C24');

Syrien.append("circle")
  .attr("r", 30)
  .attr('transform', 'translate(10,10)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Syria") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Syrien.append("path")
.attr("d",syriaCountry)
.attr('transform', 'scale(0) ')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Syria") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);


var Irak = g
  .append("g")
  .attr('transform', 'translate(909, 366)')
  .style('fill', '#ED1C24');

Irak.append("circle")
  .attr("r", 7)
  .attr('transform', 'translate(25,25)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Irak") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Irak.append("path")
.attr("d", irakCountry)
.attr('transform', 'translate(26,20) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Irak") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Somalia = g
  .append("g")
  .attr('transform', 'translate(919, 499)')
  .style('fill', '#ED1C24');

Somalia.append("circle")
  .attr("r", 12)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Somalia") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Somalia.append("path")
.attr("d", somaliaCountry)
.attr('transform', 'translate(35,20) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Somalia") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Eritrea = g
  .append("g")
  .attr('transform', 'translate(897, 469)')
  .style('fill', '#ED1C24');

Eritrea.append("circle")
  .attr("r", 7)
  .attr('transform', 'translate(0,0)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Eritrea") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Eritrea.append("path")
.attr("d", eritreaCountry)
.attr('transform', 'scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Eritrea") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Sudan = g
  .append("g")
  .attr('transform', 'translate(827, 442)')
  .style('fill', '#ED1C24');

Sudan.append("circle")
  .attr("r", 9)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Sudan") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Sudan.append("path")
.attr("d", sudanCountry)
.attr('transform', 'translate(30,8) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Sudan") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Southsudan = g
  .append("g")
  .attr('transform', 'translate(834, 502)')
  .style('fill', '#ED1C24');

Southsudan.append("circle")
  .attr("r", 9)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("South Sudan") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Southsudan.append("path")
.attr("d", southsudanCountry)
.attr('transform', 'translate(30,14) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("South Sudan") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var ZentralafrikanischeRepublik = g
  .append("g")
  .attr('transform', 'translate(793, 504)')
  .style('fill', '#ED1C24');

ZentralafrikanischeRepublik.append("circle")
  .attr("r", 7.5)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Central African Republic") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

ZentralafrikanischeRepublik.append("path")
.attr("d", zentralafrikanischeRepublikCountry)
.attr('transform', 'translate(30,14) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").text("Central African Republic") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Congo = g
  .append("g")
  .attr('transform', 'translate(782, 532)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Congo") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Congo.append("circle")
  .attr("r", 8)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Congo") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Congo.append("path")
.attr("d", congoCountry)
.attr('transform', 'translate(31,6) scale(0)')
.on("mouseover", function(){return tooltip.style("visibility", "visible").text("Congo") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Afghanistan = g
  .append("g")
  .attr('transform', 'translate(1017, 361)')
  .style('fill', '#ED1C24');

Afghanistan.append("circle")
  .attr("r", 22)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Afghanistan") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Afghanistan.append("path")
.attr("d", afghanistanCountry)
.attr('transform', 'translate(31,6) scale(0)')
.on("mouseover", function(){return tooltip.style("visibility", "visible").text("Afghanistan") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Myanmar = g
  .append("g")
  .attr('transform', 'translate(1166, 416)')
  .style('fill', '#ED1C24');

Myanmar.append("circle")
  .attr("r", 8)
  .attr('transform', 'translate(24,45)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Myanmar") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Myanmar.append("path")
.attr("d", myanmarCountry)
.attr('transform', 'translate(28,36) scale(0)')
.on("mouseover", function(){return tooltip.style("visibility", "visible").text("Myanmar") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

    function showImport() {

          Usa
            .transition()
              .duration(500)
              .ease("linear")
              .style('opacity',1);

          Turkey
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);

          SaudiArabia
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);
          Uae
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);

          Pakistan
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);

          Indien
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);


          China
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);

          SuedKorea
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);

          Australia
          .transition()
            .duration(500)
            .ease("linear")
            .style('opacity',1);


          d3.selectAll('.titleImport1')
              .transition()
                .duration(50)
                .ease("linear")
                .style("opacity", 1);

          d3.selectAll('.titleImportBreak')
              .transition()
                .duration(50)
                .ease("linear")
                .style("opacity", 1);

          }


          function hideImport() {

            Usa
              .transition()
                .duration(200)
                .ease("linear")
                .style('opacity',0);

            Turkey
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            SaudiArabia
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            Uae
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            Pakistan
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            Indien
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            China
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            SuedKorea
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);

            Australia
            .transition()
              .duration(200)
              .ease("linear")
              .style('opacity',0);


            d3.selectAll('.titleImport1')
                .transition()
                  .duration(50)
                  .ease("linear")
                  .style("opacity", 0);

            d3.selectAll('.titleImportBreak')
                .transition()
                  .duration(50)
                  .ease("linear")
                  .style("opacity", 0);

          }

          hideImport();

          var controllerImport = new ScrollMagic.Controller();


          new ScrollMagic.Scene({
              triggerElement: '.triggerImport1', // the element to scroll inside
              triggerHook: 'onLeave', // set trigger to top
              duration: 20
            })
            .addTo(controllerImport)
  //          .addIndicators()
            .on("progress", function (h) {
              if(h.progress > 0) {
                showImport();
              }
              else {
                hideImport();
              }
            });


        function importZoom() {
          d3.selectAll('#vis1')
              .transition()
                .duration(50)
                .ease('linear')
                .style('opacity', 1);
        }

        function hideimportZoom() {
          d3.selectAll('#vis1')
               .transition()
                 .duration(50)
                 .ease('linear')
                 .style('opacity', 0);
        }

        hideimportZoom();

        var controllerImportZoom = new ScrollMagic.Controller();


        new ScrollMagic.Scene({
            triggerElement: '.triggerImportZoom', // the element to scroll inside
            triggerHook: 'onLeave', // set trigger to top
            duration: 20
          })
          .addTo(controllerImportZoom)
//          .addIndicators()
          .on("progress", function (j) {
            if(j.progress > 0) {
              importZoom();
              // document.getElementById('clickText').style.display = 'none';
              // document.getElementById('vis').style.opacity = 0;
            }
            else {
              hideimportZoom();
              document.getElementById('titleImport').style.display = 'block';
              // document.getElementById('titleImport1').style.display = 'block';
              // document.getElementById('titleImportBreak').style.display = 'block';
              document.getElementById('vis').style.opacity = 1;
              document.getElementById('legende').style.display = 'block';

            }
          });


  }
}
