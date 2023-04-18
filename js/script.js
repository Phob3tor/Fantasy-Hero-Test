"use strict";



const classes = [
    ["Assassine", 0, "./img/classes/assassin.png"],
    ["Kreuzritter", 0, "./img/classes/crusader.png"],
    ["Druide", 0, "./img/classes/druid.png"],
    ["Waldläufer", 0, "./img/classes/hunter.png"],
    ["Illusionist", 0, "./img/classes/illusionist.png"],
    ["Magier", 0, "./img/classes/mage.png"],
    ["Nekromant", 0, "./img/classes/necromancer.png"],
    ["Scharfschütze", 0, "./img/classes/sharpshooter.png"],
    ["Krieger", 0, "./img/classes/warrior.png"],
    ["Hexer", 0, "./img/classes/witcher.png"] 
]

const classHelper = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const races = [
    ["Weiblicher Engel", 0, "./img/races/angel_female.png"],
    ["Männlicher Engel", 0, "./img/races/angel_male.png"],
    ["Weiblicher Dämon", 0, "./img/races/demon_female.png"],
    ["Männlicher Dämon", 0, "./img/races/demon_male.png"],
    ["Weiblicher Zwerg", 0, "./img/races/dwarf_female.png"],
    ["Männlicher Zwerg", 0, "./img/races/dwarf_male.png"],
    ["Weiblicher Elf", 0, "./img/races/elf_female.png"],
    ["Männlicher Elf", 0, "./img/races/elf_male.png"],
    ["Weiblicher Mensch", 0, "./img/races/human_female.png"],
    ["Männlicher Mensch", 0, "./img/races/human_male.png"],
    ["Weiblicher Meermensch", 0, "./img/races/mermaid_female.png"],
    ["Männlicher Meermensch", 0, "./img/races/mermaid_male.png"],
    ["Weiblicher Ork", 0, "./img/races/orc_female.png"],
    ["Männlicher Ork", 0, "./img/races/orc_male.png"],
    ["Weiblicher Reptiloid", 0, "./img/races/reptiloid_female.png"], 
    ["Männlicher Reptiloid", 0, "./img/races/reptiloid_male.png"],
    ["Weiblicher Vampir", 0, "./img/races/vampire_female.png"], 
    ["Männlicher Vampir", 0, "./img/races/vampire_male.png"],
    ["Weiblicher Werwolf", 0, "./img/races/werewolf_female.png"],
    ["Männlicher Werwolf", 0, "./img/races/werewolf_male.png"]
]

const raceHelper = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const partners = [
    ["Andral, der Dämonenbarbar", 0, "./img/partners/demonbarbarian.png"],
    ["Crush, die Drachenechse", 0, "./img/partners/dragonlizard.png"],
    ["Harlon, der Zwergenschmied", 0, "./img/partners/dwarfensmith.png"],
    ["Sintras, die Elfendiebin", 0, "./img/partners/elventhief.png"],
    ["Almurie, die Fee", 0, "./img/partners/fairy.png"],
    ["Karv, der Feuerkobold", 0, "./img/partners/firecobold.png"],
    ["Uldrin, der Rachegeist", 0, "./img/partners/ghost.png"],
    ["Omega, der Schattenwolf", 0, "./img/partners/shadowwolf.png"],
    ["Ricecake, die Schneekrähe", 0, "./img/partners/snowcrow.png"],
    ["Emdrielle, der Sukkubus", 0, "./img/partners/succubus.png"],
    ["Isani, die Vampirpriesterin", 0, "./img/partners/vampirepriest.png"],
    ["Comet, der Kampfhirsch", 0, "./img/partners/wardeer.png"]
]

const partnerHelper = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const questions = {
    q1: {
        q: "Welche der folgenden Farben magst du am liebsten?",
        a1: ["Blau", [[1, 9, 11, 5], [2, 3], [1, 4]]],
        a2: ["Rot", [[16, 17, 18, 13], [5, 9], [9, 8]]],
        a3: ["Grün", [[15, 14, 13, 12], [11, 3], [2, 3]]],
        a4: ["Gelb", [[7, 0, 12, 8], [6, 1], [7, 0]]],
        a5: ["Lila", [[8, 16, 15, 2], [7, 10], [6, 4]]],
        a6: ["Orange", [[5, 19, 3, 11], [0, 4], [0, 7]]],
        a7: ["Türkis", [[10, 6, 4, 19], [8, 1], [5, 2]]],
        a8: ["Rosa", [[4, 6, 16, 0], [9, 4], [9, 5]]],
    },
    q2: {
        q: "Welche dieser Charaktereigenschaften trifft am ehesten auf dich zu?",
        a1: ["Mutig", [[5, 13, 12, 15], [7, 0], [8, 3]]],
        a2: ["Gelassen", [[0, 1, 8, 4], [4, 8], [5, 7]]],
        a3: ["Direkt", [[19, 18, 4, 13], [0, 6], [1, 9]]],
        a4: ["Lustig", [[14, 5, 9, 15], [5, 10], [4, 2]]],
        a5: ["Intelligent", [[7, 6, 3, 9], [3, 9], [9, 5]]],
        a6: ["Kreativ", [[6, 2, 16, 17], [2, 4], [0, 2]]],
        a7: ["Fleißig", [[9, 8, 16, 19], [1, 11], [8, 6]]],
        a8: ["Perfektionistisch", [[11, 3, 12, 17], [10, 2], [3, 6]]],
    },
    q3: {
        q: "Welches dieser Tiere ist dir am liebsten?",
        a1: ["Vogel", [[0, 1, 15, 7], [8, 4], [0, 1]]],
        a2: ["Katze", [[2, 3, 8, 16], [9, 10], [9, 4]]],
        a3: ["Hund", [[19, 18, 9, 13], [7, 0], [3, 7]]],
        a4: ["Fisch", [[10, 11, 14, 15], [6, 7], [6, 8]]],
        a5: ["Spinne", [[16, 17, 6, 3], [10, 9], [6, 9]]],
        a6: ["Schwein", [[9, 4, 12, 13], [5, 2], [2, 8]]],
        a7: ["Schildkröte", [[8, 7, 5, 17], [1, 0], [1, 2]]],
        a8: ["Hase", [[6, 7, 4, 1], [3, 11], [5, 3]]],
    },
    q4: {
        q: "Was wäre dein perfekter Urlaubsort?",
        a1: ["Eine belebte Stadt.", [[9, 5, 13, 3], [3, 2], [0, 5]]],
        a2: ["Sonne, Strand und Meer.", [[10, 11, 12, 14], [1, 5], [4, 7]]],
        a3: ["Der Wald, da wo die Tiere wohnen.", [[6, 7, 19, 18], [11, 8], [3, 2]]],
        a4: ["Die eisigen Berge.", [[5, 4, 8, 16], [2, 6], [6, 7]]],
        a5: ["Die sengende Wüste.", [[12, 13, 15, 2], [5, 1], [1, 4]]],
        a6: ["Ein abenteuervoller Dschungel.", [[14, 7, 15, 19], [7, 0], [2, 9]]],
        a7: ["Ein mediteranes Dörflein.", [[17, 0, 1, 16], [4, 10], [8, 3]]],
        a8: ["Hogwarts.", [[3, 2, 16, 4], [9, 6], [5, 9]]]
    },
    q5: {
        q: "Was ist dein liebstes Filmgenre?",
        a1: ["Romanzen", [[0, 2, 8, 16], [9, 4], [4, 0]]],
        a2: ["Komödien", [[5, 9, 8, 13], [2, 10], [2, 8]]],
        a3: ["Action", [[13, 12, 14, 15], [0, 8], [8, 0]]],
        a4: ["Horror", [[17, 16, 19, 18], [10, 7], [6, 7]]],
        a5: ["Fantasy", [[6, 7, 12, 4], [11, 4], [5, 3]]],
        a6: ["Science-Fiction", [[15, 10, 11, 17], [5, 1], [7, 1]]],
        a7: ["Thriller", [[18, 19, 1, 3], [6, 8], [6, 9]]],
        a8: ["Western", [[3, 4, 1, 9], [8, 3], [1, 4]]]
    },
    q6: {
        q: "Wie kannst du am besten entspannen?",
        a1: ["Einfach schlafen.", [[5, 14, 17, 18], [7, 2], [2, 9]]],
        a2: ["Mit einem guten Buch.", [[2, 3, 16, 4], [10, 4], [5, 0]]],
        a3: ["Bei einem Bier in gemütlicher Runde.", [[5, 9, 13, 15], [2, 0], [4, 8]]],
        a4: ["Vor dem Fernseher.", [[4, 12, 19, 10], [9, 5], [4, 9]]],
        a5: ["Während eines ausgedehnten Spaziergangs in der Natur.", [[7, 6, 18, 19], [11, 7], [3, 1]]],
        a6: ["Sport, Sport, Sport...", [[8, 0, 12, 6], [0, 1], [7, 3]]],
        a7: ["Beim Sonnenbad.", [[15, 1, 0, 14], [6, 8], [0, 6]]],
        a8: ["Mit schaumigem Wasser bis zum Hals in der Wanne.", [[11, 10, 8, 2], [6, 3], [6, 1]]]
    },
    q7: {
        q: "Welche der folgenden Superkräfte hättest du gerne?",
        a1: ["Gedankenkontrolle.", [[2, 17, 3, 16], [9, 3], [4, 0]]],
        a2: ["Mit Tieren sprechen können.", [[6, 7, 11, 10], [11, 8], [2, 5]]],
        a3: ["Feuerbeherrschung.", [[3, 2, 13, 1], [5, 9], [9, 4]]],
        a4: ["Zeitmanipulation.", [[1, 5, 14, 0], [4, 1], [7, 8]]],
        a5: ["Unsichtbarkeit.", [[16, 18, 19, 12 ], [10, 6], [5, 9]]],
        a6: ["Fliegen können.", [[0, 9, 15, 8], [8, 4], [3, 7]]],
        a7: ["Unterwasseratmung.", [[10, 11, 8, 4], [0, 2], [1, 0]]],
        a8: ["Psychokinese.", [[4, 17, 19, 12], [7, 0], [6, 1]]]
    },
    q8: {
        q: "Welche der folgenden Musikrichtungen gefällt dir am besten?",
        a1: ["Pop", [[14, 18, 8, 4], [3, 11], [1, 9]]],
        a2: ["Country", [[1, 5, 18, 12], [6, 1], [3, 8]]],
        a3: ["Rock", [[2, 13, 17, 9], [9, 7], [6, 0]]],
        a4: ["Techno", [[10, 8, 2, 0], [10, 0], [5, 7]]],
        a5: ["Rap", [[3, 13, 19, 7], [8, 1], [9, 2]]],
        a6: ["Reggae", [[6, 7, 15, 16], [11, 7], [3, 4]]],
        a7: ["Klassische Musik", [[17, 16, 9, 5], [2, 10], [7, 1]]],
        a8: ["Volksmusik", [[4, 0, 15, 1], [5, 11], [8, 2]]]
    },
    q9: {
        q: "Welches der folgenden Gerichte würdest du am ehesten essen?",
        a1: ["Rumpsteak mit Ofenkartoffel und Tomatensalat.", [[5, 3, 13, 9], [0, 7], [8, 1]]],
        a2: ["Verschiedene Sushi mit Wasabi, eingelegtem Ingwer und Sojasoße.", [[11, 10, 15, 18], [1, 9], [6, 9]]],
        a3: ["Dick belegte Pizza mit extra Käse.", [[18, 13, 8, 19], [7, 2], [0, 5]]],
        a4: ["Ein großer gemischter Salat mit Croutons und einem leichten Dressing.", [[8, 6, 0, 7], [3, 11], [2, 5]]],
        a5: ["Eine saftige Schokotorte mit Sahne.", [[2, 12, 16, 3], [9, 6], [6, 2]]],
        a6: ["Burger mit doppelt Fleisch und etlichen Toppings.", [[19, 12, 1, 14], [10, 5], [7, 1]]],
        a7: ["Echte Spaghetti Carbonara.", [[4, 17, 1, 10], [11, 4], [4, 3]]],
        a8: ["Eingelegter Räuchertofu in einer knackigen Gemüsepfanne.", [[14, 0, 11, 2], [8, 6], [0, 3]]]
    },
    q10: {
        q: "Wie würdest du ein schwieriges Problem am ehesten an?",
        a1: ["Wahrscheinlich gar nicht.", [[3, 5, 14, 4], [5, 6], [4, 9]]],
        a2: ["Ich suche nach Leuten, die mir Helfen.", [[19, 18, 13, 8], [8, 7], [6, 8]]],
        a3: ["Ich überlege mir einen kühnen Plan.", [[1, 13, 2, 19], [2, 10], [0, 7]]],
        a4: ["Durch sorgfältige Planung.", [[12, 7, 6, 0], [4, 11], [1, 3]]],
        a5: ["Ich gehe es ohne nachzudenken an.", [[18, 15, 14, 17], [0, 1], [8, 2]]],
        a6: ["Ich recherchiere was nur geht.", [[2, 16, 17, 9], [9, 8], [5, 2]]],
        a7: ["Ich meditiere erst einmal um den Kopf frei zu bekommen.", [[0, 6, 10, 11], [11, 3], [9, 1]]],
        a8: ["Ich wälze es auf andere ab.", [[3, 9, 16, 8], [1, 0], [6, 7]]]
    },
    q11: {
        q: "Was hiervon ist dir am wichtigsten?",
        a1: ["Freundschaft.", [[19, 18, 5, 8], [7, 11], [8, 2]]],
        a2: ["Wissen.", [[2, 3, 4, 9], [10, 2], [5, 0]]],
        a3: ["Liebe.", [[1, 0, 9, 10], [9, 7], [2, 1]]],
        a4: ["Reichtum.", [[5, 3, 17, 11], [2, 6], [4, 9]]],
        a5: ["Status.", [[17, 8, 4, 13], [8, 4], [1, 4]]],
        a6: ["Freiheit.", [[18, 10, 15, 6], [3, 8], [3, 7]]],
        a7: ["Macht.", [[16, 12, 7, 1], [0, 5], [6, 0]]],
        a8: ["Sicherheit.", [[6, 14, 0, 11], [1, 6], [7, 8]]]
    },
    q12: {
        q: "Zu welchem dieser Fortbewegungsmittel würdest du am ehesten greifen?",
        a1: ["Ein Sportwagen.", [[17, 13, 2, 9], [11, 3], [3, 9]]],
        a2: ["Ein Pferd.", [[16, 3, 18, 8], [0, 6], [0, 6]]],
        a3: ["Ein Fahrrad.", [[9, 12, 1, 19], [3, 11], [4, 0]]],
        a4: ["Ein Familienkombi.", [[18, 15, 8, 5], [4, 7], [2, 6]]],
        a5: ["Ein Motorrad.", [[3, 16, 7, 14], [9, 6], [8, 9]]],
        a6: ["Die eigenen Füße.", [[6, 7, 19, 4], [8, 1], [3, 2]]],
        a7: ["Ein Helikopter.", [[0, 1, 5, 17], [10, 5], [7, 1]]],
        a8: ["Ein Uboot.", [[10, 11, 14, 15], [2, 5], [5, 4]]]
    },
    q13: {
        q: "Du geratest in Streit, der eskaliert. Wie verteidigst du dich?",
        a1: ["Ich begegne meinem Gegner mit roher Gewalt.", [[19, 12, 13, 3], [0, 11], [8, 0]]],
        a2: ["Ich mache mich ganz klein und hoffe, dass alles schnell vorbei ist.", [[4, 15, 14, 6], [4, 8], [4, 0]]],
        a3: ["Ich nutze meine Martial-Arts-Künste.", [[6, 7, 12, 15], [3, 5], [1, 8]]],
        a4: ["Ich laufe davon.", [[5, 18, 9, 8], [8, 9], [3, 6]]],
        a5: ["Ich nutze unfaire Tricks.", [[3, 2, 17, 16], [9, 1], [6, 4]]],
        a6: ["Ich versuche den Streit zu schlichten.", [[0, 1, 10, 11], [2, 4], [2, 9]]],
        a7: ["Ich ziehe ein Messer.", [[2, 11, 16, 13], [6, 10], [5, 7]]],
        a8: ["Ich mache etwas dermaßen beklopptes, dass der/die andere nicht anders kann, als zu lachen.", [[9, 8, 17, 19], [5, 7], [7, 1]]]
    },
    q14: {
        q: "Wie ist dein Kleidungsstil?",
        a1: ["Immer adrett und gepflegt.", [[2, 3, 17, 8], [10, 5], [4, 1]]],
        a2: ["Rockig.", [[17, 16, 14, 15], [0, 9], [6, 7]]],
        a3: ["Wie die Rapper in den Videos.", [[9, 11, 3, 13], [5, 8], [9, 8]]],
        a4: ["Interessiert mich nicht, hauptsache gemütlich.", [[18, 19, 10, 15], [2, 1], [2, 1]]],
        a5: ["Sportlich.", [[6, 7, 12, 19], [11, 7], [0, 3]]],
        a6: ["Modisch.", [[0, 1, 16, 9], [6, 3], [5, 8]]],
        a7: ["Welche Kleidung? Ich bin nudist.", [[7, 18, 11, 4], [9, 6], [2, 3]]],
        a8: ["Mein Leben ist Cosplay.", [[4, 5, 13, 10], [4, 3], [7, 0]]]
    },
    q15: {
        q: "Ohne welches der folgenden Dinge würdest du nie außer Haus gehen?",
        a1: ["Meine Papiere, um mich auszuweisen.", [[1, 5, 8, 9], [2, 6], [1, 8]]],
        a2: ["Das Smartphone selbstverständlich.", [[4, 10, 11, 12], [1, 9], [4, 9]]],
        a3: ["Ohne Bargeld läuft nichts.", [[8, 5, 4, 3], [3, 2], [0, 5]]],
        a4: ["Meine Schminkutensilien und Pflegecremes.", [[16, 0, 9, 17], [4, 8], [6, 9]]],
        a5: ["Der gute alte Schlagstock.", [[2, 3, 12, 13], [0, 6], [8, 1]]],
        a6: ["Ich verlasse das Haus nicht.", [[14, 10, 11, 15], [11, 1], [3, 6]]],
        a7: ["Kompass und Karte.", [[6, 19, 7, 18], [7, 8], [3, 0]]],
        a8: ["Mein Glücksbringer.", [[15, 14, 0, 18], [5, 10], [2, 5]]]
    },
    q16: {
        q: "Was gehört für dich auf jede Party?",
        a1: ["Viele nette Leute.", [[18, 19, 5, 9], [7, 8], [6, 1]]],
        a2: ["Laute Musik.", [[12, 14, 13, 3], [2, 0], [8, 9]]],
        a3: ["Ich feiere nicht.", [[0, 7, 10, 1], [6, 10], [2, 0]]],
        a4: ["Alkohol im Überfluss.", [[5, 9, 4, 14], [1, 2], [8, 7]]],
        a5: ["Eine totale Katastrophe, über die die Leute noch in Wochen reden werden.", [[2, 19, 3, 13], [0, 9], [4, 3]]],
        a6: ["Top ausgebildete Security.", [[13, 11, 17, 8], [11, 4], [5, 0]]],
        a7: ["Gutes Essen.", [[16, 18, 6, 15], [5, 1], [9, 4]]],
        a8: ["Auf jeden Fall Feuerwerk.", [[15, 8, 4, 1], [3, 4], [7, 5]]]
    },
    q17: {
        q: "Könntest du dich mit einer dieser Personen der Geschichte unterhalten, welche wäre es?",
        a1: ["Kleopatra", [[13, 12, 8, 0], [9, 7], [1, 9]]],
        a2: ["Isaac Newton", [[1, 17, 15, 19], [8, 4], [0, 7]]],
        a3: ["Leonardo DaVinci", [[0, 16, 17, 1], [8, 11], [7, 4]]],
        a4: ["Gautama Buddha", [[14, 11, 7, 6], [10, 6], [2, 1]]],
        a5: ["Sokrates", [[6, 9, 2, 18], [11, 5], [3, 0]]],
        a6: ["Jeanne d'Arc", [[2, 8, 3, 10], [0, 3], [8, 5]]],
        a7: ["Konfuzius", [[19, 5, 4, 18], [1, 2], [3, 9]]],
        a8: ["Marie Antoinette", [[15, 10, 7, 3], [4, 6], [6, 4]]]
    },
    q18: {
        q: "Welche der folgenden Disziplinen würdest du am ehesten erlernen wollen?",
        a1: ["Malen.", [[13, 7, 14, 1], [1, 6], [4, 1]]],
        a2: ["Bildhauen.", [[11, 5, 10, 15], [8, 11], [9, 2]]],
        a3: ["Schauspielen.", [[2, 3, 9, 17], [3, 9], [4, 5]]],
        a4: ["Singen.", [[1, 10, 0, 18], [6, 3], [6, 0]]],
        a5: ["Zeichnen.", [[8, 12, 16, 6], [10, 11], [3, 7]]],
        a6: ["Schreiben.", [[14, 13, 11, 19], [5, 4], [8, 2]]],
        a7: ["Musizieren.", [[4, 9, 15, 7], [0, 2], [9, 0]]],
        a8: ["Kunsthandwerken.", [[5, 16, 8, 0], [2, 7], [7, 1]]]
    },
    q19: {
        q: "Du müsstest einen der folgenden Berufe ausüben. Für welchen würdest du dich entscheiden?",
        a1: ["Arzt", [[1, 7, 11, 12], [10, 1], [0, 9]]],
        a2: ["Lehrer", [[18, 0, 6, 14], [8, 4], [5, 1]]],
        a3: ["Politiker", [[9, 5, 3, 11], [9, 10], [1, 6]]],            
        a4: ["General", [[13, 12, 1, 8], [0, 11], [8, 7]]],              
        a5: ["Rockstar", [[2, 17, 16, 19], [4, 8], [6, 3]]],
        a6: ["Chemiker", [[6, 10, 5, 18], [5, 3], [2, 9]]],
        a7: ["Archäologe", [[4, 7, 15, 0], [1, 2], [4, 0]]],
        a8: ["Künstler", [[15, 13, 8, 3], [3, 6], [4, 8]]]
    },
    q20: {
        q: "Letzte Frage, versprochen. Wieso hast du diesen Test hier gemacht?",
        a1: ["Mir war langweilig.", [[11, 12, 19, 7], [11, 3], [2, 7]]],
        a2: ["Ich bin eigentlich ziemlich gespannt, was bei mir herauskommt.", [[8, 9, 2, 17], [0, 8], [5, 3]]],
        a3: ["Der Ersteller dieses Tests hat mich dazu gezwungen.", [[10, 13, 16, 18], [5, 9], [6, 0]]],
        a4: ["Ich hatte gerade ein paar Minuten und dachte mir, das kann nicht schaden.", [[14, 1, 15, 18], [7, 4], [1, 8]]],
        a5: ["Ich liebe diese Tests.", [[17, 4, 19, 5], [4, 10], [9, 4]]],
        a6: ["Es läuft gerade Werbung.", [[3, 14, 6, 0], [8, 2], [8, 9]]],
        a7: ["Ich liege gerade wach und hab nach etwas gesucht, das mich definitv zum Einschlafen bringt.", [[2, 16, 10, 5], [1, 9], [0, 2]]],
        a8: ["Was für ein Test?", [[12, 15, 11, 7], [3, 5], [5, 1]]]
    }
}

let index = 1;
const questionP = document.getElementById("question");
const answerPArr = document.querySelectorAll(".test__answer")

const images = document.querySelectorAll("img");
const h2s = document.querySelectorAll("h2");

const innerTest = document.querySelector(".test__inner");
const innerFinal = document.querySelector(".test_inner_final");


answerPArr.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        
        for (let i = 0; i < 4; i++) {
            raceHelper[questions["q" + index][btn.id][1][0][i]] += 4 - i;
            if (i < 2) {
                partnerHelper[questions["q" + index][btn.id][1][1][i]] += 2 -i;
                classHelper[questions["q" + index][btn.id][1][2][i]] += 2 -i;
            }
        }


        

        index++;

        if (index === 21) {
            let highestRaceI = raceHelper.indexOf([...raceHelper].sort((a,b) => b - a)[0]);
            let highestClassI = classHelper.indexOf([...classHelper].sort((a,b) => b - a)[0]);
            let highestPartnerI = partnerHelper.indexOf([...partnerHelper].sort((a,b) => b - a)[0]);

            images[0].src = races[highestRaceI][2];
            images[1].src = classes[highestClassI][2];
            images[2].src = partners[highestPartnerI][2];
            h2s[0].innerText = races[highestRaceI][0];
            h2s[1].innerText = classes[highestClassI][0];
            h2s[2].innerText = partners[highestPartnerI][0];

            innerTest.classList.add("hidden");
            innerFinal.classList.remove("hidden");

            return;
        }

        addQuestion("q" + index);
        

    })
});

const addQuestion = (qNr) => {
    questionP.innerText = questions[qNr].q;
    for (let i = 0; i < 8; i++) {
        answerPArr[i].innerText = questions[qNr]["a" + (i + 1)][0];
    }
}

addQuestion("q1")

