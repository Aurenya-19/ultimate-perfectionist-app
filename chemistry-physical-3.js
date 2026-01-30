<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 3: Thermodynamics
// Complete content with laws, enthalpy, entropy, Gibbs energy, Hess's law

const CHEMISTRY_PHYSICAL_3 = {
    id: 'chemistry-physical-3',
    title: 'Thermodynamics',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>System and Surroundings</h3>
                <p><strong>System:</strong> Part under study</p>
                <p><strong>Surroundings:</strong> Everything else</p>
                
                <h3>Types of Systems</h3>
                <ul>
                    <li><strong>Open:</strong> Exchange mass & energy</li>
                    <li><strong>Closed:</strong> Exchange energy only</li>
                    <li><strong>Isolated:</strong> No exchange</li>
                </ul>
                
                <h3>State Functions</h3>
                <p>Depend only on state, not path</p>
                <p>Examples: P, V, T, U, H, S, G</p>
                
                <h3>Path Functions</h3>
                <p>Depend on path taken</p>
                <p>Examples: q (heat), w (work)</p>
            `
        },
        
        {
            id: 'first-law',
            title: '2. First Law of Thermodynamics',
            content: `
                <h3>Statement</h3>
                <p><strong>"Energy can neither be created nor destroyed"</strong></p>
                
                <p class="formula">ΔU = q + w</p>
                
                <p>Where:</p>
                <ul>
                    <li>ΔU = Change in internal energy</li>
                    <li>q = Heat absorbed</li>
                    <li>w = Work done on system</li>
                </ul>
                
                <h3>Sign Convention</h3>
                <ul>
                    <li>q > 0: Heat absorbed (endothermic)</li>
                    <li>q < 0: Heat released (exothermic)</li>
                    <li>w > 0: Work done on system</li>
                    <li>w < 0: Work done by system</li>
                </ul>
                
                <h3>Work in Expansion</h3>
                <p class="formula">w = -PΔV</p>
            `
        },
        
        {
            id: 'enthalpy',
            title: '3. Enthalpy',
            content: `
                <h3>Definition</h3>
                <p class="formula">H = U + PV</p>
                
                <h3>Enthalpy Change</h3>
                <p class="formula">ΔH = ΔU + PΔV</p>
                
                <p>At constant pressure:</p>
                <p class="formula">ΔH = qp</p>
                
                <h3>Types of Enthalpy Changes</h3>
                <ul>
                    <li><strong>ΔHf:</strong> Formation</li>
                    <li><strong>ΔHc:</strong> Combustion</li>
                    <li><strong>ΔHneutralization:</strong> Neutralization</li>
                    <li><strong>ΔHsolution:</strong> Solution</li>
                </ul>
                
                <h3>Hess's Law</h3>
                <p><strong>"Total enthalpy change is independent of path"</strong></p>
                <p class="formula">ΔH = ΣΔHproducts - ΣΔHreactants</p>
            `
        },
        
        {
            id: 'entropy',
            title: '4. Entropy and Second Law',
            content: `
                <h3>Entropy (S)</h3>
                <p>Measure of disorder/randomness</p>
                
                <h3>Second Law</h3>
                <p><strong>"Entropy of universe always increases"</strong></p>
                <p class="formula">ΔSuniverse = ΔSsystem + ΔSsurroundings > 0</p>
                
                <h3>Entropy Change</h3>
                <p class="formula">ΔS = qrev/T</p>
                
                <h3>Third Law</h3>
                <p><strong>"Entropy of perfect crystal at 0 K is zero"</strong></p>
            `
        },
        
        {
            id: 'gibbs',
            title: '5. Gibbs Free Energy',
            content: `
                <h3>Definition</h3>
                <p class="formula">G = H - TS</p>
                
                <h3>Gibbs Energy Change</h3>
                <p class="formula">ΔG = ΔH - TΔS</p>
                
                <h3>Spontaneity</h3>
                <ul>
                    <li>ΔG < 0: Spontaneous</li>
                    <li>ΔG = 0: Equilibrium</li>
                    <li>ΔG > 0: Non-spontaneous</li>
                </ul>
                
                <h3>Standard Gibbs Energy</h3>
                <p class="formula">ΔG° = -RT ln K</p>
                <p>Where K = equilibrium constant</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'First Law', problem: 'q = 100 J, w = -50 J. Find ΔU', solution: 'ΔU = 100 + (-50) = 50 J'},
        {id: 'ex2', title: 'Enthalpy', problem: 'ΔU = 80 J, PΔV = 20 J. Find ΔH', solution: 'ΔH = 80 + 20 = 100 J'},
        {id: 'ex3', title: 'Spontaneity', problem: 'ΔH = -100 kJ, TΔS = -50 kJ. Spontaneous?', solution: 'ΔG = -100-(-50) = -50 kJ < 0, Yes!'},
        {id: 'ex4', title: "Hess's Law", problem: 'Use given data to find ΔH', solution: 'Add/subtract equations'}
    ],
    
    problems: [
        {id: 'p1', question: 'First law: ΔU = ?', options: ['q - w', 'q + w', 'q/w', 'qw'], correct: 1},
        {id: 'p2', question: 'State function:', options: ['q', 'w', 'H', 'All'], correct: 2},
        {id: 'p3', question: 'ΔG < 0 means:', options: ['Equilibrium', 'Spontaneous', 'Non-spontaneous', 'None'], correct: 1},
        {id: 'p4', question: 'Entropy is measure of:', options: ['Order', 'Disorder', 'Energy', 'Work'], correct: 1},
        {id: 'p5', question: 'At equilibrium, ΔG = ?', options: ['>0', '<0', '=0', 'Infinite'], correct: 2}
    ],
    
    keyPoints: [
        'First law: ΔU = q + w',
        'Enthalpy: H = U + PV',
        'At constant P: ΔH = qp',
        "Hess's law: ΔH independent of path",
        'Entropy: measure of disorder',
        'Second law: ΔSuniverse > 0',
        'Gibbs: G = H - TS',
        'ΔG < 0: Spontaneous',
        'ΔG = 0: Equilibrium',
        'ΔG° = -RT ln K'
    ],
    
    formulae: [
        {name: 'First Law', formula: 'ΔU = q + w'},
        {name: 'Enthalpy', formula: 'H = U + PV'},
        {name: 'Entropy Change', formula: 'ΔS = q/T'},
        {name: 'Gibbs Energy', formula: 'G = H - TS'},
        {name: 'Spontaneity', formula: 'ΔG = ΔH - TΔS'},
        {name: 'Equilibrium', formula: 'ΔG° = -RT ln K'}
    ]
};
window.CHEMISTRY_PHYSICAL_3 = CHEMISTRY_PHYSICAL_3;
</body>
</html>