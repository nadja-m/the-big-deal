d3.xml("img/world_map.svg", "image/svg+xml", function(xml) {
      document.getElementById("export-div").appendChild(xml.documentElement);
    });

d3.xml("img/export_countrys_v5.svg", "image/svg+xml", function(xml) {
              document.getElementById("export-div").appendChild(xml.documentElement);
            });


var data = {
  "russia" : 51,
  "usa" : 76,
  "uk" : 29,
  "france" : 16,
  "germany" : 11,
  "spain" : 387,
  "ukraine" : 418,
  "china" : 7,
  "swiss" : 11,
  "italy" : 17
}

function showTooltip(country){
  var tooltip = document.getElementById('export-tooltip');
  tooltip.innerHTML = country;
  tooltip.style.display = 'block';
}
window.onmousemove = function(e) {
  var tooltipSpan = document.getElementById('export-tooltip');
  var x = e.clientX, y = e.clientY;
  tooltipSpan.style.top = (y - 10) + 'px';
  tooltipSpan.style.left = (x + 10) + 'px';
}

function hideTooltip(){
  document.getElementById('export-tooltip').style.display = 'none';
}

function openWindow(country){
 console.log(country)
 document.getElementById('popup').style.display = 'block';
 document.getElementById('xButton').style.display = 'block';
 document.getElementById(country).style.display = 'block';
 drawGuns(country, data[country]);
}


function closeall(){
  document.getElementById('popup').style.display = 'none';
  document.getElementById('xButton').style.display = 'none';
  document.getElementById('russia').style.display = 'none';
  document.getElementById('usa').style.display = 'none';
  document.getElementById('uk').style.display = 'none';
  document.getElementById('france').style.display = 'none';
  document.getElementById('germany').style.display = 'none';
  document.getElementById('spain').style.display = 'none';
  document.getElementById('ukraine').style.display = 'none';
  document.getElementById('china').style.display = 'none';
  document.getElementById('swiss').style.display = 'none';
  document.getElementById('italy').style.display = 'none';

}


var max = [24, 40, 60, 72, 90, 90, 90] // seven circles


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


function drawAK(slice, klass, origin, circles) {

}



function kreisNeu(akCount, akId, klass, origin, circles){
  console.log(akCount +  "  " + akId);
  circles.selectAll('.' + klass + akId)
    .data(new Array(1))
    .enter()
      .append('img')
        .attr('class', klass)
        .attr('id', akId)
        .attr('src', 'img/ak47.svg')
        .attr('width', 32     )
        .style('-webkit-transform-origin', origin)
        .style('-webkit-transform', function(d, i){
          return 'rotate(' + 360 / akCount * akId + 'deg)'
        });
}

var akTimeout = 10;

function createDrawFunction(circles, i, akCount, akId) {
  return function() {setTimeout(function(){
    console.log("akId: "+ akId);
    kreisNeu(akCount, akId, "ak47_" + (i + 1), '50% ' + (200 + (i * 100)) +'% 0', circles);
    console.log("draw: ak47_" + (i + 1))},
    akTimeout * akId);
}};
function asyncDraw(slices, circles, remaining) {
  if (remaining > 0) {
    var i = slices.length - remaining;
    console.log(slices[i]);
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
