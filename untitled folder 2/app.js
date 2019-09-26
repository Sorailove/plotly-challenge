function buildMetadata(sample) {
    var metadataSelect = d3.select('#sample-metadata');
    d3.json('/metadata/${sample}').then( data =>{
        metadataSelect.html("");
        console.log(Object.entries(data));
        Object.entries(data).forEach(([key, value]) =>{
            metadataSelect
            .append('p').text('${key} : ${value}')
            .append('hr')
    });
    })

}

function buildCharts(sample) {

    @app.route("/")
def index():
    return render_template('index.html')
 

    
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();