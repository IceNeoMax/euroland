$(document).ready(function() {

    $('.box-item').draggable({
        cursor: 'move',
        helper: "clone"
    });
    
    $('#todoadd').keypress(function (e) {
        var numtemp = Math.floor(Math.random()*1000000);
      if (e.which == 13) {
        var text = $('#todoadd').val();
        var divx = $("<div itemid=itm-"+numtemp+" class='btn btn-default box-item'/></div>").text(text);
          $('#container2').append(divx);
          $( "#container2" ).droppable();
          $( "#container1, #container2, #container3" ).sortable({
          connectWith: ".connectedSortable"
        }).disableSelection();
          this.value = "";
      }
        
    });
    
    
    
    
//connect drag and drop 3 column
  $("#container1").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container1");
            $("#container1").find(".btn").attr("disabled",false);
        }
      });
    }
  });

  $("#container2").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container2");            $("#container2").find(".btn").attr("disabled",false);
        }
      });
    }
  });

    $("#container3").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container3");           $("#container3").find(".btn").attr("disabled","disabled");
        }
      });
    }
  });

});