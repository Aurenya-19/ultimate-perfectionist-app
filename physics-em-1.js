<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Electromagnetism - Chapter 1: Electrostatics
// Complete content with Coulomb's law, electric field, potential, Gauss law, capacitors

const PHYSICS_EM_1 = {
    id: 'physics-em-1',
    title: 'Electrostatics',
    subject: 'Physics',
    category: 'Electromagnetism',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'electric-charge',
            title: '1. Electric Charge',
            content: `
                <h3>What is Electric Charge?</h3>
                <p>Fundamental property of matter that causes electromagnetic interactions</p>
                
                <h3>Types of Charges</h3>
                <ul>
                    <li><strong>Positive charge:</strong> Deficiency of electrons (protons)</li>
                    <li><strong>Negative charge:</strong> Excess of electrons</li>
                </ul>
                
                <h3>Properties of Electric Charge</h3>
                
                <h4>1. Quantization</h4>
                <p>Charge exists in discrete packets</p>
                <p class="formula">Q = ne</p>
                <p>Where e = 1.6 × 10⁻¹⁹ C (elementary charge)</p>
                
                <h4>2. Conservation</h4>
                <p>Total charge in isolated system remains constant</p>
                <p>Charge can neither be created nor destroyed</p>
                
                <h4>3. Additive Nature</h4>
                <p>Total charge = algebraic sum of individual charges</p>
                
                <h4>4. Like charges repel, unlike charges attract</h4>
                
                <h3>SI Unit</h3>
                <p><strong>Coulomb (C)</strong></p>
                <p>1 C = charge flowing through conductor when 1 A current flows for 1 s</p>
                
                <h3>Methods of Charging</h3>
                <ul>
                    <li><strong>Friction:</strong> Transfer by rubbing</li>
                    <li><strong>Conduction:</strong> Transfer by contact</li>
                    <li><strong>Induction:</strong> Charging without contact</li>
                </ul>
            `
        },
        
        {
            id: 'coulombs-law',
            title: "2. Coulomb's Law",
            content: `
                <h3>Statement</h3>
                <p><strong>"Force between two point charges is directly proportional to product of charges and inversely proportional to square of distance between them"</strong></p>
                
                <p class="formula">F = k(q₁q₂)/r²</p>
                
                <p>Where:</p>
                <ul>
                    <li>k = 1/(4πε₀) = 9 × 10⁹ N⋅m²/C²</li>
                    <li>ε₀ = 8.85 × 10⁻¹² C²/N⋅m² (permittivity of free space)</li>
                    <li>q₁, q₂ = charges</li>
                    <li>r = distance between charges</li>
                </ul>
                
                <h3>Vector Form</h3>
                <p class="formula">F⃗ = k(q₁q₂)/r² · r̂</p>
                
                <h3>In Medium</h3>
                <p class="formula">F = k(q₁q₂)/(εᵣr²)</p>
                <p>Where εᵣ = relative permittivity (dielectric constant)</p>
                
                <h3>Comparison with Gravitation</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Gravitational</th>
                            <th>Electrostatic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nature</td>
                            <td>Always attractive</td>
                            <td>Attractive or repulsive</td>
                        </tr>
                        <tr>
                            <td>Strength</td>
                            <td>Very weak</td>
                            <td>Very strong</td>
                        </tr>
                        <tr>
                            <td>Depends on</td>
                            <td>Mass</td>
                            <td>Charge</td>
                        </tr>
                        <tr>
                            <td>Constant</td>
                            <td>G = 6.67×10⁻¹¹</td>
                            <td>k = 9×10⁹</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'electric-field',
            title: '3. Electric Field',
            content: `
                <h3>Definition</h3>
                <p>Region around charge where electric force is experienced</p>
                
                <h3>Electric Field Intensity (E)</h3>
                <p>Force per unit positive charge</p>
                <p class="formula">E⃗ = F⃗/q₀</p>
                
                <p><strong>SI Unit:</strong> N/C or V/m</p>
                
                <h3>Due to Point Charge</h3>
                <p class="formula">E = kq/r²</p>
                
                <h3>Direction</h3>
                <ul>
                    <li>Away from positive charge</li>
                    <li>Towards negative charge</li>
                </ul>
                
                <h3>Electric Field Lines</h3>
                <p><strong>Properties:</strong></p>
                <ul>
                    <li>Start from positive, end at negative charge</li>
                    <li>Never cross each other</li>
                    <li>Tangent gives direction of field</li>
                    <li>Density indicates field strength</li>
                    <li>Perpendicular to conductor surface</li>
                </ul>
                
                <h3>Superposition Principle</h3>
                <p>Net field = vector sum of individual fields</p>
                <p class="formula">E⃗_net = E⃗₁ + E⃗₂ + E⃗₃ + ...</p>
            `
        },
        
        {
            id: 'electric-potential',
            title: '4. Electric Potential',
            content: `
                <h3>Electric Potential Energy</h3>
                <p>Work done to bring charge from infinity to that point</p>
                <p class="formula">U = kq₁q₂/r</p>
                
                <h3>Electric Potential (V)</h3>
                <p>Potential energy per unit charge</p>
                <p class="formula">V = U/q = kQ/r</p>
                
                <p><strong>SI Unit:</strong> Volt (V) = J/C</p>
                
                <h3>Potential Difference</h3>
                <p>Work done per unit charge in moving from A to B</p>
                <p class="formula">V_AB = V_A - V_B = W_AB/q</p>
                
                <h3>Relation between E and V</h3>
                <p class="formula">E = -dV/dr</p>
                <p>Electric field = negative gradient of potential</p>
                
                <h3>Equipotential Surfaces</h3>
                <p>Surfaces where potential is constant</p>
                <ul>
                    <li>No work done in moving charge on equipotential surface</li>
                    <li>Electric field perpendicular to equipotential surface</li>
                    <li>For point charge: concentric spheres</li>
                </ul>
                
                <h3>Potential Due to Multiple Charges</h3>
                <p>Scalar addition (no vector addition needed)</p>
                <p class="formula">V = V₁ + V₂ + V₃ + ...</p>
            `
        },
        
        {
            id: 'gauss-law',
            title: "5. Gauss's Law",
            content: `
                <h3>Electric Flux (Φ)</h3>
                <p>Number of electric field lines passing through surface</p>
                <p class="formula">Φ = E⃗ · A⃗ = EA cos θ</p>
                
                <p><strong>SI Unit:</strong> N⋅m²/C or V⋅m</p>
                
                <h3>Gauss's Law</h3>
                <p><strong>"Total electric flux through closed surface = charge enclosed / ε₀"</strong></p>
                
                <p class="formula">Φ = Q_enclosed/ε₀</p>
                
                <h3>Applications</h3>
                
                <h4>1. Field due to Infinite Line Charge</h4>
                <p class="formula">E = λ/(2πε₀r)</p>
                <p>Where λ = linear charge density</p>
                
                <h4>2. Field due to Infinite Plane Sheet</h4>
                <p class="formula">E = σ/(2ε₀)</p>
                <p>Where σ = surface charge density</p>
                
                <h4>3. Field due to Spherical Shell</h4>
                <ul>
                    <li>Outside (r > R): E = kQ/r²</li>
                    <li>On surface (r = R): E = kQ/R²</li>
                    <li>Inside (r < R): E = 0</li>
                </ul>
            `
        },
        
        {
            id: 'capacitors',
            title: '6. Capacitors',
            content: `
                <h3>Capacitance</h3>
                <p>Ability to store charge</p>
                <p class="formula">C = Q/V</p>
                
                <p><strong>SI Unit:</strong> Farad (F) = C/V</p>
                <p>1 F = 10⁶ μF = 10⁹ nF = 10¹² pF</p>
                
                <h3>Parallel Plate Capacitor</h3>
                <p class="formula">C = ε₀A/d</p>
                <p>Where A = area, d = separation</p>
                
                <h3>With Dielectric</h3>
                <p class="formula">C = εᵣε₀A/d = εᵣC₀</p>
                
                <h3>Energy Stored</h3>
                <p class="formula">U = ½QV = ½CV² = Q²/(2C)</p>
                
                <h3>Combinations</h3>
                
                <h4>Series:</h4>
                <p class="formula">1/C_eq = 1/C₁ + 1/C₂ + 1/C₃</p>
                <ul>
                    <li>Same charge on all</li>
                    <li>Voltages add</li>
                </ul>
                
                <h4>Parallel:</h4>
                <p class="formula">C_eq = C₁ + C₂ + C₃</p>
                <ul>
                    <li>Same voltage across all</li>
                    <li>Charges add</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: "Example 1: Coulomb's Law",
            problem: 'Two charges of 2 μC and 3 μC are 10 cm apart. Find force between them.',
            solution: `
                <strong>Solution:</strong>
                <br>q₁ = 2×10⁻⁶ C, q₂ = 3×10⁻⁶ C, r = 0.1 m
                <br><br>
                F = kq₁q₂/r²
                <br>= (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0.1)²
                <br>= (9×10⁹)(6×10⁻¹²)/0.01
                <br>= 54×10⁻³/0.01
                <br>= <strong>5.4 N (repulsive)</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Electric Field',
            problem: 'Find electric field at 30 cm from 5 μC charge.',
            solution: `
                <strong>Solution:</strong>
                <br>Q = 5×10⁻⁶ C, r = 0.3 m
                <br><br>
                E = kQ/r²
                <br>= (9×10⁹)(5×10⁻⁶)/(0.3)²
                <br>= 45×10³/0.09
                <br>= <strong>5×10⁵ N/C</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Capacitance',
            problem: 'Parallel plate capacitor has area 100 cm² and separation 2 mm. Find capacitance.',
            solution: `
                <strong>Solution:</strong>
                <br>A = 100 cm² = 10⁻² m², d = 2 mm = 2×10⁻³ m
                <br><br>
                C = ε₀A/d
                <br>= (8.85×10⁻¹²)(10⁻²)/(2×10⁻³)
                <br>= 8.85×10⁻¹⁴/2×10⁻³
                <br>= <strong>4.425×10⁻¹¹ F = 44.25 pF</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Energy in Capacitor',
            problem: 'A 10 μF capacitor is charged to 100 V. Find energy stored.',
            solution: `
                <strong>Solution:</strong>
                <br>C = 10 μF = 10×10⁻⁶ F, V = 100 V
                <br><br>
                U = ½CV²
                <br>= ½(10×10⁻⁶)(100)²
                <br>= ½(10×10⁻⁶)(10⁴)
                <br>= 5×10⁻²
                <br>= <strong>0.05 J = 50 mJ</strong>
            `,
            difficulty: 'easy'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'SI unit of electric charge is:',
            options: ['Ampere', 'Coulomb', 'Volt', 'Farad'],
            correct: 1,
            explanation: 'Coulomb (C) is SI unit of electric charge',
            difficulty: 'easy'
        },
        {
            id: 'p2',
            question: 'Electric field inside a conductor is:',
            options: ['Maximum', 'Minimum', 'Zero', 'Infinite'],
            correct: 2,
            explanation: 'Electric field inside conductor is zero in electrostatic equilibrium',
            difficulty: 'easy'
        },
        {
            id: 'p3',
            question: 'Capacitance increases when:',
            options: ['Area increases', 'Distance increases', 'Voltage increases', 'Charge decreases'],
            correct: 0,
            explanation: 'C = ε₀A/d, so capacitance increases with area',
            difficulty: 'easy'
        },
        {
            id: 'p4',
            question: 'In series combination of capacitors:',
            options: ['Charge same', 'Voltage same', 'Both same', 'Neither same'],
            correct: 0,
            explanation: 'In series, charge on all capacitors is same',
            difficulty: 'medium'
        },
        {
            id: 'p5',
            question: 'Electric potential is:',
            options: ['Vector', 'Scalar', 'Tensor', 'None'],
            correct: 1,
            explanation: 'Electric potential is a scalar quantity',
            difficulty: 'easy'
        }
    ],
    
    keyPoints: [
        'Charge quantized: Q = ne',
        'Charge conserved in isolated system',
        "Coulomb's law: F = kq₁q₂/r²",
        'Electric field: E = F/q = kQ/r²',
        'Electric potential: V = kQ/r',
        'E = -dV/dr (field = -gradient of potential)',
        "Gauss's law: Φ = Q/ε₀",
        'Capacitance: C = Q/V',
        'Parallel plate: C = ε₀A/d',
        'Energy: U = ½CV²'
    ],
    
    formulae: [
        { name: "Coulomb's Law", formula: 'F = kq₁q₂/r²', description: 'Force between charges' },
        { name: 'Electric Field', formula: 'E = kQ/r²', description: 'Field due to point charge' },
        { name: 'Electric Potential', formula: 'V = kQ/r', description: 'Potential due to point charge' },
        { name: "Gauss's Law", formula: 'Φ = Q/ε₀', description: 'Electric flux through closed surface' },
        { name: 'Capacitance', formula: 'C = Q/V = ε₀A/d', description: 'Parallel plate capacitor' },
        { name: 'Energy in Capacitor', formula: 'U = ½CV²', description: 'Energy stored' }
    ]
};

window.PHYSICS_EM_1 = PHYSICS_EM_1;
</body>
</html>