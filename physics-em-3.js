<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Electromagnetism - Chapter 3: Magnetism and Magnetic Effects of Current
// Complete content with magnetic field, force, Biot-Savart, Ampere's law

const PHYSICS_EM_3 = {
    id: 'physics-em-3',
    title: 'Magnetism and Magnetic Effects of Current',
    subject: 'Physics',
    category: 'Electromagnetism',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'magnetic-field',
            title: '1. Magnetic Field',
            content: `
                <h3>Magnetic Field (B)</h3>
                <p>Region around magnet where magnetic force is experienced</p>
                <p><strong>SI Unit:</strong> Tesla (T) or Weber/m²</p>
                <p>1 T = 10⁴ Gauss</p>
                
                <h3>Magnetic Force on Moving Charge</h3>
                <p class="formula">F⃗ = q(v⃗ × B⃗)</p>
                <p class="formula">F = qvB sin θ</p>
                
                <h3>Lorentz Force</h3>
                <p>Combined electric and magnetic force:</p>
                <p class="formula">F⃗ = q(E⃗ + v⃗ × B⃗)</p>
                
                <h3>Motion in Magnetic Field</h3>
                <p>Circular motion with radius:</p>
                <p class="formula">r = mv/(qB)</p>
                <p>Time period: T = 2πm/(qB)</p>
            `
        },
        
        {
            id: 'biot-savart',
            title: "2. Biot-Savart Law",
            content: `
                <h3>Statement</h3>
                <p>Magnetic field due to current element:</p>
                <p class="formula">dB = (μ₀/4π) × (I dl sin θ)/r²</p>
                
                <h3>Applications</h3>
                
                <h4>1. Straight Wire</h4>
                <p class="formula">B = (μ₀I)/(2πr)</p>
                
                <h4>2. Circular Loop (at center)</h4>
                <p class="formula">B = (μ₀I)/(2R)</p>
                
                <h4>3. Circular Loop (on axis)</h4>
                <p class="formula">B = (μ₀IR²)/(2(R²+x²)^(3/2))</p>
                
                <h4>4. Solenoid</h4>
                <p class="formula">B = μ₀nI</p>
                <p>Where n = turns per unit length</p>
            `
        },
        
        {
            id: 'ampere-law',
            title: "3. Ampere's Circuital Law",
            content: `
                <h3>Statement</h3>
                <p class="formula">∮B⃗·dl⃗ = μ₀I_enclosed</p>
                
                <h3>Applications</h3>
                
                <h4>Infinite Wire:</h4>
                <p class="formula">B = (μ₀I)/(2πr)</p>
                
                <h4>Solenoid (inside):</h4>
                <p class="formula">B = μ₀nI</p>
                
                <h4>Toroid:</h4>
                <p class="formula">B = (μ₀NI)/(2πr)</p>
            `
        },
        
        {
            id: 'force-current',
            title: '4. Force on Current-Carrying Conductor',
            content: `
                <h3>Force on Straight Wire</h3>
                <p class="formula">F = BIL sin θ</p>
                
                <h3>Force Between Parallel Wires</h3>
                <p class="formula">F/L = (μ₀I₁I₂)/(2πd)</p>
                <ul>
                    <li>Same direction: Attractive</li>
                    <li>Opposite direction: Repulsive</li>
                </ul>
                
                <h3>Torque on Current Loop</h3>
                <p class="formula">τ = NIAB sin θ</p>
                <p class="formula">τ = M × B</p>
                <p>Where M = NIA (magnetic moment)</p>
            `
        },
        
        {
            id: 'moving-coil',
            title: '5. Moving Coil Galvanometer',
            content: `
                <h3>Principle</h3>
                <p>Torque on current-carrying coil in magnetic field</p>
                
                <h3>Deflection</h3>
                <p class="formula">θ = (NAB/k)I</p>
                <p>Where k = torsional constant</p>
                
                <h3>Current Sensitivity</h3>
                <p class="formula">Is = θ/I = NAB/k</p>
                
                <h3>Voltage Sensitivity</h3>
                <p class="formula">Vs = θ/V = NAB/(kR)</p>
            `
        },
        
        {
            id: 'magnetic-materials',
            title: '6. Magnetic Properties of Materials',
            content: `
                <h3>Types of Materials</h3>
                
                <h4>1. Diamagnetic</h4>
                <ul>
                    <li>Weakly repelled by magnet</li>
                    <li>χ < 0 (negative susceptibility)</li>
                    <li>Examples: Cu, Au, Bi</li>
                </ul>
                
                <h4>2. Paramagnetic</h4>
                <ul>
                    <li>Weakly attracted by magnet</li>
                    <li>χ > 0 (small positive)</li>
                    <li>Examples: Al, Pt, O₂</li>
                </ul>
                
                <h4>3. Ferromagnetic</h4>
                <ul>
                    <li>Strongly attracted by magnet</li>
                    <li>χ >> 0 (large positive)</li>
                    <li>Examples: Fe, Co, Ni</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Magnetic Force', problem: 'q=2C, v=3m/s, B=4T, θ=90°. Find F', solution: 'F = qvB = 2×3×4 = 24 N'},
        {id: 'ex2', title: 'Circular Motion', problem: 'm=1kg, v=10m/s, q=2C, B=5T. Find r', solution: 'r = mv/(qB) = 1×10/(2×5) = 1 m'},
        {id: 'ex3', title: 'Straight Wire', problem: 'I=10A, r=0.1m. Find B', solution: 'B = μ₀I/(2πr) = 2×10⁻⁵ T'},
        {id: 'ex4', title: 'Solenoid', problem: 'n=1000 turns/m, I=2A. Find B', solution: 'B = μ₀nI = 4π×10⁻⁷×1000×2 = 2.5×10⁻³ T'}
    ],
    
    problems: [
        {id: 'p1', question: 'SI unit of B:', options: ['Weber', 'Tesla', 'Gauss', 'Henry'], correct: 1},
        {id: 'p2', question: 'Force on charge in B: F = ?', options: ['qE', 'qvB', 'qv×B', 'qB'], correct: 2},
        {id: 'p3', question: 'B at center of loop:', options: ['μ₀I/2R', 'μ₀I/R', 'μ₀I/4R', '0'], correct: 0},
        {id: 'p4', question: 'Parallel wires, same I:', options: ['Attract', 'Repel', 'No force', 'Rotate'], correct: 0},
        {id: 'p5', question: 'Diamagnetic: χ is:', options: ['>0', '<0', '=0', '>>0'], correct: 1}
    ],
    
    keyPoints: [
        'F = q(v × B)',
        'r = mv/(qB) for circular motion',
        'Biot-Savart: dB = (μ₀/4π)(Idl sinθ)/r²',
        'Straight wire: B = μ₀I/(2πr)',
        'Solenoid: B = μ₀nI',
        'Ampere law: ∮B·dl = μ₀I',
        'Force on wire: F = BIL sinθ',
        'Parallel wires: F/L = μ₀I₁I₂/(2πd)',
        'Torque: τ = NIAB sinθ',
        'Magnetic moment: M = NIA'
    ],
    
    formulae: [
        {name: 'Lorentz Force', formula: 'F = q(v × B)'},
        {name: 'Circular Motion', formula: 'r = mv/(qB)'},
        {name: 'Biot-Savart', formula: 'dB = (μ₀/4π)(Idl sinθ)/r²'},
        {name: 'Straight Wire', formula: 'B = μ₀I/(2πr)'},
        {name: 'Solenoid', formula: 'B = μ₀nI'},
        {name: 'Force on Wire', formula: 'F = BIL sinθ'},
        {name: 'Torque', formula: 'τ = NIAB sinθ'}
    ]
};
window.PHYSICS_EM_3 = PHYSICS_EM_3;
</body>
</html>