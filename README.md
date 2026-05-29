# Brain-Route-AI



## Project Overview
BrainRoute AI is an AI-powered personalized learning pathway generator built using IBM watsonx Prompt Lab and Granite model.

## Platform Used
- IBM watsonx Orchestrate
- IBM watsonx.ai Prompt Lab
- Granite Foundation Model
- IBM Cloud Deployment Space

## Features
- Personalized course roadmap generation
- Based on student interest, skill level, and career goal
- Real-time AI responses using deployed model API

## How it Works
1. User enters interest, skill level, and career goal
2. Prompt is sent to IBM Granite model
3. AI generates structured learning roadmap
4. Response is returned via deployed API endpoint

## Prompt Used
Student Interest: {interest}  
Skill Level: {skill_level}  
Career Goal: {career_goal}

## Deployment
- Deployed using IBM watsonx Prompt Lab
- Online API endpoint generated from Deployment Space

## Tech Stack
- IBM watsonx.ai
- Granite LLM
- Prompt Engineering

## Status
Successfully deployed and tested on IBM Cloud
