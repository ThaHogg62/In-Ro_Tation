
import { Video, Comment } from './types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'Exploring the Alps: A 4K Drone Film',
    thumbnailUrl: 'https://picsum.photos/seed/alps/640/360',
    channelName: 'Nature Ventures',
    channelAvatarUrl: 'https://picsum.photos/seed/c1/40/40',
    views: '1.2M views',
    uploadedAt: '2 weeks ago',
    duration: '14:32',
    subscribers: '845K',
    description: `Join us on an epic journey through the breathtaking landscapes of the Swiss Alps. Filmed in stunning 4K, this drone footage captures the majestic peaks, serene lakes, and lush valleys like never before.`,
    transcript: `(Intro music fades) Welcome back to Nature Ventures. Today, we're soaring high above the Swiss Alps. As you can see, the morning light is just hitting the peaks, creating a stunning contrast with the shadowed valleys below. We launched our drone from a small village near Grindelwald. The air is crisp, and the silence is only broken by the faint whir of the drone's propellers. Look at that glacial lake, its turquoise water is a result of rock flour from the surrounding glaciers. For photographers, this is a dream come true. Every angle presents a new, perfect shot. We spent three days filming, battling changing weather conditions, but it was all worth it for these views. The key to getting shots like these is patience and understanding the light. Golden hour, just after sunrise and before sunset, provides that soft, warm light that makes landscapes glow. We're now flying towards the Matterhorn, one of the most iconic mountains in the world. Its distinct pyramidal shape is instantly recognizable. This journey was not just about capturing beautiful images; it was about experiencing the raw, untamed power of nature. We hope this film inspires you to get out and explore the world around you. Thanks for watching, and don't forget to subscribe for more adventures. (Outro music begins)`
  },
  {
    id: '2',
    title: 'The Ultimate Guide to React Hooks in 2024',
    thumbnailUrl: 'https://picsum.photos/seed/react/640/360',
    channelName: 'CodeCraft',
    channelAvatarUrl: 'https://picsum.photos/seed/c2/40/40',
    views: '876K views',
    uploadedAt: '1 month ago',
    duration: '45:18',
    subscribers: '1.2M',
    description: `A deep dive into React Hooks. We cover useState, useEffect, useContext, useReducer, useCallback, and useMemo with practical examples and best practices for modern web development.`,
    transcript: `Hey everyone, and welcome to CodeCraft. In this comprehensive guide, we're going to master React Hooks. Let's start with the most basic one: useState. It allows you to add state to functional components. Simple, right? But powerful. Next up, useEffect. This hook lets you perform side effects in your components, like fetching data or subscribing to an API. Remember the dependency array! It's crucial for performance. An empty array means the effect runs only once, on mount. If you pass a variable, the effect runs whenever that variable changes. Now let's talk about useContext for avoiding prop drilling. It's a lifesaver for complex applications.`
  },
  {
    id: '3',
    title: 'Sleek UI Design Principles with Figma',
    thumbnailUrl: 'https://picsum.photos/seed/figma/640/360',
    channelName: 'Design First',
    channelAvatarUrl: 'https://picsum.photos/seed/c3/40/40',
    views: '450K views',
    uploadedAt: '3 weeks ago',
    duration: '22:05',
    subscribers: '312K',
    description: `Learn the core principles of creating beautiful and intuitive user interfaces. We'll use Figma to demonstrate concepts like visual hierarchy, color theory, typography, and spacing.`,
    transcript: `What's up, designers! Today is all about making your UIs look amazing and feel intuitive. We're in Figma, and the first principle we'll discuss is visual hierarchy. Guide the user's eye. Use size, color, and placement to show what's most important. Second, color theory. Don't just pick random colors. Use a tool like Coolors to generate a palette. A 60-30-10 rule is a great starting point: 60% for your dominant color, 30% for secondary, and 10% for accents. Third, typography. Choose a clean, readable font. And be consistent with your font sizes and weights. And finally, whitespace. Don't be afraid of it. Giving your elements room to breathe is the key to a clean, uncluttered design.`
  },
  {
    id: '4',
    title: 'Making the Perfect Sourdough Bread',
    thumbnailUrl: 'https://picsum.photos/seed/bread/640/360',
    channelName: 'Kitchen Chronicles',
    channelAvatarUrl: 'https://picsum.photos/seed/c4/40/40',
    views: '2.1M views',
    uploadedAt: '3 months ago',
    duration: '18:49',
    subscribers: '950K',
    description: `From starter to a perfectly baked loaf. This is my step-by-step guide to making delicious, crusty sourdough bread at home. It's easier than you think!`,
    transcript: `Hello, food lovers! Welcome to Kitchen Chronicles. Sourdough can be intimidating, but I'm here to demystify it. It all starts with your starter. It needs to be active and bubbly. Feed it regularly. The key is a 1:1:1 ratio of starter, flour, and water. Once it's ready, we mix the dough. Use high-quality bread flour. The process involves a series of 'stretch and folds' to develop gluten without kneading. This gives sourdough its characteristic open crumb. Patience is key during the bulk fermentation. Let it rise until it's airy and full of life. Then we shape, proof, and finally, bake in a hot Dutch oven. The steam created inside is what gives you that amazing crust. Let's slice into it... listen to that crunch!`
  },
   {
    id: '5',
    title: 'Cyberpunk City - Ambient Blade Runner Music',
    thumbnailUrl: 'https://picsum.photos/seed/cyberpunk/640/360',
    channelName: 'Synth Dreams',
    channelAvatarUrl: 'https://picsum.photos/seed/c5/40/40',
    views: '5.5M views',
    uploadedAt: '1 year ago',
    duration: '3:00:00',
    subscribers: '2.1M',
    description: '3 hours of atmospheric, futuristic synthwave music for focus, relaxation, or sleep. Inspired by the worlds of Blade Runner and Cyberpunk 2077.',
    transcript: '(Synthesizer music plays with sounds of rain and distant sirens)'
  },
  {
    id: '6',
    title: 'The Physics of Black Holes Explained',
    thumbnailUrl: 'https://picsum.photos/seed/space/640/360',
    channelName: 'Cosmic Curiousity',
    channelAvatarUrl: 'https://picsum.photos/seed/c6/40/40',
    views: '3.2M views',
    uploadedAt: '5 months ago',
    duration: '28:10',
    subscribers: '1.8M',
    description: `What is a black hole? How are they formed? What happens if you fall into one? We break down the mind-bending physics of these cosmic mysteries.`,
    transcript: `Space, the final frontier... and its most mysterious objects are black holes. A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of no escape is called the event horizon. Although it has a great effect on the fate and circumstances of an object crossing it, it has no locally detectable features. In many ways, a black hole acts as an ideal black body, as it reflects no light. What happens at the center? We simply don't know. The laws of physics as we understand them break down at the singularity.`
  },
  {
    id: '7',
    title: 'Building a PC in 2024 - Step by Step Guide',
    thumbnailUrl: 'https://picsum.photos/seed/pc/640/360',
    channelName: 'TechSource',
    channelAvatarUrl: 'https://picsum.photos/seed/c7/40/40',
    views: '980K views',
    uploadedAt: '2 months ago',
    duration: '35:42',
    subscribers: '2.5M',
    description: 'A complete, step-by-step tutorial on how to build a gaming PC in 2024. We cover component selection, assembly, and cable management for a clean and powerful build.',
    transcript: 'Hey guys, welcome to TechSource. Today we are building an absolute beast of a PC. First up, the motherboard. We need to install the CPU. Lift the retention arm, line up the triangle on the CPU with the one on the socket, and gently place it in. No force needed! Next, the RAM. Open the clips, line up the notch, and press down firmly until they click into place. Now for the M.2 SSD - our super-fast storage. It just slots in and is secured with one tiny screw. Easy. Now we can put the motherboard into the case. Make sure your I/O shield is installed first! After that, it\'s time for the graphics card, our powerhouse for gaming. It slots into the top PCIe slot. Finally, the power supply and the dreaded cable management. Take your time, route cables cleanly. It makes a huge difference.'
  },
  {
    id: '8',
    title: 'Minimalist Living: How to Declutter Your Life',
    thumbnailUrl: 'https://picsum.photos/seed/minimal/640/360',
    channelName: 'Simple Habits',
    channelAvatarUrl: 'https://picsum.photos/seed/c8/40/40',
    views: '1.1M views',
    uploadedAt: '6 months ago',
    duration: '15:20',
    subscribers: '720K',
    description: 'Minimalism is about more than just having less stuff. It\'s about making room for more time, more freedom, and more joy. Here are practical tips to start your minimalist journey.',
    transcript: 'Do you ever feel overwhelmed by your stuff? That\'s where minimalism comes in. It\'s not about owning nothing; it\'s about intentionally owning what matters. Start with one area, like your closet. Ask yourself for each item: do I love it? Do I use it? If not, it\'s time to let it go. The 90/90 rule is helpful: have I used this in the last 90 days? Will I use it in the next 90? This helps detach emotionally. Apply this to every room in your house. The goal is not deprivation, it\'s freedom. Freedom from clutter, from debt, from the stress of managing too much stuff. You\'ll find you have more time and energy for what truly matters.'
  }
];

export const comments: Comment[] = [
    { id: 'c1', author: 'Alex', authorAvatarUrl: 'https://picsum.photos/seed/u1/32/32', text: 'This footage is absolutely breathtaking! Makes me want to book a flight right now.', timestamp: '1 week ago' },
    { id: 'c2', author: 'Maria', authorAvatarUrl: 'https://picsum.photos/seed/u2/32/32', text: 'Amazing quality. What drone were you using for these shots?', timestamp: '1 week ago' },
    { id: 'c3', author: 'Sam', authorAvatarUrl: 'https://picsum.photos/seed/u3/32/32', text: 'The explanation of golden hour was super helpful. Thanks for the tips!', timestamp: '6 days ago' },
    { id: 'c4', author: 'Chloe', authorAvatarUrl: 'https://picsum.photos/seed/u4/32/32', text: 'Subscribed! Can\'t wait for the next adventure.', timestamp: '3 days ago' },
];
