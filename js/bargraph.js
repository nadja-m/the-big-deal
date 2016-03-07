$(function(){
   var chartWidth = window.innerWidth;
   var chartHeight = window.innerHeight;

   var x = d3.scale.ordinal()
        .rangeRoundBands([0, chartWidth], 0.001);

   var y = d3.scale.linear()
        .range([chartHeight, 1]);

   var tooltip = d3.select(".export1")
       .append("div")
       .attr("class", "tooltip");


  function MouseMoveBars(){
        return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
        }

  function MouseOutBars() {
        return tooltip.style("visibility", "hidden");
        }


    var svg = d3.select(".section.export1").append("svg")
       .attr("width", chartWidth)
       .attr("height", chartHeight)
       .append("g")
         .attr("transform", "translate");

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
               .on("mouseover", function(d){return tooltip.style("visibility", "visible").html(d.Country + "<br>" + d.Export + "Mio $")})
               .on("mousemove", MouseMoveBars)
               .on("mouseout", MouseOutBars);




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
});
