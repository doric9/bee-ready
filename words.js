// Spelling Bee Word Database
// Format: { word, definition, sentence, origin, difficulty }

const wordDatabase = {
    // ONE BEE - Beginner Level (~800 words)
    oneBee: [
        {
            word: "able",
            definition: "having the power, skill, means, or opportunity to do something",
            sentence: "She was able to finish her homework before dinner.",
            origin: "Latin"
        },
        {
            word: "about",
            definition: "on the subject of; concerning",
            sentence: "We learned about butterflies in science class.",
            origin: "Old English"
        },
        {
            word: "accept",
            definition: "to receive willingly",
            sentence: "I accept your apology.",
            origin: "Latin"
        },
        {
            word: "achieve",
            definition: "to accomplish successfully",
            sentence: "With practice, you can achieve your goals.",
            origin: "French"
        },
        {
            word: "address",
            definition: "the place where someone lives or an organization is situated",
            sentence: "Please write your address on the envelope.",
            origin: "French"
        },
        {
            word: "appear",
            definition: "to come into sight; to become visible",
            sentence: "Stars appear in the sky at night.",
            origin: "Latin"
        },
        {
            word: "arrange",
            definition: "to put in proper order; to organize",
            sentence: "Please arrange the books by size.",
            origin: "French"
        },
        {
            word: "believe",
            definition: "to accept as true or real",
            sentence: "I believe you are telling the truth.",
            origin: "Old English"
        },
        {
            word: "bicycle",
            definition: "a vehicle with two wheels that you ride by pushing pedals",
            sentence: "He rode his bicycle to school every day.",
            origin: "Latin and Greek"
        },
        {
            word: "bottle",
            definition: "a container with a narrow neck used for storing liquids",
            sentence: "Pour the juice from the bottle into a glass.",
            origin: "French"
        },
        {
            word: "bright",
            definition: "giving out or reflecting much light",
            sentence: "The sun is very bright today.",
            origin: "Old English"
        },
        {
            word: "brother",
            definition: "a male sibling",
            sentence: "My brother is two years older than me.",
            origin: "Old English"
        },
        {
            word: "building",
            definition: "a structure with walls and a roof",
            sentence: "The school building has three floors.",
            origin: "Old English"
        },
        {
            word: "calendar",
            definition: "a chart showing days, weeks, and months of the year",
            sentence: "Mark your birthday on the calendar.",
            origin: "Latin"
        },
        {
            word: "careful",
            definition: "taking care to avoid potential problems or dangers",
            sentence: "Be careful when crossing the street.",
            origin: "Old English"
        },
        {
            word: "certain",
            definition: "known for sure; established beyond doubt",
            sentence: "I am certain that I locked the door.",
            origin: "Latin"
        },
        {
            word: "circle",
            definition: "a round plane figure whose boundary consists of points equidistant from the center",
            sentence: "Draw a perfect circle with a compass.",
            origin: "Latin"
        },
        {
            word: "clothes",
            definition: "items worn to cover the body",
            sentence: "Hang your clothes in the closet.",
            origin: "Old English"
        },
        {
            word: "correct",
            definition: "free from error; accurate",
            sentence: "All of your answers are correct.",
            origin: "Latin"
        },
        {
            word: "courage",
            definition: "the ability to do something that frightens one; bravery",
            sentence: "It takes courage to admit when you are wrong.",
            origin: "French"
        },
        {
            word: "decide",
            definition: "to make a choice or judgment",
            sentence: "We need to decide which movie to watch.",
            origin: "Latin"
        },
        {
            word: "deliver",
            definition: "to bring and hand over a letter, parcel, or goods",
            sentence: "The mail carrier will deliver the package today.",
            origin: "French"
        },
        {
            word: "difficult",
            definition: "hard to do, make, or understand",
            sentence: "The math problem was too difficult to solve.",
            origin: "Latin"
        },
        {
            word: "doctor",
            definition: "a person who is qualified to treat people who are ill",
            sentence: "The doctor gave me medicine for my cold.",
            origin: "Latin"
        },
        {
            word: "dollar",
            definition: "the basic monetary unit of the United States",
            sentence: "This toy costs five dollars.",
            origin: "German"
        },
        {
            word: "early",
            definition: "happening or done before the usual or expected time",
            sentence: "We arrived early for the concert.",
            origin: "Old English"
        },
        {
            word: "earth",
            definition: "the planet on which we live",
            sentence: "Earth is the third planet from the sun.",
            origin: "Old English"
        },
        {
            word: "energy",
            definition: "the strength and vitality required for sustained activity",
            sentence: "Exercise gives you more energy.",
            origin: "Greek"
        },
        {
            word: "enough",
            definition: "as much or as many as required",
            sentence: "Do we have enough food for everyone?",
            origin: "Old English"
        },
        {
            word: "example",
            definition: "a thing characteristic of its kind or illustrating a general rule",
            sentence: "Can you give me an example of a mammal?",
            origin: "Latin"
        }
    ],

    // TWO BEE - Intermediate Level (~2,100 words)
    twoBee: [
        {
            word: "absurd",
            definition: "wildly unreasonable, illogical, or inappropriate",
            sentence: "The idea of wearing a bathing suit in winter is absurd.",
            origin: "Latin"
        },
        {
            word: "accommodation",
            definition: "a room, group of rooms, or building in which someone may live or stay",
            sentence: "We booked accommodation at a hotel near the beach.",
            origin: "Latin"
        },
        {
            word: "acquisition",
            definition: "an asset or object bought or obtained",
            sentence: "The museum's latest acquisition is a rare painting.",
            origin: "Latin"
        },
        {
            word: "adjacent",
            definition: "next to or adjoining something else",
            sentence: "The library is adjacent to the school.",
            origin: "Latin"
        },
        {
            word: "amateur",
            definition: "a person who engages in a pursuit as a pastime rather than a profession",
            sentence: "He's just an amateur photographer, but his pictures are beautiful.",
            origin: "French"
        },
        {
            word: "ambiguous",
            definition: "open to more than one interpretation; unclear",
            sentence: "The teacher's instructions were ambiguous and confused the students.",
            origin: "Latin"
        },
        {
            word: "anxiety",
            definition: "a feeling of worry, nervousness, or unease",
            sentence: "She felt anxiety before her big presentation.",
            origin: "Latin"
        },
        {
            word: "apparatus",
            definition: "the technical equipment or machinery needed for a particular activity",
            sentence: "The laboratory was filled with scientific apparatus.",
            origin: "Latin"
        },
        {
            word: "arbitrary",
            definition: "based on random choice rather than reason or system",
            sentence: "The decision seemed arbitrary and unfair.",
            origin: "Latin"
        },
        {
            word: "archaeology",
            definition: "the study of human history through the excavation of sites and artifacts",
            sentence: "She studied archaeology to learn about ancient civilizations.",
            origin: "Greek"
        },
        {
            word: "aspiration",
            definition: "a hope or ambition of achieving something",
            sentence: "His aspiration is to become a professional musician.",
            origin: "Latin"
        },
        {
            word: "assembly",
            definition: "a group of people gathered together in one place for a common purpose",
            sentence: "The school held an assembly in the auditorium.",
            origin: "French"
        },
        {
            word: "authentic",
            definition: "of undisputed origin; genuine",
            sentence: "The museum verified that the painting was authentic.",
            origin: "Greek"
        },
        {
            word: "beneath",
            definition: "extending or directly underneath",
            sentence: "The treasure was buried beneath the old oak tree.",
            origin: "Old English"
        },
        {
            word: "beneficial",
            definition: "favorable or advantageous; resulting in good",
            sentence: "Regular exercise is beneficial to your health.",
            origin: "Latin"
        },
        {
            word: "bureaucracy",
            definition: "a system of government in which decisions are made by state officials",
            sentence: "The bureaucracy made the approval process very slow.",
            origin: "French"
        },
        {
            word: "camouflage",
            definition: "the disguising of military personnel or equipment by painting or covering",
            sentence: "The soldier wore camouflage to blend into the forest.",
            origin: "French"
        },
        {
            word: "catastrophe",
            definition: "an event causing great damage or suffering; a disaster",
            sentence: "The earthquake was a catastrophe for the region.",
            origin: "Greek"
        },
        {
            word: "chameleon",
            definition: "a lizard that can change color to match its surroundings",
            sentence: "The chameleon turned green to blend in with the leaves.",
            origin: "Greek"
        },
        {
            word: "colleague",
            definition: "a person with whom one works in a profession or business",
            sentence: "She introduced me to her colleague from the marketing department.",
            origin: "Latin"
        },
        {
            word: "commemorate",
            definition: "to recall and show respect for someone or something",
            sentence: "The monument was built to commemorate the heroes.",
            origin: "Latin"
        },
        {
            word: "conscientious",
            definition: "wishing to do what is right, especially to do one's work properly",
            sentence: "He is a conscientious student who always does his homework.",
            origin: "Latin"
        },
        {
            word: "contemporary",
            definition: "living or occurring at the same time",
            sentence: "Shakespeare was contemporary with Queen Elizabeth I.",
            origin: "Latin"
        },
        {
            word: "controversy",
            definition: "disagreement, typically when prolonged, public, and heated",
            sentence: "The new policy sparked controversy among the citizens.",
            origin: "Latin"
        },
        {
            word: "curriculum",
            definition: "the subjects comprising a course of study",
            sentence: "The school updated its curriculum to include coding classes.",
            origin: "Latin"
        },
        {
            word: "defendant",
            definition: "a person accused of a crime in a court of law",
            sentence: "The defendant pleaded not guilty to the charges.",
            origin: "Latin"
        },
        {
            word: "delinquent",
            definition: "typically of a young person showing a tendency to commit crime",
            sentence: "The program helps reform delinquent youth.",
            origin: "Latin"
        },
        {
            word: "demonstrate",
            definition: "to clearly show the existence or truth of something",
            sentence: "The experiment will demonstrate the principles of gravity.",
            origin: "Latin"
        },
        {
            word: "dilemma",
            definition: "a situation requiring a choice between equally undesirable alternatives",
            sentence: "She faced a dilemma: study for the test or go to her friend's party.",
            origin: "Greek"
        },
        {
            word: "elaborate",
            definition: "involving many carefully arranged parts; detailed",
            sentence: "They created an elaborate plan for the surprise party.",
            origin: "Latin"
        }
    ],

    // THREE BEE - Advanced Level (~1,200 words)
    threeBee: [
        {
            word: "aberration",
            definition: "a departure from what is normal, usual, or expected",
            sentence: "The sudden cold spell in July was a weather aberration.",
            origin: "Latin"
        },
        {
            word: "acquiesce",
            definition: "to accept something reluctantly but without protest",
            sentence: "She acquiesced to her parents' wishes and attended the family dinner.",
            origin: "Latin"
        },
        {
            word: "antediluvian",
            definition: "extremely old or old-fashioned",
            sentence: "His antediluvian views on technology made him avoid computers.",
            origin: "Latin"
        },
        {
            word: "aperitif",
            definition: "an alcoholic drink taken before a meal to stimulate the appetite",
            sentence: "They enjoyed an aperitif on the terrace before dinner.",
            origin: "French"
        },
        {
            word: "apotheosis",
            definition: "the highest point in the development of something; culmination",
            sentence: "The final symphony was the apotheosis of the composer's career.",
            origin: "Greek"
        },
        {
            word: "audacious",
            definition: "showing a willingness to take surprisingly bold risks",
            sentence: "The audacious plan involved climbing the mountain in winter.",
            origin: "Latin"
        },
        {
            word: "bellicose",
            definition: "demonstrating aggression and willingness to fight",
            sentence: "The bellicose rhetoric between the nations increased tensions.",
            origin: "Latin"
        },
        {
            word: "bourgeois",
            definition: "relating to the middle class, typically with reference to materialism",
            sentence: "The novel criticized bourgeois values and lifestyle.",
            origin: "French"
        },
        {
            word: "cacophony",
            definition: "a harsh, discordant mixture of sounds",
            sentence: "The cacophony of car horns filled the busy street.",
            origin: "Greek"
        },
        {
            word: "camaraderie",
            definition: "mutual trust and friendship among people who spend time together",
            sentence: "The team developed a strong sense of camaraderie.",
            origin: "French"
        },
        {
            word: "chicanery",
            definition: "the use of deception or subterfuge to achieve one's purpose",
            sentence: "The lawyer was accused of legal chicanery.",
            origin: "French"
        },
        {
            word: "cognizant",
            definition: "having knowledge or being aware of something",
            sentence: "The committee was cognizant of the financial constraints.",
            origin: "Latin"
        },
        {
            word: "connoisseur",
            definition: "an expert judge in matters of taste",
            sentence: "He was a connoisseur of fine wines.",
            origin: "French"
        },
        {
            word: "consonance",
            definition: "agreement or compatibility between opinions or actions",
            sentence: "His actions were in consonance with his stated principles.",
            origin: "Latin"
        },
        {
            word: "deleterious",
            definition: "causing harm or damage",
            sentence: "Smoking has deleterious effects on health.",
            origin: "Greek"
        },
        {
            word: "desultory",
            definition: "lacking a plan, purpose, or enthusiasm",
            sentence: "She made a desultory attempt to clean her room.",
            origin: "Latin"
        },
        {
            word: "ecclesiastical",
            definition: "relating to the Christian Church or its clergy",
            sentence: "The building featured elaborate ecclesiastical architecture.",
            origin: "Greek"
        },
        {
            word: "efficacious",
            definition: "successful in producing a desired or intended result",
            sentence: "The new medicine proved highly efficacious.",
            origin: "Latin"
        },
        {
            word: "ephemeral",
            definition: "lasting for a very short time",
            sentence: "The beauty of cherry blossoms is ephemeral.",
            origin: "Greek"
        },
        {
            word: "exacerbate",
            definition: "to make a problem, bad situation, or negative feeling worse",
            sentence: "His comments only served to exacerbate the tension.",
            origin: "Latin"
        },
        {
            word: "faux",
            definition: "artificial or imitation; fake",
            sentence: "She wore a faux fur coat.",
            origin: "French"
        },
        {
            word: "gesticulate",
            definition: "to use gestures, especially dramatic ones, while speaking",
            sentence: "He gesticulated wildly as he told the exciting story.",
            origin: "Latin"
        },
        {
            word: "hegemony",
            definition: "leadership or dominance, especially by one country or social group",
            sentence: "The nation sought to establish hegemony over the region.",
            origin: "Greek"
        },
        {
            word: "ignominious",
            definition: "deserving or causing public disgrace or shame",
            sentence: "The team suffered an ignominious defeat.",
            origin: "Latin"
        },
        {
            word: "juxtapose",
            definition: "to place or deal with close together for contrasting effect",
            sentence: "The artist juxtaposed bright and dark colors.",
            origin: "Latin and French"
        },
        {
            word: "lachrymose",
            definition: "tearful or given to weeping",
            sentence: "The lachrymose melody brought tears to everyone's eyes.",
            origin: "Latin"
        },
        {
            word: "malfeasance",
            definition: "wrongdoing, especially by a public official",
            sentence: "The mayor was accused of malfeasance in office.",
            origin: "French"
        },
        {
            word: "obsequious",
            definition: "obedient or attentive to an excessive or servile degree",
            sentence: "His obsequious behavior toward the boss annoyed his colleagues.",
            origin: "Latin"
        },
        {
            word: "perspicacious",
            definition: "having a ready insight into and understanding of things",
            sentence: "The perspicacious detective quickly solved the mystery.",
            origin: "Latin"
        },
        {
            word: "schadenfreude",
            definition: "pleasure derived from another person's misfortune",
            sentence: "He felt a moment of schadenfreude when his rival failed.",
            origin: "German"
        }
    ]
};

// Helper function to get words by difficulty
function getWordsByDifficulty(level) {
    switch(level) {
        case 1:
            return wordDatabase.oneBee;
        case 2:
            return [...wordDatabase.oneBee, ...wordDatabase.twoBee];
        case 3:
            return [...wordDatabase.oneBee, ...wordDatabase.twoBee, ...wordDatabase.threeBee];
        default:
            return wordDatabase.oneBee;
    }
}

// Helper function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
