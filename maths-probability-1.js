<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Probability - Chapter 1: Probability
// Complete content with events, conditional probability, Bayes theorem

const MATHS_PROBABILITY_1 = {
    id: 'maths-probability-1',
    title: 'Probability',
    subject: 'Mathematics',
    category: 'Probability and Statistics',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Random Experiment</h3>
                <p>Experiment with unpredictable outcome</p>
                
                <h3>Sample Space (S)</h3>
                <p>Set of all possible outcomes</p>
                
                <h3>Event (E)</h3>
                <p>Subset of sample space</p>
                
                <h3>Probability</h3>
                <p class="formula">P(E) = n(E)/n(S)</p>
                <p>Where n(E) = favorable outcomes, n(S) = total outcomes</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>0 ≤ P(E) ≤ 1</li>
                    <li>P(S) = 1 (certain event)</li>
                    <li>P(∅) = 0 (impossible event)</li>
                    <li>P(E') = 1 - P(E)</li>
                </ul>
            `
        },
        
        {
            id: 'rules',
            title: '2. Addition and Multiplication Rules',
            content: `
                <h3>Addition Rule</h3>
                <p class="formula">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
                
                <p>For mutually exclusive events:</p>
                <p class="formula">P(A ∪ B) = P(A) + P(B)</p>
                
                <h3>Multiplication Rule</h3>
                <p class="formula">P(A ∩ B) = P(A) × P(B|A)</p>
                
                <p>For independent events:</p>
                <p class="formula">P(A ∩ B) = P(A) × P(B)</p>
                
                <h3>Independent Events</h3>
                <p>A and B independent if:</p>
                <p class="formula">P(A ∩ B) = P(A) × P(B)</p>
            `
        },
        
        {
            id: 'conditional',
            title: '3. Conditional Probability',
            content: `
                <h3>Definition</h3>
                <p>Probability of A given B has occurred</p>
                <p class="formula">P(A|B) = P(A ∩ B)/P(B)</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>0 ≤ P(A|B) ≤ 1</li>
                    <li>P(S|B) = 1</li>
                    <li>P(A'|B) = 1 - P(A|B)</li>
                </ul>
                
                <h3>Multiplication Theorem</h3>
                <p class="formula">P(A ∩ B) = P(B) × P(A|B)</p>
                <p class="formula">P(A ∩ B ∩ C) = P(A) × P(B|A) × P(C|A∩B)</p>
            `
        },
        
        {
            id: 'bayes',
            title: "4. Bayes' Theorem",
            content: `
                <h3>Theorem</h3>
                <p class="formula">P(A|B) = [P(B|A) × P(A)]/P(B)</p>
                
                <h3>Partition Theorem</h3>
                <p>If E₁, E₂, ..., Eₙ partition sample space:</p>
                <p class="formula">P(A) = Σ P(Eᵢ) × P(A|Eᵢ)</p>
                
                <h3>Bayes' Formula (Extended)</h3>
                <p class="formula">P(Eᵢ|A) = [P(Eᵢ) × P(A|Eᵢ)]/[Σ P(Eⱼ) × P(A|Eⱼ)]</p>
            `
        },
        
        {
            id: 'distributions',
            title: '5. Probability Distributions',
            content: `
                <h3>Random Variable</h3>
                <p>Variable whose value depends on outcome</p>
                
                <h3>Probability Distribution</h3>
                <p>Function giving probability for each value</p>
                
                <h3>Mean (Expected Value)</h3>
                <p class="formula">E(X) = Σ xᵢ P(xᵢ)</p>
                
                <h3>Variance</h3>
                <p class="formula">Var(X) = E(X²) - [E(X)]²</p>
                
                <h3>Binomial Distribution</h3>
                <p>n trials, probability p</p>
                <p class="formula">P(X = r) = ⁿCᵣ pʳ (1-p)ⁿ⁻ʳ</p>
                <p>Mean = np, Variance = np(1-p)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Basic Probability', problem: 'Coin toss, P(Head)?', solution: '1/2'},
        {id: 'ex2', title: 'Addition Rule', problem: 'Die: P(even or >4)?', solution: 'P(2,4,6 or 5,6) = 4/6 = 2/3'},
        {id: 'ex3', title: 'Conditional', problem: 'Cards: P(King|Face card)?', solution: '4/12 = 1/3'},
        {id: 'ex4', title: 'Independent', problem: 'Two dice, P(both 6)?', solution: '(1/6)×(1/6) = 1/36'}
    ],
    
    problems: [
        {id: 'p1', question: 'P(certain event) = ?', options: ['0', '0.5', '1', '∞'], correct: 2},
        {id: 'p2', question: 'P(E) + P(E\') = ?', options: ['0', '1', '2', 'P(E)'], correct: 1},
        {id: 'p3', question: 'For independent A,B: P(A∩B) = ?', options: ['P(A)+P(B)', 'P(A)×P(B)', 'P(A)/P(B)', '0'], correct: 1},
        {id: 'p4', question: 'P(A|B) = ?', options: ['P(A∩B)/P(B)', 'P(A)/P(B)', 'P(A)×P(B)', 'P(A)+P(B)'], correct: 0},
        {id: 'p5', question: 'Coin toss: P(Head) = ?', options: ['0', '1/4', '1/2', '1'], correct: 2}
    ],
    
    keyPoints: [
        'P(E) = n(E)/n(S)',
        '0 ≤ P(E) ≤ 1',
        'P(E\') = 1 - P(E)',
        'P(A∪B) = P(A) + P(B) - P(A∩B)',
        'Independent: P(A∩B) = P(A)×P(B)',
        'Conditional: P(A|B) = P(A∩B)/P(B)',
        'Bayes: P(A|B) = P(B|A)×P(A)/P(B)',
        'E(X) = Σ xᵢP(xᵢ)',
        'Var(X) = E(X²) - [E(X)]²',
        'Binomial: P(r) = ⁿCᵣ pʳ(1-p)ⁿ⁻ʳ'
    ],
    
    formulae: [
        {name: 'Probability', formula: 'P(E) = n(E)/n(S)'},
        {name: 'Addition Rule', formula: 'P(A∪B) = P(A) + P(B) - P(A∩B)'},
        {name: 'Conditional', formula: 'P(A|B) = P(A∩B)/P(B)'},
        {name: 'Bayes Theorem', formula: 'P(A|B) = P(B|A)×P(A)/P(B)'},
        {name: 'Expected Value', formula: 'E(X) = Σ xᵢP(xᵢ)'}
    ]
};
window.MATHS_PROBABILITY_1 = MATHS_PROBABILITY_1;
</body>
</html>