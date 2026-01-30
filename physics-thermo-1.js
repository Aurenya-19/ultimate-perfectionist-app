<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Thermodynamics - Chapter 1: Thermodynamics
// Complete content with laws, processes, heat engines, Carnot cycle

const PHYSICS_THERMO_1 = {
    id: 'physics-thermo-1',
    title: 'Thermodynamics',
    subject: 'Physics',
    category: 'Thermodynamics',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Thermodynamic System</h3>
                <ul>
                    <li><strong>Open:</strong> Exchange mass & energy</li>
                    <li><strong>Closed:</strong> Exchange energy only</li>
                    <li><strong>Isolated:</strong> No exchange</li>
                </ul>
                
                <h3>State Variables</h3>
                <p>P (Pressure), V (Volume), T (Temperature)</p>
                
                <h3>Equation of State</h3>
                <p class="formula">PV = nRT</p>
                
                <h3>Internal Energy (U)</h3>
                <p>Total energy of system</p>
                <p>For ideal gas: U depends only on T</p>
            `
        },
        
        {
            id: 'zeroth-law',
            title: '2. Zeroth Law',
            content: `
                <h3>Statement</h3>
                <p><strong>"If A in equilibrium with C, and B in equilibrium with C, then A in equilibrium with B"</strong></p>
                
                <h3>Significance</h3>
                <p>Basis for temperature measurement</p>
                <p>Defines thermal equilibrium</p>
            `
        },
        
        {
            id: 'first-law',
            title: '3. First Law',
            content: `
                <h3>Statement</h3>
                <p><strong>"Energy can neither be created nor destroyed"</strong></p>
                
                <p class="formula">ΔU = Q - W</p>
                
                <p>Where:</p>
                <ul>
                    <li>ΔU = Change in internal energy</li>
                    <li>Q = Heat absorbed by system</li>
                    <li>W = Work done by system</li>
                </ul>
                
                <h3>Sign Convention</h3>
                <ul>
                    <li>Q > 0: Heat absorbed</li>
                    <li>Q < 0: Heat released</li>
                    <li>W > 0: Work done by system</li>
                    <li>W < 0: Work done on system</li>
                </ul>
            `
        },
        
        {
            id: 'processes',
            title: '4. Thermodynamic Processes',
            content: `
                <h3>1. Isothermal (T = constant)</h3>
                <p class="formula">PV = constant</p>
                <p class="formula">ΔU = 0, Q = W</p>
                <p class="formula">W = nRT ln(V₂/V₁)</p>
                
                <h3>2. Adiabatic (Q = 0)</h3>
                <p class="formula">PVᵞ = constant</p>
                <p class="formula">TVᵞ⁻¹ = constant</p>
                <p class="formula">ΔU = -W</p>
                <p>Where γ = Cp/Cv</p>
                
                <h3>3. Isobaric (P = constant)</h3>
                <p class="formula">V/T = constant</p>
                <p class="formula">W = PΔV</p>
                <p class="formula">Q = nCpΔT</p>
                
                <h3>4. Isochoric (V = constant)</h3>
                <p class="formula">P/T = constant</p>
                <p class="formula">W = 0</p>
                <p class="formula">Q = ΔU = nCvΔT</p>
            `
        },
        
        {
            id: 'second-law',
            title: '5. Second Law & Heat Engines',
            content: `
                <h3>Second Law</h3>
                <p><strong>Kelvin-Planck:</strong> "No engine can convert all heat to work"</p>
                <p><strong>Clausius:</strong> "Heat cannot flow from cold to hot spontaneously"</p>
                
                <h3>Heat Engine</h3>
                <p>Converts heat to work</p>
                <p class="formula">Efficiency η = W/Q₁ = (Q₁ - Q₂)/Q₁ = 1 - Q₂/Q₁</p>
                
                <h3>Carnot Engine</h3>
                <p>Most efficient reversible engine</p>
                <p class="formula">η_Carnot = 1 - T₂/T₁</p>
                <p>Where T₁ = source temp, T₂ = sink temp</p>
                
                <h3>Refrigerator</h3>
                <p class="formula">COP = Q₂/W = Q₂/(Q₁ - Q₂)</p>
            `
        },
        
        {
            id: 'entropy',
            title: '6. Entropy',
            content: `
                <h3>Definition</h3>
                <p>Measure of disorder</p>
                <p class="formula">ΔS = Q/T (reversible)</p>
                
                <h3>Second Law (Entropy Form)</h3>
                <p><strong>"Entropy of universe always increases"</strong></p>
                <p class="formula">ΔS_universe ≥ 0</p>
                
                <h3>For Ideal Gas</h3>
                <p class="formula">ΔS = nCv ln(T₂/T₁) + nR ln(V₂/V₁)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'First Law', problem: 'Q = 100 J, W = 60 J. Find ΔU', solution: 'ΔU = 100 - 60 = 40 J'},
        {id: 'ex2', title: 'Isothermal', problem: 'Isothermal process, ΔU = ?', solution: 'ΔU = 0'},
        {id: 'ex3', title: 'Carnot Efficiency', problem: 'T₁ = 400K, T₂ = 300K. Find η', solution: 'η = 1 - 300/400 = 0.25 = 25%'},
        {id: 'ex4', title: 'Adiabatic', problem: 'Adiabatic process, Q = ?', solution: 'Q = 0'}
    ],
    
    problems: [
        {id: 'p1', question: 'First law: ΔU = ?', options: ['Q + W', 'Q - W', 'Q/W', 'QW'], correct: 1},
        {id: 'p2', question: 'Isothermal: ΔU = ?', options: ['Q', 'W', '0', 'Q-W'], correct: 2},
        {id: 'p3', question: 'Adiabatic: Q = ?', options: ['ΔU', 'W', '0', 'PV'], correct: 2},
        {id: 'p4', question: 'Isochoric: W = ?', options: ['PΔV', 'Q', '0', 'ΔU'], correct: 2},
        {id: 'p5', question: 'Carnot efficiency depends on:', options: ['P', 'V', 'T', 'All'], correct: 2}
    ],
    
    keyPoints: [
        'First law: ΔU = Q - W',
        'Isothermal: T constant, ΔU = 0',
        'Adiabatic: Q = 0, PVᵞ = const',
        'Isobaric: P constant, W = PΔV',
        'Isochoric: V constant, W = 0',
        'Carnot: η = 1 - T₂/T₁',
        'Second law: Heat → Work incomplete',
        'Entropy always increases',
        'γ = Cp/Cv',
        'Reversible process most efficient'
    ],
    
    formulae: [
        {name: 'First Law', formula: 'ΔU = Q - W'},
        {name: 'Isothermal Work', formula: 'W = nRT ln(V₂/V₁)'},
        {name: 'Adiabatic', formula: 'PVᵞ = constant'},
        {name: 'Carnot Efficiency', formula: 'η = 1 - T₂/T₁'},
        {name: 'Entropy', formula: 'ΔS = Q/T'}
    ]
};
window.PHYSICS_THERMO_1 = PHYSICS_THERMO_1;
</body>
</html>