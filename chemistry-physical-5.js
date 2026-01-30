<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 5: Electrochemistry
// Complete content with cells, Nernst equation, electrolysis, conductance

const CHEMISTRY_PHYSICAL_5 = {
    id: 'chemistry-physical-5',
    title: 'Electrochemistry',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'electrochemical-cells',
            title: '1. Electrochemical Cells',
            content: `
                <h3>Galvanic/Voltaic Cell</h3>
                <p>Converts chemical energy to electrical energy</p>
                <p>Spontaneous reaction (ΔG < 0)</p>
                
                <h3>Cell Notation</h3>
                <p>Anode | Anode solution || Cathode solution | Cathode</p>
                <p>Example: Zn | Zn²⁺ || Cu²⁺ | Cu</p>
                
                <h3>EMF of Cell</h3>
                <p class="formula">E°cell = E°cathode - E°anode</p>
                
                <h3>Standard Electrode Potential</h3>
                <p>Measured against SHE (Standard Hydrogen Electrode)</p>
                <p>SHE: 2H⁺ + 2e⁻ → H₂, E° = 0 V</p>
            `
        },
        
        {
            id: 'nernst-equation',
            title: '2. Nernst Equation',
            content: `
                <h3>For Cell</h3>
                <p class="formula">Ecell = E°cell - (RT/nF) ln Q</p>
                <p>At 25°C:</p>
                <p class="formula">Ecell = E°cell - (0.059/n) log Q</p>
                
                <h3>For Electrode</h3>
                <p class="formula">E = E° - (0.059/n) log([Red]/[Ox])</p>
                
                <h3>At Equilibrium</h3>
                <p>Ecell = 0</p>
                <p class="formula">E°cell = (0.059/n) log K</p>
                
                <h3>Relation with ΔG</h3>
                <p class="formula">ΔG = -nFEcell</p>
                <p class="formula">ΔG° = -nFE°cell</p>
            `
        },
        
        {
            id: 'conductance',
            title: '3. Electrolytic Conductance',
            content: `
                <h3>Conductance (G)</h3>
                <p class="formula">G = 1/R</p>
                <p><strong>SI Unit:</strong> Siemens (S) or mho (℧)</p>
                
                <h3>Conductivity (κ)</h3>
                <p class="formula">κ = (1/R) × (l/A)</p>
                <p><strong>SI Unit:</strong> S/m</p>
                
                <h3>Molar Conductivity (Λm)</h3>
                <p class="formula">Λm = κ/C</p>
                <p>Where C = concentration (mol/m³)</p>
                <p><strong>SI Unit:</strong> S·m²/mol</p>
                
                <h3>Kohlrausch's Law</h3>
                <p class="formula">Λ°m = λ°+ + λ°-</p>
                <p>At infinite dilution, molar conductivity = sum of ionic conductivities</p>
            `
        },
        
        {
            id: 'electrolysis',
            title: "4. Electrolysis & Faraday's Laws",
            content: `
                <h3>Electrolytic Cell</h3>
                <p>Converts electrical energy to chemical energy</p>
                <p>Non-spontaneous reaction (ΔG > 0)</p>
                
                <h3>Faraday's First Law</h3>
                <p class="formula">m ∝ Q</p>
                <p class="formula">m = ZQ = Zit</p>
                <p>Where Z = electrochemical equivalent</p>
                
                <h3>Faraday's Second Law</h3>
                <p class="formula">m = (M/nF) × Q</p>
                <p>Where:</p>
                <ul>
                    <li>M = molar mass</li>
                    <li>n = electrons transferred</li>
                    <li>F = 96500 C/mol (Faraday constant)</li>
                </ul>
                
                <h3>Products of Electrolysis</h3>
                <p><strong>Cathode:</strong> Reduction (cation discharge)</p>
                <p><strong>Anode:</strong> Oxidation (anion discharge)</p>
            `
        },
        
        {
            id: 'batteries',
            title: '5. Batteries and Fuel Cells',
            content: `
                <h3>Primary Cells</h3>
                <p>Non-rechargeable</p>
                <p><strong>Example:</strong> Dry cell, Mercury cell</p>
                
                <h3>Secondary Cells</h3>
                <p>Rechargeable</p>
                <p><strong>Example:</strong> Lead-acid battery, Li-ion</p>
                
                <h3>Lead-Acid Battery</h3>
                <p>Anode: Pb</p>
                <p>Cathode: PbO₂</p>
                <p>Electrolyte: H₂SO₄</p>
                <p>E°cell ≈ 2 V</p>
                
                <h3>Fuel Cell</h3>
                <p>Continuous supply of reactants</p>
                <p><strong>H₂-O₂ Fuel Cell:</strong></p>
                <p>2H₂ + O₂ → 2H₂O</p>
                <p>E°cell ≈ 1.23 V</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'EMF Calculation', problem: 'E°(Cu²⁺/Cu)=0.34V, E°(Zn²⁺/Zn)=-0.76V. Find E°cell', solution: 'E°cell = 0.34-(-0.76) = 1.10 V'},
        {id: 'ex2', title: 'Nernst Equation', problem: 'E°=1.1V, n=2, [Zn²⁺]=0.1M, [Cu²⁺]=1M. Find E', solution: 'E = 1.1 - 0.059/2 × log(0.1/1) = 1.13 V'},
        {id: 'ex3', title: 'Faraday Law', problem: 'Cu²⁺, Q=96500C. Find mass deposited', solution: 'm = (64/2×96500)×96500 = 32 g'},
        {id: 'ex4', title: 'ΔG from E', problem: 'E°=1.1V, n=2. Find ΔG°', solution: 'ΔG° = -2×96500×1.1 = -212.3 kJ'}
    ],
    
    problems: [
        {id: 'p1', question: 'Galvanic cell: ΔG is:', options: ['>0', '<0', '=0', 'Infinite'], correct: 1},
        {id: 'p2', question: 'SHE potential:', options: ['0 V', '1 V', '-1 V', '0.5 V'], correct: 0},
        {id: 'p3', question: 'ΔG = ?', options: ['nFE', '-nFE', 'nF/E', 'E/nF'], correct: 1},
        {id: 'p4', question: 'Faraday constant:', options: ['96500 C', '96500 J', '96500 V', '96500 A'], correct: 0},
        {id: 'p5', question: 'At cathode:', options: ['Oxidation', 'Reduction', 'Both', 'Neither'], correct: 1}
    ],
    
    keyPoints: [
        'Galvanic: Chemical → Electrical',
        'E°cell = E°cathode - E°anode',
        'Nernst: E = E° - (0.059/n)logQ',
        'ΔG = -nFEcell',
        'Conductivity: κ = G×(l/A)',
        'Λm = κ/C',
        'Kohlrausch: Λ°m = λ°+ + λ°-',
        'Faraday: m = (M/nF)×Q',
        'Cathode: Reduction',
        'Anode: Oxidation'
    ],
    
    formulae: [
        {name: 'Cell EMF', formula: 'E°cell = E°cathode - E°anode'},
        {name: 'Nernst Equation', formula: 'E = E° - (0.059/n)logQ'},
        {name: 'Gibbs Energy', formula: 'ΔG = -nFEcell'},
        {name: 'Molar Conductivity', formula: 'Λm = κ/C'},
        {name: 'Faraday Law', formula: 'm = (M/nF)×Q'}
    ]
};
window.CHEMISTRY_PHYSICAL_5 = CHEMISTRY_PHYSICAL_5;
</body>
</html>