<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 3: Laws of Motion
// Complete content with Newton's laws, friction, circular motion

const PHYSICS_MECHANICS_3 = {
    id: 'physics-mechanics-3',
    title: 'Laws of Motion',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'newtons-first-law',
            title: "1. Newton's First Law of Motion",
            content: `
                <h3>Statement</h3>
                <p><strong>"A body continues in its state of rest or uniform motion in a straight line unless acted upon by an external force."</strong></p>
                
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Inertia:</strong> Property of a body to resist change in its state of motion</li>
                    <li><strong>Mass:</strong> Measure of inertia (more mass = more inertia)</li>
                    <li>First law is also called <strong>Law of Inertia</strong></li>
                </ul>
                
                <h3>Types of Inertia</h3>
                <ol>
                    <li><strong>Inertia of Rest:</strong> Tendency to remain at rest
                        <br>Example: When bus starts suddenly, passengers jerk backward
                    </li>
                    <li><strong>Inertia of Motion:</strong> Tendency to remain in motion
                        <br>Example: When bus stops suddenly, passengers jerk forward
                    </li>
                    <li><strong>Inertia of Direction:</strong> Tendency to maintain direction
                        <br>Example: Mud flies off tangentially from rotating wheel
                    </li>
                </ol>
                
                <div class="important-box">
                    <strong>Important:</strong> First law defines force qualitatively. It tells us what force does, but not how to measure it.
                </div>
            `
        },
        
        {
            id: 'newtons-second-law',
            title: "2. Newton's Second Law of Motion",
            content: `
                <h3>Statement</h3>
                <p><strong>"The rate of change of momentum is directly proportional to the applied force and takes place in the direction of force."</strong></p>
                
                <p class="formula">F = dp/dt = d(mv)/dt</p>
                
                <h3>Derivation</h3>
                <p>If mass is constant:</p>
                <p class="formula">F = m(dv/dt) = ma</p>
                
                <p><strong>This is the most important equation in mechanics!</strong></p>
                
                <h3>SI Unit of Force</h3>
                <p><strong>Newton (N):</strong> Force required to produce acceleration of 1 m/s² in a body of mass 1 kg</p>
                <p class="formula">1 N = 1 kg⋅m/s²</p>
                
                <h3>Impulse</h3>
                <p>Change in momentum = Impulse</p>
                <p class="formula">J = Δp = F⋅Δt</p>
                <ul>
                    <li>SI Unit: N⋅s or kg⋅m/s</li>
                    <li>Vector quantity</li>
                    <li>Direction: Same as force</li>
                </ul>
                
                <div class="example-box">
                    <strong>Applications of Impulse:</strong>
                    <ul>
                        <li>Cricket player lowers hands while catching ball (increases Δt, reduces F)</li>
                        <li>Vehicles have shock absorbers (increases Δt, reduces F)</li>
                        <li>Karate expert breaks bricks (decreases Δt, increases F)</li>
                    </ul>
                </div>
                
                <h3>Conservation of Momentum</h3>
                <p>If net external force = 0, then momentum is conserved</p>
                <p class="formula">p_initial = p_final</p>
                <p class="formula">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</p>
            `
        },
        
        {
            id: 'newtons-third-law',
            title: "3. Newton's Third Law of Motion",
            content: `
                <h3>Statement</h3>
                <p><strong>"To every action, there is an equal and opposite reaction."</strong></p>
                
                <p class="formula">F_AB = -F_BA</p>
                
                <h3>Important Points</h3>
                <ul>
                    <li>Action and reaction act on <strong>different bodies</strong></li>
                    <li>They are <strong>equal in magnitude</strong></li>
                    <li>They are <strong>opposite in direction</strong></li>
                    <li>They act <strong>simultaneously</strong></li>
                    <li>They are of <strong>same type</strong> (both contact or both non-contact)</li>
                </ul>
                
                <div class="example-box">
                    <strong>Examples:</strong>
                    <ul>
                        <li><strong>Walking:</strong> We push ground backward, ground pushes us forward</li>
                        <li><strong>Swimming:</strong> We push water backward, water pushes us forward</li>
                        <li><strong>Rocket:</strong> Gases pushed down, rocket pushed up</li>
                        <li><strong>Gun recoil:</strong> Bullet goes forward, gun recoils backward</li>
                    </ul>
                </div>
                
                <h3>Why don't action-reaction cancel?</h3>
                <p>Because they act on <strong>different bodies</strong>. Forces cancel only when they act on the same body.</p>
            `
        },
        
        {
            id: 'friction',
            title: '4. Friction',
            content: `
                <h3>What is Friction?</h3>
                <p>Force that opposes relative motion between two surfaces in contact.</p>
                
                <h3>Types of Friction</h3>
                
                <h4>1. Static Friction (f_s)</h4>
                <p>Friction when body is at rest</p>
                <p class="formula">0 ≤ f_s ≤ μ_s N</p>
                <p>Maximum static friction: f_s(max) = μ_s N</p>
                
                <h4>2. Kinetic Friction (f_k)</h4>
                <p>Friction when body is in motion</p>
                <p class="formula">f_k = μ_k N</p>
                
                <h4>3. Rolling Friction (f_r)</h4>
                <p>Friction when body rolls</p>
                <p>f_r < f_k < f_s (for same surfaces)</p>
                
                <h3>Coefficient of Friction (μ)</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Static (μ_s)</th>
                            <th>Kinetic (μ_k)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Value</td>
                            <td>Higher</td>
                            <td>Lower</td>
                        </tr>
                        <tr>
                            <td>Relation</td>
                            <td>μ_s > μ_k</td>
                            <td>μ_k < μ_s</td>
                        </tr>
                        <tr>
                            <td>Depends on</td>
                            <td colspan="2">Nature of surfaces (not on area or mass)</td>
                        </tr>
                        <tr>
                            <td>Unit</td>
                            <td colspan="2">No unit (dimensionless)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Laws of Friction</h3>
                <ol>
                    <li>Friction opposes relative motion</li>
                    <li>Friction is independent of area of contact</li>
                    <li>Friction depends on nature of surfaces</li>
                    <li>Kinetic friction is independent of velocity</li>
                    <li>f ∝ N (Normal reaction)</li>
                </ol>
                
                <h3>Angle of Friction (λ)</h3>
                <p class="formula">tan λ = μ</p>
                <p>Angle between normal reaction and resultant of normal and friction</p>
                
                <h3>Angle of Repose (θ)</h3>
                <p>Maximum angle of incline at which body remains at rest</p>
                <p class="formula">tan θ = μ_s</p>
                <p>Therefore: <strong>θ = λ</strong></p>
            `
        },
        
        {
            id: 'circular-motion',
            title: '5. Circular Motion',
            content: `
                <h3>Uniform Circular Motion</h3>
                <p>Motion in a circle with constant speed (but changing velocity due to direction change)</p>
                
                <h3>Centripetal Acceleration</h3>
                <p>Acceleration directed toward center of circle</p>
                <p class="formula">a_c = v²/r = ω²r = 4π²r/T²</p>
                
                <h3>Centripetal Force</h3>
                <p>Force required to keep body in circular motion</p>
                <p class="formula">F_c = mv²/r = mω²r = m4π²r/T²</p>
                
                <div class="important-box">
                    <strong>Important:</strong> Centripetal force is not a new type of force. It's the net force toward center provided by tension, friction, gravity, etc.
                </div>
                
                <h3>Examples of Centripetal Force</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Situation</th>
                            <th>Centripetal Force Provided By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stone tied to string</td>
                            <td>Tension in string</td>
                        </tr>
                        <tr>
                            <td>Car on circular road</td>
                            <td>Friction between tires and road</td>
                        </tr>
                        <tr>
                            <td>Planets around sun</td>
                            <td>Gravitational force</td>
                        </tr>
                        <tr>
                            <td>Electron around nucleus</td>
                            <td>Electrostatic force</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Banking of Roads</h3>
                <p>Roads are banked (tilted) at curves to provide centripetal force</p>
                <p class="formula">tan θ = v²/rg</p>
                <p>Where θ = angle of banking</p>
                
                <h3>Conical Pendulum</h3>
                <p>Bob moves in horizontal circle while string makes angle with vertical</p>
                <p class="formula">tan θ = v²/rg</p>
                <p class="formula">T = 2π√(l cos θ/g)</p>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: "Example 1: Newton's Second Law",
            problem: 'A force of 10 N acts on a body of mass 2 kg. Find the acceleration produced.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: F = 10 N, m = 2 kg
                <br><br>
                Using F = ma:
                <br>10 = 2 × a
                <br>a = 10/2
                <br><strong>a = 5 m/s²</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Friction',
            problem: 'A block of mass 5 kg rests on a horizontal surface. If coefficient of static friction is 0.4, find maximum force that can be applied without moving the block. (g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: m = 5 kg, μ_s = 0.4, g = 10 m/s²
                <br><br>
                Normal reaction: N = mg = 5 × 10 = 50 N
                <br><br>
                Maximum static friction:
                <br>f_s(max) = μ_s N
                <br>= 0.4 × 50
                <br><strong>= 20 N</strong>
                <br><br>
                Maximum force that can be applied = 20 N
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Circular Motion',
            problem: 'A stone of mass 0.5 kg is tied to a string and whirled in a horizontal circle of radius 1 m with speed 10 m/s. Find the tension in string.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: m = 0.5 kg, r = 1 m, v = 10 m/s
                <br><br>
                Centripetal force = Tension in string
                <br><br>
                F_c = mv²/r
                <br>= 0.5 × (10)² / 1
                <br>= 0.5 × 100
                <br><strong>= 50 N</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Conservation of Momentum',
            problem: 'A gun of mass 4 kg fires a bullet of mass 50 g with velocity 400 m/s. Find recoil velocity of gun.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: M = 4 kg, m = 50 g = 0.05 kg, v = 400 m/s
                <br><br>
                Initial momentum = 0 (both at rest)
                <br><br>
                By conservation of momentum:
                <br>0 = mv + MV
                <br>0 = 0.05 × 400 + 4 × V
                <br>0 = 20 + 4V
                <br>4V = -20
                <br>V = -5 m/s
                <br><br>
                <strong>Recoil velocity = 5 m/s (backward)</strong>
                <br>(Negative sign indicates opposite direction)
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'A body of mass 2 kg moving with velocity 3 m/s collides with a body of mass 1 kg at rest. After collision, they move together. Find their common velocity.',
            options: ['1 m/s', '2 m/s', '3 m/s', '4 m/s'],
            correct: 1,
            explanation: 'By momentum conservation: 2×3 + 1×0 = (2+1)v → 6 = 3v → v = 2 m/s',
            difficulty: 'medium'
        },
        
        {
            id: 'p2',
            question: 'If coefficient of friction between block and surface is 0.5, the angle of repose is:',
            options: ['30°', '45°', 'tan⁻¹(0.5)', '60°'],
            correct: 2,
            explanation: 'tan θ = μ → θ = tan⁻¹(μ) = tan⁻¹(0.5)',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'A car moves in a circle of radius 100 m with speed 20 m/s. The centripetal acceleration is:',
            options: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
            correct: 1,
            explanation: 'a_c = v²/r = (20)²/100 = 400/100 = 4 m/s²',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'Which of the following is NOT a contact force?',
            options: ['Friction', 'Tension', 'Gravitational force', 'Normal reaction'],
            correct: 2,
            explanation: 'Gravitational force acts at a distance (non-contact). Others require physical contact.',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'A block of mass 10 kg is pulled by a force of 50 N at angle 30° with horizontal. If μ_k = 0.2, find acceleration. (g = 10 m/s²)',
            options: ['2.5 m/s²', '3 m/s²', '3.5 m/s²', '4 m/s²'],
            correct: 0,
            explanation: 'Horizontal component: 50cos30° = 43.3 N. Friction: 0.2×(100-25) = 15 N. Net force: 43.3-15 = 28.3 N. a = 28.3/10 ≈ 2.5 m/s²',
            difficulty: 'hard'
        }
    ],
    
    keyPoints: [
        "Newton's First Law: Body continues in state of rest or uniform motion unless external force acts",
        "Newton's Second Law: F = ma (most important equation)",
        "Newton's Third Law: Action and reaction are equal and opposite (on different bodies)",
        'Impulse = Change in momentum = F×Δt',
        'Momentum is conserved when net external force = 0',
        'Static friction: 0 ≤ f_s ≤ μ_s N',
        'Kinetic friction: f_k = μ_k N',
        'μ_s > μ_k always',
        'Angle of repose = Angle of friction: tan θ = μ',
        'Centripetal force: F_c = mv²/r',
        'Centripetal acceleration: a_c = v²/r',
        'Banking angle: tan θ = v²/rg'
    ],
    
    formulae: [
        {
            name: "Newton's Second Law",
            formula: 'F = ma = dp/dt',
            description: 'Force equals mass times acceleration'
        },
        {
            name: 'Impulse',
            formula: 'J = F×Δt = Δp',
            description: 'Impulse equals change in momentum'
        },
        {
            name: 'Conservation of Momentum',
            formula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
            description: 'Total momentum before = Total momentum after'
        },
        {
            name: 'Static Friction',
            formula: 'f_s(max) = μ_s N',
            description: 'Maximum static friction'
        },
        {
            name: 'Kinetic Friction',
            formula: 'f_k = μ_k N',
            description: 'Kinetic friction (constant)'
        },
        {
            name: 'Angle of Repose',
            formula: 'tan θ = μ_s',
            description: 'Maximum angle before sliding'
        },
        {
            name: 'Centripetal Force',
            formula: 'F_c = mv²/r = mω²r',
            description: 'Force toward center in circular motion'
        },
        {
            name: 'Centripetal Acceleration',
            formula: 'a_c = v²/r = ω²r',
            description: 'Acceleration toward center'
        },
        {
            name: 'Banking Angle',
            formula: 'tan θ = v²/rg',
            description: 'Angle of banking for circular road'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_3;
}
window.PHYSICS_MECHANICS_3 = PHYSICS_MECHANICS_3;
</body>
</html>