$(document).ready(function() {
  
  // get box count
  var count = 0;
  var checked = 0;
  function countBoxes() { 
    count = $(".data input[type='checkbox']").length;
    console.log(count);
  }
  
  countBoxes();
  $(":checkbox").click(countBoxes);
  
  // count checks
  
  function countChecked() {
    checked = $(".data input:checked").length;
    
    var percentage = parseInt(((checked / count) * 100),10);
    $(".progressbar-bar").progressbar({
      value: percentage,
      orientation: 'vertical'
    });
  }
  
  countChecked();
  $(":checkbox").click(countChecked);

  $(".data input[type=checkbox]").click(function() {
    var selectedDays = "";
    var tempArray = []
    $("input:checked").each(function() {
      var name = $(this).val();
      tempArray.push(name);
    });
    selectedDays = tempArray.join("\r\n");

    $(".summary").text(selectedDays);
  });
});

  
$(function() {
	// Iterate throw all the progressbars to initialize them and bind the change event to the function that asigns the color depending on the value
  $( ".progressbar-bar" ).each(function(i, obj) {
        $( this ).progressbar();
		$( this ).bind('progressbarchange', function(event, ui) {
        updateColor( this );
    });
  });
});

// this function asigns color depending on value
function updateColor( progressBar ) {
    var value = $( progressBar ).progressbar("value");
    if ( value > 80 ) {
      progressColor = "#9d1f1f";
    } else if (value > 60) {
      progressColor = "#eb8100";
    } else if (value > 25) {
      progressColor = "#1892c9";
    } else {
      progressColor = "#1a6aa6";
    }
    $( progressBar ).find(".ui-progressbar-value").css("background", progressColor);
}