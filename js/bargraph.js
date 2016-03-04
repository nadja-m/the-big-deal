$(function(){
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


      //  var controller2 = new ScrollMagic.Controller();

      controller = new ScrollMagic.Controller();

       new ScrollMagic.Scene({
           triggerElement: '.triggerExport1', // the element to scroll inside
           triggerHook: 'onLeave', // set trigger to top
           duration: 20
         })
         .addTo(controller)
         .addIndicators()
         .on("progress", function (e) {
           if(e.progress > 0) {
             dropsFall();
           } else {
             dropsRise();
           }
         });

      new ScrollMagic.Scene({
          triggerElement: '.triggerTitleExport', // the element to scroll inside
          triggerHook: 'onLeave', // set trigger to top
          duration: 400
        })
        .setPin(".titleExport")
        .addIndicators()
        .addTo(controller)
});
