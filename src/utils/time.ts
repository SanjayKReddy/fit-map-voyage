/**
 * Time-based utilities for the fitness app
 */

const greetingLines = [
  "Make today amazing",
  "Time to shine bright", 
  "Ready to conquer",
  "Let's make it count",
  "Your best self awaits",
  "Time to level up",
  "Ready to inspire"
];

export function getChangingGreetingLine(): string {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return greetingLines[dayOfYear % greetingLines.length];
}

export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if (hour >= 17 && hour < 22) {
    return "Good evening";
  } else {
    return "Good evening";
  }
}

export function getDisplayName(fullName: string): string {
  if (fullName.length <= 10) return fullName;
  
  const nickname = localStorage.getItem('userNickname');
  if (nickname) return nickname;
  
  return fullName.substring(0, 10) + "...";
}

export function checkAndAskForNickname(fullName: string): void {
  if (fullName.length > 10 && !localStorage.getItem('userNickname')) {
    const nickname = prompt(`Your name "${fullName}" is quite long. Would you like to set a shorter nickname for better display?`);
    if (nickname && nickname.trim().length <= 10) {
      localStorage.setItem('userNickname', nickname.trim());
    }
  }
}

export function getMotivationalMessage(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "ready to start strong?";
  } else if (hour >= 12 && hour < 17) {
    return "time to stay active?";
  } else if (hour >= 17 && hour < 22) {
    return "ready to finish strong?";
  } else {
    return "ready to plan tomorrow?";
  }
}