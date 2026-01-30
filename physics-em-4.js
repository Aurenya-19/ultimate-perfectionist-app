<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Electromagnetism - Chapter 4: Electromagnetic Induction & AC
// Complete content with Faraday's law, Lenz law, inductance, AC circuits

const PHYSICS_EM_4 = {
    id: 'physics-em-4',
    title: 'Electromagnetic Induction and AC',
    subject: 'Physics',
    category: 'Electromagnetism',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'faraday-law',
            title: "1. Faraday's Laws of EMI",
            content: `
                <h3>First Law</h3>
                <p>Change in magnetic flux induces EMF</p>
                
                <h3>Second Law</h3>
                <p class="formula">ε = -dΦ/dt</p>
                <p>For N turns: ε = -N(dΦ/dt)</p>
                
                <h3>Magnetic Flux</h3>
                <p class="formula">Φ = B⃗·A⃗ = BA cos θ</p>
                <p><strong>SI Unit:</strong> Weber (Wb)</p>
                
                <h3>Lenz's Law</h3>
                <p><strong>"Induced current opposes the change causing it"</strong></p>
                <p>Explains negative sign in Faraday's law</p>
            `
        },
        
        {
            id: 'motional-emf',
            title: '2. Motional EMF',
            content: `
                <h3>Rod Moving in Magnetic Field</h3>
                <p class="formula">ε = BLv</p>
                <p>Where L = length, v = velocity</p>
                
                <h3>Rotating Coil</h3>
                <p class="formula">ε = NABω sin(ωt)</p>
                <p>Maximum EMF: ε₀ = NABω</p>
                
                <h3>Eddy Currents</h3>
                <p>Circulating currents in conductors</p>
                <ul>
                    <li>Cause energy loss (heating)</li>
                    <li>Used in: Induction furnace, speedometer</li>
                    <li>Reduced by: Lamination</li>
                </ul>
            `
        },
        
        {
            id: 'inductance',
            title: '3. Self and Mutual Inductance',
            content: `
                <h3>Self Inductance (L)</h3>
                <p class="formula">ε = -L(dI/dt)</p>
                <p class="formula">Φ = LI</p>
                <p><strong>SI Unit:</strong> Henry (H)</p>
                
                <h3>Solenoid Inductance</h3>
                <p class="formula">L = μ₀n²Al</p>
                <p>Where n = turns/length, A = area, l = length</p>
                
                <h3>Mutual Inductance (M)</h3>
                <p class="formula">ε₂ = -M(dI₁/dt)</p>
                <p class="formula">M = μ₀n₁n₂Al</p>
                
                <h3>Energy in Inductor</h3>
                <p class="formula">U = ½LI²</p>
            `
        },
        
        {
            id: 'ac-circuits',
            title: '4. AC Circuits',
            content: `
                <h3>AC Voltage/Current</h3>
                <p class="formula">V = V₀ sin(ωt)</p>
                <p class="formula">I = I₀ sin(ωt + φ)</p>
                
                <h3>RMS Values</h3>
                <p class="formula">Vrms = V₀/√2</p>
                <p class="formula">Irms = I₀/√2</p>
                
                <h3>Reactance</h3>
                <p><strong>Inductive:</strong> XL = ωL = 2πfL</p>
                <p><strong>Capacitive:</strong> XC = 1/(ωC) = 1/(2πfC)</p>
                
                <h3>Impedance</h3>
                <p class="formula">Z = √(R² + (XL - XC)²)</p>
                
                <h3>Phase Difference</h3>
                <p class="formula">tan φ = (XL - XC)/R</p>
            `
        },
        
        {
            id: 'lcr-circuit',
            title: '5. LCR Series Circuit',
            content: `
                <h3>Impedance</h3>
                <p class="formula">Z = √[R² + (ωL - 1/ωC)²]</p>
                
                <h3>Current</h3>
                <p class="formula">I = V/Z</p>
                
                <h3>Resonance</h3>
                <p>When XL = XC:</p>
                <p class="formula">ω₀ = 1/√(LC)</p>
                <p>At resonance:</p>
                <ul>
                    <li>Z = R (minimum)</li>
                    <li>I = V/R (maximum)</li>
                    <li>φ = 0 (in phase)</li>
                </ul>
                
                <h3>Power</h3>
                <p class="formula">P = Vrms × Irms × cos φ</p>
                <p>Power factor = cos φ = R/Z</p>
            `
        },
        
        {
            id: 'transformer',
            title: '6. Transformer',
            content: `
                <h3>Principle</h3>
                <p>Mutual induction between coils</p>
                
                <h3>Transformer Equation</h3>
                <p class="formula">Vs/Vp = Ns/Np = Ip/Is</p>
                
                <h3>Types</h3>
                <ul>
                    <li><strong>Step-up:</strong> Ns > Np, Vs > Vp</li>
                    <li><strong>Step-down:</strong> Ns < Np, Vs < Vp</li>
                </ul>
                
                <h3>Efficiency</h3>
                <p class="formula">η = (Output power)/(Input power) × 100%</p>
                
                <h3>Energy Losses</h3>
                <ul>
                    <li>Copper loss (I²R)</li>
                    <li>Iron loss (hysteresis, eddy currents)</li>
                    <li>Flux leakage</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: "Faraday's Law", problem: 'Φ changes from 0.5 to 0.1 Wb in 0.2s. Find ε', solution: 'ε = -ΔΦ/Δt = -(0.1-0.5)/0.2 = 2 V'},
        {id: 'ex2', title: 'Motional EMF', problem: 'B=0.5T, L=2m, v=10m/s. Find ε', solution: 'ε = BLv = 0.5×2×10 = 10 V'},
        {id: 'ex3', title: 'Resonance', problem: 'L=1H, C=1μF. Find f₀', solution: 'f₀ = 1/(2π√LC) = 159 Hz'},
        {id: 'ex4', title: 'Transformer', problem: 'Np=100, Ns=500, Vp=220V. Find Vs', solution: 'Vs = Vp(Ns/Np) = 220×5 = 1100 V'}
    ],
    
    problems: [
        {id: 'p1', question: 'EMI: ε = ?', options: ['-dΦ/dt', 'dΦ/dt', 'Φ/t', 'BLv'], correct: 0},
        {id: 'p2', question: 'SI unit of inductance:', options: ['Weber', 'Tesla', 'Henry', 'Farad'], correct: 2},
        {id: 'p3', question: 'Vrms = ?', options: ['V₀', 'V₀/2', 'V₀/√2', '√2V₀'], correct: 2},
        {id: 'p4', question: 'At resonance, Z = ?', options: ['R', 'XL', 'XC', '0'], correct: 0},
        {id: 'p5', question: 'Step-up transformer:', options: ['Ns>Np', 'Ns<Np', 'Ns=Np', 'None'], correct: 0}
    ],
    
    keyPoints: [
        'ε = -dΦ/dt (Faraday)',
        'Lenz: Opposes change',
        'Motional EMF: ε = BLv',
        'Self inductance: ε = -L(dI/dt)',
        'Vrms = V₀/√2',
        'XL = ωL, XC = 1/(ωC)',
        'Z = √[R² + (XL-XC)²]',
        'Resonance: ω₀ = 1/√(LC)',
        'Power: P = VIcosφ',
        'Transformer: Vs/Vp = Ns/Np'
    ],
    
    formulae: [
        {name: "Faraday's Law", formula: 'ε = -N(dΦ/dt)'},
        {name: 'Motional EMF', formula: 'ε = BLv'},
        {name: 'Self Inductance', formula: 'ε = -L(dI/dt)'},
        {name: 'Impedance', formula: 'Z = √[R² + (XL-XC)²]'},
        {name: 'Resonance', formula: 'ω₀ = 1/√(LC)'},
        {name: 'Transformer', formula: 'Vs/Vp = Ns/Np'}
    ]
};
window.PHYSICS_EM_4 = PHYSICS_EM_4;
</body>
</html>