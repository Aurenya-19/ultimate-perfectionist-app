<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Inorganic Chemistry - Chapter 2: p-Block Elements
// Complete content with Group 15, 16, 17, 18 elements

const CHEMISTRY_PBLOCK_1 = {
    id: 'chemistry-pblock-1',
    title: 'p-Block Elements',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'group15',
            title: '1. Group 15 - Nitrogen Family',
            content: `
                <h3>Elements</h3>
                <p>N, P, As, Sb, Bi</p>
                <p>Electronic configuration: ns² np³</p>
                
                <h3>Trends</h3>
                <ul>
                    <li>Atomic/ionic radius increases down group</li>
                    <li>Ionization energy decreases</li>
                    <li>Electronegativity decreases</li>
                    <li>Metallic character increases</li>
                </ul>
                
                <h3>Oxidation States</h3>
                <p>-3, +3, +5 (common)</p>
                <p>+5 stability decreases down group (inert pair effect)</p>
                
                <h3>Nitrogen (N₂)</h3>
                <p>Triple bond: N≡N (very stable)</p>
                <p>Unreactive at room temperature</p>
                
                <h3>Ammonia (NH₃)</h3>
                <p><strong>Haber Process:</strong> N₂ + 3H₂ ⇌ 2NH₃</p>
                <p>Basic nature: NH₃ + H₂O → NH₄⁺ + OH⁻</p>
                
                <h3>Nitric Acid (HNO₃)</h3>
                <p><strong>Ostwald Process:</strong></p>
                <p>4NH₃ + 5O₂ → 4NO + 6H₂O</p>
                <p>2NO + O₂ → 2NO₂</p>
                <p>4NO₂ + O₂ + 2H₂O → 4HNO₃</p>
                
                <h3>Phosphorus Allotropes</h3>
                <ul>
                    <li><strong>White P:</strong> P₄, reactive, poisonous</li>
                    <li><strong>Red P:</strong> Polymeric, less reactive</li>
                    <li><strong>Black P:</strong> Least reactive</li>
                </ul>
            `
        },
        
        {
            id: 'group16',
            title: '2. Group 16 - Oxygen Family',
            content: `
                <h3>Elements</h3>
                <p>O, S, Se, Te, Po</p>
                <p>Electronic configuration: ns² np⁴</p>
                
                <h3>Oxidation States</h3>
                <p>-2 (common), +2, +4, +6</p>
                
                <h3>Oxygen</h3>
                <p><strong>Allotropes:</strong> O₂ (dioxygen), O₃ (ozone)</p>
                <p>Highly electronegative, reactive</p>
                
                <h3>Ozone (O₃)</h3>
                <p>Bent structure, resonance</p>
                <p>Strong oxidizing agent</p>
                <p>UV absorption in stratosphere</p>
                
                <h3>Sulfur</h3>
                <p><strong>Allotropes:</strong> Rhombic, Monoclinic</p>
                <p>Both contain S₈ rings</p>
                
                <h3>Sulfuric Acid (H₂SO₄)</h3>
                <p><strong>Contact Process:</strong></p>
                <p>S + O₂ → SO₂</p>
                <p>2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst)</p>
                <p>SO₃ + H₂SO₄ → H₂S₂O₇</p>
                <p>H₂S₂O₇ + H₂O → 2H₂SO₄</p>
                
                <h3>Properties of H₂SO₄</h3>
                <ul>
                    <li>Strong dibasic acid</li>
                    <li>Dehydrating agent</li>
                    <li>Oxidizing agent (conc.)</li>
                </ul>
            `
        },
        
        {
            id: 'group17',
            title: '3. Group 17 - Halogens',
            content: `
                <h3>Elements</h3>
                <p>F, Cl, Br, I, At</p>
                <p>Electronic configuration: ns² np⁵</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Most reactive non-metals</li>
                    <li>Exist as diatomic molecules (X₂)</li>
                    <li>Reactivity: F > Cl > Br > I</li>
                    <li>Oxidizing power: F > Cl > Br > I</li>
                </ul>
                
                <h3>Oxidation States</h3>
                <p>-1 (common), +1, +3, +5, +7</p>
                <p>F shows only -1 (most electronegative)</p>
                
                <h3>Hydrogen Halides (HX)</h3>
                <p><strong>Acidic strength:</strong> HF < HCl < HBr < HI</p>
                <p>HF is weak (H-bonding)</p>
                
                <h3>Interhalogen Compounds</h3>
                <p>XX', XX'₃, XX'₅, XX'₇</p>
                <p>Examples: ClF₃, BrF₅, IF₇</p>
                
                <h3>Chlorine Oxoacids</h3>
                <table class="content-table">
                    <tr><th>Acid</th><th>Oxidation State</th></tr>
                    <tr><td>HOCl (Hypochlorous)</td><td>+1</td></tr>
                    <tr><td>HClO₂ (Chlorous)</td><td>+3</td></tr>
                    <tr><td>HClO₃ (Chloric)</td><td>+5</td></tr>
                    <tr><td>HClO₄ (Perchloric)</td><td>+7</td></tr>
                </table>
                <p><strong>Acidic strength:</strong> HClO₄ > HClO₃ > HClO₂ > HOCl</p>
            `
        },
        
        {
            id: 'group18',
            title: '4. Group 18 - Noble Gases',
            content: `
                <h3>Elements</h3>
                <p>He, Ne, Ar, Kr, Xe, Rn</p>
                <p>Electronic configuration: ns² np⁶ (complete octet)</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Monoatomic gases</li>
                    <li>Colorless, odorless, tasteless</li>
                    <li>Very low reactivity</li>
                    <li>Low boiling points</li>
                </ul>
                
                <h3>Trends</h3>
                <ul>
                    <li>Atomic radius increases down group</li>
                    <li>Ionization energy decreases</li>
                    <li>Boiling point increases</li>
                </ul>
                
                <h3>Compounds</h3>
                <p>Xe forms compounds (larger size, lower IE)</p>
                <p>Examples:</p>
                <ul>
                    <li>XeF₂, XeF₄, XeF₆ (fluorides)</li>
                    <li>XeO₃, XeO₄ (oxides)</li>
                    <li>XeOF₄ (oxyfluoride)</li>
                </ul>
                
                <h3>Uses</h3>
                <ul>
                    <li>He: Balloons, cryogenics</li>
                    <li>Ne: Neon signs</li>
                    <li>Ar: Inert atmosphere, bulbs</li>
                    <li>Xe: Flash lamps, anesthesia</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Oxidation State', problem: 'N in HNO₃?', solution: 'x + 1 + 3(-2) = 0, x = +5'},
        {id: 'ex2', title: 'Acidic Strength', problem: 'Order: HF, HCl, HBr, HI', solution: 'HI > HBr > HCl > HF'},
        {id: 'ex3', title: 'Ozone', problem: 'Shape of O₃?', solution: 'Bent (angular)'},
        {id: 'ex4', title: 'Noble Gas', problem: 'Which forms compounds?', solution: 'Xe (and Kr to some extent)'}
    ],
    
    problems: [
        {id: 'p1', question: 'Group 15 configuration:', options: ['ns²np²', 'ns²np³', 'ns²np⁴', 'ns²np⁵'], correct: 1},
        {id: 'p2', question: 'Most acidic HX:', options: ['HF', 'HCl', 'HBr', 'HI'], correct: 3},
        {id: 'p3', question: 'Ozone formula:', options: ['O', 'O₂', 'O₃', 'O₄'], correct: 2},
        {id: 'p4', question: 'Most reactive halogen:', options: ['F', 'Cl', 'Br', 'I'], correct: 0},
        {id: 'p5', question: 'Noble gas forming compounds:', options: ['He', 'Ne', 'Ar', 'Xe'], correct: 3}
    ],
    
    keyPoints: [
        'Group 15: ns²np³, N to Bi',
        'Haber: N₂ + 3H₂ → 2NH₃',
        'Group 16: ns²np⁴, O to Po',
        'Contact process: SO₂ → SO₃ → H₂SO₄',
        'Group 17: ns²np⁵, Halogens',
        'Reactivity: F > Cl > Br > I',
        'HX acidity: HI > HBr > HCl > HF',
        'Group 18: Noble gases, ns²np⁶',
        'Xe forms compounds',
        'Inert pair effect in heavier elements'
    ],
    
    formulae: [
        {name: 'Haber Process', formula: 'N₂ + 3H₂ ⇌ 2NH₃'},
        {name: 'Contact Process', formula: '2SO₂ + O₂ ⇌ 2SO₃'},
        {name: 'Ostwald Process', formula: '4NH₃ + 5O₂ → 4NO + 6H₂O'}
    ]
};
window.CHEMISTRY_PBLOCK_1 = CHEMISTRY_PBLOCK_1;
</body>
</html>