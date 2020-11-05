//--------------------------------
//CONTENTS
//--------------------------------
//1. sentence pattern one
//2. sentence pattern two
//3. sentence pattern three
//4. sentence pattern four
//5. sentence pattern five
//6. sentence pattern six
//line break placeholders
//--------------------------------
//1. sentence pattern strings
//2. function to create random sentences + fadeIn/out effects
//3. unused API for Instagram
//4. used Stock Photo API
//----------------------------------

//--------------------------------
//--------------------------------
//--------------------------------
function start(){



//1. sentence pattern one

//personalpronoun
var personalpronounSingular = [
"you",
"you",
"I",
"I",
"we",
"we",
"we",
 "I",
 "you",
"I",
"you",
"I",
 "they",
 "we",];

var getRandomPronoun = function () {
    return personalpronounSingular[Math.floor(Math.random() * personalpronounSingular.length)];
};

var personalPronoun = getRandomPronoun();

//////////console.log(personalPronoun);


//verb

var verbSingular = [
"buy",
"drive",
"catapult",
"golf",
"download",
"resist",
"undo",
"control alt delete",
"lace up",
"reinvent",
"rescue",
"check out",
"swipe right on",
"live tweet",
"blog",
"forget",
"deck out",
"cover up",
"trace",
"velcro",
"snort",
"piss off",
"freeze-dry",
"overdo",
"cloister",
"shake up",
"pray",
"monopolize",
"bogart",
"bust out",
"binge watch",
"upload",
"like",
"remember",
"break down",
"come down from",
"shazam",
"google",
"netflix",
"record",
"document",
"code",
"dry hump",
"hide",
"re-route",
"rope in",
"survive",
"delete",
"refresh",
"touch up",
"cradle",
"nurse",
"undream",
"stream",
"KO",
"humidify",
"happy cry over",
"reveal",
"click",
"escape",
"level up",
"draw out",
"trap",
"orgasm",
"optimize",
"respect",
"dream",
"hit on",
"devour",
"dedicate a shrine to",
"resell",
"tidy up",
"coopt",
"don’t deserve, but somehow get the rights to",
"advertise",
"pass a law banning",
];

var getRandomVerb = function () {
    return verbSingular[Math.floor(Math.random() * verbSingular.length)];
};

var verb = getRandomVerb();

//////////console.log(personalPronoun);



//possesive
var possesiveSingular = [
"their",
"my",
"your",
"my",
"your",
"our"];

var getRandomPossesive = function () {
    return possesiveSingular[Math.floor(Math.random() * possesiveSingular.length)];
};

var possesive = getRandomPossesive();

//////////console.log(possesive);



//randomnoun
var nouns = [
"tacos",
"taco",
"dignity",
"apple",
"iphone",
"tower",
"klout score",
"bitcoins",
"mother",
"anxiety",
"pheremones",
"duplex",
"monocle" ,
"thumbnail",
"smorgasbord",
"condoms",
"pills",
"details",
"qualifications",
"specs",
"rights",
"family",
"traditions",
"forty",
"threats",
"succulent",
"battery",
"cure",
"ham",
"kleenex",
"spit bubbles",
"proofs",
"dramamine",
"pacifico",
"umph",
"pizzazz",
"stories",
"lox",
"cardigan",
"sweet n low",
"cavities",
"swag",
"swagger",
"moonshine",
"cockroach",
"command s",
"shit",
"dingleberries",
"attention",
"intention",
"tension",
"shade",
"wormhole",
"asparagus pee",
"oxidation",
"goo",
"seance tools",
"jewharp",
"pimple",
"clogs",
"neckline",
"lovehandles",
"froyo",
"cognac",
"asshole",
"livery service",
"toy dungeon",
"dijon mustard",
"dim sum",
"loneliness",
"koala",
"revenge",
"whopper jr",
"gyros",
"pony",
"fans",
"lolz",
"babiez",
"cuties",
"blisters",
"tragedy",
"license",
"free cruise",
"ticklefest",
"lover",
"french kiss",
"halloween costume",
"saturday night live",
"consumerism",
"gas mask",
"tilapia",
"torture",
"fried shishito peppers",
"doberman",
"pugs",
"alibies",
"phlegm",
"passion",
"French",
"club membership",
"DVD",
"matches",
"tinder hottie",
"Peter",
"Aarati",
"coconut martini",
"kanye",
"madonna",
"third nipple",
"mercury poisoning",
"fish oil",
"prescription",
"freckles",
"cha cha slide",
"tuesday",
"half day",
"snow day",
"cuticles",
"gingham",
"pee pee stain",
"cum",
"jazzy juice",
"fenugreek",
"hysop" ,
"elderberry capsules",
"shampoo",
"conditioner",
"top hat",
"crown",
"no-no",
"path",
"singularity complex",
"word art",
"kaomoji",
"random cat affection",
"cat nap",
"blowout",
"gravel",
"future",
"libido loco",
"amazon prime account",
"cat food",
"spotify",
"last four digits",
"spunk",
"supersoaker",
"spitballs",
"collectables",
"mom",
"grandpa",
"pet panda",
"smiley keychain",
"knife skills",
"life skillz",
"cash money flying away emoji",
"lip gloss",
"clinique moisturizer",
"passive aggressive ~i guess~",
"least favorite Kashi cereal",
"only friend",
"ex-boyfriend",
"pillow talk",
"motel key",
"bed bugs",
"warehouse party",
"feelings about gentrification",
"brand identity",
"horoscope",
"astrological sign",
"7 favorite BuzzFeed quizzes",
"deepest breath",
"björk tickets",
"panic attack",
"ballroom dancing trophy",
"depression",
"mood disorder",
"eclectic wine collection",
"inner-flame",
"substitute teacher",
"wormhole",
"asparagus pee",
"oxidation",
"goo",
"seance tools",
"jorts",
"kodak moment",
"kryptonite",
"munchies",
"man cave",
"chemical romance",
"memes",
"mid-life crisis",
"O face",
"facelift",
"parking karma",
"price point",
"sexercism",
"sidewalk salsa",
"tumblr",
"trash jenga",
"vape",
"YouTube comments",


];

var getRandomNoun = function () {
    return nouns[Math.floor(Math.random() * nouns.length)];
};

var noun = getRandomNoun();

//////////console.log(noun);



//preposition

var prepositions = [
"from",
"aboard",
"amid",
"above",
"across",
"among",
"against",
"around",
"as",
"at",
"before",
"after",
"behind",
"below",
"beside",
"between",
"beyond",
"by",
"considering",
"minding",
"following",
"for",
"in",
"inside",
"into",
"like",
"opposite",
"outside",
"over",
"past",
"regarding",
"round",
"through",
"toward",
"towards",
"under",
"unlike",
"upon",
"via",
"within",
"off",
"on",
"onto",
"next to"];

var getRandomPreposition = function () {
    return prepositions[Math.floor(Math.random() * prepositions.length)];
};

var preposition = getRandomPreposition();

//////////console.log(preposition);



//singularIntro

var introSingulars = [
"a",
"the",
"a",
"the",
"a",
"the",
"a",
"the",
"a",
"the",
"half a",
"one",
"this",
"that",
"the only",
];

var getRandomIntro = function () {
    return introSingulars[Math.floor(Math.random() * introSingulars.length)];
};

var intro = getRandomIntro();

//////////console.log(intro);



//NounSingular

var nounsSingular = [
"drop scout",
"shot counter",
"matchbox",
"Sigg",
"pixelpusher",
"webmaster",
"blog buddy",
"keystone cop",
"saint bernard",
"bride",
"groom",
"sunroof",
"Pokémon",
"butcher",
"exec",
"Disney Princess",
"Kitchen Magician",
"electrician named Sam",
"spoof",
"clone",
"drone friend",
"friend-in-law",
"telemarketer",
"delivery boy",
"smarty pants",
"do-gooder",
"man’s man",
"low life",
"bosslady",
"human rights activist",
"census collector",
"dermatologist",
"lookalike",
"you-type",
"kiddo",
"conor oberst impersonator",
"bandmate",
"Trader Joe’s employee",
"human rights’ violation",
"sandwich master",
"bobsledder",
"twinky",
"scowl",
"fossil",
"beautiful riverlight",
"applebees",
"mall",
"hotrod",
"sorry sap",
"curriculum",
"conveyer belt",
"Dominos",
"troll",
"bread pudding place",
"statue of me",
"eucalyptus plant",
"corner store",
"bodega",
"uncoordinated fool",
"idiot fuck",
"happiness parade",
"loneliness boat",
"screwed up yacht",
"pubescent understudy",
"disaster capitalist",
"dealer",
"white boy",
"pixie",
"Michael Cera act-alike",
"nuisance",
"gumball thief",
"windowdressing",
"fluffy",
"thing i used to do",
"parrot",
"peer mediator",
"gym leader",
"student government official representative",
"friend of a friend",
"suggested lover",
"hottie",
"negative nancy",
"addict",
"duo",
"string quartet",
"patriarchy",
"non-practicing politician",
"haterrr",
"Facebook friend",
"Twitter follower",
"person i used to be kinda close to",
"cat whisperer",
"normcore activist",
"local rabbi",
"allstar cast",
"MVP",
"regular tending bar",
"me-type",
"way i act when lonely",
"serious problem",
"haircut circa 1988",
"mini golf place",
"beach or whatever",
"Jeweler",
"hot spot",
"smoking area",
"tech shoppe",
"sky",
"bot",
"haha",
"skeleton",
"charrracter down the block",
"specialty store",
"Soho Sephora",
"long island mansion" ];

var getRandomnounSing = function () {
    return nounsSingular[Math.floor(Math.random() * nounsSingular.length)];
};

var nounSingular = getRandomnounSing();

//////////console.log(nounSingular);


//with
var withs = [
"with",
];

var getRandomWith= function () {
    return withs[Math.floor(Math.random() * withs.length)];
};

var With = getRandomWith();

//////////console.log(With);



//adjectiveNoun
var adjNouns = [
"dog" ,
"baby" ,
"winter" ,
"college" ,
"juniper" ,
"book" ,
"theatre" ,
"witch" ,
"smoker" ,
"drunk",
"computer",
"swimmer",
"soap opera",
"mom",
"narwhal",
"mr. potato head",
"Pixar",
"angel",
"Selena Gomez",
"wizard",
"vegetarian",
"omnivore",
"claymation",
"SAT",
"Swarovski",
"butter",
"vacation",
"google doc",
"social media intern",
"bunny",
"tiger",
"outerspace",
"trust fund",
"sailor",
"noname",
"grade A",
"gymrat",
"glass",
"Google Glass",
"corpse",
"meat",
"priest",
"death metal",
"punk",
"calypso",
"Rockaway Beach",
"surfer",
"video game",
"anime",
"best supporting actor",
"victory!",
"i luv u",
"i h8 u",
"ROFL",
"post-death",
"heart attack",
"i’m-not-gonna-forget-this-time",
"~really?~",
"WWF",
"Al Pacino",
"sinner",
"BAMF",
"fashion week",
"scientology",
"quote",
"matcha",
"romance language",
"X-Acto Knife",
"boyband",
"netstalgia",
"l0ser",
"postmodernism",
"moon",
"freak-in-the-bed",
"winter",
"autumn",
"vanilla",
"crit theory",
"hypothetical",
"egomaniac",
"evergreen",
"FOMO",
"lo-fi",
"volunteer",
"man-on-the-moon",
"palm tree",
"Nicholas Cage",
"amphetamine",
"sidewalk",
"partyyy",
"best friend",
"drunk yoga",
"ripple",
"serendipity",
"wisteria",
"jabberwocky",
"downtown",
"off-the-grid",
"brunch",
"secret",
"poetry",
"limelight",
"glamor glow",
"scenester",
"anarchy",
"insomnia"];

var getRandomadjNoun= function () {
    return adjNouns[Math.floor(Math.random() * adjNouns.length)];
};

var adjNoun = getRandomadjNoun();

//////////console.log(adjNoun);



//nounPlural
var nounsPlural = [
"threads" ,
"eyes" ,
"fingers" ,
"feet" ,
"credentials" ,
"powers" ,
"feelings" ,
"neurotransmitters" ,
"food",
"reports",
"tongues",
"treats",
"bones",
"lips",
"thoughts",
"strollers",
"intentions",
"interfaces",
"phones",
"planes",
"science",
"discoveries",
"consciousness",
"kisses",
"arms",
"gestures",
"techniques",
"smells",
"booties",
"happiness",
"chills",
"isotopes",
"cues",
"wrinkles",
"facelifts",
"nails",
"convictions",
"IQ",
"noses",
"dreams",
"chats",
"Xanax",
"balls",
"errors in judgment",
"inklings",
"cravings",
"epiphanies",
"smarts",
"arguments",
"therapy sessions",
"visits",
"staycations",
"group texts",
"playdates",
"group activities",
"sex stuff",
"rituals",
"art objects",
"plans",
"tendencies",
"IOUs",
"breakdowns",
"miseries",
"apologies",
"getaways",
"rooms",
"sodas",
"sticks",
"hands",
"concerns",
"ennui",
"classism",
"books",
"projects",
"veins",
"intestines",
"past lives",
"drama",
"moves",
"distractions",
"tics",
"conformity",
"siblings",
"weapons",
"beliefs",
"pics of god",
"innovations",
"psyches",
"PTSD",
"neuroses",
"allergies",
"intolerance",
"vodka",
"florettes",
"light",
"time",
"suddenness",
"style",
"apparel",
"trysts",
"lies",
"lashes",
"memories",
"insights",
"talk",
"selfhood",
"sexts",
"commercials",
"ad campaigns",
"deal-breakers",
"quiescence",
"iridescence",
"hacks",
"groupons",
"looks",
"expressions",
"lingo",
"syndrome",
"ideology",
"memories",
"decisions",
"music",
"holes",
"sockets",
"remedies",
"ignorance",
"winks",
"atmospherics",
"partisanism",
"accents",
"explanations",
"spirits",
"lifestyles",
"effects",
"nerve endings",
"synapses",
"advocates",
"revivalists",
"moods",
"souls",
"tiffs",
"roadrage",
"comebacks",

 ];

var getRandomNounPlural= function () {
    return nounsPlural[Math.floor(Math.random() * nounsPlural.length)];
};

var nounPlural = getRandomNounPlural();

//////////console.log(nounPlural);



//Punctuation
var punctuations = [
".",
",",
"~",
"//",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
",</br>",
",&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation= function () {
    return punctuations[Math.floor(Math.random() * punctuations.length)];
};

var punctuation = getRandomPunctuation();

//////////console.log(punctuation);


//-----------------------------------------------

//2.sentence2 "like the government, his flower's gun is quickly outed"


//'like'

var likes = [
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"like",
"just as",
"similar to",
"not unlike",
"sorta like",
"sorta like",
"kinda like",
];

var getRandomLike= function () {
    return likes[Math.floor(Math.random() * likes.length)];
};

var like = getRandomLike();

//////////console.log(like);

//article
var article2s = [
"this",
"that",
"a",
"the",
"one",
"the only",
"some",
"a",
"the",
"one",
"some",
"a",
"the",
"one",
"some",
"a",
"the",
"a",
"the",
"a",
"the",
"a",
"the",
];

var getRandomArticle2= function () {
    return article2s[Math.floor(Math.random() * article2s.length)];
};

var article2 = getRandomArticle2();

//////////console.log(article2);


//nounsSing2

var nounSing2s = [
"ziplock bag",
"worry bracelet",
"toe-sucking",
"jumbotron",
"votive candle",
"dance",
"thing my face does when no one’s around",
"scientific method",
"unshoveled snowpile",
"way to forget a lover",
"Model U.N. kid",
"Victoria’s Secret catalog",
"male gaze",
"shoegaze song in my head",
"geocities site i used to love",
"photo",
"photo of my mom's bf",
"caress",
"lost iguana",
"full body workout",
"hamstring",
"apple tarte tatin",
"noodle sculpture",
"bong",
"SNES controller",
"thing i hate but do daily",
"father",
"absentee ballot",
"grandmother's horoscope",
"middle school bleecher",
"costume store the day after halloween",
"unicycle in my backyard",
"paper plane that landed in your hair",
"benign tumor",
"winter weather advisory",
"hip replacement",
"$40 massage",
"favor",
"movie you'll never watch",
"show you hate",
"soccer player you liked",
"snake bite",
"boy you crushed on",
"USPS worker I slept with",
"must watch Glee episode",
"communal prayer",
"voodoo doll",
"error message",
"lover I never loved",
"lover #7",
"2nd best roommate",
"brony",
"1972 Camaro missing a windshield",
"off color joke",
"palm pilot",
"stylus",
"matching tea set from pier 1",
"thing i used to do",
"tater tot",
"cutie",
"snuffed roman candle",
"unbaptized baby",
"snow rythm",
"pbj",
"doctor with bad intentions",
];

var getRandomNounSing2= function () {
    return nounSing2s[Math.floor(Math.random() * nounSing2s.length)];
};

var nounSing2 = getRandomNounSing2();

//////////console.log(nounSing2);

//comma

//possesive pronoun
var possesivePronoun2s = [
"his",
"her",
"their",
"my",
"your",
"our"
];

var getRandompossesivePronoun2= function () {
    return possesivePronoun2s[Math.floor(Math.random() * possesivePronoun2s.length)];
};

var possesivePronoun2 = getRandompossesivePronoun2();

//////////console.log(possesivePronoun2);

//possesivenoun

var possesiveNoun2s = [
"flower’s",
"mother’s",
"baby’s",
"writer’s",
"house’s",
"supper’s",
"Sunday’s",
"town’s",
"map’s",
"car’s",
"tragedy’s",
"character’s",
"song’s",
"beach’s",
"lover’s",
"friend’s",
"relative’s",
"vision’s",
"personality’s",
"brand’s",
"company’s",
"eyes’",
"soul’s",
"heart’s",
"crush’s",
"dog walker’s",
"band’s",
"psychologist’s",
"Talula's",
"Jeweler's",
"Chaperone's",
"priest's",
"yogi's",
"real estate agent's",
"web series'",
"father's",
"trouble maker's",
"producer's",
"boyfriend's",
"girlfriend's",
"worst nightmare's",
"sunroof's",
"microphone's",
"house's",
"caretaker's",
"babysitter's",
"djinn’s",
"landlord’s",
"supplier’s",
"stylist’s",
"cat sitter’s",
"moneymaker’s",
"ex’s",
"pale horse’s",
"shadow’s",
"good side’s",
"murderer's",
"ventriloquist's",
"kitten's",
"personal chef's",
];

var getRandompossesiveNoun2= function () {
    return possesiveNoun2s[Math.floor(Math.random() * possesiveNoun2s.length)];
};

var possesiveNoun2 = getRandompossesiveNoun2();

//////////console.log(possesiveNoun2);

//singular noun

var anothernounSing2s = [
"tail",
"last word",
"famous ravioli",
"loneliness",
"future",
"dependence",
"betrayal",
"loudest sound",
"voice",
"company",
"memory",
"sense of time",
"sense of belonging",
"longing",
"nostalgia",
"destiny",
"torture",
"bad habit",
"world",
"social tendency",
"personality",
"kiss",
"trace",
"napolean complex",
"something something",
"word",
"politics",
"PhD",
"MFA",
];

var getRandomanotherNounSing2= function () {
    return anothernounSing2s[Math.floor(Math.random() * anothernounSing2s.length)];
};

var anothernounSing2 = getRandomanotherNounSing2();

//////////console.log(anothernounSing2);

//is
var iss = [
"is",
"can be",
"was",
"will be",
"should be",
"was about to be",
"was gonna be",
"is gonna be",
"had been",
"shoulda been",
"coulda been",
"could have been",
"was always",
"is always",
];

var getRandomis= function () {
    return iss[Math.floor(Math.random() * iss.length)];
};

var is = getRandomis();

//////////console.log(is);

//adverb

var adverb2s = [
"quickly",
"swiftly",
"terribly",
"lovingly",
"meticulously",
"voluptuously",
"masterfully",
"tactfully",
"corporately",
"definitely",
"heavy-handedly",
"gloomily",
"reluctantly",
"forcefully",
"disgustingly",
"daftly",
"intentionally",
"accidentally",
"formally",
"matter-of-factly",
"stiffly",
"frankly",
"sneakily",
"candidly",
"subjectively",
"objectively",
"justifiably",
"naturally",
"jealously",
"repeatedly",
"anxiously",
"crookedly",
"exclusively",
"usually",
"excessively",
"frequently",
"shamelessly",
"fortuitously",
"a little bit",
"increasingly",
"figuratively",
"literally",
"cautiously",
"brutally",
"partially",
"unfairly",
"neutrally",
"vicariously",
"spiritually",
"electronically",
"virtually",
"eventually",
"mysteriously",
"curiously",
"begrudgingly",
"tearfully",
"counterintuitively",
"spatially",
"temporally",
"temporarily",
"briefly",
"verifiably",
"invisibly",
"subtly",
"openly",
"lastingly",
"eternally",
"slowly",
"preemptively",
"mockingly",
"painfully",
"optimistically",
"flashily",
"shinily",
"beautifully",
"dutifully",
"reverse",
"consistently",
"unemotionally",
"coldly",
"warmly",
"totally",
"shamelessly",
"fortuitously",
"a little bit",
"increasingly",
"figuratively",
"literally",
"cautiously",
"brutally",
"partially",
"unfairly",
"neutrally",
"vicariously",
"spiritually",
"electronically",
"virtually",
"eventually",
"mysteriously",
"curiously",
"begrudgingly",
"tearfully",
"counterintuitively",
"spatially",
"temporally",
"temporarily",
"briefly",
"verifiably",
"invisibly",
"subtly",
"openly",
"lastingly",
"eternally",
"slowly",
"preemptively",
"mockingly",
"painfully",
"optimistically",
"flashily",
"shinily",
"beautifully",
"dutifully",
"reverse",
"consistently",
"unemotionally",
"coldly",
"warmly",
"totally",

];

var getRandomadverb2= function () {
    return adverb2s[Math.floor(Math.random() * adverb2s.length)];
};

var adverb2 = getRandomadverb2();

//////////console.log(adverb2);



//pasttenseverb

var pasttenseverbs= [
"mapped",
"trapped",
"expelled",
"destroyed",
"cherished",
"raised and forgotten",
"loved, but euthanized",
"built unfinished",
"seen",
"taken",
"fucked up",
"separated",
"drawn",
"figured",
"solved",
"characterized",
"sacrificed",
"overturned",
"judged",
"nestled",
"jericho-ed",
"rasterized",
"AWOL-ed",
"cultured",
"empathized with",
"euthanized",
"entered",
"fooled",
"over it",
"sorrynotsorry",
"floored",
"crosseyed",
"blacked out",
"damned",
"favorited",
"kept",
"plastered",
"believed",
"mistaken",
"pantsed, but cool with it",
"riverdanced",
"uncoupled",
"watercolored",
"rendered",
"blurred",
"layered, but solid",
"shouldered",
"crapped on",
"duped",
"freaked out",
"pumped up",
"tipped",
"pinked",
"passed by",
"zapped",
"long-hugged, but spited",
"discovered",
"stoned",
"worshipped",
"financed",
"funded",
"taxed",
"tailored",
"soundbited",
"screengrabbed",
"dispersed, but cohesive",
"confused",
"endowed, but not enough",
"remembered",
"shaken and stirred",
"casseroled",
"softboiled",
"backed over",
"toasted",
"rented and owned",
"plunged",
"deified",
"deteriorated",
"proportioned, but ridiculed",
"adorned",
"sequined, but dusted",
"driven home",
"disguised",
"sutured, but still bleeding",
"emptied, but content",
"tokenized",
"sacrificed for the greater good",
"overturned by the lake",
"judged for no reason",
"nestled but needy",
"covered in ants",
"made into a book",
"traded in for pennies",
"eavesdropped by wind",
"thrown into a ricecooker",
"mistaken for an act of generosity",
"blamed for the atmosphere",
"gathered in a basket",
"tied to a limo’s bumper",
"uploaded to the cloud",
"drained of content",
"regifted to the neighbors",
"adjusted by microbes",
"closed, but uninitiated",
"consumed only to be expelled",
"personified but still inhuman",
"hidden but showing",
"buried in a wormhole",
"tweezed, hair by hair",
"lumped together",
"given the silent treatment",
"protected from malware",
"inspected for fleas",
"run out of town",
"one-upped while sleeping",

];

var getRandompasttenseverb= function () {
    return pasttenseverbs[Math.floor(Math.random() * pasttenseverbs.length)];
};

var pasttenseverb = getRandompasttenseverb();

//////////console.log(pasttenseverb);



//Punctuation
var punctuation2s = [
".",
",",
"~",
"//",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
",</br>",
",&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation2= function () {
    return punctuation2s[Math.floor(Math.random() * punctuation2s.length)];
};

var punctuation2 = getRandomPunctuation2();

//////////console.log(punctuation2);

//--------------------------------------------------
//3. Sentence 3 "a lonely atom tickles the nose"

//article

var article3s = [
"a",
"the",
"a",
"the",
"a",
"the",
"a",
"the",
"a",
"the",
"half a",
"one",
"this",
"that",
"the only",
];

var getRandomArticle3= function () {
    return article3s[Math.floor(Math.random() * article3s.length)];
};

var article3 = getRandomArticle3();

//////////console.log(article3);



//adjective

var adj3s = [
"uncreative",
"salvageable",
"shivering",
"middle-class",
"day-glo",
"awkward",
"misrepresented",
"Prodigal",
"sloppy",
"depressed",
"spectral",
"sentient",
"fake",
"faux",
"certified organic",
"gassed up",
"au natural",
"crusty",
"ultramarine",
"kafkaesque",
"mostly happy",
"undecided",
"cerebral",
"American",
"closeminded",
"snotty",
"asshole",
"dank",
"wack",
"extroverted",
"INTF",
"people-pleasing",
"adulterated",
"underwhelming",
"novel",
"controversial",
"bro-ey",
"freerange",
"shiny",
"salty",
"bejeweled",
"fully charged",
"orthodox",
"conservative",
"liberal",
"progressive",
"ineffable",
"pubescent",
"on point",
"hypnotic",
"thaumaturgic",
"hormonal",
"delighted",
"apocalyptic",
"fundamental",
"fundamentalist",
"polka-dotted",
"trial-sized",
"invisible",
"innovative",
"insecure",
"offensive",
"offended",
"defensive",
"passive agressive",
"professional",
"business casual",
"NSFW",
"PC",
"socially anxious",
"glamorous!",
"SAD",
"ADD",
"sappy",
"streamlined",
"nongendered",
"attention-seeking",
"clutch",
"fetch",
"privileged",
"nonstick",
"mopey",
"bauhaus",
"impressionist",
"irresponsible",
"unapologetic",
"illegal",
"not yet rated",
"nerdy",
"bedridden",
"crying",
"old school western",
"diverse",
"freaky deaky",
"navelgazing",
"stop motion",
"no filter",
"textbook",
"brooklyn",
"homeless",
"new age",
"soap opera",
"decaf or half-caf",
"tabloid",
"pop punk",
"frowny",
"grown-up",
"2 for 1",
"ubiquitous",
"noob",
"soso",
"medium",
"XXL",
"spotlighted",
"disturbed",
"soft-looking",
"sentimental",
"OCD",
"sobering",
"lonely",
"fallen",
"formal",
"imagined",
"terrible",
"careful",
"smiling",
"convincing",
"platinum",
"gold",
"vintage",
"art deco",
"chic",
"frou frou",
"bougie",
"forgettable",
"dead",
"virtual",
"artsy fartsy",
"platonic",
"distant",
"alienated",
"marketable",
"creeptastic",
"moody",
"wack",
"fancy-shmancy",
"meh",
"lawless",
"peachy",
"quirky",
"punch-drunk",
"eclipsed",
"lost",
"sizeable",
"bubblewrapped",
"beta-tested",
"responsive",
"crazy cool",
"new-wave",
"post-fun",
"industrial",
"kawaii",
"mini",
"cute",
"fucked up",
"sexless",
"aspiring",
"hip",
"hippy",
"oceanic",
"selfless",
"revised edition",
"mint condition",
"etsy-ish",
"dazzling",
"bookish",
"goth",
"cheap",
"famous",
"darling",
"full blown",
"stuffed",
"satanic",
"tweaky",
"sneezy",
"supernatural",
"shit-flipping",
"instant",
"barren",
"gilded",
"burnt",
"blowup",
"plush",
"taxidermy",
"therapeutic",
"haywire",
"static",
"trancelike",
"forbidden",
"establishment",
"drab",
"paper-thin",
"makeshift",
",well, maybe not necessary, but interesting",
"wrong",
"unclear",
"popular",
"on-demand",
"helpful",
"batty",
"porcelain",
"jaded",
"weekend",
"somber",
"wind-up",
"embarrassing",
"mature",
"impish",
"teacup",
"residential",
"dry-eyed",
"average",
"positive",
"washed out",
"washed up",
"communal",
"theatrical",
"dawny",
"receding",
"proven",
];

var getRandomAdj3= function () {
    return adj3s[Math.floor(Math.random() * adj3s.length)];
};

var adj3 = getRandomAdj3();

//////////console.log(adj3);

//singularNoun

var singNoun3s = [
"drop scout",
"shot counter",
"matchbox",
"Sigg",
"pixelpusher",
"webmaster",
"blog buddy",
"keystone cop",
"saint bernard",
"bride",
"groom",
"sunroof",
"Pokémon",
"butcher",
"exec",
"Disney Princess",
"Kitchen Magician",
"spoof",
"clone",
"drone friend",
"friend-in-law",
"telemarketer",
"delivery boy",
"smarty pants",
"do-gooder",
"man’s man",
"low life",
"bosslady",
"human rights activist",
"census collector",
"dermatologist",
"lookalike",
"you-type",
"kiddo",
"conor oberst impersonator",
"bandmate",
"Trader Joe’s employee",
"human rights’ violation",
"sandwich master",
"bobsledder",
"twinky",
"scowl",
"fossil",
"beautiful riverlight",
"applebees",
"mall",
"hotrod",
"sorry sap",
"curriculum",
"conveyer belt",
"Dominos",
"troll",
"bread pudding place",
"statue of me",
"eucalyptus plant",
"corner store",
"uncoordinated fool",
"idiot fuck",
"happiness parade",
"loneliness boat",
"screwed up yacht",
"pubescent understudy",
"disaster capitalist",
"dealer",
"white boy",
"pixie",
"Michael Cera act-alike",
"nuisance",
"gumball thief",
"windowdressing",
"fluffy",
"thing i used to do",
"parrot",
"peer mediator",
"gym leader",
"student government official representative",
"friend of a friend",
"suggested lover",
"hottie",
"negative nancy",
"addict",
"duo",
"string quartet",
"patriarchy",
"non-practicing politician",
"haterrr",
"Facebook friend",
"Twitter follower",
"person i used to be kinda close to",
"cat whisperer",
"normcore activist",
"local rabbi",
"allstar cast",
"MVP",
"regular tending bar",
"me-type",
"way i act when lonely",
"serious problem",
"haircut circa 1988",
"Yves Klein Blue",
"mini golf place",
"beach or whatever",
"Jeweler’s",
"hot spot",
"smoking area",
"tech shoppe",
"sky",
"bot",
"halal cart",
"haha",
"skeleton",
"charrracter down the block",
"specialty store",
"Chinatown Sephora",
"long island mansion"

];

var getRandomsingNoun3= function () {
    return singNoun3s[Math.floor(Math.random() * singNoun3s.length)];
};

var singNoun3 = getRandomsingNoun3();

//////////console.log(singNoun3);


//presenttenseverbwiths
var verb3s = [
"buys",
"drives",
"catapults",
"golfs",
"downloads",
"sermonizes",
"resists",
"undoes",
"control alt deletes",
"laces up",
"reinvents",
"rescues",
"checks out",
"swipes right on",
"live tweets",
"blogs",
"forgets",
"decks out",
"covers up",
"traces",
"velcros",
"snorts",
"pisses off",
"freeze-dries",
"overdoes",
"cloisters",
"shakes up",
"prays for",
"monopolizes",
"bogarts",
"busts out",
"binge watches",
"uploads",
"likes",
"remembers",
"breaks down",
"comes down from",
"shazams",
"googles",
"netflixes",
"records",
"documents",
"codes",
"dry humps",
"hides",
"re-routes",
"ropes in",
"survives",
"deletes",
"refreshes",
"touches up",
"cradles",
"nurses",
"undreams",
"streams",
"KOs",
"humidifies",
"happy cries over",
"reveals",
"clicks",
"escapes",
"levels up",
"draws out",
"traps",
"orgasms",
"listens closely to",
"apologizes for",
"holds out for",
"mimics",
"shadows",
"toys with",
"flies by",
"worries",
"squirrels away",
"divvies up",
"goes on and on about",
"doesn’t want me to notice",
"can live without",
"3D prints",
"performs a series of dangerous stunts for",
"tries to make sense of",
"writes a short story about",
"stages an impromptu play about",
"stitches together",
"takes a load of",
"questions",
"has a nightmare about",
"puts up a craigslist ad about",
", half-kidding, makes a toast to",
", in the middle of broad daylight, gets rid of",
", shaken by bad omens, unmoors",
", amid the faded beach light, soaks up",
", six espressos later, pays attention to",
", out of desperation, hacks into",
"pleads with",
"spooks out",
"just chills for the whole day with",
"never takes out",
"loves to mess around with",
];

var getRandomVerb3= function () {
    return verb3s[Math.floor(Math.random() * verb3s.length)];
};

var verb3 = getRandomVerb3();

//////////console.log(verb3);
//article

var anotherArticle3s = [
"the",

];

var getRandomAnotherarticle3= function () {
    return anotherArticle3s[Math.floor(Math.random() * anotherArticle3s.length)];
};

var anotherArticle3 = getRandomAnotherarticle3();

//////////console.log(anotherArticle3);
//noun
var noun3s = [
"only way i feel safe",
"passcode to my sincerity",
"walk to the deli",
"gumbo you made stoned",
"cheerios i have in bed",
"answer",
"Hudson River Merman",
"movie set",
"swim time",
"Russian fairytale",
"Count of Monte Cristo",
"time traveler’s husband",
"secret",
"Dark Ages",
"dream i had on the drive over",
"right side of my brain",
"doodles in my diary",
"YMCA",
"electric slide",
"song in my head",
"snake in my bed",
"sugar on my tongue",
"igloo i crawled into",
"love shack love shack",
"L train",
"G train",
"old cold spaghetti",
"yuzu dressing",
"fact that Sting plays the lute",
"reason I’m single",
"Heart of Darkness",
"grasshopper’s song",
"happiness patrol",
"Museum of Natural History",
"story of my life",
"coke habit of, Ladies and Gentlemen, Mr. Sigmund Freud",
"last man on earth",
"last time i played Life",
"Do Not Call list",
"missing link",
"Food and Drug Administration",
"original Swiss Army knife",
"next generation",
"zeitgeist",
"art of war",
"best of us",
"gray sole with lemon",
"story behind my limp",
"world’s first email",
"stock exchange",
"DMV",
"only Denny’s this side of Costa Rica",
"cupcake fiasco!",
"ramen from my mouth",
"shark fin soup",
"Private Collection",
"Zen Garden",
"deprivation chamber",
"cool whip",
"wink wink ~problem~",
"Only Living Boy in New York",
"knish i wish you’d eaten",
"dengue fever we brought back",
"booty call",
"five o clock shadow",
"last time I saw you",
"second time I pee in the shower",
"discovery channel",
"sample sale",
"class",
"fly in my eye",
"wasp in my grasp",
"loose tooth",
"one that got away",
"criminal minds episode where everyone talks about getting a raise",
"first time",
"pack of orbit in the dryer",
"budget circus",
"rent",
"meadows where I live",
"shadows",
"forgiveness",
"temperature",
"feline tendencies",
"feminine mystique",
"symptoms",
"diagnosis",
"prognosis",
"rivalry",
"Forest of No Trees",
"language you know",
"Place of Reckoning",
"Science of Laughter",
"blowtorch",
"return of... guess who",
"Silence",
"Way I Love You",
"Reason I’m Here",
"Heart Wants What It Wants",
"Land Before Time",
"Man on a Wire",
"Patriarchy",
"intention",
"point",
"ballet",
"curl",
"bet",
"bruce willis commercial",
"making of This American Life",
"country",
"Origami Tournament",
"Magic: the Gathering champion",
"tremor",
"new guy",
"collected poems of James James Franco",
"collected poems of some white guy",
"fundraiser",
"Kids Aren't Alright",
"saints",
"Cure",
"Beach Boys",
"junk",
"Who",
"Game",
"script",
"Vampire Diaries",
"empire strikes back",
"60's",
"Onion",
"New York Times",
"Standard",
"community garden",
"book of the dead",
"Old Testament",
"bacon",
"20 strangers in my attic",
"First Anniversary",
"eyes",

];

var getRandomNoun3= function () {
    return noun3s[Math.floor(Math.random() * noun3s.length)];
};

var noun3 = getRandomNoun3();

//////////console.log(noun3);
//punctuation

var punctuation3s = [
".",
",",
"~",
"//",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation3= function () {
    return punctuation3s[Math.floor(Math.random() * punctuation3s.length)];
};

var punctuation3 = getRandomPunctuation3();

//////////console.log(punctuation3);


//--------------------------------------------------
//4.sentence who traces your suggested lovers?

//who
var who4s = [
"who",
"what",
];

var getRandomwho4= function () {
    return who4s[Math.floor(Math.random() * who4s.length)];
};

var who4 = getRandomwho4();

//////////console.log(who4);

//verb s ending
var verb4s = [
"scares",
"tempts",
"sacrifices",
"finds",
"sees",
"believes",
"shelters",
"corrects",
"saves",
"cherishes",
"lets go",
"furnishes",
"renews",
"tickets",
"serenades",
"breast strokes",
"leapfrogs",
"corners",
"craps out on",
"completes",
"fancifies",
"snooze-buttons",
"hot-tubs",
"liquefies",
"takes care of",
"smokes",
"endangers",
"shortlists",
"spearheads",
"listerines",
"spices up",
"drunk dials",
"uninvites",
"e-vites",
"misplaces",
"wings",
"invokes",
"plagiarizes",
"puts a wrap on",
"cherry-tops",
"daydreams",
"walks on",
"sleeps beside",
"overvalues",
"hypes",
"choreographs",
"connects",
"short-circuits",
"nibbles at",
"trips over",
"dignifies",
"drags out",
"tempers",
"slowclaps",
"winks at",
"wrecks",
"blows up",
"claws at",
"pauses for",
"marries",
"shows up",
"dumbly flicks",
"assembles",
"reverts to",
"wants",
"needs",
"is interested in",
"is looking for",
"gives a hoot about",
"gives me props for",
"makes you think of",
"hurt",
"evolved into",
"inherited",
"left hints of",
"paid for",
"smashed up",
"lured",
"prized",
"puked politely all over",
"big-screened",
"wormed up beside",
"folded over",
"signed up for",
"measured, in the dark,",
"chewed the gumball of",
"sleeved the sneeze of",
"chipped the china of",
"danced the robot of",
"pawed the yarn of",
"closed the laptop on",
"laminated",
"called 911 on",
"punctured the cocoon of",
"spilled the beans on",
"put the Ray-Bans on",

];

var getRandomverb4= function () {
    return verb4s[Math.floor(Math.random() * verb4s.length)];
};

var verb4 = getRandomverb4();

//////////console.log(verb4);


//possessive pronoun
var pp4s = [
"our",
"my",
"your",
"our",
"my",
"your",
"our",
"my",
"your",
"her",
"his",
"their",
];

var getRandompp4= function () {
    return pp4s[Math.floor(Math.random() * pp4s.length)];
};

var pp4 = getRandompp4();

//////////console.log(pp4);

//nounsingorplral

var noun4s = [
"innocence",
"child",
"guilty pleasure",
"fingers",
"friday night plans",
"lovelife",
"truth",
"home",
"daughter",
"treehouse",
"dictator",
"text messages from last night",
"way of dealing with things",
"way of finding the meaning in things",
"way of having a good time without hurting others",
"favorite past life",
"favorite fundraising scheme",
"sabertooth",
"sweet tooth",
"heart",
"eyes",
"soul",
"world",
"voice",
"veins",
"blindness",
"hunger",
"cuddle time",
"vision",
"purity",
"grammar",
"feelings",
"long distance relationship",
"creation",
"hibernation",
"winter wear",
"genetic makeup",
"obsessions",
"place in history",
"skin",
"inner-flame",
"favorite taco stand",
"nerves",
"diet",
"nourishment",
"attractiveness",
"science",
"code",
"imagination",
"lassitude",
"gunpowder",
"bombs",
"mind",
"sky",
"fetish",
"brainpower",
"laziness",
"murmurs",
"muumuu",
"susurration",
"bowl of calla lilies",
"trainwreck",
"tears",
"fears",
"moodiness",
"motivation",
"healthy attitude",
"consciousness",
"conscience",
"progress",
"toska",
"mamihlapinatapei",
"wabi-sabi",
"schadenfreude",
"l’appel du vide",
"saudade",
"initiation",
"sympathy",
"mirror neurons",
"one good idea",
"corpses",
"current dimension",
"beet juice",
"911 calls",
"migration",
"climate",
"Honda Civic",
"mythology",
"bootycalls",
"old house",
"portico of chatty lovers",
"smoke signals",
"heresies at midnight",
"island of disobedience",

];

var getRandomnoun4= function () {
    return noun4s[Math.floor(Math.random() * noun4s.length)];
};

var noun4 = getRandomnoun4();

//////////console.log(noun4);

//?
var question4s = [
"?",
"",
];

var getRandomquestion4= function () {
    return question4s[Math.floor(Math.random() * question4s.length)];
};

var question4 = getRandomquestion4();

//////////console.log(question4);



//--------------------------------------------------
//5.sentence5 "everything is windowlight & swallows, passing trains & lunch."

//everything so much or all
var everything5s = [

"everything",
"so much",
"all",
];

var getRandomeverything5= function () {
    return everything5s[Math.floor(Math.random() * everything5s.length)];
};

var everything5 = getRandomeverything5();

//////////console.log(everything5);

//is was or becomes
var becomes5s = [
"is",
"was",
"becomes",
];

var getRandombecomes5= function () {
    return becomes5s[Math.floor(Math.random() * becomes5s.length)];
};

var becomes5 = getRandombecomes5();

//////////console.log(becomes5);

//singularnoun
var noun5s = [
"sabotage",
"gunmetal",
"Christmas",
"sky",
"sleep deprivation",
"milk",
"blushing",
"roseate",
"serrate",
"teeth",
"science",
"sprawl",
"blueness",
"location",
"sadness",
"aloneness",
"desire",
"filament",
"bone",
"skeleton",
"romance",
"commiseration",
"reflection",
"blasphemy",
"repulsion",
"response",
"latitude",
"environment",
"cavity",
"crystal",
"revelation",
"peach",
"velvet",
"lilac",
"treason",
"laundry",
"breakfast",
"anticipation",
"exhaustion",
"theory",
"fire",
"ice",
"nylon",
"restlessness",
"chlorophyll",
"mystery",
"punctuation",
"lunacy",
"coldbrew",
"babytalk",
"sleeptalk",
"ignition",
"heartgrease",
"appleshine",
"tumbleweed",
"ampersand",
"halfshell",
"halftone",
"melt",
"blare",
"tincture",
"snowpea",


];

var getRandomnoun5= function () {
    return noun5s[Math.floor(Math.random() * noun5s.length)];
};

var noun5 = getRandomnoun5();

//////////console.log(noun5);

//pn
var pn5s = [
"silhouettes",
"silks",
"carcinogens",
"cop cars",
"soft pretzels",
"california rolls",
"blank stares",
"jumper cables",
"closets",
"trees",
"windows",
"trick fires",
"ponds",
"sunglasses",
"power naps",
"dishes",
"swallows",
"arrows",
"pennies",
"eye drops",
"lanyards",
"bruises",
"berries",
"poems",
"treads",
"eyelashes",
"lemons",
"fingers",
"lips",
"coffee stains",
"vitamins",
"zippers",
"buttons",
"freckles",
"guppies",
"Doritos",
"mailboxes",
"lungs",
"worms",
"bees",
"storms",
"diaries",
"passwords",
"jokes",
"nightcaps",
"noodles",
"tics",
"stitches",
"pics",
"avocados",
"corners",
"Corgis",
"shutters",
"shudders",
"bike spokes",
"barrettes",
"split ends",
"sporks",
"toothaches",
"traps",
"menus",
"post-its",
"claws",
"chips",

];

var getRandompn5= function () {
    return pn5s[Math.floor(Math.random() * pn5s.length)];
};

var pn5 = getRandompn5();

//////////console.log(pn5);

//comma,

//adj

var adj5s = [
"ancient",
"silent",
"wooden",
"designer",
"undone",
"swollen",
"violet",
"misted",
"slow",
"irreversible",
"perfect",
"dreamed",
"motorized",
"quick",
"sudden",
"faded",
"slippery",
"chill",
"flaky",
"blind",
"tender",
"new",
"old",
"forced",
"easy",
"hard",
"quartz",
"chiffon",
"indelible",
"revival",
"coarse",
"rugged",
"light",
"touchy",
"hoarse",
"floating",
"high-fructose",

];

var getRandomadj5= function () {
    return adj5s[Math.floor(Math.random() * adj5s.length)];
};

var adj5 = getRandomadj5();

//////////console.log(adj5);

//pn again
var pnagain5s = [
"stains",
"tonsils",
"ribs",
"ropes",
"oranges",
"cigarettes",
"forties",
"trees",
"no-no’s",
"puddles",
"glossaries",
"indexes",
"mouths",
"stomachs",
"yogurts",
"popups",
"islands",
"bridges",
"apologies",
"almosts",
"lawyers",
"dunks",
"preserves",
"lists",
"feathers",
"suds",
"cores",
"tangerines",
"guests",
"sleepovers",
"fames",
"tangents",
"bureaucrats",
"snowballs",
"walkouts",
"caveats",
"issues",
"clouds",
"aisles",
"cocktails",
"hours",
"germs",
"notes",
"commas",
"naps",
"reefs",
"toxins",
"flipflops",
"factories",
"lifts",
"buffets",
"poms",
"headlines",
"shells",
"drops",
"strangers",
"blossoms",
"licks",
"hiccups",

];

var getRandompnagain5= function () {
    return pnagain5s[Math.floor(Math.random() * pnagain5s.length)];
};

var pnagain5 = getRandompnagain5();

//////////console.log(pnagain5);

//&

//nounagain
var nounagain5s = [
"spring break",
"plexiglass",
"gloss",
"blaze",
"cardamom",
"popcorn",
"gristle",
"distance",
"crema",
"guac",
"spite",
"garlic",
"posture",
"trickle",
"secret",
"foghorn",
"yam",
"emergency",
"soothe",
"moss",
"buttermilk",
"smoothie",
"chafe",
"marjoram",
"litany",
"approach",
"lagoon",
"poppyseed",
"tonic",
"feedback",
"melodrama",
"viscera",
"elegy",
"practice",
"fixture",
"leafless",
"pulp",
"sap",
"tincture",
"sod",
"fuzz",
"glacier",
"disease",
"shoreline",
"brine",
"rind",
"watermark",
"chain-link",
"flak",
"raffle",

];

var getRandomnounagain5= function () {
    return nounagain5s[Math.floor(Math.random() * nounagain5s.length)];
};

var nounagain5 = getRandomnounagain5();

//////////console.log(nounagain5);

//punctuation
var punctuation5s = [
".",
",",
"~",
"//",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation5= function () {
    return punctuation5s[Math.floor(Math.random() * punctuation5s.length)];
};

var punctuation5 = getRandomPunctuation5();

//////////console.log(punctuation5);


//--------------------------------------------------
//6.sentence 6, fragments
var fragments = [
"not enough daylight.",
"diamonds in the gutter.",
"still a pleat of loss.",
"everyday a haircut.",
"a mind of summer.",
"glaze of yesterday.",
"open mouth to snow.",
"hope a mailbox of knives.",
"all my performance-enhancing angels.",
"a whole street of shadow puppets.",
"everyone’s on indefinite leave.",
"put your lanterns in the air.",
"spies underwater, singing.",
"a drifter in a drifter’s back seat.",
"i breathe what the coroner allows.",
"spokesmen say nothing, nothing.",
"the sky recedes.",
"i read poems at the orgy.",
"the friendly delicatessen closes.",
"good thing we have coats.",
"the sofa knows me.",
"treetop gardeners, sandbox architects.",
"give me an incomplete.",
"real convincing.",
"language forgiving as ever.",
"i know i don’t know.",
"blueprints to shadows.",
"quick, forget.",
"the worst kind of elegy.",
"leaves change shape.",
"two blinking figures.",
"submarining for a while.",
"i forget the tune, but know how it goes.",
"when i resurface, the world’s sunken.",
"allergic to what’s most familiar.",
"what sunlight does to hide.",
"everyone is a series of minions, millions.",
"nothing but seasoning.",
"my heart imitates a piece of old lettuce.",
"everyone’s a problem.",
"i don’t like pretending.",
"dance to everything, not just music.",
"fall asleep rapidly for this.",
"my things disown me.",
"don’t build anything by moonlight.",
"fish tank at the side of the road, guppies.",
"permission to just float.",
"soul stuck in a revolving door, sort of open.",
"museums and museums devoted to light.",
"welcome to the circus.",
"15% battery remaining.",
"i am not the life of the party.",
"if you are, raise your hand.",
"suddenness pulls over and takes a leak.",
"tell me why.",
"it is OK to have favorites.",
"tonight will be fine.",
"i am a lot of things, in the form of a question.",
"everything sticks a little.",
"my mind a box of pings.",
"and it gets worse.",
"people are the new artists.",
"little caterpillar of feeling, wiggling in the fraught grass.",
"i’m an orphanage of fears.",
"falafels in the park dark.",
"a big tree to sleep under.",
"rocks move a little.",
"we’re all a little overboard.",
"happy hour’s over.",
"come over for beers and doing nothing.",
"it’s 9 o’clock on a Saturday.",
"i wish i were there.",
"smells like fries and coconut.",
"smells like one orchid far away.",
"i dig ladybugs.",
"i cry a party.",
"somebody back me up.",
"time to kiss a snake.",
"i already forgot the slow-motion replay.",
"give us the highlights.",
"all the high-speed camera angles agree.",
"try having a pet blowfish.",
"i’m jealous of my web-presence.",
"another brunch in the moonlight.",
"sing us a song you’re the piano man.",
"i think i’m evolving.",
"furry things in the sea resonate with me.",
"hey, we’re all on hold.",
"you wear those shoes and I will wear that dress.",
"something needed to be done.",
"some tears are prettier than others.",
"it’s official.",
"i’m back for my gym shorts.",
"it is a friday night devoid of hooliganism.",
"welcome to another day on the earth.",
"i take pictures of all cats, small cats, tall cats, and even medium cats.",
"careful with my bullet.",
"maybe i’m amazed.",
"i’ll dance as long as it takes.",
"something about a greasy bar.",
"a kiss on the cheek, slowly drying.",
"all the interruptions that brought you to this conversation.",
"symptoms of something you don’t have.",
"how a lemon might feel about soap.",
"everything’s a boat, tryna float to other boats.",
"everything’s a wreck, which makes it OK.",
"a renaissance of good timing.",
"It’s A Wonderful Life.",
"I wish it were easier.",
"everything is missing.",
"it’s a matter of seeing things through.",
"eyes making noise.",
"watch me fall.",
"i hunger. i retreat.",
"i am a slow dissolve.",
"i’m me.",
"i walk by.",
"i swim to you.",
"it is bleak. let’s eat pudding.",
"i do not have a cure.",
"i go home.",
"i listen in.",
"i peek inside.",
"i steal a vague kernel of joy.",
"i donate my hair.",
"i turn around.",
"i walk the line.",
"i fly from the scene.",
"i put on my glasses.",
"i revive something.",
"i hide.",
"i refuse the medicine.",
"i’m a pain.",
"i can confirm it.",
"i’m on the other side of the glass.",
"i’m picking pears.",
"i’ll eat anything.",
"i shiver a lot.",
"i dry myself off.",
"it’s freezing. i swim.",
"i run away. i sparkle.",
"i look up. i change my mind.",
"i spy. you’re right.",
"nothing can be done.",
"i drink up",
"i forget. it works.",
"i climb. the place is a letdown.",
"i hitchhike. traffic.",
"it’s easy. i complicate things.",
"i put my foot in the door.",
"i am heavy. i float.",
"it’s fine. the water’s light.",
"hi there face here.",
"that’s society for you. ",
"something stinks. ",
"aha. ",
"ahem. ",
"argh. ",
"aww. ",
"blah. ",
"boo-hoo. ",
"duh. ",
"eek. ",
"ew. ",
"hardy-har-har. ",
"hooray. ",
"ick. ",
"lah-de-dah. ",
"ooh-la-la. ",
"oops. ",
"ouch. ",
"phew. ",
"poof. ",
"tsk-tsk. tut-tut. ",
"ugh. ",
"whoop-de-doo. ",
"wow. ",
];

var getRandomfragments= function () {
    return fragments[Math.floor(Math.random() * fragments.length)];
};

var fragment = getRandomfragments();

//////////console.log(fragment);



//7. Sentence Pattern 7 eg "we drank until morning, when everything was quiet"

//first person collective pronoun
var collectivePros = [
"We",
];

var getRandomcollectivePros= function () {
    return collectivePros[Math.floor(Math.random() * collectivePros.length)];
};

var collectivePro = getRandomcollectivePros();

//////////console.log(collectivePro);

//past tense verb phrase **trickyTricky
var pastPhrases = [
"drank until morning",
"tested the water",
"opened our chakras",
"proceeded with caution",
"kept refreshing the page",
"put on pajamas",
"refused to be sure",
"swiveled our swivel chairs",
"listened",
"found a way home",
"drifted off",
"tried to cancel our subscription",
"finished the last of our dinner",
"drooled on our pillow",
"took a snow day",
"danced with the locals",
"held a series of ceremonies",
"sucked lollipops",
"kissed our favorite people",
"scratched each other’s back",
"listened for whales",
"avoided Green Peace canvassers",
"counted the clouds",
"flicked pieces of grass",
"pressed backspace",
"decided on our costumes",
"shared our secrets",
"got super spiritual",
"closed our eyes",
"rustled nervously inside",
"never stopped looking",
"slurped noodles",
"slurpee’d our tongues purple",
"thought we had discovered a cure",
"talked openly",
"hid in the public restroom",
"brainstormed coping strategies",
"downloaded updates",
"changed our calendars",
"slept through the night",
"ate bon bons",
"protested",
"wore pink slippers on the hike",
"sipped the lake",
"tried to forget",
"moved like smog",
"decided what we would wear",
"took our vitamins",
"played poker",
"smoked a blunt",
"thought about the bees",
"nested in our vulnerability",
"swapped germs",
"played telephone",
"got each other sick",
"camped out",
"donated our good ideas to charity",
"imagined each other naked",
"made cucumber sandwiches",
"buttered bread",
"had brunch",
"went to college",
"got our PhD’s",
"wept for a full year",
"sent you holiday cards",
"bought lotto tickets",
"gave you an evil look",
"asked you about your children",
"skied in Aspen",
"watched romcoms",
"made pasta everyday, sometimes farfalle, sometimes rigatoni",
"documented our lives",
"reviewed the course material",
"lit candles",
"sorted the fog",
"made a fresh pot of coffee",
"watched cartoons",
"drank lime daiquiris",
"spent a month doing this Monet jigsaw puzzle",
"sang scales",
"kept going missing",
"cross country roadtripped",
"got tattoos",

];

var getRandompastPhrases= function () {
    return pastPhrases[Math.floor(Math.random() * pastPhrases.length)];
};

var pastPhrase = getRandompastPhrases();

//////////console.log(pastPhrase);

//temporal preposition

var tempPreps = [
"when",
"before",
"until",
"while",
"after",
"as",
"because",
];

var getRandomtempPreps= function () {
    return tempPreps[Math.floor(Math.random() * tempPreps.length)];
};

var tempPrep = getRandomtempPreps();

//////////console.log(tempPrep);

//noun with a past tense verb phrase

var pastPhrases2 = [
"everything was quiet",
"things decided what they meant",
"it was cool",
"the water was soft",
"we got rich",
"one of us gave the signal",
"frostbite set in",
"our dreams died",
"everyone grew up",
"the market crashed",
"the internet was on its deathbed",
"we got bored",
"people, some religious, persuaded the gods",
"our Jeep crashed",
"we lost service",
"we lost feeling in our hands",
"nothing mattered",
"the world turned its back on us",
"the dog show started",
"the night the music died happened",
"Harry Met Sally",
"the sun set",
"Katy Perry and Russell Brand split",
"we opened a mysterious letter",
"CVS ran out of Purell",
"the beach looked like it was on fire",
"it turned into a beautiful way of life",
"the guards paced quietly",
"the solar eclipse happened",
"one of us called it a night",
"Dan, or Damien maybe, said something about sinusitis",
"the eschaton did its thing",
"we could afford it",
"the gutters filled with rain",
"Sam figured out the combination",
"you moved to the west coast",
"the sky parted",
"a small dove flew into our lap",
"Congress passed a bill saying we couldn’t",
"the stars possessed weird light",
"all the fruit flies fainted",
"i quit smoking",
"the cruiser was stolen",
"things got personal",
"things got heated",
"i pressed reverse",
"the clouds turned mauve",
"the enemy readied their weapons",
"we fell in love",
"somebody, obviously annoyed, said ~stop~ ",
"we slowly lost our desire for change",
"a duckling landed in the jacuzzi",
"they were out of everything bagels",
"the principal flipped a shit",
"my therapist said it probably wasn’t a good idea",
"our art was pure",
"the light changed",
"the healer fell ill",
"the tide weakened",
"the one wave broke",
"my smile disappeared",
"i ran out of nicknames for you",
"i pondered the likely repercussions",
"i googled myself",
"the set went acoustic",
"Starbucks started selling cakepops",
"they announced a new planet",
"March thawed",
"a constellation of glow-in-the-dark stars fell off your ceiling",
"the showers got cold",
"Twin Peaks ended",
"we misplaced our favorite things",
"we rebranded",
"we planted a handful of micro herbs",
"the gravitational field weakened",
"we swallowed glass",
"we read Cosmo’s advice column",
"the house went up in innocent flames",
"my hair grew out",
"an eyelash flew away from my nose",
"our luck soured",
"somebody turned up the volume on our lives",
"something inside us went beep beep",
"you read Infinite Jest",
"the tests came back normal",
"Talula blogged about it",
"the service road was closed",
"you developed a weird, almost pretty, rash",
"all hope was lost",
"the biscuits were done, golden brown & flaky",
"the vacationers left",

];

var getRandompastPhrases2= function () {
    return pastPhrases2[Math.floor(Math.random() * pastPhrases2.length)];
};

var pastPhrase2 = getRandompastPhrases2();




//punctuation

var punctuation7s = [
".",
",",
"~",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation7= function () {
    return punctuation7s[Math.floor(Math.random() * punctuation7s.length)];
};

var punctuation7 = getRandomPunctuation7();


//----- sentence 7 repeat section---

//7. Sentence Pattern 7 eg "we drank until morning, when everything was quiet"

//first person collective pronoun
var collectiveProsrep = [
"We",
];

var getRandomcollectiveProsrep= function () {
    return collectiveProsrep[Math.floor(Math.random() * collectiveProsrep.length)];
};

var collectiveProrep = getRandomcollectiveProsrep();



//past tense verb phrase **trickyTricky
var pastPhrasesrep = [
"drank until morning",
"tested the water",
"opened our chakras",
"proceeded with caution",
"kept refreshing the page",
"put on pajamas",
"refused to be sure",
"swiveled our swivel chairs",
"listened",
"found a way home",
"drifted off",
"tried to cancel our subscription",
"finished the last of our dinner",
"drooled on our pillow",
"took a snow day",
"danced with the locals",
"held a series of ceremonies",
"sucked lollipops",
"kissed our favorite people",
"scratched each other’s back",
"listened for whales",
"avoided Green Peace canvassers",
"counted the clouds",
"flicked pieces of grass",
"pressed backspace",
"decided on our costumes",
"shared our secrets",
"got super spiritual",
"closed our eyes",
"rustled nervously inside",
"never stopped looking",
"slurped noodles",
"slurpee’d our tongues purple",
"thought we had discovered a cure",
"talked openly",
"hid in the public restroom",
"brainstormed coping strategies",
"downloaded updates",
"changed our calendars",
"slept through the night",
"ate bon bons",
"protested",
"wore pink slippers on the hike",
"sipped the lake",
"tried to forget",
"moved like smog",
"decided what we would wear",
"took our vitamins",
"played poker",
"smoked a blunt",
"thought about the bees",
"nested in our vulnerability",
"swapped germs",
"played telephone",
"got each other sick",
"camped out",
"donated our good ideas to charity",
"imagined each other naked",
"made cucumber sandwiches",
"buttered bread",
"had brunch",
"went to college",
"got our PhD’s",
"wept for a full year",
"sent you holiday cards",
"bought lotto tickets",
"gave you an evil look",
"asked you about your children",
"skied in Aspen",
"watched romcoms",
"made pasta everyday, sometimes farfalle, sometimes rigatoni",
"documented our lives",
"reviewed the course material",
"lit candles",
"sorted the fog",
"made a fresh pot of coffee",
"watched cartoons",
"drank lime daiquiris",
"spent a month doing this Monet jigsaw puzzle",
"sang scales",
"kept going missing",
"cross country roadtripped",
"got tattoos",

];

var getRandompastPhrasesrep= function () {
    return pastPhrasesrep[Math.floor(Math.random() * pastPhrasesrep.length)];
};

var pastPhraserep = getRandompastPhrasesrep();



//temporal preposition

var tempPrepsrep = [
"when",
"before",
"until",
"while",
"after",
"as",
"because",
];

var getRandomtempPrepsrep= function () {
    return tempPrepsrep[Math.floor(Math.random() * tempPrepsrep.length)];
};

var tempPreprep = getRandomtempPrepsrep();



//noun with a past tense verb phrase

var pastPhrases2rep = [
"everything was quiet",
"things decided what they meant",
"it was cool",
"the water was soft",
"we got rich",
"one of us gave the signal",
"frostbite set in",
"our dreams died",
"everyone grew up",
"the market crashed",
"the internet was on its deathbed",
"we got bored",
"people, some religious, persuaded the gods",
"our Jeep crashed",
"we lost service",
"we lost feeling in our hands",
"nothing mattered",
"the world turned its back on us",
"the dog show started",
"the night the music died happened",
"Harry Met Sally",
"the sun set",
"Katy Perry and Russell Brand split",
"we opened a mysterious letter",
"CVS ran out of Purell",
"the beach looked like it was on fire",
"it turned into a beautiful way of life",
"the guards paced quietly",
"the solar eclipse happened",
"one of us called it a night",
"Dan, or Damien maybe, said something about sinusitis",
"the eschaton did its thing",
"we could afford it",
"the gutters filled with rain",
"Sam figured out the combination",
"you moved to the west coast",
"the sky parted",
"a small dove flew into our lap",
"Congress passed a bill saying we couldn’t",
"the stars possessed weird light",
"all the fruit flies fainted",
"i quit smoking",
"the cruiser was stolen",
"things got personal",
"things got heated",
"i pressed reverse",
"the clouds turned mauve",
"the enemy readied their weapons",
"we fell in love",
"somebody, obviously annoyed, said ~stop~ ",
"we slowly lost our desire for change",
"a duckling landed in the jacuzzi",
"they were out of everything bagels",
"the principal flipped a shit",
"my therapist said it probably wasn’t a good idea",
"our art was pure",
"the light changed",
"the healer fell ill",
"the tide weakened",
"the one wave broke",
"my smile disappeared",
"i ran out of nicknames for you",
"i pondered the likely repercussions",
"i googled myself",
"the set went acoustic",
"Starbucks started selling cakepops",
"they announced a new planet",
"March thawed",
"a constellation of glow-in-the-dark stars fell off your ceiling",
"the showers got cold",
"Twin Peaks ended",
"we misplaced our favorite things",
"we rebranded",
"we planted a handful of micro herbs",
"the gravitational field weakened",
"we swallowed glass",
"we read Cosmo’s advice column",
"the house went up in innocent flames",
"my hair grew out",
"an eyelash flew away from my nose",
"our luck soured",
"somebody turned up the volume on our lives",
"something inside us went beep beep",
"you read Infinite Jest",
"the tests came back normal",
"Talula blogged about it",
"the service road was closed",
"you developed a weird, almost pretty, rash",
"all hope was lost",
"the biscuits were done, golden brown & flaky",
"the vacationers left",

];

var getRandompastPhrases2rep= function () {
    return pastPhrases2rep[Math.floor(Math.random() * pastPhrases2rep.length)];
};

var pastPhrase2rep = getRandompastPhrases2rep();




//punctuation

var punctuation7srep = [
".",
",",
"~",
"//",
"*",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;",
"</br></br></br>",
"</br></br>",
];

var getRandomPunctuation7rep= function () {
    return punctuation7srep[Math.floor(Math.random() * punctuation7srep.length)];
};

var punctuation7rep = getRandomPunctuation7rep();



//--------------------------------

//Line Breaks


var formatting1s = [
"",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat1= function () {
    return formatting1s[Math.floor(Math.random() * formatting1s.length)];
};

var formatting1 = getRandomFormat1();


//

var formatting2s = [
"",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"............................................."
];

var getRandomFormat2= function () {
    return formatting2s[Math.floor(Math.random() * formatting2s.length)];
};

var formatting2 = getRandomFormat2();



//
var formatting3s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"....................................",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
" #",
"   $   ",
" ✩ ",
".・゜゜・",
" ",
" ✩ ",
".・゜゜・",
" ",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat3= function () {
    return formatting3s[Math.floor(Math.random() * formatting3s.length)];
};

var formatting3 = getRandomFormat3();



//

var formatting4s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
"....................................",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat4= function () {
    return formatting4s[Math.floor(Math.random() * formatting4s.length)];
};

var formatting4 = getRandomFormat4();




//
var formatting5s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat5= function () {
    return formatting5s[Math.floor(Math.random() * formatting5s.length)];
};

var formatting5 = getRandomFormat5();




var formatting6s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat6= function () {
    return formatting6s[Math.floor(Math.random() * formatting6s.length)];
};

var formatting6 = getRandomFormat6();





var formatting7s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat7= function () {
    return formatting7s[Math.floor(Math.random() * formatting7s.length)];
};

var formatting7 = getRandomFormat7();







var formatting8s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat8= function () {
    return formatting8s[Math.floor(Math.random() * formatting8s.length)];
};

var formatting8 = getRandomFormat8();



var formatting9s = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat9= function () {
    return formatting9s[Math.floor(Math.random() * formatting9s.length)];
};

var formatting9 = getRandomFormat9();



var formatting9srep = [
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ** * ** ** ** ****",
" :) ",
" ;) ",
" :( ",
"   <3   ",
"  $   ",
" #",
" ✩ ",
".・゜゜・",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
" ",
"</br></br></br>",
"</br></br>",
"</br>",
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
"</br>",
];

var getRandomFormat9rep= function () {
    return formatting9srep[Math.floor(Math.random() * formatting9srep.length)];
};

var formatting9rep = getRandomFormat9rep();




//-----------------------the magic!---------------
//-----------------------the magic!---------------
//-----------------------the magic!---------------
//-----------------------the magic!---------------


//1. Sentence Pattern Strings, Arrays etc.
var sentencePattern1 = personalPronoun + " " + verb + " " + possesive + " " + noun + " " + formatting3 + preposition + " " + intro + " " + nounSingular + " " + With + " " + adjNoun + " " + nounPlural + punctuation + " ";

var sentencePattern2 = like + " " + article2 + formatting4 + nounSing2 + ", " + possesivePronoun2 + " " + possesiveNoun2 + " " + anothernounSing2 +formatting2 + " " + is + " " + adverb2 + " " + pasttenseverb + punctuation2 + " ";

var sentencePattern3 = article3 + formatting5 + adj3 + formatting7 + singNoun3 + formatting8 + verb3 + " " + anotherArticle3 + " " + noun3 + punctuation3 + " ";

var sentencePattern4 = who4 + " " + verb4 + " " + pp4 + " "+ formatting1 + noun4 + question4 + " ";

var sentencePattern5 = everything5 + " " + becomes5 + " " + noun5 + " & " + pn5 + ", " + formatting6 + adj5 + " "  + pnagain5 + " & " + nounagain5 + punctuation5 + " ";

var sentencePattern6 = fragment + " ";

var sentencePattern7 = collectivePro + " " + pastPhrase + ", " + formatting9 + tempPrep +" " +pastPhrase2 + punctuation7 + " ";

var sentencePattern7rep = collectiveProrep + " " + pastPhraserep + ", " + formatting9rep + tempPreprep +" " +pastPhrase2rep + punctuation7rep + " ";

var sentences = [sentencePattern1, sentencePattern7rep, sentencePattern3, sentencePattern2, sentencePattern4, sentencePattern5, sentencePattern6, sentencePattern7];

//--------------------------------------
//2.GETTING RANDOM SENTENCES + FADE IN/OUT EFFECTS



    sentences.sort( function() { return 0.5 - Math.random();} );
      $("#poem").hide()
      $('#poem').empty();
  $("#poem").append(sentences[0],sentences[1],sentences[2]).fadeIn(3000);
  var poem = $("#poem").text()
  $("#results").hide().fadeIn(3000);
var colors = [ "blue", "red"];
var searchterms = [];
$('#poem').html(function (i, text) {
    return $.map(text.split(' '), function (word, i) {
   
         if(i == 3 || i == 8 || i == 10 || i == 20){
            var myArr = word.split('<br>')
            var doodie;
            if(myArr.length == 1){
                doodie = myArr[0]
                    doodie = doodie.replace(/\W/g, '')
                    //console.log(doodie)
            }else{
                for (var i = myArr.length - 1; i >= 0; i--) {
                    if(myArr[i].length > 0){
                        doodie = myArr[i]
                         //console.log(word)
                            doodie = doodie.replace(/\W/g, '')
                            //console.log(doodie)
                    }
                };
            }


       
            searchterms.push(doodie);
            //////////console.log('moo')
        return '<span style="color:'
             + colors[Math.floor(Math.random() * colors.length)]
             + '" class="' + doodie + '">' + word + '</span>';
         }else{
            return word
         }
    }).join(' ');

});


// setTimeout(function(){$("#results").fadeOut();},20000);
// setTimeout(function () { $("#poem").fadeOut(); }, 20000);
// setTimeout("location.reload(true);", 20900);














//hovering interaction
// $("#poem").hover(
//   function () {
//     $(this).animate({opacity: 0});
//   },
//   function () {
//     $(this).animate({opacity: 1});
//   }
// );
//slide down interaction for about section
var slideit = false;

// function slideYo (){
//     $(".decrip").slideDown(800);
//     Slideit = "open";
// }

// function slideNo (){
//     $(".descrip").slideUp(800);
//     Slideit = "closed";
// }

$('.clickit').click( function (){
    if(slideit == false){
        if(window.innerWidth < 992){
 $('.descrip').css('width','99%').css('padding','0 2%');
        }else{
 $('.descrip').css('width','80%').css('padding','0 2%');
        }
       
        slideit = true
    } else{
        $('.descrip').css('width','0').css('padding','0');
        slideit = false
    }
    

    });


//--------------------------------------
//4. USED STOCK IMAGE API

var underlines = $('#poem span')


var account_id = '883610';
var selected_category, search_term, infinite_scroll, page, jsonp_happening;

$(function() {

    //open search modal on page load

    ////////console.log(searchterms[0])



    //show a loading message when the search button is clicked

        page = 1;
        var results = $("#results");
        results.html("");



        //check if the user selected a category or did a keyword search
  

        //start the search


     $("html").trigger("bigstock_search", { q: searchterms, category:selected_category });

       




});

$('#poem span').on('mouseover', function(){
    var searchText = $(this).text().replace(/\W/g, '');

searchText = "#" + searchText;
//////console.log(searchText)
     var poop =  $(searchText)
     ////console.log(poop)
     if(poop.length < 1){
        poop = '#yacht'

     }
     $(poop).css('opacity','0.2')
})
$('#poem span').on('mouseout', function(){
     var searchText = "#"+ $(this).text().replace(/\W/g, '');
  var poop =  $(searchText)
  if(poop.length < 1){
        poop = '#yacht'

     }
     $(poop).css('opacity','0')
 
})
//populate the search results
$("html").on("bigstock_search", function(e, val){
    ////////console.log('happening')
    if(!jsonp_happening) {
        jsonp_happening = true;
        var results = $("#results");

        //setup the paramaters for the JSONP request
        var params = {};
        params.q = val.q;
        ////////console.log(params.q)
        params.limit = "100";
        

        function dothing(i, thing){
if(thing == ''){
    thing = getRandomnounagain5();
}
if(thing == 'yacht'){
    ////console.log('its a yacht!!')
}
        // var myUrl = "http://api.bigstockphoto.com/2/"+'account_id'+"/search/?callback=?q="+thing+"?limit=100";
        var myUrl = "http://api.giphy.com/v1/gifs/search?q="+thing+"&api_key=dc6zaTOxFJmzC"
        // //console.log(myUrl)
                //console.log('++++')
            //////
            $.ajax({
              dataType: "json",
              url:  myUrl,
     
              success: function(data, err){

                                ////console.log(thing)
                                    //console.log(data)
                      if(data.data.length < 1){
                            dothing(i,'yacht');
                      }else{
                            // if(data && data.data && data.data.images) {

                                data.data.sort( function() { return 0.5 - Math.random();} );
                                var random = data.data[1];

                                   // var template = $(".item-template");
                                    //////console.log(thing)
                                    results.append('<img id="'+thing+'" src="' + random.images.original.url + '" ></a>');
                                    // $('#results').css('background-image', 'url(' + random.small_thumb.url + ')');
                                   //template.find("img").attr("src",random.small_thumb.url);
                                    //results.append(template.html());
                                        //console.log('i got here')
                                        //console.log(random)
                             //    } else {
                                   
                             // }
                            jsonp_happening = false;
                        }
                    },
            fail: function(){
                dothing(i,getRandomnounagain5())
            }
            });
            /////
         




                // $.getJSON("http://api.bigstockphoto.com/2/"+account_id+"/search/?callback=?", {q:thing,limit:"100"}, function(data, err){
                //               ////console.log('success!')
                //     }).done(function(data) {
                //               ////console.log(thing)
                      
                //             if(data && data.data && data.data.images) {

                //                 data.data.images.sort( function() { return 0.5 - Math.random();} );
                //                 var random = data.data.images[1];

                //                    // var template = $(".item-template");
                //                     //////console.log(thing)
                //                     results.append('<img id="'+thing+'" src="' + random.small_thumb.url + '" ></a>');
                //                     // $('#results').css('background-image', 'url(' + random.small_thumb.url + ')');
                //                    //template.find("img").attr("src",random.small_thumb.url);
                //                     //results.append(template.html());

                //                 } else {
                                   
                //              }
                //             jsonp_happening = false;
                //           }).fail(function() {
                //             alert('poop')
                //           })


        }


        /* end dothing */
for (var i = params.q.length - 1; i >= 0; i--) {
    var thing = params.q[i]
        dothing(i, thing)
   
    }

    }
});





$(document).mousemove(function(e) {
    $('#results img').offset({
        left: e.pageX - 100,
        top: e.pageY -200
    });
});
setTimeout(function(){$("#results").fadeOut();},20000);
setTimeout(function () { $("#poem").fadeOut(); }, 20000);
setTimeout(start, 20900);
}

start();