<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// EXTENDED CHAPTER CONTENT - Part 1
// Adding detailed content for more chapters

const EXTENDED_CHAPTERS = {
  // ==================== GRAVITATION ====================
  p6: {
    theory: {
      introduction: `Gravitation is the force of attraction between any two objects in the universe. It is one of the four fundamental forces of nature and is responsible for the motion of planets, stars, and galaxies.`,
      sections: [
        {
          title: 'Universal Law of Gravitation',
          content: `Newton's Universal Law of Gravitation states that every particle in the universe attracts every other particle with a force that is:
          
1. Directly proportional to the product of their masses
2. Inversely proportional to the square of the distance between them
3. Acts along the line joining the two particles

This is a universal law - it applies to all objects, from atoms to galaxies.`,
          formulas: [
            { name: 'Gravitational Force', expr: 'F = G(m₁m₂)/r²', unit: 'N' },
            { name: 'Gravitational Constant', expr: 'G = 6.67 × 10⁻¹¹ N·m²/kg²', unit: 'N·m²/kg²' }
          ],
          keyPoints: [
            'Gravitational force is always attractive',
            'It is the weakest of all fundamental forces',
            'It has infinite range',
            'It is independent of the medium between the objects'
          ]
        },
        {
          title: 'Acceleration due to Gravity',
          content: `The acceleration experienced by an object due to Earth's gravitational pull is called acceleration due to gravity (g).

At Earth's surface: g = GM/R²

Where M is Earth's mass and R is Earth's radius.

Standard value: g = 9.8 m/s² ≈ 10 m/s²`,
          formulas: [
            { name: 'Surface gravity', expr: 'g = GM/R²', unit: 'm/s²' },
            { name: 'Gravity at height h', expr: 'gₕ = g(1 - 2h/R)', unit: 'm/s²', description: 'for h << R' },
            { name: 'Gravity at depth d', expr: 'gₐ = g(1 - d/R)', unit: 'm/s²' }
          ]
        },
        {
          title: 'Gravitational Potential Energy',
          content: `Gravitational potential energy is the energy possessed by an object due to its position in a gravitational field.

Near Earth's surface: U = mgh

In general gravitational field: U = -GMm/r

The negative sign indicates that gravitational force is attractive.`,
          formulas: [
            { name: 'PE near surface', expr: 'U = mgh', unit: 'J' },
            { name: 'PE in general', expr: 'U = -GMm/r', unit: 'J' },
            { name: 'PE at infinity', expr: 'U(∞) = 0', description: 'Reference point' }
          ]
        },
        {
          title: 'Escape Velocity',
          content: `Escape velocity is the minimum velocity required for an object to escape from the gravitational field of a planet.

For Earth: vₑ = 11.2 km/s

This is independent of the mass of the escaping object!`,
          formulas: [
            { name: 'Escape Velocity', expr: 'vₑ = √(2GM/R)', unit: 'm/s' },
            { name: 'Alternative form', expr: 'vₑ = √(2gR)', unit: 'm/s' }
          ],
          keyPoints: [
            'Escape velocity is independent of the mass of the object',
            'It depends only on the mass and radius of the planet',
            'For Earth: vₑ = 11.2 km/s',
            'For Moon: vₑ = 2.4 km/s'
          ]
        },
        {
          title: 'Orbital Velocity',
          content: `Orbital velocity is the velocity required for a satellite to orbit around a planet in a circular path.

For a satellite at height h above Earth's surface:
vₒ = √(GM/(R+h))

At Earth's surface (h = 0): vₒ = √(gR) = 7.9 km/s`,
          formulas: [
            { name: 'Orbital Velocity', expr: 'vₒ = √(GM/(R+h))', unit: 'm/s' },
            { name: 'At surface', expr: 'vₒ = √(gR)', unit: 'm/s' },
            { name: 'Relation', expr: 'vₑ = √2 × vₒ', description: 'Escape velocity is √2 times orbital velocity' }
          ]
        },
        {
          title: 'Kepler\'s Laws of Planetary Motion',
          content: `Johannes Kepler discovered three laws that describe planetary motion:

**First Law (Law of Orbits)**: All planets move in elliptical orbits with the Sun at one focus.

**Second Law (Law of Areas)**: The line joining a planet to the Sun sweeps out equal areas in equal intervals of time.

**Third Law (Law of Periods)**: The square of the time period of revolution of a planet is proportional to the cube of the semi-major axis of its orbit.

T² ∝ r³`,
          formulas: [
            { name: 'Kepler\'s Third Law', expr: 'T² = (4π²/GM)r³', unit: 's²' },
            { name: 'Alternative form', expr: 'T²/r³ = constant', description: 'Same for all planets around the Sun' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Calculate the gravitational force between two objects of masses 10 kg and 20 kg separated by a distance of 2 m. (G = 6.67 × 10⁻¹¹ N·m²/kg²)',
        options: ['3.34 × 10⁻⁹ N', '6.67 × 10⁻⁹ N', '1.67 × 10⁻⁹ N', '3.34 × 10⁻¹⁰ N'],
        correct: 0,
        solution: `Given: m₁ = 10 kg, m₂ = 20 kg, r = 2 m, G = 6.67 × 10⁻¹¹ N·m²/kg²

Using: F = Gm₁m₂/r²

F = (6.67 × 10⁻¹¹ × 10 × 20) / 2²
F = (6.67 × 10⁻¹¹ × 200) / 4
F = (1334 × 10⁻¹¹) / 4
F = 333.5 × 10⁻¹¹
F = 3.335 × 10⁻⁹ N
F ≈ 3.34 × 10⁻⁹ N

Answer: A) 3.34 × 10⁻⁹ N`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'At what height above the Earth\'s surface will the acceleration due to gravity be 25% of its value at the surface? (Radius of Earth = 6400 km)',
        options: ['3200 km', '6400 km', '9600 km', '12800 km'],
        correct: 1,
        solution: `Given: gₕ = 0.25g, R = 6400 km

At height h: gₕ = g(R/(R+h))²

0.25g = g(R/(R+h))²
0.25 = R²/(R+h)²
(R+h)² = 4R²
R+h = 2R
h = R = 6400 km

Answer: B) 6400 km`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'A satellite is orbiting Earth at a height equal to Earth\'s radius. What is its orbital velocity? (g = 10 m/s², R = 6400 km)',
        options: ['5.66 km/s', '7.9 km/s', '11.2 km/s', '15.8 km/s'],
        correct: 0,
        solution: `Given: h = R, g = 10 m/s², R = 6400 km = 6.4 × 10⁶ m

Orbital velocity at height h:
vₒ = √(GM/(R+h)) = √(gR²/(R+h))

Since h = R:
vₒ = √(gR²/2R) = √(gR/2)

vₒ = √(10 × 6.4 × 10⁶ / 2)
vₒ = √(32 × 10⁶)
vₒ = √32 × 10³
vₒ = 5.66 × 10³ m/s
vₒ = 5.66 km/s

Answer: A) 5.66 km/s`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'What is the escape velocity from the surface of a planet whose mass is 4 times and radius is 2 times that of Earth? (Escape velocity from Earth = 11.2 km/s)',
        options: ['11.2 km/s', '15.8 km/s', '22.4 km/s', '44.8 km/s'],
        correct: 1,
        solution: `Escape velocity: vₑ = √(2GM/R)

For the planet: M' = 4M, R' = 2R

vₑ' = √(2G(4M)/(2R))
vₑ' = √(8GM/2R)
vₑ' = √(4GM/R)
vₑ' = 2√(GM/R)

But vₑ(Earth) = √(2GM/R)

Therefore: vₑ' = √2 × vₑ(Earth)
vₑ' = 1.414 × 11.2
vₑ' = 15.8 km/s

Answer: B) 15.8 km/s`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'Two satellites A and B are orbiting Earth at heights R and 3R respectively, where R is Earth\'s radius. What is the ratio of their time periods (Tₐ/Tᵦ)?',
        options: ['1:2', '1:2√2', '1:4', '1:8'],
        correct: 1,
        solution: `Using Kepler's Third Law: T² ∝ r³

For satellite A: rₐ = R + R = 2R
For satellite B: rᵦ = R + 3R = 4R

Tₐ²/Tᵦ² = rₐ³/rᵦ³
Tₐ²/Tᵦ² = (2R)³/(4R)³
Tₐ²/Tᵦ² = 8R³/64R³
Tₐ²/Tᵦ² = 1/8

Tₐ/Tᵦ = 1/√8 = 1/(2√2)

Answer: B) 1:2√2`
      }
    ]
  },

  // ==================== THERMODYNAMICS ====================
  p8: {
    theory: {
      introduction: `Thermodynamics is the branch of physics that deals with heat, work, temperature, and their relation to energy, radiation, and physical properties of matter. It is based on four fundamental laws that govern energy transformations.`,
      sections: [
        {
          title: 'Zeroth Law of Thermodynamics',
          content: `If two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other.

This law establishes the concept of temperature and allows us to use thermometers.`,
          keyPoints: [
            'Establishes the concept of temperature',
            'Basis for temperature measurement',
            'Thermal equilibrium means no net heat flow'
          ]
        },
        {
          title: 'First Law of Thermodynamics',
          content: `The First Law is essentially the law of conservation of energy applied to thermodynamic systems.

**Statement**: The change in internal energy of a system equals the heat added to the system minus the work done by the system.

ΔU = Q - W

Where:
- ΔU = Change in internal energy
- Q = Heat added to the system (positive if added)
- W = Work done by the system (positive if done by system)`,
          formulas: [
            { name: 'First Law', expr: 'ΔU = Q - W', unit: 'J' },
            { name: 'Alternative form', expr: 'Q = ΔU + W', description: 'Heat supplied = Change in internal energy + Work done' },
            { name: 'For ideal gas', expr: 'ΔU = nCᵥΔT', unit: 'J' }
          ],
          keyPoints: [
            'Energy cannot be created or destroyed',
            'Heat and work are two ways of transferring energy',
            'Internal energy is a state function',
            'Heat and work are path functions'
          ]
        },
        {
          title: 'Thermodynamic Processes',
          content: `Different types of thermodynamic processes:

**1. Isothermal Process** (Constant Temperature)
- ΔT = 0, therefore ΔU = 0
- Q = W
- PV = constant

**2. Adiabatic Process** (No Heat Exchange)
- Q = 0
- ΔU = -W
- PVᵞ = constant

**3. Isochoric Process** (Constant Volume)
- ΔV = 0, therefore W = 0
- Q = ΔU = nCᵥΔT

**4. Isobaric Process** (Constant Pressure)
- ΔP = 0
- Q = nCₚΔT
- W = PΔV`,
          formulas: [
            { name: 'Isothermal work', expr: 'W = nRT ln(V₂/V₁)', unit: 'J' },
            { name: 'Adiabatic relation', expr: 'PVᵞ = constant', description: 'γ = Cₚ/Cᵥ' },
            { name: 'Adiabatic work', expr: 'W = (P₁V₁ - P₂V₂)/(γ-1)', unit: 'J' },
            { name: 'Isobaric work', expr: 'W = PΔV = nRΔT', unit: 'J' }
          ]
        },
        {
          title: 'Heat Capacity and Specific Heat',
          content: `**Molar Heat Capacity**: Heat required to raise the temperature of 1 mole of substance by 1 K.

For ideal gas:
- Cᵥ = (f/2)R (at constant volume)
- Cₚ = Cᵥ + R (at constant pressure)

Where f is degrees of freedom:
- Monatomic gas: f = 3
- Diatomic gas: f = 5
- Polyatomic gas: f = 6`,
          formulas: [
            { name: 'Mayer\'s Relation', expr: 'Cₚ - Cᵥ = R', unit: 'J/(mol·K)' },
            { name: 'Heat capacity ratio', expr: 'γ = Cₚ/Cᵥ', description: 'Adiabatic index' },
            { name: 'For monatomic', expr: 'Cᵥ = (3/2)R, Cₚ = (5/2)R, γ = 5/3' },
            { name: 'For diatomic', expr: 'Cᵥ = (5/2)R, Cₚ = (7/2)R, γ = 7/5' }
          ]
        },
        {
          title: 'Second Law of Thermodynamics',
          content: `The Second Law can be stated in multiple ways:

**Kelvin-Planck Statement**: It is impossible to construct a heat engine that operates in a cycle and produces no other effect than the absorption of heat from a reservoir and the performance of an equal amount of work.

**Clausius Statement**: It is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a cooler body to a hotter body.

Both statements are equivalent and introduce the concept of entropy.`,
          keyPoints: [
            'Heat cannot spontaneously flow from cold to hot',
            'No heat engine can be 100% efficient',
            'Entropy of an isolated system always increases',
            'Defines the direction of thermodynamic processes'
          ]
        },
        {
          title: 'Heat Engines and Efficiency',
          content: `A heat engine is a device that converts heat energy into mechanical work.

**Efficiency**: η = W/Qₕ = (Qₕ - Qc)/Qₕ = 1 - Qc/Qₕ

Where:
- Qₕ = Heat absorbed from hot reservoir
- Qc = Heat rejected to cold reservoir
- W = Work output

**Carnot Engine**: The most efficient heat engine possible
η_carnot = 1 - Tc/Tₕ`,
          formulas: [
            { name: 'Efficiency', expr: 'η = W/Qₕ = 1 - Qc/Qₕ', description: 'Always < 1' },
            { name: 'Carnot Efficiency', expr: 'η = 1 - Tc/Tₕ', description: 'Maximum possible efficiency' },
            { name: 'Work output', expr: 'W = Qₕ - Qc', unit: 'J' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'A system absorbs 500 J of heat and does 200 J of work. What is the change in internal energy?',
        options: ['300 J', '500 J', '700 J', '200 J'],
        correct: 0,
        solution: `Given: Q = 500 J, W = 200 J

Using First Law: ΔU = Q - W
ΔU = 500 - 200
ΔU = 300 J

Answer: A) 300 J`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'An ideal gas undergoes an isothermal expansion at 300 K. If the volume doubles, what is the work done by 2 moles of gas? (R = 8.31 J/(mol·K))',
        options: ['3456 J', '3600 J', '4152 J', '4986 J'],
        correct: 0,
        solution: `Given: T = 300 K, V₂ = 2V₁, n = 2 mol, R = 8.31 J/(mol·K)

For isothermal process:
W = nRT ln(V₂/V₁)
W = 2 × 8.31 × 300 × ln(2)
W = 4986 × 0.693
W = 3455.3 J
W ≈ 3456 J

Answer: A) 3456 J`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'A Carnot engine operates between 400 K and 300 K. If it absorbs 1000 J from the hot reservoir, how much work does it produce?',
        options: ['200 J', '250 J', '300 J', '350 J'],
        correct: 1,
        solution: `Given: Tₕ = 400 K, Tc = 300 K, Qₕ = 1000 J

Carnot efficiency:
η = 1 - Tc/Tₕ
η = 1 - 300/400
η = 1 - 0.75
η = 0.25 = 25%

Work output:
W = η × Qₕ
W = 0.25 × 1000
W = 250 J

Answer: B) 250 J`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'For a diatomic ideal gas, what is the ratio of molar heat capacities (γ = Cₚ/Cᵥ)?',
        options: ['5/3', '7/5', '4/3', '3/2'],
        correct: 1,
        solution: `For diatomic gas:
Degrees of freedom f = 5

Cᵥ = (f/2)R = (5/2)R
Cₚ = Cᵥ + R = (5/2)R + R = (7/2)R

γ = Cₚ/Cᵥ = [(7/2)R] / [(5/2)R]
γ = 7/5 = 1.4

Answer: B) 7/5`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'An ideal gas expands adiabatically from volume V to 2V. If the initial pressure is P and γ = 1.5, what is the final pressure?',
        options: ['P/2', 'P/2√2', 'P/2.83', 'P/4'],
        correct: 2,
        solution: `For adiabatic process: PVᵞ = constant

P₁V₁ᵞ = P₂V₂ᵞ
P × Vᵞ = P₂ × (2V)ᵞ
P × Vᵞ = P₂ × 2ᵞ × Vᵞ
P = P₂ × 2ᵞ

P₂ = P/2ᵞ = P/2^1.5
P₂ = P/(2 × √2)
P₂ = P/2.828
P₂ ≈ P/2.83

Answer: C) P/2.83`
      }
    ]
  },

  // ==================== ELECTROSTATICS ====================
  p11: {
    theory: {
      introduction: `Electrostatics is the study of electric charges at rest. It deals with the forces, fields, and potentials associated with static electric charges. This is one of the most important chapters in physics with applications in capacitors, electronics, and many other fields.`,
      sections: [
        {
          title: 'Electric Charge',
          content: `Electric charge is a fundamental property of matter that causes it to experience a force in an electromagnetic field.

**Properties of Charge**:
1. Charge is quantized: Q = ne (where n is an integer, e = 1.6 × 10⁻¹⁹ C)
2. Charge is conserved: Total charge in an isolated system remains constant
3. Charge is additive: Total charge = algebraic sum of individual charges
4. Charge is independent of velocity (unlike mass)

**Types of Charges**:
- Positive charge (proton)
- Negative charge (electron)
- Like charges repel, unlike charges attract`,
          formulas: [
            { name: 'Quantization', expr: 'Q = ne', unit: 'C (Coulomb)' },
            { name: 'Elementary charge', expr: 'e = 1.6 × 10⁻¹⁹ C', description: 'Charge of electron/proton' }
          ],
          keyPoints: [
            'Charge is quantized in units of e',
            'Charge is always conserved',
            'Charge can be transferred but not created or destroyed',
            'SI unit: Coulomb (C)'
          ]
        },
        {
          title: 'Coulomb\'s Law',
          content: `Coulomb's Law describes the electrostatic force between two point charges.

**Statement**: The force between two point charges is:
1. Directly proportional to the product of charges
2. Inversely proportional to the square of distance between them
3. Acts along the line joining the charges

F = k(q₁q₂)/r²

Where k = 1/(4πε₀) = 9 × 10⁹ N·m²/C²`,
          formulas: [
            { name: 'Coulomb\'s Law', expr: 'F = k(q₁q₂)/r²', unit: 'N' },
            { name: 'Coulomb constant', expr: 'k = 9 × 10⁹ N·m²/C²', description: '1/(4πε₀)' },
            { name: 'Permittivity', expr: 'ε₀ = 8.85 × 10⁻¹² C²/(N·m²)', description: 'Permittivity of free space' },
            { name: 'Vector form', expr: 'F⃗ = k(q₁q₂/r²)r̂', description: 'r̂ is unit vector' }
          ]
        },
        {
          title: 'Electric Field',
          content: `Electric field is the region around a charge where another charge experiences a force.

**Definition**: Electric field at a point is the force experienced by a unit positive charge placed at that point.

E⃗ = F⃗/q₀

For a point charge Q:
E = kQ/r²

**Direction**: 
- Away from positive charge
- Towards negative charge`,
          formulas: [
            { name: 'Electric Field', expr: 'E⃗ = F⃗/q₀', unit: 'N/C or V/m' },
            { name: 'Point charge field', expr: 'E = kQ/r²', unit: 'N/C' },
            { name: 'Field due to dipole', expr: 'E_axial = 2kp/r³', description: 'On axis' },
            { name: 'Field due to dipole', expr: 'E_equatorial = kp/r³', description: 'On equator' }
          ]
        },
        {
          title: 'Electric Potential',
          content: `Electric potential at a point is the work done in bringing a unit positive charge from infinity to that point.

V = W/q₀

For a point charge:
V = kQ/r

**Potential Difference**: 
ΔV = Vᵦ - Vₐ = -∫E⃗·dr⃗

**Relation between E and V**:
E = -dV/dr (in one dimension)
E⃗ = -∇V (in three dimensions)`,
          formulas: [
            { name: 'Electric Potential', expr: 'V = kQ/r', unit: 'V (Volt)' },
            { name: 'Potential difference', expr: 'ΔV = W/q', unit: 'V' },
            { name: 'Potential energy', expr: 'U = qV', unit: 'J' },
            { name: 'E-V relation', expr: 'E = -dV/dr', description: 'Field is negative gradient of potential' }
          ],
          keyPoints: [
            'Potential is a scalar quantity',
            'Potential at infinity is taken as zero',
            'Potential decreases in the direction of electric field',
            '1 Volt = 1 Joule/Coulomb'
          ]
        },
        {
          title: 'Gauss\'s Law',
          content: `Gauss's Law relates the electric flux through a closed surface to the charge enclosed by that surface.

**Statement**: The total electric flux through a closed surface is equal to 1/ε₀ times the charge enclosed.

Φ = ∮E⃗·dA⃗ = Q_enclosed/ε₀

**Applications**:
1. Field due to infinite line charge: E = λ/(2πε₀r)
2. Field due to infinite plane sheet: E = σ/(2ε₀)
3. Field due to spherical shell: E = 0 (inside), E = kQ/r² (outside)`,
          formulas: [
            { name: 'Gauss\'s Law', expr: 'Φ = Q/ε₀', unit: 'N·m²/C' },
            { name: 'Electric flux', expr: 'Φ = ∮E⃗·dA⃗', unit: 'N·m²/C' },
            { name: 'Line charge', expr: 'E = λ/(2πε₀r)', description: 'λ = linear charge density' },
            { name: 'Plane sheet', expr: 'E = σ/(2ε₀)', description: 'σ = surface charge density' }
          ]
        },
        {
          title: 'Capacitance and Capacitors',
          content: `A capacitor is a device that stores electric charge and energy.

**Capacitance**: The ability of a conductor to store charge.
C = Q/V

For parallel plate capacitor:
C = ε₀A/d

**Energy stored**:
U = ½QV = ½CV² = Q²/(2C)

**Combinations**:
- Series: 1/C_eq = 1/C₁ + 1/C₂ + ...
- Parallel: C_eq = C₁ + C₂ + ...`,
          formulas: [
            { name: 'Capacitance', expr: 'C = Q/V', unit: 'F (Farad)' },
            { name: 'Parallel plate', expr: 'C = ε₀A/d', unit: 'F' },
            { name: 'With dielectric', expr: 'C = Kε₀A/d', description: 'K = dielectric constant' },
            { name: 'Energy stored', expr: 'U = ½CV²', unit: 'J' },
            { name: 'Energy density', expr: 'u = ½ε₀E²', unit: 'J/m³' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'easy',
        question: 'Two charges +2 μC and -2 μC are placed 10 cm apart. Calculate the force between them. (k = 9 × 10⁹ N·m²/C²)',
        options: ['3.6 N', '7.2 N', '1.8 N', '0.36 N'],
        correct: 0,
        solution: `Given: q₁ = +2 μC = 2 × 10⁻⁶ C, q₂ = -2 μC = -2 × 10⁻⁶ C
r = 10 cm = 0.1 m, k = 9 × 10⁹ N·m²/C²

Using Coulomb's Law:
F = k|q₁q₂|/r²
F = (9 × 10⁹ × 2 × 10⁻⁶ × 2 × 10⁻⁶) / (0.1)²
F = (9 × 10⁹ × 4 × 10⁻¹²) / 0.01
F = 36 × 10⁻³ / 0.01
F = 3.6 N

Answer: A) 3.6 N`
      },
      {
        id: 2,
        difficulty: 'medium',
        question: 'A parallel plate capacitor has plates of area 0.01 m² separated by 1 mm. What is its capacitance? (ε₀ = 8.85 × 10⁻¹² C²/(N·m²))',
        options: ['8.85 × 10⁻¹¹ F', '8.85 × 10⁻¹⁰ F', '8.85 × 10⁻⁹ F', '8.85 × 10⁻⁸ F'],
        correct: 0,
        solution: `Given: A = 0.01 m², d = 1 mm = 10⁻³ m, ε₀ = 8.85 × 10⁻¹² C²/(N·m²)

Capacitance of parallel plate capacitor:
C = ε₀A/d
C = (8.85 × 10⁻¹² × 0.01) / 10⁻³
C = (8.85 × 10⁻¹⁴) / 10⁻³
C = 8.85 × 10⁻¹¹ F

Answer: A) 8.85 × 10⁻¹¹ F`
      },
      {
        id: 3,
        difficulty: 'hard',
        question: 'Three capacitors of 2 μF, 3 μF, and 6 μF are connected in series. What is the equivalent capacitance?',
        options: ['1 μF', '1.5 μF', '2 μF', '11 μF'],
        correct: 0,
        solution: `Given: C₁ = 2 μF, C₂ = 3 μF, C₃ = 6 μF

For series combination:
1/C_eq = 1/C₁ + 1/C₂ + 1/C₃
1/C_eq = 1/2 + 1/3 + 1/6
1/C_eq = 3/6 + 2/6 + 1/6
1/C_eq = 6/6 = 1

C_eq = 1 μF

Answer: A) 1 μF`
      },
      {
        id: 4,
        difficulty: 'medium',
        question: 'A charge of 10 μC is placed at the origin. What is the electric potential at a point 30 cm away? (k = 9 × 10⁹ N·m²/C²)',
        options: ['3 × 10⁵ V', '3 × 10⁴ V', '3 × 10³ V', '3 × 10² V'],
        correct: 0,
        solution: `Given: Q = 10 μC = 10 × 10⁻⁶ C, r = 30 cm = 0.3 m, k = 9 × 10⁹ N·m²/C²

Electric potential:
V = kQ/r
V = (9 × 10⁹ × 10 × 10⁻⁶) / 0.3
V = (9 × 10⁴) / 0.3
V = 3 × 10⁵ V

Answer: A) 3 × 10⁵ V`
      },
      {
        id: 5,
        difficulty: 'hard',
        question: 'A capacitor of 10 μF is charged to 100 V. How much energy is stored in it?',
        options: ['0.05 J', '0.5 J', '5 J', '50 J'],
        correct: 0,
        solution: `Given: C = 10 μF = 10 × 10⁻⁶ F, V = 100 V

Energy stored in capacitor:
U = ½CV²
U = ½ × 10 × 10⁻⁶ × (100)²
U = ½ × 10 × 10⁻⁶ × 10⁴
U = ½ × 10 × 10⁻²
U = 5 × 10⁻²
U = 0.05 J

Answer: A) 0.05 J`
      }
    ]
  }
};

// Merge with main database
if (typeof CHAPTERS_DATABASE !== 'undefined') {
  // Add extended content to existing chapters
  Object.keys(EXTENDED_CHAPTERS).forEach(key => {
    const subject = key.startsWith('p') ? 'physics' : key.startsWith('c') ? 'chemistry' : 'maths';
    const chapter = CHAPTERS_DATABASE[subject].find(ch => ch.id === key);
    if (chapter) {
      Object.assign(chapter, EXTENDED_CHAPTERS[key]);
    }
  });
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXTENDED_CHAPTERS;
}
</body>
</html>