<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 2: Motion in a Straight Line
// Complete content with theory, derivations, examples, and problems

const PHYSICS_MECHANICS_2 = {
    id: 'physics-mechanics-2',
    title: 'Motion in a Straight Line',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Motion',
            content: `
                <h3>What is Motion?</h3>
                <p>A body is said to be in motion if it changes its position with respect to its surroundings with time.</p>
                
                <h3>Types of Motion</h3>
                <ul>
                    <li><strong>Translational Motion:</strong> Motion in which all points of the body move in the same direction (e.g., car moving on road)</li>
                    <li><strong>Rotational Motion:</strong> Motion about a fixed axis (e.g., spinning top)</li>
                    <li><strong>Vibrational Motion:</strong> To and fro motion about a fixed point (e.g., pendulum)</li>
                </ul>
                
                <h3>Frame of Reference</h3>
                <p>A coordinate system with respect to which motion is described. It consists of:</p>
                <ul>
                    <li>Origin (reference point)</li>
                    <li>Coordinate axes</li>
                    <li>Clock to measure time</li>
                </ul>
                
                <div class="important-box">
                    <strong>Important:</strong> Motion is relative. A body at rest in one frame may be in motion in another frame.
                </div>
            `
        },
        
        {
            id: 'position-displacement',
            title: '2. Position, Distance, and Displacement',
            content: `
                <h3>Position</h3>
                <p>Location of an object with respect to the origin of the coordinate system.</p>
                <p>Represented by position vector: <strong>r⃗ = x î + y ĵ + z k̂</strong></p>
                
                <h3>Distance</h3>
                <p><strong>Distance</strong> is the total path length traveled by an object.</p>
                <ul>
                    <li>Scalar quantity</li>
                    <li>Always positive</li>
                    <li>Depends on actual path taken</li>
                </ul>
                
                <h3>Displacement</h3>
                <p><strong>Displacement</strong> is the shortest distance between initial and final positions.</p>
                <ul>
                    <li>Vector quantity</li>
                    <li>Can be positive, negative, or zero</li>
                    <li>Independent of path taken</li>
                </ul>
                
                <p class="formula">Displacement: Δx = x₂ - x₁</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A person walks 3 km East, then 4 km North.
                    <br><br>
                    <strong>Distance:</strong> 3 + 4 = 7 km
                    <br>
                    <strong>Displacement:</strong> √(3² + 4²) = 5 km (using Pythagoras theorem)
                </div>
                
                <h3>Key Differences</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Displacement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Scalar</td>
                            <td>Vector</td>
                        </tr>
                        <tr>
                            <td>Always positive</td>
                            <td>Can be +ve, -ve, or zero</td>
                        </tr>
                        <tr>
                            <td>Path dependent</td>
                            <td>Path independent</td>
                        </tr>
                        <tr>
                            <td>≥ Displacement</td>
                            <td>≤ Distance</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'velocity-speed',
            title: '3. Speed and Velocity',
            content: `
                <h3>Speed</h3>
                <p><strong>Speed</strong> is the rate of change of distance with time.</p>
                <p class="formula">Speed = Distance / Time</p>
                <ul>
                    <li>Scalar quantity</li>
                    <li>Always positive</li>
                    <li>SI Unit: m/s</li>
                </ul>
                
                <h3>Average Speed</h3>
                <p class="formula">Average Speed = Total Distance / Total Time</p>
                
                <h3>Velocity</h3>
                <p><strong>Velocity</strong> is the rate of change of displacement with time.</p>
                <p class="formula">Velocity = Displacement / Time</p>
                <p class="formula">v = Δx / Δt</p>
                <ul>
                    <li>Vector quantity</li>
                    <li>Can be positive or negative</li>
                    <li>SI Unit: m/s</li>
                </ul>
                
                <h3>Average Velocity</h3>
                <p class="formula">v_avg = (x₂ - x₁) / (t₂ - t₁) = Δx / Δt</p>
                
                <h3>Instantaneous Velocity</h3>
                <p>Velocity at a particular instant of time.</p>
                <p class="formula">v = lim(Δt→0) Δx/Δt = dx/dt</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A car travels 100 km in 2 hours, then returns back in 3 hours.
                    <br><br>
                    <strong>Average Speed:</strong> (100 + 100) / (2 + 3) = 200/5 = 40 km/h
                    <br>
                    <strong>Average Velocity:</strong> 0 / 5 = 0 km/h (displacement is zero)
                </div>
                
                <h3>Uniform vs Non-uniform Motion</h3>
                <p><strong>Uniform Motion:</strong> Equal displacements in equal intervals of time (constant velocity)</p>
                <p><strong>Non-uniform Motion:</strong> Unequal displacements in equal intervals of time (changing velocity)</p>
            `
        },
        
        {
            id: 'acceleration',
            title: '4. Acceleration',
            content: `
                <h3>What is Acceleration?</h3>
                <p><strong>Acceleration</strong> is the rate of change of velocity with time.</p>
                <p class="formula">a = Δv / Δt = (v - u) / t</p>
                <ul>
                    <li>Vector quantity</li>
                    <li>SI Unit: m/s²</li>
                    <li>Can be positive (speeding up) or negative (slowing down)</li>
                </ul>
                
                <h3>Average Acceleration</h3>
                <p class="formula">a_avg = (v₂ - v₁) / (t₂ - t₁)</p>
                
                <h3>Instantaneous Acceleration</h3>
                <p class="formula">a = lim(Δt→0) Δv/Δt = dv/dt = d²x/dt²</p>
                
                <h3>Types of Acceleration</h3>
                <ul>
                    <li><strong>Positive Acceleration:</strong> Velocity increases with time (a > 0)</li>
                    <li><strong>Negative Acceleration (Retardation/Deceleration):</strong> Velocity decreases with time (a < 0)</li>
                    <li><strong>Zero Acceleration:</strong> Velocity remains constant (a = 0)</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example:</strong> A car accelerates from 10 m/s to 30 m/s in 5 seconds.
                    <br><br>
                    a = (v - u) / t = (30 - 10) / 5 = 20/5 = <strong>4 m/s²</strong>
                </div>
                
                <h3>Uniform vs Non-uniform Acceleration</h3>
                <p><strong>Uniform Acceleration:</strong> Acceleration remains constant (e.g., free fall)</p>
                <p><strong>Non-uniform Acceleration:</strong> Acceleration changes with time</p>
            `
        },
        
        {
            id: 'equations-of-motion',
            title: '5. Equations of Motion (Uniformly Accelerated Motion)',
            content: `
                <h3>Three Equations of Motion</h3>
                <p>For motion with constant acceleration:</p>
                
                <div class="formula-box">
                    <h4>First Equation: v = u + at</h4>
                    <p>Relates final velocity, initial velocity, acceleration, and time</p>
                    <br>
                    <strong>Derivation:</strong>
                    <br>a = (v - u) / t
                    <br>at = v - u
                    <br><strong>v = u + at</strong>
                </div>
                
                <div class="formula-box">
                    <h4>Second Equation: s = ut + ½at²</h4>
                    <p>Relates displacement, initial velocity, acceleration, and time</p>
                    <br>
                    <strong>Derivation:</strong>
                    <br>Average velocity = (u + v) / 2
                    <br>Displacement = Average velocity × time
                    <br>s = [(u + v) / 2] × t
                    <br>s = [(u + u + at) / 2] × t  [using v = u + at]
                    <br>s = [(2u + at) / 2] × t
                    <br>s = ut + ½at²
                </div>
                
                <div class="formula-box">
                    <h4>Third Equation: v² = u² + 2as</h4>
                    <p>Relates velocities, acceleration, and displacement (time-independent)</p>
                    <br>
                    <strong>Derivation:</strong>
                    <br>From first equation: t = (v - u) / a
                    <br>From second equation: s = ut + ½at²
                    <br>s = u[(v - u) / a] + ½a[(v - u) / a]²
                    <br>s = [u(v - u) / a] + [a(v - u)² / 2a²]
                    <br>2as = 2u(v - u) + (v - u)²
                    <br>2as = 2uv - 2u² + v² - 2uv + u²
                    <br>2as = v² - u²
                    <br><strong>v² = u² + 2as</strong>
                </div>
                
                <h3>Additional Useful Relations</h3>
                <p class="formula">s_nth = u + a(n - ½)</p>
                <p>Distance traveled in nth second</p>
                
                <p class="formula">v_avg = (u + v) / 2</p>
                <p>Average velocity for uniformly accelerated motion</p>
                
                <div class="important-box">
                    <strong>Sign Convention:</strong>
                    <ul>
                        <li>Choose a positive direction (usually right or upward)</li>
                        <li>Quantities in positive direction: positive sign</li>
                        <li>Quantities in opposite direction: negative sign</li>
                    </ul>
                </div>
            `
        },
        
        {
            id: 'graphs',
            title: '6. Motion Graphs',
            content: `
                <h3>Position-Time (x-t) Graph</h3>
                <ul>
                    <li><strong>Slope = Velocity</strong></li>
                    <li>Horizontal line → Object at rest</li>
                    <li>Straight line → Uniform velocity</li>
                    <li>Curved line → Non-uniform velocity (acceleration)</li>
                    <li>Positive slope → Motion in positive direction</li>
                    <li>Negative slope → Motion in negative direction</li>
                </ul>
                
                <h3>Velocity-Time (v-t) Graph</h3>
                <ul>
                    <li><strong>Slope = Acceleration</strong></li>
                    <li><strong>Area under curve = Displacement</strong></li>
                    <li>Horizontal line → Uniform velocity (zero acceleration)</li>
                    <li>Straight line → Uniform acceleration</li>
                    <li>Curved line → Non-uniform acceleration</li>
                    <li>Positive slope → Positive acceleration</li>
                    <li>Negative slope → Negative acceleration (retardation)</li>
                </ul>
                
                <h3>Acceleration-Time (a-t) Graph</h3>
                <ul>
                    <li><strong>Area under curve = Change in velocity</strong></li>
                    <li>Horizontal line → Uniform acceleration</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example:</strong> For a v-t graph showing a straight line from (0,10) to (5,30):
                    <br><br>
                    <strong>Acceleration:</strong> Slope = (30-10)/(5-0) = 20/5 = 4 m/s²
                    <br>
                    <strong>Displacement:</strong> Area = ½(10+30)×5 = ½×40×5 = 100 m
                </div>
                
                <h3>Important Graph Patterns</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Motion Type</th>
                            <th>x-t Graph</th>
                            <th>v-t Graph</th>
                            <th>a-t Graph</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rest</td>
                            <td>Horizontal line</td>
                            <td>On x-axis</td>
                            <td>On x-axis</td>
                        </tr>
                        <tr>
                            <td>Uniform velocity</td>
                            <td>Straight line</td>
                            <td>Horizontal line</td>
                            <td>On x-axis</td>
                        </tr>
                        <tr>
                            <td>Uniform acceleration</td>
                            <td>Parabola</td>
                            <td>Straight line</td>
                            <td>Horizontal line</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'free-fall',
            title: '7. Motion Under Gravity (Free Fall)',
            content: `
                <h3>Free Fall</h3>
                <p>Motion of an object under the influence of gravity alone (air resistance neglected).</p>
                
                <h3>Acceleration due to Gravity (g)</h3>
                <ul>
                    <li>g = 9.8 m/s² ≈ 10 m/s² (for calculations)</li>
                    <li>Always directed downward (toward Earth's center)</li>
                    <li>Same for all objects regardless of mass</li>
                </ul>
                
                <h3>Equations for Vertical Motion</h3>
                <p>Taking upward as positive direction:</p>
                
                <div class="formula-box">
                    <p><strong>For upward motion:</strong> a = -g</p>
                    <p>v = u - gt</p>
                    <p>h = ut - ½gt²</p>
                    <p>v² = u² - 2gh</p>
                </div>
                
                <div class="formula-box">
                    <p><strong>For downward motion:</strong> a = +g (if downward is positive)</p>
                    <p>v = u + gt</p>
                    <p>h = ut + ½gt²</p>
                    <p>v² = u² + 2gh</p>
                </div>
                
                <h3>Motion of Object Thrown Vertically Upward</h3>
                <ul>
                    <li><strong>Time to reach maximum height:</strong> t = u/g</li>
                    <li><strong>Maximum height:</strong> H = u²/2g</li>
                    <li><strong>Time of flight:</strong> T = 2u/g</li>
                    <li><strong>Velocity at maximum height:</strong> v = 0</li>
                    <li><strong>Velocity on return:</strong> Same as initial (but opposite direction)</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example:</strong> A ball is thrown upward with velocity 20 m/s. Find:
                    <br>(a) Maximum height (b) Time to reach max height (c) Total time in air
                    <br>(Take g = 10 m/s²)
                    <br><br>
                    <strong>Solution:</strong>
                    <br>(a) H = u²/2g = (20)²/(2×10) = 400/20 = <strong>20 m</strong>
                    <br>(b) t = u/g = 20/10 = <strong>2 s</strong>
                    <br>(c) T = 2u/g = 2×20/10 = <strong>4 s</strong>
                </div>
                
                <h3>Important Points</h3>
                <ul>
                    <li>At maximum height, velocity = 0 but acceleration = g (not zero!)</li>
                    <li>Time of ascent = Time of descent</li>
                    <li>Speed at any height while going up = Speed at same height while coming down</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Equations of Motion',
            problem: 'A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. Calculate (a) acceleration (b) distance covered.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                First convert to m/s:
                <br>u = 18 km/h = 18 × (5/18) = 5 m/s
                <br>v = 36 km/h = 36 × (5/18) = 10 m/s
                <br>t = 5 s
                <br><br>
                (a) Using v = u + at:
                <br>10 = 5 + a(5)
                <br>5 = 5a
                <br><strong>a = 1 m/s²</strong>
                <br><br>
                (b) Using s = ut + ½at²:
                <br>s = 5(5) + ½(1)(5)²
                <br>s = 25 + ½(25)
                <br>s = 25 + 12.5
                <br><strong>s = 37.5 m</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Free Fall',
            problem: 'A stone is dropped from a height of 80 m. Find (a) time taken to reach ground (b) velocity with which it hits the ground. (g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: u = 0 (dropped), h = 80 m, g = 10 m/s²
                <br><br>
                (a) Using h = ut + ½gt²:
                <br>80 = 0 + ½(10)t²
                <br>80 = 5t²
                <br>t² = 16
                <br><strong>t = 4 s</strong>
                <br><br>
                (b) Using v² = u² + 2gh:
                <br>v² = 0 + 2(10)(80)
                <br>v² = 1600
                <br><strong>v = 40 m/s</strong>
                <br><br>
                Alternative: v = u + gt = 0 + 10(4) = 40 m/s ✓
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Relative Motion',
            problem: 'Two trains are moving in opposite directions with speeds 60 km/h and 40 km/h. What is their relative speed?',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                When objects move in opposite directions, relative speed = sum of speeds
                <br><br>
                Relative speed = 60 + 40 = <strong>100 km/h</strong>
                <br><br>
                <strong>Note:</strong> If moving in same direction, relative speed = difference of speeds
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Distance in nth Second',
            problem: 'A particle starts from rest with acceleration 2 m/s². Find distance traveled in 5th second.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: u = 0, a = 2 m/s², n = 5
                <br><br>
                Using s_nth = u + a(n - ½):
                <br>s₅ = 0 + 2(5 - 0.5)
                <br>s₅ = 2(4.5)
                <br><strong>s₅ = 9 m</strong>
                <br><br>
                <strong>Verification:</strong>
                <br>Distance in 5 seconds: s₅ = ½(2)(5)² = 25 m
                <br>Distance in 4 seconds: s₄ = ½(2)(4)² = 16 m
                <br>Distance in 5th second = 25 - 16 = 9 m ✓
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'A body moving with uniform acceleration covers 200 m in first 2 s and 220 m in next 4 s. The acceleration is:',
            options: ['5 m/s²', '10 m/s²', '15 m/s²', '20 m/s²'],
            correct: 0,
            explanation: 'Using s = ut + ½at². For first 2s: 200 = 2u + 2a. For 6s total: 420 = 6u + 18a. Solving: a = 5 m/s²',
            difficulty: 'hard'
        },
        
        {
            id: 'p2',
            question: 'A car moving at 40 m/s is brought to rest in 8 s. The retardation is:',
            options: ['5 m/s²', '-5 m/s²', '10 m/s²', '-10 m/s²'],
            correct: 1,
            explanation: 'a = (v-u)/t = (0-40)/8 = -5 m/s². Negative sign indicates retardation.',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'The area under velocity-time graph represents:',
            options: ['Velocity', 'Acceleration', 'Displacement', 'Speed'],
            correct: 2,
            explanation: 'Area under v-t graph = displacement. Slope of v-t graph = acceleration.',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'A ball thrown vertically upward returns to thrower after 6 s. The maximum height reached is: (g = 10 m/s²)',
            options: ['45 m', '90 m', '135 m', '180 m'],
            correct: 0,
            explanation: 'Time to max height = 3s. u = gt = 30 m/s. H = u²/2g = 900/20 = 45 m',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'If a body starts from rest and travels with uniform acceleration, the distance covered in successive equal time intervals are in ratio:',
            options: ['1:2:3:4', '1:3:5:7', '1:4:9:16', '1:1:1:1'],
            correct: 1,
            explanation: 'Distance in nth second = u + a(n-½). For u=0: ratio is 1:3:5:7...',
            difficulty: 'hard'
        }
    ],
    
    keyPoints: [
        'Distance is scalar, displacement is vector',
        'Speed is scalar, velocity is vector',
        'Acceleration = rate of change of velocity',
        'Three equations of motion: v=u+at, s=ut+½at², v²=u²+2as',
        'Slope of x-t graph = velocity',
        'Slope of v-t graph = acceleration',
        'Area under v-t graph = displacement',
        'For free fall: use a = g (downward)',
        'At maximum height: v = 0, but a = g (not zero)',
        'Time of ascent = Time of descent'
    ],
    
    formulae: [
        {
            name: 'First Equation of Motion',
            formula: 'v = u + at',
            description: 'Final velocity in terms of initial velocity, acceleration, and time'
        },
        {
            name: 'Second Equation of Motion',
            formula: 's = ut + ½at²',
            description: 'Displacement in terms of initial velocity, acceleration, and time'
        },
        {
            name: 'Third Equation of Motion',
            formula: 'v² = u² + 2as',
            description: 'Velocity-displacement relation (time-independent)'
        },
        {
            name: 'Average Velocity',
            formula: 'v_avg = (u + v)/2',
            description: 'For uniformly accelerated motion'
        },
        {
            name: 'Distance in nth Second',
            formula: 's_n = u + a(n - ½)',
            description: 'Distance traveled in nth second'
        },
        {
            name: 'Maximum Height (Vertical)',
            formula: 'H = u²/2g',
            description: 'Maximum height for object thrown upward'
        },
        {
            name: 'Time of Flight (Vertical)',
            formula: 'T = 2u/g',
            description: 'Total time in air for object thrown upward'
        }
    ]
};

// Export for use in chapter viewer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_2;
}
</body>
</html>