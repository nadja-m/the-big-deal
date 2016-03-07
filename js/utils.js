function importPath(file, cb) {
  d3.xml(file, "image/svg+xml", function(xml) {
    cb(xml.documentElement.getElementsByTagName("path")[0].attributes.d.value);
  });
}


// Langsamer Scrollen

var nice = false;

$(document).ready(

  function() {

    nice = $("html").niceScroll({cursoropacitymax: '0', bouncescroll:'false'});

  }
);
