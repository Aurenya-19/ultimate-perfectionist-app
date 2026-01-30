<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Inorganic Chemistry - Chapter 3: d and f Block Elements
// Complete content with transition metals, properties, compounds, lanthanides, actinides

const CHEMISTRY_DBLOCK_1 = {
    id: 'chemistry-dblock-1',
    title: 'd and f Block Elements',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'd-block-basics',
            title: '1. d-Block Elements (Transition Metals)',
            content: `
                <h3>Definition</h3>
                <p>Elements with incompletely filled d-orbitals in ground state or common oxidation states</p>
                <p>3d: Sc to Zn</p>
                <p>4d: Y to Cd</p>
                <p>5d: La, Hf to Hg</p>
                
                <h3>Electronic Configuration</h3>
                <p>General: (n-1)d¹⁻¹⁰ ns¹⁻²</p>
                <p>Exceptions: Cr [Ar]3d⁵4s¹, Cu [Ar]3d¹⁰4s¹</p>
                
                <h3>Why Transition Elements?</h3>
                <ul>
                    <li>Properties intermediate between s and p block</li>
                    <li>Gradual change in properties</li>
                </ul>
            `
        },
        
        {
            id: 'properties',
            title: '2. General Properties',
            content: `
                <h3>Physical Properties</h3>
                <ul>
                    <li>High melting/boiling points</li>
                    <li>High density</li>
                    <li>Metallic character</li>
                    <li>Good conductors</li>
                </ul>
                
                <h3>Variable Oxidation States</h3>
                <p>Due to similar energies of (n-1)d and ns orbitals</p>
                <p>Example: Fe: +2, +3; Mn: +2, +3, +4, +6, +7</p>
                
                <h3>Colored Compounds</h3>
                <p>Due to d-d transitions</p>
                <p>Absorb visible light → complementary color observed</p>
                
                <h3>Paramagnetic Nature</h3>
                <p>Due to unpaired electrons in d-orbitals</p>
                <p class="formula">μ = √[n(n+2)] BM</p>
                
                <h3>Catalytic Activity</h3>
                <p>Variable oxidation states and ability to form complexes</p>
                <p>Examples: Fe in Haber, V₂O₅ in Contact process</p>
                
                <h3>Complex Formation</h3>
                <p>Small size, high charge → strong polarizing power</p>
                <p>Empty d-orbitals accept electron pairs</p>
            `
        },
        
        {
            id: 'compounds',
            title: '3. Important Compounds',
            content: `
                <h3>Potassium Dichromate (K₂Cr₂O₇)</h3>
                <p>Orange crystals, strong oxidizing agent</p>
                <p>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</p>
                
                <h3>Potassium Permanganate (KMnO₄)</h3>
                <p>Purple crystals, strong oxidizing agent</p>
                <p><strong>Acidic medium:</strong></p>
                <p>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</p>
                <p><strong>Neutral/Basic:</strong></p>
                <p>MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻</p>
                
                <h3>Chromyl Chloride Test</h3>
                <p>K₂Cr₂O₇ + 4NaCl + 6H₂SO₄ → 2CrO₂Cl₂ + ...</p>
                <p>Red vapors of CrO₂Cl₂ confirm Cl⁻</p>
            `
        },
        
        {
            id: 'lanthanides',
            title: '4. f-Block: Lanthanides',
            content: `
                <h3>Elements</h3>
                <p>Ce (58) to Lu (71)</p>
                <p>4f¹⁻¹⁴ 5d⁰⁻¹ 6s²</p>
                
                <h3>Lanthanide Contraction</h3>
                <p>Steady decrease in atomic/ionic radii across series</p>
                <p><strong>Cause:</strong> Poor shielding by 4f electrons</p>
                
                <h3>Consequences</h3>
                <ul>
                    <li>Similar properties (difficult to separate)</li>
                    <li>3rd transition series similar to 2nd</li>
                    <li>Basic strength decreases</li>
                </ul>
                
                <h3>Oxidation States</h3>
                <p>+3 most common and stable</p>
                <p>Some show +2, +4 (Ce⁴⁺, Eu²⁺)</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Silvery white metals</li>
                    <li>Reactive (tarnish in air)</li>
                    <li>Paramagnetic (unpaired f electrons)</li>
                    <li>Colored ions</li>
                </ul>
            `
        },
        
        {
            id: 'actinides',
            title: '5. f-Block: Actinides',
            content: `
                <h3>Elements</h3>
                <p>Th (90) to Lr (103)</p>
                <p>5f¹⁻¹⁴ 6d⁰⁻¹ 7s²</p>
                
                <h3>Actinide Contraction</h3>
                <p>Similar to lanthanide contraction</p>
                <p>Greater irregularity due to 5f, 6d, 7s energy similarity</p>
                
                <h3>Oxidation States</h3>
                <p>More variable than lanthanides</p>
                <p>+3, +4, +5, +6, +7</p>
                
                <h3>Differences: Lanthanides vs Actinides</h3>
                <table class="content-table">
                    <tr><th>Property</th><th>Lanthanides</th><th>Actinides</th></tr>
                    <tr><td>Orbitals</td><td>4f</td><td>5f</td></tr>
                    <tr><td>Oxidation states</td><td>Mainly +3</td><td>Variable</td></tr>
                    <tr><td>Radioactivity</td><td>Non-radioactive</td><td>All radioactive</td></tr>
                    <tr><td>Complex formation</td><td>Less tendency</td><td>Greater tendency</td></tr>
                </table>
                
                <h3>Uses</h3>
                <ul>
                    <li>U-235: Nuclear fuel</li>
                    <li>Pu-239: Nuclear weapons</li>
                    <li>Am-241: Smoke detectors</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Oxidation State', problem: 'Cr in K₂Cr₂O₇?', solution: '2(1) + 2x + 7(-2) = 0, x = +6'},
        {id: 'ex2', title: 'Magnetic Moment', problem: 'Fe²⁺ (3d⁶), find μ', solution: 'n=4 unpaired, μ = √[4(6)] = 4.9 BM'},
        {id: 'ex3', title: 'Configuration', problem: 'Cr electronic config?', solution: '[Ar]3d⁵4s¹'},
        {id: 'ex4', title: 'Lanthanide', problem: 'Most stable oxidation state?', solution: '+3'}
    ],
    
    problems: [
        {id: 'p1', question: 'd-block elements have:', options: ['Filled d-orbitals', 'Incomplete d-orbitals', 'No d-orbitals', 'Empty d-orbitals'], correct: 1},
        {id: 'p2', question: 'Colored compounds due to:', options: ['s-s transition', 'd-d transition', 'p-p transition', 'f-f transition'], correct: 1},
        {id: 'p3', question: 'KMnO₄ color:', options: ['Orange', 'Purple', 'Green', 'Yellow'], correct: 1},
        {id: 'p4', question: 'Lanthanide contraction due to:', options: ['Good shielding', 'Poor shielding', 'No shielding', 'Complete shielding'], correct: 1},
        {id: 'p5', question: 'All actinides are:', options: ['Stable', 'Radioactive', 'Non-metals', 'Gases'], correct: 1}
    ],
    
    keyPoints: [
        'd-block: (n-1)d¹⁻¹⁰ ns¹⁻²',
        'Variable oxidation states',
        'Colored compounds (d-d transitions)',
        'Paramagnetic (unpaired electrons)',
        'Catalytic activity',
        'K₂Cr₂O₇: Orange, oxidizing agent',
        'KMnO₄: Purple, strong oxidizer',
        'Lanthanides: 4f series, +3 common',
        'Lanthanide contraction: poor shielding',
        'Actinides: 5f series, all radioactive'
    ],
    
    formulae: [
        {name: 'Magnetic Moment', formula: 'μ = √[n(n+2)] BM'},
        {name: 'KMnO₄ (acidic)', formula: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O'},
        {name: 'K₂Cr₂O₇', formula: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O'}
    ]
};
window.CHEMISTRY_DBLOCK_1 = CHEMISTRY_DBLOCK_1;
</body>
</html>