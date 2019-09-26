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

   console.log(data);
    let labels = data.otu_ids.slice(0,10);
    let values = data.sample_values.slice(0,10);
    let hovertext = data.otu_labels.slice(0,10);

    let trace = [{
      values : values,
      labels : labels,
      type : "pie",
      textposition: "inside",
      hovertext : hovertext
    }];

    let layout = {
        title: "Belly button chart"
 

    
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
