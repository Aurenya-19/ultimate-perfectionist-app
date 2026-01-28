<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// COMPLETE CHEMISTRY CHAPTERS - Part 2
// More detailed chemistry content

const COMPLETE_CHEMISTRY_2 = {
  // ==================== CHAPTER 10: HYDROCARBONS ====================
  c10: {
    theory: {
      introduction: `Hydrocarbons are organic compounds containing only carbon and hydrogen. They form the basis of organic chemistry and are the main components of petroleum and natural gas.`,
      sections: [
        {
          title: 'Classification of Hydrocarbons',
          content: `**Saturated Hydrocarbons (Alkanes)**:
- Single bonds only
- General formula: CnH2n+2
- sp³ hybridization
- Examples: Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)

**Unsaturated Hydrocarbons**:

**1. Alkenes** (Double bond):
- General formula: CnH2n
- sp² hybridization
- Examples: Ethene (C₂H₄), Propene (C₃H₆)

**2. Alkynes** (Triple bond):
- General formula: CnH2n-2
- sp hybridization
- Examples: Ethyne (C₂H₂), Propyne (C₃H₄)

**Aromatic Hydrocarbons**:
- Benzene ring (C₆H₆)
- Delocalized π electrons
- Hückel's rule: 4n+2 π electrons
- Examples: Benzene, Toluene, Naphthalene

**Alicyclic Hydrocarbons**:
- Cyclic saturated compounds
- Examples: Cyclopropane, Cyclohexane`,
          keyPoints: [
            'Alkanes: CnH2n+2, single bonds',
            'Alkenes: CnH2n, double bonds',
            'Alkynes: CnH2n-2, triple bonds',
            'Aromatic: Benzene ring, delocalized electrons'
          ]
        },
        {
          title: 'Alkanes - Properties and Reactions',
          content: `**Physical Properties**:
- Non-polar molecules
- Boiling point increases with molecular weight
- Insoluble in water, soluble in organic solvents
- Density < 1 g/cm³

**Chemical Reactions**:

**1. Combustion**:
Complete: CnH2n+2 + O₂ → CO₂ + H₂O + Heat
Incomplete: Forms CO or C (soot)

**2. Halogenation** (Free radical substitution):
CH₄ + Cl₂ → CH₃Cl + HCl (in presence of light)

Mechanism:
- Initiation: Cl₂ → 2Cl·
- Propagation: CH₄ + Cl· → CH₃· + HCl
              CH₃· + Cl₂ → CH₃Cl + Cl·
- Termination: Cl· + Cl· → Cl₂

**3. Cracking**:
Breaking large molecules into smaller ones
C₁₀H₂₂ → C₅H₁₂ + C₅H₁₀ (at high temperature)

**4. Isomerization**:
n-butane ⇌ isobutane (with catalyst)

**Conformations**:
- Staggered (more stable)
- Eclipsed (less stable)
- Energy difference: ~12 kJ/mol`,
          formulas: [
            { name: 'Combustion', expr: 'CnH2n+2 + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O' },
            { name: 'Halogenation', expr: 'R-H + X₂ → R-X + HX', description: 'Free radical' }
          ]
        },
        {
          title: 'Alkenes - Properties and Reactions',
          content: `**Physical Properties**:
- Slightly polar due to π bond
- Boiling point < corresponding alkane
- Insoluble in water

**Chemical Reactions**:

**1. Addition Reactions** (Electrophilic):

**Hydrogenation**:
C₂H₄ + H₂ → C₂H₆ (with Ni catalyst)

**Halogenation**:
C₂H₄ + Br₂ → CH₂Br-CH₂Br

**Hydrohalogenation** (Markovnikov's rule):
CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃
(H goes to C with more H, Br to C with less H)

**Hydration**:
C₂H₄ + H₂O → C₂H₅OH (with H₂SO₄)

**2. Oxidation**:

**Mild oxidation** (KMnO₄, cold, dilute):
Forms vicinal diols
C₂H₄ + [O] + H₂O → CH₂OH-CH₂OH

**Strong oxidation** (KMnO₄, hot, conc.):
Breaks double bond
R-CH=CH-R' → R-COOH + R'-COOH

**Ozonolysis**:
C=C + O₃ → Ozonide → Aldehydes/Ketones

**3. Polymerization**:
nCH₂=CH₂ → (-CH₂-CH₂-)n (Polyethylene)

**Markovnikov's Rule**:
In addition of HX to unsymmetrical alkene, H goes to C with more H atoms

**Anti-Markovnikov** (Peroxide effect):
With HBr in presence of peroxide, Br goes to C with more H`,
          formulas: [
            { name: 'Hydrogenation', expr: 'C=C + H₂ → C-C', description: 'Ni/Pt/Pd catalyst' },
            { name: 'Markovnikov', expr: 'R-CH=CH₂ + HX → R-CHX-CH₃' },
            { name: 'Ozonolysis', expr: 'R-CH=CH-R\' + O₃ → R-CHO + R\'-CHO' }
          ]
        },
        {
          title: 'Alkynes - Properties and Reactions',
          content: `**Physical Properties**:
- Linear geometry around triple bond
- Slightly polar
- Acidic hydrogen in terminal alkynes

**Chemical Reactions**:

**1. Addition Reactions**:

**Hydrogenation**:
- Partial: RC≡CR' + H₂ → RCH=CHR' (with Lindlar's catalyst)
- Complete: RC≡CR' + 2H₂ → RCH₂-CH₂R'

**Halogenation**:
RC≡CR' + Br₂ → RCBr=CBrR' (first addition)
RCBr=CBrR' + Br₂ → RCBr₂-CBr₂R' (second addition)

**Hydrohalogenation**:
RC≡CH + HCl → RCH=CHCl (vinyl chloride)

**Hydration** (Markovnikov):
RC≡CH + H₂O → RCH₂CHO (with H₂SO₄, HgSO₄)

**2. Acidic Nature**:
Terminal alkynes are weakly acidic
RC≡CH + NaNH₂ → RC≡C⁻Na⁺ + NH₃

**3. Polymerization**:
3C₂H₂ → C₆H₆ (Benzene, at high temperature)

**4. Oxidation**:
Strong oxidizing agents break triple bond`,
          formulas: [
            { name: 'Partial hydrogenation', expr: 'RC≡CR + H₂ → RCH=CHR', description: 'Lindlar catalyst' },
            { name: 'Hydration', expr: 'RC≡CH + H₂O → RCH₂CHO', description: 'H₂SO₄, HgSO₄' }
          ]
        },
        {
          title: 'Aromatic Hydrocarbons - Benzene',
          content: `**Structure of Benzene**:
- Planar hexagonal ring
- All C-C bonds equal (1.39 Å)
- Delocalized π electrons
- Resonance hybrid of two Kekulé structures

**Aromaticity Criteria** (Hückel's Rule):
1. Planar, cyclic structure
2. Complete conjugation (all p orbitals overlap)
3. 4n+2 π electrons (n = 0, 1, 2, ...)

**Reactions of Benzene**:

**1. Electrophilic Substitution**:

**Nitration**:
C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (with conc. H₂SO₄)

**Sulfonation**:
C₆H₆ + H₂SO₄ → C₆H₅SO₃H + H₂O

**Halogenation**:
C₆H₆ + Br₂ → C₆H₅Br + HBr (with FeBr₃ catalyst)

**Friedel-Crafts Alkylation**:
C₆H₆ + RCl → C₆H₅R + HCl (with AlCl₃)

**Friedel-Crafts Acylation**:
C₆H₆ + RCOCl → C₆H₅COR + HCl (with AlCl₃)

**2. Addition Reactions** (under special conditions):

**Hydrogenation**:
C₆H₆ + 3H₂ → C₆H₁₂ (Cyclohexane, with Ni, high P, T)

**Chlorination**:
C₆H₆ + 3Cl₂ → C₆H₆Cl₆ (in sunlight)

**Directing Effects**:
- **Ortho-para directors**: -OH, -NH₂, -CH₃, -X (activating except X)
- **Meta directors**: -NO₂, -COOH, -CN, -SO₃H (deactivating)`,
          formulas: [
            { name: 'Nitration', expr: 'C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O', description: 'conc. H₂SO₄' },
            { name: 'Friedel-Crafts', expr: 'C₆H₆ + RCl → C₆H₅R + HCl', description: 'AlCl₃ catalyst' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'What is the general formula of alkenes?',
        options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnHn'],
        correct: 1,
        solution: `Alkenes contain one C=C double bond.

General formula: CnH2n

Examples:
- C₂H₄ (Ethene): n=2, 2(2)=4 ✓
- C₃H₆ (Propene): n=3, 2(3)=6 ✓
- C₄H₈ (Butene): n=4, 2(4)=8 ✓

Answer: B) CnH2n`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'What is the major product when propene reacts with HBr?',
        options: ['1-bromopropane', '2-bromopropane', '1,2-dibromopropane', 'No reaction'],
        correct: 1,
        solution: `Propene: CH₃-CH=CH₂

Reaction with HBr follows Markovnikov's rule:
H goes to C with more H atoms
Br goes to C with fewer H atoms

CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃

Product: 2-bromopropane (major)

Answer: B) 2-bromopropane

Minor product (anti-Markovnikov, with peroxide):
CH₃-CH₂-CH₂Br (1-bromopropane)`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'How many π electrons does benzene have?',
        options: ['3', '6', '12', '18'],
        correct: 1,
        solution: `Benzene (C₆H₆) structure:
- 6 carbon atoms in ring
- Each C contributes 1 electron to π system
- Total π electrons = 6

This satisfies Hückel's rule: 4n+2 = 6
where n = 1

Answer: B) 6

These 6 π electrons are delocalized over the entire ring, giving benzene its aromatic stability.`
      },
      {
        id: 4,
        difficulty: 'olympiad',
        question: 'Ozonolysis of an alkene gives two molecules of acetaldehyde (CH₃CHO). What is the alkene?',
        options: ['Ethene', 'Propene', '2-Butene', '1-Butene'],
        correct: 2,
        solution: `Ozonolysis breaks C=C bond and adds oxygen:
R-CH=CH-R' + O₃ → R-CHO + R'-CHO

Given: Product is 2 molecules of CH₃CHO

Working backwards:
CH₃CHO + CH₃CHO → CH₃-CH=CH-CH₃

The alkene must be: 2-Butene (CH₃-CH=CH-CH₃)

Answer: C) 2-Butene

Verification:
CH₃-CH=CH-CH₃ + O₃ → 2 CH₃CHO ✓

Other options:
- Ethene → 2 HCHO (formaldehyde)
- Propene → CH₃CHO + HCHO
- 1-Butene → CH₃CH₂CHO + HCHO`
      }
    ]
  },

  // ==================== CHAPTER 12: ALDEHYDES, KETONES, CARBOXYLIC ACIDS ====================
  c12: {
    theory: {
      introduction: `Carbonyl compounds contain the C=O group. Aldehydes and ketones are important intermediates in organic synthesis, while carboxylic acids are weak acids with diverse applications.`,
      sections: [
        {
          title: 'Structure and Nomenclature',
          content: `**Aldehydes**: R-CHO
- Carbonyl group at end of chain
- General formula: CnH2nO
- IUPAC: -al suffix
- Examples: Methanal (HCHO), Ethanal (CH₃CHO)

**Ketones**: R-CO-R'
- Carbonyl group in middle of chain
- General formula: CnH2nO
- IUPAC: -one suffix
- Examples: Propanone (CH₃COCH₃), Butanone (CH₃COC₂H₅)

**Carboxylic Acids**: R-COOH
- Carboxyl group (-COOH)
- General formula: CnH2nO₂
- IUPAC: -oic acid suffix
- Examples: Methanoic acid (HCOOH), Ethanoic acid (CH₃COOH)

**Structure of Carbonyl Group**:
- sp² hybridization of carbon
- Trigonal planar geometry
- C=O bond: σ + π
- Polar bond (O more electronegative)
- Bond angle: ~120°`,
          keyPoints: [
            'Aldehydes: -CHO at end',
            'Ketones: -CO- in middle',
            'Carboxylic acids: -COOH group',
            'All contain polar C=O bond'
          ]
        },
        {
          title: 'Preparation Methods',
          content: `**Aldehydes**:

**1. Oxidation of Primary Alcohols**:
RCH₂OH + [O] → RCHO + H₂O
(with PCC or mild oxidizing agent)

**2. Ozonolysis of Alkenes**:
R-CH=CH₂ + O₃ → RCHO + HCHO

**3. Rosenmund Reduction**:
RCOCl + H₂ → RCHO + HCl (with Pd-BaSO₄)

**Ketones**:

**1. Oxidation of Secondary Alcohols**:
R₂CHOH + [O] → R₂CO + H₂O

**2. Friedel-Crafts Acylation**:
C₆H₆ + RCOCl → C₆H₅COR + HCl (with AlCl₃)

**3. Hydration of Alkynes**:
RC≡CH + H₂O → RCH₂CHO → RCOCH₃

**Carboxylic Acids**:

**1. Oxidation of Primary Alcohols/Aldehydes**:
RCH₂OH → RCHO → RCOOH (with strong oxidizing agent)

**2. Hydrolysis of Nitriles**:
RCN + 2H₂O → RCOOH + NH₃

**3. Grignard Reagent + CO₂**:
RMgX + CO₂ → RCOOMgX → RCOOH

**4. Oxidation of Alkylbenzenes**:
C₆H₅CH₃ + [O] → C₆H₅COOH`,
          formulas: [
            { name: 'Aldehyde from alcohol', expr: 'RCH₂OH + [O] → RCHO' },
            { name: 'Ketone from alcohol', expr: 'R₂CHOH + [O] → R₂CO' },
            { name: 'Acid from nitrile', expr: 'RCN + H₂O → RCOOH' }
          ]
        },
        {
          title: 'Chemical Reactions',
          content: `**Nucleophilic Addition** (Aldehydes & Ketones):

**1. Addition of HCN**:
RCHO + HCN → RCH(OH)CN (Cyanohydrin)

**2. Addition of NH₃ derivatives**:
- With NH₂OH: Forms oxime
- With NH₂NH₂: Forms hydrazone
- With NH₂-NH-C₆H₅: Forms phenylhydrazone

**3. Addition of Grignard Reagent**:
RCHO + R'MgX → RCH(OMgX)R' → RCH(OH)R'
(Forms alcohol after hydrolysis)

**4. Aldol Condensation**:
2CH₃CHO → CH₃CH(OH)CH₂CHO (with dilute base)

**Oxidation**:
- Aldehydes easily oxidized to acids
- Ketones resistant to oxidation

**Reduction**:
RCHO + H₂ → RCH₂OH (with Ni/Pt/Pd)
R₂CO + H₂ → R₂CHOH

**Cannizzaro Reaction** (for aldehydes without α-H):
2HCHO + NaOH → CH₃OH + HCOONa

**Reactions of Carboxylic Acids**:

**1. Esterification**:
RCOOH + R'OH ⇌ RCOOR' + H₂O (with H₂SO₄)

**2. Formation of Acid Chloride**:
RCOOH + SOCl₂ → RCOCl + SO₂ + HCl

**3. Decarboxylation**:
RCOONa + NaOH → RH + Na₂CO₃ (soda lime)

**4. Hell-Volhard-Zelinsky Reaction**:
RCOOH + Cl₂/Br₂ → RCHClCOOH (α-halogenation)`,
          formulas: [
            { name: 'Cyanohydrin', expr: 'RCHO + HCN → RCH(OH)CN' },
            { name: 'Esterification', expr: 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O' },
            { name: 'Aldol condensation', expr: '2RCHO → RCH(OH)CH₂CHO' }
          ]
        },
        {
          title: 'Distinguishing Tests',
          content: `**Aldehydes vs Ketones**:

**1. Tollen's Test** (Silver mirror):
- Aldehydes: Positive (silver mirror forms)
- Ketones: Negative
RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag↓ + 4NH₃ + 2H₂O

**2. Fehling's Test**:
- Aldehydes: Positive (red precipitate of Cu₂O)
- Ketones: Negative
RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O

**3. Iodoform Test**:
- Methyl ketones (RCOCH₃): Positive (yellow precipitate)
- Aldehydes (except CH₃CHO): Negative
RCOCH₃ + 3I₂ + 4NaOH → RCOONa + CHI₃↓ + 3NaI + 3H₂O

**Carboxylic Acids**:

**1. Litmus Test**:
- Turns blue litmus red (acidic)

**2. NaHCO₃ Test**:
- Effervescence (CO₂ evolved)
RCOOH + NaHCO₃ → RCOONa + H₂O + CO₂↑`,
          keyPoints: [
            'Tollen\'s: Aldehydes give silver mirror',
            'Fehling\'s: Aldehydes give red ppt',
            'Iodoform: Methyl ketones give yellow ppt',
            'Acids: Turn litmus red, react with NaHCO₃'
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Which compound gives positive Tollen\'s test?',
        options: ['Acetone', 'Acetaldehyde', 'Acetic acid', 'Ethanol'],
        correct: 1,
        solution: `Tollen's test is positive for aldehydes.

Among options:
- Acetone (CH₃COCH₃): Ketone - Negative
- Acetaldehyde (CH₃CHO): Aldehyde - Positive ✓
- Acetic acid (CH₃COOH): Acid - Negative
- Ethanol (C₂H₅OH): Alcohol - Negative

Answer: B) Acetaldehyde

Acetaldehyde reduces Tollen's reagent to metallic silver, forming a silver mirror.`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'What is the product when acetaldehyde undergoes aldol condensation?',
        options: ['CH₃CH(OH)CH₂CHO', 'CH₃COCH₃', 'CH₃CH₂CHO', 'CH₃COOH'],
        correct: 0,
        solution: `Aldol condensation of acetaldehyde:

2CH₃CHO → CH₃CH(OH)CH₂CHO

Mechanism:
1. Base abstracts α-hydrogen
2. Carbanion attacks carbonyl of another molecule
3. Forms β-hydroxy aldehyde

Product: 3-Hydroxybutanal (CH₃CH(OH)CH₂CHO)

Answer: A) CH₃CH(OH)CH₂CHO

On heating, this can dehydrate to form:
CH₃CH=CHCHO (Crotonaldehyde)`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'Which reagent converts carboxylic acid to acid chloride?',
        options: ['PCl₃', 'SOCl₂', 'Cl₂', 'HCl'],
        correct: 1,
        solution: `Conversion of carboxylic acid to acid chloride:

RCOOH + SOCl₂ → RCOCl + SO₂ + HCl

SOCl₂ (Thionyl chloride) is the best reagent because:
1. By-products (SO₂ and HCl) are gases
2. Easy to remove
3. Pure acid chloride obtained

Answer: B) SOCl₂

Other reagents:
- PCl₃: Also works but gives POCl₃ as by-product
- PCl₅: Works but gives POCl₃ and HCl
- Cl₂: Doesn't work for this conversion`
      },
      {
        id: 4,
        difficulty: 'olympiad',
        question: 'An organic compound (C₄H₈O) gives positive iodoform test but negative Fehling\'s test. What is the compound?',
        options: ['Butanal', 'Butanone', '2-Methylpropanal', 'Butanoic acid'],
        correct: 1,
        solution: `Given:
- Molecular formula: C₄H₈O
- Positive iodoform test
- Negative Fehling's test

Analysis:

**Iodoform test positive**: 
Requires CH₃CO- group (methyl ketone) or CH₃CH(OH)-

**Fehling's test negative**:
Not an aldehyde (aldehydes give positive)

Therefore: Must be a methyl ketone

Options analysis:
A) Butanal (CH₃CH₂CH₂CHO): Aldehyde - Fehling's positive ✗
B) Butanone (CH₃COCH₂CH₃): Methyl ketone - Both tests match ✓
C) 2-Methylpropanal: Aldehyde - Fehling's positive ✗
D) Butanoic acid: Not C₄H₈O ✗

Answer: B) Butanone (CH₃COCH₂CH₃)

Butanone has CH₃CO- group, so gives positive iodoform test.
Being a ketone, it gives negative Fehling's test.`
      }
    ]
  },

  // ==================== CHAPTER 16: ELECTROCHEMISTRY ====================
  c16: {
    theory: {
      introduction: `Electrochemistry deals with the interconversion of chemical energy and electrical energy. It includes galvanic cells (batteries), electrolytic cells, and corrosion - all crucial for modern technology.`,
      sections: [
        {
          title: 'Redox Reactions',
          content: `**Oxidation**: Loss of electrons, increase in oxidation number
**Reduction**: Gain of electrons, decrease in oxidation number

**Oxidizing Agent**: Gets reduced (accepts electrons)
**Reducing Agent**: Gets oxidized (donates electrons)

**Balancing Redox Equations**:

**1. Oxidation Number Method**:
- Assign oxidation numbers
- Identify what's oxidized and reduced
- Balance atoms and charges

**2. Half-Reaction Method**:
- Write oxidation and reduction half-reactions
- Balance each half-reaction
- Multiply to equalize electrons
- Add half-reactions

**Example**: 
MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (in acidic medium)

Oxidation: Fe²⁺ → Fe³⁺ + e⁻
Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O

Balanced: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O`,
          keyPoints: [
            'OIL RIG: Oxidation Is Loss, Reduction Is Gain',
            'Oxidizing agent gets reduced',
            'Reducing agent gets oxidized',
            'Electrons must balance in redox equations'
          ]
        },
        {
          title: 'Electrochemical Cells',
          content: `**Galvanic (Voltaic) Cell**:
- Converts chemical energy to electrical energy
- Spontaneous redox reaction
- ΔG < 0, E°cell > 0

**Components**:
- **Anode**: Oxidation occurs (negative terminal)
- **Cathode**: Reduction occurs (positive terminal)
- **Salt bridge**: Maintains electrical neutrality
- **External circuit**: Electron flow

**Daniel Cell**:
Anode: Zn → Zn²⁺ + 2e⁻
Cathode: Cu²⁺ + 2e⁻ → Cu
Overall: Zn + Cu²⁺ → Zn²⁺ + Cu

**Cell Notation**:
Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)

**Electrolytic Cell**:
- Converts electrical energy to chemical energy
- Non-spontaneous reaction
- ΔG > 0, E°cell < 0
- External voltage applied

**Differences**:
| Galvanic | Electrolytic |
|----------|--------------|
| Spontaneous | Non-spontaneous |
| Anode (-) | Anode (+) |
| Cathode (+) | Cathode (-) |
| Generates electricity | Consumes electricity |`,
          formulas: [
            { name: 'Cell potential', expr: 'E°cell = E°cathode - E°anode' },
            { name: 'Gibbs energy', expr: 'ΔG° = -nFE°cell' },
            { name: 'Nernst equation', expr: 'Ecell = E°cell - (RT/nF)ln Q' }
          ]
        },
        {
          title: 'Electrode Potential',
          content: `**Standard Electrode Potential (E°)**:
Potential of half-cell under standard conditions (25°C, 1 atm, 1 M)

**Standard Hydrogen Electrode (SHE)**:
- Reference electrode
- E° = 0.00 V (by definition)
- 2H⁺ + 2e⁻ ⇌ H₂

**Electrochemical Series**:
Arranged in order of standard reduction potentials

**Strong Reducing Agents** (easily oxidized):
Li, K, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, H₂

**Strong Oxidizing Agents** (easily reduced):
F₂, Cl₂, Br₂, I₂, Cu²⁺, Ag⁺, Hg²⁺

**Applications**:
1. Predict spontaneity: E°cell > 0 → spontaneous
2. Compare oxidizing/reducing power
3. Predict products of electrolysis

**Nernst Equation**:
Ecell = E°cell - (0.0591/n) log Q (at 25°C)

where Q = reaction quotient

**At equilibrium**: Ecell = 0
E°cell = (0.0591/n) log K`,
          formulas: [
            { name: 'Nernst equation', expr: 'E = E° - (RT/nF)ln Q' },
            { name: 'At 25°C', expr: 'E = E° - (0.0591/n)log Q' },
            { name: 'Equilibrium', expr: 'E°cell = (0.0591/n)log K' },
            { name: 'Gibbs-potential', expr: 'ΔG = -nFE' }
          ]
        },
        {
          title: 'Faraday\'s Laws of Electrolysis',
          content: `**First Law**:
Mass deposited is proportional to quantity of electricity passed
m ∝ Q
m = ZQ = Zit

where Z = electrochemical equivalent

**Second Law**:
For same quantity of electricity, masses deposited are proportional to equivalent weights
m₁/m₂ = E₁/E₂

**Faraday's Constant**:
F = 96500 C/mol = charge on 1 mole of electrons

**Electrochemical Equivalent**:
Z = E/F = M/(nF)

where:
- E = equivalent weight
- M = molar mass
- n = number of electrons

**Quantitative Electrolysis**:
m = (M × i × t)/(n × F)

**Applications**:
1. Electroplating (Cu, Ag, Au, Cr, Ni)
2. Electrorefining (purification of metals)
3. Extraction of metals (Al, Na, Mg)
4. Production of chemicals (NaOH, Cl₂, H₂)`,
          formulas: [
            { name: 'Mass deposited', expr: 'm = (M×i×t)/(n×F)' },
            { name: 'Faraday constant', expr: 'F = 96500 C/mol' },
            { name: 'Charge', expr: 'Q = i×t', unit: 'Coulomb' },
            { name: 'ECE', expr: 'Z = M/(n×F)' }
          ]
        },
        {
          title: 'Batteries and Fuel Cells',
          content: `**Primary Cells** (Non-rechargeable):

**1. Dry Cell** (Leclanché cell):
- Anode: Zn
- Cathode: Carbon rod + MnO₂
- Electrolyte: NH₄Cl + ZnCl₂ paste
- Voltage: 1.5 V

**2. Mercury Cell**:
- Anode: Zn-Hg amalgam
- Cathode: HgO + Carbon
- Electrolyte: KOH paste
- Voltage: 1.35 V (constant)

**Secondary Cells** (Rechargeable):

**1. Lead-Acid Battery**:
- Anode: Pb
- Cathode: PbO₂
- Electrolyte: H₂SO₄
- Voltage: 2 V per cell

Discharge: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O
Charge: Reverse reaction

**2. Nickel-Cadmium (NiCd)**:
- Rechargeable
- Voltage: 1.4 V

**3. Lithium-Ion Battery**:
- High energy density
- Lightweight
- Used in phones, laptops

**Fuel Cells**:
- Continuous supply of fuel
- High efficiency (~70%)

**H₂-O₂ Fuel Cell**:
Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻
Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻
Overall: 2H₂ + O₂ → 2H₂O

**Advantages**:
- Clean (only water produced)
- High efficiency
- Used in spacecraft`,
          keyPoints: [
            'Primary cells: Non-rechargeable',
            'Secondary cells: Rechargeable',
            'Fuel cells: Continuous fuel supply',
            'Lead-acid: Most common car battery'
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Calculate E°cell for: Zn + Cu²⁺ → Zn²⁺ + Cu. Given: E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V',
        options: ['0.42 V', '1.10 V', '-0.42 V', '-1.10 V'],
        correct: 1,
        solution: `Given:
E°(Zn²⁺/Zn) = -0.76 V (anode, oxidation)
E°(Cu²⁺/Cu) = +0.34 V (cathode, reduction)

E°cell = E°cathode - E°anode
E°cell = 0.34 - (-0.76)
E°cell = 0.34 + 0.76
E°cell = 1.10 V

Answer: B) 1.10 V

Since E°cell > 0, reaction is spontaneous.`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'How much charge is required to deposit 1 mole of Al from Al³⁺? (F = 96500 C/mol)',
        options: ['96500 C', '193000 C', '289500 C', '386000 C'],
        correct: 2,
        solution: `For Al³⁺ + 3e⁻ → Al

Number of electrons required = 3 per Al atom
For 1 mole of Al = 3 moles of electrons

Charge = n × F
Q = 3 × 96500
Q = 289500 C

Answer: C) 289500 C`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'A current of 2 A is passed through CuSO₄ solution for 16 minutes 5 seconds. Calculate mass of Cu deposited. (Atomic mass of Cu = 63.5, F = 96500 C/mol)',
        options: ['0.635 g', '1.27 g', '0.318 g', '2.54 g'],
        correct: 0,
        solution: `Given:
i = 2 A
t = 16 min 5 s = 965 s
M(Cu) = 63.5 g/mol
n = 2 (Cu²⁺ + 2e⁻ → Cu)
F = 96500 C/mol

Mass deposited: m = (M × i × t)/(n × F)

m = (63.5 × 2 × 965)/(2 × 96500)
m = 122555/193000
m = 0.635 g

Answer: A) 0.635 g`
      },
      {
        id: 4,
        difficulty: 'olympiad',
        question: 'Calculate ΔG° for the cell: Zn + Cu²⁺ → Zn²⁺ + Cu, if E°cell = 1.10 V. (F = 96500 C/mol)',
        options: ['-106.15 kJ', '-212.3 kJ', '-318.45 kJ', '-424.6 kJ'],
        correct: 1,
        solution: `Given: E°cell = 1.10 V, F = 96500 C/mol

Reaction: Zn + Cu²⁺ → Zn²⁺ + Cu
Number of electrons transferred: n = 2

ΔG° = -nFE°cell
ΔG° = -2 × 96500 × 1.10
ΔG° = -212300 J
ΔG° = -212.3 kJ

Answer: B) -212.3 kJ

Negative ΔG° confirms reaction is spontaneous.`
      }
    ]
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPLETE_CHEMISTRY_2;
}
</body>
</html>