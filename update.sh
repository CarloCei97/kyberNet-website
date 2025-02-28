#!/bin/bash
# update-css.sh
# This script backs up and then updates your CSS files to use a centralized theme file.

# Define a timestamp for backups
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Function to backup a file if it exists
backup_file() {
  if [ -f "$1" ]; then
    cp "$1" "$1.bak.$TIMESTAMP"
    echo "Backed up $1 to $1.bak.$TIMESTAMP"
  fi
}

# Create directories if they don't exist
mkdir -p src
mkdir -p src/components

#############################
# 1. Create src/theme.css
#############################
backup_file "src/theme.css"
cat <<'EOF' > src/theme.css
:root {
  /* Colors */
  --primary-color: #007BFF;
  --primary-color-light: #66B2FF;
  --primary-color-dark: #0056b3;

  --secondary-color: #ffdd57;
  --secondary-color-light: #ffe680;
  --secondary-color-dark: #ffbb00;

  --accent-color: #FF5722;
  --accent-color-light: #FF8A65;
  --accent-color-dark: #E64A19;

  --background-color: #f4f4f4;
  --surface-color: #ffffff;

  --text-color: #333333;
  --text-color-light: #666666;
  --text-color-dark: #000000;

  /* Typography */
  --header-font: 'Roboto', sans-serif;
  --body-font: 'Open Sans', sans-serif;
  --monospace-font: 'Courier New', monospace;

  /* Sizing & Spacing */
  --base-border-radius: 8px;
  --card-border-radius: calc(var(--base-border-radius) * 2);
  --button-border-radius: var(--base-border-radius);

  --header-height: 80px;
  --footer-height: 60px;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Transitions */
  --transition-speed: 0.3s;

  /* Shadows */
  --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  --header-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
EOF
echo "Created/Updated src/theme.css"

#############################
# 2. Update src/App.css
#############################
backup_file "src/App.css"
cat <<'EOF' > src/App.css
@import './theme.css';

body {
  margin: 0;
  font-family: var(--body-font);
  background: var(--background-color);
  color: var(--text-color);
  scroll-behavior: smooth;
}

.content-container {
  max-width: 1200px;
  margin: var(--header-height) auto var(--spacing-lg);
  padding: 0 var(--spacing-md);
}
EOF
echo "Created/Updated src/App.css"

#############################
# 3. Update src/components/Header.css
#############################
backup_file "src/components/Header.css"
cat <<'EOF' > src/components/Header.css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background: var(--primary-color);
  color: white;
  padding: var(--spacing-sm) 0;
  font-family: var(--header-font);
  z-index: 1000;
  transition: background var(--transition-speed), box-shadow var(--transition-speed);
}

.header.shadow {
  box-shadow: var(--header-shadow);
  background: rgba(0, 123, 255, 0.95);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-md);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color var(--transition-speed), transform var(--transition-speed);
}

.nav-link:hover {
  color: var(--secondary-color);
  transform: translateY(-3px);
}
EOF
echo "Created/Updated src/components/Header.css"

#############################
# 4. Update src/components/Hero.css
#############################
backup_file "src/components/Hero.css"
cat <<'EOF' > src/components/Hero.css
.hero {
  background-image: url('https://example.com/your-hero-image.jpg'); /* Replace with your actual hero image URL */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 6rem var(--spacing-md);
  color: white;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.hero p {
  font-size: 1.5rem;
}
EOF
echo "Created/Updated src/components/Hero.css"

#############################
# 5. Update src/components/NewsFeed.css
#############################
backup_file "src/components/NewsFeed.css"
cat <<'EOF' > src/components/NewsFeed.css
.newsfeed {
  margin: var(--spacing-lg) 0;
  text-align: center;
}

.newsfeed h2 {
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
  letter-spacing: 0.5px;
}

/* Horizontal scroll container */
.news-cards {
  display: flex;
  overflow-x: auto;
  overflow-y: visible;  /* Allow vertical overflow for scaled cards */
  gap: var(--spacing-lg);
  padding: 0 var(--spacing-md) 50px;  /* Extra bottom padding for hover scaling */
  scroll-snap-type: x mandatory;
}

/* Each card */
.news-card {
  position: relative;
  flex: 0 0 350px;
  scroll-snap-align: start;
  border-radius: var(--card-border-radius);
  overflow: hidden;
  background: var(--surface-color);
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  transform-origin: top center;
  z-index: 1;
}

.news-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: var(--card-hover-shadow);
  z-index: 2;
}

/* Image styling */
.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

/* Optional overlay gradient on image */
.news-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
  pointer-events: none;
}

/* Card content styling */
.news-content {
  padding: var(--spacing-md);
  text-align: left;
}

.news-title {
  font-size: 1.4rem;
  margin: var(--spacing-sm) 0;
  color: var(--text-color-dark);
}

.news-description {
  font-size: 1rem;
  color: var(--text-color-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
}

.news-link {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--primary-color);
  color: var(--surface-color);
  border-radius: var(--button-border-radius);
  text-decoration: none;
  font-weight: bold;
  transition: background var(--transition-speed) ease;
}

.news-link:hover {
  background: var(--primary-color-dark);
}
EOF
echo "Created/Updated src/components/NewsFeed.css"

echo "All CSS files have been updated with the new theme structure."
