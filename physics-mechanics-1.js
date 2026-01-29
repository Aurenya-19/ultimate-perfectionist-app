<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 1: Units and Measurements
// Complete content with theory, derivations, examples, and problems

const PHYSICS_MECHANICS_1 = {
    id: 'physics-mechanics-1',
    title: 'Units and Measurements',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Measurement',
            content: `
                <h3>What is Measurement?</h3>
                <p>Measurement is the process of comparing an unknown quantity with a known standard quantity of the same kind. The result of measurement is expressed as a numerical value along with a unit.</p>
                
                <div class="example-box">
                    <strong>Example:</strong> When we say "the length of a table is 2 meters", we are comparing the table's length with a standard unit called "meter".
                </div>
                
                <h3>Need for Measurement</h3>
                <ul>
                    <li>To quantify physical quantities</li>
                    <li>To establish relationships between quantities</li>
                    <li>To verify laws of physics experimentally</li>
                    <li>To communicate scientific information precisely</li>
                </ul>
                
                <h3>Fundamental vs Derived Quantities</h3>
                <p><strong>Fundamental Quantities:</strong> Quantities that are independent and cannot be expressed in terms of other quantities.</p>
                <p>Examples: Length, Mass, Time, Temperature, Electric Current, Amount of Substance, Luminous Intensity</p>
                
                <p><strong>Derived Quantities:</strong> Quantities that can be expressed in terms of fundamental quantities.</p>
                <p>Examples: Area (Length²), Volume (Length³), Speed (Length/Time), Force (Mass × Acceleration)</p>
            `
        },
        
        {
            id: 'si-units',
            title: '2. SI Units (International System of Units)',
            content: `
                <h3>Seven Base SI Units</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Unit Name</th>
                            <th>Symbol</th>
                            <th>Definition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Length</td>
                            <td>Meter</td>
                            <td>m</td>
                            <td>Distance traveled by light in vacuum in 1/299,792,458 seconds</td>
                        </tr>
                        <tr>
                            <td>Mass</td>
                            <td>Kilogram</td>
                            <td>kg</td>
                            <td>Mass of platinum-iridium cylinder kept at BIPM, France</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>Second</td>
                            <td>s</td>
                            <td>Duration of 9,192,631,770 periods of radiation from Cs-133 atom</td>
                        </tr>
                        <tr>
                            <td>Electric Current</td>
                            <td>Ampere</td>
                            <td>A</td>
                            <td>Current that produces 2×10⁻⁷ N/m force between two parallel conductors</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>Kelvin</td>
                            <td>K</td>
                            <td>1/273.16 of thermodynamic temperature of triple point of water</td>
                        </tr>
                        <tr>
                            <td>Amount of Substance</td>
                            <td>Mole</td>
                            <td>mol</td>
                            <td>Amount containing 6.022×10²³ elementary entities</td>
                        </tr>
                        <tr>
                            <td>Luminous Intensity</td>
                            <td>Candela</td>
                            <td>cd</td>
                            <td>Luminous intensity of source emitting 540×10¹² Hz radiation</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Important Derived Units</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Symbol</th>
                            <th>In Base Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Force</td>
                            <td>Newton</td>
                            <td>N</td>
                            <td>kg⋅m⋅s⁻²</td>
                        </tr>
                        <tr>
                            <td>Energy</td>
                            <td>Joule</td>
                            <td>J</td>
                            <td>kg⋅m²⋅s⁻²</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td>Watt</td>
                            <td>W</td>
                            <td>kg⋅m²⋅s⁻³</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>Pascal</td>
                            <td>Pa</td>
                            <td>kg⋅m⁻¹⋅s⁻²</td>
                        </tr>
                        <tr>
                            <td>Frequency</td>
                            <td>Hertz</td>
                            <td>Hz</td>
                            <td>s⁻¹</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'dimensional-analysis',
            title: '3. Dimensional Analysis',
            content: `
                <h3>What are Dimensions?</h3>
                <p>Dimensions of a physical quantity are the powers to which the fundamental units must be raised to represent that quantity.</p>
                
                <p><strong>Notation:</strong> [Quantity] = [M^a L^b T^c]</p>
                <p>Where M = Mass, L = Length, T = Time</p>
                
                <h3>Dimensions of Common Quantities</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Formula</th>
                            <th>Dimensions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Area</td>
                            <td>Length × Width</td>
                            <td>[L²]</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td>Length × Width × Height</td>
                            <td>[L³]</td>
                        </tr>
                        <tr>
                            <td>Velocity</td>
                            <td>Distance / Time</td>
                            <td>[LT⁻¹]</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>Velocity / Time</td>
                            <td>[LT⁻²]</td>
                        </tr>
                        <tr>
                            <td>Force</td>
                            <td>Mass × Acceleration</td>
                            <td>[MLT⁻²]</td>
                        </tr>
                        <tr>
                            <td>Momentum</td>
                            <td>Mass × Velocity</td>
                            <td>[MLT⁻¹]</td>
                        </tr>
                        <tr>
                            <td>Energy</td>
                            <td>Force × Distance</td>
                            <td>[ML²T⁻²]</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td>Energy / Time</td>
                            <td>[ML²T⁻³]</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>Force / Area</td>
                            <td>[ML⁻¹T⁻²]</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Applications of Dimensional Analysis</h3>
                
                <h4>1. Checking Correctness of Equations</h4>
                <div class="example-box">
                    <strong>Example:</strong> Check if v² = u² + 2as is dimensionally correct.
                    <br><br>
                    LHS: [v²] = [LT⁻¹]² = [L²T⁻²]
                    <br>
                    RHS: [u²] = [L²T⁻²], [2as] = [LT⁻²][L] = [L²T⁻²]
                    <br>
                    Since LHS = RHS, equation is dimensionally correct ✓
                </div>
                
                <h4>2. Deriving Relations Between Quantities</h4>
                <div class="example-box">
                    <strong>Example:</strong> Derive the formula for time period of simple pendulum.
                    <br><br>
                    Let T depend on: length (l), mass (m), acceleration due to gravity (g)
                    <br>
                    T = k × l^a × m^b × g^c (where k is dimensionless constant)
                    <br><br>
                    Dimensions: [T] = [L]^a × [M]^b × [LT⁻²]^c
                    <br>
                    [M⁰L⁰T¹] = [M^b L^(a+c) T^(-2c)]
                    <br><br>
                    Comparing powers:
                    <br>
                    For M: b = 0
                    <br>
                    For L: a + c = 0 → a = -c
                    <br>
                    For T: -2c = 1 → c = -1/2, a = 1/2
                    <br><br>
                    Therefore: T = k × l^(1/2) × g^(-1/2) = k√(l/g)
                    <br>
                    (Actual formula: T = 2π√(l/g), where k = 2π)
                </div>
                
                <h4>3. Converting Units</h4>
                <div class="example-box">
                    <strong>Example:</strong> Convert 1 Newton to dyne.
                    <br><br>
                    1 N = 1 kg⋅m⋅s⁻²
                    <br>
                    1 dyne = 1 g⋅cm⋅s⁻²
                    <br><br>
                    1 N = 1000 g × 100 cm × s⁻²
                    <br>
                    1 N = 100,000 g⋅cm⋅s⁻²
                    <br>
                    1 N = 10⁵ dyne
                </div>
            `
        },
        
        {
            id: 'significant-figures',
            title: '4. Significant Figures',
            content: `
                <h3>What are Significant Figures?</h3>
                <p>Significant figures in a measurement are all the digits that are known with certainty plus one uncertain digit.</p>
                
                <h3>Rules for Counting Significant Figures</h3>
                <ol>
                    <li><strong>All non-zero digits are significant</strong>
                        <br>Example: 1234 has 4 significant figures
                    </li>
                    <li><strong>Zeros between non-zero digits are significant</strong>
                        <br>Example: 1002 has 4 significant figures
                    </li>
                    <li><strong>Leading zeros are NOT significant</strong>
                        <br>Example: 0.0025 has 2 significant figures (2 and 5)
                    </li>
                    <li><strong>Trailing zeros after decimal are significant</strong>
                        <br>Example: 2.500 has 4 significant figures
                    </li>
                    <li><strong>Trailing zeros in whole numbers without decimal are NOT significant</strong>
                        <br>Example: 1200 has 2 significant figures (unless specified)
                    </li>
                </ol>
                
                <h3>Operations with Significant Figures</h3>
                
                <h4>Addition and Subtraction</h4>
                <p>Result should have same number of decimal places as the number with least decimal places.</p>
                <div class="example-box">
                    <strong>Example:</strong>
                    <br>12.11 (2 decimal places)
                    <br>+ 18.0 (1 decimal place)
                    <br>+ 1.012 (3 decimal places)
                    <br>= 31.122 → <strong>31.1</strong> (rounded to 1 decimal place)
                </div>
                
                <h4>Multiplication and Division</h4>
                <p>Result should have same number of significant figures as the number with least significant figures.</p>
                <div class="example-box">
                    <strong>Example:</strong>
                    <br>2.5 (2 sig figs) × 3.42 (3 sig figs) = 8.55 → <strong>8.6</strong> (2 sig figs)
                </div>
                
                <h3>Rounding Off Rules</h3>
                <ul>
                    <li>If digit to be dropped is < 5, leave the preceding digit unchanged</li>
                    <li>If digit to be dropped is > 5, increase preceding digit by 1</li>
                    <li>If digit to be dropped is exactly 5, round to nearest even number</li>
                </ul>
            `
        },
        
        {
            id: 'errors',
            title: '5. Errors in Measurement',
            content: `
                <h3>Types of Errors</h3>
                
                <h4>1. Systematic Errors</h4>
                <p>Errors that occur consistently in the same direction. Can be minimized by:</p>
                <ul>
                    <li>Using better instruments</li>
                    <li>Improving experimental technique</li>
                    <li>Applying corrections</li>
                </ul>
                
                <p><strong>Types of Systematic Errors:</strong></p>
                <ul>
                    <li><strong>Instrumental Error:</strong> Due to faulty instrument (e.g., zero error in vernier caliper)</li>
                    <li><strong>Personal Error:</strong> Due to individual bias or lack of proper setting</li>
                    <li><strong>Environmental Error:</strong> Due to changes in temperature, humidity, etc.</li>
                </ul>
                
                <h4>2. Random Errors</h4>
                <p>Errors that occur irregularly and are unpredictable. Can be minimized by:</p>
                <ul>
                    <li>Taking multiple measurements</li>
                    <li>Calculating mean value</li>
                    <li>Using statistical methods</li>
                </ul>
                
                <h3>Absolute Error, Relative Error, and Percentage Error</h3>
                
                <p><strong>Absolute Error (Δa):</strong> Difference between measured value and true value</p>
                <p class="formula">Δa = |a_measured - a_true|</p>
                
                <p><strong>Mean Absolute Error:</strong></p>
                <p class="formula">Δa_mean = (Δa₁ + Δa₂ + ... + Δaₙ) / n</p>
                
                <p><strong>Relative Error:</strong></p>
                <p class="formula">Relative Error = Δa_mean / a_mean</p>
                
                <p><strong>Percentage Error:</strong></p>
                <p class="formula">Percentage Error = (Δa_mean / a_mean) × 100%</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Five measurements of length are: 2.51 m, 2.53 m, 2.54 m, 2.49 m, 2.52 m
                    <br><br>
                    Mean value: a_mean = (2.51 + 2.53 + 2.54 + 2.49 + 2.52) / 5 = 2.518 m
                    <br><br>
                    Absolute errors:
                    <br>Δa₁ = |2.51 - 2.518| = 0.008 m
                    <br>Δa₂ = |2.53 - 2.518| = 0.012 m
                    <br>Δa₃ = |2.54 - 2.518| = 0.022 m
                    <br>Δa₄ = |2.49 - 2.518| = 0.028 m
                    <br>Δa₅ = |2.52 - 2.518| = 0.002 m
                    <br><br>
                    Mean absolute error: Δa_mean = (0.008 + 0.012 + 0.022 + 0.028 + 0.002) / 5 = 0.0144 m
                    <br><br>
                    Relative error = 0.0144 / 2.518 = 0.0057
                    <br>
                    Percentage error = 0.0057 × 100 = 0.57%
                    <br><br>
                    <strong>Final Result: (2.518 ± 0.014) m or 2.518 m ± 0.57%</strong>
                </div>
                
                <h3>Combination of Errors</h3>
                
                <h4>Addition/Subtraction: Z = A ± B</h4>
                <p class="formula">ΔZ = ΔA + ΔB</p>
                
                <h4>Multiplication/Division: Z = A × B or Z = A / B</h4>
                <p class="formula">ΔZ/Z = ΔA/A + ΔB/B</p>
                
                <h4>Power: Z = Aⁿ</h4>
                <p class="formula">ΔZ/Z = n × (ΔA/A)</p>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Dimensional Analysis',
            problem: 'Check whether the equation v = u + at is dimensionally correct, where v and u are velocities, a is acceleration, and t is time.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                LHS: [v] = [LT⁻¹]
                <br><br>
                RHS: [u] = [LT⁻¹]
                <br>[at] = [LT⁻²][T] = [LT⁻¹]
                <br><br>
                Therefore, [u + at] = [LT⁻¹]
                <br><br>
                Since LHS = RHS, the equation is <strong>dimensionally correct</strong> ✓
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Unit Conversion',
            problem: 'Convert 72 km/h to m/s.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                72 km/h = 72 × (1000 m) / (3600 s)
                <br>
                = 72 × 1000 / 3600 m/s
                <br>
                = 72000 / 3600 m/s
                <br>
                = <strong>20 m/s</strong>
                <br><br>
                <strong>Quick Method:</strong> Multiply by 5/18
                <br>
                72 × 5/18 = 20 m/s ✓
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Significant Figures',
            problem: 'Calculate the area of a rectangle with length 12.11 cm and width 7.2 cm. Express answer with correct significant figures.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Area = Length × Width
                <br>
                = 12.11 cm × 7.2 cm
                <br>
                = 87.192 cm²
                <br><br>
                Length has 4 significant figures
                <br>
                Width has 2 significant figures
                <br><br>
                Result should have 2 significant figures (least)
                <br><br>
                <strong>Final Answer: 87 cm²</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Error Calculation',
            problem: 'The radius of a sphere is measured as (5.0 ± 0.1) cm. Calculate the percentage error in the volume.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Volume of sphere: V = (4/3)πr³
                <br><br>
                Given: r = 5.0 cm, Δr = 0.1 cm
                <br><br>
                For V = r³:
                <br>
                ΔV/V = 3 × (Δr/r)
                <br>
                = 3 × (0.1/5.0)
                <br>
                = 3 × 0.02
                <br>
                = 0.06
                <br><br>
                Percentage error = 0.06 × 100 = <strong>6%</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'The dimensions of coefficient of viscosity are:',
            options: [
                '[ML⁻¹T⁻¹]',
                '[MLT⁻¹]',
                '[ML⁻¹T⁻²]',
                '[ML²T⁻¹]'
            ],
            correct: 0,
            explanation: 'Coefficient of viscosity η = F/(A × dv/dx) = [MLT⁻²]/([L²][T⁻¹]) = [ML⁻¹T⁻¹]',
            difficulty: 'medium'
        },
        
        {
            id: 'p2',
            question: 'How many significant figures are there in 0.00340?',
            options: ['2', '3', '4', '5'],
            correct: 1,
            explanation: 'Leading zeros are not significant. Only 3, 4, and 0 (trailing after decimal) are significant. Answer: 3',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'If force F = at + bt², where t is time, the dimensions of a/b are:',
            options: [
                '[T⁻¹]',
                '[T]',
                '[LT⁻¹]',
                '[L⁻¹T]'
            ],
            correct: 0,
            explanation: '[F] = [at] = [bt²], so [a] = [FT⁻¹] and [b] = [FT⁻²]. Therefore [a/b] = [T⁻¹]',
            difficulty: 'hard'
        },
        
        {
            id: 'p4',
            question: 'The percentage error in measurement of mass and speed are 2% and 3% respectively. The maximum error in kinetic energy (KE = ½mv²) is:',
            options: ['5%', '8%', '10%', '12%'],
            correct: 1,
            explanation: 'KE = ½mv². Error: ΔKE/KE = Δm/m + 2(Δv/v) = 2% + 2(3%) = 2% + 6% = 8%',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'Convert 1 joule to erg:',
            options: ['10⁵ erg', '10⁶ erg', '10⁷ erg', '10⁸ erg'],
            correct: 2,
            explanation: '1 J = 1 kg⋅m²⋅s⁻² = 1000 g × (100 cm)² × s⁻² = 10⁷ g⋅cm²⋅s⁻² = 10⁷ erg',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'SI system has 7 base units: meter, kilogram, second, ampere, kelvin, mole, candela',
        'Dimensional analysis helps check equation correctness and derive relations',
        'Significant figures represent precision of measurement',
        'Absolute error = |measured - true|, Relative error = absolute/mean',
        'For multiplication/division: relative errors add',
        'For powers: relative error multiplies by power',
        'Leading zeros are never significant',
        'Trailing zeros after decimal are always significant'
    ],
    
    formulae: [
        {
            name: 'Relative Error',
            formula: 'Relative Error = Δa/a',
            description: 'Ratio of absolute error to mean value'
        },
        {
            name: 'Percentage Error',
            formula: 'Percentage Error = (Δa/a) × 100%',
            description: 'Relative error expressed as percentage'
        },
        {
            name: 'Error in Sum/Difference',
            formula: 'ΔZ = ΔA + ΔB (for Z = A ± B)',
            description: 'Absolute errors add in addition/subtraction'
        },
        {
            name: 'Error in Product/Quotient',
            formula: 'ΔZ/Z = ΔA/A + ΔB/B (for Z = A×B or A/B)',
            description: 'Relative errors add in multiplication/division'
        },
        {
            name: 'Error in Power',
            formula: 'ΔZ/Z = n(ΔA/A) (for Z = Aⁿ)',
            description: 'Relative error multiplies by power'
        }
    ]
};

// Export for use in chapter viewer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_1;
}
</body>
</html>