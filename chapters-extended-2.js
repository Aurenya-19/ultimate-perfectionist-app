<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// EXTENDED CHAPTER CONTENT - Part 2
// Chemistry and Maths detailed content

const EXTENDED_CHAPTERS_2 = {
  // ==================== CHEMICAL BONDING ====================
  c4: {
    theory: {
      introduction: `Chemical bonding is the force of attraction that holds atoms together in molecules and compounds. Understanding chemical bonds is crucial for predicting molecular structure, properties, and reactivity.`,
      sections: [
        {
          title: 'Types of Chemical Bonds',
          content: `There are three main types of chemical bonds:

**1. Ionic Bond**: Formed by complete transfer of electrons from one atom to another
- Between metal and non-metal
- Forms ions (cations and anions)
- Strong electrostatic attraction
- Example: NaCl, MgO

**2. Covalent Bond**: Formed by sharing of electrons between atoms
- Between non-metals
- Shared electron pair
- Can be single, double, or triple
- Example: H₂, O₂, N₂

**3. Metallic Bond**: Formed by delocalized electrons in metals
- Between metal atoms
- Sea of electrons
- Explains conductivity and malleability
- Example: Cu, Fe, Al`,
          keyPoints: [
            'Ionic bonds form between metals and non-metals',
            'Covalent bonds form between non-metals',
            'Metallic bonds form between metal atoms',
            'Bond type determines physical and chemical properties'
          ]
        },
        {
          title: 'Lewis Structures',
          content: `Lewis structures (electron dot structures) show the bonding between atoms and lone pairs of electrons.

**Rules for Drawing Lewis Structures**:
1. Count total valence electrons
2. Arrange atoms (least electronegative in center)
3. Connect atoms with single bonds
4. Complete octets of outer atoms
5. Place remaining electrons on central atom
6. Form multiple bonds if needed

**Octet Rule**: Atoms tend to gain, lose, or share electrons to achieve 8 electrons in valence shell (except H which needs 2).`,
          keyPoints: [
            'Valence electrons are shown as dots',
            'Bonds are shown as lines (each line = 2 electrons)',
            'Lone pairs are shown as pairs of dots',
            'Most atoms follow octet rule'
          ]
        },
        {
          title: 'VSEPR Theory',
          content: `Valence Shell Electron Pair Repulsion (VSEPR) theory predicts molecular geometry based on electron pair repulsion.

**Basic Principle**: Electron pairs around a central atom repel each other and arrange themselves to minimize repulsion.

**Molecular Geometries**:
- 2 electron pairs: Linear (180°)
- 3 electron pairs: Trigonal planar (120°)
- 4 electron pairs: Tetrahedral (109.5°)
- 5 electron pairs: Trigonal bipyramidal
- 6 electron pairs: Octahedral (90°)

**Effect of Lone Pairs**:
Lone pair-lone pair > Lone pair-bond pair > Bond pair-bond pair`,
          keyPoints: [
            'Electron pairs repel each other',
            'Lone pairs occupy more space than bond pairs',
            'Molecular shape depends on both bonding and lone pairs',
            'Bond angles decrease with increasing lone pairs'
          ]
        },
        {
          title: 'Hybridization',
          content: `Hybridization is the mixing of atomic orbitals to form new hybrid orbitals suitable for bonding.

**Types of Hybridization**:

**sp Hybridization**: 1s + 1p → 2 sp orbitals
- Linear geometry (180°)
- Example: BeF₂, CO₂

**sp² Hybridization**: 1s + 2p → 3 sp² orbitals
- Trigonal planar (120°)
- Example: BF₃, C₂H₄

**sp³ Hybridization**: 1s + 3p → 4 sp³ orbitals
- Tetrahedral (109.5°)
- Example: CH₄, NH₃, H₂O

**sp³d Hybridization**: 1s + 3p + 1d → 5 sp³d orbitals
- Trigonal bipyramidal
- Example: PCl₅

**sp³d² Hybridization**: 1s + 3p + 2d → 6 sp³d² orbitals
- Octahedral
- Example: SF₆`,
          formulas: [
            { name: 'sp', expr: 'Linear, 180°', description: '2 electron pairs' },
            { name: 'sp²', expr: 'Trigonal planar, 120°', description: '3 electron pairs' },
            { name: 'sp³', expr: 'Tetrahedral, 109.5°', description: '4 electron pairs' },
            { name: 'sp³d', expr: 'Trigonal bipyramidal', description: '5 electron pairs' },
            { name: 'sp³d²', expr: 'Octahedral, 90°', description: '6 electron pairs' }
          ]
        },
        {
          title: 'Molecular Orbital Theory',
          content: `Molecular Orbital (MO) theory describes bonding in terms of molecular orbitals formed by combination of atomic orbitals.

**Key Concepts**:
1. Atomic orbitals combine to form molecular orbitals
2. Number of MOs = Number of combining AOs
3. Bonding MOs (lower energy) and Antibonding MOs (higher energy)
4. Electrons fill MOs according to Aufbau principle

**Bond Order**: BO = (Nb - Na)/2
Where Nb = electrons in bonding MOs, Na = electrons in antibonding MOs

**Magnetic Properties**:
- Paramagnetic: Unpaired electrons present
- Diamagnetic: All electrons paired`,
          formulas: [
            { name: 'Bond Order', expr: 'BO = (Nb - Na)/2', description: 'Higher BO = stronger bond' },
            { name: 'Bond Length', expr: 'BL ∝ 1/BO', description: 'Inversely proportional to bond order' }
          ],
          keyPoints: [
            'MO theory explains paramagnetism of O₂',
            'Bond order indicates bond strength',
            'Higher bond order = shorter bond length',
            'Zero bond order = no bond formation'
          ]
        },
        {
          title: 'Hydrogen Bonding',
          content: `Hydrogen bonding is a special type of dipole-dipole interaction involving hydrogen atom bonded to highly electronegative atoms (F, O, N).

**Types**:
1. **Intermolecular H-bonding**: Between different molecules
   - Example: H₂O, HF, NH₃
   - Increases boiling point

2. **Intramolecular H-bonding**: Within the same molecule
   - Example: o-nitrophenol
   - Decreases boiling point

**Effects of H-bonding**:
- High boiling and melting points
- High heat of vaporization
- Solubility in water
- Anomalous properties of water`,
          keyPoints: [
            'H-bonding is stronger than van der Waals forces',
            'Responsible for unique properties of water',
            'Important in biological molecules (DNA, proteins)',
            'Affects physical properties significantly'
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'What is the hybridization of carbon in methane (CH₄)?',
        options: ['sp', 'sp²', 'sp³', 'sp³d'],
        correct: 2,
        solution: `Methane (CH₄):
- Carbon forms 4 single bonds with 4 hydrogen atoms
- 4 electron pairs around carbon
- Tetrahedral geometry

Hybridization: sp³

Answer: C) sp³`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'Calculate the bond order of O₂ molecule using molecular orbital theory. (O₂ has 16 electrons)',
        options: ['1', '1.5', '2', '2.5'],
        correct: 2,
        solution: `Electronic configuration of O₂ (16 electrons):
σ1s² σ*1s² σ2s² σ*2s² σ2pz² π2px² π2py² π*2px¹ π*2py¹

Bonding electrons (Nb) = 10
Antibonding electrons (Na) = 6

Bond Order = (Nb - Na)/2
BO = (10 - 6)/2
BO = 4/2
BO = 2

Answer: C) 2`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'Which molecule has the smallest bond angle?',
        options: ['CH₄', 'NH₃', 'H₂O', 'BF₃'],
        correct: 2,
        solution: `Comparing bond angles:

CH₄: sp³, 0 lone pairs, 109.5°
NH₃: sp³, 1 lone pair, 107°
H₂O: sp³, 2 lone pairs, 104.5°
BF₃: sp², 0 lone pairs, 120°

Lone pairs repel more than bond pairs, decreasing bond angle.

H₂O has 2 lone pairs → smallest bond angle

Answer: C) H₂O`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'Which of the following exhibits hydrogen bonding?',
        options: ['CH₄', 'HCl', 'H₂O', 'H₂S'],
        correct: 2,
        solution: `Hydrogen bonding requires:
1. H bonded to highly electronegative atom (F, O, N)
2. Small size of F, O, N

CH₄: No H-bonding (C not electronegative enough)
HCl: No H-bonding (Cl too large)
H₂O: Yes! H bonded to O (small and electronegative)
H₂S: No H-bonding (S too large)

Answer: C) H₂O`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'The shape of XeF₄ molecule is:',
        options: ['Tetrahedral', 'Square planar', 'Octahedral', 'Square pyramidal'],
        correct: 1,
        solution: `XeF₄:
Xe has 8 valence electrons
4 F atoms contribute 4 electrons for bonding

Total electron pairs = (8 + 4)/2 = 6
Bonding pairs = 4
Lone pairs = 2

Hybridization: sp³d²
Geometry: Octahedral
Shape (considering only atoms): Square planar

Answer: B) Square planar`
      }
    ]
  },

  // ==================== COMPLEX NUMBERS ====================
  m2: {
    theory: {
      introduction: `Complex numbers extend the real number system to include solutions to equations like x² + 1 = 0. They have profound applications in engineering, physics, and advanced mathematics.`,
      sections: [
        {
          title: 'Definition and Basic Concepts',
          content: `A complex number is of the form z = a + ib, where:
- a is the real part: Re(z) = a
- b is the imaginary part: Im(z) = b
- i is the imaginary unit: i² = -1

**Important Values**:
- i² = -1
- i³ = -i
- i⁴ = 1
- i⁴ⁿ = 1 (for any integer n)

**Equality**: Two complex numbers are equal if their real and imaginary parts are equal separately.
a + ib = c + id ⟹ a = c and b = d`,
          formulas: [
            { name: 'Complex number', expr: 'z = a + ib', description: 'a, b are real' },
            { name: 'Imaginary unit', expr: 'i = √(-1), i² = -1' },
            { name: 'Real part', expr: 'Re(z) = a' },
            { name: 'Imaginary part', expr: 'Im(z) = b' }
          ],
          keyPoints: [
            'i is not a real number',
            'Every real number is a complex number (b = 0)',
            'Pure imaginary number: a = 0',
            'Complex numbers cannot be ordered'
          ]
        },
        {
          title: 'Algebraic Operations',
          content: `**Addition**: (a + ib) + (c + id) = (a + c) + i(b + d)

**Subtraction**: (a + ib) - (c + id) = (a - c) + i(b - d)

**Multiplication**: (a + ib)(c + id) = (ac - bd) + i(ad + bc)

**Division**: (a + ib)/(c + id) = [(a + ib)(c - id)]/[(c + id)(c - id)]
= [(ac + bd) + i(bc - ad)]/(c² + d²)

**Conjugate**: If z = a + ib, then z̄ = a - ib

**Properties of Conjugate**:
- z + z̄ = 2Re(z)
- z - z̄ = 2i·Im(z)
- z·z̄ = |z|²
- (z̄) = z`,
          formulas: [
            { name: 'Conjugate', expr: 'z̄ = a - ib' },
            { name: 'Product with conjugate', expr: 'z·z̄ = a² + b²' },
            { name: 'Sum of conjugates', expr: '(z₁ + z₂) = z̄₁ + z̄₂' },
            { name: 'Product of conjugates', expr: '(z₁·z₂) = z̄₁·z̄₂' }
          ]
        },
        {
          title: 'Modulus and Argument',
          content: `**Modulus**: The distance of complex number from origin
|z| = √(a² + b²)

**Argument**: The angle made with positive real axis
arg(z) = θ = tan⁻¹(b/a)

**Principal Argument**: -π < θ ≤ π

**Properties of Modulus**:
- |z| ≥ 0
- |z| = 0 ⟺ z = 0
- |z₁·z₂| = |z₁|·|z₂|
- |z₁/z₂| = |z₁|/|z₂|
- |z₁ + z₂| ≤ |z₁| + |z₂| (Triangle inequality)

**Properties of Argument**:
- arg(z₁·z₂) = arg(z₁) + arg(z₂)
- arg(z₁/z₂) = arg(z₁) - arg(z₂)
- arg(z̄) = -arg(z)`,
          formulas: [
            { name: 'Modulus', expr: '|z| = √(a² + b²)' },
            { name: 'Argument', expr: 'arg(z) = tan⁻¹(b/a)' },
            { name: 'Polar form', expr: 'z = r(cos θ + i sin θ)', description: 'r = |z|, θ = arg(z)' },
            { name: 'Euler form', expr: 'z = re^(iθ)' }
          ]
        },
        {
          title: 'Polar and Exponential Form',
          content: `**Polar Form**: z = r(cos θ + i sin θ)
Where r = |z| and θ = arg(z)

**Euler's Formula**: e^(iθ) = cos θ + i sin θ

**Exponential Form**: z = re^(iθ)

**De Moivre's Theorem**:
(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)

This is extremely useful for finding powers and roots of complex numbers.`,
          formulas: [
            { name: 'Euler\'s formula', expr: 'e^(iθ) = cos θ + i sin θ' },
            { name: 'De Moivre\'s theorem', expr: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)' },
            { name: 'nth roots', expr: 'z^(1/n) = r^(1/n)[cos((θ+2kπ)/n) + i sin((θ+2kπ)/n)]', description: 'k = 0,1,2,...,n-1' }
          ]
        },
        {
          title: 'Roots of Unity',
          content: `The nth roots of unity are the solutions of zⁿ = 1.

**nth roots of unity**:
ωₖ = e^(2πik/n) = cos(2πk/n) + i sin(2πk/n)
where k = 0, 1, 2, ..., n-1

**Cube roots of unity** (n = 3):
1, ω, ω²
where ω = e^(2πi/3) = -1/2 + i√3/2

**Properties**:
- 1 + ω + ω² = 0
- ω³ = 1
- ω² = ω̄ (conjugate)

**Sum of nth roots of unity** = 0`,
          formulas: [
            { name: 'Cube root of unity', expr: 'ω = e^(2πi/3) = -1/2 + i√3/2' },
            { name: 'Property', expr: '1 + ω + ω² = 0' },
            { name: 'Power', expr: 'ω³ = 1' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Find the value of i⁵⁰.',
        options: ['-1', '1', 'i', '-i'],
        correct: 0,
        solution: `We know: i⁴ = 1

i⁵⁰ = i^(4×12 + 2)
i⁵⁰ = (i⁴)¹² × i²
i⁵⁰ = 1¹² × i²
i⁵⁰ = i²
i⁵⁰ = -1

Answer: A) -1`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'If z = 3 + 4i, find |z|.',
        options: ['5', '7', '25', '√7'],
        correct: 0,
        solution: `Given: z = 3 + 4i
Here: a = 3, b = 4

Modulus: |z| = √(a² + b²)
|z| = √(3² + 4²)
|z| = √(9 + 16)
|z| = √25
|z| = 5

Answer: A) 5`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'Find the argument of z = -1 - i√3.',
        options: ['-π/3', '-2π/3', '2π/3', '4π/3'],
        correct: 1,
        solution: `Given: z = -1 - i√3
Here: a = -1, b = -√3

Both a and b are negative, so z is in third quadrant.

tan θ = b/a = (-√3)/(-1) = √3
Reference angle = π/3

In third quadrant: θ = -(π - π/3) = -2π/3

Or: θ = π + π/3 = 4π/3

Principal argument (between -π and π): -2π/3

Answer: B) -2π/3`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'If ω is a cube root of unity, find the value of (1 + ω)(1 + ω²).',
        options: ['0', '1', 'ω', 'ω²'],
        correct: 1,
        solution: `We know: 1 + ω + ω² = 0
Therefore: ω + ω² = -1

(1 + ω)(1 + ω²)
= 1 + ω² + ω + ω·ω²
= 1 + (ω + ω²) + ω³
= 1 + (-1) + 1    [since ω³ = 1]
= 1

Answer: B) 1`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'Find (1 + i)⁸.',
        options: ['16', '-16', '16i', '-16i'],
        correct: 0,
        solution: `Method 1: Using De Moivre's theorem

1 + i = √2(cos π/4 + i sin π/4)

(1 + i)⁸ = (√2)⁸(cos 8π/4 + i sin 8π/4)
= 2⁴(cos 2π + i sin 2π)
= 16(1 + 0)
= 16

Method 2: Direct calculation
(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i
(1 + i)⁴ = (2i)² = 4i² = -4
(1 + i)⁸ = (-4)² = 16

Answer: A) 16`
      }
    ]
  },

  // ==================== DIFFERENTIATION ====================
  m12: {
    theory: {
      introduction: `Differentiation is the process of finding the rate of change of a function. It is one of the fundamental concepts in calculus with applications in physics, engineering, economics, and many other fields.`,
      sections: [
        {
          title: 'Definition of Derivative',
          content: `The derivative of a function f(x) at a point x is defined as:

f'(x) = lim[h→0] [f(x+h) - f(x)]/h

This represents the instantaneous rate of change of f(x) with respect to x.

**Notations**:
- f'(x) (Lagrange notation)
- dy/dx (Leibniz notation)
- Df(x) (Operator notation)
- ẏ (Newton notation)

**Geometric Interpretation**: The derivative represents the slope of the tangent line to the curve at that point.`,
          formulas: [
            { name: 'Definition', expr: 'f\'(x) = lim[h→0] [f(x+h) - f(x)]/h' },
            { name: 'Alternative', expr: 'dy/dx = lim[Δx→0] Δy/Δx' }
          ],
          keyPoints: [
            'Derivative measures instantaneous rate of change',
            'Geometrically, it is the slope of tangent',
            'If derivative exists, function is differentiable',
            'Differentiability implies continuity (but not vice versa)'
          ]
        },
        {
          title: 'Basic Differentiation Rules',
          content: `**Power Rule**: d/dx(xⁿ) = nxⁿ⁻¹

**Constant Rule**: d/dx(c) = 0

**Constant Multiple**: d/dx[cf(x)] = c·f'(x)

**Sum Rule**: d/dx[f(x) + g(x)] = f'(x) + g'(x)

**Difference Rule**: d/dx[f(x) - g(x)] = f'(x) - g'(x)

**Product Rule**: d/dx[f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)

**Quotient Rule**: d/dx[f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)]/[g(x)]²

**Chain Rule**: d/dx[f(g(x))] = f'(g(x))·g'(x)`,
          formulas: [
            { name: 'Power rule', expr: 'd/dx(xⁿ) = nxⁿ⁻¹' },
            { name: 'Product rule', expr: '(uv)\' = u\'v + uv\'' },
            { name: 'Quotient rule', expr: '(u/v)\' = (u\'v - uv\')/v²' },
            { name: 'Chain rule', expr: 'dy/dx = (dy/du)·(du/dx)' }
          ]
        },
        {
          title: 'Derivatives of Standard Functions',
          content: `**Trigonometric Functions**:
- d/dx(sin x) = cos x
- d/dx(cos x) = -sin x
- d/dx(tan x) = sec² x
- d/dx(cot x) = -cosec² x
- d/dx(sec x) = sec x tan x
- d/dx(cosec x) = -cosec x cot x

**Inverse Trigonometric Functions**:
- d/dx(sin⁻¹ x) = 1/√(1-x²)
- d/dx(cos⁻¹ x) = -1/√(1-x²)
- d/dx(tan⁻¹ x) = 1/(1+x²)

**Exponential and Logarithmic**:
- d/dx(eˣ) = eˣ
- d/dx(aˣ) = aˣ ln a
- d/dx(ln x) = 1/x
- d/dx(logₐ x) = 1/(x ln a)`,
          formulas: [
            { name: 'Sine', expr: 'd/dx(sin x) = cos x' },
            { name: 'Cosine', expr: 'd/dx(cos x) = -sin x' },
            { name: 'Exponential', expr: 'd/dx(eˣ) = eˣ' },
            { name: 'Logarithm', expr: 'd/dx(ln x) = 1/x' },
            { name: 'Inverse sine', expr: 'd/dx(sin⁻¹ x) = 1/√(1-x²)' },
            { name: 'Inverse tangent', expr: 'd/dx(tan⁻¹ x) = 1/(1+x²)' }
          ]
        },
        {
          title: 'Logarithmic Differentiation',
          content: `Logarithmic differentiation is useful for:
1. Products and quotients of many functions
2. Functions with variable exponents
3. Complicated expressions

**Method**:
1. Take natural log of both sides: ln y = ln f(x)
2. Differentiate both sides: (1/y)·dy/dx = d/dx[ln f(x)]
3. Solve for dy/dx: dy/dx = y·d/dx[ln f(x)]

**Example**: For y = xˣ
ln y = x ln x
(1/y)·dy/dx = ln x + 1
dy/dx = xˣ(ln x + 1)`,
          keyPoints: [
            'Useful for products of many functions',
            'Essential for variable exponents',
            'Simplifies complex expressions',
            'Remember to multiply back by y'
          ]
        },
        {
          title: 'Implicit Differentiation',
          content: `When y is not explicitly expressed as a function of x, we use implicit differentiation.

**Method**:
1. Differentiate both sides with respect to x
2. Treat y as a function of x
3. Use chain rule: d/dx[f(y)] = f'(y)·dy/dx
4. Collect all dy/dx terms
5. Solve for dy/dx

**Example**: For x² + y² = 25
2x + 2y·dy/dx = 0
dy/dx = -x/y`,
          keyPoints: [
            'Used when y cannot be isolated',
            'Apply chain rule to y terms',
            'Collect dy/dx terms on one side',
            'Final answer may contain both x and y'
          ]
        },
        {
          title: 'Higher Order Derivatives',
          content: `**Second Derivative**: d²y/dx² = d/dx(dy/dx)
- Represents rate of change of rate of change
- Used to determine concavity

**nth Derivative**: dⁿy/dxⁿ

**Leibniz Theorem** (for nth derivative of product):
(uv)⁽ⁿ⁾ = Σ[k=0 to n] ⁿCₖ·u⁽ᵏ⁾·v⁽ⁿ⁻ᵏ⁾

**Applications**:
- Acceleration (second derivative of position)
- Concavity (second derivative test)
- Taylor series`,
          formulas: [
            { name: 'Second derivative', expr: 'f\'\'(x) = d²y/dx²' },
            { name: 'nth derivative', expr: 'f⁽ⁿ⁾(x) = dⁿy/dxⁿ' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Find dy/dx if y = x³ + 5x² - 3x + 7.',
        options: ['3x² + 10x - 3', '3x² + 5x - 3', 'x² + 10x - 3', '3x² + 10x + 7'],
        correct: 0,
        solution: `Given: y = x³ + 5x² - 3x + 7

Using power rule:
dy/dx = d/dx(x³) + d/dx(5x²) - d/dx(3x) + d/dx(7)
dy/dx = 3x² + 10x - 3 + 0
dy/dx = 3x² + 10x - 3

Answer: A) 3x² + 10x - 3`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'Find dy/dx if y = sin(x²).',
        options: ['cos(x²)', '2x cos(x²)', 'x cos(x²)', '2 cos(x²)'],
        correct: 1,
        solution: `Given: y = sin(x²)

Using chain rule:
Let u = x², then y = sin u

dy/dx = dy/du · du/dx
dy/dx = cos u · 2x
dy/dx = 2x cos(x²)

Answer: B) 2x cos(x²)`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'Find dy/dx if y = xˣ.',
        options: ['xˣ', 'xˣ⁻¹', 'xˣ(1 + ln x)', 'xˣ ln x'],
        correct: 2,
        solution: `Given: y = xˣ

Using logarithmic differentiation:
ln y = ln(xˣ)
ln y = x ln x

Differentiating both sides:
(1/y)·dy/dx = ln x + x·(1/x)
(1/y)·dy/dx = ln x + 1

dy/dx = y(ln x + 1)
dy/dx = xˣ(ln x + 1)
dy/dx = xˣ(1 + ln x)

Answer: C) xˣ(1 + ln x)`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'Find dy/dx if x² + y² = 25.',
        options: ['-x/y', 'x/y', '-y/x', 'y/x'],
        correct: 0,
        solution: `Given: x² + y² = 25

Using implicit differentiation:
d/dx(x²) + d/dx(y²) = d/dx(25)
2x + 2y·dy/dx = 0
2y·dy/dx = -2x
dy/dx = -2x/2y
dy/dx = -x/y

Answer: A) -x/y`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'If y = eˣ sin x, find d²y/dx².',
        options: ['2eˣ cos x', 'eˣ(sin x + cos x)', '2eˣ sin x', 'eˣ(sin x - cos x)'],
        correct: 0,
        solution: `Given: y = eˣ sin x

First derivative (using product rule):
dy/dx = eˣ sin x + eˣ cos x
dy/dx = eˣ(sin x + cos x)

Second derivative:
d²y/dx² = d/dx[eˣ(sin x + cos x)]
d²y/dx² = eˣ(sin x + cos x) + eˣ(cos x - sin x)
d²y/dx² = eˣ(sin x + cos x + cos x - sin x)
d²y/dx² = eˣ(2 cos x)
d²y/dx² = 2eˣ cos x

Answer: A) 2eˣ cos x`
      }
    ]
  }
};

// Merge with main database
if (typeof CHAPTERS_DATABASE !== 'undefined') {
  Object.keys(EXTENDED_CHAPTERS_2).forEach(key => {
    const subject = key.startsWith('p') ? 'physics' : key.startsWith('c') ? 'chemistry' : 'maths';
    const chapter = CHAPTERS_DATABASE[subject].find(ch => ch.id === key);
    if (chapter) {
      Object.assign(chapter, EXTENDED_CHAPTERS_2[key]);
    }
  });
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXTENDED_CHAPTERS_2;
}
</body>
</html>