<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Content Loader System for NEXUS REALITY
// Dynamically loads chapter content from individual files
// 🎉🎉🎉 25 COMPLETE CHAPTERS LIVE! 🎉🎉🎉

const CONTENT_LOADER = {
    // Base URL for content files
    baseURL: '/ultimate-perfectionist-app/',
    
    // Available chapters with their file paths
    chapters: {
        // ========== PHYSICS - MECHANICS (6 COMPLETE) ==========
        'physics-mechanics-1': {
            file: 'physics-mechanics-1.js',
            title: 'Units and Measurements',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_1'
        },
        'physics-mechanics-2': {
            file: 'physics-mechanics-2.js',
            title: 'Motion in a Straight Line',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_2'
        },
        'physics-mechanics-3': {
            file: 'physics-mechanics-3.js',
            title: 'Laws of Motion',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_3'
        },
        'physics-mechanics-4': {
            file: 'physics-mechanics-4.js',
            title: 'Work, Energy and Power',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_4'
        },
        'physics-mechanics-5': {
            file: 'physics-mechanics-5.js',
            title: 'Rotational Motion',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_5'
        },
        'physics-mechanics-6': {
            file: 'physics-mechanics-6.js',
            title: 'Gravitation',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true,
            variable: 'PHYSICS_MECHANICS_6'
        },
        
        // ========== PHYSICS - THERMODYNAMICS (1 COMPLETE) ==========
        'physics-thermo-1': {
            file: 'physics-thermo-1.js',
            title: 'Thermodynamics',
            subject: 'Physics',
            category: 'Thermodynamics',
            hasContent: true,
            variable: 'PHYSICS_THERMO_1'
        },
        'physics-thermo-2': {
            file: null,
            title: 'Kinetic Theory of Gases',
            subject: 'Physics',
            category: 'Thermodynamics',
            hasContent: false
        },
        
        // ========== PHYSICS - ELECTROMAGNETISM (2 COMPLETE) ==========
        'physics-em-1': {
            file: 'physics-em-1.js',
            title: 'Electrostatics',
            subject: 'Physics',
            category: 'Electromagnetism',
            hasContent: true,
            variable: 'PHYSICS_EM_1'
        },
        'physics-em-2': {
            file: 'physics-em-2.js',
            title: 'Current Electricity',
            subject: 'Physics',
            category: 'Electromagnetism',
            hasContent: true,
            variable: 'PHYSICS_EM_2'
        },
        'physics-em-3': {
            file: null,
            title: 'Magnetic Effects of Current',
            subject: 'Physics',
            category: 'Electromagnetism',
            hasContent: false
        },
        'physics-em-4': {
            file: null,
            title: 'Electromagnetic Induction',
            subject: 'Physics',
            category: 'Electromagnetism',
            hasContent: false
        },
        
        // ========== PHYSICS - OPTICS ==========
        'physics-optics-1': {
            file: null,
            title: 'Ray Optics',
            subject: 'Physics',
            category: 'Optics',
            hasContent: false
        },
        'physics-optics-2': {
            file: null,
            title: 'Wave Optics',
            subject: 'Physics',
            category: 'Optics',
            hasContent: false
        },
        
        // ========== PHYSICS - MODERN PHYSICS ==========
        'physics-modern-1': {
            file: null,
            title: 'Dual Nature of Matter',
            subject: 'Physics',
            category: 'Modern Physics',
            hasContent: false
        },
        'physics-modern-2': {
            file: null,
            title: 'Atoms and Nuclei',
            subject: 'Physics',
            category: 'Modern Physics',
            hasContent: false
        },
        
        // ========== CHEMISTRY - PHYSICAL (3 COMPLETE) ==========
        'chemistry-physical-1': {
            file: 'chemistry-physical-1.js',
            title: 'Atomic Structure',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: true,
            variable: 'CHEMISTRY_PHYSICAL_1'
        },
        'chemistry-physical-2': {
            file: 'chemistry-physical-2.js',
            title: 'Chemical Bonding',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: true,
            variable: 'CHEMISTRY_PHYSICAL_2'
        },
        'chemistry-physical-3': {
            file: 'chemistry-physical-3.js',
            title: 'Thermodynamics',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: true,
            variable: 'CHEMISTRY_PHYSICAL_3'
        },
        'chemistry-physical-4': {
            file: null,
            title: 'Chemical Equilibrium',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: false
        },
        'chemistry-physical-5': {
            file: null,
            title: 'Ionic Equilibrium',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: false
        },
        'chemistry-physical-6': {
            file: null,
            title: 'Electrochemistry',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: false
        },
        
        // ========== CHEMISTRY - INORGANIC ==========
        'chemistry-inorganic-1': {
            file: null,
            title: 'Periodic Table',
            subject: 'Chemistry',
            category: 'Inorganic Chemistry',
            hasContent: false
        },
        'chemistry-inorganic-2': {
            file: null,
            title: 's-Block Elements',
            subject: 'Chemistry',
            category: 'Inorganic Chemistry',
            hasContent: false
        },
        'chemistry-inorganic-3': {
            file: null,
            title: 'p-Block Elements',
            subject: 'Chemistry',
            category: 'Inorganic Chemistry',
            hasContent: false
        },
        'chemistry-inorganic-4': {
            file: null,
            title: 'd and f Block Elements',
            subject: 'Chemistry',
            category: 'Inorganic Chemistry',
            hasContent: false
        },
        
        // ========== CHEMISTRY - ORGANIC (2 COMPLETE) ==========
        'chemistry-organic-1': {
            file: 'chemistry-organic-1.js',
            title: 'Basic Concepts of Organic Chemistry',
            subject: 'Chemistry',
            category: 'Organic Chemistry',
            hasContent: true,
            variable: 'CHEMISTRY_ORGANIC_1'
        },
        'chemistry-organic-2': {
            file: 'chemistry-organic-2.js',
            title: 'Hydrocarbons',
            subject: 'Chemistry',
            category: 'Organic Chemistry',
            hasContent: true,
            variable: 'CHEMISTRY_ORGANIC_2'
        },
        'chemistry-organic-3': {
            file: null,
            title: 'Haloalkanes and Haloarenes',
            subject: 'Chemistry',
            category: 'Organic Chemistry',
            hasContent: false
        },
        'chemistry-organic-4': {
            file: null,
            title: 'Alcohols, Phenols and Ethers',
            subject: 'Chemistry',
            category: 'Organic Chemistry',
            hasContent: false
        },
        
        // ========== MATHEMATICS - ALGEBRA (3 COMPLETE) ==========
        'maths-algebra-1': {
            file: 'maths-algebra-1.js',
            title: 'Sets, Relations and Functions',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: true,
            variable: 'MATHS_ALGEBRA_1'
        },
        'maths-algebra-2': {
            file: 'maths-algebra-2.js',
            title: 'Complex Numbers',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: true,
            variable: 'MATHS_ALGEBRA_2'
        },
        'maths-algebra-3': {
            file: 'maths-algebra-3.js',
            title: 'Quadratic Equations',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: true,
            variable: 'MATHS_ALGEBRA_3'
        },
        'maths-algebra-4': {
            file: null,
            title: 'Sequences and Series',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: false
        },
        'maths-algebra-5': {
            file: null,
            title: 'Permutations and Combinations',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: false
        },
        'maths-algebra-6': {
            file: null,
            title: 'Binomial Theorem',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: false
        },
        'maths-algebra-7': {
            file: null,
            title: 'Matrices and Determinants',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: false
        },
        
        // ========== MATHEMATICS - CALCULUS (3 COMPLETE) ==========
        'maths-calculus-1': {
            file: 'maths-calculus-1.js',
            title: 'Limits and Continuity',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: true,
            variable: 'MATHS_CALCULUS_1'
        },
        'maths-calculus-2': {
            file: 'maths-calculus-2.js',
            title: 'Differentiation',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: true,
            variable: 'MATHS_CALCULUS_2'
        },
        'maths-calculus-3': {
            file: 'maths-calculus-3.js',
            title: 'Integration',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: true,
            variable: 'MATHS_CALCULUS_3'
        },
        'maths-calculus-4': {
            file: null,
            title: 'Applications of Derivatives',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: false
        },
        'maths-calculus-5': {
            file: null,
            title: 'Definite Integrals and Applications',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: false
        },
        'maths-calculus-6': {
            file: null,
            title: 'Differential Equations',
            subject: 'Mathematics',
            category: 'Calculus',
            hasContent: false
        },
        
        // ========== MATHEMATICS - COORDINATE GEOMETRY (2 COMPLETE) ==========
        'maths-coordinate-1': {
            file: 'maths-coordinate-1.js',
            title: 'Straight Lines',
            subject: 'Mathematics',
            category: 'Coordinate Geometry',
            hasContent: true,
            variable: 'MATHS_COORDINATE_1'
        },
        'maths-coordinate-2': {
            file: 'maths-coordinate-2.js',
            title: 'Circles',
            subject: 'Mathematics',
            category: 'Coordinate Geometry',
            hasContent: true,
            variable: 'MATHS_COORDINATE_2'
        },
        'maths-coordinate-3': {
            file: null,
            title: 'Parabola',
            subject: 'Mathematics',
            category: 'Coordinate Geometry',
            hasContent: false
        },
        'maths-coordinate-4': {
            file: null,
            title: 'Ellipse',
            subject: 'Mathematics',
            category: 'Coordinate Geometry',
            hasContent: false
        },
        'maths-coordinate-5': {
            file: null,
            title: 'Hyperbola',
            subject: 'Mathematics',
            category: 'Coordinate Geometry',
            hasContent: false
        },
        
        // ========== MATHEMATICS - TRIGONOMETRY (1 COMPLETE) ==========
        'maths-trig-1': {
            file: 'maths-trig-1.js',
            title: 'Trigonometric Functions',
            subject: 'Mathematics',
            category: 'Trigonometry',
            hasContent: true,
            variable: 'MATHS_TRIG_1'
        },
        'maths-trig-2': {
            file: null,
            title: 'Inverse Trigonometric Functions',
            subject: 'Mathematics',
            category: 'Trigonometry',
            hasContent: false
        },
        'maths-trig-3': {
            file: null,
            title: 'Trigonometric Equations',
            subject: 'Mathematics',
            category: 'Trigonometry',
            hasContent: false
        },
        
        // ========== MATHEMATICS - VECTORS (1 COMPLETE) ==========
        'maths-vectors-1': {
            file: 'maths-vectors-1.js',
            title: 'Vectors',
            subject: 'Mathematics',
            category: 'Vectors and 3D',
            hasContent: true,
            variable: 'MATHS_VECTORS_1'
        },
        'maths-vectors-2': {
            file: null,
            title: '3D Geometry',
            subject: 'Mathematics',
            category: 'Vectors and 3D',
            hasContent: false
        },
        
        // ========== MATHEMATICS - PROBABILITY (1 COMPLETE) ==========
        'maths-probability-1': {
            file: 'maths-probability-1.js',
            title: 'Probability',
            subject: 'Mathematics',
            category: 'Probability and Statistics',
            hasContent: true,
            variable: 'MATHS_PROBABILITY_1'
        },
        'maths-probability-2': {
            file: null,
            title: 'Statistics',
            subject: 'Mathematics',
            category: 'Probability and Statistics',
            hasContent: false
        }
    },
    
    // Load chapter content dynamically
    async loadChapter(chapterId) {
        const chapter = this.chapters[chapterId];
        
        if (!chapter) {
            console.error(`Chapter ${chapterId} not found`);
            return null;
        }
        
        if (!chapter.hasContent || !chapter.file) {
            return this.getPlaceholderContent(chapter);
        }
        
        try {
            // Load the chapter file
            const response = await fetch(this.baseURL + chapter.file);
            const scriptText = await response.text();
            
            // Execute the script to get the chapter object
            const scriptElement = document.createElement('script');
            scriptElement.textContent = scriptText;
            document.head.appendChild(scriptElement);
            
            // Get the chapter object from the global scope using variable name
            const chapterData = window[chapter.variable];
            
            // Clean up
            document.head.removeChild(scriptElement);
            
            if (!chapterData) {
                console.error(`Chapter data not found for ${chapterId}`);
                return this.getPlaceholderContent(chapter);
            }
            
            return chapterData;
        } catch (error) {
            console.error(`Error loading chapter ${chapterId}:`, error);
            return this.getPlaceholderContent(chapter);
        }
    },
    
    // Get placeholder content for chapters without real content
    getPlaceholderContent(chapter) {
        const completedChapters = this.getCompletedChapters();
        const stats = this.getStatistics();
        
        return {
            id: chapter.id || 'unknown',
            title: chapter.title,
            subject: chapter.subject,
            category: chapter.category,
            difficulty: 'Foundation',
            sections: [
                {
                    id: 'coming-soon',
                    title: 'Content Coming Soon',
                    content: `
                        <div style="text-align: center; padding: 3rem;">
                            <div style="font-size: 5rem; margin-bottom: 1.5rem;">🎯</div>
                            <h2 style="color: #00d4ff; margin-bottom: 1rem; font-size: 2rem;">📚 ${chapter.title}</h2>
                            <p style="color: #aaa; font-size: 1.3rem; margin-bottom: 2.5rem; line-height: 1.6;">
                                Complete content for this chapter is being prepared with the same quality as our existing chapters.
                            </p>
                            
                            <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 3rem; border-radius: 20px; margin: 2.5rem auto; max-width: 900px; border: 2px solid #0f3460; box-shadow: 0 15px 40px rgba(0,212,255,0.15);">
                                <h3 style="color: #00ff88; margin-bottom: 2.5rem; font-size: 1.8rem;">🎉🎉🎉 25 CHAPTERS MILESTONE! 🎉🎉🎉</h3>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                                    <div style="background: linear-gradient(135deg, #0f3460, #1a5490); padding: 2.5rem; border-radius: 15px; border: 2px solid #00d4ff; box-shadow: 0 5px 20px rgba(0,212,255,0.2);">
                                        <div style="font-size: 3.5rem; color: #00d4ff; font-weight: 900; margin-bottom: 0.5rem;">${stats.completed}</div>
                                        <div style="color: #aaa; font-size: 1rem;">Chapters Complete</div>
                                    </div>
                                    <div style="background: linear-gradient(135deg, #1a3a2e, #2d5a3d); padding: 2.5rem; border-radius: 15px; border: 2px solid #00ff88; box-shadow: 0 5px 20px rgba(0,255,136,0.2);">
                                        <div style="font-size: 3.5rem; color: #00ff88; font-weight: 900; margin-bottom: 0.5rem;">${stats.percentage}%</div>
                                        <div style="color: #aaa; font-size: 1rem;">Progress</div>
                                    </div>
                                    <div style="background: linear-gradient(135deg, #3d2a1a, #5a3d2d); padding: 2.5rem; border-radius: 15px; border: 2px solid #ff9800; box-shadow: 0 5px 20px rgba(255,152,0,0.2);">
                                        <div style="font-size: 3.5rem; color: #ff9800; font-weight: 900; margin-bottom: 0.5rem;">${stats.total}</div>
                                        <div style="color: #aaa; font-size: 1rem;">Total Chapters</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: #1a1a2e; padding: 2.5rem; border-radius: 15px; margin: 2.5rem auto; max-width: 800px; border: 1px solid #0f3460;">
                                <h3 style="color: #00ff88; margin-bottom: 2rem; font-size: 1.5rem;">✨ What Each Chapter Includes:</h3>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; text-align: left;">
                                    <div>
                                        <ul style="color: #aaa; line-height: 2.2; list-style: none; padding: 0; font-size: 1.05rem;">
                                            <li>✅ Complete theory & explanations</li>
                                            <li>✅ Derivations & mathematical proofs</li>
                                            <li>✅ 4-5 worked examples</li>
                                            <li>✅ Step-by-step solutions</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul style="color: #aaa; line-height: 2.2; list-style: none; padding: 0; font-size: 1.05rem;">
                                            <li>✅ 5+ practice problems</li>
                                            <li>✅ Important formulas</li>
                                            <li>✅ Key points summary</li>
                                            <li>✅ JEE Main + Advanced level</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="margin-top: 3.5rem;">
                                <p style="color: #aaa; font-size: 1.3rem; margin-bottom: 2rem; font-weight: 600;">
                                    <strong>🎯 Explore our ${stats.completed} completed chapters:</strong>
                                </p>
                                
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; max-width: 1200px; margin: 0 auto;">
                                    ${completedChapters.map(ch => `
                                        <a href="chapter-viewer.html?id=${ch.id}" 
                                           style="padding: 1.5rem; background: linear-gradient(135deg, #00d4ff, #00a8cc); color: #000; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 1rem; transition: all 0.3s; display: block; box-shadow: 0 5px 20px rgba(0,212,255,0.3); border: 2px solid transparent;">
                                            ${ch.title}
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div style="margin-top: 4rem;">
                                <a href="app.html" style="display: inline-block; padding: 1.5rem 3rem; background: transparent; border: 3px solid #00d4ff; color: #00d4ff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.2rem; transition: all 0.3s; box-shadow: 0 5px 20px rgba(0,212,255,0.2);">
                                    ← View All Chapters
                                </a>
                            </div>
                        </div>
                    `
                }
            ],
            examples: [],
            problems: [],
            keyPoints: ['Content being prepared with high quality...'],
            formulae: []
        };
    },
    
    // Get all chapters by subject
    getChaptersBySubject(subject) {
        return Object.entries(this.chapters)
            .filter(([id, chapter]) => chapter.subject === subject)
            .map(([id, chapter]) => ({
                id,
                ...chapter
            }));
    },
    
    // Get all chapters by category
    getChaptersByCategory(category) {
        return Object.entries(this.chapters)
            .filter(([id, chapter]) => chapter.category === category)
            .map(([id, chapter]) => ({
                id,
                ...chapter
            }));
    },
    
    // Get chapter statistics
    getStatistics() {
        const total = Object.keys(this.chapters).length;
        const completed = Object.values(this.chapters).filter(c => c.hasContent).length;
        const pending = total - completed;
        
        const bySubject = {};
        const byCategory = {};
        
        Object.values(this.chapters).forEach(chapter => {
            // By subject
            if (!bySubject[chapter.subject]) {
                bySubject[chapter.subject] = { total: 0, completed: 0 };
            }
            bySubject[chapter.subject].total++;
            if (chapter.hasContent) {
                bySubject[chapter.subject].completed++;
            }
            
            // By category
            if (!byCategory[chapter.category]) {
                byCategory[chapter.category] = { total: 0, completed: 0 };
            }
            byCategory[chapter.category].total++;
            if (chapter.hasContent) {
                byCategory[chapter.category].completed++;
            }
        });
        
        return {
            total,
            completed,
            pending,
            percentage: Math.round((completed / total) * 100),
            bySubject,
            byCategory
        };
    },
    
    // Search chapters
    searchChapters(query) {
        query = query.toLowerCase();
        return Object.entries(this.chapters)
            .filter(([id, chapter]) => 
                chapter.title.toLowerCase().includes(query) ||
                chapter.subject.toLowerCase().includes(query) ||
                chapter.category.toLowerCase().includes(query)
            )
            .map(([id, chapter]) => ({
                id,
                ...chapter
            }));
    },
    
    // Get completed chapters list
    getCompletedChapters() {
        return Object.entries(this.chapters)
            .filter(([id, chapter]) => chapter.hasContent)
            .map(([id, chapter]) => ({
                id,
                ...chapter
            }));
    }
};

// Make it globally available
window.CONTENT_LOADER = CONTENT_LOADER;

// Log statistics on load
const stats = CONTENT_LOADER.getStatistics();
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🎉🎉🎉 NEXUS REALITY - 25 CHAPTERS! 🎉🎉🎉');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📊 Progress: ${stats.completed}/${stats.total} chapters (${stats.percentage}%)`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ COMPLETED CHAPTERS (25):');
CONTENT_LOADER.getCompletedChapters().forEach((c, i) => {
    console.log(`   ${i+1}. ${c.title} (${c.subject})`);
});
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📈 BY SUBJECT:');
Object.entries(stats.bySubject).forEach(([subject, data]) => {
    console.log(`   ${subject}: ${data.completed}/${data.total} chapters`);
});
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🏆 MILESTONE: 25 CHAPTERS ACHIEVED!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT_LOADER;
}
</body>
</html>