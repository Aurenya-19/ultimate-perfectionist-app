<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Modern Physics - Chapter 2: Semiconductor Electronics
// Complete content with pn junction, diode, transistor, logic gates

const PHYSICS_SEMICONDUCTOR_1 = {
    id: 'physics-semiconductor-1',
    title: 'Semiconductor Electronics',
    subject: 'Physics',
    category: 'Modern Physics',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'semiconductors',
            title: '1. Semiconductors',
            content: `
                <h3>Classification</h3>
                <p><strong>Intrinsic:</strong> Pure semiconductor (Si, Ge)</p>
                <p><strong>Extrinsic:</strong> Doped semiconductor</p>
                
                <h3>Energy Bands</h3>
                <ul>
                    <li><strong>Valence band:</strong> Filled with electrons</li>
                    <li><strong>Conduction band:</strong> Empty at 0 K</li>
                    <li><strong>Band gap (Eg):</strong> Energy difference</li>
                </ul>
                
                <h3>Doping</h3>
                <p><strong>n-type:</strong> Pentavalent impurity (P, As, Sb)</p>
                <ul>
                    <li>Majority carriers: Electrons</li>
                    <li>Minority carriers: Holes</li>
                </ul>
                
                <p><strong>p-type:</strong> Trivalent impurity (B, Al, Ga)</p>
                <ul>
                    <li>Majority carriers: Holes</li>
                    <li>Minority carriers: Electrons</li>
                </ul>
            `
        },
        
        {
            id: 'pn-junction',
            title: '2. p-n Junction Diode',
            content: `
                <h3>Formation</h3>
                <p>p-type and n-type joined together</p>
                <p><strong>Depletion region:</strong> Region near junction (no free carriers)</p>
                
                <h3>Barrier Potential</h3>
                <p>Si: ~0.7 V, Ge: ~0.3 V</p>
                
                <h3>Biasing</h3>
                
                <h4>Forward Bias</h4>
                <p>p-side: positive, n-side: negative</p>
                <ul>
                    <li>Depletion region decreases</li>
                    <li>Current flows (low resistance)</li>
                </ul>
                
                <h4>Reverse Bias</h4>
                <p>p-side: negative, n-side: positive</p>
                <ul>
                    <li>Depletion region increases</li>
                    <li>Very small current (high resistance)</li>
                </ul>
                
                <h3>V-I Characteristics</h3>
                <p><strong>Forward:</strong> Exponential increase after barrier voltage</p>
                <p><strong>Reverse:</strong> Small reverse saturation current</p>
                <p><strong>Breakdown:</strong> Large current at high reverse voltage</p>
            `
        },
        
        {
            id: 'diode-applications',
            title: '3. Diode Applications',
            content: `
                <h3>Rectifier</h3>
                <p>Converts AC to DC</p>
                
                <h4>Half-Wave Rectifier</h4>
                <p>Uses one diode</p>
                <p>Output: Only positive/negative half cycles</p>
                <p>Efficiency: ~40.6%</p>
                
                <h4>Full-Wave Rectifier</h4>
                <p>Uses two/four diodes</p>
                <p>Output: Both half cycles rectified</p>
                <p>Efficiency: ~81.2%</p>
                
                <h3>Zener Diode</h3>
                <p>Operates in reverse breakdown</p>
                <p>Used as voltage regulator</p>
                <p>Maintains constant output voltage</p>
                
                <h3>LED (Light Emitting Diode)</h3>
                <p>Emits light in forward bias</p>
                <p>Energy: E = hf = eV</p>
                
                <h3>Photodiode</h3>
                <p>Reverse bias, light sensitive</p>
                <p>Current increases with light intensity</p>
            `
        },
        
        {
            id: 'transistor',
            title: '4. Transistor',
            content: `
                <h3>Types</h3>
                <p><strong>npn:</strong> n-p-n layers</p>
                <p><strong>pnp:</strong> p-n-p layers</p>
                
                <h3>Terminals</h3>
                <ul>
                    <li><strong>Emitter (E):</strong> Heavily doped, emits carriers</li>
                    <li><strong>Base (B):</strong> Thin, lightly doped</li>
                    <li><strong>Collector (C):</strong> Moderately doped, collects carriers</li>
                </ul>
                
                <h3>Current Relations</h3>
                <p class="formula">IE = IB + IC</p>
                
                <h3>Current Gain</h3>
                <p><strong>α (alpha):</strong> IC/IE (< 1)</p>
                <p><strong>β (beta):</strong> IC/IB (>> 1)</p>
                <p class="formula">β = α/(1-α)</p>
                
                <h3>Configurations</h3>
                <ul>
                    <li><strong>Common Emitter (CE):</strong> High voltage & current gain</li>
                    <li><strong>Common Base (CB):</strong> High voltage gain</li>
                    <li><strong>Common Collector (CC):</strong> High current gain</li>
                </ul>
                
                <h3>Transistor as Amplifier</h3>
                <p>Small input signal → Large output signal</p>
                <p>Voltage gain: Av = ΔVout/ΔVin</p>
            `
        },
        
        {
            id: 'logic-gates',
            title: '5. Logic Gates',
            content: `
                <h3>Basic Gates</h3>
                
                <h4>NOT Gate (Inverter)</h4>
                <p>Y = Ā</p>
                <p>Output is complement of input</p>
                
                <h4>OR Gate</h4>
                <p>Y = A + B</p>
                <p>Output 1 if any input is 1</p>
                
                <h4>AND Gate</h4>
                <p>Y = A · B</p>
                <p>Output 1 only if all inputs are 1</p>
                
                <h3>Universal Gates</h3>
                
                <h4>NAND Gate</h4>
                <p>Y = (A · B)' = Ā + B̄</p>
                <p>Can implement any logic function</p>
                
                <h4>NOR Gate</h4>
                <p>Y = (A + B)' = Ā · B̄</p>
                <p>Can implement any logic function</p>
                
                <h3>Other Gates</h3>
                <p><strong>XOR:</strong> Y = A ⊕ B (output 1 if inputs different)</p>
                <p><strong>XNOR:</strong> Y = (A ⊕ B)' (output 1 if inputs same)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Current Gain', problem: 'α = 0.98. Find β', solution: 'β = 0.98/(1-0.98) = 49'},
        {id: 'ex2', title: 'Transistor Current', problem: 'IE = 5mA, IB = 0.1mA. Find IC', solution: 'IC = IE - IB = 4.9 mA'},
        {id: 'ex3', title: 'LED Energy', problem: 'V = 2V. Find photon energy', solution: 'E = eV = 1.6×10⁻¹⁹×2 = 3.2×10⁻¹⁹ J'},
        {id: 'ex4', title: 'Logic', problem: 'NAND(1,1) = ?', solution: '(1·1)\' = 0'}
    ],
    
    problems: [
        {id: 'p1', question: 'n-type majority carriers:', options: ['Holes', 'Electrons', 'Protons', 'Neutrons'], correct: 1},
        {id: 'p2', question: 'Si barrier voltage:', options: ['0.3V', '0.7V', '1V', '1.5V'], correct: 1},
        {id: 'p3', question: 'IE = ?', options: ['IB+IC', 'IB-IC', 'IC-IB', 'IB×IC'], correct: 0},
        {id: 'p4', question: 'Universal gate:', options: ['OR', 'AND', 'NAND', 'NOT'], correct: 2},
        {id: 'p5', question: 'AND gate: 1·0 = ?', options: ['0', '1', 'Undefined', 'Both'], correct: 0}
    ],
    
    keyPoints: [
        'Intrinsic: Pure, Extrinsic: Doped',
        'n-type: Pentavalent, electrons majority',
        'p-type: Trivalent, holes majority',
        'Forward bias: Low resistance',
        'Reverse bias: High resistance',
        'Si barrier: 0.7V, Ge: 0.3V',
        'IE = IB + IC',
        'β = IC/IB, α = IC/IE',
        'NAND, NOR: Universal gates',
        'LED: Light in forward bias'
    ],
    
    formulae: [
        {name: 'Transistor Current', formula: 'IE = IB + IC'},
        {name: 'Current Gain β', formula: 'β = IC/IB'},
        {name: 'Current Gain α', formula: 'α = IC/IE'},
        {name: 'Relation', formula: 'β = α/(1-α)'},
        {name: 'LED Energy', formula: 'E = eV = hf'}
    ]
};
window.PHYSICS_SEMICONDUCTOR_1 = PHYSICS_SEMICONDUCTOR_1;
</body>
</html>