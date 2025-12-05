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
        },
        {
            word: "tag",
            definition: "a label attached to someone or something; a children's chasing game",
            sentence: "The children played tag in the playground.",
            origin: "Unknown"
        },
        {
            word: "send",
            definition: "to cause to go or be taken to a destination",
            sentence: "Please send the letter by mail.",
            origin: "Old English"
        },
        {
            word: "deck",
            definition: "a flat surface, like the floor of a ship or a platform",
            sentence: "We sat on the deck and watched the sunset.",
            origin: "Dutch"
        },
        {
            word: "stuck",
            definition: "unable to move or make progress",
            sentence: "The car got stuck in the mud.",
            origin: "Old English"
        },
        {
            word: "snug",
            definition: "comfortable, warm, and cozy",
            sentence: "The cat was snug in its basket.",
            origin: "Germanic"
        },
        {
            word: "fish",
            definition: "a cold-blooded animal that lives in water",
            sentence: "We saw many colorful fish in the aquarium.",
            origin: "Old English"
        },
        {
            word: "hold",
            definition: "to grasp, carry, or support with one's hands",
            sentence: "Please hold my hand when we cross the street.",
            origin: "Old English"
        },
        {
            word: "mind",
            definition: "the element of a person that thinks and feels; to care about",
            sentence: "I don't mind if we leave early.",
            origin: "Old English"
        },
        {
            word: "stay",
            definition: "to remain in the same place; to continue to be",
            sentence: "Can you stay for dinner?",
            origin: "Latin"
        },
        {
            word: "scrub",
            definition: "to rub hard to clean something",
            sentence: "Scrub your hands with soap and water.",
            origin: "Germanic"
        },
        {
            word: "draw",
            definition: "to make a picture with a pencil, pen, or crayon",
            sentence: "She likes to draw pictures of animals.",
            origin: "Old English"
        },
        {
            word: "brown",
            definition: "a color like that of wood or chocolate",
            sentence: "The bear has brown fur.",
            origin: "Old English"
        },
        {
            word: "cozy",
            definition: "giving a feeling of comfort, warmth, and relaxation",
            sentence: "The cabin was cozy with a warm fire.",
            origin: "Scottish"
        },
        {
            word: "tint",
            definition: "a shade or variety of color",
            sentence: "The sky had a pink tint at sunset.",
            origin: "Latin"
        },
        {
            word: "milk",
            definition: "a white liquid produced by mammals to feed their young",
            sentence: "I drink a glass of milk every morning.",
            origin: "Old English"
        },
        {
            word: "yawn",
            definition: "to open one's mouth wide when tired or bored",
            sentence: "She began to yawn during the long movie.",
            origin: "Old English"
        },
        {
            word: "tank",
            definition: "a large container for liquid or gas; an armored military vehicle",
            sentence: "The fish tank was full of water.",
            origin: "Indian"
        },
        {
            word: "want",
            definition: "to wish for or desire something",
            sentence: "I want to go to the park.",
            origin: "Old Norse"
        },
        {
            word: "crowd",
            definition: "a large number of people gathered together",
            sentence: "A big crowd watched the parade.",
            origin: "Old English"
        },
        {
            word: "pond",
            definition: "a small body of still water",
            sentence: "Ducks swam in the pond.",
            origin: "Middle English"
        },
        {
            word: "skirt",
            definition: "a garment that hangs from the waist",
            sentence: "She wore a blue skirt to school.",
            origin: "Old Norse"
        },
        {
            word: "sharks",
            definition: "large fish with sharp teeth that live in the ocean",
            sentence: "Sharks are powerful predators.",
            origin: "Unknown"
        },
        {
            word: "quilt",
            definition: "a warm bed covering made of padding enclosed between layers of fabric",
            sentence: "Grandma made a colorful quilt for my bed.",
            origin: "Latin"
        },
        {
            word: "twigs",
            definition: "small, thin branches of a tree or bush",
            sentence: "The bird gathered twigs to build a nest.",
            origin: "Old English"
        },
        {
            word: "taffy",
            definition: "a type of chewy candy",
            sentence: "We bought saltwater taffy at the beach.",
            origin: "American English"
        },
        {
            word: "comfy",
            definition: "comfortable and cozy",
            sentence: "These slippers are very comfy.",
            origin: "English"
        },
        {
            word: "stretch",
            definition: "to extend or lengthen; to make or become longer or wider",
            sentence: "Always stretch before exercising.",
            origin: "Old English"
        },
        {
            word: "tight",
            definition: "firmly fixed; not loose",
            sentence: "The lid was too tight to open.",
            origin: "Old Norse"
        },
        {
            word: "candy",
            definition: "sweet food made with sugar or chocolate",
            sentence: "The children enjoyed candy at the party.",
            origin: "Arabic"
        },
        {
            word: "scrunch",
            definition: "to crush or squeeze into a compact mass",
            sentence: "She scrunched the paper into a ball.",
            origin: "English"
        },
        {
            word: "ruby",
            definition: "a precious stone that is typically red",
            sentence: "The ring had a beautiful ruby.",
            origin: "Latin"
        },
        {
            word: "close",
            definition: "near in space or time; to shut",
            sentence: "Please close the door behind you.",
            origin: "Latin"
        },
        {
            word: "tackle",
            definition: "equipment for a task; to deal with or attempt to deal with",
            sentence: "We need to tackle this problem together.",
            origin: "Germanic"
        },
        {
            word: "wire",
            definition: "metal drawn out into a thin flexible thread",
            sentence: "The electrician fixed the broken wire.",
            origin: "Old English"
        },
        {
            word: "skater",
            definition: "a person who skates on ice or wheels",
            sentence: "The skater performed a perfect jump.",
            origin: "Dutch"
        },
        {
            word: "giant",
            definition: "an imaginary or mythical being of great size; something very large",
            sentence: "The giant in the story was ten feet tall.",
            origin: "Greek"
        },
        {
            word: "bucket",
            definition: "a round, open container with a handle for carrying liquids",
            sentence: "Fill the bucket with water.",
            origin: "Old English"
        },
        {
            word: "chance",
            definition: "a possibility of something happening; luck",
            sentence: "There's a good chance of rain today.",
            origin: "Latin"
        },
        {
            word: "baskets",
            definition: "containers made of woven material",
            sentence: "We carried the fruit in baskets.",
            origin: "Unknown"
        },
        {
            word: "tender",
            definition: "soft, gentle, or easily damaged",
            sentence: "The meat was tender and delicious.",
            origin: "Latin"
        },
        {
            word: "paste",
            definition: "a thick, soft substance; to stick with glue",
            sentence: "Mix flour and water to make paste.",
            origin: "Latin"
        },
        {
            word: "melon",
            definition: "a large fruit with sweet, juicy flesh",
            sentence: "We ate watermelon on the hot day.",
            origin: "Greek"
        },
        {
            word: "farmer",
            definition: "a person who owns or manages a farm",
            sentence: "The farmer planted corn in the field.",
            origin: "Latin"
        },
        {
            word: "parent",
            definition: "a mother or father",
            sentence: "Each parent attended the school meeting.",
            origin: "Latin"
        },
        {
            word: "tail",
            definition: "the rear part of an animal, especially when extended beyond the body",
            sentence: "The dog wagged its tail happily.",
            origin: "Old English"
        },
        {
            word: "hockey",
            definition: "a game played on ice or grass with sticks and a puck or ball",
            sentence: "He plays hockey every Saturday.",
            origin: "French"
        },
        {
            word: "slime",
            definition: "a thick, slippery liquid substance",
            sentence: "The snail left a trail of slime.",
            origin: "Old English"
        },
        {
            word: "insects",
            definition: "small animals with six legs and a body divided into three parts",
            sentence: "Butterflies and ants are insects.",
            origin: "Latin"
        },
        {
            word: "teeth",
            definition: "hard, white structures in the mouth used for biting and chewing",
            sentence: "Brush your teeth twice a day.",
            origin: "Old English"
        },
        {
            word: "shortcut",
            definition: "a quicker route to a destination",
            sentence: "We took a shortcut through the park.",
            origin: "English"
        },
        {
            word: "bait",
            definition: "food used to attract fish or animals",
            sentence: "We used worms as bait for fishing.",
            origin: "Old Norse"
        },
        {
            word: "lure",
            definition: "something that tempts or attracts",
            sentence: "The colorful lure attracted many fish.",
            origin: "French"
        },
        {
            word: "cluster",
            definition: "a group of similar things growing or held together",
            sentence: "A cluster of grapes hung from the vine.",
            origin: "Old English"
        },
        {
            word: "forest",
            definition: "a large area covered with trees and undergrowth",
            sentence: "We went hiking in the forest.",
            origin: "Latin"
        },
        {
            word: "hollow",
            definition: "having an empty space inside",
            sentence: "The tree trunk was hollow inside.",
            origin: "Old English"
        },
        {
            word: "spinning",
            definition: "turning around quickly",
            sentence: "The top kept spinning on the table.",
            origin: "Old English"
        },
        {
            word: "baffling",
            definition: "confusing or puzzling",
            sentence: "The mystery was completely baffling.",
            origin: "Unknown"
        },
        {
            word: "sizzling",
            definition: "making a hissing sound when frying or burning",
            sentence: "The bacon was sizzling in the pan.",
            origin: "Imitative"
        },
        {
            word: "hoist",
            definition: "to raise or lift something using ropes or machinery",
            sentence: "They hoist the flag every morning.",
            origin: "Germanic"
        },
        {
            word: "search",
            definition: "to look carefully for something",
            sentence: "We search for shells at the beach.",
            origin: "Latin"
        },
        {
            word: "remind",
            definition: "to cause someone to remember something",
            sentence: "Please remind me about the meeting.",
            origin: "Latin"
        },
        {
            word: "mango",
            definition: "a tropical fruit with sweet orange flesh",
            sentence: "The ripe mango was delicious.",
            origin: "Tamil"
        },
        {
            word: "coral",
            definition: "a hard substance formed by sea creatures; a pinkish-red color",
            sentence: "The coral reef was full of colorful fish.",
            origin: "Greek"
        },
        {
            word: "jangle",
            definition: "to make a ringing metallic sound",
            sentence: "The keys jangle in my pocket.",
            origin: "Old French"
        },
        {
            word: "shimmer",
            definition: "to shine with a soft, flickering light",
            sentence: "The lake began to shimmer in the moonlight.",
            origin: "Old English"
        },
        {
            word: "blossoms",
            definition: "flowers, especially on a fruit tree",
            sentence: "Cherry blossoms bloom in spring.",
            origin: "Old English"
        },
        {
            word: "swampy",
            definition: "like a swamp; wet and muddy",
            sentence: "The swampy ground was hard to walk through.",
            origin: "Germanic"
        },
        {
            word: "studded",
            definition: "decorated with studs or small objects; covered with",
            sentence: "The belt was studded with jewels.",
            origin: "Old English"
        },
        {
            word: "focus",
            definition: "to concentrate attention or effort on something",
            sentence: "Please focus on your homework.",
            origin: "Latin"
        },
        {
            word: "distress",
            definition: "extreme anxiety, sorrow, or pain",
            sentence: "The lost child was in distress.",
            origin: "Latin"
        },
        {
            word: "lessons",
            definition: "periods of learning or teaching; things learned",
            sentence: "We have piano lessons every Tuesday.",
            origin: "Latin"
        },
        {
            word: "moment",
            definition: "a very brief period of time",
            sentence: "Wait just a moment, please.",
            origin: "Latin"
        },
        {
            word: "ajar",
            definition: "slightly open",
            sentence: "The door was left ajar.",
            origin: "Old English"
        },
        {
            word: "basil",
            definition: "an aromatic herb used in cooking",
            sentence: "Add fresh basil to the pasta sauce.",
            origin: "Greek"
        },
        {
            word: "triple",
            definition: "consisting of three parts; to multiply by three",
            sentence: "She scored a triple in the baseball game.",
            origin: "Latin"
        },
        {
            word: "satin",
            definition: "a smooth, glossy fabric",
            sentence: "Her dress was made of white satin.",
            origin: "Arabic"
        },
        {
            word: "ahoy",
            definition: "a call used to attract attention, especially on a ship",
            sentence: "The sailor shouted 'Ahoy!' to the passing boat.",
            origin: "Dutch"
        },
        {
            word: "signal",
            definition: "a gesture, action, or sound that conveys information",
            sentence: "The traffic signal turned green.",
            origin: "Latin"
        },
        {
            word: "answer",
            definition: "a response to a question; to respond",
            sentence: "Please answer the phone.",
            origin: "Old English"
        },
        {
            word: "shuffle",
            definition: "to walk without lifting one's feet; to mix cards randomly",
            sentence: "Shuffle the deck before dealing.",
            origin: "Germanic"
        },
        {
            word: "dollop",
            definition: "a small lump or blob of a soft substance",
            sentence: "Add a dollop of whipped cream on top.",
            origin: "Unknown"
        },
        {
            word: "minnows",
            definition: "small freshwater fish",
            sentence: "Minnows swam in the shallow stream.",
            origin: "Old English"
        },
        {
            word: "silver",
            definition: "a shiny grayish-white metal; a color like this metal",
            sentence: "She wore a silver bracelet.",
            origin: "Old English"
        },
        {
            word: "before",
            definition: "during the time preceding; in front of",
            sentence: "Wash your hands before dinner.",
            origin: "Old English"
        },
        {
            word: "circus",
            definition: "a traveling show with acrobats, clowns, and trained animals",
            sentence: "We went to the circus and saw elephants.",
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
        },
        {
            word: "zombielike",
            definition: "resembling a zombie; moving or behaving in a sluggish or mechanical manner",
            sentence: "After staying up all night, he walked around in a zombielike state.",
            origin: "West African and English"
        },
        {
            word: "warlock",
            definition: "a man who practices witchcraft; a sorcerer",
            sentence: "The old warlock cast a spell to protect the village.",
            origin: "Old English"
        },
        {
            word: "colossus",
            definition: "a statue that is much bigger than life size; something of great size or importance",
            sentence: "The Colossus of Rhodes was one of the Seven Wonders of the Ancient World.",
            origin: "Greek"
        },
        {
            word: "convulsively",
            definition: "in a manner involving sudden, violent, irregular movements",
            sentence: "She laughed convulsively at the comedian's jokes.",
            origin: "Latin"
        },
        {
            word: "dimensional",
            definition: "relating to or having dimensions; having measurable extent",
            sentence: "The architect created a three-dimensional model of the building.",
            origin: "Latin"
        },
        {
            word: "garishly",
            definition: "in an excessively bright or showy manner; tastelessly colorful",
            sentence: "The room was garishly decorated with bright pink and orange.",
            origin: "Unknown"
        },
        {
            word: "graffitist",
            definition: "a person who creates graffiti",
            sentence: "The graffitist spray-painted a mural on the side of the building.",
            origin: "Italian"
        },
        {
            word: "Everest",
            definition: "the highest mountain in the world, located in the Himalayas",
            sentence: "Climbing Mount Everest is a dangerous and challenging achievement.",
            origin: "English"
        },
        {
            word: "dexterity",
            definition: "skill in performing tasks, especially with the hands; mental skill or quickness",
            sentence: "The surgeon's dexterity was evident during the complex operation.",
            origin: "Latin"
        },
        {
            word: "cavorting",
            definition: "jumping or dancing around excitedly; engaging in lively or boisterous activity",
            sentence: "The children were cavorting in the playground during recess.",
            origin: "Unknown"
        },
        {
            word: "marauder",
            definition: "a person who makes raids in search of plunder; a raider",
            sentence: "The marauder stole supplies from the village before disappearing into the night.",
            origin: "French"
        },
        {
            word: "conscience",
            definition: "an inner feeling or voice that acts as a guide to the rightness or wrongness of one's behavior",
            sentence: "His conscience bothered him after he told a lie.",
            origin: "Latin"
        },
        {
            word: "battlements",
            definition: "a parapet at the top of a wall with gaps for shooting through; defensive fortifications",
            sentence: "The soldiers stood watch on the castle's battlements.",
            origin: "French"
        },
        {
            word: "deferential",
            definition: "showing respectful submission or yielding to the judgment of another",
            sentence: "The students were deferential toward their elderly teacher.",
            origin: "Latin"
        },
        {
            word: "albatross",
            definition: "a large seabird; something that causes persistent worry or difficulty",
            sentence: "The ancient mariner wore the albatross around his neck as a burden.",
            origin: "Portuguese and Arabic"
        },
        {
            word: "khaki",
            definition: "a dull brownish-yellow color; fabric or clothing of this color",
            sentence: "The soldiers wore khaki uniforms for camouflage.",
            origin: "Urdu and Persian"
        },
        {
            word: "opalescent",
            definition: "showing varying colors as an opal does; iridescent",
            sentence: "The soap bubble had an opalescent sheen in the sunlight.",
            origin: "Latin"
        },
        {
            word: "asphalt",
            definition: "a sticky black substance used for paving roads and waterproofing",
            sentence: "The workers laid fresh asphalt on the highway.",
            origin: "Greek"
        },
        {
            word: "Yiddish",
            definition: "a language used by Jews in central and eastern Europe, blending German and Hebrew",
            sentence: "My grandmother spoke Yiddish with her family.",
            origin: "German"
        },
        {
            word: "talcum",
            definition: "a soft white powder made from talc, used in cosmetics and toiletries",
            sentence: "She sprinkled talcum powder on the baby after the bath.",
            origin: "Arabic and Latin"
        },
        {
            word: "tranquilizer",
            definition: "a medicinal drug taken to reduce tension or anxiety",
            sentence: "The veterinarian gave the anxious dog a tranquilizer.",
            origin: "Latin"
        },
        {
            word: "equestrian",
            definition: "relating to horseback riding; a person who rides horses",
            sentence: "She participated in equestrian competitions every summer.",
            origin: "Latin"
        },
        {
            word: "plaited",
            definition: "woven or braided; formed by intertwining strands",
            sentence: "She wore her hair plaited in two long braids.",
            origin: "Latin"
        },
        {
            word: "monsieur",
            definition: "a title or form of address for a French-speaking man, equivalent to Mr.",
            sentence: "Monsieur Dupont greeted us at the door of his restaurant.",
            origin: "French"
        },
        {
            word: "manticores",
            definition: "mythical creatures with a human head, lion's body, and scorpion's tail",
            sentence: "The legend spoke of manticores guarding the ancient temple.",
            origin: "Greek and Persian"
        },
        {
            word: "prestigious",
            definition: "inspiring respect and admiration; having high status",
            sentence: "She won a prestigious award for her scientific research.",
            origin: "Latin"
        },
        {
            word: "fraidycat",
            definition: "a person who is easily frightened; a coward",
            sentence: "Don't be such a fraidycat about the harmless spider.",
            origin: "American English"
        },
        {
            word: "guttural",
            definition: "relating to the throat; a harsh-sounding speech sound",
            sentence: "The language had many guttural consonants that were difficult to pronounce.",
            origin: "Latin"
        },
        {
            word: "lo mein",
            definition: "a Chinese dish of wheat-flour noodles with vegetables and often meat or shrimp",
            sentence: "We ordered chicken lo mein from the Chinese restaurant.",
            origin: "Chinese"
        },
        {
            word: "courier",
            definition: "a messenger who transports goods or documents",
            sentence: "The courier delivered the important package by noon.",
            origin: "Latin and French"
        },
        {
            word: "sans serif",
            definition: "a style of typeface without small projecting features at the ends of strokes",
            sentence: "The modern logo used a clean sans serif font.",
            origin: "French and Latin"
        },
        {
            word: "psyche",
            definition: "the human soul, mind, or spirit",
            sentence: "The therapist explored the patient's psyche during their sessions.",
            origin: "Greek"
        },
        {
            word: "stucco",
            definition: "a fine plaster used for coating wall surfaces or molding into decorative forms",
            sentence: "The Mediterranean-style house had white stucco walls.",
            origin: "Italian"
        },
        {
            word: "Frankenstein",
            definition: "a thing that becomes terrifying to its maker; a monster created by science",
            sentence: "The scientist realized his creation had become a Frankenstein.",
            origin: "German"
        },
        {
            word: "schema",
            definition: "a representation of a plan or theory in the form of an outline or model",
            sentence: "The database administrator designed a new schema for the system.",
            origin: "Greek"
        },
        {
            word: "et cetera",
            definition: "and other similar things; and so forth",
            sentence: "The store sells pencils, pens, paper, et cetera.",
            origin: "Latin"
        },
        {
            word: "vidimus",
            definition: "an attested copy of an account; we have seen",
            sentence: "The clerk provided a vidimus of the original document.",
            origin: "Latin"
        },
        {
            word: "delphine",
            definition: "relating to or resembling a dolphin",
            sentence: "The sculpture had a delphine grace and fluidity.",
            origin: "Greek"
        },
        {
            word: "slough",
            definition: "a swamp or marsh; to shed or cast off",
            sentence: "The snake began to slough its old skin.",
            origin: "Old English"
        },
        {
            word: "archipelago",
            definition: "a group of islands",
            sentence: "Indonesia is the world's largest archipelago with thousands of islands.",
            origin: "Greek and Italian"
        },
        {
            word: "serape",
            definition: "a shawl or blanket worn as a cloak in Latin America",
            sentence: "He wrapped the colorful serape around his shoulders for warmth.",
            origin: "Spanish"
        },
        {
            word: "puissance",
            definition: "great power, influence, or prowess",
            sentence: "The general was known for his military puissance.",
            origin: "French"
        },
        {
            word: "pinioning",
            definition: "restraining someone by tying or holding their arms or legs",
            sentence: "The guards were pinioning the prisoner's arms behind his back.",
            origin: "Latin and French"
        },
        {
            word: "chignon",
            definition: "a knot or coil of hair arranged on the back of a woman's head",
            sentence: "She wore her hair in an elegant chignon for the wedding.",
            origin: "French"
        },
        {
            word: "pheromone",
            definition: "a chemical substance produced and released by an animal affecting the behavior of others",
            sentence: "The moth released pheromones to attract a mate.",
            origin: "Greek"
        },
        {
            word: "galleon",
            definition: "a large sailing ship with multiple decks, used from the 15th to 18th centuries",
            sentence: "The Spanish galleon was laden with treasure from the New World.",
            origin: "Spanish and French"
        },
        {
            word: "magnanimous",
            definition: "very generous or forgiving, especially toward a rival or less powerful person",
            sentence: "The victor was magnanimous in praising his opponent's effort.",
            origin: "Latin"
        },
        {
            word: "chartreuse",
            definition: "a pale green or yellow color; a liqueur made by Carthusian monks",
            sentence: "She painted her room a soft chartreuse color.",
            origin: "French"
        },
        {
            word: "wainscoting",
            definition: "wooden paneling that lines the lower part of the walls of a room",
            sentence: "The dining room featured beautiful oak wainscoting.",
            origin: "Dutch and German"
        },
        {
            word: "Nehru",
            definition: "relating to Jawaharlal Nehru; often used for a type of jacket with a stand-up collar",
            sentence: "He wore a traditional Nehru jacket to the formal event.",
            origin: "Hindi"
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
