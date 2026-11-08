import type { ClassStageInfo } from './ncertData';

export const CLASS_5_DATA: ClassStageInfo = {
  classNumber: 5,
  stageName: 'Preparatory',
  ageGroup: '10-11 Years',
  nepFocus: 'Foundational Numeracy, Experiential EVS, Bilingual Storytelling, Real-world Observations & Critical Curiosity',
  subjects: [
    // 1. Mathematics (Math Mela / गणित मेला - NEP 2024 eemm1)
    {
      id: 'c5-maths',
      name: 'Mathematics (Math Mela / गणित मेला)',
      iconName: 'Calculator',
      color: '#14b8a6',
      description: '15 Chapters: We the Travellers—I, Fractions, Angles as Turns, We the Travellers—II, Far and Near, The Dairy Farm, Shapes and Patterns, Weight and Capacity, Coconut Farm, Symmetrical Designs, Grandmother\'s Quilt, Racing Seconds, Animal Jumps, Maps and Locations, Data Through Pictures.',
      totalChapters: 15,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg',
      chapters: [
        {
          id: 'c5-m-ch1',
          chapterNumber: 1,
          title: 'We the Travellers—I (हम यात्री—भाग 1)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm101.pdf',
          nepHighlights: 'Large numbers, travel itineraries, distance calculation, speed, multi-digit operations in transit contexts.',
          summaryTextbook: 'Students explore journeys across India—calculating bus and train travel distances, ticketing costs, fuel consumption, and scheduling across diverse landscapes.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch1-q1',
              questionNo: 'Page 5 Journey Math',
              questionText: 'A bus travels from Delhi to Jaipur, covering a distance of 280 km in 5 hours. What is the average speed of the bus per hour? (एक बस दिल्ली से जयपुर 280 किमी की दूरी 5 घंटे में तय करती है। बस की औसत चाल प्रति घंटा क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Distance = 280 km, Time = 5 hours',
              formula: 'Speed = Distance ÷ Time',
              stepByStepSolution: [
                'Step 1: Divide total distance by total time taken.',
                'Step 2: 280 ÷ 5 = 56 km/h.',
                'चरण 1: कुल दूरी को कुल समय से भाग दें: 280 ÷ 5 = 56 किमी/घंटा।'
              ],
              finalAnswer: '56 km/h (56 किमी प्रति घंटा)',
              keyTakeaway: 'Average speed equals total distance divided by elapsed travel time.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c5-m-ch1-mcq1',
              question: 'If a train covers 60 km in 1 hour, how far will it travel in 4.5 hours?',
              options: ['240 km', '270 km', '300 km', '180 km'],
              correctIndex: 1,
              explanation: '60 × 4.5 = 270 km.'
            }
          ]
        },
        {
          id: 'c5-m-ch2',
          chapterNumber: 2,
          title: 'Fractions (भिन्न)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm102.pdf',
          nepHighlights: 'Visual fractions, parts of a whole, numerator and denominator, equivalent fractions, comparing halves and quarters.',
          summaryTextbook: 'Using chapatis, chocolate bars, paper folding, and flag designs to understand fractions as equal parts of an object or a collection.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch2-q1',
              questionNo: 'Page 18 Equivalent Fractions',
              questionText: 'What fraction of a pizza remains if 3 out of 8 equal slices are eaten? (यदि एक पिज्जा के 8 बराबर टुकड़ों में से 3 टुकड़े खा लिए जाएँ, तो कितना हिस्सा बचेगा?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Total slices = 8, Eaten slices = 3',
              formula: 'Remaining = 1 - (3/8) = 5/8',
              stepByStepSolution: [
                'Step 1: Whole pizza = 8/8.',
                'Step 2: Subtract eaten slices: 8 - 3 = 5 slices.',
                'Step 3: Remaining fraction = 5/8.',
                'चरण 1: कुल 8 टुकड़े थे, 3 खा लिए -> 8 - 3 = 5 टुकड़े बचे।',
                'चरण 2: शेष भिन्न = 5/8।'
              ],
              finalAnswer: '5/8 (आठ में से पाँच भाग)',
              keyTakeaway: 'Fraction represents parts considered divided by total equal parts.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch3',
          chapterNumber: 3,
          title: 'Angles as Turns (कोण और मोड़)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm103.pdf',
          nepHighlights: 'Right angles (90°), acute and obtuse angles, quarter turn, half turn, angle tester, clock angles.',
          summaryTextbook: 'Investigating angles in yoga poses, clock hands, opening doors, scissors, and comparing turns made while facing different directions.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch3-q1',
              questionNo: 'Clock Turns',
              questionText: 'What angle is formed by the hands of a clock at 3 o\'clock? (घड़ी में 3 बजे सुइयों के बीच कौन सा कोण बनता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: At 3 o\'clock, the hour hand points to 3 and minute hand points to 12.',
                'Step 2: The angle between 12 and 3 is exactly one-quarter of a circle (90° or Right Angle).',
                'चरण 1: 3 बजे घंटे की सुई 3 पर और मिनट की सुई 12 पर होती है।',
                'चरण 2: यह ठीक 90° का समकोण बनाती है।'
              ],
              finalAnswer: '90° — Right Angle (समकोण)',
              keyTakeaway: 'A quarter turn of 90 degrees creates a right angle.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch4',
          chapterNumber: 4,
          title: 'We the Travellers—II (हम यात्री—भाग 2)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm104.pdf',
          nepHighlights: 'Multi-step arithmetic, money budgeting, currency exchange, hotel tariffs, and group expenses.',
          summaryTextbook: 'Continuing the travel story with travel budgets, hotel room bookings, meal tabs, split expenses, and comparing travel costs between air, rail, and bus routes.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch5',
          chapterNumber: 5,
          title: 'Far and Near (दूर और पास)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm105.pdf',
          nepHighlights: 'Estimating distances, scale on maps (1 cm = 100 km), visual spatial perception, navigation.',
          summaryTextbook: 'Reading Indian state maps, measuring straight-line distance with a ruler, calculating actual ground distance using map scale, and planning shortest road routes.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch6',
          chapterNumber: 6,
          title: 'The Dairy Farm (दुग्धशाला / डेयरी फार्म)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm106.pdf',
          nepHighlights: 'Liquid capacity (liters and milliliters), rate calculation (price per liter), profit and revenue in dairy farming.',
          summaryTextbook: 'A cooperative dairy farm where milk from hundreds of cows is measured, pasteurized, packaged, and sold—calculating daily milk yields, fat percentages, and cooperative earnings.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch6-q1',
              questionNo: 'Dairy Yield Q1',
              questionText: 'A dairy cow gives 12 liters of milk each day. How many liters of milk will 15 cows produce in one week (7 days)? (एक गाय रोज़ 12 लीटर दूध देती है। 15 गायें एक सप्ताह (7 दिन) में कितना दूध देंगी?)',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: '1 cow/day = 12 L, Cows = 15, Days = 7',
              formula: 'Total = 12 × 15 × 7',
              stepByStepSolution: [
                'Step 1: Daily milk by 15 cows = 15 × 12 = 180 liters.',
                'Step 2: Total milk in 7 days = 180 × 7 = 1,260 liters.',
                'चरण 1: 15 गायों का 1 दिन का दूध = 15 × 12 = 180 लीटर।',
                'चरण 2: 7 दिनों का कुल दूध = 180 × 7 = 1,260 लीटर।'
              ],
              finalAnswer: '1,260 Liters (1,260 लीटर)',
              keyTakeaway: 'Multi-step multiplication applies directly to agricultural planning.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch7',
          chapterNumber: 7,
          title: 'Shapes and Patterns (आकृतियाँ और पैटर्न)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm107.pdf',
          nepHighlights: 'Tessellations, tiling patterns without gaps, rotational turns (1/2 turn, 1/4 turn, 1/6 turn), geometric art.',
          summaryTextbook: 'Studying Islamic floor tile designs, rangoli symmetries, which polygons tessellate a flat surface (triangles, hexagons, squares), and rotating patterns.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch8',
          chapterNumber: 8,
          title: 'Weight and Capacity (भार और धारिता)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm108.pdf',
          nepHighlights: 'Units of weight (mg, g, kg, quintal), capacity (mL, L, kL), estimating weights of common items.',
          summaryTextbook: 'Comparing elephant weights with car weights, understanding metric prefixes (kilo-, centi-, milli-), using precision digital scales in shops and grain mandis.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch9',
          chapterNumber: 9,
          title: 'Coconut Farm (नारियल का बाग़)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm109.pdf',
          nepHighlights: 'Array multiplication, tree spacing, harvesting counts, economics of coconut coir and copra.',
          summaryTextbook: 'In a coastal coconut grove, trees are planted in square grids. Students calculate tree counts using row-column multiplication, coconut yield per harvest, and shipment logistics.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch10',
          chapterNumber: 10,
          title: 'Symmetrical Designs (सममित डिज़ाइन)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm110.pdf',
          nepHighlights: 'Multiple lines of symmetry, kaleidoscope optics, rotational invariance, rangoli and mandalas.',
          summaryTextbook: 'Creating intricate mandala designs using mirrors, paper folding, and geometric compasses, exploring how rotational symmetry generates mesmerizing visual patterns.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch11',
          chapterNumber: 11,
          title: 'Grandmother\'s Quilt (दादी की रजाई)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm111.pdf',
          nepHighlights: 'Area and perimeter, square units, patchwork quilt geometry, stitching borders.',
          summaryTextbook: 'Grandmother stitches a quilt using square cloth patches of different colors. Students calculate the total area covered by patches and the ribbon perimeter required for the border.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch11-q1',
              questionNo: 'Area & Perimeter Q1',
              questionText: 'A rectangular quilt is 200 cm long and 150 cm wide. What is its perimeter and area? (एक आयताकार रजाई 200 सेमी लंबी और 150 सेमी चौड़ी है। इसका परिमाप और क्षेत्रफल ज्ञात कीजिए।)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Length = 200 cm, Width = 150 cm',
              formula: 'Perimeter = 2 × (L + W), Area = L × W',
              stepByStepSolution: [
                'Step 1: Perimeter = 2 × (200 + 150) = 2 × 350 = 700 cm (7 meters).',
                'Step 2: Area = 200 × 150 = 30,000 cm² (3 m²).',
                'चरण 1: परिमाप = 2 × (200 + 150) = 700 सेमी (7 मीटर)।',
                'चरण 2: क्षेत्रफल = 200 × 150 = 30,000 वर्ग सेमी।'
              ],
              finalAnswer: 'Perimeter = 700 cm; Area = 30,000 cm²',
              keyTakeaway: 'Perimeter measures the outer boundary, while area measures the flat surface enclosed.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch12',
          chapterNumber: 12,
          title: 'Racing Seconds (दौड़ते सेकंड)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm112.pdf',
          nepHighlights: 'Stopwatch reading, athletic sprint timings, split seconds, heartbeats, and time conversion (hours to minutes to seconds).',
          summaryTextbook: 'Using stopwatches during school sports day races: recording 100-meter sprint times in seconds and tenths of a second, measuring resting vs running pulse rates.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch13',
          chapterNumber: 13,
          title: 'Animal Jumps (जानवरों की छलाँगें)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm113.pdf',
          nepHighlights: 'Multiples, common multiples, Least Common Multiple (LCM) concept through number line leaps (frog, rabbit, deer).',
          summaryTextbook: 'A frog jumps 3 steps at a time, a rabbit jumps 5 steps at a time, and a kangaroo jumps 7 steps. At which stepping stones will they land on the same number together?',
          exerciseSolutions: [
            {
              id: 'c5-m-ch13-q1',
              questionNo: 'Common Multiples Q1',
              questionText: 'A frog jumps 3 steps at a time and a rabbit jumps 5 steps at a time. What is the first stone they will both land on? (एक मेंढक 3-3 कदम कूदता है और खरगोश 5-5 कदम। वे दोनों सबसे पहले किस पत्थर पर मिलेंगे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Frog = multiples of 3, Rabbit = multiples of 5',
              formula: 'LCM(3, 5) = 15',
              stepByStepSolution: [
                'Step 1: Multiples of 3: 3, 6, 9, 12, 15, 18...',
                'Step 2: Multiples of 5: 5, 10, 15, 20...',
                'Step 3: The first common number is 15.',
                'चरण 1: 3 के गुणज: 3, 6, 9, 12, 15...',
                'चरण 2: 5 के गुणज: 5, 10, 15...',
                'चरण 3: पहला उभयनिष्ठ गुणज 15 है।'
              ],
              finalAnswer: 'Stone 15 (15वाँ पत्थर)',
              keyTakeaway: 'The Least Common Multiple (LCM) is the smallest shared multiple of two numbers.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch14',
          chapterNumber: 14,
          title: 'Maps and Locations (मानचित्र और स्थान)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm114.pdf',
          nepHighlights: 'Grid coordinates, locating landmarks on city maps, route planning, orientation, map legends.',
          summaryTextbook: 'Reading city road maps with grid letters and numbers (e.g., Hospital at B-4, School at D-2), finding optimal routes between monuments, and understanding map orientation.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch15',
          chapterNumber: 15,
          title: 'Data Through Pictures (चित्रों द्वारा आँकड़े)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm115.pdf',
          nepHighlights: 'Bar graphs, pictographs with scale, pie charts, interpreting real-world surveys (weather, sports, school attendance).',
          summaryTextbook: 'Conducting class surveys on favorite books, hobbies, and blood groups, organizing raw data into frequency tables, and plotting proportional horizontal and vertical bar graphs.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch15-q1',
              questionNo: 'Bar Graph Interpretation',
              questionText: 'In a pictograph where 1 book symbol represents 10 books, how many books do 4.5 book symbols represent? (एक चित्रालेख में जहाँ 1 पुस्तक का चिह्न 10 पुस्तकों को दर्शाता है, 4.5 चिह्न कितनी पुस्तकें दर्शाएंगे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '1 symbol = 10 books',
              formula: 'Total = 4.5 × 10 = 45 books',
              stepByStepSolution: [
                'Step 1: 4 full symbols = 4 × 10 = 40 books.',
                'Step 2: 0.5 (half) symbol = 10 ÷ 2 = 5 books.',
                'Step 3: Total = 40 + 5 = 45 books.',
                'चरण 1: 4 पूरे चिह्न = 40 पुस्तकें।',
                'चरण 2: आधा चिह्न = 5 पुस्तकें। कुल = 45 पुस्तकें।'
              ],
              finalAnswer: '45 books (45 पुस्तकें)',
              keyTakeaway: 'Pictograph keys scale symbols to represent larger numbers efficiently.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 2. Environmental Studies (Looking Around / आस-पास)
    {
      id: 'c5-evs',
      name: 'Environmental Studies (Looking Around / आस-पास)',
      iconName: 'Globe',
      color: '#10b981',
      description: '22 Real-World Units: Super Senses, Snake Charmers, Experiments with Water, Sunita in Space, Seed Germination & Forest Conservation.',
      totalChapters: 22,
      coverImageUrl: '/book-covers/class5-evs-looking-around.png',
      chapters: [
        {
          id: 'c5-evs-ch1',
          chapterNumber: 1,
          title: 'Super Senses (कैसे पहचाना चींटी ने दोस्त को?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap101.pdf',
          nepHighlights: 'Animal sensory capabilities: ant chemical pheromones, eagle binocular vision, dog scent tracking, silkworm, tiger hearing & night vision.',
          summaryTextbook: 'Explores extraordinary senses in animals: ants leaving scent trails, eagles spotting prey from 2 km away, dogs marking territory with urine smell, and tigers detecting vibrations with whiskers. Includes complete interactive line-by-line story practice.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch1-q1',
              questionNo: 'Super Senses Q1',
              questionText: 'How did the ant recognize its friend and find its way back to its nest?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: As ants move, they leave a chemical scent (pheromone) on the ground.',
                'Step 2: The other ants follow this scent trail using their sensitive antennae.',
                'Step 3: The guard ant recognizes the specific nest odor.'
              ],
              finalAnswer: 'Ants recognize friends and follow trails through distinctive chemical scents (pheromones).',
              keyTakeaway: 'Animals rely on highly specialized senses for survival, navigation, and communication.'
            },
            {
              id: 'c5-evs-ch1-q2',
              questionNo: 'Super Senses Q2 (Birds of Prey)',
              questionText: 'Which birds can see four times as far as humans, and how far can an eagle spot food from the sky?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Kites, eagles, and vultures can see four times as far as human eyes.',
                'Step 2: What humans see from 2 metres away, these birds can spot from 8 metres away.',
                'Step 3: An eagle flying high in the sky can spot a small roti on the ground from 1 to 2 kilometres away.'
              ],
              finalAnswer: 'Kites, eagles, and vultures; eagles can spot food from 1 to 2 kilometres away.',
              keyTakeaway: 'Birds of prey have high-density photoreceptors giving them extraordinary visual magnification.'
            },
            {
              id: 'c5-evs-ch1-q3',
              questionNo: 'Super Senses Q3 (The Tiger)',
              questionText: 'What special super senses make the tiger one of the most successful nocturnal hunters?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Night Vision: Can see 6 times better in the dark than humans.',
                'Step 2: Whiskers: Sensitive facial hairs detect minute vibrations and air movements.',
                'Step 3: Directional Hearing: Ears rotate independently to catch sound from all directions.',
                'Step 4: Sound Discrimination: Distinguishes rustling leaves from moving prey footsteps.'
              ],
              finalAnswer: 'Night vision (6x human level), sensitive whiskers, rotatable ears, and keen sound discrimination.',
              keyTakeaway: 'Multi-sensory integration enables apex predators to hunt stealthily in total darkness.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch2',
          chapterNumber: 2,
          title: "A Snake Charmer's Story (कहानी सपेरों की)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap102.pdf',
          nepHighlights: 'Kalbelia community tradition, venomous vs non-venomous snakes of India (Cobra, Common Krait, Russell’s Viper, Saw-scaled Viper), and wildlife protection laws.',
          summaryTextbook: 'Aryanath tells of the Kalbelia snake charmer heritage, making snakebite medicine from herbs, why snakes lack external ears and feel vibrations, and the Wildlife Protection Act ban on catching snakes.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch2-q1',
              questionNo: 'Snake Venom Facts',
              questionText: 'Name the four types of poisonous snakes found commonly in India.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: India has over 300 snake species, but only 4 are dangerously venomous to humans.',
                'Step 2: 1. Cobra (नाग), 2. Common Krait (करैत), 3. Russell’s Viper (दुबोइया), 4. Saw-scaled Viper (अफ़ाई).'
              ],
              finalAnswer: 'Cobra, Common Krait, Russell’s Viper (Duboiya), and Saw-scaled Viper (Afai).',
              keyTakeaway: 'Snake venom medicine (antivenom) is made from snake venom itself.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch3',
          chapterNumber: 3,
          title: 'From Tasting to Digesting (चखने से पचने तक)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap103.pdf',
          nepHighlights: 'Taste buds (sweet, salty, sour, bitter), salivary amylase breaking down starch, Dr. Beaumont observation of St. Martin’s stomach juices (hydrochloric acid).',
          summaryTextbook: 'Jhumpa and Jhoolan tasting game, role of saliva in turning chewed bread sweet, digestive timeline of various foods in human stomach, and treating dehydration with ORS/glucose drips.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch3-q1',
              questionNo: 'Stomach Digestion',
              questionText: 'Why does bread or boiled rice begin to taste sweet after being chewed thoroughly for 30 seconds?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Saliva contains the digestive enzyme salivary amylase.',
                'Step 2: Amylase breaks down complex starches into simpler sugars (maltose/glucose).',
                'Step 3: Simple sugars stimulate sweet taste receptors on the tongue.'
              ],
              finalAnswer: 'Saliva enzymes convert starch into sugar during thorough chewing.',
              keyTakeaway: 'Digestion begins in the mouth through mechanical chewing and salivary enzymes.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch4',
          chapterNumber: 4,
          title: 'Mangoes Round the Year (खाएं आम बारहों महीने)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap104.pdf',
          nepHighlights: 'Food spoilage vs preservation, fungal growth on bread, making Mamidi Tandra (Aam Papad) in Andhra Pradesh.',
          summaryTextbook: 'Aman and Nitu lunchbox spoilage, observing mold on moist bread over 6 days, and step-by-step sun-drying of ripe mango pulp with jaggery to make Mamidi Tandra.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch4-q1',
              questionNo: 'Food Preservation',
              questionText: 'What methods are used to preserve fruits and vegetables across different seasons?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Sun drying (making aam papad, raisins).',
                'Step 2: Adding salt and oil (pickling mangoes, lemons).',
                'Step 3: Adding high sugar concentration (making jams, jellies).',
                'Step 4: Refrigeration and freezing.'
              ],
              finalAnswer: 'Drying, pickling with salt/oil, sugar syrup preservation, and cold storage.',
              keyTakeaway: 'Removing moisture and creating hypertonic environments inhibits bacterial and fungal growth.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch5',
          chapterNumber: 5,
          title: 'Seeds and Seeds (बीज, बीज, बीज)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap105.pdf',
          nepHighlights: 'Seed germination requirements (air, water, warmth), seed dispersal mechanisms (wind, water, animals, explosive bursting), George de Mestral Velcro discovery.',
          summaryTextbook: 'Gopal chana sprouting experiment, pitcher plant (Nepenthes) catching insects, Velcro invented by observing burdock seeds sticking to dog fur, and seeds traveling across world trade routes (chillies from South America).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch5-q1',
              questionNo: 'Velcro Discovery',
              questionText: 'How did George de Mestral get the idea to invent Velcro in 1948?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: After a walk with his dog, he noticed burdock seeds clinging tightly to his clothes and dog fur.',
                'Step 2: Under a microscope, he saw thousands of tiny hooks that attached to loops in fabric.',
                'Step 3: He engineered synthetic hook-and-loop strips named Velcro.'
              ],
              finalAnswer: 'By observing tiny hooks on seeds sticking to fur under a microscope (Biomimicry).',
              keyTakeaway: 'Careful observation of nature inspires world-changing engineering inventions.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch6',
          chapterNumber: 6,
          title: 'Every Drop Counts (बूँद-बूँद, दरिया-दरिया)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap106.pdf',
          nepHighlights: 'Ancient rainwater harvesting, Ghadsisar lake in Jaisalmer, Stepwells (Bawdis), customs related to water, Jal Board supply.',
          summaryTextbook: 'King Ghadsi interconnected 9-lake system in 650-year-old Jaisalmer, Al-Biruni travelogue praising Indian water architecture, rooftop rainwater collection in tankas, and contemporary water struggles.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch6-q1',
              questionNo: 'Bawdi Heritage',
              questionText: 'What is a Stepwell (Bawdi) and why were they built along travel trade routes in ancient India?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A stepwell has flights of stone stairs going down several storeys to the water table.',
                'Step 2: Instead of drawing water with ropes, travelers walked down directly to the cool water.',
                'Step 3: They served as community rest stops and preserved water during severe summer droughts.'
              ],
              finalAnswer: 'Multi-storey stepwells designed for community rainwater storage and thirsty travelers.',
              keyTakeaway: 'Traditional rainwater harvesting systems are eco-friendly, resilient solutions to water scarcity.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch7',
          chapterNumber: 7,
          title: 'Experiments with Water (पानी के प्रयोग)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap107.pdf',
          nepHighlights: 'Floating vs sinking, density, solubility in water, Dead Sea high salinity buoyancy, Mahatma Gandhi Dandi March (1930) for salt law freedom.',
          summaryTextbook: 'Ayesha soap case floating experiment, egg floating in saturated salt water, why people cannot drown in the Dead Sea (300 g salt per liter of water), and evaporating sea water for natural salt.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch7-q1',
              questionNo: 'Dead Sea Buoyancy',
              questionText: 'Why can a person float effortlessly on top of the Dead Sea without swimming?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The Dead Sea has an extremely high salt concentration (~300 grams of salt per liter of water).',
                'Step 2: This makes the water density much higher than the average human body density.',
                'Step 3: The buoyant upward force exceeds the downward gravitational pull, keeping the body afloat.'
              ],
              finalAnswer: 'High salinity gives the water immense density and buoyant force.',
              keyTakeaway: 'Objects float when their average density is less than the density of the surrounding liquid.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch8',
          chapterNumber: 8,
          title: 'A Treat for Mosquitoes (मच्छरों की दावत?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap108.pdf',
          nepHighlights: 'Malaria transmission via female Anopheles mosquito, blood test slide diagnosis, Ronald Ross Nobel Prize discovery, Anemia and iron-rich foods.',
          summaryTextbook: 'Rajat, Jaskirat, and Aarti blood test reports showing normal hemoglobin (12-16 g/dL) vs anemia, eating jaggery, amla, and green leafy vegetables, preventing stagnant water breeding, and Ronald Ross mosquito research in Secunderabad.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch8-q1',
              questionNo: 'Malaria Vector',
              questionText: 'Which mosquito spreads malaria and how can we prevent mosquito breeding in our neighborhoods?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Malaria is spread by the female Anopheles mosquito carrying Plasmodium parasites.',
                'Step 2: Prevent breeding by emptying standing water from coolers, pots, and tires.',
                'Step 3: Add fish (Gambusia) to ponds to eat mosquito larvae, or spray oil on stagnant water surfaces.'
              ],
              finalAnswer: 'Female Anopheles mosquito; prevented by eliminating stagnant water and using larvivorous fish/oil.',
              keyTakeaway: 'Disrupting the mosquito lifecycle prevents vector-borne diseases like malaria and dengue.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch9',
          chapterNumber: 9,
          title: 'Up You Go! (कमर सीधी, ऊपर चढ़ो!)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap109.pdf',
          nepHighlights: 'Mountaineering camp leadership at NIM Uttarkashi, Bachendri Pal summit of Mount Everest (Sagarmatha) on 23 May 1984.',
          summaryTextbook: 'Sangeeta Arora diary of Group 7 leader responsibilities, crossing icy rivers with sling and pitons, rappelling down rock cliffs, altitude sickness prevention, and Bachendri Pal historic Everest climb.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch9-q1',
              questionNo: 'Bachendri Pal Landmark',
              questionText: 'Who was the first Indian woman to reach the summit of Mount Everest and in which year?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Bachendri Pal climbed Mount Everest (8848 meters).',
                'Step 2: She stood on the peak on 23rd May 1984 at 1:07 PM.',
                'Step 3: She became the first Indian woman and fifth woman in the world to accomplish this.'
              ],
              finalAnswer: 'Bachendri Pal on 23 May 1984.',
              keyTakeaway: 'Perseverance, fitness, and team leadership overcome the world’s toughest physical challenges.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch10',
          chapterNumber: 10,
          title: 'Walls Tell Stories (बोलती इमारतें)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap110.pdf',
          nepHighlights: 'Golkonda Fort architecture, bastions (burj) for 360° defense, water lift mechanisms using pulleys and bullocks, bronze canons (Aurangzeb siege).',
          summaryTextbook: 'Sridhar, Shailja, and Kalyani explore Golkonda fort in Hyderabad, thick carved stone walls, whispering gallery acoustics, palaces of Qutb Shahi Sultans, and museum preservation of artifacts.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch10-q1',
              questionNo: 'Fort Bastions',
              questionText: 'Why were big holes made in the thick bastions (burj) of Golkonda Fort?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Soldiers looked through small openings to spot attacking enemies from a safe distance.',
                'Step 2: The circular bastions provided panoramic viewing angles without exposing soldiers to enemy arrows or cannonballs.'
              ],
              finalAnswer: 'To observe enemy movements from wide angles while remaining protected behind stone walls.',
              keyTakeaway: 'Ancient forts incorporated sophisticated military engineering and acoustic physics.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch11',
          chapterNumber: 11,
          title: 'Sunita in Space (सुनीता अंतरिक्ष में)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap111.pdf',
          nepHighlights: 'Living in zero gravity on the International Space Station (ISS), Earth gravitation pull, Neil Armstrong 1969 moon walk, Sunita Williams record-breaking spaceflights.',
          summaryTextbook: 'Sunita Williams experiences in space: floating food packets, hair standing straight all the time, seeing Earth globe borders disappear, day/night cycles in orbit, and satellite science.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch11-q1',
              questionNo: 'Zero Gravity Experience',
              questionText: 'Why did Sunita Williams hair keep standing upright while inside the spaceship?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In orbital spaceflight, the spacecraft and astronauts are in continuous free-fall, experiencing microgravity (weightlessness).',
                'Step 2: Without Earth downward gravity pulling hair down, strands float freely in all directions.'
              ],
              finalAnswer: 'Due to weightlessness (absence of effective gravity pulling it down).',
              keyTakeaway: 'Earth’s gravitational force holds atmospheres, oceans, and living beings securely to the surface.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch12',
          chapterNumber: 12,
          title: 'What if it Finishes...? (खत्म हो जाए तो...?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap112.pdf',
          nepHighlights: 'Non-renewable fossil fuels (petroleum, diesel, LPG, CNG), petroleum refining fractions, solar & wind renewable alternatives, air pollution impact.',
          summaryTextbook: 'Adalaj stepwell highway traffic jam, exhaust smoke health hazards, petroleum formation over millions of years deep beneath seabed, refinery distillation (kerosene, wax, plastics), and renewable energy solar cookers.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch12-q1',
              questionNo: 'Fossil Fuel Conservation',
              questionText: 'Why are petrol and diesel called non-renewable resources and how can we save fuel daily?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Petroleum takes millions of years of heat and pressure to form beneath Earth and cannot be regenerated quickly.',
                'Step 2: Daily ways to save: switch off vehicle engines at red traffic lights, use bicycles or public metro transport, and carpool.'
              ],
              finalAnswer: 'They take millions of years to form; save fuel by turning off idling engines and using public transit.',
              keyTakeaway: 'Transitioning to renewable clean energy prevents climate change and resource exhaustion.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch13',
          chapterNumber: 13,
          title: 'A Shelter so High! (बसेरा ऊँचाई पर)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap113.pdf',
          nepHighlights: 'Gaurav Jani motorcycle journey to Leh Ladakh cold desert, Changpa tribe nomadic life at Changthang, Pashmina goats, Rebo tents, and Srinagar houseboats (Donga/Shikara).',
          summaryTextbook: 'Traveling from Mumbai to Delhi, Manali, and Ladakh, Changpa rearing high-altitude Pashmina goats producing wool 6 times warmer than sweaters, Rebo woven yak hair tents, and Kashmir wooden ceiling carvings (Khatamband).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch13-q1',
              questionNo: 'Pashmina Shawl Facts',
              questionText: 'What makes genuine Kashmiri Pashmina shawls world famous for warmth?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Changthangi goats live at extreme cold altitudes (5000 meters, -40°C), growing an ultra-fine undercoat.',
                'Step 2: One goat hair is 6 times thinner than a human hair and cannot be woven on machines.',
                'Step 3: After 250 hours of hand weaving, one plain Pashmina shawl provides the warmth of 6 thick woolen sweaters.'
              ],
              finalAnswer: 'Ultra-fine goat underfur (6x thinner than human hair) handwoven into shawls 6 times warmer than standard sweaters.',
              keyTakeaway: 'Traditional crafts reflect harmony between indigenous communities and extreme environments.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch14',
          chapterNumber: 14,
          title: 'When the Earth Shook! (जब धरती काँपी)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap114.pdf',
          nepHighlights: 'Gujarat Bhuj Earthquake (26 January 2001), earthquake safety protocols (Drop, Cover, Hold On), disaster relief and resilient architecture.',
          summaryTextbook: 'Jasma recounts Republic Day earthquake in Kutch, collapse of stone houses, collective community rescue, rehabilitation by engineers and doctors, and building bamboo/mud quake-resistant homes.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch14-q1',
              questionNo: 'Earthquake Protocol',
              questionText: 'What emergency actions should you take if an earthquake strikes while you are indoors?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Drop under a sturdy table, desk, or bed.',
                'Step 2: Cover your head and neck with your arms.',
                'Step 3: Hold onto the furniture leg until shaking stops.',
                'Step 4: If in an open area, stay away from tall buildings, trees, and electrical poles.'
              ],
              finalAnswer: 'Drop, Cover, and Hold on under sturdy furniture; move to open fields if outdoors.',
              keyTakeaway: 'Disaster preparedness and structural engineering save thousands of lives during earthquakes.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch15',
          chapterNumber: 15,
          title: 'Blow Hot, Blow Cold (उसी से ठंडा उसी से गर्म)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap115.pdf',
          nepHighlights: 'Dr. Zakir Husain story of the Woodcutter and Mian Balishtiye, blowing breath to cool hot potatoes or warm chilled fingers, stethoscope heartbeats, musical wind instruments (Flute, Been, Dholak).',
          summaryTextbook: 'The tiny thumb-sized Mian Balishtiye observes woodcutter blowing air on cold hands to warm them and blowing on hot boiled potatoes to cool them down, understanding that breath temperature depends on comparison with object temperature.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch15-q1',
              questionNo: 'Blowing Temperature Paradox',
              questionText: 'How can our breath make something warmer as well as cooler?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Normal human exhaled breath temperature is around 37°C.',
                'Step 2: When our fingers are cold (15°C in winter), breath is warmer, so blowing warms the hands.',
                'Step 3: When freshly boiled potatoes are 80°C, breath is cooler, so blowing speeds up evaporation and cools the food.'
              ],
              finalAnswer: 'Because breath (~37°C) transfers heat to colder objects and absorbs heat/causes evaporation on hotter objects.',
              keyTakeaway: 'Heat always flows from a higher temperature region to a lower temperature region.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch16',
          chapterNumber: 16,
          title: 'Who will do this Work? (कौन करेगा यह काम?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap116.pdf',
          nepHighlights: 'Dignity of labour, social equality, eradication of untouchability, Mahatma Gandhi Sabarmati Ashram values, Dr. B.R. Ambedkar constitutional vision.',
          summaryTextbook: 'Investigates sanitation workers cleaning sewers and garbage, Narayan (Babaji) memories of Gandhi ji ashram where all guests cleaned their own toilets, and fighting caste discrimination to build equal societal respect.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch16-q1',
              questionNo: 'Dignity of Labour',
              questionText: 'Why did Mahatma Gandhi insist that every member of Sabarmati Ashram clean their own toilets?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: To destroy caste prejudices and untouchability.',
                'Step 2: To instill the core value that no work or cleaning task is inferior or degrading.',
                'Step 3: To teach self-reliance and deep respect for manual labour.'
              ],
              finalAnswer: 'To eliminate caste discrimination and establish that all honest labor has equal dignity.',
              keyTakeaway: 'Every profession contributing to society deserves equal human respect and dignified working conditions.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch17',
          chapterNumber: 17,
          title: 'Across the Wall (फांद ली दीवार)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap117.pdf',
          nepHighlights: 'Breaking gender stereotypes in sports, Afsana Mansuri and the Nagpada Basketball Association (NBA) Mumbai team, teamwork over individual ego.',
          summaryTextbook: 'Afsana, Zarin, Khushnoor, and Afreen overcome poverty and conservative family objections to become star basketball champions in Mumbai, guided by Coach Noor Khan.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch17-q1',
              questionNo: 'Teamwork Principle',
              questionText: 'What is the most important quality of a great sports team according to Coach Noor Khan?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Playing for the victory of the entire team rather than individual personal scores.',
                'Step 2: Supporting each other through mistakes without blaming teammates.',
                'Step 3: Maintaining trust, mutual respect, and unified focus.'
              ],
              finalAnswer: 'Unity and mutual trust, where every player contributes to the team spirit.',
              keyTakeaway: 'Gender and background cannot limit passion, hard work, and athletic excellence.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch18',
          chapterNumber: 18,
          title: 'No Place for Us? (जाएं तो जाएं कहाँ)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap118.pdf',
          nepHighlights: 'Displacement due to large dam construction (Khedi village, Tehri Dam), rural to urban migration challenges, losing ancestral culture.',
          summaryTextbook: 'Jatrya Bhai displacement from peaceful green Khedi village to Sinduri resettlement and Mumbai city slums, showing the high human cost of development projects and urban hardship.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch18-q1',
              questionNo: 'Dam Displacement',
              questionText: 'What major difficulties did Jatrya Bhai and his village face when displaced for dam construction?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Loss of ancestral farmland, forests, and community river bonding.',
                'Step 2: Resettlement land was rocky and barren with no hospital medicines or proper school teachers.',
                'Step 3: High cost of living in cities where every essential (water, electricity, medicine) costs money.'
              ],
              finalAnswer: 'Loss of livelihoods, broken community ties, inadequate resettlement facilities, and extreme financial stress.',
              keyTakeaway: 'Development projects must prioritize humane, fair rehabilitation for indigenous populations.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch19',
          chapterNumber: 19,
          title: "A Seed tells a Farmer's Story (किसानों की कहानी-बीज की ज़बानी)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap119.pdf',
          nepHighlights: 'Organic traditional farming vs modern chemical-intensive farming, hybrid seeds, neem leaves as natural pesticide, Undhiyu festival food in Gujarat.',
          summaryTextbook: 'A Bajra seed in Vanka village Gujarat recalls old farming with wooden ploughs, earthen pot Undhiyu cooking, transition to tractors, costly hybrid seeds, chemical fertilizers depleting soil earthworms, and debt traps.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch19-q1',
              questionNo: 'Traditional vs Chemical Farming',
              questionText: 'Why did traditional farmers preserve seeds in dried gourd (lauki) coated with mud and neem leaves?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Neem leaves act as natural insect repellents and antibacterial shields.',
                'Step 2: Mud-coated dried gourds keep seeds dry and shielded from humidity and pests.',
                'Step 3: This allowed farmers to sow self-preserved indigenous seeds year after year without buying expensive commercial seeds.'
              ],
              finalAnswer: 'To naturally protect indigenous seeds from moisture, insects, and fungal decay.',
              keyTakeaway: 'Sustainable agriculture preserves soil biodiversity and prevents farmer debt cycles.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch20',
          chapterNumber: 20,
          title: "Whose Forests? (किसके जंगल?)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap120.pdf',
          nepHighlights: 'Suryamani and Kuduk tribal language movement in Jharkhand, Torang cultural center, Forest Rights Act 2007, chipko spirit.',
          summaryTextbook: 'Girl Star Suryamani journey to become a graduate, opening Torang center in Ranchi to preserve Kuduk songs, herbs, and bamboo crafts, and educating Adivasis about the Forest Rights Act 2007 (right to live on forest land farmed for 25+ years).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch20-q1',
              questionNo: 'Forest Rights Act 2007',
              questionText: 'What key guarantee does the Right to Forest Act (2007) provide to tribal people (Adivasis)?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: People who have lived in the forest for at least 25 years have legal rights over the forest land and produce.',
                'Step 2: They cannot be forcibly evicted or removed from their ancestral forest homes.',
                'Step 3: Gram Sabhas are empowered to manage forest protection.'
              ],
              finalAnswer: 'Guarantees legal land rights and livelihood security to forest dwellers living there for 25+ years.',
              keyTakeaway: 'Tribal communities are the true protectors and custodians of biodiversity in forests.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch21',
          chapterNumber: 21,
          title: 'Like Father, Like Daughter (किसकी झलक? किसकी छाप?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap121.pdf',
          nepHighlights: 'Hereditary traits (eye color, dimples, curly hair, height), Gregor Mendel pea plant genetics, Polio as viral infection (not hereditary), identical twins.',
          summaryTextbook: 'Ashima sneezing like her father, Saroja and Suvasini identical twin sisters separated in infancy, Gregor Mendel discovering inherited traits in monastery pea plants, and Pulse Polio vaccination campaigns.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch21-q1',
              questionNo: 'Gregor Mendel Genetics',
              questionText: 'What did Gregor Mendel discover through his experiments on thousands of pea plants?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Pea plants possess traits that come in distinct pairs (e.g., rough/smooth seeds, yellow/green seeds, tall/short stems).',
                'Step 2: Traits are inherited from parent plants in specific dominant and recessive ratios without blending into intermediate mixtures.'
              ],
              finalAnswer: 'Discovered the fundamental laws of genetic inheritance through paired parent traits.',
              keyTakeaway: 'Physical traits are inherited from parents, whereas infections like Polio are caused by viruses and prevented by vaccines.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch22',
          chapterNumber: 22,
          title: 'On the Move Again (फिर चला काफ़िला)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap122.pdf',
          nepHighlights: 'Seasonal migrant sugarcane farming families (Mukkadam loan agent), interruption of children schooling, Right to Education.',
          summaryTextbook: 'Dhanu family leaving village after Dussehra for 6 months to work at sugarcane factories, living in tire-mat huts, weighing cane carts, Dhanu deep desire to study continuously and become an officer rather than a seasonal laborer.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch22-q1',
              questionNo: 'Migrant Children Education',
              questionText: 'Why is it crucial to provide flexible schooling for children of seasonal migrant workers?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Seasonal migration forces children to drop out of school for 6 months every year.',
                'Step 2: Without uninterrupted education, they remain trapped in low-wage cycles and debt traps.',
                'Step 3: Residential bridge schools and mobile learning vans ensure continuous Right to Education.'
              ],
              finalAnswer: 'To prevent school dropouts and ensure equal educational opportunities regardless of parental seasonal migration.',
              keyTakeaway: 'Continuous education is the most powerful tool to break generational poverty.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 3. English (Santoor / संतूर - New NCERT 2026-27)
    {
      id: 'c5-santoor',
      name: 'English (Santoor / संतूर - New NCERT)',
      iconName: 'BookOpen',
      color: '#04AA6D',
      description: 'New NCERT 2026-27 Textbook: Papa’s Spectacles, experiential storytelling, interactive crosswords, phonics, and solved exercises.',
      totalChapters: 10,
      chapters: [
        {
          id: 'c5-santoor-ch1',
          chapterNumber: 1,
          title: "Unit 1: Papa’s Spectacles (पापा के चश्मे)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa101_solved.pdf',
          nepHighlights: 'Observation skills, prepositions, ascending order logic, crossword antonyms, homophones vs sound contrasts.',
          summaryTextbook: 'Papa misplaces his only pair of spectacles and searches all around the house (pockets, under chair, window sill), only to discover with joy that they were sitting right on top of his head!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch1-q1',
              questionNo: 'Page 2 Let us Think Q1',
              questionText: 'What is Papa searching for?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Papa has lost his reading glasses.',
                'Step 2: It was his only pair and he is searching everywhere.'
              ],
              finalAnswer: 'Papa is searching for his lost spectacles (glasses).',
              keyTakeaway: 'Attentive reading of narrative poetry.'
            },
            {
              id: 'c5-san-ch1-q2',
              questionNo: 'Page 2 Let us Think Q2',
              questionText: 'What are the possible places where Papa can find it?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Look at the places mentioned in the poem.',
                'Step 2: Inside his pockets, under his chair, and near the window.'
              ],
              finalAnswer: 'Inside his pockets, under his chair, and near the window.',
              keyTakeaway: 'Scanning text for specific location clues.'
            },
            {
              id: 'c5-san-ch1-q3',
              questionNo: 'Page 2 Let us Think Q3',
              questionText: 'At last, where does Papa find his lost item?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The speaker tells Papa to stop searching.',
                'Step 2: The spectacles are found right on top of his head!'
              ],
              finalAnswer: 'Papa finds his spectacles right on top of his head!',
              keyTakeaway: 'Humorous resolution in observational poetry.'
            },
            {
              id: 'c5-san-ch1-q4',
              questionNo: 'Page 3 Ascending Order',
              questionText: 'Arrange Towel, Sari, Handkerchief, Bedsheet in ascending order of size/weight.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Identify smallest object: Handkerchief.',
                'Step 2: Next larger: Towel.',
                'Step 3: Next larger: Sari.',
                'Step 4: Largest/heaviest: Bedsheet.'
              ],
              finalAnswer: 'Handkerchief -> Towel -> Sari -> Bedsheet',
              keyTakeaway: 'Comparative analysis of everyday objects.'
            },
            {
              id: 'c5-san-ch1-q5',
              questionNo: 'Page 6 Prepositions Practice',
              questionText: 'Fill in the blanks: My father has a habit of keeping his spectacles [__] random places and looked [__] the house.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Keeping at random locations takes preposition "in".',
                'Step 2: Looking all over the premises takes preposition "around".'
              ],
              finalAnswer: 'in random places; looked around the house.',
              keyTakeaway: 'Contextual preposition application.'
            },
            {
              id: 'c5-san-ch1-q6',
              questionNo: 'Page 10 Riddle Just for Fun',
              questionText: 'I go to the market, I lovingly bring you home, I sit in front of you, And I cry, cry, cry. What is it?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A kitchen food item bought from the vegetable market.',
                'Step 2: When peeled and chopped, it makes your eyes tear up.'
              ],
              finalAnswer: 'An Onion (प्याज़)! 🧅',
              keyTakeaway: 'Figurative riddles connecting daily experiences.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch2',
          chapterNumber: 2,
          title: "Unit 2: Gone with the Scooter (स्कूटर के साथ उड़ गई गेंद)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa102_solved.pdf',
          nepHighlights: 'Honesty, sportsmanship, adverbs of time and frequency, phonics of long oo, and compound words.',
          summaryTextbook: 'Gopi finds a lost hockey ball in his garden. In the evening, while playing with friends, Jay hits a powerful drive that lands straight into the basket of a passing scooter!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch2-q1',
              questionNo: 'Page 5 Comprehension Q1',
              questionText: 'What was Gopi doing on the veranda?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Check the opening lines of the story.',
                'Step 2: Gopi was sitting in the veranda on a summer afternoon, reading a book.'
              ],
              finalAnswer: 'Gopi was sitting in the veranda, reading a book.',
              keyTakeaway: 'Reading and narrative recall.'
            },
            {
              id: 'c5-san-ch2-q2',
              questionNo: 'Page 5 Comprehension Q2',
              questionText: 'What sound did Gopi hear before he went to the garden?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Gopi heard something rustling past.',
                'Step 2: It landed with a thud in the garden.'
              ],
              finalAnswer: 'He heard something rustling past and falling with a thud in the garden.',
              keyTakeaway: 'Sensory and onomatopoeic vocabulary.'
            },
            {
              id: 'c5-san-ch2-q3',
              questionNo: 'Page 5 Comprehension Q6',
              questionText: 'Why did everyone laugh at the end of the story?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Jay hit the hockey ball with full force.',
                'Step 2: The ball flew past the playground gate and landed right in a passing scooter’s basket, which drove away.'
              ],
              finalAnswer: 'Jay hit the ball so hard that it landed in the basket of a passing scooter and drove away!',
              keyTakeaway: 'Humorous climax in sports fiction.'
            },
            {
              id: 'c5-san-ch2-q4',
              questionNo: 'Page 8 Adverbs Practice',
              questionText: 'Identify the adverb and classify whether it shows frequency or time: "Shama often writes in her diary."',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Locate the modifier word: "often".',
                'Step 2: "Often" answers the question "How many times?".'
              ],
              finalAnswer: 'Adverb: "often" (Adverb of Frequency).',
              keyTakeaway: 'Understanding adverbs of frequency and time.'
            },
            {
              id: 'c5-san-ch2-q5',
              questionNo: 'Page 11 Compound Words',
              questionText: 'Form 3 compound words with "sun" and 3 with "ball".',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Combine "sun" with rise, shine, flower, set.',
                'Step 2: Combine "ball" with foot, base, volley, basket.'
              ],
              finalAnswer: 'Sun: sunrise, sunshine, sunflower, sunset. Ball: football, baseball, volleyball, basketball.',
              keyTakeaway: 'Word compounding in English morphology.'
            },
            {
              id: 'c5-san-ch2-q6',
              questionNo: 'Page 16 Sports Biography',
              questionText: 'Who was Major Dhyan Chand and why is he called the "Wizard of Hockey"?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: He was India’s legendary hockey captain who won 3 Olympic Gold Medals (1928, 1932, 1936).',
                'Step 2: His magical dribbling and ball control amazed world sports fans.'
              ],
              finalAnswer: 'Major Dhyan Chand won 3 Olympic Golds for India and scored 400+ international goals. His magical ball control earned him the title "The Wizard".',
              keyTakeaway: 'Inspirational sports history of India.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch3',
          chapterNumber: 3,
          title: "Unit 2: The Rainbow (इंद्रधनुष)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa103_solved.pdf',
          nepHighlights: 'Appreciating nature, compound words, rhyming sound patterns, words functioning as both noun and verb, antonyms starting with S, VIBGYOR color science, and culinary botanical vocabulary in mother tongue.',
          summaryTextbook: 'Christina Rossetti’s timeless poem compares man-made marvels (boats on rivers, ships on seas, and stone bridges) with nature’s supreme wonders: clouds sailing across the sky and the magnificent rainbow that overtops trees to bridge earth with heaven.',
          exerciseSolutions: [
            {
              id: 'c5-san-ch3-q1',
              questionNo: 'Page 28 Comprehension Q1',
              questionText: 'Explain the meaning of the word ‘bow’ used in the poem.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read stanza 2 of the poem: "But the bow that bridges heaven, And overtops the trees".',
                'Step 2: Understand the poetic imagery of an arching band of colours across the sky.'
              ],
              finalAnswer: 'In the poem, "bow" refers to the rainbow that arches across the sky after rainfall.',
              keyTakeaway: 'Poetic imagery and metaphorical language.'
            },
            {
              id: 'c5-san-ch3-q2',
              questionNo: 'Page 28 Comprehension Q2',
              questionText: 'Which bridge does the poet like more and why?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The poet admires river bridges ("as pretty as you please").',
                'Step 2: However, the rainbow overtops the highest trees and builds a celestial road from earth to heaven, making it far prettier than human bridges.'
              ],
              finalAnswer: 'The poet likes the rainbow bridge more because it overtops the trees and builds a road from earth to sky, making it far prettier than man-made river bridges.',
              keyTakeaway: 'Comparative appreciation of natural versus artificial beauty.'
            },
            {
              id: 'c5-san-ch3-q3',
              questionNo: 'Page 28 Comprehension Q3',
              questionText: 'The word ‘these’ is used for different things in stanzas one and two. What are the things for which ‘these’ has been used in each stanza?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In stanza 1, "clouds that sail across the sky are prettier far than these" refers to boats and ships.',
                'Step 2: In stanza 2, "the bow that bridges heaven... is prettier far than these" refers to bridges on rivers.'
              ],
              finalAnswer: 'In stanza 1, "these" refers to boats and ships. In stanza 2, "these" refers to bridges built on rivers.',
              keyTakeaway: 'Pronoun reference and poetic cohesion.'
            },
            {
              id: 'c5-san-ch3-q4',
              questionNo: 'Page 28 True or False Q4',
              questionText: 'State whether the statements are True or False: (a) Ships sail on the river. (b) Boats sail on the sea. (c) Bridges are built on the river. (d) A road is built from earth to the sky.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Stanza 1 states: "Boats sail on the rivers, And ships sail on the seas". Therefore, (a) is False and (b) is False.',
                'Step 2: Stanza 2 confirms: "There are bridges on the rivers", making (c) True.',
                'Step 3: The rainbow metaphorically "builds a road from earth to sky", making (d) True.'
              ],
              finalAnswer: '(a) False [Ships sail on seas]. (b) False [Boats sail on rivers]. (c) True. (d) True [Poetic description of rainbow].',
              keyTakeaway: 'Close textual verification and poetic fact-checking.'
            },
            {
              id: 'c5-san-ch3-q5',
              questionNo: 'Page 29 Jumbled Words',
              questionText: 'Rearrange letters to form meaningful words from poem: 1. sial 2. vierr 3. sae 4. oduscl 5. risebgd 6. nhveea 7. eoptvros 8. owb 9. droa',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Unscramble letters by matching with vocabulary in the poem.',
                'Step 2: Identify each word: sail, river, sea, clouds, bridges, heaven, overtops, bow, road.'
              ],
              finalAnswer: '1. SAIL, 2. RIVER, 3. SEA, 4. CLOUDS, 5. BRIDGES, 6. HEAVEN, 7. OVERTOPS, 8. BOW, 9. ROAD.',
              keyTakeaway: 'Spelling mastery and anagram unscrambling.'
            },
            {
              id: 'c5-san-ch3-q6',
              questionNo: 'Page 30 Rhyming Words',
              questionText: 'Give five rhyming words for: Ship, Tree, Bow, Rain, Sun, Sea, Sail, And, Sky, Far.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Group words by identical vowel and terminal consonant phonemes.',
                'Step 2: Provide clean 5-word rhyming clusters for each starter word.'
              ],
              finalAnswer: 'Ship: trip, chip, dip, lip, flip. Tree: see, bee, free, knee, glee. Bow: low, row, glow, show, slow. Rain: train, pain, gain, chain, brain. Sun: run, fun, bun, gun, spun. Sea: tea, pea, flea, plea, key. Sail: tail, mail, pail, rail, nail. And: sand, hand, band, land, stand. Sky: high, fly, cry, try, spy. Far: car, star, jar, bar, tar.',
              keyTakeaway: 'Phonological awareness and rhyming vocabulary.'
            },
            {
              id: 'c5-san-ch3-q7',
              questionNo: 'Page 34 Compound Words',
              questionText: 'Complete the compound words table: tea+cup, wrist+?, arm+?, earth+?, ?+flower, table+cloth, note+?, ?+ring, tooth+?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A compound word is formed when two root words join together to create a single new word with distinct meaning.',
                'Step 2: Combine: tea+cup=teacup, wrist+watch=wristwatch, arm+chair=armchair, earth+worm=earthworm, sun+flower=sunflower, table+cloth=tablecloth, note+book=notebook, ear+ring=earring, tooth+brush=toothbrush.'
              ],
              finalAnswer: 'teacup, wristwatch, armchair, earthworm, sunflower, tablecloth, notebook, earring, toothbrush.',
              keyTakeaway: 'Morphological compounding in English lexicology.'
            },
            {
              id: 'c5-san-ch3-q8',
              questionNo: 'Page 35 Noun & Verb Dual Use',
              questionText: 'Use the following words in two sentences: once as a noun and once as a verb: cut, bat, picture, cry, filter, dance, plant, paint, fly, face.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Noun functions as a person, place, thing, or concept.',
                'Step 2: Verb functions as an action, state, or occurrence.'
              ],
              finalAnswer: '1. cut: [N] He got a deep cut. [V] Please cut the apple. 2. bat: [N] Bring the cricket bat. [V] Batsmen bat with patience. 3. picture: [N] She framed a picture. [V] I can picture the mountains. 4. cry: [N] We heard a loud cry. [V] Babies cry when hungry. 5. filter: [N] Change the water filter. [V] Trees filter pollutants. 6. dance: [N] Kathak is a classical dance. [V] Peacocks dance in the rain. 7. plant: [N] Water this tulsi plant. [V] Plant saplings on Earth Day. 8. paint: [N] Buy yellow paint. [V] Artists paint portraits. 9. fly: [N] A fly sat on the table. [V] Birds fly across the sky. 10. face: [N] Wash your face. [V] Face challenges bravely.',
              keyTakeaway: 'Syntactic flexibility of English homographs across parts of speech.'
            },
            {
              id: 'c5-san-ch3-q9',
              questionNo: 'Page 36 Opposites with \'S\'',
              questionText: 'Write opposites starting with letter \'S\': large, weak, fast, rough, dull, curved, finish, addition, complicated, mild, blunt.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Identify antonym for each word that strictly starts with the letter \'S\'.',
                'Step 2: Match with grade-appropriate vocabulary.'
              ],
              finalAnswer: 'large × small, weak × strong, fast × slow, rough × smooth, dull × shiny / sharp, curved × straight, finish × start, addition × subtraction, complicated × simple, mild × severe / strong, blunt × sharp.',
              keyTakeaway: 'Antonyms and alliterative vocabulary constraint.'
            },
            {
              id: 'c5-san-ch3-q10',
              questionNo: 'Page 39 Colour Combinations',
              questionText: 'Identify the resulting mixed colors: 1. red + blue 2. yellow + blue 3. red + yellow 4. red + white 5. red + black 6. red + yellow + blue.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Apply primary and secondary color theory.',
                'Step 2: Red + Blue = Purple, Yellow + Blue = Green, Red + Yellow = Orange, Red + White = Pink, Red + Black = Maroon, Red + Yellow + Blue = Brown.'
              ],
              finalAnswer: '1. purple (p u r p l e), 2. green (g r e e n), 3. orange (o r a n g e), 4. pink (p i n k), 5. maroon (m a r o o n), 6. brown (b r o w n).',
              keyTakeaway: 'Color mixing theory and spectral chromatic synthesis.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch4',
          chapterNumber: 4,
          title: "Unit 2: The Wise Parrot (बुद्धिमान तोता)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa104_solved.pdf',
          nepHighlights: 'Wisdom vs strength, freedom values, collective nouns, present perfect tense mastery, phonics distinctions ("ai" vs "oi"), and eco-friendly DIY bird feeder.',
          summaryTextbook: 'A wealthy merchant keeps a bright, talkative parrot in a cage of gold. When asked what gift it desires from abroad, the parrot asks to send greetings to its wild forest friends. A wild parrot receives the message and immediately falls to the ground playing dead. When the merchant recounts this sorrowful event, the caged pet understands the secret clue, feigns death, and flies off to freedom when placed on the windowsill!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch4-q1',
              questionNo: 'Page 45 Comprehension Q1',
              questionText: 'Why did the merchant keep the parrot in a cage of gold?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The merchant was wealthy and loved the parrot dearly.',
                'Step 2: The parrot had a sharp mind and entertained the merchant with delightful stories and songs.'
              ],
              finalAnswer: 'The merchant kept the parrot in a cage of gold because he was rich and treasured the bird dearly for its sharp mind and entertaining songs.',
              keyTakeaway: 'Understanding character motivations in experiential storytelling.'
            },
            {
              id: 'c5-san-ch4-q2',
              questionNo: 'Page 45 Comprehension Q2',
              questionText: 'What made the parrot a favourite pet of the merchant?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Recall the parrot\'s abilities described in paragraph 1 of the story.',
                'Step 2: It possessed a quick wit, sharp mind, and sang beautiful songs.'
              ],
              finalAnswer: 'The parrot was the favourite pet because it had a sharp mind and constantly entertained the merchant with fascinating stories and songs.',
              keyTakeaway: 'Reading comprehension and character traits.'
            },
            {
              id: 'c5-san-ch4-q3',
              questionNo: 'Page 45 Comprehension Q3',
              questionText: 'What message did the parrot ask the merchant to convey to its friends?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: When the merchant refused to release the bird, it sighed and made an alternate request.',
                'Step 2: It asked him to greet its jungle friends.'
              ],
              finalAnswer: 'The parrot requested: "When you see my friends in the jungle tell them that I send them greetings from my cage."',
              keyTakeaway: 'Textual recall and subtle narrative signaling.'
            },
            {
              id: 'c5-san-ch4-q4',
              questionNo: 'Page 45 Comprehension Q4',
              questionText: 'What happened after the merchant gave the message to the parrots?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The merchant spoke to a flight of parrots in the forest.',
                'Step 2: Immediately upon hearing the greeting, one parrot dropped down like a stone.'
              ],
              finalAnswer: 'As soon as the merchant finished speaking, one wild parrot dropped like a stone from the tree and fell to the ground, playing dead as a secret demonstration for escape.',
              keyTakeaway: 'Cause and effect relationships in plot development.'
            },
            {
              id: 'c5-san-ch4-q5',
              questionNo: 'Page 45 Comprehension Q5',
              questionText: 'How did the parrot escape from the cage?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The pet parrot heard what its friend did and feigned death on the cage floor.',
                'Step 2: The merchant placed the seemingly dead body on the windowsill.',
                'Step 3: The bird stirred, opened its wings, and flew away.'
              ],
              finalAnswer: 'The parrot feigned death inside its cage. When the merchant placed its body on the windowsill, the bird stirred, stretched its wings, and flew into the open sky.',
              keyTakeaway: 'Critical climax analysis and narrative problem solving.'
            },
            {
              id: 'c5-san-ch4-q6',
              questionNo: 'Page 46 Phrases Paragraph',
              questionText: 'Fill in the blanks with suitable phrases: stand upright, all over, look after, stepped out, went away, came across, about to.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read the context of the winter morning rescue story.',
                'Step 2: Insert phrases in logical sequential order.'
              ],
              finalAnswer: 'stepped out, all over, came across, about to, stand upright, look after, went away.',
              keyTakeaway: 'Phrasal vocabulary and context-dependent usage.'
            },
            {
              id: 'c5-san-ch4-q7',
              questionNo: 'Page 46 Collective Nouns',
              questionText: 'Complete the sentences with collective nouns: pack, bouquet, army, flock, bunch, flight, swarm.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Parrots -> flight (given)',
                'Step 2: Sheep -> flock, Wolves -> pack, Flowers -> bouquet, Bees -> swarm, Ants -> army, Keys -> bunch.'
              ],
              finalAnswer: '1. flight of parrots, 2. flock of sheep, 3. pack of wolves, 4. bouquet of flowers, 5. swarm of bees, 6. army of ants, 7. bunch of keys.',
              keyTakeaway: 'Collective nouns standard classification in English grammar.'
            },
            {
              id: 'c5-san-ch4-q8',
              questionNo: 'Page 47 & 48 Present Perfect Tense',
              questionText: 'Complete sentences using present perfect tense (Subject + has/have + V3): (a) I ... (visit) Delhi. (b) She ... (draw) pictures. (c) Mr. Joon ... (buy) a car. (d) I ... (complete) homework and my brother ... (revise). (e) They ... (write) letters.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Use "has" with singular subjects (she, Mr. Joon, brother). Use "have" with I and they.',
                'Step 2: Convert verbs to past participle (V3): visit->visited, draw->drawn, buy->bought, complete->completed, revise->revised, write->written.'
              ],
              finalAnswer: '(a) have visited, (b) has drawn, (c) has bought, (d) have completed / has revised, (e) have written.',
              keyTakeaway: 'Present perfect tense grammatical structure and past participle conjugation.'
            },
            {
              id: 'c5-san-ch4-q9',
              questionNo: 'Page 48 Bird Sanctuaries Listening',
              questionText: 'Answer questions based on the listening paragraph about bird sanctuaries in India.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Sanctuaries are built to protect endangered bird species.',
                'Step 2: India has over 70 bird sanctuaries.',
                'Step 3: Oldest: Vedanthangal (Tamil Nadu). Largest: Bharatpur (Rajasthan).'
              ],
              finalAnswer: '1. Purpose: To protect endangered birds and species. 2. Total in India: More than 70. 3. Oldest: Vedanthangal Bird Sanctuary (Tamil Nadu). 4. Largest: Bharatpur Bird Sanctuary (Rajasthan).',
              keyTakeaway: 'Listening comprehension and Indian geographical environmental awareness.'
            },
            {
              id: 'c5-san-ch4-q10',
              questionNo: 'Page 50 & 51 Bird Feeder Project',
              questionText: 'Identify bird feeder materials and outline steps to make an eco-friendly bird feeder.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Feeder 1 = Recycled Plastic Bottle & Wooden Spoons; Feeder 2 = Earthen Terracotta Saucer; Feeder 3 = Natural Coconut Shell.',
                'Step 2: Clean shell, pierce hanging holes, thread jute rope, fill with millets/grains, hang in safe spot.'
              ],
              finalAnswer: 'Materials: Coconut shell, earthen saucer, or plastic bottle with jute string. Steps: 1. Clean container, 2. Drill hanging holes, 3. Tie sturdy twine, 4. Fill with millets and water, 5. Hang outdoors safely.',
              keyTakeaway: 'Experiential environmental empathy and hands-on maker learning.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch6',
          chapterNumber: 6,
          title: "Unit 3: What a Tank! (पानी की टंकी)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa106.pdf',
          nepHighlights: 'Ancient Indian water systems (Ooranis, Panam Keni, Tankas), rural Punjab rooftop cement art tanks, English contractions, animal family gender terms, exclamatory sentences with emotions, suffix word-building (-er, -or, -at), and community water awareness poster.',
          summaryTextbook: 'Water conservation is a centuries-old practice in India—from Tamil Nadu\'s Ooranis, Kerala\'s Panam Keni wells, to Rajasthan\'s underground Tankas. In rural Punjab, everyday rooftop overhead tanks become works of art reflecting the owner\'s identity (tractors, bullock carts, roosters, airplanes, and footballs). The chapter also features contractions, animal families, exclamatory sentences, and a story on living a day without water.',
          exerciseSolutions: [
            {
              id: 'c5-san-ch6-q1',
              questionNo: 'Page 68 Comprehension Q1',
              questionText: 'What do we use a water tank for?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read page 66 of the chapter.',
                'Step 2: Water tanks store hundreds or thousands of litres of water for domestic use, drinking, bathing, and farming.'
              ],
              finalAnswer: 'We use a water tank to store hundreds and thousands of litres of water for daily household needs such as drinking, cooking, bathing, washing, and farming.',
              keyTakeaway: 'Water storage functions and everyday utilities.'
            },
            {
              id: 'c5-san-ch6-q2',
              questionNo: 'Page 68 Comprehension Q2',
              questionText: 'Where is Punjab located on the map of India?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Refer to page 67 paragraph 1.',
                'Step 2: Identify the geographical direction of Punjab.'
              ],
              finalAnswer: 'Punjab is a state located in the northwestern part of India.',
              keyTakeaway: 'Indian geography and regional identity.'
            },
            {
              id: 'c5-san-ch6-q3',
              questionNo: 'Page 68 Comprehension Q3',
              questionText: 'How are the water tanks in Punjab made?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Refer to page 67 column 2.',
                'Step 2: Frame is made of steel rods, then cement and concrete are used to give the final artistic shape.'
              ],
              finalAnswer: 'The frame of the water tank is first constructed using steel rods. Then cement and concrete are applied to give it the final unique artistic shape before installation on the rooftop.',
              keyTakeaway: 'Construction process and craftsmanship.'
            },
            {
              id: 'c5-san-ch6-q4',
              questionNo: 'Page 68 Comprehension Q4',
              questionText: 'How do the unique shapes of water tanks reflect the identity of the house owners?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Notice the correlation between occupation/hobby and tank shape on page 67.',
                'Step 2: Farmers have tractor or bullock cart tanks; sports lovers have football tanks.'
              ],
              finalAnswer: 'The shapes reflect the owner’s profession, passions, or interests. For example, a farmer may have a water tank shaped like a tractor, bullock cart, or rooster, while a sports lover might build one shaped like a giant football.',
              keyTakeaway: 'Creative self-expression through folk architecture.'
            },
            {
              id: 'c5-san-ch6-q5',
              questionNo: 'Page 69 Contractions Exercise',
              questionText: 'Write the contractions for: do not, is not, are not, cannot, could not, did not.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Combine the two words.',
                'Step 2: Replace the omitted letters with an apostrophe (\').'
              ],
              finalAnswer: '1. do not = don\'t, 2. is not = isn\'t, 3. are not = aren\'t, 4. cannot = can\'t, 5. could not = couldn\'t, 6. did not = didn\'t.',
              keyTakeaway: 'Punctuation and contractions grammar mastery.'
            },
            {
              id: 'c5-san-ch6-q6',
              questionNo: 'Page 71 Animal Families',
              questionText: 'Identify the young one and mother for: Bull, Lion, Tiger, Rooster, Stallion.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Recall gender and offspring terms in English.',
                'Step 2: Match male, young one, and female pairs.'
              ],
              finalAnswer: '1. Bull – Calf – Cow, 2. Lion – Lion cub – Lioness, 3. Tiger – Tiger cub – Tigress, 4. Rooster – Chick – Hen, 5. Stallion – Foal – Mare.',
              keyTakeaway: 'Biological classification and gender vocabulary.'
            },
            {
              id: 'c5-san-ch6-q7',
              questionNo: 'Page 75 Passage Comprehension Q1-5',
              questionText: 'Answer the 5 multiple choice questions on the story "A Day without Water".',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read Suma\'s morning experience without running water.',
                'Step 2: Select the correct textual options.'
              ],
              finalAnswer: '1. Why surprised? (b) There was no water in the tap. 2. How managed? (b) Bought bottles and waited for water tankers. 3. Suma\'s promise? (b) To never waste water again. 4. Conservation week activities? (b) Poster-making and planting trees. 5. Suggestion to parents? (c) To fix a rainwater harvesting system.',
              keyTakeaway: 'Narrative listening and environmental conservation awareness.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
