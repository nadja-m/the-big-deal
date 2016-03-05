$(function() {
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

  new ScrollMagic.Scene({
    triggerElement: '.triggerExport2', // the element to scroll inside
    triggerHook: 'onLeave', // set trigger to top
    duration: 20
  })
  .addTo(controller)
  .addIndicators()
  .on("progress", function (e) {
    if(e.progress > 0) {
      showGraph();
    }
    else {
      hideGraph();
    }
  });

  new ScrollMagic.Scene({
    triggerElement: '.triggerTitleExport2', // the element to scroll inside
    triggerHook: 'onLeave', // set trigger to top
    duration: 700
  })
  .setPin(".titleExport2")
  .addIndicators()
  .addTo(controller)
});

$(function(){
  d3.xml("img/world_map.svg", "image/svg+xml", function(xml) {
    document.getElementById("export-div").appendChild(xml.documentElement);

    d3.xml("img/export_countrys_v5.svg", "image/svg+xml", function(xml) {
      document.getElementById("export-div").appendChild(xml.documentElement);

      start();
    });
  });

  function start() {
    $('.popupcloser').click(function(){
      closeall();
    });

    $("#export-div path").each(function(){
      var el = $(this);
      var id = el.data("id")

      if(id) {
        el.click(function(){
          openWindow(id);
        });

        el.on('mouseover', function(){
          showTooltip(id);
        });

        el.on('mouseout', function(){
          hideTooltip();
        });
      }
    });
  }

  var data = {
    "russia": 51,
    "usa": 76,
    "uk": 29,
    "france": 16,
    "germany": 11,
    "spain": 387,
    "ukraine": 418,
    "china": 7,
    "switzerland": 11,
    "italy": 17
  }

  var max = [24, 40, 60, 72, 90, 90, 90] // seven circles

  window.onmousemove = function(e) {
    var tooltipSpan = document.getElementById('export-tooltip');
    var x = e.clientX, y = e.clientY;
    tooltipSpan.style.top = (y - 10) + 'px';
    tooltipSpan.style.left = (x + 10) + 'px';
  }

  function showTooltip(country){
    var tooltip = document.getElementById('export-tooltip');
    tooltip.innerHTML = country;
    tooltip.style.display = 'block';
  }

  function hideTooltip(){
    document.getElementById('export-tooltip').style.display = 'none';
  }

  function openWindow(country){
    $('#popup, #xButton, #' + country).css('display', 'block');
    drawGuns(country, data[country]);
  }

  function closeall(){
    $('#popup, #xButton, #russia, #usa, #uk, #france, #germany, #spain, #ukraine, #ukraine, #switzerland, #italy, #china').css('display', 'none');
  }

  function aufteilen(num) {
    var total = num;
    var slices = [];

    for(var i=0; i<7; i++) {
      var m = max[i];
      if(total > m) {
        slices.push(m);
        total = total - m;
      } else {
        slices.push(total);
        break;
      }
    }

    return slices;
  }

  function kreisNeu(akCount, akId, klass, origin, circles){
    circles.selectAll('.' + klass + akId)
      .data(new Array(1))
      .enter()
        .append('img')
          .attr('class', klass)
          .attr('id', akId)
          .attr('src', 'img/ak47.svg')
          .attr('width', 32)
          .style('-webkit-transform-origin', origin)
          .style('-webkit-transform', function(d, i){
            return 'rotate(' + 360 / akCount * akId + 'deg)'
          });
  }

  var akTimeout = 10;

  function createDrawFunction(circles, i, akCount, akId) {
    return function() {setTimeout(function(){
      kreisNeu(akCount, akId, "ak47_" + (i + 1), '50% ' + (200 + (i * 100)) +'% 0', circles);
    },
    akTimeout * akId);
  }};

  function asyncDraw(slices, circles, remaining) {
    if (remaining > 0) {
      var i = slices.length - remaining;
      var akCount = slices[i];
      for (akId = 0; akId < akCount; akId++) {
        createDrawFunction(circles, i, akCount, akId)();
      }
      setTimeout(function() {asyncDraw(slices, circles, remaining-1)}, akTimeout * akCount);
    }
  }

  function drawGuns(country, guns){
    var circles = d3.select('#' + country + '> .circles');
    var slices = aufteilen(guns);
    asyncDraw(slices, circles, slices.length);
  }
});
