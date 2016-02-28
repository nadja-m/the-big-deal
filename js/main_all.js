$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


	//show scroller after some time
	$('.scroller').delay(2000).fadeIn();

});




function importPath(file, cb) {
  d3.xml(file, "image/svg+xml", function(xml) {
    console.log("loaded path");
    cb(xml.documentElement.getElementsByTagName("path")[0].attributes.d.value);
  });
}

function main_all() {
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

  var svg = d3.select("#vis1").append("svg")
    .attr("viewBox", "0 0 " + ww + " " + wh)
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("width", ww)
    .attr("height", wh);

  $(window).resize(function(){
    svg
      .attr("width", $(window).width())
      .attr("height", $(window).height());
  });

  var tooltip = d3.select("#vis1")
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
        .style("visibility", "hidden")


  function MouseMove(){
          return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
        }

  function MouseOut() {
          return tooltip.style("visibility", "hidden");
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

  function drawVis() {

    	svg
        .append("g")
          .attr("transform","translate(1000,742)")
          .append("text")
        .text("click me to zoom")
          .on("click", click)
          .style("opacity", 0.5)
          .style('fill', 'red')
          .style('cursor', 'pointer')
          .style('font-family', 'lft-etica', 'sans-serif')
          .style('font-weight', '600');


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
          .attr('width', 4)
          .attr('height', 4)
        .append('path')
          .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
          .attr('stroke', '#F6EAA4')
          .attr('stroke-width', 1);

          var Usa = raster
            .append("g")
            .attr('transform', 'translate(112, 294)')
            .style('fill', 'red');

            Usa.append("path")
            .attr("d",usaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Usa.append("path")
            .attr("d",usaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Usa") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Turkey = raster
            .append("g")
            .attr('transform', 'translate(848, 340)')
            .style('fill', 'red');

            Turkey.append("path")
            .attr("d",turkeyCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Turkey.append("path")
            .attr("d",turkeyCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Turkey") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var SaudiArabia = raster
            .append("g")
            .attr('transform', 'translate(889, 396)')
            .style('fill', 'red');

            SaudiArabia.append("path")
            .attr("d",saudiarabiaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            SaudiArabia.append("path")
            .attr("d",saudiarabiaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Saudi Arabia") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Uae = raster
            .append("g")
            .attr('transform', 'translate(973, 427)')
            .style('fill', 'red');

            Uae.append("path")
            .attr("d",uaeCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Uae.append("path")
            .attr("d",uaeCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("United Arab Emirates") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Pakistan = raster
            .append("g")
            .attr('transform', 'translate(1019, 369)')
            .style('fill', 'red');

            Pakistan.append("path")
            .attr("d",pakistanCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Pakistan.append("path")
            .attr("d",pakistanCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Pakistan") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);



          var Indien = raster
            .append("g")
            .attr('transform', 'translate(1055, 378)')
            .style('fill', 'red');


            Indien.append("path")
            .attr("d",indienCountry)
            .attr('transform', 'scale(1) ')
            .append("div")
            .style("fill", 'red')


            Indien.append("path")
            .attr("d",indienCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("India") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var China = raster
            .append("g")
            .attr('transform', 'translate(1082, 270)')
            .style('fill', 'red');

            China.append("path")
            .attr("d",chinaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            China.append("path")
            .attr("d",chinaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("China") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut)


          var SuedKorea = raster
            .append("g")
            .attr('transform', 'translate(1332, 361)')
            .style('fill', 'red');

            SuedKorea.append("path")
            .attr("d",suedkoreaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            SuedKorea.append("path")
            .attr("d",suedkoreaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("South korea") ;})
            .on("mousemove", MouseMove)
            .on("mouseout", MouseOut);

          var Australia = raster
            .append("g")
            .attr('transform', 'translate(1266, 613)')
            .style('fill', 'red');

            Australia.append("path")
            .attr("d",australiaCountry)
            .attr('transform', 'scale(1) ')
            .style("fill", 'red');

            Australia.append("path")
            .attr("d",australiaCountry)
            .attr('transform', 'scale(1) ')
            .attr('fill', 'url(#diagonalHatch)')
            .style('stroke', '#F6EAA4')
            .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Australia") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Syria") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Syrien.append("path")
        .attr("d",syriaCountry)
        .attr('transform', 'scale(0) ')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Syria") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Irak") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Irak.append("path")
        .attr("d", irakCountry)
        .attr('transform', 'translate(26,20) scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Irak") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Somalia") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Somalia.append("path")
        .attr("d", somaliaCountry)
        .attr('transform', 'translate(35,20) scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Somalia") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        var Eritrea = g
        .append("g")
        .attr('transform', 'translate(897, 469)')
        .style('fill', '#ED1C24')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Eritrea") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Eritrea.append("circle")
        .attr("r", 7)
        .attr('transform', 'translate(0,0)')
        .style('fill', '#ED1C24')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Eritrea") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Eritrea.append("path")
        .attr("d", eritreaCountry)
        .attr('transform', 'scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Eritrea") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Sudan") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Sudan.append("path")
        .attr("d", sudanCountry)
        .attr('transform', 'translate(30,8) scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Sudan") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("South Sudan") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        Southsudan.append("path")
        .attr("d", southsudanCountry)
        .attr('transform', 'translate(30,14) scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("South Sudan") ;})
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
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Central African Republic") ;})
        .on("mousemove", MouseMove)
        .on("mouseout", MouseOut);

        ZentralafrikanischeRepublik.append("path")
        .attr("d", zentralafrikanischeRepublikCountry)
        .attr('transform', 'translate(30,14) scale(0)')
        .on("mouseover", function(){return tooltip.style("visibility", "visible").text("Central African Republic") ;})
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


        function click(d){
          var a = this;
          var b = d;
          d3.event.preventDefault();

          document.getElementById('titleImport').style.display = 'none';
          document.getElementById('titleImport1').style.display = 'none';
          document.getElementById('titleImportBreak').style.display = 'none';
          document.getElementById('vis').style.opacity = 0;
          document.getElementById('legende').style.display = 'none';

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

    // function click(o){
    //   var n = this;
    //   var m = o;
    //   d3.event.preventDefault();
    //
    //   document.getElementById('titleImport').style.display = 'block';
    //   document.getElementById('titleImport1').style.display = 'block';
    //   document.getElementById('titleImportBreak').style.display = 'block';
    //   document.getElementById('vis').style.opacity = 1;
    //   document.getElementById('legende').style.display = 'block';
    // }

  }

}
