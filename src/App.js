import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filtre from './Filtre';
import NewMovieForm from './NewMovieForm';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState (
    [
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/fd/aa/d1/fdaad11b3d5ef645cb9548fb4ace27ad.jpg',
            title: 'Attack On Titan season 1',
            description: 'The story of Attack on Titan develops in a world where humans are an endangered species. For more than a hundred years, they have lived in fear of the Titans, a mysterious and violent race of human-like giants that wander outside the walls and that look for people to devour.',
            rating: '90%',
            trailer: 'asset/anime/Attack On Titan Season1 Trailer.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/b1/92/8d/b1928d21cab9558f1367415aba40cdcc.jpg',
            title: 'Attack On Titan Season 2',
            description: 'The season follows Eren Jaeger and his friends from the 104th Training Corps who have just begun to become full members of the Survey Corps. After fighting the Female Titan, Eren finds no time to rest as a horde of Titans is approaching Wall Rose and the battle for humanity continues.',
            rating: '92%',
            trailer: 'asset/anime/Attack On Titan Trailer_Season 2.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/d6/ac/4e/d6ac4ef7581a215ee340ded375fe529e.jpg',
            title: 'Attack On Titan Season 3',
            description: 'The season follows Eren and his fellow soldiers from the Survey Corps who are still fighting for their survival against the terrifying Titans. However, threats arise not only from the Titans beyond the walls, but from the humans within them as well.',
            rating: '95%',
            trailer: 'asset/anime/Attack On Titan - Season 3.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/44/19/1a/44191ae02e0cf2b99bd26705cfd392a0.jpg',
            title: 'Attack On Titan season 4',
            description: 'As Marley and the Paradis forces go to war in Marley and the Shiganshina District, both sides sustain a heavy death toll while Gabi and Falco are forced to confront their internal tensions about the supposed devils of Paradis.',
            rating: '98%',
            trailer: 'asset/anime/Attack On Titan | The Final Season.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/72/35/8b/72358b0a62a20cbf1b59b5b515429ef0.jpg',
            title: 'Bubble',
            description: 'In an alternate world, bubbles raining down upon the world have broken the laws of gravity. For the Japanese, Tokyo has been completely cut off from the outside world, and all that remains are groups of young people competing in parkour team battles across the skyline of Tokyo.',
            rating: '93%',
            trailer: 'asset/anime/Bubble_Official Teaser_Netflix.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/564x/1a/68/3a/1a683a797c5793d0826f7741a6349850.jpg',
            title: 'Flavors Of Youth',
            description: 'aking place in Hunan Province and Beijing, Xiao Ming reminisces about his memories with his grandmother through his love for San Xian noodles. When Xiao Ming was young, he and his grandmother ate San Xian noodles from a local noodle shop that to him showed care and effort for their food. However, the shop closed down with speculation that the owners were pushed out due to jealousy or a client wanted them back in Beijing. Xiao Ming then went to another noodle shop in his town, and although the shop buys pre-made San Xian noodles, the noodle soup had many toppings much to Xiao Ming s satisfaction. Later, the husband of the owner of that noodle shop wanted the noodle shop to become a fishing shop. However, after bad business and the couple s son getting hospitalized in a knife fight with some students at his school, the noodle shop reopened with the husband and son of the owner working as well. ',
            rating: '73%',
            trailer: 'asset/anime/Flavors Of Youth_Official Trailer [HD]_Netflix.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/474x/8b/e5/41/8be541ce4692e603031cd402926821ee.jpg',
            title: 'My Hero Academia Season 7',
            description: 'Season 7 will feature the Star and Stripe arc and the Final War arc, with the fate of Japan and the world at stake. New character Star and Stripe will be introduced, an incredibly powerful hero who may aid in defeating Shigaraki and All for One.',
            rating: '98%',
            trailer: 'asset/anime/My Hero Academia Season 7 - Official Trailer.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/474x/d2/98/09/d298095c2aae9fb5c413cd8446e9de84.jpg',
            title: 'Onimusha',
            description: 'Musashi Miyamoto, an outstanding swordsman from the Edo period, must use his talents to defeat hordes of demons. He can count on his demonic, soul-devouring sword and a brotherhood of samurai to help him in his quest.',
            rating: '73%',
            trailer: 'asset/anime/Onimusha.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/474x/c7/bf/24/c7bf24ff4baf9644e3e8aacabf497d4c.jpg',
            title: 'PLUTO',
            description: 'When the world is seven most advanced robots and their human allies are murdered one by one, Inspector Gesicht soon discovers that he is also in danger.',
            rating: '83%',
            trailer: 'asset/anime/PLUTO.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/0f/22/0f/0f220f8cd8c8613fafbdf6ee7582c835.jpg',
            title: 'Solo leveling',
            description: 'When strange portals appeared all over the world, humanity had to find a solution to avoid ending up massacred by the monsters that emerged from them. At the same time, some people have developed abilities to hunt them. These intrepid fighters do not hesitate to rush into the heart of the dungeons to fight the creatures they shelter. Jin-Woo Sung , an E-rank hunter considered the weakest of all, goes with a team to a D-rank dungeon. However, as they find themselves trapped in a room with monsters that are not of the all from the dungeon level, Jin-Woo succumbs. When he thought he was dead, he wakes up in the hospital with a strange ability: a virtual interface that allows him to become stronger and stronger. Will he manage to become the most powerful Hunter thanks to this strange ability?',
            rating: '87%',
            trailer: 'asset/anime/Solo Leveling.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/b3/80/3b/b3803b35ff09af778175b1f8e4bb70c6.jpg',
            title: 'Suzume',
            description: 'In a small town in Kyushu, a 17-year-old girl, Suzume, meets a man who says he is traveling to look for a door. Deciding to follow him into the mountains, she discovers a single dilapidated door in the middle of the ruins. Suzume turns the handle, and other doors open across Japan, letting in all the disasters they contain. The man is clear: every open door must be closed. Suzume begins a journey to close them all.',
            rating: '96%',
            trailer: 'asset/anime/Suzume Trailer.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/d4/4c/f0/d44cf0083f21b9bbb48bc45de5c84ae4.jpg',
            title: 'Tekken Bloodline',
            description: 'After losing his home to a powerful enemy, a hot-tempered fighter trains under his zealous grandfather while awaiting his chance for revenge.',
            rating: '72%',
            trailer: 'asset/anime/Tekken Bloodline.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/65/43/50/654350542481782f221577eaca017994.jpg',
            title: 'The boy and the heron',
            description: 'A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning.',
            rating: '78%',
            trailer: 'asset/anime/The boy and the heron.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/3d/4a/55/3d4a55feb500167970aeb486f7df08e7.jpg',
            title: 'The last airbender - Legend of Korra',
            description: 'Air follows seventeen-year-old Korra from the Southern Water Tribe, and the successor of Avatar Aang from the preceding series Avatar: The Last Airbender, as she travels to the metropolis of Republic City to learn airbending and faces an anti-bender revolutionary group, the Equalists, led by the masked Amon.',
            rating: '85%',
            trailer: 'asset/anime/The Last Airbender - Legend of Korra.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Anime',
            posterURL: 'https://i.pinimg.com/236x/df/2a/d8/df2ad8ee79bfbc180807bb00e91d16eb.jpg',
            title: 'The lovers',
            description: 'When faced with a decision to leave her dreams of going abroad after her father died, Sara finds herself taking on the role of head chef and soon inheriting Lidagat, their family restaurant. The story unfolds when the governor holds a private banquet, challenging Sara’s capabilities to bring Lidagat to its former glory. The banquet intended to have Sirena, an estranged mermaid, as the centerpiece, and Sara finds herself in a dangerous affair with the creature. ',
            rating: '99%',
            trailer: 'asset/anime/The lovers.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/736x/53/ef/0c/53ef0c76964ae00e3f3e178c946a3276.jpg',
            title: 'About my father',
            description: 'When Sebastian tells his old-school Italian immigrant father Salvo that he is going to propose to his all-American girlfriend, Salvo insists on crashing a weekend with her tony parents.',
            rating: '42%',
            trailer: 'asset/comedy/About my father.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/cb/05/b6/cb05b6bb088f59fe47b56996cdbbf2c8.jpg',
            title: 'Die Hart 2',
            description: 'Little by little, Kevin Hart will make a name for himself in the industry and achieve his dream. At the dawn of season 2 , the character has progressed well and he has become a renowned actor. To become an absolute legend, he decides to embark on an innovative, avant-garde, punchy feature film.',
            rating: '31%',
            trailer: 'asset/comedy/Die hart 2.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/55/83/25/558325d5d0634984f181b244a0c4622c.jpg',
            title: 'Expelled',
            description: 'Felix is a legendary prankster who gets expelled from his high school and, with the help of his friends, will stop at nothing to hide it from his parents.',
            rating: '54%',
            trailer: 'asset/comedy/Expelled.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/cb/41/a6/cb41a67c712cabe30d8ae08aa34f3921.jpg',
            title: 'Half brother',
            description: 'Renato, a senior Mexican air force executive, is shocked to discover that he has an American half-brother he never knew existed: Asher. The two very different half-brothers are forced to travel together to retrace the path their seriously ill father took as an immigrant from Mexico to the United States.',
            rating: '54%',
            trailer: 'asset/comedy/Half brothers.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/fc/ff/b5/fcffb5821b9b760b1e93af73588c73c3.jpg',
            title: 'Home alone 3',
            description: 'Alex Pruitt, 8 years old, accidentally inherited a much-desired toy. This object contains a microprocessor of the highest importance, which is a true summary of the most cutting-edge technologies. However, four spies armed to the teeth set out to recover the fabulous invention. Indeed, during an unfortunate baggage exchange at the airport, Ms. Hess recovered this toy, which she then gave to her young neighbor, Alex.',
            rating: '32%',
            trailer: 'asset/comedy/Home Alone 3.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/52/c8/4c/52c84cf16f6b60c67ccbd37c415e8f83.jpg',
            title: 'Lift',
            description: 'A master thief and her ex-boyfriend, who works for the FBI, team up to steal $100 million in gold bars transported on a 777 flight from London to Zurich.',
            rating: '65%',
            trailer: 'asset/comedy/Lift.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/95/6c/75/956c75ad673e04f37a14f9ee49b49744.jpg',
            title: 'Me time',
            description: 'A stay-at-home dad finds himself with time to himself for the first time in years. While his wife and children are away, he tries to reconnect with his former best friend for a weekend that will change his life.',
            rating: '59%',
            trailer: 'asset/comedy/Me time.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/48/f9/ab/48f9ab79238a8b94fff5b907f6c93158.jpg',
            title: 'Platonic',
            description: 'Anthology series focusing on one couple per season and exploring platonic friendship. Former best friends in their youth meet again as adults. They try to remember and repair what led to their breakup.',
            rating: '69%',
            trailer: 'asset/comedy/Platonic.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/00/b1/3c/00b13c2041c6a9be5a586fcae0aeece5.jpg',
            title: 'Playing it Cool',
            description: 'A young man who no longer believes in love meets a woman at a charity dinner. He will try to seduce her.',
            rating: '48%',
            trailer: 'asset/comedy/Playing it Cool.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/73/cc/55/73cc5550e36a53e32b5c67714a3a5752.jpg',
            title: 'Quiz Lady',
            description: 'Anne and her estranged sister Jenny must work together to help cover their mother is gambling debts. When Anne s beloved dog is kidnapped, they embark on a wild journey across the country to recover the money.',
            rating: '68%',
            trailer: 'asset/comedy/Quiz Lady.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/2a/62/a4/2a62a4776e2191324fe47afe5a97f824.jpg',
            title: 'Senior years',
            description: 'A cheerleader wakes up after a 20-year coma and decides to return to high school to try to regain her status and try to win the prom queen crown that eluded her.',
            rating: '72%',
            trailer: 'asset/comedy/Senior years.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://thumb.canalplus.pro/http/unsafe/1824x1026/filters:quality(80)/canalplus-cdn.canal-plus.io/p1/unit/19965876/canal-ouah/STD169/myCANAL_16x9_MEA_1920x1080',
            title: 'Supercool',
            description: 'The two best friends, Neil and Gilbert, are the bully of their classmates. They dream of leading the life of Neil s neighbor, Jimmy the legend, a young man who has confidence in himself. One day, at 11:11 a.m., Neil makes a wish in hopes of finally attracting the attention of the most beautiful girl in school, but nothing is going to happen as in his wish.',
            rating: '45%',
            trailer: 'asset/comedy/Supercool.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/fd/79/43/fd79433098f2a914464f95bdc08657e7.jpg',
            title: 'Taxi 5',
            description: 'Sylvain Marot, Parisian super cop and exceptional pilot, is transferred against his will to the Marseille Municipal Police. The ex-commissioner Gibert, who has become mayor of the city and is at the lowest point in the polls, will then entrust him with the mission of stopping the dreaded Gang of Italians, who are raiding jewelry stores with the help of powerful Ferraris. To achieve this, Marot will have no other choice than to collaborate with the great-nephew of the famous Daniel, Eddy Maklouf, the worst VTC driver in Marseille.',
            rating: '74%',
            trailer: 'asset/comedy/Taxi 5.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/4d/8a/cc/4d8acc7bb3ada2d6fda02afade10e6c4.jpg',
            title: 'The family plan',
            description: 'Dan Morgan is a man of many talents: a devoted husband, a famous car salesman, but also a former hitman. When his past catches up with him, he is forced to take his unsuspecting family on an unusual journey.',
            rating: '80%',
            trailer: 'asset/comedy/The family plan.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/564x/a3/0c/28/a30c287a3506dc979d78989e9364d954.jpg',
            title: 'The Hangover',
            description: 'Phil, Stu, Alan and Doug take an exotic trip to Thailand for Stu s wedding. After the unforgettable bachelor party in Las Vegas, Stu doesn t want to leave anything to chance and opts for a light, safe brunch before the ceremony. But things don t always go as planned. What happened in Las Vegas is imaginable in Las Vegas, but what is happening in Bangkok is beyond imagination...',
            rating: '87%',
            trailer: 'asset/comedy/The Hangover.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/474x/fc/29/8c/fc298c66cedbe54d3a9436382cdfe9a5.jpg',
            title: 'The underdoggs',
            description: 'After run-ins with the law, Jaycen Jenning (2J s), a former NFL star, agrees to coach a youth football team instead of going to prison.',
            rating: '61%',
            trailer: 'asset/comedy/The underdoggs.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Comedy',
            posterURL: 'https://i.pinimg.com/236x/26/00/92/260092d18679500db871d0fc22805227.jpg',
            title: 'You People',
            description: 'A young couple and their families must deal with modern love against a backdrop of cultural shocks, societal expectations and generational differences.',
            rating: '66%',
            trailer: 'asset/comedy/You People.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/c9/d0/7a/c9d07a419210885c6f8fa41142b3e42d.jpg',
            title: 'American Born Chinese',
            description: 'Jin Wang is an average teenager balancing high school and home life. When he meets a new foreign student on the first day of school, even more worlds collide as Jin is unwittingly entangled in a battle with Chinese mythological gods.',
            rating: '70%',
            trailer: 'asset/disney/'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/e3/1e/d6/e31ed6bc88ab2eba1272d08505865260.jpg',
            title: 'Cruella',
            description: 'London, 1970s. Estella is determined to make a name for herself in the fashion world. She befriends two young scoundrels who appreciate her skills as a con artist and leads a criminal existence with them on the streets of London. One day, his creations were noticed by Baroness von Hellman, a major fashion figure. But their relationship will lead Estella to let her dark side invade her, to the point of giving birth to the merciless Cruella.',
            rating: '86%',
            trailer: 'asset/disney/Cruella.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/11/2f/f1/112ff18b0b58faedd6670ce2fc39e597.jpg',
            title: 'Disenchanted',
            description: 'Giselle, fifteen years later, moves with her family to a new city. The more time passes, the more she feels like her life has lost its magic. So she casts a spell to transform her daily life into a fairy tale. However, her actions could backfire and endanger those she loves.',
            rating: '66%',
            trailer: 'asset/disney/Disenchanted.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/43/81/29/438129a06f5c67c900a607b54e3dafeb.jpg',
            title: 'Elemental',
            description: 'In the city of Element City, fire, water, earth and air live in perfect harmony. It is here that Flam, an intrepid and lively young woman with a strong character, resides, and Flack, a sentimental and amusing boy, rather a follower at heart. Their friendship challenges Flam s beliefs about the world they live in.',
            rating: '85%',
            trailer: 'asset/disney/Elmental.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/84/3b/d7/843bd796388dc833dd2c27129f343ff8.jpg',
            title: 'Elio',
            description: 'Elio, a little boy with a vivid imagination, finds himself inadvertently teleported to the Communiverse, an interplanetary organization made up of representatives from very distant galaxies.',
            rating: '81%',
            trailer: 'asset/disney/Elio.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/736x/a8/ea/5b/a8ea5bc912d770ab0a4fd9bd912d2261.jpg',
            title: 'Encanto',
            description: 'The Madrigals are an extraordinary family who live hidden in the mountains of Colombia, in a place called Encanto. The magic of the Encanto blessed each child in the family with a unique gift; every child except Mirabel. However, she may soon be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.',
            rating: '82%',
            trailer: 'asset/disney/Encanto.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/7f/88/8f/7f888f1a8f4587e0e92156ff8dca1307.jpg',
            title: 'Haunted Mansion',
            description: 'A single mom named Gabbie hires a tour guide, a psychic, a priest and a historian to help exorcise her newly bought mansion after discovering it is inhabited by ghosts.',
            rating: '76%',
            trailer: 'asset/disney/Haunted Mansion.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/5c/c1/42/5cc142c19495f4373e8b02099267812c.jpg',
            title: 'Inside out 2',
            description: 'Freshly graduated, Riley is now a teenager, which is not without triggering a major upheaval within the headquarters which must face something unexpected: the arrival of new emotions.',
            rating: '91%',
            trailer: 'asset/disney/Inside Out 2.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/be/ae/78/beae78cccf9e96c6c04df723e95dff7c.jpg',
            title: 'LUCA',
            description: 'Even though his mother has strictly forbidden him, Luca, a young sea monster, ventures out of the water. He then discovers that once dry, his scales disappear, allowing him to take on a human appearance.',
            rating: '78%',
            trailer: 'asset/disney/LUCA.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/3e/40/02/3e400229ad21d112d6a90ef46eb5014e.jpg',
            title: 'Moana : The Movie',
            description: 'The adventure of a teenager full of character who goes to sea to prove that she is an explorer and continue the quest for her ancestors. During her journey, Moana encounters the once powerful demigod, Maui. Together, they cross the ocean, on a journey full of twists and turns and humor. They will travel through breathtaking worlds and encounter enormous sea creatures. Moana will discover the thing she has always been looking for: who she really is.',
            rating: '85%',
            trailer: 'asset/disney/MOANA.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/07/2f/76/072f765738a1a7b9322d64076e92cdf3.jpg',
            title: 'Mulan : The Movie',
            description: 'Following the publication of a decree by the Emperor of China, one man from each family in the country must join the imperial army to fight invaders. Hua Mulan, eldest daughter of a venerable warrior, decides to take his place in battle. As she poses as a soldier named Hua Jun, she is tested at every step of the learning process.',
            rating: '64%',
            trailer: 'asset/disney/Mulan.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/c9/4a/16/c94a160c320416236d2f4cd701046762.jpg',
            title: 'Percy Jackson and The Olympians',
            description: 'A 12-year-old demigod, Percy Jackson, has just accepted his new powers when the powerful Zeus accuses him of stealing his Lightning Bolt. Percy will have to search for him throughout the United States in order to restore order in Olympus.',
            rating: '82%',
            trailer: 'asset/disney/Percy Jackson and The Olympians.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/39/1f/28/391f28293f07306197c7988d71894b70.jpg',
            title: 'Tangled',
            description: 'When Flynn Rider, the kingdom s most wanted bandit, takes refuge in a mysterious tower, he finds himself taken hostage by Rapunzel, a beautiful and reckless young girl with impressive 20 meter long hair, kept prisoner by Mother Gothel . Flynn s amazing jailer is looking for a way to get out of this tower where she has been locked up for years. So she comes to an arrangement with the seductive bandit.',
            rating: '86%',
            trailer: 'asset/disney/Tangled.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/29/48/c6/2948c6b3e59b7d64df4692b7a3e20e20.jpg',
            title: 'Mufasa :The Lion King',
            description: 'Deep in the African savannah, all the animals celebrate the birth of Simba, their future king. The months pass. Simba idolizes his father, King Mufasa, who takes it to heart to make him understand the stakes of his royal destiny. But not everyone seems to agree.',
            rating: '83%',
            trailer: 'asset/disney/The Lion King 2.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/8e/fa/8a/8efa8a7ed972b926eb9ce7e5e1b1d6b0.jpg',
            title: 'The Little Mermaid',
            description: 'Under the sea, Ariel, a young mermaid and daughter of King Triton, dreams of becoming a human. One evening after an argument with her father, she fled far from the palace. It is then that a huge storm breaks out at sea and it is there that she saves from drowning: the young and handsome Prince Eric, with whom she falls madly in love. In order to find the person she loves, the ocean witch, Ursula, offers to give her her voice in exchange for human legs.',
            rating: '54%',
            trailer: 'asset/disney/The Little Mermaid.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/5a/cc/19/5acc19a754b35e9fae63cfc671334465.jpg',
            title: 'The Shepherd',
            description: 'On Christmas Eve, a young RAF pilot returning home finds himself in danger when his radio and battery fail over the North Sea with him almost out of fuel. A good Samaritan guides him safely.',
            rating: '65%',
            trailer: 'asset/disney/The Shepherd.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/97/cd/34/97cd34d118174888850ea842be4ecc43.jpg',
            title: 'Willow',
            description: 'An unlikely group of heroes embark on a dangerous quest to places far beyond their home, where they must confront their inner demons and band together to save their world.',
            rating: '70%',
            trailer: 'asset/disney/Willow.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Disney',
            posterURL: 'https://i.pinimg.com/236x/fa/94/09/fa94099cb437d74c369e0708d477251b.jpg',
            title: 'Wish',
            description: 'Asha lives in Rosas, a kingdom where literally every wish can come true. In a moment of despair, she sends a wish to the stars to which a cosmic force will respond: a small ball of infinite energy named Star.',
            rating: '58%',
            trailer: 'asset/disney/Wish.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/7f/8c/6e/7f8c6e81d9c6f928e3b1f0d15b44c188.jpg',
            title: 'All of Us Are Dead',
            description: 'A high school located in the small town of Hyosan becomes the epicenter of an epidemic linked to a zombie virus. Trapped, the students must fight to escape and avoid being contaminated in turn.',
            rating: '96%',
            trailer: 'asset/horror/All of Us Are Dead.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/564x/47/dc/fe/47dcfea2f69f4f68fcf48fe1abf1f7b4.jpg',
            title: 'Come Play',
            description: 'Oliver, a young boy who feels different from others, finds his comfort and refuge in his cell phone and his tablet, which he keeps close at hand.',
            rating: '61%',
            trailer: 'asset/horror/Come Play.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/9f/86/b9/9f86b921915b2caed0137df46a471165.jpg',
            title: 'Don t Breathe',
            description: 'To escape her mother s violence and save her younger sister from an existence without a future, Rocky is ready to do anything. With her friends Alex and Money, she has already committed a few burglaries, but nothing that brings enough money to finally leave Detroit. When the trio hears about a blind man who lives alone and keeps a small fortune at home, they decide to plan what they think will be their final coup. However, their victim will turn out to be more dangerous than expected.',
            rating: '82%',
            trailer: 'asset/horror/Do not Breathe.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/99/44/6e/99446e4f76c26f773f1a3b89ecde7b38.jpg',
            title: 'Evil Dead Rise',
            description: 'The reunion of two sisters is interrupted by the appearance of flesh-possessing demons, plunging them into a primal battle for survival and confronting them with the most nightmarish version of the family.',
            rating: '61%',
            trailer: 'asset/horror/Evil Dead Rise.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/3d/c9/31/3dc931c61a8c74db538259067e5dbb90.jpg',
            title: 'His House',
            description: 'A couple of South Sudanese refugees lose their daughter in a storm at sea while fleeing the civil war. Arriving in London, they struggle to adapt to their new life. However, the place where they are housed, while awaiting their regularization, seems to be inhabited by a mysterious force.',
            rating: '71%',
            trailer: 'asset/horror/His House.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/0a/37/c1/0a37c14622e169a3eb0b4c1fdb13dee6.jpg',
            title: 'It - Chapter 1',
            description: 'In Derry, Maine, seven kids having trouble fitting in came together to form the Losers Club. Rejected by their classmates, they are the favorite targets of the school s tough guys. They also have in common that they experienced their greatest terror in the face of a terrible predatory shapeshifter that they call It.',
            rating: '81%',
            trailer: 'asset/horror/IT - Chapter 1.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/736x/2a/f2/07/2af207ed4477a54ace90ed2faa6cf13f.jpg',
            title: 'Khanzab',
            description: 'After her father was beheaded by ninjas in Banyuwangi in 1998, a traumatized Rahayu struggled to concentrate on her prayers due to interference from the Khanzab.',
            rating: '68%',
            trailer: 'asset/horror/Khanzab.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/b1/4f/e9/b14fe99502e208dfa2bddd71d17d371d.jpg',
            title: 'M3GAN',
            description: 'M3GAN is a technological miracle, a cyber doll whose artificial intelligence is programmed to be the ideal companion for children and the surest ally for parents. When its creator Gemma, a brilliant roboticist for a toy company, suddenly becomes responsible for her eight-year-old niece, Cady, whose parents have suddenly died, she decides to link the M3GAN prototype still in development to the little girl.',
            rating: '68%',
            trailer: 'asset/horror/Megan.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/736x/26/67/f9/2667f9859e9bac9984c0cfbc0b36188a.jpg',
            title: 'Munkar',
            description: 'An oddity that caused unrest at an Islamic boarding school occurred since one of the female students returned',
            rating: ' ',
            trailer: 'asset/horror/Munkar.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/736x/41/c2/e4/41c2e4453252ab0f6a6dfff0644c5d18.jpg',
            title: 'Night Swim',
            description: 'Forced into early retirement due to a degenerative disease, former baseball player Ray Waller moves into a new home with his wife and two children. He hopes the backyard pool will be fun for the kids and provide physical therapy.',
            rating: '67%',
            trailer: 'asset/horror/Night Swim.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/16/f6/6c/16f66ca544b9d15358a9b023a6fad071.jpg',
            title: 'Rings',
            description: 'A young woman becomes concerned when her boyfriend becomes interested in an obscure subculture surrounding a mysterious videotape claimed to kill the viewer seven days after viewing it.',
            rating: '71%',
            trailer: 'asset/horror/Rings.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/474x/47/a7/70/47a7703b4a52e8f37788374b5395a432.jpg',
            title: 'Saw X',
            description: 'ohn Kramer (Tobin Bell) is back. The most chilling installment of the SAW franchise yet explores the untold chapter of Jigsaw’s most personal game. Set between the events of SAW I and II, a sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, John returns to his work, turning the tables on the con artists in his signature visceral way through a series of ingenious and terrifying traps.',
            rating: '85%',
            trailer: 'asset/horror/Saw X.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/736x/43/e9/d5/43e9d570a09a39ff1c8217487bbb039c.jpg',
            title: 'Sijjin',
            description: 'Irma falls in love with Galang, her cousin who is married and has children. However, Irma is still obsessed and wants to be the only woman in Galang s life. Irma comes to the shaman to send black magic to Galang s wife. Since then the terror began. Mystical disturbances, possession and death occurred in Galan s house. However, what Irma did not expect was that the threat also targeted her own life.',
            rating: '71%',
            trailer: 'asset/horror/Sijjin.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/78/8f/d7/788fd7e3e0a241f04bfb5c43c7c80ae3.jpg',
            title: 'Sister Death',
            description: 'In post-war Spain, Narcisa, a young novice endowed with supernatural powers, arrives in a former convent converted into a school for girls to become a teacher. As the days pass, the strange events and increasingly disturbing situations that torment her push her to unravel the terrible tangle of secrets that surround the convent and haunt its occupants.',
            rating: '78%',
            trailer: 'asset/horror/Sister Death.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/85/b0/8f/85b08ffd6e02093a28eedac6ca4f59d8.jpg',
            title: 'Smile',
            description: 'After witnessing a strange and traumatic incident involving a patient, Dr. Rose Cotter begins to experience frightening events that she cannot explain.',
            rating: '54%',
            trailer: 'asset/horror/Smile.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/c5/df/e6/c5dfe6fe590f93a0d97a4b5c598cf906.jpg',
            title: 'Talk To Me',
            description: 'Mias mother died in mysterious circumstances a few months ago, and the young woman still wonders about the cause of her death. With a group of friends, she wants to have fun with a board game. They can summon spirits and communicate with them using a plaster hand. During a session, one of them, drunk on thrills, goes too far and opens the door to a world that Mia s mother also reports on.',
            rating: '69%',
            trailer: 'asset/horror/Talk To Me.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/564x/c0/f5/bc/c0f5bce64991436213ebcb86dae8a81b.jpg',
            title: 'Thanksgiving',
            description: 'A year after Black Friday turned into chaos, a mysterious killer takes inspiration from the traditional Thanksgiving holiday and terrorizes the residents of Plymouth, Massachusetts, the birthplace of the famous holiday.',
            rating: '74%',
            trailer: 'asset/horror/Thanksgiving.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/564x/2a/47/6e/2a476ee4eb42461fffdd389ce3bbfb46.jpg',
            title: 'The exorcist',
            description: 'Chris McNeill, a television actress, is concerned about hearing strange noises more and more frequently in her daughter, Regan s, bedroom. She complains of having difficulty sleeping because of the spasmodic movements that shake her bed.',
            rating: '79%',
            trailer: 'asset/horror/The Exorcist.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/564x/b6/e2/54/b6e254f559972bbd284f993152cd1513.jpg',
            title: 'The First Omen',
            description: 'A young American woman is sent to Rome to begin a life of service to the Church. She finds herself confronted with darkness that leads her to question her faith and uncover a terrifying conspiracy that hopes to give rise to evil incarnate.',
            rating: ' ',
            trailer: 'asset/horror/The First Omen.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/474x/b5/b0/02/b5b002bdefb9ffc19d0f63b3a9585ad9.jpg',
            title: 'The nun 2',
            description: 'In France, in 1956, a priest was murdered in a boarding school. After the priest s death, things happen that can no longer be explained rationally. Sister Irene is once again confronted with demonic power.',
            rating: '66%',
            trailer: 'asset/horror/The Nun 2.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Horror',
            posterURL: 'https://i.pinimg.com/236x/af/95/f6/af95f6dab12c5322d8956cebc7046932.jpg',
            title: 'Three',
            description: 'A boy becomes possessed by djinns, leading his mother to seek help from an unlikely man, who must put his western thinking aside to save her son through an intense ritual.',
            rating: '88%',
            trailer: 'asset/horror/Three.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/34/dc/fa/34dcfa6553dae30f9bc614ac1c2b6175.jpg',
            title: 'Avengers : Infinity War',
            description: 'As the Avengers and their allies continued to protect the world from threats far too great for any single hero to fight, a new danger came from space: Thanos. A despot feared throughout the universe, Thanos aims to collect the six Infinity Stones, some of the most powerful artifacts in the universe, and use them to impose his will on all of reality. All the fights the Avengers have fought culminate in this battle.',
            rating: '89%',
            trailer: 'asset/marvel/Avengers _ Infinity War.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/736x/f4/39/f4/f439f4861656841176cb5d82af157965.jpg',
            title: 'Blade',
            description: 'A human hybrid since his tragic birth, Blade has spent his long life seeking to rid the world of vampires like the one who killed his mother. Over the years, he has mastered his own style of fighting against monsters of all kinds',
            rating: ' ',
            trailer: 'asset/marvel/Blade.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/15/50/9d/15509d64b095747d57ecc9c0826ea11b.jpg',
            title: 'Deadpool 3',
            description: 'Wolverine recovers from his injuries when he crosses paths with the loudmouth, Deadpool, who has traveled back in time to heal him in hopes of becoming friends and teaming up to defeat a common enemy.',
            rating: ' ',
            trailer: 'asset/marvel/Deadpool 3.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/bf/e6/55/bfe65574ff8e3775bd056d654e3d9519.jpg',
            title: 'Echo',
            description: 'Maya Lopez, aka Echo is a superheroine evolving in the Marvel universe of the publishing house Marvel Comics. Created by screenwriter David W. Mack and artist Joe Quesada, the fictional character appeared for the first time in the comic book Daredevil #9 in December 1999.',
            rating: '56%',
            trailer: 'asset/marvel/Echo.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/9f/f6/87/9ff6877cfb2f3052b8b6702d1baa577e.jpg',
            title: 'Loki',
            description: 'In an alternate reality, Loki escaped with the Tesseract. After his escape, he is taken to the Court of Anachronistic Variations, an organization that acts to stop anyone who attempts to alter the eternal flow of time.',
            rating: '89%',
            trailer: 'asset/marvel/Loki.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/35/7d/4d/357d4df85bbc85c4a37cf134eaa9d03d.jpg',
            title: 'Moon Knight',
            description: 'Marc Spector grew up aiming to become a boxer and a soldier. Left for dead after a mission in Egypt, he is taken to the temple of Khonsu, God of the Moon, and agrees to become his avatar on Earth: Moon Knight.',
            rating: '90%',
            trailer: 'asset/marvel/Moon Knight.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/5e/bd/21/5ebd212448e48f7cc3a6178818098dde.jpg',
            title: 'She-Hulk',
            description: 'The adventures of lawyer Jennifer Walters, cousin of Bruce Banner, who inherits his powers and becomes Miss Hulk following a blood transfusion received after a gunshot wound.',
            rating: '46%',
            trailer: 'asset/marvel/She-Hulk.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/9e/f8/37/9ef837d4faed8b2c9dd5481662b9a17d.jpg',
            title: 'Spider-man',
            description: 'An orphan, Peter Parker was raised by his Aunt May and Uncle Ben in the Queens neighborhood of New York. While continuing his studies at university, he found a job as a photographer at the Daily Bugle newspaper. He shares his apartment with Harry Osborn, his best friend, and dreams of seducing the beautiful Mary Jane.',
            rating: '81%',
            trailer: 'asset/marvel/Spiderman [2002].mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/6c/3c/e2/6c3ce2cd84134fb3d4bafb82f4f44834.jpg',
            title: 'Spider-man : No Way Home',
            description: 'With Spiderman s identity now revealed, he is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter seeks help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spiderman.',
            rating: '88%',
            trailer: 'asset/marvel/Spiderman _ No hay home.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/c0/56/7d/c0567d063eac24c50109c2ee34943ec5.jpg',
            title: 'Spider-man : Homecoming',
            description: 'After his spectacular debut with the Avengers, young Peter Parker gradually discovers his new identity, that of Spider-Man, the web-slinging superhero. Galvanized by his previous experiences, Peter returns home to his Aunt May, under the watchful eye of his new mentor, Tony Stark.',
            rating: '80%',
            trailer: 'asset/marvel/Spiderman homecomming.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/ed/a9/01/eda9012a7a77b54fdc6f88e3a9257126.jpg',
            title: 'The incredible Hulk',
            description: 'Lurking in the underbelly of Sao Paulo, Bruce Banner desperately tries to unravel the secret of the illness that afflicts him.',
            rating: '71%',
            trailer: 'asset/marvel/The Incredible Hulk (2008).mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/96/42/33/9642338bc05e332a644973975cb2b714.jpg',
            title: 'The Marvels',
            description: 'Carol Danvers, aka Captain Marvel, reclaimed her identity from the tyrannical Kree and took revenge on Supreme Intelligence. However, unexpected consequences see her take on the burden of a destabilized universe.',
            rating: '51%',
            trailer: 'asset/marvel/The Marvels.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/b9/f6/82/b9f682dd91ef2af1088b0efe3ccba13f.jpg',
            title: 'Thor : Ragnarok',
            description: 'Deprived of his powerful hammer, Thor is held prisoner on a distant planet at the edge of the universe. To save Asgard, he will have to fight against time to prevent the ruthless Hela from carrying out Ragnarök, or the destruction of his world and the end of Asgardian civilization. To achieve this, he will first have to lead a titanic gladiator fight against the one who was once his ally within the Avengers: the Incredible Hulk.',
            rating: '83%',
            trailer: 'asset/marvel/Thor Ragnarok.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Marvel',
            posterURL: 'https://i.pinimg.com/236x/62/ea/f9/62eaf9ab61fe06441dca84b862a00d80.jpg',
            title: 'Thor : Love and Thunder',
            description: 'Thor embarks on a journey unlike anything he has ever known: a quest for inner peace. However, his retreat is interrupted by Gorr the Butcher of the Gods, a galactic killer who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and Jane Foster. Together, they embark on a harrowing cosmic adventure to uncover the mystery of the vengeance of the Butcher of the Gods.',
            rating: '68%',
            trailer: 'asset/marvel/Thor_Love and Thunder.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/17/a8/bd/17a8bd6276ab12ff10bc0b75979e5edb.jpg',
            title: 'All My Life',
            description: 'Jennifer Carter and Solomon Chau are a sweet and fun young engaged couple who are ready to start their life together. When Solomon learns he has terminal liver cancer, their hopes of getting married this summer become impossible. With time running out, their friends and family quickly come up with an inspiring plan to help Jennifer and Solomon achieve the wedding of their dreams.',
            rating: '56%',
            trailer: 'asset/romance/All My Life.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/bc/65/c3/bc65c3d2265c5e8242efd04a80df35c2.jpg',
            title: 'Anyone but you',
            description: 'Bea and Ben experience a first date full of passion and attraction. But as quickly as the sparks fly, so does the interest. They grow apart until they meet again unexpectedly at a wedding in Australia.',
            rating: '88%',
            trailer: 'asset/romance/Anyone but you.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/6e/08/11/6e0811aafe78751a26d06be25cf50597.jpg',
            title: 'Choose Love',
            description: 'Cami Conway has it all: her dream job and the perfect boyfriend, Paul, with whom the path to engagement, marriage and children seems clear. However, something is missing. Cami faces a range of tempting and difficult choices, from real ethical dilemmas to lighter truth or dare.',
            rating: '43%',
            trailer: 'asset/romance/Choose Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/d1/00/30/d10030f9d04bf7e1f1a0bc3dcb610948.jpg',
            title: 'Love Again',
            description: 'Facing the loss of her fiancé, Mira Ray sends a series of romantic text messages to her old cell phone number, not realizing that it has been reassigned to journalist Rob Burns. Rob becomes captivated by the honesty of his words in the beautifully constructed texts.',
            rating: '59%',
            trailer: 'asset/romance/Love Again.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/564x/b5/2c/1f/b52c1f5f2fda51819448532260fd9787.jpg',
            title: 'Love Alarm',
            description: 'In a world where an app notifies people if someone in the neighborhood likes them, Kim Jojo experiences young love while facing personal difficulties.',
            rating: '87%',
            trailer: 'asset/romance/Love Alarm.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/c8/92/60/c89260249f6bd84134cbe9ab255b1278.jpg',
            title: 'Love and Leashes',
            description: 'Loving each other in pain is the contract between two colleagues. Jung Ji-woo is a woman unaware of the instinctive control she exerts over others, while Jung Ji-hoo is a man who has a strong tendency to obey. Together, they begin a real story beyond their erotic games.',
            rating: '90%',
            trailer: 'asset/romance/Love and Leashes.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/b3/cc/50/b3cc50298ccb44fd6b6cb990618677c8.jpg',
            title: 'Love at First Sight',
            description: 'A young woman named Hadley meets Oliver in an airport. As chance would have it, they found themselves side by side on the same plane leaving for New York towards London. While falling in love, they lose sight of each other at customs.',
            rating: '91%',
            trailer: 'asset/romance/Love at First Sight.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/1a/79/49/1a794933f810066e92c8b7368c33e6de.jpg',
            title: 'Love to Hate You',
            description: 'For this lawyer who hates losing to men and this hot actor who is wary of women, love means nothing until they are forced to date. With their opposing characters, they maintain a warlike relationship.',
            rating: '93%',
            trailer: 'asset/romance/Love to Hate You.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/736x/5e/d6/e4/5ed6e41a4b40803448659640b679cf34.jpg',
            title: 'Man in love',
            description: 'A debt collector with a heart of gold does everything he can to win over a debt-ridden woman who has to take care of her sick father.',
            rating: '91%',
            trailer: 'asset/romance/Man In Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/6a/ad/b6/6aadb6cbb6b96122729bd718aa7287b8.jpg',
            title: 'Married by Mistake',
            description: 'After losing her dream job, Riley gets drunk with Nate and the next morning they find themselves married. Accepting Nate s proposal they travel to Tennessee to rescue his family s business, but will they be able to keep up the deception?',
            rating: '56%',
            trailer: 'asset/romance/Married by Mistake.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/7a/87/28/7a8728f944e88dccab22905ddceed2c5.jpg',
            title: 'My First First Love',
            description: 'Due to different personal reasons, Théo s friends move into his house, where they will have to learn to manage their friendship but also their romantic relationships.',
            rating: '88%',
            trailer: 'asset/romance/My First First Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/65/4f/f5/654ff530119a8d9d920e7e7ded695801.jpg',
            title: 'My Holo Love',
            description: 'A lonely woman finds unexpected and improbable love when she forms an intimate connection with a hologram. However, the latter looks too much like its creator.',
            rating: '93%',
            trailer: 'asset/romance/My Holo Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL:'https://i.pinimg.com/236x/3e/c7/2c/3ec72ca3f87646012f4205b7402d8956.jpg',
            title: 'One Day',
            description: 'After spending graduation night together, Emma and Dexter go their separate ways — but their lives remain intertwined.',
            rating: '70%',
            trailer: 'asset/romance/One Day.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/15/4c/fc/154cfcc44355af0955b16de68053af36.jpg',
            title: 'Puppy Love',
            description: 'After a disastrous first date, Nicole and Max, polar opposites, swear never to speak to each other again.',
            rating: '69%',
            trailer: 'asset/romance/Puppy Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/c8/41/7f/c8417f570d815e64addec09bfdd48617.jpg',
            title: 'Redeeming Love',
            description: 'A young couple s relationship collides with the harsh realities of the 1850 California Gold Rush. Angel, who experiences love for the first time and must face demons that seem insurmountable, flees the new life she doesn t think she deserves. When Michael goes looking for her, Angel discovers that she has the power to choose the life she wants.',
            rating: '81%',
            trailer: 'asset/romance/Redeeming Love.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/e4/f9/62/e4f962e9716209a84bae9adfa4a6eb52.jpg',
            title: 'Romance is a bonus book',
            description: 'The life of a talented writer, who holds an important position in the publishing house where he works, changes when he meets a woman who is desperately looking for a job.',
            rating: '89%',
            trailer: 'asset/romance/Romance is a Bonus Book.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/6d/75/f8/6d75f851ecea8cea0a494d6da63f7597.jpg',
            title: 'Surprised by oxford',
            description: 'The emotionally guarded Caro Drake arrives at Oxford with the sole goal of earning her doctorate, but through a turbulent friendship with a charming young man, Caro begins to open herself to the mystery of new experiences, vulnerability and love.',
            rating: '54%',
            trailer: 'asset/romance/Suprised by oxford.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/33/e3/69/33e3694fa8903de6730b827df7818cc0.jpg',
            title: 'Sweet & Sour',
            description: 'Faced with professional constraints and life difficulties, a couple tries to manage the ups and downs of a long-distance romantic relationship.',
            rating: '69%',
            trailer: 'asset/romance/Sweet & Sour.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/32/cf/f2/32cff21b786fef21707e3449cfff07e4.jpg',
            title: 'This Is Me...Now : A Love Story',
            description: 'A Love Story is like nothing you have ever seen from Jennifer Lopez.',
            rating: ' ',
            trailer: 'asset/romance/This Is Me...Now_ A Love Story.mp4'
        },
    
        {   
            id: '',
            className: '',
            category: 'Romance',
            posterURL: 'https://i.pinimg.com/236x/8d/99/12/8d991295310e7802d3aeca6d5c72df77.jpg',
            title: 'Through My Window : Looking At You',
            description: 'Long in love with her neighbor Ares, Raquel secretly observes him. She finally discovers that her feelings are reciprocal, but the young man s family does not see the story in a very favorable light and the young couple finds themselves involved in not very healthy situations despite themselves.',
            rating: ' 91%',
            trailer: 'asset/romance/THROUGH MY WINDOW_ LOOKING AT YOU.mp4'
        }
    ]
)

/** const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = (title) => {
    setTitleFilter(title);
    filterMovies(title, ratingFilter);
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating);
    filterMovies(titleFilter, rating);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.note == parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie], () => {
      filterMovies(titleFilter, ratingFilter, [...movies, newMovie]);
    });
  }
 */

const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Fonction pour filtrer les films en fonction des critères
  const handleFilter = (title) => {
    setTitleFilter(title);
    filterMovies(title, ratingFilter);
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating);
    filterMovies(titleFilter, rating);
  };

  // Fonction de filtre des films
  const filterMovies = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.note === parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  // Fonction pour ajouter un nouveau film
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie], () => {
      filterMovies(titleFilter, ratingFilter, [...movies, newMovie]);
    });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour la page de détails du film */}
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
  
          {/* Route pour la page d'accueil */}
          <Route path="/" element={
            <>
              <Filtre handleFilter={handleFilter} handleRatingFilter={handleRatingFilter} />
              {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} />
              ) : (
                <p>
                  {ratingFilter
                    ? 'Aucun film ne correspond à la note sélectionnée.'
                    : 'Aucun film ne correspond aux critères de filtre.'}
                </p>
              )}
              <NewMovieForm handleAddMovie={handleAddMovie} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )};

export default App;
