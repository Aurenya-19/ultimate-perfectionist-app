<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Inorganic Chemistry - Chapter 1: Coordination Compounds
// Complete content with ligands, nomenclature, isomerism, bonding theories

const CHEMISTRY_COORDINATION_1 = {
    id: 'chemistry-coordination-1',
    title: 'Coordination Compounds',
    subject: 'Chemistry',
    category: 'Inorganic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Coordination Compound</h3>
                <p>Complex formed by central metal atom/ion with ligands</p>
                <p>Example: [Cu(NH₃)₄]²⁺, K₄[Fe(CN)₆]</p>
                
                <h3>Components</h3>
                <ul>
                    <li><strong>Central atom/ion:</strong> Metal (usually transition metal)</li>
                    <li><strong>Ligands:</strong> Molecules/ions bonded to central atom</li>
                    <li><strong>Coordination sphere:</strong> Central atom + ligands</li>
                    <li><strong>Counter ions:</strong> Outside coordination sphere</li>
                </ul>
                
                <h3>Coordination Number</h3>
                <p>Number of ligand donor atoms bonded to central atom</p>
                <p>Common: 4 (tetrahedral/square planar), 6 (octahedral)</p>
                
                <h3>Oxidation State</h3>
                <p>Charge on central metal after removing all ligands</p>
            `
        },
        
        {
            id: 'ligands',
            title: '2. Ligands',
            content: `
                <h3>Classification by Denticity</h3>
                <p><strong>Monodentate:</strong> 1 donor atom</p>
                <p>Examples: Cl⁻, NH₃, H₂O, CN⁻</p>
                
                <p><strong>Bidentate:</strong> 2 donor atoms</p>
                <p>Examples: en (ethylenediamine), ox (oxalate)</p>
                
                <p><strong>Polydentate:</strong> Multiple donor atoms</p>
                <p>Example: EDTA (hexadentate)</p>
                
                <h3>Chelating Ligands</h3>
                <p>Polydentate ligands forming ring structures</p>
                <p>More stable than monodentate complexes</p>
                
                <h3>Ambidentate Ligands</h3>
                <p>Can bind through different atoms</p>
                <p>Examples: NO₂⁻/ONO⁻, SCN⁻/NCS⁻</p>
                
                <h3>Classification by Charge</h3>
                <ul>
                    <li><strong>Neutral:</strong> NH₃, H₂O, CO</li>
                    <li><strong>Anionic:</strong> Cl⁻, CN⁻, OH⁻</li>
                    <li><strong>Cationic:</strong> NO⁺, NH₂NH₃⁺</li>
                </ul>
            `
        },
        
        {
            id: 'nomenclature',
            title: '3. Nomenclature (IUPAC)',
            content: `
                <h3>Rules</h3>
                <ol>
                    <li>Cation named first, then anion</li>
                    <li>Ligands in alphabetical order</li>
                    <li>Prefixes: di-, tri-, tetra-, penta-, hexa-</li>
                    <li>Anionic ligands end in -o</li>
                    <li>Neutral ligands: use name (except aqua, ammine)</li>
                    <li>Metal name + oxidation state (Roman numerals)</li>
                    <li>If complex is anion, metal ends in -ate</li>
                </ol>
                
                <h3>Common Ligand Names</h3>
                <table class="content-table">
                    <tr><th>Ligand</th><th>Name</th></tr>
                    <tr><td>Cl⁻</td><td>chlorido/chloro</td></tr>
                    <tr><td>CN⁻</td><td>cyanido</td></tr>
                    <tr><td>NH₃</td><td>ammine</td></tr>
                    <tr><td>H₂O</td><td>aqua</td></tr>
                    <tr><td>CO</td><td>carbonyl</td></tr>
                    <tr><td>en</td><td>ethylenediamine</td></tr>
                </table>
                
                <h3>Examples</h3>
                <p>[Cu(NH₃)₄]SO₄: Tetraamminecopper(II) sulfate</p>
                <p>K₄[Fe(CN)₆]: Potassium hexacyanoferrate(II)</p>
            `
        },
        
        {
            id: 'isomerism',
            title: '4. Isomerism',
            content: `
                <h3>Structural Isomerism</h3>
                
                <h4>1. Ionization Isomerism</h4>
                <p>[Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br</p>
                
                <h4>2. Linkage Isomerism</h4>
                <p>[Co(NH₃)₅NO₂]²⁺ vs [Co(NH₃)₅ONO]²⁺</p>
                
                <h4>3. Coordination Isomerism</h4>
                <p>[Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]</p>
                
                <h4>4. Hydrate Isomerism</h4>
                <p>[Cr(H₂O)₆]Cl₃ vs [Cr(H₂O)₅Cl]Cl₂·H₂O</p>
                
                <h3>Stereoisomerism</h3>
                
                <h4>1. Geometrical Isomerism</h4>
                <p><strong>Square planar:</strong> cis-trans</p>
                <p><strong>Octahedral:</strong> cis-trans, fac-mer</p>
                
                <h4>2. Optical Isomerism</h4>
                <p>Non-superimposable mirror images</p>
                <p>Example: [Co(en)₃]³⁺</p>
            `
        },
        
        {
            id: 'bonding',
            title: '5. Bonding Theories',
            content: `
                <h3>Crystal Field Theory (CFT)</h3>
                <p>Ligands as point charges causing d-orbital splitting</p>
                
                <h4>Octahedral Splitting</h4>
                <p>d-orbitals split into:</p>
                <ul>
                    <li>t₂g (lower energy): dxy, dyz, dzx</li>
                    <li>eg (higher energy): dx²-y², dz²</li>
                    <li>Δ₀ = crystal field splitting energy</li>
                </ul>
                
                <h4>Tetrahedral Splitting</h4>
                <p>Δt ≈ (4/9)Δ₀</p>
                <p>Inverted splitting (e above t₂)</p>
                
                <h3>High Spin vs Low Spin</h3>
                <p><strong>Weak field (small Δ):</strong> High spin</p>
                <p><strong>Strong field (large Δ):</strong> Low spin</p>
                
                <h3>Spectrochemical Series</h3>
                <p>I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO</p>
                <p>Weak field ← → Strong field</p>
                
                <h3>Magnetic Properties</h3>
                <p>Magnetic moment: μ = √[n(n+2)] BM</p>
                <p>Where n = number of unpaired electrons</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Oxidation State', problem: '[Fe(CN)₆]⁴⁻, find oxidation state of Fe', solution: 'x + 6(-1) = -4, x = +2'},
        {id: 'ex2', title: 'Coordination Number', problem: '[Cu(NH₃)₄]²⁺', solution: 'CN = 4'},
        {id: 'ex3', title: 'Nomenclature', problem: 'Name K₃[Fe(CN)₆]', solution: 'Potassium hexacyanoferrate(III)'},
        {id: 'ex4', title: 'Magnetic Moment', problem: 'n=3 unpaired e⁻, find μ', solution: 'μ = √[3(5)] = √15 = 3.87 BM'}
    ],
    
    problems: [
        {id: 'p1', question: 'EDTA is:', options: ['Monodentate', 'Bidentate', 'Hexadentate', 'Tridentate'], correct: 2},
        {id: 'p2', question: 'Ambidentate ligand:', options: ['NH₃', 'NO₂⁻', 'Cl⁻', 'en'], correct: 1},
        {id: 'p3', question: 'In octahedral, Δ₀ is:', options: ['Splitting energy', 'Bond energy', 'Ionization energy', 'Lattice energy'], correct: 0},
        {id: 'p4', question: 'Strong field ligand:', options: ['Cl⁻', 'H₂O', 'CN⁻', 'F⁻'], correct: 2},
        {id: 'p5', question: 'Chelating ligands are:', options: ['Monodentate', 'Polydentate', 'Neutral', 'Anionic'], correct: 1}
    ],
    
    keyPoints: [
        'Coordination number = donor atoms bonded',
        'Ligands: mono-, bi-, polydentate',
        'EDTA is hexadentate',
        'Ambidentate: NO₂⁻/ONO⁻',
        'IUPAC: ligands alphabetically',
        'Anionic ligands end in -o',
        'CFT: d-orbital splitting',
        'Octahedral: t₂g, eg',
        'Spectrochemical series',
        'μ = √[n(n+2)] BM'
    ],
    
    formulae: [
        {name: 'Magnetic Moment', formula: 'μ = √[n(n+2)] BM'},
        {name: 'Tetrahedral Splitting', formula: 'Δt ≈ (4/9)Δ₀'}
    ]
};
window.CHEMISTRY_COORDINATION_1 = CHEMISTRY_COORDINATION_1;
</body>
</html>