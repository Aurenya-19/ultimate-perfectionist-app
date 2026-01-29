<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 4: Work, Energy and Power
// Complete content with work-energy theorem, conservation, collisions

const PHYSICS_MECHANICS_4 = {
    id: 'physics-mechanics-4',
    title: 'Work, Energy and Power',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'work',
            title: '1. Work',
            content: `
                <h3>Definition of Work</h3>
                <p>Work is said to be done when a force acts on a body and the body moves in the direction of force.</p>
                
                <p class="formula">W = F · s = Fs cos θ</p>
                
                <p>Where:</p>
                <ul>
                    <li>F = Force applied</li>
                    <li>s = Displacement</li>
                    <li>θ = Angle between force and displacement</li>
                </ul>
                
                <h3>SI Unit of Work</h3>
                <p><strong>Joule (J):</strong> 1 J = 1 N·m = 1 kg·m²/s²</p>
                
                <h3>Nature of Work</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Angle θ</th>
                            <th>cos θ</th>
                            <th>Work</th>
                            <th>Nature</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0°</td>
                            <td>1</td>
                            <td>W = Fs (maximum)</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>0° < θ < 90°</td>
                            <td>Positive</td>
                            <td>W > 0</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>90°</td>
                            <td>0</td>
                            <td>W = 0</td>
                            <td>Zero</td>
                        </tr>
                        <tr>
                            <td>90° < θ < 180°</td>
                            <td>Negative</td>
                            <td>W < 0</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>180°</td>
                            <td>-1</td>
                            <td>W = -Fs</td>
                            <td>Negative (max)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Important Cases</h3>
                <ul>
                    <li><strong>Circular motion:</strong> W = 0 (force ⊥ displacement)</li>
                    <li><strong>Friction:</strong> Always negative work (opposes motion)</li>
                    <li><strong>Gravity (upward):</strong> Negative work</li>
                    <li><strong>Gravity (downward):</strong> Positive work</li>
                </ul>
                
                <h3>Work Done by Variable Force</h3>
                <p class="formula">W = ∫F·ds</p>
                <p>Work = Area under F-s graph</p>
            `
        },
        
        {
            id: 'energy',
            title: '2. Energy',
            content: `
                <h3>What is Energy?</h3>
                <p>Capacity to do work. SI Unit: Joule (J)</p>
                
                <h3>Kinetic Energy (KE)</h3>
                <p>Energy possessed by a body due to its motion</p>
                
                <div class="formula-box">
                    <p class="formula">KE = ½mv²</p>
                    <br>
                    <strong>Derivation:</strong>
                    <br>Work done = Change in KE
                    <br>W = F·s = ma·s
                    <br>Using v² = u² + 2as (with u = 0):
                    <br>s = v²/2a
                    <br>W = ma·(v²/2a) = ½mv²
                </div>
                
                <p><strong>Alternative forms:</strong></p>
                <p class="formula">KE = p²/2m = ½m(v²)</p>
                <p>Where p = momentum = mv</p>
                
                <h3>Potential Energy (PE)</h3>
                <p>Energy possessed by a body due to its position or configuration</p>
                
                <h4>Gravitational Potential Energy</h4>
                <p class="formula">PE = mgh</p>
                <p>Where h = height above reference level</p>
                
                <h4>Elastic Potential Energy</h4>
                <p>Energy stored in stretched/compressed spring</p>
                <p class="formula">PE = ½kx²</p>
                <p>Where k = spring constant, x = extension/compression</p>
                
                <h3>Mechanical Energy</h3>
                <p class="formula">E = KE + PE</p>
                <p>Total mechanical energy = Kinetic + Potential</p>
            `
        },
        
        {
            id: 'work-energy-theorem',
            title: '3. Work-Energy Theorem',
            content: `
                <h3>Statement</h3>
                <p><strong>Work done by all forces = Change in kinetic energy</strong></p>
                
                <p class="formula">W_net = ΔKE = KE_final - KE_initial</p>
                <p class="formula">W_net = ½mv² - ½mu²</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A ball of mass 0.5 kg moving at 10 m/s is brought to rest by friction. Find work done by friction.
                    <br><br>
                    Initial KE = ½(0.5)(10)² = 25 J
                    <br>Final KE = 0
                    <br>W_friction = 0 - 25 = <strong>-25 J</strong>
                    <br>(Negative because friction opposes motion)
                </div>
                
                <h3>Applications</h3>
                <ul>
                    <li>Finding final velocity when work is known</li>
                    <li>Calculating stopping distance</li>
                    <li>Analyzing motion under variable forces</li>
                </ul>
            `
        },
        
        {
            id: 'conservation-of-energy',
            title: '4. Conservation of Energy',
            content: `
                <h3>Law of Conservation of Energy</h3>
                <p><strong>"Energy can neither be created nor destroyed, only converted from one form to another."</strong></p>
                
                <p>For conservative forces (like gravity):</p>
                <p class="formula">KE + PE = constant</p>
                <p class="formula">½mv² + mgh = constant</p>
                
                <h3>Conservative vs Non-Conservative Forces</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Conservative</th>
                            <th>Non-Conservative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Work independent of path</td>
                            <td>Work depends on path</td>
                        </tr>
                        <tr>
                            <td>Work in closed loop = 0</td>
                            <td>Work in closed loop ≠ 0</td>
                        </tr>
                        <tr>
                            <td>Mechanical energy conserved</td>
                            <td>Mechanical energy not conserved</td>
                        </tr>
                        <tr>
                            <td>Examples: Gravity, Spring</td>
                            <td>Examples: Friction, Air resistance</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Applications</h3>
                
                <h4>1. Free Fall</h4>
                <p>At height h: PE = mgh, KE = 0</p>
                <p>At ground: PE = 0, KE = ½mv²</p>
                <p>By conservation: mgh = ½mv² → v = √(2gh)</p>
                
                <h4>2. Pendulum</h4>
                <p>At highest point: All PE</p>
                <p>At lowest point: All KE</p>
                <p>mgh = ½mv² at any point</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A ball is dropped from height 20 m. Find velocity just before hitting ground. (g = 10 m/s²)
                    <br><br>
                    Using conservation: mgh = ½mv²
                    <br>gh = ½v²
                    <br>v² = 2gh = 2(10)(20) = 400
                    <br><strong>v = 20 m/s</strong>
                </div>
            `
        },
        
        {
            id: 'power',
            title: '5. Power',
            content: `
                <h3>Definition</h3>
                <p>Rate of doing work or rate of energy transfer</p>
                
                <p class="formula">P = W/t = dW/dt</p>
                
                <h3>SI Unit</h3>
                <p><strong>Watt (W):</strong> 1 W = 1 J/s</p>
                <p><strong>Other units:</strong></p>
                <ul>
                    <li>1 kilowatt (kW) = 1000 W</li>
                    <li>1 horsepower (hp) = 746 W</li>
                </ul>
                
                <h3>Power in Terms of Force and Velocity</h3>
                <p class="formula">P = F·v = Fv cos θ</p>
                
                <div class="formula-box">
                    <strong>Derivation:</strong>
                    <br>P = dW/dt = (F·ds)/dt = F·(ds/dt) = F·v
                </div>
                
                <h3>Average vs Instantaneous Power</h3>
                <p><strong>Average Power:</strong> P_avg = Total work / Total time</p>
                <p><strong>Instantaneous Power:</strong> P = dW/dt = F·v</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A car of mass 1000 kg accelerates from rest to 20 m/s in 10 s. Find average power.
                    <br><br>
                    Work done = Change in KE = ½(1000)(20)² - 0 = 200,000 J
                    <br>Average power = 200,000/10 = <strong>20,000 W = 20 kW</strong>
                </div>
            `
        },
        
        {
            id: 'collisions',
            title: '6. Collisions',
            content: `
                <h3>Types of Collisions</h3>
                
                <h4>1. Elastic Collision</h4>
                <p>Both momentum and kinetic energy are conserved</p>
                <ul>
                    <li>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (momentum)</li>
                    <li>½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂² (KE)</li>
                </ul>
                
                <p><strong>Coefficient of restitution: e = 1</strong></p>
                
                <h4>2. Inelastic Collision</h4>
                <p>Only momentum is conserved, KE is not conserved</p>
                <ul>
                    <li>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (momentum)</li>
                    <li>Some KE converted to heat, sound, deformation</li>
                </ul>
                
                <p><strong>Coefficient of restitution: 0 < e < 1</strong></p>
                
                <h4>3. Perfectly Inelastic Collision</h4>
                <p>Bodies stick together after collision</p>
                <p class="formula">m₁u₁ + m₂u₂ = (m₁ + m₂)v</p>
                <p><strong>Coefficient of restitution: e = 0</strong></p>
                <p>Maximum loss of KE</p>
                
                <h3>Coefficient of Restitution (e)</h3>
                <p class="formula">e = (v₂ - v₁)/(u₁ - u₂)</p>
                <p>Ratio of relative velocity after to before collision</p>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>e value</th>
                            <th>KE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elastic</td>
                            <td>e = 1</td>
                            <td>Conserved</td>
                        </tr>
                        <tr>
                            <td>Inelastic</td>
                            <td>0 < e < 1</td>
                            <td>Not conserved</td>
                        </tr>
                        <tr>
                            <td>Perfectly Inelastic</td>
                            <td>e = 0</td>
                            <td>Maximum loss</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Work Done',
            problem: 'A force of 10 N acts on a body at angle 60° with horizontal. If body moves 5 m, find work done.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: F = 10 N, θ = 60°, s = 5 m
                <br><br>
                W = Fs cos θ
                <br>= 10 × 5 × cos 60°
                <br>= 50 × 0.5
                <br><strong>= 25 J</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Conservation of Energy',
            problem: 'A ball of mass 2 kg is dropped from height 10 m. Find its velocity at height 6 m. (g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                At h = 10 m: PE = mgh = 2×10×10 = 200 J, KE = 0
                <br>Total energy = 200 J
                <br><br>
                At h = 6 m: PE = 2×10×6 = 120 J
                <br>By conservation: KE + PE = 200
                <br>KE = 200 - 120 = 80 J
                <br><br>
                ½mv² = 80
                <br>½(2)v² = 80
                <br>v² = 80
                <br><strong>v = 8.94 m/s</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Power',
            problem: 'A pump lifts 200 kg water per minute to height 10 m. Find power of pump. (g = 10 m/s²)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Mass lifted per second = 200/60 = 10/3 kg/s
                <br><br>
                Work done per second = mgh per second
                <br>= (10/3) × 10 × 10
                <br>= 1000/3 J/s
                <br><br>
                Power = Work/time = 1000/3 W
                <br><strong>≈ 333.3 W</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Collision',
            problem: 'Two balls of masses 2 kg and 3 kg moving with velocities 5 m/s and 2 m/s collide and stick together. Find common velocity.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: m₁ = 2 kg, u₁ = 5 m/s, m₂ = 3 kg, u₂ = 2 m/s
                <br><br>
                By momentum conservation:
                <br>m₁u₁ + m₂u₂ = (m₁ + m₂)v
                <br>2(5) + 3(2) = (2 + 3)v
                <br>10 + 6 = 5v
                <br>16 = 5v
                <br><strong>v = 3.2 m/s</strong>
            `,
            difficulty: 'easy'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'Work done in moving a body in circular path is:',
            options: ['Maximum', 'Minimum', 'Zero', 'Depends on radius'],
            correct: 2,
            explanation: 'In circular motion, force (centripetal) is perpendicular to displacement. W = Fs cos 90° = 0',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'A body of mass 2 kg moving with velocity 10 m/s. Its kinetic energy is:',
            options: ['20 J', '50 J', '100 J', '200 J'],
            correct: 2,
            explanation: 'KE = ½mv² = ½(2)(10)² = ½(2)(100) = 100 J',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'In elastic collision between two bodies:',
            options: ['Only momentum conserved', 'Only KE conserved', 'Both conserved', 'Neither conserved'],
            correct: 2,
            explanation: 'In elastic collision, both momentum and kinetic energy are conserved',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'Power of 100 W means:',
            options: ['100 J work in 1 s', '1 J work in 100 s', '100 J work in 100 s', '10 J work in 1 s'],
            correct: 0,
            explanation: 'Power = Work/time. 100 W = 100 J/s means 100 J work done in 1 second',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'A ball dropped from height h reaches ground with velocity v. If dropped from 4h, velocity will be:',
            options: ['v', '2v', '4v', '16v'],
            correct: 1,
            explanation: 'v = √(2gh). For 4h: v\' = √(2g×4h) = 2√(2gh) = 2v',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Work = F·s cos θ (scalar quantity)',
        'Work is zero when force ⊥ displacement (θ = 90°)',
        'KE = ½mv² = p²/2m',
        'PE (gravitational) = mgh',
        'PE (elastic) = ½kx²',
        'Work-Energy theorem: W_net = ΔKE',
        'Conservation of energy: KE + PE = constant (for conservative forces)',
        'Power = Work/time = F·v',
        '1 hp = 746 W',
        'Elastic collision: Both momentum and KE conserved (e = 1)',
        'Inelastic collision: Only momentum conserved (0 < e < 1)',
        'Perfectly inelastic: Bodies stick together (e = 0)'
    ],
    
    formulae: [
        {
            name: 'Work',
            formula: 'W = F·s cos θ',
            description: 'Work done by constant force'
        },
        {
            name: 'Kinetic Energy',
            formula: 'KE = ½mv² = p²/2m',
            description: 'Energy due to motion'
        },
        {
            name: 'Potential Energy (Gravity)',
            formula: 'PE = mgh',
            description: 'Gravitational potential energy'
        },
        {
            name: 'Potential Energy (Spring)',
            formula: 'PE = ½kx²',
            description: 'Elastic potential energy'
        },
        {
            name: 'Work-Energy Theorem',
            formula: 'W_net = ΔKE = ½mv² - ½mu²',
            description: 'Net work equals change in KE'
        },
        {
            name: 'Conservation of Energy',
            formula: 'KE + PE = constant',
            description: 'For conservative forces'
        },
        {
            name: 'Power',
            formula: 'P = W/t = F·v',
            description: 'Rate of doing work'
        },
        {
            name: 'Momentum Conservation',
            formula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
            description: 'In all collisions'
        },
        {
            name: 'Coefficient of Restitution',
            formula: 'e = (v₂ - v₁)/(u₁ - u₂)',
            description: 'Ratio of relative velocities'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_4;
}
window.PHYSICS_MECHANICS_4 = PHYSICS_MECHANICS_4;
</body>
</html>