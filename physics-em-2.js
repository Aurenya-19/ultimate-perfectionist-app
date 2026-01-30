<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Electromagnetism - Chapter 2: Current Electricity
// Complete content with Ohm's law, resistance, circuits, Kirchhoff's laws, meters

const PHYSICS_EM_2 = {
    id: 'physics-em-2',
    title: 'Current Electricity',
    subject: 'Physics',
    category: 'Electromagnetism',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'electric-current',
            title: '1. Electric Current',
            content: `
                <h3>Definition</h3>
                <p>Rate of flow of electric charge</p>
                <p class="formula">I = Q/t</p>
                <p><strong>SI Unit:</strong> Ampere (A) = C/s</p>
                
                <h3>Direction of Current</h3>
                <ul>
                    <li><strong>Conventional current:</strong> Direction of positive charge flow (+ to -)</li>
                    <li><strong>Electron flow:</strong> Opposite to conventional current (- to +)</li>
                </ul>
                
                <h3>Drift Velocity</h3>
                <p>Average velocity of electrons in conductor</p>
                <p class="formula">I = neAvd</p>
                <p>Where: n = electron density, e = charge, A = area, vd = drift velocity</p>
                
                <h3>Current Density (J)</h3>
                <p class="formula">J = I/A = nevd</p>
                <p><strong>SI Unit:</strong> A/m²</p>
            `
        },
        
        {
            id: 'ohms-law',
            title: "2. Ohm's Law",
            content: `
                <h3>Statement</h3>
                <p><strong>"Current through conductor is directly proportional to potential difference, at constant temperature"</strong></p>
                
                <p class="formula">V = IR</p>
                
                <p>Where:</p>
                <ul>
                    <li>V = Potential difference (Volt)</li>
                    <li>I = Current (Ampere)</li>
                    <li>R = Resistance (Ohm, Ω)</li>
                </ul>
                
                <h3>Resistance (R)</h3>
                <p>Opposition to flow of current</p>
                <p class="formula">R = ρL/A</p>
                <p>Where: ρ = resistivity, L = length, A = area</p>
                
                <h3>Resistivity (ρ)</h3>
                <p>Material property, depends on temperature</p>
                <p><strong>SI Unit:</strong> Ω⋅m</p>
                
                <h3>Conductivity (σ)</h3>
                <p class="formula">σ = 1/ρ</p>
                <p><strong>SI Unit:</strong> S/m (Siemens per meter)</p>
                
                <h3>Temperature Dependence</h3>
                <p class="formula">R = R₀(1 + αΔT)</p>
                <p>Where α = temperature coefficient of resistance</p>
            `
        },
        
        {
            id: 'combinations',
            title: '3. Combination of Resistances',
            content: `
                <h3>Series Combination</h3>
                <p class="formula">Rs = R₁ + R₂ + R₃ + ...</p>
                
                <p><strong>Properties:</strong></p>
                <ul>
                    <li>Same current through all resistors</li>
                    <li>Voltages add: V = V₁ + V₂ + V₃</li>
                    <li>Equivalent resistance > individual resistances</li>
                </ul>
                
                <h3>Parallel Combination</h3>
                <p class="formula">1/Rp = 1/R₁ + 1/R₂ + 1/R₃ + ...</p>
                
                <p><strong>Properties:</strong></p>
                <ul>
                    <li>Same voltage across all resistors</li>
                    <li>Currents add: I = I₁ + I₂ + I₃</li>
                    <li>Equivalent resistance < smallest individual resistance</li>
                </ul>
                
                <h3>Special Cases</h3>
                <p><strong>Two resistors in parallel:</strong></p>
                <p class="formula">Rp = (R₁R₂)/(R₁ + R₂)</p>
                
                <p><strong>n equal resistors in series:</strong> Rs = nR</p>
                <p><strong>n equal resistors in parallel:</strong> Rp = R/n</p>
            `
        },
        
        {
            id: 'kirchhoff',
            title: "4. Kirchhoff's Laws",
            content: `
                <h3>Kirchhoff's Current Law (KCL)</h3>
                <p><strong>"Sum of currents entering a junction = Sum of currents leaving"</strong></p>
                <p class="formula">ΣIin = ΣIout</p>
                <p>Or: ΣI = 0 (algebraic sum)</p>
                
                <h3>Kirchhoff's Voltage Law (KVL)</h3>
                <p><strong>"Sum of potential differences in closed loop = 0"</strong></p>
                <p class="formula">ΣV = 0</p>
                
                <h3>Sign Convention</h3>
                <ul>
                    <li>Current entering junction: positive</li>
                    <li>Current leaving junction: negative</li>
                    <li>Voltage rise: positive</li>
                    <li>Voltage drop: negative</li>
                </ul>
                
                <h3>Applications</h3>
                <ul>
                    <li>Solving complex circuits</li>
                    <li>Finding unknown currents/voltages</li>
                    <li>Wheatstone bridge analysis</li>
                </ul>
            `
        },
        
        {
            id: 'cells',
            title: '5. Electric Cells and EMF',
            content: `
                <h3>Electromotive Force (EMF)</h3>
                <p>Maximum potential difference when no current flows</p>
                <p class="formula">ε = W/Q</p>
                
                <h3>Internal Resistance (r)</h3>
                <p>Resistance inside the cell</p>
                
                <h3>Terminal Voltage</h3>
                <p class="formula">V = ε - Ir</p>
                <p>Where I = current, r = internal resistance</p>
                
                <h3>Cells in Series</h3>
                <p class="formula">εeq = ε₁ + ε₂ + ε₃ + ...</p>
                <p class="formula">req = r₁ + r₂ + r₃ + ...</p>
                
                <h3>Cells in Parallel</h3>
                <p>For identical cells:</p>
                <p class="formula">εeq = ε</p>
                <p class="formula">req = r/n</p>
                
                <h3>Maximum Power Transfer</h3>
                <p>Power delivered to external resistance R is maximum when:</p>
                <p class="formula">R = r</p>
                <p class="formula">Pmax = ε²/(4r)</p>
            `
        },
        
        {
            id: 'meters',
            title: '6. Electrical Instruments',
            content: `
                <h3>Ammeter</h3>
                <p>Measures current, connected in <strong>series</strong></p>
                <ul>
                    <li>Low resistance (ideally zero)</li>
                    <li>Should not alter circuit current</li>
                </ul>
                
                <h3>Voltmeter</h3>
                <p>Measures voltage, connected in <strong>parallel</strong></p>
                <ul>
                    <li>High resistance (ideally infinite)</li>
                    <li>Should not draw current</li>
                </ul>
                
                <h3>Galvanometer</h3>
                <p>Detects small currents</p>
                
                <h4>Converting to Ammeter:</h4>
                <p>Add low resistance (shunt) in parallel</p>
                <p class="formula">S = (IgG)/(I - Ig)</p>
                
                <h4>Converting to Voltmeter:</h4>
                <p>Add high resistance in series</p>
                <p class="formula">R = (V/Ig) - G</p>
                
                <h3>Wheatstone Bridge</h3>
                <p>For balanced bridge:</p>
                <p class="formula">P/Q = R/S</p>
                <p>Used to measure unknown resistance accurately</p>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: "Example 1: Ohm's Law",
            problem: 'A 10 Ω resistor carries 2 A current. Find voltage across it.',
            solution: `<strong>Solution:</strong><br>V = IR = 2 × 10 = <strong>20 V</strong>`
        },
        {
            id: 'ex2',
            title: 'Example 2: Series Combination',
            problem: 'Three resistors 2Ω, 3Ω, 5Ω in series. Find equivalent resistance.',
            solution: `<strong>Solution:</strong><br>Rs = 2 + 3 + 5 = <strong>10 Ω</strong>`
        },
        {
            id: 'ex3',
            title: 'Example 3: Parallel Combination',
            problem: 'Two resistors 6Ω and 3Ω in parallel. Find equivalent.',
            solution: `<strong>Solution:</strong><br>Rp = (6×3)/(6+3) = 18/9 = <strong>2 Ω</strong>`
        },
        {
            id: 'ex4',
            title: 'Example 4: Cell with Internal Resistance',
            problem: 'Cell of EMF 12V, internal resistance 2Ω connected to 10Ω. Find current.',
            solution: `<strong>Solution:</strong><br>I = ε/(R+r) = 12/(10+2) = 12/12 = <strong>1 A</strong>`
        }
    ],
    
    problems: [
        {id: 'p1', question: 'SI unit of resistance is:', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], correct: 2, difficulty: 'easy'},
        {id: 'p2', question: 'Ammeter is connected in:', options: ['Series', 'Parallel', 'Either', 'Neither'], correct: 0, difficulty: 'easy'},
        {id: 'p3', question: 'In series, which is same?', options: ['Voltage', 'Current', 'Resistance', 'Power'], correct: 1, difficulty: 'easy'},
        {id: 'p4', question: 'KCL is based on:', options: ['Energy conservation', 'Charge conservation', 'Momentum', 'Mass'], correct: 1, difficulty: 'medium'},
        {id: 'p5', question: 'Voltmeter has:', options: ['Low R', 'High R', 'Zero R', 'Infinite R'], correct: 1, difficulty: 'easy'}
    ],
    
    keyPoints: [
        'Current: I = Q/t',
        "Ohm's law: V = IR",
        'Series: Rs = R₁ + R₂',
        'Parallel: 1/Rp = 1/R₁ + 1/R₂',
        'KCL: ΣI = 0',
        'KVL: ΣV = 0',
        'EMF: ε = V + Ir',
        'Ammeter: series, low R',
        'Voltmeter: parallel, high R',
        'Power: P = VI = I²R = V²/R'
    ],
    
    formulae: [
        {name: "Ohm's Law", formula: 'V = IR'},
        {name: 'Resistance', formula: 'R = ρL/A'},
        {name: 'Series', formula: 'Rs = R₁ + R₂ + R₃'},
        {name: 'Parallel', formula: '1/Rp = 1/R₁ + 1/R₂'},
        {name: 'Power', formula: 'P = VI = I²R = V²/R'},
        {name: 'EMF', formula: 'V = ε - Ir'}
    ]
};
window.PHYSICS_EM_2 = PHYSICS_EM_2;
</body>
</html>