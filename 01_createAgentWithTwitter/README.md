### Preparation

- create test twitter account  
  1 username  
  2 password  
  3 email registerd

- get openAI api key  
  (other AI api key is ok (For example OpenRouter))

- node version is 23

### Step1 git clone

`git clone https://github.com/ai16z/eliza.git`

### Step2 build

1 install
`pnpm install --no-frozen-lockfile`  
2 build
`pnpm build`

### Step3 set .env information

1 OPENAI_API_KEY  
2 TWITTER_USERNAME  
3 TWITTER_PASSWORD  
4 TWITTER_EMAIL  
5 POST_INTERVAL_MIN  
6 POST_INTERVAL_MAX

### Step4 set character

1 clients  
2 modelProvider

### Step5 Start the agent

`pnpm start --character="characters/trump.character.json"`
