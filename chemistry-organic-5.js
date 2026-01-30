<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Organic Chemistry - Chapter 5: Amines
// Complete content with preparation, basicity, reactions, diazonium salts

const CHEMISTRY_ORGANIC_5 = {
    id: 'chemistry-organic-5',
    title: 'Amines',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'classification',
            title: '1. Classification and Nomenclature',
            content: `
                <h3>Classification</h3>
                <p><strong>1° Amine:</strong> R-NH₂ (one R group)</p>
                <p><strong>2° Amine:</strong> R₂NH (two R groups)</p>
                <p><strong>3° Amine:</strong> R₃N (three R groups)</p>
                
                <h3>Aliphatic vs Aromatic</h3>
                <p><strong>Aliphatic:</strong> R-NH₂ (methylamine, ethylamine)</p>
                <p><strong>Aromatic:</strong> Ar-NH₂ (aniline, C₆H₅NH₂)</p>
                
                <h3>Nomenclature</h3>
                <p>IUPAC: -amine suffix</p>
                <p>CH₃NH₂: Methanamine (methylamine)</p>
                <p>C₆H₅NH₂: Benzenamine (aniline)</p>
            `
        },
        
        {
            id: 'preparation',
            title: '2. Preparation Methods',
            content: `
                <h3>Reduction of Nitro Compounds</h3>
                <p>R-NO₂ + 6[H] → R-NH₂ + 2H₂O</p>
                <p>Ar-NO₂ + 3Fe + 6HCl → Ar-NH₂ + 3FeCl₂ + 2H₂O</p>
                
                <h3>Reduction of Nitriles</h3>
                <p>R-CN + 4[H] → R-CH₂-NH₂</p>
                <p>Gives 1° amine</p>
                
                <h3>Gabriel Phthalimide Synthesis</h3>
                <p>For 1° aliphatic amines only</p>
                <p>Phthalimide + KOH → Potassium phthalimide</p>
                <p>+ RX → N-alkyl phthalimide</p>
                <p>+ H₂O/H⁺ → R-NH₂</p>
                
                <h3>Hofmann Bromamide Reaction</h3>
                <p>R-CONH₂ + Br₂ + 4NaOH → R-NH₂ + Na₂CO₃ + 2NaBr + 2H₂O</p>
                <p>Gives amine with one C less</p>
                
                <h3>Ammonolysis of Alkyl Halides</h3>
                <p>R-X + NH₃ → R-NH₂ (+ R₂NH + R₃N)</p>
                <p>Gives mixture of 1°, 2°, 3° amines</p>
            `
        },
        
        {
            id: 'basicity',
            title: '3. Basic Nature',
            content: `
                <h3>Why Basic?</h3>
                <p>Lone pair on N can accept H⁺</p>
                <p>R-NH₂ + H₂O ⇌ R-NH₃⁺ + OH⁻</p>
                
                <h3>Basicity Order (Aliphatic)</h3>
                <p class="formula">2° > 1° > 3° > NH₃</p>
                <p>Due to +I effect and steric hindrance</p>
                
                <h3>Basicity Order (Aromatic)</h3>
                <p class="formula">Aliphatic amines > NH₃ > Aromatic amines</p>
                <p>Aniline less basic due to resonance (lone pair delocalized)</p>
                
                <h3>Effect of Substituents on Aniline</h3>
                <p><strong>Electron donating (-CH₃, -OCH₃):</strong> Increase basicity</p>
                <p><strong>Electron withdrawing (-NO₂, -CN):</strong> Decrease basicity</p>
                
                <h3>Basicity Comparison</h3>
                <p>p-CH₃-C₆H₄-NH₂ > C₆H₅-NH₂ > p-NO₂-C₆H₄-NH₂</p>
            `
        },
        
        {
            id: 'reactions',
            title: '4. Reactions of Amines',
            content: `
                <h3>1. Alkylation</h3>
                <p>R-NH₂ + R'-X → R-NH-R' (2° amine)</p>
                
                <h3>2. Acylation</h3>
                <p>R-NH₂ + CH₃COCl → R-NH-CO-CH₃ (N-substituted amide)</p>
                
                <h3>3. Carbylamine Reaction</h3>
                <p>1° amine + CHCl₃ + KOH → Isocyanide (foul smell)</p>
                <p>Test for 1° amines only</p>
                
                <h3>4. Reaction with HNO₂</h3>
                <p><strong>1° Aliphatic:</strong> R-NH₂ + HNO₂ → R-OH + N₂↑</p>
                <p><strong>2° Amine:</strong> R₂NH + HNO₂ → R₂N-NO (N-nitrosamine)</p>
                <p><strong>3° Amine:</strong> R₃N + HNO₂ → R₃N⁺-NO₂⁻ (salt)</p>
                
                <h3>5. Electrophilic Substitution (Aniline)</h3>
                <p>-NH₂ is o,p-directing and strongly activating</p>
                
                <h4>Bromination</h4>
                <p>C₆H₅NH₂ + 3Br₂ → 2,4,6-tribromoaniline (white ppt)</p>
                
                <h4>Nitration</h4>
                <p>Protect -NH₂ first (acetylation)</p>
                <p>C₆H₅NH₂ → C₆H₅NHCOCH₃ → Nitration → Hydrolysis</p>
            `
        },
        
        {
            id: 'diazonium',
            title: '5. Diazonium Salts',
            content: `
                <h3>Preparation</h3>
                <p>C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O</p>
                <p>Temperature: 0-5°C (ice cold)</p>
                
                <h3>Reactions</h3>
                
                <h4>1. Replacement by Halogen (Sandmeyer)</h4>
                <p>C₆H₅N₂⁺Cl⁻ + CuCl → C₆H₅Cl + N₂↑</p>
                <p>Similarly with CuBr, CuCN</p>
                
                <h4>2. Replacement by -OH (Hydrolysis)</h4>
                <p>C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂↑ + HCl</p>
                
                <h4>3. Replacement by -H (Reduction)</h4>
                <p>C₆H₅N₂⁺Cl⁻ + H₃PO₂ → C₆H₆ + N₂↑</p>
                
                <h4>4. Coupling Reaction</h4>
                <p>C₆H₅N₂⁺Cl⁻ + C₆H₅OH → C₆H₅-N=N-C₆H₄OH (azo dye)</p>
                <p>Orange/red colored compounds</p>
                
                <h3>Importance</h3>
                <p>Converts -NH₂ to various groups</p>
                <p>Synthesis of dyes, drugs</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Basicity', problem: 'Most basic: CH₃NH₂, (CH₃)₂NH, (CH₃)₃N?', solution: '(CH₃)₂NH (2° amine)'},
        {id: 'ex2', title: 'Hofmann', problem: 'CH₃CH₂CONH₂ + Br₂/KOH → ?', solution: 'CH₃CH₂NH₂'},
        {id: 'ex3', title: 'Carbylamine', problem: 'Which amine gives carbylamine test?', solution: '1° amine only'},
        {id: 'ex4', title: 'Diazonium', problem: 'C₆H₅N₂Cl + CuCN → ?', solution: 'C₆H₅CN + N₂'}
    ],
    
    problems: [
        {id: 'p1', question: '1° amine has:', options: ['R-NH₂', 'R₂NH', 'R₃N', 'Ar-NH₂'], correct: 0},
        {id: 'p2', question: 'Most basic (aliphatic):', options: ['1°', '2°', '3°', 'NH₃'], correct: 1},
        {id: 'p3', question: 'Carbylamine test for:', options: ['1° amine', '2° amine', '3° amine', 'All'], correct: 0},
        {id: 'p4', question: 'Aniline + Br₂(aq) gives:', options: ['Monobromo', 'Dibromo', 'Tribromo', 'No reaction'], correct: 2},
        {id: 'p5', question: 'Diazonium salt temp:', options: ['Room temp', '0-5°C', '100°C', '-10°C'], correct: 1}
    ],
    
    keyPoints: [
        '1°: R-NH₂, 2°: R₂NH, 3°: R₃N',
        'Gabriel: 1° aliphatic amines',
        'Hofmann: RCONH₂ → RNH₂ (one C less)',
        'Basicity (aliphatic): 2° > 1° > 3°',
        'Aniline less basic (resonance)',
        'Carbylamine: 1° amine test',
        'Aniline + Br₂ → Tribromoaniline',
        'Diazonium: 0-5°C',
        'Sandmeyer: CuX replacement',
        'Coupling: Azo dyes'
    ],
    
    formulae: [
        {name: 'Hofmann Bromamide', formula: 'RCONH₂ + Br₂/KOH → RNH₂'},
        {name: 'Diazotization', formula: 'ArNH₂ + NaNO₂/HCl → ArN₂⁺Cl⁻'},
        {name: 'Sandmeyer', formula: 'ArN₂⁺Cl⁻ + CuX → ArX + N₂'},
        {name: 'Coupling', formula: 'ArN₂⁺ + ArOH → Ar-N=N-Ar (azo dye)'}
    ]
};
window.CHEMISTRY_ORGANIC_5 = CHEMISTRY_ORGANIC_5;
</body>
</html>