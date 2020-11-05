var period;
var cycle_days;
var stop = false;
var cycle_days_indexed = {};
var canvas = document.getElementById('myCanvas');
var view = paper.setup(canvas);
var start = false;
var toggleX = false;
var x;
var placement = 100;
var toMultiply = 1;

function GetFormattedDate(string) {
    var date = new Date(string);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()
}


// $('#date-range').html(GetFormattedDate(new Date('2016-02-02T10:20:30Z')) + " - " + GetFormattedDate(new Date(cycle_days[cycle_days.length - 1].day)))



function startCycle(){
    cycle_days = period.data;
    /* This stuff is for filling in the days i didn't enter data */
    for (var i = 0; i <= cycle_days.length - 1; i++) {
    	cycle_days_indexed[new Date(cycle_days[i].day).toDateString()] = cycle_days[i];
    };
    function getAllDays(start_date, end_date) {
        var array = [];
        while(start_date < end_date) {
            array.push(start_date);
            start_date = new Date(start_date.setDate(
                start_date.getDate() + 1
            ))
        }
        return array;
    };
    var all_days = getAllDays(new Date('2016-02-02T10:20:30Z'), new Date(cycle_days[cycle_days.length - 1].day));
    /* Cycle through all the days? map array to days. if no day, empty?*/


    var final_array = [];
    for (var i = 0; i <= all_days.length - 1; i++) {
    	if(cycle_days_indexed[all_days[i].toDateString()] == undefined){
    		final_array.push([all_days[i],null]);
    	} else{
    		final_array.push([new Date(cycle_days_indexed[all_days[i].toDateString()].day), cycle_days_indexed[all_days[i].toDateString()]]);
    	}
    };
    var chorus = new Tone.Chebyshev(50);
    // var osc = new Tone.AMOscillator({
    //             "frequency" : 1000,
    //             "volume" : -20
    //         }).toMaster().connect(chorus).start();
     var osc = new Tone.PolySynth(4, Tone.DuoSynth).connect(chorus).toMaster();
     // osc.phase = 10;
     // osc.type = "sine"
     // osc.count = 3

    var synth = new Tone.PolySynth(4, Tone.DuoSynth).connect(chorus).toMaster();
    synth.volume.value = -20;



    // The amount of segment points we want to create:
    var amount = final_array.length;

    // The maximum height of the wave:
    var height = 100;

    // Create a new path and style it:
    var path = new paper.Path(0,0);

    
    path.strokeColor = 'rgba(0,0,0,0)';




    var lineHeight = 10;
    var character = "."
    var i = 0, l = final_array.length;
    (function iterator() {

     
    

        $('#date').text(GetFormattedDate(final_array[i][0]));
        synth.triggerAttackRelease(180, "8n"); 
        if (final_array[i][1]) {

            if (final_array[i][1].period == "medium") {
                osc.triggerAttackRelease(200, "8n");
                if (i % 2 == 0) {
    
                };
                $("#description").text("menstruating");
                lineHeight = 400;
                character = "-"
            } else if (final_array[i][1].period == "heavy") {
                osc.triggerAttackRelease(150, "8n");
                if (i % 2 == 0) {

                }
                $("#description").text("menstruating");

                lineHeight = 600;
                character = "^"
            } else if (final_array[i][1].period == "light") {
                osc.triggerAttackRelease(250, "8n");
                if (i % 2 == 0) {

                }
                $("#description").text("menstruating");

                lineHeight = 200;
                character = "*"
            } else if (final_array[i][1].period == "spotting") {
                osc.triggerAttackRelease(300, "8n");
                if (i % 2 == 0) {

                }
                $("#description").text("menstruating");

                lineHeight = 100;
                character = ":"
            } else if((final_array[i][1].mood == "pms" || "sad" || "sensitive") || (final_array[i][1].mood["sad"] || final_array[i][1].mood["sensitive"] || final_array[i][1].mood["pms"])){
                osc.triggerAttackRelease(220, "8n");
                if (i % 2 == 0) {

                }
               $("#description").text("sad/pms");

               lineHeight = 100;
               character = "`"
                // console.log('sad')
            }  else if(final_array[i].mood == "happy" || final_array[i].mood["happy"]){
                osc.triggerAttackRelease(100, "8n");
                if (i % 2 == 0) {

                }
                $("#description").text("happy");

                lineHeight = 10;
                character = "+"
            } else{
                $("#description").text("not menstruating");

                lineHeight = 10;
                character = "."
            }
        }else{
           osc.triggerAttackRelease(100, "8n"); 
           if (i % 2 == 0) {

            }
            $("#description").text("not menstruating");

            lineHeight = 10;
            character = "."

        } 
      
        path.add(new paper.Point((i / amount) * $('#myCanvas').width(), lineHeight)); 
        path.smooth({ type: 'continuous' });

        

        if(i % 30 == 0){
            placement = placement + 35;
            toggleX = true;
            toMultiply = Math.floor(i/30);
        }

        if(toggleX == false){
            x = i;
        } else{
            x = i - (30 * toMultiply);
        }
        var current = $('#zoetrope').html()
        $('#zoetrope').html(current + " " + character)
        window.scrollBy(40, 0);
        // var text = new paper.PointText(new paper.Point((x / 30) * $('#myCanvas').width(), placement));
        //     text.justification = 'center';
        //     text.fillColor = 'white';
        //     text.fontSize = "40px"
        //     text.content = character;
        if(++i<l && stop == false) {
            setTimeout(iterator, 150);
        } else {
            osc.stop()
            $("#start").text('reset');
        }

      

    })();


    path.smooth()
    paper.view.draw()



}


var playing = false;

// $('#start').on('click', function(){
//     if (playing == false) {
//       startCycle();
//       playing = true;
//       $(this).text('stop');
//     } else{
//         location.reload();
//     }
    
// })

$(window).bind('keypress', function(e) {

 var code = e.keyCode || e.which;
 console.log(code)
 if(code == 99) { //Enter keycode
   period = chelsea;
   if (playing == false) {
      startCycle();
      playing = true;

    } else{
        location.reload();
    }
 } else if( code == 97){
   period = aarati;
   if (playing == false) {
      startCycle();
      playing = true;

    } else{
        location.reload();
    }
 }
});



