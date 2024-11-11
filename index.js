let drawBtn = document.querySelector("#drawBtn");
let cardContent = document.querySelector("#cardContent");
let cardContainer = document.querySelector(".cardContainer");

let punchlines = [
    "Kung ang tagalog ng goat ay kambing, pwede bang makaranas ng iyong lambing? 😔",

    "Kaya kong isacrifice ang balat ng chickenjoy para lang sayo 😚",

    "Sawang sawa na ko.. Hindi ko na kaya. Ayoko na. Pagod na ko maging maangas. Gusto ko nalang magpa-baby sayo 😔",

    "Gusto ko hanggang dulo tayo parin nagtutulungan, e kaso bakit mo ko tinutulugan? 😔",

    "Naniniwala ka ba sa kasabihang 'malayo pa, pero malapit na kong umamin sayo?' 😌",

    "Kung may self-care ka, pwede mo ba ko idamay? 😣",

    "Anong mga ginawa mo ngayong araw other than being attractive? 😎",

    "Bakit pa ko iinom kung sa kiss mo palang lasing na lasing na ko? 😣",

    "Call me weather boy dahil may PAGASA ka sakin (😎)",

    "Kung marunong ka magbilang, anong kasunod ng I love you one? 🤔",

    "Lagi mong tatandaan na kapag minamaliit ka nila, ang mahalaga iniiBIG naman kita 😌",

    "Utang ka ba? Habang tumatagal lumalaki interes ko sayo e hays mwa 😚",

    "Dahil malapit na ang pasko, will you merry me? 😌",

    "Ngipin ka ba? I can't smile without you e 😎",

    "Assignment ka ba? Gustong gusto kitang i-take home e 😋",

    "Kahit si sadness matutuwa kapag ikaw kausap e 😌",

    "Totoo nga ang gravity no? kasi kahit anong talon ko lagi parin akong nahuhulog sayo 😌",

    "Sana posporo nalang tayong dalawa para match tayo 😚",

    "Di ko na kailangang aralin geometry para lang malaman na sobrang ganda mo in every angle ❤️",

    "Mahilig ka ba sa puzzles? Umaga palang binubuo mo na araw ko e 🥰",

    "Pag nagkaron ako ng business, lahat ng customer ko bebentahan ko ng mura. Sayo ko lang kasi kaya magmahal e 😣",

    "Sa dami ng na develop kong websites, mas gusto ko pa rin may ma develop satin 😎",

    "Black nazareth ka ba? Gusto kita halikan e 😚",

    "Alam mo ba uminom ako ng juice kanina, lasang manamis namiss na kita 😔",

    "I'm no live seller pero pwedeng pwede mo ko i-mine 😌",

    "Pag di ka natawa sa banat ko, ibig sabihin seryoso ka sakin. Pag tumawa ka naman, kinikilig ka (wala kang takas) 😝",

    "Tara exchange gift tayo sa pasko? Sayo ako tapos akin ka 😘",

    "Baliktarin mo yung 'Apple'. Oh diba walang nangyari? ikaw pa rin gusto ko 😋",

    "Basura ka ba? Kasi I want to take you out 😝",

    "Tigilan mo nga pagiging immature. Di ka na bata kaya samahan mo ko sa pagtanda 😎",

    "Sabi ng parents ko bawal daw ako gumala kaya mag stay nalang ako sayo 😣",

    "Di kita pipilitin mag stay. Kaya kung aalis ka edi isama mo ko 😌"
];

let clickCounter = 0;
let arrayLength = punchlines.length;

function getRandomIndex(array) {
    const randomIndex = Math.floor(Math.random(0) * punchlines.length);
    return randomIndex;
  }

function drawCard() {
    cardContainer.style.display = "block";
    let randomIndex = getRandomIndex(punchlines);
    let randomPunchline = punchlines[randomIndex];
    clickCounter++;
    punchlines.splice(randomIndex, 1);

    if(clickCounter == arrayLength){
        cardContent.textContent = "Oops, naubusan na ko, stay tuned for more bb mwa!";
        drawBtn.style.display = "none";
    }
    else{
     cardContent.textContent = randomPunchline;
     
    }
    
}
