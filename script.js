document.addEventListener('DOMContentLoaded', function() {
    // Zodiac data with standard symbols
    const zodiacData = [
        {
            name: "Aries",
            icon: "♈︎",
            element: "Fire",
            planet: "Mars",
            dates: "Mar 21 - Apr 19",
            color: "#FF6B6B",
            colors: ["#FF6B6B", "#FFE66D", "#FF9E9E", "#FFD166"],
            traits: {
                good: ["Courageous", "Determined", "Confident"],
                bad: ["Impatient", "Moody", "Impulsive"]
            },
            quote: "\"I am the fiery spark of initiative.\"",
            famous: "Lady Gaga, Mariah Carey, Robert Downey Jr.",
            compatibility: "Best with Leo and Sagittarius",
            motto: "\"I am\""
        },
        {
            name: "Taurus",
            icon: "♉︎",
            element: "Earth",
            planet: "Venus",
            dates: "Apr 20 - May 20",
            color: "#B5EAD7",
            colors: ["#B5EAD7", "#E2F0CB", "#C7CEEA", "#FFDAC1"],
            traits: {
                good: ["Reliable", "Patient", "Practical"],
                bad: ["Stubborn", "Possessive", "Resistant to change"]
            },
            quote: "\"I have, and I hold.\"",
            famous: "Adele, Dwayne Johnson, Cher",
            compatibility: "Best with Virgo and Capricorn",
            motto: "\"I have\""
        },
        {
            name: "Gemini",
            icon: "♊︎",
            element: "Air",
            planet: "Mercury",
            dates: "May 21 - Jun 20",
            color: "#AEC6CF",
            colors: ["#AEC6CF", "#CFCFC4", "#F7B7D1", "#9AD1F1"],
            traits: {
                good: ["Adaptable", "Outgoing", "Intelligent"],
                bad: ["Nervous", "Inconsistent", "Indecisive"]
            },
            quote: "\"I think, therefore I am... many things.\"",
            famous: "Angelina Jolie, Kanye West, Marilyn Monroe",
            compatibility: "Best with Libra and Aquarius",
            motto: "\"I think\""
        },
        {
            name: "Cancer",
            icon: "♋︎",
            element: "Water",
            planet: "Moon",
            dates: "Jun 21 - Jul 22",
            color: "#FFB6C1",
            colors: ["#FFB6C1", "#FFDFD3", "#F9C5D1", "#D8B5FF"],
            traits: {
                good: ["Loyal", "Emotional", "Persuasive"],
                bad: ["Moody", "Pessimistic", "Suspicious"]
            },
            quote: "\"I feel deeply, therefore I am.\"",
            famous: "Tom Hanks, Selena Gomez, Princess Diana",
            compatibility: "Best with Scorpio and Pisces",
            motto: "\"I feel\""
        },
        {
            name: "Leo",
            icon: "♌︎",
            element: "Fire",
            planet: "Sun",
            dates: "Jul 23 - Aug 22",
            color: "#FFD166",
            colors: ["#FFD166", "#FF9E9E", "#FFEE93", "#FFB347"],
            traits: {
                good: ["Creative", "Passionate", "Generous"],
                bad: ["Arrogant", "Stubborn", "Lazy"]
            },
            quote: "\"I shine, therefore I am.\"",
            famous: "Barack Obama, Jennifer Lopez, Madonna",
            compatibility: "Best with Aries and Sagittarius",
            motto: "\"I will\""
        },
        {
            name: "Virgo",
            icon: "♍︎",
            element: "Earth",
            planet: "Mercury",
            dates: "Aug 23 - Sep 22",
            color: "#C7CEEA",
            colors: ["#C7CEEA", "#E0F9B5", "#A5D8FF", "#B5EAD7"],
            traits: {
                good: ["Loyal", "Analytical", "Kind"],
                bad: ["Worrying", "Critical", "Shy"]
            },
            quote: "\"I analyze, therefore I am.\"",
            famous: "Beyoncé, Keanu Reeves, Zendaya",
            compatibility: "Best with Taurus and Capricorn",
            motto: "\"I analyze\""
        },
        {
            name: "Libra",
            icon: "♎︎",
            element: "Air",
            planet: "Venus",
            dates: "Sep 23 - Oct 22",
            color: "#F7B7D1",
            colors: ["#F7B7D1", "#D8B5FF", "#FFD3B6", "#FFAAA5"],
            traits: {
                good: ["Cooperative", "Diplomatic", "Gracious"],
                bad: ["Indecisive", "Self-pitying", "Avoids confrontations"]
            },
            quote: "\"I balance, therefore I am.\"",
            famous: "Kim Kardashian, Will Smith, Serena Williams",
            compatibility: "Best with Gemini and Aquarius",
            motto: "\"I balance\""
        },
        {
            name: "Scorpio",
            icon: "♏︎",
            element: "Water",
            planet: "Pluto",
            dates: "Oct 23 - Nov 21",
            color: "#D8B5FF",
            colors: ["#D8B5FF", "#9AD1F1", "#FF9AA2", "#FFB7B2"],
            traits: {
                good: ["Resourceful", "Brave", "Passionate"],
                bad: ["Distrusting", "Jealous", "Secretive"]
            },
            quote: "\"I desire, therefore I am.\"",
            famous: "Drake, Katy Perry, Ryan Reynolds",
            compatibility: "Best with Cancer and Pisces",
            motto: "\"I desire\""
        },
        {
            name: "Sagittarius",
            icon: "♐︎",
            element: "Fire",
            planet: "Jupiter",
            dates: "Nov 22 - Dec 21",
            color: "#FF9AA2",
            colors: ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB"],
            traits: {
                good: ["Generous", "Idealistic", "Great sense of humor"],
                bad: ["Impatient", "Promise more than can deliver", "Blunt"]
            },
            quote: "\"I seek, therefore I am.\"",
            famous: "Taylor Swift, Brad Pitt, Miley Cyrus",
            compatibility: "Best with Aries and Leo",
            motto: "\"I see\""
        },
        {
            name: "Capricorn",
            icon: "♑︎",
            element: "Earth",
            planet: "Saturn",
            dates: "Dec 22 - Jan 19",
            color: "#9AD1F1",
            colors: ["#9AD1F1", "#A5D8FF", "#B5EAD7", "#C7CEEA"],
            traits: {
                good: ["Responsible", "Disciplined", "Self-controlled"],
                bad: ["Know-it-all", "Unforgiving", "Condescending"]
            },
            quote: "\"I use, therefore I am.\"",
            famous: "Michelle Obama, LeBron James, Dolly Parton",
            compatibility: "Best with Taurus and Virgo",
            motto: "\"I use\""
        },
        {
            name: "Aquarius",
            icon: "♒︎",
            element: "Air",
            planet: "Uranus",
            dates: "Jan 20 - Feb 18",
            color: "#A5D8FF",
            colors: ["#A5D8FF", "#C7CEEA", "#F7B7D1", "#D8B5FF"],
            traits: {
                good: ["Progressive", "Original", "Humanitarian"],
                bad: ["Runs from emotional expression", "Stubborn", "Unemotional"]
            },
            quote: "\"I know, therefore I am.\"",
            famous: "Oprah Winfrey, Harry Styles, Cristiano Ronaldo",
            compatibility: "Best with Gemini and Libra",
            motto: "\"I know\""
        },
        {
            name: "Pisces",
            icon: "♓︎",
            element: "Water",
            planet: "Neptune",
            dates: "Feb 19 - Mar 20",
            color: "#B5EAD7",
            colors: ["#B5EAD7", "#FFDAC1", "#E2F0CB", "#FFB7B2"],
            traits: {
                good: ["Compassionate", "Artistic", "Intuitive"],
                bad: ["Escapist", "Overly trusting", "Victim mentality"]
            },
            quote: "\"I believe, therefore I am.\"",
            famous: "Rihanna, Albert Einstein, Justin Bieber",
            compatibility: "Best with Cancer and Scorpio",
            motto: "\"I believe\""
        }
    ];

    // DOM elements
    const zodiacGrid = document.getElementById('zodiacGrid');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalName = document.getElementById('modalName');
    const modalIcon = document.getElementById('modalIcon');
    const modalElement = document.getElementById('modalElement');
    const modalPlanet = document.getElementById('modalPlanet');
    const modalDates = document.getElementById('modalDates');
    const modalTraits = document.getElementById('modalTraits');
    const colorPalette = document.getElementById('colorPalette');
    const modalQuote = document.getElementById('modalQuote');
    const modalFamous = document.getElementById('modalFamous');
    const modalCompatibility = document.getElementById('modalCompatibility');
    const modalMotto = document.getElementById('modalMotto');
    const starsContainer = document.getElementById('stars');

    // Create zodiac cards
    function createZodiacCards() {
        zodiacData.forEach((sign, index) => {
            const card = document.createElement('div');
            card.className = 'zodiac-card';
            card.style.setProperty('--sign-color', sign.color);
            card.dataset.sign = sign.name.toLowerCase();
            card.innerHTML = `
                <div class="zodiac-icon">${sign.icon}</div>
                <h3 class="zodiac-name">${sign.name}</h3>
                <p class="zodiac-date">${sign.dates}</p>
            `;
            
            card.addEventListener('click', () => openModal(sign));
            zodiacGrid.appendChild(card);
        });
    }

    // Open modal with sign data
    function openModal(sign) {
        document.documentElement.style.setProperty('--sign-color', sign.color);
        
        // Set main content
        modalName.textContent = sign.name;
        modalIcon.textContent = sign.icon;
        modalElement.textContent = sign.element;
        modalPlanet.textContent = sign.planet;
        modalDates.textContent = sign.dates;
        modalQuote.textContent = sign.quote;
        modalFamous.textContent = sign.famous;
        modalCompatibility.textContent = sign.compatibility;
        modalMotto.textContent = sign.motto;
        
        // Set traits
        modalTraits.innerHTML = '';
        sign.traits.good.forEach(trait => {
            const li = document.createElement('li');
            li.className = 'good-trait';
            li.textContent = trait;
            modalTraits.appendChild(li);
        });
        
        sign.traits.bad.forEach(trait => {
            const li = document.createElement('li');
            li.className = 'bad-trait';
            li.textContent = trait;
            modalTraits.appendChild(li);
        });
        
        // Set color palette
        colorPalette.innerHTML = '';
        sign.colors.forEach((color, i) => {
            const box = document.createElement('div');
            box.className = 'color-box';
            box.style.backgroundColor = color;
            colorPalette.appendChild(box);
        });
        
        // Animate modal opening
        modal.classList.add('active');
    }

    // Close modal
    function closeModalHandler() {
        modal.classList.remove('active');
    }

    // Create cosmic background with optimized particles
    function createCosmicBackground() {
        // Create 50 particles (reduced from 150 for performance)
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'cosmic-particle';
            
            // Randomly assign star or dust class
            if (Math.random() > 0.3) {
                particle.classList.add('particle-star');
            } else {
                particle.classList.add('particle-dust');
            }
            
            // Random size
            const size = Math.random() * 2 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * 20}s`;
            
            starsContainer.appendChild(particle);
        }
        
        // Create occasional shooting stars (less frequent)
        setInterval(createShootingStar, 5000);
    }

    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 30}%`;
        
        // Random direction
        const angle = Math.random() * 30 + 45;
        shootingStar.style.transform = `rotate(${angle}deg)`;
        
        starsContainer.appendChild(shootingStar);
        
        setTimeout(() => {
            shootingStar.remove();
        }, 2000);
    }

    // Create constellation connections with debounced resize
    function createConstellationLines() {
        const cards = document.querySelectorAll('.zodiac-card');
        const connections = [
            [0, 4], [1, 7], [2, 5], [3, 11], 
            [4, 8], [5, 9], [6, 10], [7, 0], 
            [8, 3], [9, 2], [10, 6], [11, 1]
        ];
        
        const lines = [];
        
        function updateAllLines() {
            connections.forEach(([i, j], index) => {
                if (cards[i] && cards[j]) {
                    const rect1 = cards[i].getBoundingClientRect();
                    const rect2 = cards[j].getBoundingClientRect();
                    
                    const x1 = rect1.left + rect1.width/2;
                    const y1 = rect1.top + rect1.height/2;
                    const x2 = rect2.left + rect2.width/2;
                    const y2 = rect2.top + rect2.height/2;
                    
                    const length = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
                    const angle = Math.atan2(y2-y1, x2-x1) * 180/Math.PI;
                    
                    if (!lines[index]) {
                        const line = document.createElement('div');
                        line.className = 'constellation-line';
                        document.body.appendChild(line);
                        lines[index] = line;
                    }
                    
                    lines[index].style.width = `${length}px`;
                    lines[index].style.left = `${x1}px`;
                    lines[index].style.top = `${y1}px`;
                    lines[index].style.transform = `rotate(${angle}deg)`;
                }
            });
        }
        
        // Debounce resize events
        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateAllLines, 100);
        }
        
        updateAllLines();
        window.addEventListener('resize', handleResize);
    }

    // Element Filter Functionality
    function setupElementFilters() {
        const filterButtons = document.querySelectorAll('.element-filters button');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter cards
                const element = button.dataset.element;
                const cards = document.querySelectorAll('.zodiac-card');
                
                cards.forEach(card => {
                    const cardElement = zodiacData.find(
                        sign => sign.name.toLowerCase() === card.dataset.sign
                    ).element.toLowerCase();
                    
                    if (element === 'all' || cardElement === element) {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.opacity = '0.3';
                        card.style.transform = 'scale(0.9)';
                    }
                });
            });
        });
    }

    // Initialize everything
    function init() {
        createZodiacCards();
        createCosmicBackground();
        createConstellationLines();
        setupElementFilters();
        
        // Event listeners
        closeModal.addEventListener('click', closeModalHandler);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalHandler();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModalHandler();
            }
        });
    }

    // Start the app
    init();
});