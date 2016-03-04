function importPath(file, cb) {
  d3.xml(file, "image/svg+xml", function(xml) {
    console.log("loaded path");
    cb(xml.documentElement.getElementsByTagName("path")[0].attributes.d.value);
  });
}
