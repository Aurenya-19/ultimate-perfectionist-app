<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 1: Sets, Relations and Functions
// Complete content with theory, examples, and problems

const MATHS_ALGEBRA_1 = {
    id: 'maths-algebra-1',
    title: 'Sets, Relations and Functions',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'sets',
            title: '1. Sets',
            content: `
                <h3>What is a Set?</h3>
                <p>A set is a well-defined collection of distinct objects.</p>
                
                <h3>Representation of Sets</h3>
                <p><strong>1. Roster Form:</strong> List all elements</p>
                <p>Example: A = {1, 2, 3, 4, 5}</p>
                
                <p><strong>2. Set-Builder Form:</strong> Describe property of elements</p>
                <p>Example: A = {x : x is a natural number less than 6}</p>
                
                <h3>Types of Sets</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Definition</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Empty Set (∅)</td>
                            <td>Set with no elements</td>
                            <td>{x : x² = -1, x ∈ ℝ}</td>
                        </tr>
                        <tr>
                            <td>Singleton Set</td>
                            <td>Set with exactly one element</td>
                            <td>{0}</td>
                        </tr>
                        <tr>
                            <td>Finite Set</td>
                            <td>Set with countable elements</td>
                            <td>{1, 2, 3, 4, 5}</td>
                        </tr>
                        <tr>
                            <td>Infinite Set</td>
                            <td>Set with uncountable elements</td>
                            <td>ℕ = {1, 2, 3, ...}</td>
                        </tr>
                        <tr>
                            <td>Universal Set (U)</td>
                            <td>Set containing all elements under consideration</td>
                            <td>U = ℝ (all real numbers)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Subset</h3>
                <p>A ⊆ B if every element of A is in B</p>
                <ul>
                    <li>Every set is subset of itself: A ⊆ A</li>
                    <li>Empty set is subset of every set: ∅ ⊆ A</li>
                    <li>Number of subsets of set with n elements = 2ⁿ</li>
                    <li>Number of proper subsets = 2ⁿ - 1</li>
                </ul>
                
                <h3>Power Set</h3>
                <p>Set of all subsets of A, denoted by P(A)</p>
                <div class="example-box">
                    <strong>Example:</strong> If A = {1, 2}, then
                    <br>P(A) = {∅, {1}, {2}, {1,2}}
                    <br>|P(A)| = 2² = 4
                </div>
            `
        },
        
        {
            id: 'set-operations',
            title: '2. Set Operations',
            content: `
                <h3>Union (A ∪ B)</h3>
                <p>Set of all elements in A or B or both</p>
                <p class="formula">A ∪ B = {x : x ∈ A or x ∈ B}</p>
                
                <h3>Intersection (A ∩ B)</h3>
                <p>Set of all elements common to both A and B</p>
                <p class="formula">A ∩ B = {x : x ∈ A and x ∈ B}</p>
                
                <h3>Difference (A - B)</h3>
                <p>Set of elements in A but not in B</p>
                <p class="formula">A - B = {x : x ∈ A and x ∉ B}</p>
                
                <h3>Complement (A')</h3>
                <p>Set of all elements in universal set U but not in A</p>
                <p class="formula">A' = U - A = {x : x ∈ U and x ∉ A}</p>
                
                <h3>Properties of Set Operations</h3>
                <ul>
                    <li><strong>Commutative:</strong> A ∪ B = B ∪ A, A ∩ B = B ∩ A</li>
                    <li><strong>Associative:</strong> (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
                    <li><strong>Distributive:</strong> A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
                    <li><strong>De Morgan's Laws:</strong>
                        <br>(A ∪ B)' = A' ∩ B'
                        <br>(A ∩ B)' = A' ∪ B'
                    </li>
                    <li><strong>Identity:</strong> A ∪ ∅ = A, A ∩ U = A</li>
                    <li><strong>Complement:</strong> A ∪ A' = U, A ∩ A' = ∅</li>
                </ul>
                
                <h3>Venn Diagrams</h3>
                <p>Pictorial representation of sets and their operations</p>
                
                <div class="formula-box">
                    <h4>Important Formulas</h4>
                    <p><strong>For two sets:</strong></p>
                    <p>n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</p>
                    <br>
                    <p><strong>For three sets:</strong></p>
                    <p>n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(C ∩ A) + n(A ∩ B ∩ C)</p>
                </div>
            `
        },
        
        {
            id: 'relations',
            title: '3. Relations',
            content: `
                <h3>What is a Relation?</h3>
                <p>A relation R from set A to set B is a subset of A × B (Cartesian product)</p>
                <p>If (a, b) ∈ R, we write a R b</p>
                
                <h3>Domain, Codomain, and Range</h3>
                <ul>
                    <li><strong>Domain:</strong> Set of all first elements {a : (a,b) ∈ R}</li>
                    <li><strong>Codomain:</strong> Set B</li>
                    <li><strong>Range:</strong> Set of all second elements {b : (a,b) ∈ R}</li>
                </ul>
                
                <h3>Types of Relations</h3>
                
                <h4>1. Empty Relation</h4>
                <p>R = ∅ (no element related)</p>
                
                <h4>2. Universal Relation</h4>
                <p>R = A × A (every element related to every element)</p>
                
                <h4>3. Reflexive Relation</h4>
                <p>(a, a) ∈ R for all a ∈ A</p>
                <p>Every element is related to itself</p>
                
                <h4>4. Symmetric Relation</h4>
                <p>If (a, b) ∈ R, then (b, a) ∈ R</p>
                
                <h4>5. Transitive Relation</h4>
                <p>If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</p>
                
                <h4>6. Equivalence Relation</h4>
                <p>Relation that is reflexive, symmetric, and transitive</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Let A = {1, 2, 3}
                    <br>R = {(1,1), (2,2), (3,3), (1,2), (2,1)}
                    <br><br>
                    <strong>Check:</strong>
                    <br>✓ Reflexive: (1,1), (2,2), (3,3) ∈ R
                    <br>✓ Symmetric: (1,2) and (2,1) both in R
                    <br>✗ Not Transitive: (1,2) and (2,1) in R but (1,1) already there
                    <br><br>
                    This is reflexive and symmetric but not an equivalence relation.
                </div>
            `
        },
        
        {
            id: 'functions',
            title: '4. Functions',
            content: `
                <h3>What is a Function?</h3>
                <p>A relation f from A to B is a function if every element of A has exactly one image in B.</p>
                <p>Notation: f : A → B</p>
                <p>If f(a) = b, then b is called image of a and a is called pre-image of b</p>
                
                <h3>Types of Functions</h3>
                
                <h4>1. One-One Function (Injective)</h4>
                <p>Different elements have different images</p>
                <p>If f(x₁) = f(x₂), then x₁ = x₂</p>
                
                <h4>2. Onto Function (Surjective)</h4>
                <p>Every element of codomain is image of some element in domain</p>
                <p>Range = Codomain</p>
                
                <h4>3. One-One and Onto (Bijective)</h4>
                <p>Function that is both injective and surjective</p>
                <p>Has inverse function</p>
                
                <h4>4. Many-One Function</h4>
                <p>Two or more elements have same image</p>
                
                <h4>5. Into Function</h4>
                <p>Range ⊂ Codomain (not all elements of codomain are images)</p>
                
                <div class="example-box">
                    <strong>Example:</strong>
                    <br>f : ℝ → ℝ, f(x) = x²
                    <br><br>
                    <strong>One-one?</strong> No, f(2) = f(-2) = 4
                    <br><strong>Onto?</strong> No, negative numbers not in range
                    <br><strong>Type:</strong> Many-one and into
                </div>
                
                <h3>Special Functions</h3>
                
                <h4>Identity Function</h4>
                <p>f(x) = x for all x ∈ A</p>
                
                <h4>Constant Function</h4>
                <p>f(x) = c for all x ∈ A (c is constant)</p>
                
                <h4>Polynomial Function</h4>
                <p>f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀</p>
                
                <h4>Rational Function</h4>
                <p>f(x) = p(x)/q(x), where p(x) and q(x) are polynomials</p>
                
                <h4>Modulus Function</h4>
                <p>f(x) = |x| = { x if x ≥ 0; -x if x < 0 }</p>
                
                <h4>Signum Function</h4>
                <p>f(x) = { 1 if x > 0; 0 if x = 0; -1 if x < 0 }</p>
                
                <h4>Greatest Integer Function</h4>
                <p>f(x) = [x] = greatest integer ≤ x</p>
                <p>Example: [2.7] = 2, [-1.5] = -2</p>
            `
        },
        
        {
            id: 'composition',
            title: '5. Composition of Functions',
            content: `
                <h3>Composition (fog)</h3>
                <p>If f : A → B and g : B → C, then gof : A → C</p>
                <p class="formula">(gof)(x) = g(f(x))</p>
                
                <div class="example-box">
                    <strong>Example:</strong>
                    <br>f(x) = 2x + 1, g(x) = x²
                    <br><br>
                    <strong>(gof)(x):</strong>
                    <br>= g(f(x))
                    <br>= g(2x + 1)
                    <br>= (2x + 1)²
                    <br>= 4x² + 4x + 1
                    <br><br>
                    <strong>(fog)(x):</strong>
                    <br>= f(g(x))
                    <br>= f(x²)
                    <br>= 2x² + 1
                </div>
                
                <h3>Properties of Composition</h3>
                <ul>
                    <li><strong>Not Commutative:</strong> fog ≠ gof (in general)</li>
                    <li><strong>Associative:</strong> (fog)oh = fo(goh)</li>
                    <li><strong>Identity:</strong> foI = Iof = f</li>
                </ul>
                
                <h3>Inverse Function</h3>
                <p>If f : A → B is bijective, then f⁻¹ : B → A exists</p>
                <p>Such that (fof⁻¹)(x) = (f⁻¹of)(x) = x</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find inverse of f(x) = 2x + 3
                    <br><br>
                    Let y = 2x + 3
                    <br>2x = y - 3
                    <br>x = (y - 3)/2
                    <br><br>
                    <strong>f⁻¹(x) = (x - 3)/2</strong>
                    <br><br>
                    <strong>Verification:</strong>
                    <br>f(f⁻¹(x)) = f((x-3)/2) = 2((x-3)/2) + 3 = x - 3 + 3 = x ✓
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Set Operations',
            problem: 'If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∪ B, A ∩ B, A - B, and B - A.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                <strong>A ∪ B:</strong> {1, 2, 3, 4, 5, 6}
                <br>(All elements from both sets)
                <br><br>
                <strong>A ∩ B:</strong> {3, 4}
                <br>(Common elements)
                <br><br>
                <strong>A - B:</strong> {1, 2}
                <br>(Elements in A but not in B)
                <br><br>
                <strong>B - A:</strong> {5, 6}
                <br>(Elements in B but not in A)
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Number of Elements',
            problem: 'In a class of 50 students, 30 play cricket, 25 play football, and 10 play both. How many play neither?',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: n(U) = 50, n(C) = 30, n(F) = 25, n(C ∩ F) = 10
                <br><br>
                Using: n(C ∪ F) = n(C) + n(F) - n(C ∩ F)
                <br>n(C ∪ F) = 30 + 25 - 10 = 45
                <br><br>
                Students playing neither = n(U) - n(C ∪ F)
                <br>= 50 - 45
                <br>= <strong>5 students</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Function Type',
            problem: 'Check if f : ℝ → ℝ, f(x) = 3x + 2 is one-one and onto.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                <strong>One-one check:</strong>
                <br>Let f(x₁) = f(x₂)
                <br>3x₁ + 2 = 3x₂ + 2
                <br>3x₁ = 3x₂
                <br>x₁ = x₂
                <br>∴ f is one-one ✓
                <br><br>
                <strong>Onto check:</strong>
                <br>Let y ∈ ℝ (codomain)
                <br>We need x such that f(x) = y
                <br>3x + 2 = y
                <br>x = (y - 2)/3 ∈ ℝ
                <br>∴ For every y, there exists x
                <br>∴ f is onto ✓
                <br><br>
                <strong>Conclusion: f is bijective (one-one and onto)</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Composition',
            problem: 'If f(x) = x² and g(x) = x + 1, find (fog)(2) and (gof)(2).',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                <strong>(fog)(2):</strong>
                <br>= f(g(2))
                <br>= f(2 + 1)
                <br>= f(3)
                <br>= 3²
                <br>= <strong>9</strong>
                <br><br>
                <strong>(gof)(2):</strong>
                <br>= g(f(2))
                <br>= g(2²)
                <br>= g(4)
                <br>= 4 + 1
                <br>= <strong>5</strong>
                <br><br>
                Note: fog ≠ gof
            `,
            difficulty: 'easy'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'If A = {1, 2, 3}, then number of subsets of A is:',
            options: ['6', '7', '8', '9'],
            correct: 2,
            explanation: 'Number of subsets = 2ⁿ = 2³ = 8',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'If n(A) = 10, n(B) = 15, n(A ∩ B) = 5, then n(A ∪ B) is:',
            options: ['20', '25', '30', '35'],
            correct: 0,
            explanation: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 10 + 15 - 5 = 20',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Which of the following is an equivalence relation on set A?',
            options: ['Reflexive only', 'Symmetric only', 'Transitive only', 'Reflexive, Symmetric and Transitive'],
            correct: 3,
            explanation: 'Equivalence relation must be reflexive, symmetric, and transitive',
            difficulty: 'medium'
        },
        
        {
            id: 'p4',
            question: 'The function f : ℝ → ℝ, f(x) = x³ is:',
            options: ['One-one but not onto', 'Onto but not one-one', 'Neither one-one nor onto', 'One-one and onto'],
            correct: 3,
            explanation: 'f(x) = x³ is strictly increasing, hence one-one. Range = ℝ = Codomain, hence onto.',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'If f(x) = 2x + 3 and g(x) = x², then (fog)(x) is:',
            options: ['2x² + 3', '4x² + 12x + 9', '2x² + 6', 'x² + 3'],
            correct: 0,
            explanation: '(fog)(x) = f(g(x)) = f(x²) = 2x² + 3',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Set is well-defined collection of distinct objects',
        'Number of subsets of n elements = 2ⁿ',
        'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
        'De Morgan\'s Laws: (A ∪ B)\' = A\' ∩ B\'',
        'Equivalence relation: reflexive + symmetric + transitive',
        'Function: every element has exactly one image',
        'One-one: different elements → different images',
        'Onto: Range = Codomain',
        'Bijective = One-one + Onto',
        '(fog)(x) = f(g(x))',
        'fog ≠ gof in general'
    ],
    
    formulae: [
        {
            name: 'Number of Subsets',
            formula: '2ⁿ',
            description: 'For set with n elements'
        },
        {
            name: 'Union Formula',
            formula: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
            description: 'Number of elements in union'
        },
        {
            name: 'Three Sets Union',
            formula: 'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(C ∩ A) + n(A ∩ B ∩ C)',
            description: 'For three sets'
        },
        {
            name: 'De Morgan\'s Law 1',
            formula: '(A ∪ B)\' = A\' ∩ B\'',
            description: 'Complement of union'
        },
        {
            name: 'De Morgan\'s Law 2',
            formula: '(A ∩ B)\' = A\' ∪ B\'',
            description: 'Complement of intersection'
        },
        {
            name: 'Composition',
            formula: '(fog)(x) = f(g(x))',
            description: 'Composition of functions'
        }
    ]
};

// Export for use in chapter viewer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_ALGEBRA_1;
}
</body>
</html>