# Interview LLM

An invisible desktop application that will help you pass your technical interviews.

https://www.interviewllm.dev

## Invisibility Compatibility

The application is invisible to:

- Zoom versions below 6.1.6 (inclusive)
- All browser-based screen recording software
- All versions of Discord
- Mac OS _screenshot_ functionality (Command + Shift + 3/4)

Note: The application is **NOT** invisible to:

- Zoom versions 6.1.6 and above
 - Enable Advanced capture with window filtering in Zoom settings to make this work for Zoom versions higher than 6.1.6

- Mac OS native screen _recording_ (Command + Shift + 5)

## Features

- 🎯 99% Invisibility: Undetectable window that bypasses most screen capture methods
- 📸 Smart Screenshot Capture: Capture both question text and code separately for better analysis
- 🤖 AI-Powered Analysis: Automatically extracts and analyzes coding problems
- 💡 Solution Generation: Get detailed explanations and solutions
- 🎨 Window Management: Freely move and position the window anywhere on screen

## Global Commands

The application uses unidentifiable global keyboard shortcuts that won't be detected by browsers or other applications:

- Toggle Window Visibility: [Control or Cmd + b]
- Move Window: [Control or Cmd + arrows]
- Take Screenshot: [Control or Cmd + H]
- Process Screenshots: [Control or Cmd + Enter]
- Reset View: [Control or Cmd + R]
- Quit: [Control or Cmd + Q]

## Usage


## Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager
- Screen Recording Permission for Terminal/IDE
  - On macOS:
    1. Go to System Preferences > Security & Privacy > Privacy > Screen Recording
    2. Ensure that Interview Coder has screen recording permission enabled
    3. Restart Interview Coder after enabling permissions
  - On Windows:
    - No additional permissions needed

## Installation

```bash
git clone https://github.com/<your-username>/intllm.git
cd intllm
```

3. Install dependencies:

```bash
npm install
# or if using bun
bun install
```

## Running Locally on 2 terminal instances
0. Add your openAI key to server.js line 19.
   - Go to the [OpenAI Platform](https://platform.openai.com/signup) and sign up or log in.
   -  Once logged in, navigate to the [API Keys page](https://platform.openai.com/account/api-keys).
   - Click on **"Create new secret key"**.
   - Copy the generated key and replace it in server/server.js. 

2. Start Server

```bash
node server/server.js
```

2. Start the Frontend:

```bash
npm run dev
```

This will:

- Start the Vite development server
- Launch the Electron application
- Enable hot-reloading for development

## Customization

- The app supports changing the open-ai model used and the desired programming language, this can be done by going server/server.js and changing all usages of "gpt-4o" for the model and "java" for changing the programming language.

## Support
get help on gregtanenbaum@proton.me

## License
This repository and its contents are confidential and proprietary.  
Unauthorized copying, distribution, modification, or sharing in any form is strictly prohibited.  

© InterviewLLM, [2025]. All rights reserved.
