// Manually entered player data array cuz im a bitch
const playerData = [
    {ranking: 1, name: 'Jamarr Chase',	 position: "Wr",	Byeweek: 7},
    {ranking: 2, name: 'Justin Jefferson',  position: "Wr", Byeweek: 13},
    {ranking: 3, name: 'Ceedee Lamb',	position: 'Wr', Byeweek: 7},
    {ranking: 4, name:'Jonathan Taylor',	position:'Rb', Byeweek:	11},
    {ranking: 5,	name: 'A.J. Brown',	position:'Wr',	Byeweek: 10},
    { ranking:6,	 name: 'Breece Hall',	position:	'Rb', Byeweek: 7},
    {ranking: 7, name: 	'Bijan Robinson',	position:	'RB', Byeweek:		11},
   {ranking: 8,	 name: 'Jaylen Waddle',	position:	'WR', Byeweek:	10},
   {ranking: 9,	 name: 'Garrett Wilson',	position:	'WR', Byeweek:		7},
   { ranking:10,  name: 'Christian McCaffrey',position:	'RB', Byeweek:		9},
   {ranking: 11, name: 	'Saquon Barkley',	position:	'RB', Byeweek:		13},
   {ranking: 12, name: 	'Kenneth Walker III',	position:	'RB', Byeweek:		5},
   {ranking: 13, name: 	'Amon-Ra St. Brown',	position:	'WR', Byeweek:		9},
   {ranking: 13,	name: 'Jahmyr Gibbs',	position:'Rb',	Byeweek: 9},
   {ranking: 14,	 name: 'Travis Etienne',	position:	'RB', Byeweek:		9},
   {ranking: 15,	 name: 'Chris Olave',position:	'WR', Byeweek:		11},
   {ranking: 16,	 name: 'Tee Higgins',	position:	'WR', Byeweek:		7},
   { ranking:17,	 name: 'Tyreek Hill',	position:	'WR', Byeweek:		10},
   { ranking:18, name: 	'Stefon Diggs',	position:	'WR', Byeweek:		13},
   { ranking:19, name: 	'Austin Ekeler',position:	'RB', Byeweek:		5},
   {ranking: 20, name: 	'Kyle Pitts',	position:	'TE', Byeweek:		11},
   {ranking: 21, name: 	'D.K. Metcalf',	position:	'WR', Byeweek:		5},
   { ranking:22, name: 	'Mark Andrews',	position:	'TE', Byeweek:	13},
   {ranking: 23, name: 	'Josh Jacobs',  position:'Rb', Byeweek:	13},
   {ranking: 24, name: 	'DeVonta Smith',	position:	'WR', Byeweek:		10},
   {ranking: 25,	 name: 'Travis Kelce',position:	'TE', Byeweek: 10},
    {ranking:26,	 name: 'Patrick Mahomes',position:	'QB', Byeweek: 10},
   {ranking: 27, name: 	'Nick Chubb',	position:	'RB', Byeweek: 5},
   {ranking: 28, name: 	'Tony Pollard',	position:	'RB', Byeweek: 7},
  {ranking:  29, name: 	'Rhamondre Stevenson',	position:'RB', Byeweek: 11},
   {ranking: 30, name: 	'Cooper Kupp',	position:	'WR', Byeweek:		10},
   { ranking:31, name: 	'Josh Allen',	position:	'QB', Byeweek:		13},
   {ranking: 32, name: 	'Javonte Williams',	position:	'RB', Byeweek:	9},
   {ranking: 32,	name: 'Jaxon Smith-Njigba',	position:'Wr',	Byeweek: 0},
   {ranking: 33, name: 	'Najee Harris',	position:	'RB', Byeweek:		6},
   {ranking: 34, name: 	'Davante Adams',position:	'WR', Byeweek:		13},
   {ranking: 35, name: 	'Drake London',	position:'WR', Byeweek:	11},
   {ranking: 36, name: 	'D.J. Moore',	position:	'WR', Byeweek:		13},
   { ranking:37,	name: 'Chris Godwin',   position:'WR',	 Byeweek:	5},
   {ranking: 38, name: 	'Deebo Samuel',position:	'WR,', Byeweek:	9},
   {ranking: 39, name: 	'Jalen Hurts',	position:	'QB', Byeweek:	10},
   {ranking: 40, name: 	'Michael Pittman Jr.',	position:	'WR', Byeweek:		11},
  {ranking:  41, name: 	'Christian Watson',position:	'WR', Byeweek:		6},
  {ranking:  42, name: 	"D'andre Swift",	position:	'RB', Byeweek:10},
  {ranking: 42,	name: 'Jordan Addison',	position:'Wr',	Byeweek: 13},
  { ranking: 43, name: 	'Joe Burrow',	position:	'QB', Byeweek:7},
   {ranking: 44, name: 	'Jerry Jeudy',	position:	'WR', Byeweek:9},
  {ranking:  45, name: 	'J.K. Dobbins',	position:	'RB', Byeweek:13},
   {ranking: 46, name: 	'Treylon Burks',	position:	'WR', Byeweek:		7},
  {ranking:  47, name: 	'Derrick Henry',	position:	'RB', Byeweek:7},
  {ranking:  48, name: 	'Terry McLaurin',	position:	'WR', Byeweek:14},
   {ranking: 49, name: 	'Jameson Williams',	position:	'WR', Byeweek:		9},
   {ranking: 50, name: 	'Justin Herbert',	position:	'QB', Byeweek:5},
   {ranking: 52, name: 	'T.J. Hockenson',	position:	'TE', Byeweek:13},
   {ranking: 53, name: 	'Brandon Aiyuk',position:	'WR', Byeweek:9},
  {ranking:  54, name: 	'Marquise Brown',	position:	'WR', Byeweek:14},
   {ranking: 55, name: 	'Jahan Dotson',	position:	'WR', Byeweek:		14},
   {ranking: 56, name: 	'Lamar Jackson',	position:	'QB', Byeweek:13},
   {ranking: 83, name: 	'Dalvin Cook',	position:	'RB', Byeweek:7},
   {ranking: 58, name: 	'Dameon Pierce',	position:	'RB', Byeweek:		7},
    {ranking:59, name: 	'George Pickens',	position:	'WR', Byeweek:		6},
    {ranking: 59,	name: 'Quentin Johnston',	position:'Wr',	Byeweek: 5},
   {ranking: 60,	 name: 'Joe Mixon',	position:	'RB', Byeweek:7},
   {ranking: 61, name: 	'Trevor Lawrence',	position:	'QB', Byeweek:9},
   {ranking: 62, name: 	'Aaron Jones',position:	'RB', Byeweek:6},
   { ranking:63, name: 	'Justin Fields',	position:	'QB', Byeweek:13},
   {ranking: 64, name: '	Miles Sanders',	position:	'RB', Byeweek:7},
   {ranking: 65, name: 	'George Kittle',position:	'TE', Byeweek:9},
   {ranking: 65,	name: 'Zay Flowers',	position:'Wr',	Byeweek: 13},
   {ranking: 66, name: 	'Dallas Goedert',	position:	'TE', Byeweek:10},
   {ranking: 67, name: 	'Cam Akers',	position:	'RB', Byeweek:10},
   {ranking: 68, name: 	'Rachaad White',position:	'RB', Byeweek:		5},
   {ranking: 69, name: 	'Christian Kirk',	position:	'WR', Byeweek:9},
   {ranking: 70, name: 	'Calvin Ridley',	position:	'WR', Byeweek:9},
   {ranking: 71, name: 	'Diontae Johnson',	position:	'WR', Byeweek:		6},
   {ranking: 72, name: 	'Amari Cooper',	position:	'WR', Byeweek:5},
  { ranking: 73, name: 	'Rashod Bateman',	position:	'WR', Byeweek:		13},
   {ranking: 74, name: 	'David Montgomery',	position:	'RB', Byeweek:9},
   {ranking: 75, name: 	'DeAndre Hopkins',	position:	'WR', Byeweek:7},
  { ranking: 76, name: 	'Pat Freiermuth',	position:	'TE', Byeweek:		6},
  {ranking: 76,	name: 'Zach Charbonnet',	position:'rb',	Byeweek: 5},
  { ranking: 77, name: 	'Alvin Kamara',position:	'RB', Byeweek:11},
  {ranking:  78, name: 	'Mike Williams',	position:	'WR', Byeweek:5},
  {ranking:  79, name: 	'Mike Evans',position:	'WR', Byeweek:5},
  {ranking:  80, name: 	'Deshaun Watson',	position:	'QB', Byeweek:5},
  {ranking: 80,	name: 'Dalton Kincaid',	position:'Te',	Byeweek: 13},
  {ranking:  81, name: 	'James Cook',	position:	'RB', Byeweek:		13},
  {ranking:  82, name: 	'A.J. Dillon',position:	'RB', Byeweek:6},
  { ranking: 129, name: 	'Tyler Allgeier',	position:	'RB', Byeweek:		11},
  {ranking:  84, name: 	'Kyler Murray',	position:	'QB', Byeweek:14},
  {ranking: 84,	name: 'Devon Achane',	position:'Rb',	Byeweek: 10},
   {ranking: 85, name: 	'David Njoku',	position:	'TE', Byeweek:5},
  {ranking:  86, name: 	'Isiah Pacheco',position:	'RB', Byeweek:		10},
  {ranking:  87, name: 	'Dak Prescott',	position:	'QB', Byeweek:7},
  {ranking:  88, name: 	'Keenan Allen',	position:	'WR', Byeweek:5},
  {ranking:  89, name: 	'Elijah Moore',	position:'WR', Byeweek:5},
  {ranking: 90,	name: 'Kendre Miller',	position:'Rb',	Byeweek: 11},
  { ranking: 90, name: 	'Brian Robinson Jr.',	position:	'RB', Byeweek:		14},
  {ranking:  91, name: 	'Tyler Lockett',	position:	'WR', Byeweek:5},
  {ranking: 91,	name: 'Anthony Richardson',	position:'Qb',	Byeweek: 11},
  {ranking:  92, name: 	'Courtland Sutton',	position:	'WR', Byeweek:9},
   {ranking: 93, name: 	'Kadarius Toney',position:	'WR', Byeweek:		10},
   {ranking: 94, name: 	'Greg Dulcich',	position:	'TE', Byeweek:		9},
  {ranking:  95, name: 	'Tua Tagovailoa',	position:	'QB', Byeweek:10},
  {ranking:  96, name: 	'Darren Waller',	position:	'TE', Byeweek:13},
  {ranking:  97, name: 	'Antonio Gibson',	position:	'RB', Byeweek:14},
  {ranking:  98, name: 	'James Conner',	position:	'RB', Byeweek:14},
  {ranking:  99, name: 	'Evan Engram',	position:	'TE', Byeweek:9},
  {ranking: 100,	name: 'Khalil Herbert',	position:'Rb',	Byeweek: 13},
  {ranking: 101,	name: 'Bryce Young',	position:'Rb',	Byeweek: 7},
  {ranking:  100, name: 	'Gabriel Davis',	position:	'WR', Byeweek:13},
  {ranking:  101, name: 	'Jakobi Meyers',position:	'WR', Byeweek:		13},
  {ranking:  102, name: 	'JuJu Smith-Schuster',position:	'WR', Byeweek:11},
  {ranking:  103, name: 	'Daniel Jones',	position:	'QB', Byeweek:13},
  {ranking:  104, name: 	'Trey Lance',position:	'QB', Byeweek:9},
  {ranking:  105, name: 	'Darnell Mooney',	position:	'WR', Byeweek:13},
  {ranking:  106, name: 	'Skyy Moore',position:	'WR', Byeweek:		10},
  {ranking:  107, name: 	'Cole Kmet',	position:	'TE', Byeweek:13},
  {ranking:  108, name: 	'Kirk Cousins',	position:	'QB', Byeweek:13},
  {ranking:  109, name: 	'Dalton Schultz',	position:	'TE', Byeweek:7},
  {ranking:  110, name: 	'Jamaal Williams',position:	'RB', Byeweek:11},
  {ranking: 110,	name: 'Michael Mayer',	position:'Te',	Byeweek: 13},
  {ranking:  111, name: 	'Chigoziem Okonkwo',	position:	'TE', Byeweek:		7},
  {ranking: 5,	name: 'Roschon Johnson',	position:'Rb',	Byeweek: 13},
  {ranking:  112, name: 	'Brandin Cooks',	position:	'WR', Byeweek:7},
  {ranking:  113, name:  "Wan'Dale Robinson",	position:	'WR', Byeweek:		13},
  {ranking:  114, name: 	'Trey McBride',	position:	'TE', Byeweek:		14},
  {ranking: 114,	name: 'Sam LaPorta',	position:'Te',	Byeweek: 9},
  {ranking: 115,	name: 'C.J Stroud',	position:'Qb',	Byeweek: 7},
  {ranking:  115, name:	'Damien Harris',	position:	'RB', Byeweek:13},
  {ranking: 116,	name: 'tank Bigsby',	position:'Rb',	Byeweek: 9},
  {ranking:  116, name: 	'Rondale Moore',	position:	'WR', Byeweek:14},
  {ranking: 117,	name: 'Courtland Sutton',	position:'Wr',	Byeweek: 9},
  {ranking:  117, name: 	'Elijah Mitchell',position:	'RB' ,Byeweek:		9},
  {ranking: 118,	name: 'Jayden Reed',	position:'Wr',	Byeweek: 6},
  {ranking:  119, name: 	'Rashaad Penny',	position:	'RB', Byeweek:10},
  {ranking:  120, name: 	'Devin Singletary',	position:	'RB', Byeweek:7},
  {ranking: 120,	name: 'Marvin Mims Jr.',	position:'Wr',	Byeweek: 9},
  {ranking:  121, name: 	'Ezekiel Elliott',position:	'RB', Byeweek:11},
  {ranking: 121,	name: 'Johnathan Mingo',	position:'Wr',	Byeweek: 7},
  {ranking: 122,	name: 'Tyjae Spears',	position:'Rb',	Byeweek: 7},
  {ranking:  122, name: 	'Russell Wilson',	position:	'QB', Byeweek:9},
  {ranking: 123,	name: 'Rashee Rice',	position:'Wr',	Byeweek: 10},
  {ranking:  123, name: 	'Jared Goff',	position:	'QB', Byeweek:9},
  {ranking:  124, name: 	'Derek Carr',position:	'QB', Byeweek:11},
  {ranking:  125, name: 	'Donovan Peoples-Jones',	position:	'WR', Byeweek:12},
  {ranking:  126, name: 	'Alec Pierce',	position:	'WR', Byeweek:		11},
 { ranking:  127, name: 	'Leonard Fournette',position:	'RB', Byeweek:5},
  {ranking:  128, name: 	'Geno Smith',	position:	'QB', Byeweek:5},
   {ranking: 129, name: 	'Kenneth Gainwell',	position:	'RB', Byeweek:		10},
  { ranking: 130, name: 	'Kareem Hunt',position:	'RB', Byeweek:5 }
  ];

  // Easy to read DOM elements and form submissions
  const form = document.getElementById("draftform");
  const input = document.getElementById("playerName");
  const draftedList = document.getElementById("draftedList");
  const checkForm = document.getElementById("checkform");
  const checkInput = document.getElementById("checkPlayerName");
  const draftStatus = document.getElementById("draftStatus");

// Load drafted players from Local Storage
const draftedPlayers = JSON.parse(localStorage.getItem("draftedPlayers")) || [];

document.addEventListener("DOMContentLoaded", function () {
  // Populate the player list
  const playerListElement = document.getElementById("playerList");
  playerData.forEach(player => {
    const listItem = document.createElement("li");
    listItem.textContent = `${player.name} (Rank: ${player.ranking})`;
    playerListElement.appendChild(listItem);
  });

  // Populate the drafted player list
  const draftedListElement = document.getElementById("draftedList");
  draftedPlayers.forEach(playerName => {
    const draftedPlayer = playerData.find(player => player.name === playerName);
    if (draftedPlayer) {
      const listItem = document.createElement("li");
      listItem.textContent = `${draftedPlayer.name} (Rank: ${draftedPlayer.ranking})`;
      draftedListElement.appendChild(listItem);
    }
  });
});



// Draft form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const playerName = input.value.trim().toLowerCase();
  if (playerName !== "") {
    const draftedPlayer = playerData.find(player => player.name.toLowerCase() === playerName);
    if (draftedPlayer) {
      if (!draftedPlayers.includes(draftedPlayer.name)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${draftedPlayer.name} (Rank: ${draftedPlayer.ranking})`;
        draftedList.appendChild(listItem);
        draftStatus.textContent = `${draftedPlayer.name} has been drafted.`;
        draftedPlayers.push(draftedPlayer.name);
        // Save drafted players to Local Storage
        localStorage.setItem("draftedPlayers", JSON.stringify(draftedPlayers));
      } else {
        draftStatus.textContent = `${draftedPlayer.name} has already been drafted.`;
      }
    } else {
      draftStatus.textContent = `${playerName} is not a valid player name.`;
    }
    input.value = "";
  }
});

// Populate the player suggestions
const playerSuggestions = document.getElementById("playerSuggestions");
playerData.forEach(player => {
  const option = document.createElement("option");
  option.value = player.name;
  playerSuggestions.appendChild(option);
});

// Update drafted player list and memory
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
  draftedPlayers.length = 0;
  draftedList.innerHTML = "";
  draftStatus.textContent = "Drafted list and memory have been cleared.";
  localStorage.removeItem("draftedPlayers");
});
