var projects = [
    // "project-autosurfer3",
    // "project-autosurfer2",
    // "project-autosurfer1",
    // "project-you-are-what-you-search",
    // "project-match",  
    // "project-seelevel",
    "project-mapping-hindu-iconography-in-paintings", 
    // "project-analyzing-american-political-apologies",
    // "project-walkways", 
    "project-aarati-services", 
    // "project-detecting-gender-bias-in-horror-films",
    "project-permutations", 
    "project-period-piece", 
    "project-flight-simulator-pins", 
    "project-faux-foliage",
    "project-stereoscopes",
    "project-encoding", 
    "project-kolam",
    "project-after-image-risograph-prints", 
    "project-after-image",
    "project-recollections-in-paper",
    "project-recollections-in-haldi-light",
    "project-ancestral-apparitions",
    "project-after-goya"
    ]


for (var i = projects.length - 1; i >= 0; i--) {
  var div = $('<div></div>');
  div.attr('id', projects[i]);
  div.addClass('holder')
  $('.projects-grid').append(div)
};
/* homepage find all projects */

for (var i = projects.length - 1; i >= 0; i--) {
  var slug = "https://api.are.na/v2/channels/" + projects[i];
  $.getJSON(slug, function(data) {
    var projectDiv = $('<a></a>');
    $(projectDiv).attr('href', "./project.html?project=" + data.slug)
    $(projectDiv).addClass('project');
var title = data.title.split('project ')[1];
    var titleSpan = $('<div></div>');
   
      $(titleSpan).addClass('label');
    $(titleSpan).text(title);
    $(projectDiv).append(titleSpan);
    var imgurls = []
    var text = []
    var titleImg = data.contents[0].image.original.url;
    for (var i = data.contents.length - 1; i >= 0; i--) {
      if(data.contents[i].image){
        imgurls.push(data.contents[i].image.original.url)
      }else{
        text.push(data.contents[i].content)
      }
    }
     var outer =$('<div></div>')
     outer.addClass('outer')
     imgurls.reverse()
    for (var i = 0; i <= imgurls.length - 1; i++) {
      if(i < 3){
      var image = $('<div></div>');
      var holder =$('<div></div>')
      holder.addClass('img-wrapper');
      $(image).addClass('image-container');
      $(image).css('background-image', "url(" + imgurls[i] + ")");
      $(holder).append(image)
      $(outer).append(holder)
      }
    }
    $(projectDiv).append(outer)

     var image = $('<div></div>');
    var descrip = $('<div></div>');
    descrip.html(text[0])

    
    
    

    
  


    

    $("#" + data.slug).append(projectDiv)

  });

};




if($(window).width() > 768){
    
  var canvas = document.getElementById('canvas');
  var view = paper.setup(canvas);

  $(document).on('mousemove', function(event){
    // new paper.text("*", event.pageX, event.pageY);
    var random = Math.floor((Math.random() * 50) + -50);
    var random1 = Math.floor((Math.random() * 50) + -50);
    var random2 = Math.floor((Math.random() * 50) + -50);
    var random4 = Math.floor((Math.random() * 50) + -50);
    if (random % 2 == 0) {
      var text = new paper.PointText(new paper.Point(event.pageX + random1, event.pageY + random2));
      text.justification = 'center';
      // text.fillColor = 'rgba(0, 0, 0, 1)';
      // if (random4 % 2 == 0) {
        text.fillColor = 'rgba(17, 17, 17, 1)';
      // }
      // text.fillColor = 'rgba(255, 255, 255, 1)';
      text.fontSize = "35px"
      text.content = '.';
      paper.view.draw()
    };

  })

  $('#my-name').on('mouseover', function(){
      $(this).text('ఆరతి అక్కపెద్ది')
  })

  $('#my-name').on('mouseout', function(){
      $(this).text('Aarati Akkapeddi')
  })
}

