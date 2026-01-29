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

const CONTENT_LOADER = {
    // Base URL for content files
    baseURL: '/ultimate-perfectionist-app/',
    
    // Available chapters with their file paths
    chapters: {
        // Physics - Mechanics
        'physics-mechanics-1': {
            file: 'physics-mechanics-1.js',
            title: 'Units and Measurements',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true
        },
        'physics-mechanics-2': {
            file: 'physics-mechanics-2.js',
            title: 'Motion in a Straight Line',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: true
        },
        'physics-mechanics-3': {
            file: null,
            title: 'Laws of Motion',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: false
        },
        'physics-mechanics-4': {
            file: null,
            title: 'Work, Energy and Power',
            subject: 'Physics',
            category: 'Mechanics',
            hasContent: false
        },
        
        // Chemistry - Physical
        'chemistry-physical-1': {
            file: 'chemistry-physical-1.js',
            title: 'Atomic Structure',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: true
        },
        'chemistry-physical-2': {
            file: null,
            title: 'Chemical Bonding',
            subject: 'Chemistry',
            category: 'Physical Chemistry',
            hasContent: false
        },
        
        // Mathematics - Algebra
        'maths-algebra-1': {
            file: 'maths-algebra-1.js',
            title: 'Sets, Relations and Functions',
            subject: 'Mathematics',
            category: 'Algebra',
            hasContent: true
        },
        'maths-algebra-2': {
            file: null,
            title: 'Complex Numbers',
            subject: 'Mathematics',
            category: 'Algebra',
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
            
            // Get the chapter object from the global scope
            let chapterData = null;
            if (chapterId === 'physics-mechanics-1') chapterData = window.PHYSICS_MECHANICS_1;
            else if (chapterId === 'physics-mechanics-2') chapterData = window.PHYSICS_MECHANICS_2;
            else if (chapterId === 'chemistry-physical-1') chapterData = window.CHEMISTRY_PHYSICAL_1;
            else if (chapterId === 'maths-algebra-1') chapterData = window.MATHS_ALGEBRA_1;
            
            // Clean up
            document.head.removeChild(scriptElement);
            
            return chapterData;
        } catch (error) {
            console.error(`Error loading chapter ${chapterId}:`, error);
            return this.getPlaceholderContent(chapter);
        }
    },
    
    // Get placeholder content for chapters without real content
    getPlaceholderContent(chapter) {
        return {
            id: chapter.id,
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
                            <h2 style="color: #00d4ff; margin-bottom: 1rem;">📚 ${chapter.title}</h2>
                            <p style="color: #aaa; font-size: 1.2rem; margin-bottom: 2rem;">
                                Complete content for this chapter is being prepared.
                            </p>
                            <div style="background: #1a1a2e; padding: 2rem; border-radius: 10px; margin: 2rem auto; max-width: 600px;">
                                <h3 style="color: #00ff88; margin-bottom: 1rem;">What's Coming:</h3>
                                <ul style="text-align: left; color: #aaa; line-height: 2;">
                                    <li>✅ Complete theory with explanations</li>
                                    <li>✅ Derivations and proofs</li>
                                    <li>✅ Worked examples (step-by-step)</li>
                                    <li>✅ Practice problems with solutions</li>
                                    <li>✅ Important formulas and key points</li>
                                    <li>✅ Tips and tricks for JEE</li>
                                </ul>
                            </div>
                            <p style="color: #aaa; margin-top: 2rem;">
                                Meanwhile, check out other completed chapters or use the study plan to continue your preparation.
                            </p>
                            <div style="margin-top: 2rem;">
                                <a href="app.html" style="display: inline-block; padding: 1rem 2rem; background: #00d4ff; color: #000; text-decoration: none; border-radius: 5px; font-weight: 700;">
                                    ← Back to Chapters
                                </a>
                            </div>
                        </div>
                    `
                }
            ],
            examples: [],
            problems: [],
            keyPoints: ['Content being prepared...'],
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
        Object.values(this.chapters).forEach(chapter => {
            if (!bySubject[chapter.subject]) {
                bySubject[chapter.subject] = { total: 0, completed: 0 };
            }
            bySubject[chapter.subject].total++;
            if (chapter.hasContent) {
                bySubject[chapter.subject].completed++;
            }
        });
        
        return {
            total,
            completed,
            pending,
            percentage: Math.round((completed / total) * 100),
            bySubject
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
    }
};

// Make it globally available
window.CONTENT_LOADER = CONTENT_LOADER;

// Log statistics on load
console.log('📚 CONTENT LOADER initialized');
console.log('Statistics:', CONTENT_LOADER.getStatistics());
console.log('✅ Chapters with content:', 
    Object.values(CONTENT_LOADER.chapters)
        .filter(c => c.hasContent)
        .map(c => c.title)
);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT_LOADER;
}
</body>
</html>