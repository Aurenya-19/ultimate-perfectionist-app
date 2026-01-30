<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Organic Chemistry - Chapter 2: Hydrocarbons
// Complete content with alkanes, alkenes, alkynes, reactions

const CHEMISTRY_ORGANIC_2 = {
    id: 'chemistry-organic-2',
    title: 'Hydrocarbons',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'classification',
            title: '1. Classification',
            content: `
                <h3>Hydrocarbons</h3>
                <p>Compounds containing only C and H</p>
                
                <h3>Types</h3>
                <ul>
                    <li><strong>Saturated (Alkanes):</strong> Only single bonds, CₙH₂ₙ₊₂</li>
                    <li><strong>Unsaturated:</strong>
                        <ul>
                            <li>Alkenes: One C=C, CₙH₂ₙ</li>
                            <li>Alkynes: One C≡C, CₙH₂ₙ₋₂</li>
                        </ul>
                    </li>
                    <li><strong>Aromatic:</strong> Benzene ring</li>
                </ul>
            `
        },
        
        {
            id: 'alkanes',
            title: '2. Alkanes',
            content: `
                <h3>General Formula: CₙH₂ₙ₊₂</h3>
                
                <h3>Nomenclature</h3>
                <p>Suffix: -ane</p>
                <p>Examples: Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)</p>
                
                <h3>Preparation</h3>
                <ul>
                    <li>Hydrogenation: Alkene + H₂ → Alkane</li>
                    <li>Wurtz reaction: 2RX + 2Na → R-R + 2NaX</li>
                    <li>Kolbe's electrolysis: RCOO⁻ → R-R + CO₂</li>
                </ul>
                
                <h3>Reactions</h3>
                <ul>
                    <li><strong>Combustion:</strong> CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O</li>
                    <li><strong>Halogenation:</strong> CH₄ + Cl₂ → CH₃Cl + HCl</li>
                    <li><strong>Cracking:</strong> Long chain → Short chains</li>
                </ul>
                
                <h3>Properties</h3>
                <ul>
                    <li>Non-polar, insoluble in water</li>
                    <li>Less reactive than alkenes/alkynes</li>
                    <li>BP increases with molecular weight</li>
                </ul>
            `
        },
        
        {
            id: 'alkenes',
            title: '3. Alkenes',
            content: `
                <h3>General Formula: CₙH₂ₙ</h3>
                
                <h3>Nomenclature</h3>
                <p>Suffix: -ene</p>
                <p>Examples: Ethene (C₂H₄), Propene (C₃H₆)</p>
                
                <h3>Preparation</h3>
                <ul>
                    <li>Dehydration of alcohols: ROH → Alkene + H₂O</li>
                    <li>Dehydrohalogenation: RX + KOH → Alkene + KX + H₂O</li>
                </ul>
                
                <h3>Reactions</h3>
                <ul>
                    <li><strong>Addition of H₂:</strong> C=C + H₂ → C-C</li>
                    <li><strong>Addition of HX:</strong> Markovnikov's rule</li>
                    <li><strong>Addition of H₂O:</strong> Hydration</li>
                    <li><strong>Polymerization:</strong> nCH₂=CH₂ → (-CH₂-CH₂-)ₙ</li>
                    <li><strong>Ozonolysis:</strong> C=C + O₃ → Ozonide → Aldehydes/Ketones</li>
                </ul>
                
                <h3>Markovnikov's Rule</h3>
                <p>"H adds to C with more H, X to C with less H"</p>
            `
        },
        
        {
            id: 'alkynes',
            title: '4. Alkynes',
            content: `
                <h3>General Formula: CₙH₂ₙ₋₂</h3>
                
                <h3>Nomenclature</h3>
                <p>Suffix: -yne</p>
                <p>Examples: Ethyne/Acetylene (C₂H₂), Propyne (C₃H₄)</p>
                
                <h3>Preparation</h3>
                <ul>
                    <li>From calcium carbide: CaC₂ + H₂O → C₂H₂ + Ca(OH)₂</li>
                    <li>Dehalogenation: RCHBr-CHBr₂ + KOH → RC≡CH</li>
                </ul>
                
                <h3>Reactions</h3>
                <ul>
                    <li><strong>Addition of H₂:</strong> Triple → Double → Single bond</li>
                    <li><strong>Addition of HX:</strong> Two moles add</li>
                    <li><strong>Polymerization:</strong> Forms benzene, polymers</li>
                    <li><strong>Acidic nature:</strong> Terminal H is acidic</li>
                </ul>
            `
        },
        
        {
            id: 'aromatic',
            title: '5. Aromatic Hydrocarbons',
            content: `
                <h3>Benzene (C₆H₆)</h3>
                <p>Planar hexagonal ring with delocalized π-electrons</p>
                
                <h3>Aromaticity (Hückel's Rule)</h3>
                <p>4n + 2 π-electrons (n = 0,1,2,...)</p>
                
                <h3>Reactions</h3>
                <ul>
                    <li><strong>Electrophilic Substitution:</strong>
                        <ul>
                            <li>Nitration: C₆H₆ + HNO₃ → C₆H₅NO₂</li>
                            <li>Sulfonation: C₆H₆ + H₂SO₄ → C₆H₅SO₃H</li>
                            <li>Halogenation: C₆H₆ + Cl₂ → C₆H₅Cl</li>
                            <li>Friedel-Crafts alkylation/acylation</li>
                        </ul>
                    </li>
                    <li><strong>Addition:</strong> Under special conditions</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Alkane Formula', problem: 'Formula for pentane?', solution: 'C₅H₁₂ (CₙH₂ₙ₊₂)'},
        {id: 'ex2', title: 'Alkene Reaction', problem: 'CH₂=CH₂ + H₂ → ?', solution: 'CH₃-CH₃'},
        {id: 'ex3', title: 'Markovnikov', problem: 'CH₃CH=CH₂ + HBr → ?', solution: 'CH₃CHBrCH₃'},
        {id: 'ex4', title: 'Aromatic', problem: 'Benzene + Cl₂ → ?', solution: 'C₆H₅Cl + HCl'}
    ],
    
    problems: [
        {id: 'p1', question: 'Alkane general formula:', options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'], correct: 1},
        {id: 'p2', question: 'Alkene has:', options: ['C-C', 'C=C', 'C≡C', 'Benzene'], correct: 1},
        {id: 'p3', question: 'Most reactive:', options: ['Alkane', 'Alkene', 'Alkyne', 'Benzene'], correct: 2},
        {id: 'p4', question: 'Benzene undergoes:', options: ['Addition', 'Substitution', 'Elimination', 'None'], correct: 1},
        {id: 'p5', question: 'Acetylene is:', options: ['Alkane', 'Alkene', 'Alkyne', 'Aromatic'], correct: 2}
    ],
    
    keyPoints: [
        'Alkanes: CₙH₂ₙ₊₂, saturated, -ane',
        'Alkenes: CₙH₂ₙ, one C=C, -ene',
        'Alkynes: CₙH₂ₙ₋₂, one C≡C, -yne',
        'Alkanes: Combustion, halogenation',
        'Alkenes: Addition reactions, Markovnikov',
        'Alkynes: More reactive, acidic H',
        'Benzene: Aromatic, substitution',
        'Hückel: 4n+2 π-electrons',
        'Reactivity: Alkyne > Alkene > Alkane',
        'Aromatic more stable than alkenes'
    ],
    
    formulae: [
        {name: 'Alkane', formula: 'CₙH₂ₙ₊₂'},
        {name: 'Alkene', formula: 'CₙH₂ₙ'},
        {name: 'Alkyne', formula: 'CₙH₂ₙ₋₂'},
        {name: 'Benzene', formula: 'C₆H₆'},
        {name: 'Hückel Rule', formula: '4n + 2 π-electrons'}
    ]
};
window.CHEMISTRY_ORGANIC_2 = CHEMISTRY_ORGANIC_2;
</body>
</html>