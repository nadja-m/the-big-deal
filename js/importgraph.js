$(function(){
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

  // die folgende Funktion war im Main, ha aber wahrscheinich nicht funktioniert

  var ww = $(window).width();
  var wh = $(window).height();

  var svg = d3.select("#vis").append("svg")
    .attr("width", ww)
    .attr("height", wh)
    .attr("viewBox", "0 0 1516 850")             //über die Viewbox kann man das SVG in ein neues Koordinatensystems setzen ohne, dass das Koordinatensystem des svgs verändert wird.
    .attr("preserveAspectRatio", "xMinYMin");

  $(window).resize(function(){
    svg
      .attr("width", $(window).width())
      .attr("height", $(window).height());
  });


  var tooltip_2 = d3.select("#vis")
      	.append("div")
        .attr("class", "tooltip_2");

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

  new ScrollMagic.Scene({
      triggerElement: '.triggerImportTitle', // the element to scroll inside
      triggerHook: 'onLeave', // set trigger to top
      duration: 600
    })
    .setPin(".titleImport")
    .addTo(controller)
    // .addIndicators();


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

      // var country = raster;
      //     function addCountry(countryName, posX, posY, countryNameHover, importNUmber) {
      //       country
      //         .append("g")
      //           .attr('transform', 'translate(posX + ',' + posY)')
      //           .style('fill', 'red')
      //           .style('opacity',0)
      //
      //         country.append("path")
      //           .attr("d", countryName)
      //           .attr('transform', 'scale(1) ')
      //           .style("fill", 'red')
      //
      //         country.append("path")
      //           .attr("d",countryName)
      //           .attr('transform', 'scale(1) ')
      //           .attr('fill', 'url(#diagonalHatch)')
      //           .style('stroke', '#F6EAA4')
      //           .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html(countryNameHover +  "<br>" + importNumber + "Mio $") ;})
      //           .on("mousemove", MouseMove)
      //           .on("mouseout", MouseOut);
      //     }


          // addCountry(usaCountry, '112', '294', 'USA', '581');
          // addCountry(Turkey, ,848 ,340, )

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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("USA <br> 581 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Turkey <br> 1550 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Saudi Arabia <br> 2629 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("UAE <br> 1031 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Pakistan <br> 659 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("India <br> 4243 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("China <br> 1357 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("South Korea <br> 530 Mio $").attr("class", "tooltip_2")  ;})
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
            .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Australia <br> 842 Mio $").attr("class", "tooltip_2")  ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);





var Syrien = g
  .append("g")
  .attr('transform', 'translate(893, 367)')
  .style('fill', '#ED1C24');

Syrien.append("circle")
  .attr("r", 30)
  .attr('transform', 'translate(10,10)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Syria <br> 3.8 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Syrien.append("path")
.attr("d",syriaCountry)
.attr('transform', 'scale(0) ')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Syria <br> 3.8 Mio Refugees").attr("class", "refugees")  ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Irak <br> 0.3 Mio Refugees").attr("class", "refugees")  ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);


Irak.append("path")
.attr("d", irakCountry)
.attr('transform', 'translate(26,20) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Irak <br> 0.3 Mio Refugees").attr("class", "refugees")  ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Somalia <br> 1.1 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Somalia.append("path")
.attr("d", somaliaCountry)
.attr('transform', 'translate(35,20) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Somalia <br> 1.1 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Eritrea <br> 0.3 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Eritrea.append("path")
.attr("d", eritreaCountry)
.attr('transform', 'scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Eritrea <br> 0.3 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Sudan <br> 0.6 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Sudan.append("path")
.attr("d", sudanCountry)
.attr('transform', 'translate(30,8) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Sudan <br> 0.6 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("South Sudan <br> 0.6 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Southsudan.append("path")
.attr("d", southsudanCountry)
.attr('transform', 'translate(30,14) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("South Sudan <br> 0.6 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Central African Republic <br> 0.4 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

ZentralafrikanischeRepublik.append("path")
.attr("d", zentralafrikanischeRepublikCountry)
.attr('transform', 'translate(30,14) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Central African Republic <br> 0.4 Mio Refugees").attr("class", "refugees") ;})
.on("mousemove", MouseMove)
.on("mouseout", MouseOut);

var Congo = g
  .append("g")
  .attr('transform', 'translate(782, 532)')
  .style('fill', '#ED1C24');

Congo.append("circle")
  .attr("r", 8)
  .attr('transform', 'translate(39,13)')
  .style('fill', '#ED1C24')
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Congo <br> 0.5 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Congo.append("path")
.attr("d", congoCountry)
.attr('transform', 'translate(31,6) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Congo <br> 0.5 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Afghanistan <br> 2.6 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Afghanistan.append("path")
.attr("d", afghanistanCountry)
.attr('transform', 'translate(31,6) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Afghanistan <br> 2.6 Mio Refugees").attr("class", "refugees") ;})
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
  .on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Myanmar <br> 0.5 Mio Refugees").attr("class", "refugees") ;})
  .on("mousemove", MouseMove)
  .on("mouseout", MouseOut);

Myanmar.append("path")
.attr("d", myanmarCountry)
.attr('transform', 'translate(28,36) scale(0)')
.on("mouseover", function(){return tooltip_2.style("visibility", "visible").html("Myanmar <br> 0.5 Mio Refugees").attr("class", "refugees") ;})
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

          new ScrollMagic.Scene({
              triggerElement: '.triggerImport1', // the element to scroll inside
              triggerHook: 'onLeave', // set trigger to top
              duration: 20
            })
            .addTo(controller)
          //  .addIndicators()
            .on("progress", function (h) {
              if(h.progress > 0) {
                showImport();
              }
              else {
                hideImport();
              }
            });


        function importZoom() {

          g
            .transition()
            .duration(1500)
            .ease("linear")
            .attr('transform', 'scale(2.2) translate(-700, -270)');

          Syrien.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Syrien.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 12.5)
            .attr("transform", "translate(10,10) scale(0)")
            .style('stroke', '#F6EAA4');

          Irak.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Irak.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Somalia.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Somalia.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Eritrea.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Eritrea.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Sudan.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Sudan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Southsudan.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Southsudan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          ZentralafrikanischeRepublik.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          ZentralafrikanischeRepublik.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Congo.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Congo.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Afghanistan.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Afghanistan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');

          Myanmar.select("path")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("transform", "scale(1)")
            .style('stroke', '#F6EAA4');

          Myanmar.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 1)
            .attr("transform", "translate(20, 20) scale(0)")
            .style('stroke', '#F6EAA4');
        }

      function hideimportZoom() {

        g
          .transition()
          .duration(1500)
          .ease("linear")
          .attr('transform', 'scale(1)');

        Syrien.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');


        Irak.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Somalia.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Eritrea.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Sudan.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Southsudan.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        ZentralafrikanischeRepublik.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Congo.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Afghanistan.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');

        Myanmar.select("path")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("transform", "scale(0)")
          .style('stroke', '#F6EAA4');
        }

        function hideimportZoomCircles() {

          Syrien.select("circle")
          .transition()
          .duration(1700)
          .ease("linear")
          .attr("r", 30)
          .attr("transform", "translate(10,10)")
          .style('stroke', '#ED1C24');

          Irak.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 7)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Somalia.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 12)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Eritrea.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 7)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Sudan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 9)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Southsudan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 9)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          ZentralafrikanischeRepublik.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 7.5)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Congo.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 8)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Afghanistan.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 22)
            .attr("transform", "translate(20, 20)")
            .style('stroke', '#ED1C24');

          Myanmar.select("circle")
            .transition()
            .duration(1700)
            .ease("linear")
            .attr("r", 8)
            .attr('transform', 'translate(24,45)')
            .style('fill', '#ED1C24')
            .style('stroke', '#ED1C24');

        }

        hideimportZoom();

          var scene = new ScrollMagic.Scene({
            triggerElement: ".triggerImportZoom",
            triggerHook: 'onLeave', // set trigger to top
            duration: 20
          })
  					.addTo(controller)
  					// .addIndicators() // add indicators (requires plugin)
              .on("progress", function (e) {
                if(e.progress > 0) {
              importZoom();
                document.getElementById('titleImport').style.display = 'none';
                document.getElementById('legende1').style.display = 'none';
                document.getElementById('legende2').style.display = 'none';
              } else {
                hideimportZoom();
                hideimportZoomCircles();
                document.getElementById('titleImport').style.display = 'block';
                document.getElementById('legende1').style.display = 'block';
                document.getElementById('legende2').style.display = 'block';
              }
  					});


  }
});
