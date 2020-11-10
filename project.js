var slug = window.location.href.split('project=')[1];

if (slug) {
	slug = "https://api.are.na/v2/channels/" + slug+"?per=100";
  $.getJSON(slug, function(data) {

  	console.log(data)
    var title = data.title.split('project ')[1];

    var title = $("<h1></h1>").text(title);
    $(title).addClass('project-title')
    $('.project-container').append(title);
  	for (var i = data.contents.length - 1; i > 2; i--) {
  		//create block
    	var block = data.contents[i];
      var blockDiv = $('<div></div>');
    	blockDiv.addClass('block')
      var description = $('<div></div>');
      description.addClass('description')
      $(description).html(block.description_html)

      


    	if (block.class == "Text") {
      //handle text "Image", "Text", "Link", "Media", or "Attachment"
	      blockDiv.addClass('text');
        console.log('text')
	      blockDiv.html(block.content)

       } else if (block.class == "Image"){
          blockDiv.addClass('image');
          var image = $('<img></img>');
          $(image).attr('src', block.image.original.url);
          // debugger
          blockDiv.append(image)
        } else if (block.class == "Link"){
            blockDiv.addClass('link');
            var link = $('<a></a>');
            link.attr('href',block.source.url);
            var image = $('<img></img>');
            image.attr('src',block.image.display.url)
            $(link).append(image)
            blockDiv.append(link)
           } else if (block.class == "Media"){

							blockDiv.addClass('media');
           		if (block.embed.type == "video") {
           			var source = block.source.url.split('vimeo.com/')[1]
           			blockDiv.html('<iframe class="vimeo" src="https://player.vimeo.com/video/' + source + '?autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
           		}else{
              	blockDiv.html(block.embed.html)
           		}
              // blockDiv.addClass('media');
              // blockDiv.html(block.embed.html)
              // $(blockDiv).find('iframe').attr('src', )

             // var newSrc =  $(blockDiv).find('iframe').attr('src') + "?autoplay=1&loop=1&title=0&byline=0&portrait=0"
          
             	// $(blockDiv).find('iframe').attr('src', newSrc)
             } else if (block.class == "Attachment"){
                blockDiv.addClass('attachment');
                  var video = $('<video />', {
                    id: 'video',
                    src: block.attachment.url,
                    type: 'video/mp4',
                    controls: true
                });
              }


		$(blockDiv).append(description);
     $('.project-container').append(blockDiv);


  	};
  
  });
};
if($(window).width() > 768){
    

$('#my-name').on('mouseover', function(){
    $(this).text('ఆరతి అక్కపెద్ది')
})

$('#my-name').on('mouseout', function(){
    $(this).text('Aarati Akkapeddi')
})


var canvas = document.getElementById('canvas');
var view = paper.setup(canvas);

$(document).on('mousemove', function(event){
  // new paper.text("*", event.pageX, event.pageY);
  var random = Math.floor((Math.random() * 50) + -50);
  var random1 = Math.floor((Math.random() * 50) + -50);
  var random2 = Math.floor((Math.random() * 50) + -50);
  if (random % 2 == 0) {
    var text = new paper.PointText(new paper.Point(event.pageX + random1, event.pageY + random2));
    text.justification = 'center';
    text.fillColor = 'rgba(0, 0, 0, 1)';
    // text.fillColor = 'rgba(255, 255, 255, 1)';
    text.fontSize = "35px"
    text.content = '.';
    paper.view.draw()
  };

})
}