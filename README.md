<div align="center">
  <h1>🎓 GitMastery Farsi</h1>
  <p><strong>Interactive Git Learning Platform in Persian</strong></p>
  <p>Learn Git commands through hands-on challenges in a safe, simulated environment</p>
</div>

---

## 📋 Overview

GitMastery Farsi is an interactive, gamified learning platform designed to teach Git version control system through practical challenges. Built specifically for Persian/Farsi-speaking learners, this web application provides a risk-free environment to practice Git commands without affecting real repositories.

### Key Features

- 🎮 **Interactive Terminal**: Execute Git commands in a fully simulated terminal environment
- 📝 **Code Editor**: Edit and manage files directly in the browser
- 📊 **Visual Git Graph**: See your commit history visualized in real-time
- 🏆 **Gamified Learning**: Earn XP points, level up, and track your progress
- 📚 **Step-by-Step Challenges**: Progressive difficulty from beginner to advanced
- 🌙 **Dark/Light Mode**: Comfortable viewing in any lighting condition
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **State Management**: Zustand
- **Routing**: React Router DOM v7
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: UUID for commit IDs

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gitmastery-farsi.git
   cd gitmastery-farsi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

```bash
npm run preview
```

Preview the production build locally.

---

## 📖 How to Use

### For Learners

1. **Start with the Home Page**: Get familiar with the platform and its features
2. **Navigate to Levels**: Browse available challenges organized by difficulty
3. **Start a Challenge**: Click on any challenge to begin
4. **Use the Terminal**: Type Git commands just like in a real terminal
5. **Edit Files**: Use the code editor to create and modify files
6. **Watch Progress**: Monitor your commits in the Git graph visualization
7. **Complete Challenges**: Achieve the goal and earn XP points

### Supported Git Commands

The platform currently supports the following Git commands:

- `git init` - Initialize a new Git repository
- `git status` - Check repository status
- `git add [file]` - Stage files for commit
- `git commit -m "message"` - Create a commit with a message
- `git log` - View commit history
- `git branch` - List or create branches
- `git checkout [branch]` - Switch to a different branch
- `git checkout -b [branch]` - Create and switch to a new branch

---

## 🎯 Main Use Cases

### Educational Institutions
- Teach Git fundamentals in computer science courses
- Provide hands-on practice without setup complexity
- Track student progress through challenges

### Self-Learners
- Learn Git at your own pace
- Practice commands safely before using them on real projects
- Build confidence with version control

### Teams & Bootcamps
- Onboard new developers quickly
- Standardize Git knowledge across teams
- Interactive training sessions

---

## 📁 Project Structure

```
gitmastery-farsi/
├── components/          # React components
│   ├── Editor.tsx      # Code editor component
│   ├── GitGraph.tsx    # Commit visualization
│   ├── Layout.tsx      # Main layout wrapper
│   └── Terminal.tsx    # Terminal interface
├── data/               # Static data
│   └── challenges.ts   # Challenge definitions
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Levels.tsx
│   ├── Playground.tsx
│   ├── Profile.tsx
│   └── CheatSheet.tsx
├── services/           # Business logic
│   └── gitService.ts   # Git command engine
├── store/              # State management
│   └── useStore.ts     # Zustand store
├── types.ts            # TypeScript definitions
└── App.tsx             # Root component
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and structure
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👥 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/gitmastery-farsi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/gitmastery-farsi/discussions)

---

## 🙏 Acknowledgments

- Built with ❤️ for the Persian developer community
- Inspired by interactive coding platforms
- Thanks to all contributors and users

---

<div align="center">
  <p>Made with ❤️ by the GitMastery Team</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
