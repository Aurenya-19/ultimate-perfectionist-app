<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 6: Gravitation
// Complete content with Newton's law, Kepler's laws, satellites, escape velocity

const PHYSICS_MECHANICS_6 = {
    id: 'physics-mechanics-6',
    title: 'Gravitation',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'universal-law',
            title: "1. Newton's Universal Law of Gravitation",
            content: `
                <h3>Statement</h3>
                <p><strong>"Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them."</strong></p>
                
                <p class="formula">F = G(m₁m₂)/r²</p>
                
                <p>Where:</p>
                <ul>
                    <li>F = Gravitational force</li>
                    <li>G = Universal gravitational constant = 6.67 × 10⁻¹¹ N⋅m²/kg²</li>
                    <li>m₁, m₂ = Masses of two bodies</li>
                    <li>r = Distance between centers</li>
                </ul>
                
                <h3>Properties of Gravitational Force</h3>
                <ul>
                    <li><strong>Always attractive</strong> (never repulsive)</li>
                    <li><strong>Central force</strong> (acts along line joining centers)</li>
                    <li><strong>Conservative force</strong> (work independent of path)</li>
                    <li><strong>Long range force</strong> (infinite range)</li>
                    <li><strong>Weakest force</strong> in nature</li>
                    <li><strong>Independent</strong> of medium</li>
                </ul>
                
                <h3>Vector Form</h3>
                <p class="formula">F⃗ = -G(m₁m₂)/r² · r̂</p>
                <p>Negative sign indicates attractive nature</p>
                
                <div class="important-box">
                    <strong>Important:</strong> Gravitational force obeys Newton's third law
                    <br>F₁₂ = -F₂₁ (equal and opposite)
                </div>
            `
        },
        
        {
            id: 'acceleration-due-to-gravity',
            title: '2. Acceleration Due to Gravity',
            content: `
                <h3>At Surface of Earth</h3>
                <p>Force on mass m at surface:</p>
                <p class="formula">F = GMm/R²</p>
                <p>Also, F = mg</p>
                <p>Therefore:</p>
                <p class="formula">g = GM/R²</p>
                
                <p>Where:</p>
                <ul>
                    <li>g = 9.8 m/s² (acceleration due to gravity)</li>
                    <li>M = Mass of Earth = 6 × 10²⁴ kg</li>
                    <li>R = Radius of Earth = 6.4 × 10⁶ m</li>
                </ul>
                
                <h3>Variation of g</h3>
                
                <h4>1. With Height (h)</h4>
                <p class="formula">g' = g(1 - 2h/R)</p>
                <p>For h << R (small heights)</p>
                <p>g decreases with height</p>
                
                <h4>2. With Depth (d)</h4>
                <p class="formula">g' = g(1 - d/R)</p>
                <p>g decreases with depth</p>
                <p>At center of Earth: g = 0</p>
                
                <h4>3. With Latitude (λ)</h4>
                <p class="formula">g' = g - Rω² cos² λ</p>
                <p>Where ω = angular velocity of Earth</p>
                <ul>
                    <li>At poles (λ = 90°): g is maximum</li>
                    <li>At equator (λ = 0°): g is minimum</li>
                </ul>
                
                <h3>Relation between g and G</h3>
                <p class="formula">g = GM/R²</p>
                <p>This connects surface gravity (g) with universal constant (G)</p>
            `
        },
        
        {
            id: 'gravitational-potential',
            title: '3. Gravitational Potential Energy',
            content: `
                <h3>At Surface (Near Earth)</h3>
                <p class="formula">PE = mgh</p>
                <p>Valid for small heights (h << R)</p>
                
                <h3>General Expression</h3>
                <p>Potential energy at distance r from center:</p>
                <p class="formula">U(r) = -GMm/r</p>
                
                <p><strong>Important points:</strong></p>
                <ul>
                    <li>PE is negative (attractive force)</li>
                    <li>PE = 0 at r = ∞ (reference point)</li>
                    <li>PE increases (becomes less negative) as r increases</li>
                </ul>
                
                <h3>Gravitational Potential (V)</h3>
                <p>Potential energy per unit mass</p>
                <p class="formula">V = U/m = -GM/r</p>
                
                <p><strong>SI Unit:</strong> J/kg</p>
                
                <h3>Relation between Field and Potential</h3>
                <p class="formula">E = -dV/dr</p>
                <p>Gravitational field = negative gradient of potential</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find PE of 1 kg mass at Earth's surface
                    <br><br>
                    U = -GMm/R
                    <br>= -(6.67×10⁻¹¹)(6×10²⁴)(1)/(6.4×10⁶)
                    <br>≈ <strong>-6.25 × 10⁷ J</strong>
                </div>
            `
        },
        
        {
            id: 'keplers-laws',
            title: "4. Kepler's Laws of Planetary Motion",
            content: `
                <h3>First Law (Law of Orbits)</h3>
                <p><strong>"All planets move in elliptical orbits with the Sun at one focus."</strong></p>
                
                <h3>Second Law (Law of Areas)</h3>
                <p><strong>"The line joining a planet to the Sun sweeps out equal areas in equal intervals of time."</strong></p>
                
                <p class="formula">dA/dt = constant</p>
                
                <p><strong>Consequence:</strong> Angular momentum is conserved</p>
                <p class="formula">L = mvr = constant</p>
                
                <p>Planet moves faster when closer to Sun (perihelion)</p>
                <p>Planet moves slower when farther from Sun (aphelion)</p>
                
                <h3>Third Law (Law of Periods)</h3>
                <p><strong>"The square of the time period of revolution is proportional to the cube of the semi-major axis."</strong></p>
                
                <p class="formula">T² ∝ a³</p>
                <p class="formula">T² = (4π²/GM)a³</p>
                
                <p>For circular orbit (a = r):</p>
                <p class="formula">T² = (4π²/GM)r³</p>
                
                <div class="example-box">
                    <strong>Example:</strong> If Earth's orbital radius is 1 AU and period is 1 year, find period of Mars at 1.5 AU
                    <br><br>
                    T₁²/T₂² = r₁³/r₂³
                    <br>1²/T₂² = 1³/(1.5)³
                    <br>T₂² = (1.5)³ = 3.375
                    <br>T₂ = <strong>1.84 years</strong>
                </div>
            `
        },
        
        {
            id: 'satellites',
            title: '5. Satellites',
            content: `
                <h3>Orbital Velocity</h3>
                <p>Velocity required to keep satellite in circular orbit</p>
                
                <p class="formula">v₀ = √(GM/r) = √(gR²/r)</p>
                
                <p>At Earth's surface (r = R):</p>
                <p class="formula">v₀ = √(gR) = √(9.8 × 6.4×10⁶) ≈ 7.9 km/s</p>
                
                <h3>Time Period</h3>
                <p class="formula">T = 2πr/v₀ = 2π√(r³/GM)</p>
                
                <p>At Earth's surface:</p>
                <p class="formula">T = 2π√(R/g) ≈ 84.6 minutes</p>
                
                <h3>Energy of Satellite</h3>
                
                <h4>Kinetic Energy:</h4>
                <p class="formula">KE = ½mv₀² = GMm/2r</p>
                
                <h4>Potential Energy:</h4>
                <p class="formula">PE = -GMm/r</p>
                
                <h4>Total Energy:</h4>
                <p class="formula">E = KE + PE = -GMm/2r</p>
                
                <p><strong>Important Relations:</strong></p>
                <ul>
                    <li>E = -KE (Total energy = negative of KE)</li>
                    <li>E = PE/2 (Total energy = half of PE)</li>
                    <li>|PE| = 2|KE| (PE magnitude = twice KE)</li>
                </ul>
                
                <h3>Geostationary Satellite</h3>
                <p>Satellite that appears stationary relative to Earth</p>
                <ul>
                    <li>Period = 24 hours</li>
                    <li>Orbits above equator</li>
                    <li>Height ≈ 36,000 km above surface</li>
                    <li>Used for communication</li>
                </ul>
                
                <h3>Polar Satellite</h3>
                <ul>
                    <li>Orbits over poles</li>
                    <li>Low altitude (500-800 km)</li>
                    <li>Used for weather, mapping</li>
                </ul>
            `
        },
        
        {
            id: 'escape-velocity',
            title: '6. Escape Velocity',
            content: `
                <h3>Definition</h3>
                <p>Minimum velocity required to escape Earth's gravitational field</p>
                
                <h3>Derivation</h3>
                <p>For escape, total energy at surface = 0</p>
                <p>KE + PE = 0</p>
                <p>½mv²ₑ - GMm/R = 0</p>
                
                <p class="formula">vₑ = √(2GM/R) = √(2gR)</p>
                
                <p>For Earth:</p>
                <p class="formula">vₑ = √(2 × 9.8 × 6.4×10⁶) ≈ 11.2 km/s</p>
                
                <h3>Important Points</h3>
                <ul>
                    <li>Independent of mass of projectile</li>
                    <li>Independent of direction of projection</li>
                    <li>vₑ = √2 × v₀ (escape velocity = √2 × orbital velocity)</li>
                    <li>Different for different planets</li>
                </ul>
                
                <h3>Escape Velocities</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Body</th>
                            <th>Escape Velocity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Earth</td>
                            <td>11.2 km/s</td>
                        </tr>
                        <tr>
                            <td>Moon</td>
                            <td>2.4 km/s</td>
                        </tr>
                        <tr>
                            <td>Mars</td>
                            <td>5.0 km/s</td>
                        </tr>
                        <tr>
                            <td>Jupiter</td>
                            <td>60 km/s</td>
                        </tr>
                        <tr>
                            <td>Sun</td>
                            <td>618 km/s</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="important-box">
                    <strong>Why Moon has no atmosphere?</strong>
                    <br>Escape velocity of Moon (2.4 km/s) is less than average molecular speed of gases at Moon's temperature. So gases escape!
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Gravitational Force',
            problem: 'Find gravitational force between two masses of 100 kg each separated by 1 m. (G = 6.67×10⁻¹¹ N⋅m²/kg²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                F = Gm₁m₂/r²
                <br>= (6.67×10⁻¹¹)(100)(100)/(1)²
                <br>= 6.67×10⁻⁷ N
                <br><br>
                <strong>F = 6.67 × 10⁻⁷ N</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Variation of g',
            problem: 'Find value of g at height h = R (one Earth radius above surface). Given g = 10 m/s²',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                At height h: g' = g/(1 + h/R)²
                <br><br>
                For h = R:
                <br>g' = g/(1 + R/R)²
                <br>= g/(1 + 1)²
                <br>= g/4
                <br>= 10/4
                <br>= <strong>2.5 m/s²</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Orbital Velocity',
            problem: 'Find orbital velocity of satellite at height 400 km above Earth. (R = 6400 km, g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                v₀ = √(gR²/r)
                <br><br>
                r = R + h = 6400 + 400 = 6800 km = 6.8×10⁶ m
                <br><br>
                v₀ = √[(10)(6.4×10⁶)²/(6.8×10⁶)]
                <br>= √[(10)(6.4)²×10¹²/(6.8×10⁶)]
                <br>= √(6.02×10⁷)
                <br>≈ <strong>7.76 km/s</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: "Example 4: Kepler's Third Law",
            problem: 'A satellite orbits Earth at height R. Find its time period. (R = 6400 km, g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                T = 2π√(r³/gR²)
                <br><br>
                r = R + h = R + R = 2R
                <br><br>
                T = 2π√[(2R)³/(gR²)]
                <br>= 2π√(8R/g)
                <br>= 2π√[8(6.4×10⁶)/10]
                <br>= 2π√(5.12×10⁶)
                <br>= 2π(2263)
                <br>≈ <strong>14,213 seconds ≈ 237 minutes ≈ 4 hours</strong>
            `,
            difficulty: 'hard'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'Gravitational force is always:',
            options: ['Attractive', 'Repulsive', 'Both', 'Neither'],
            correct: 0,
            explanation: 'Gravitational force is always attractive in nature',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'Value of g at center of Earth is:',
            options: ['9.8 m/s²', '4.9 m/s²', '0', '19.6 m/s²'],
            correct: 2,
            explanation: 'At center, g = 0 because gravitational forces from all directions cancel out',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Escape velocity is √2 times:',
            options: ['Orbital velocity', 'Terminal velocity', 'Average velocity', 'Initial velocity'],
            correct: 0,
            explanation: 'vₑ = √2 × v₀ (escape velocity = √2 times orbital velocity)',
            difficulty: 'medium'
        },
        
        {
            id: 'p4',
            question: 'For a satellite, |PE| = ?',
            options: ['KE', '2KE', 'KE/2', '4KE'],
            correct: 1,
            explanation: 'For satellite: |PE| = 2|KE| (magnitude of PE is twice KE)',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'Geostationary satellite has period of:',
            options: ['12 hours', '24 hours', '48 hours', '6 hours'],
            correct: 1,
            explanation: 'Geostationary satellite has period = 24 hours (same as Earth\'s rotation)',
            difficulty: 'easy'
        }
    ],
    
    keyPoints: [
        'F = Gm₁m₂/r² (Universal law of gravitation)',
        'g = GM/R² (acceleration due to gravity)',
        'g decreases with height and depth',
        'g is maximum at poles, minimum at equator',
        "Kepler's laws: Elliptical orbits, Equal areas, T² ∝ r³",
        'Orbital velocity: v₀ = √(GM/r)',
        'Escape velocity: vₑ = √(2GM/R) = √(2gR)',
        'vₑ = √2 × v₀',
        'Total energy of satellite: E = -GMm/2r',
        '|PE| = 2|KE| for satellites'
    ],
    
    formulae: [
        {
            name: 'Universal Law',
            formula: 'F = Gm₁m₂/r²',
            description: 'Gravitational force between two masses'
        },
        {
            name: 'Acceleration due to Gravity',
            formula: 'g = GM/R²',
            description: 'At surface of planet'
        },
        {
            name: 'Gravitational PE',
            formula: 'U = -GMm/r',
            description: 'Potential energy at distance r'
        },
        {
            name: 'Orbital Velocity',
            formula: 'v₀ = √(GM/r)',
            description: 'Velocity for circular orbit'
        },
        {
            name: 'Escape Velocity',
            formula: 'vₑ = √(2GM/R)',
            description: 'Minimum velocity to escape'
        },
        {
            name: "Kepler's Third Law",
            formula: 'T² = (4π²/GM)r³',
            description: 'Period vs radius relation'
        },
        {
            name: 'Satellite Energy',
            formula: 'E = -GMm/2r',
            description: 'Total energy of satellite'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_6;
}
window.PHYSICS_MECHANICS_6 = PHYSICS_MECHANICS_6;
</body>
</html>