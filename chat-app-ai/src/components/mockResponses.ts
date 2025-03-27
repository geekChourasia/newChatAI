const mockResponses: { [key: string]: string[] } = {
  hello: [
    "Hi there! 😊",
    "Hello ji! Kaise ho?",
    "Namaste! 🙏",
    "Kya haal hai?",
  ],
  hi: [
    "Hi there! 😊",
    "Hello ji! Kaise ho?",
    "Namaste! 🙏",
    "Kya haal hai?",
  ],
  thanks: [
    "Arre koi baat nahi! 😎",
    "Koi na! Kabhi bhi puchh lo!",
    "Arey, doston ke beech thank you kaisa? 😁",
  ],
  help: [
    "Haan bolo, kya madad chahiye? 🤔",
    "Bolo bhai, kaise madad karu?",
    "Arre tension mat le, batao!",
  ],
  weather: [
    "Aaj ka mausam ekdum mast hai! 😍",
    "Bhai, baarish ho rahi hai kya?",
    "Dilli ka mausam to full filmy hota hai!",
  ],
  name: [
    "Mera naam ChatBot hai, doston ka dost! 🤖",
    "Tu mujhe bhai bol sakta hai 😎",
    "Naam toh suna hi hoga, ChatBot! 😂",
  ],
  joke: [
    "Bhai, suna hai? Golgappe khane se pyaar ho jata hai! 😂",
    "Kya Mast joke hai: Akal badi ya bhains? Bhains, kyunki akal to sabme hoti nahi! 😆",
  ],
  favorite: [
    "Mujhe doston se baat karna pasand hai! ❤️",
    "Golgappe mera favorite hai, aur tumhara? 😋",
  ],
  chai: [
    "Ek garma-garam chai mil jaye toh maza aa jaye! ☕",
    "Chai bina life adhoori hai, hain na? 😍",
  ],
  biryani: [
    "Bhai, Hyderabadi biryani ya Lucknowi? 🤤",
    "Biryani = Zindagi! 😍",
    "Mutton biryani best hai, sahi bola na? 😎",
  ],
  swag: [
    "Swag se karenge sabka swagat! 😎",
    "Full on attitude, full on swag! 🔥",
  ],
  shaadi: [
    "Bhai, shaadi karne ka plan hai kya? 😂",
    "Shaadi = Free ka WiFi band! 🤣",
  ],
  how: [
    "I'm running at 60 FPS! You? 🎮",
    "All systems operational! 💡",
    "Just debugging life, you? 🐞",
  ],
  bye: [
    "Ctrl + C, exiting chat... 👋",
    "See you in the next commit! ⏭️",
    "Logging out... 🖥️",
  ],
  code: [
    "Keep calm and keep coding! 👨‍💻",
    "Write code that future you won’t hate. 😆",
    "Syntax errors are just plot twists! 📜",
  ],
  bug: [
    "Ah, the classic 'It works on my machine' issue. 😆",
    "Let’s squash that bug! 🐞",
    "Sounds like a race condition!",
  ],
  AI: [
    "AI won’t take your job... yet. 🤖",
    "Machine learning? More like 'guesswork at scale'! 😂",
    "Just don’t ask me to pass the Turing test!",
  ],
  deploy: [
    "Did you test in production? 😵",
    "Deploy first, debug later. 🚀",
    "Hope you wrote tests! 😅",
  ],
  Git: [
    "Commit early, commit often! 🔄",
    "Git push force? Living on the edge! 😨",
    "When in doubt, blame Git. 😆",
  ],
  coffee: [
    "Caffeine = Developer fuel! ☕",
    "No coffee, no code! 🚀",
    "Debugging without coffee? Impossible. ☕",
  ],
  cloud: [
    "It's not magic, it's just someone else's computer. ☁️",
    "AWS bills > Rent. 😭",
    "Deploying to the cloud… what could go wrong?",
  ],
  hackathon: [
    "Hackathons: Where sleep is optional! 😴",
    "Code, eat, repeat! 🏆",
    "Shipping MVPs at 3 AM. 😵",
  ],
  cybersecurity: [
    "Hack the planet! (Ethically, of course.) 🔓",
    "Two-factor authentication saves lives. 🔑",
    "Is your password '123456'? Change it. Now. 🔥",
  ],
  docker: [
    "Works in Docker = Works everywhere! 🐳",
    "Containers > Virtual Machines. 🔥",
    "Dockerfile looking sus? 🧐",
  ],
};

export const getMockResponse = (input: string): string => {
  const lowerCaseInput = input.toLowerCase();
  const keys = Object.keys(mockResponses);

  for (let key of keys) {
    if (lowerCaseInput.includes(key)) {
      const responses = mockResponses[key];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  return "I'm not sure how to respond to that. 🤔";
};
