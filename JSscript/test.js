class Race {
    constructor( name, fan ) {
        this.name = name;
        this.fan  = fan;
    } // constructor
    
    get getname() {
        return this.name;
    }
} // class Race


function createRaceDiv( race_year, race_month, race_arr ) {
    var new_div = document.createElement('div');
    new_div.classList.add("race_div");
    new_div.classList.add("div_time_right");
    
    var sel = document.createElement('select');
    var race_class = ['G1', 'G2', 'G3' ,'OP', 'Pre-OP'];
    
    var opt = document.createElement("option");
    opt.innerHTML = "Please select a race.";
    sel.appendChild(opt);
    for ( let i = 0; i < race_class.length; i++ ) {
        var opt_g = document.createElement("optgroup");
        opt_g.label = race_class[i];
        for ( let j = 0; j < race_arr[i].length; j++ ) {
            var opt = document.createElement("option");
            opt.value = i * race_class.length + j;
            opt.innerHTML = race_arr[i][j].getname;
            opt_g.appendChild(opt);
        }
        sel.appendChild(opt_g);
    }
    new_div.appendChild(sel);
    
    return new_div;
} // function createRaceDiv


var race_1 = new Race("Race1", 123);
var race_2 = new Race("Race2", 123432);
var race_3 = new Race("Race3", 1232143);
var race_4 = new Race("Race4", 1231342);
var race_5 = new Race("Race5", 1234324);
var race_6 = new Race("Race6", 1234324);

var all_race = [ [race_1],
                 [race_2],
                 [race_3],
                 [race_4],
                 [race_5, race_6]];
    

var mid = document.getElementById('year');
console.log(mid);
for ( let i = 0; i < 2; i++ ) {
    var year_div = document.createElement('div');
    year_div.classList.add('row');
    var year_num = document.createElement('div');
    year_num.classList.add('div_year_left');
    year_num.innerHTML = 'Year: ' + String(i+1);
    var year     = document.createElement('div');
    year.classList.add('div_year_right');
    year_div.appendChild(year_num);
    for ( let j = 0; j < 12; j++ ) { 
        var month_div = document.createElement('div');
        month_div.classList.add('row');
        var month_num = document.createElement('div');
        month_num.classList.add('div_month_left');
        month_num.innerHTML = 'Month: ' + String(j+1);
        var month     = document.createElement('div');
        month.classList.add('div_month_right');
        month_div.appendChild(month_num);
        for ( let k = 0; k < 2; k++ ) { 
            var race_div = createRaceDiv(1, i, all_race);
            month.appendChild(race_div);
        }
        month_div.appendChild(month);
        year.appendChild(month_div);
    }
    year_div.appendChild(year);
    mid.appendChild(year_div);
}


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            } // if(rawFile.status === 200 || rawFile.status == 0)
        } // if(rawFile.readyState === 4)
    } // rawFile.onreadystatechange

    rawFile.send(null);
    
} // function readTextFile(file)

// readTextFile('https://github.com/Chen-ChunYen/UMMD/blob/data/Data/race_data.txt');
// readTextFile('./Data/race_data.txt');

$.getJSON("https://github.com/Chen-ChunYen/UMMD.github.io/blob/data/Data/race.json")
    .done(function( data ) {
       console.log(data)
    });
console.log(data);
