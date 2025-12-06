<div align="center">

# 🎓 GitMastery Farsi

**Interactive Git Learning Platform for Persian-Speaking Developers**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)

Learn Git version control through hands-on, interactive challenges in a safe, browser-based environment.

[Features](#-key-features) • [Installation](#-installation) • [Usage](#-how-to-use) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📋 Project Overview

**GitMastery Farsi** is an innovative, gamified web application designed to teach Git version control system through interactive, hands-on challenges. Built specifically for Persian/Farsi-speaking developers, this platform provides a risk-free environment where users can learn and practice Git commands without the fear of breaking real repositories.

Unlike traditional tutorials, GitMastery Farsi combines:
- **Interactive Terminal**: Execute real Git commands in a simulated environment
- **Visual Learning**: See your commits and branches visualized in real-time
- **Gamification**: Earn XP, level up, and track your progress
- **Step-by-Step Challenges**: Progressive difficulty from beginner to advanced concepts

Perfect for students, self-learners, coding bootcamps, and teams looking to standardize their Git knowledge.

---

## ✨ Key Features

### 🎮 Interactive Learning Experience
- **Fully Simulated Terminal**: Execute Git commands just like in a real terminal environment
- **In-Browser Code Editor**: Create, edit, and manage files directly without leaving the browser
- **Real-Time Git Graph Visualization**: Visual representation of commits, branches, and repository state

### 🏆 Gamification System
- **XP & Leveling**: Earn experience points by completing challenges
- **Progress Tracking**: Monitor your learning journey with detailed statistics
- **Challenge Completion**: Unlock achievements and track completed challenges
- **User Profile**: View your stats, XP, and completed challenges

### 📚 Comprehensive Challenge System
- **Beginner-Friendly**: Start with basic concepts like `git init` and `git commit`
- **Progressive Difficulty**: Advance through intermediate topics like branching and merging
- **Clear Instructions**: Each challenge includes descriptions and helpful hints
- **Goal Validation**: Automatic verification when you complete challenges correctly

### 🎨 Modern User Interface
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Persian (RTL) Support**: Fully optimized for Persian/Farsi language and right-to-left text
- **Intuitive Navigation**: Clean, modern interface with easy-to-use navigation

### 📖 Educational Resources
- **Cheat Sheet**: Quick reference guide for common Git commands
- **Contextual Hints**: Get help when you're stuck on a challenge
- **Step-by-Step Guidance**: Clear instructions for each challenge

---

## 🛠️ Tech Stack

This project is built with modern web technologies:

### Core Framework
- **React 19.2** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 6.2** - Fast build tool and dev server

### State Management & Routing
- **Zustand 5.0** - Lightweight, performant state management
- **React Router DOM 7.1** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React 0.556** - Beautiful icon library

### Utilities
- **UUID 13.0** - Generate unique commit IDs
- **Custom Git Engine** - Simulated Git implementation

### Development Tools
- **@vitejs/plugin-react** - Vite plugin for React
- **TypeScript** - Static type checking

---

## 🎯 Use Cases

### 👨‍🎓 Educational Institutions
- **Computer Science Courses**: Teach Git fundamentals in a structured, interactive way
- **Assignment Practice**: Provide hands-on exercises without complex setup
- **Student Assessment**: Track student progress through challenges
- **Lab Sessions**: Interactive labs for version control courses

### 🚀 Self-Learners
- **Beginners**: Start learning Git from scratch with guided challenges
- **Skill Building**: Practice Git commands before using them on real projects
- **Confidence Building**: Learn in a safe environment without consequences
- **Reference Tool**: Quick refresher on Git concepts and commands

### 💼 Professional Development
- **Team Onboarding**: Quickly onboard new developers to Git workflows
- **Standardized Training**: Ensure all team members understand Git fundamentals
- **Bootcamp Curriculum**: Interactive Git training for coding bootcamps
- **Continuous Learning**: Refresher courses for experienced developers

### 🌍 Persian Developer Community
- **Localized Learning**: Learn Git in Persian/Farsi language
- **Cultural Context**: Designed for Persian-speaking developers
- **Community Resource**: Open-source learning tool for the community

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for cloning the repository)

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/armiwn8/gitmastery-farsi.git
   cd gitmastery-fa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npm run build
   ```
   This will build the project and verify everything is set up correctly.

---

## ▶️ How to Run

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will start on `http://localhost:3000` (or another port if 3000 is busy).

The development server includes:
- ✅ Hot Module Replacement (HMR) for instant updates
- ✅ TypeScript type checking
- ✅ Fast refresh for React components

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the production build locally, allowing you to test the optimized version.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📖 How to Use

### Getting Started

1. **Launch the Application**
   - Run `npm run dev` and open `http://localhost:3000` in your browser
   - You'll see the home page with an overview of the platform

2. **Navigate to Challenges**
   - Click on "مراحل" (Levels) in the sidebar or "شروع یادگیری" (Start Learning) button
   - Browse available challenges organized by difficulty level

3. **Start Your First Challenge**
   - Click on any challenge card to begin
   - Read the challenge description and hints
   - The playground will open with the terminal, editor, and git graph

4. **Complete Challenges**
   - Use the terminal to execute Git commands
   - Edit files in the code editor as needed
   - Watch your commits appear in the git graph visualization
   - Complete the challenge goal to earn XP and unlock the next challenge

### Supported Git Commands

The platform simulates the following Git commands:

| Command | Description | Example |
|---------|-------------|---------|
| `git init` | Initialize a new Git repository | `git init` |
| `git status` | Show the working tree status | `git status` |
| `git add` | Add files to the staging area | `git add README.md` or `git add .` |
| `git commit` | Record changes to the repository | `git commit -m "Initial commit"` |
| `git log` | Show commit logs | `git log` |
| `git branch` | List, create branches | `git branch` or `git branch feature` |
| `git checkout` | Switch branches | `git checkout feature` |
| `git checkout -b` | Create and switch to a new branch | `git checkout -b feature` |

### Tips for Learning

- 📝 **Read the Hints**: Each challenge includes helpful hints to guide you
- 🎯 **Check Your Progress**: Monitor the git graph to see your commits visually
- 🔄 **Experiment Freely**: You can't break anything, so try different approaches
- 📊 **Track Your Stats**: Visit your profile to see your XP and completed challenges

---

## 📁 Project Structure

```
gitmastery-fa/
│
├── components/              # Reusable React components
│   ├── Editor.tsx          # Code editor for file editing
│   ├── GitGraph.tsx        # Visual commit history display
│   ├── Layout.tsx          # Main application layout
│   └── Terminal.tsx        # Interactive terminal component
│
├── pages/                  # Page-level components
│   ├── Home.tsx           # Landing page
│   ├── Levels.tsx         # Challenge selection page
│   ├── Playground.tsx     # Main learning environment
│   ├── Profile.tsx        # User profile and statistics
│   └── CheatSheet.tsx     # Git commands reference
│
├── services/              # Business logic services
│   └── gitService.ts      # Git command engine simulation
│
├── store/                 # State management
│   └── useStore.ts        # Zustand store configuration
│
├── data/                  # Static data
│   └── challenges.ts      # Challenge definitions and goals
│
├── assets/                # Static assets
│   └── images/           # Image files
│
├── types.ts              # TypeScript type definitions
├── App.tsx               # Root application component
├── index.tsx             # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or translations, your help makes this project better.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub, then:
   git clone https://github.com/armiwn8/gitmastery-fa.git
   cd gitmastery-fa
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or for bug fixes:
   ```bash
   git checkout -b fix/issue-description
   ```

3. **Make Your Changes**
   - Write clean, well-commented code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test Your Changes**
   - Test thoroughly in development mode
   - Ensure the build completes successfully
   - Check for TypeScript errors

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Description of your changes"
   ```
   Use clear, descriptive commit messages following conventional commits:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for improvements
   - `Docs:` for documentation changes

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a Pull Request on GitHub with a clear description of your changes.

### Development Guidelines

- **Code Style**: Follow the existing TypeScript/React patterns in the codebase
- **Type Safety**: Ensure all TypeScript types are correct and complete
- **Performance**: Optimize for performance, especially state management
- **Accessibility**: Consider RTL (right-to-left) text support for Persian content
- **Testing**: Test your changes across different browsers and screen sizes
- **Documentation**: Update README or inline comments when adding features

### Areas for Contribution

- 🌟 **New Challenges**: Add more Git challenges with different difficulty levels
- 🐛 **Bug Fixes**: Report and fix issues
- 📚 **Documentation**: Improve documentation and add code comments
- 🌍 **Translations**: Add support for other languages
- 🎨 **UI/UX Improvements**: Enhance the user interface and user experience
- ⚡ **Performance**: Optimize rendering and state management
- 🧪 **Testing**: Add unit tests and integration tests

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive free software license that allows you to:
- ✅ Use the software commercially
- ✅ Modify the software
- ✅ Distribute the software
- ✅ Use it privately
- ✅ Sublicense the software

The only requirement is to include the original copyright and license notice.

---

## 📞 Contact & Support

### Getting Help

- **🐛 Bug Reports**: [Open an Issue](https://github.com/armiwn8/gitmastery-fa/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/armiwn8/gitmastery-fa/discussions)
- **❓ Questions**: Use GitHub Discussions for questions and feature requests

### Report Issues

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS information
- Screenshots (if applicable)

### Feature Requests

We'd love to hear your ideas! Open a discussion or issue with:
- Feature description
- Use case
- Potential implementation approach (if you have ideas)

---

## 🙏 Acknowledgments

- **Persian Developer Community** - Built with ❤️ for the Persian-speaking developer community
- **Open Source Community** - Inspired by other interactive learning platforms
- **Contributors** - Thanks to everyone who contributes to this project
- **Users** - Appreciation to all learners using GitMastery Farsi

---

## 🗺️ Roadmap

Future enhancements we're planning:

- [ ] More advanced Git challenges (merge, rebase, cherry-pick)
- [ ] Multi-language support (English, Arabic, etc.)
- [ ] User authentication and cloud sync
- [ ] Collaborative challenges
- [ ] Advanced git graph visualizations
- [ ] Mobile app version
- [ ] Export/import progress
- [ ] Integration with real Git repositories

---

<div align="center">

**Made with ❤️ by Armin Khademian**

⭐ **Star this repository** if you find it helpful!

📢 **Share with others** who might benefit from learning Git!

</div>
