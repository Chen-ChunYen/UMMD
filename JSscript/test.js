/*
var test = document.querySelectorAll('#first');
console.log(test);
console.log("123");
console.log(test.length);
for ( let i = 0; i < test.length; i++ ) {
    test[i].style.backgroundColor="green";
}
*/

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
    new_div.classList.add("row");
    
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
    new_div.innerHTML='Year: ' + String(race_year) + ', Month: ' + String(race_month);
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
    

var mid = document.getElementById('first');
console.log(mid);
for ( let i = 0; i < 4; i++ ) {
    var race_div = createRaceDiv(1, i, all_race);
    mid.appendChild(race_div);
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

readTextFile('https://github.com/Chen-ChunYen/UMMD/blob/data/Data/race_data.txt');


