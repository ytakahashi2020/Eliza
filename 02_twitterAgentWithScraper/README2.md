### Preparation

#### 1 create test twitter account

1 username  
 2 password  
 3 email registerd

#### 2 get openAI api key

(other AI api key is ok (For example OpenRouter))

#### 3 node version is 23

#### 4 cursor (recommended)

-> easy to transform the format

## 1 Collect Twitter Information

### Step1 git clone twitter-scraper-finetune

`git clone https://github.com/ai16z/twitter-scraper-finetune.git`

### Step2 Install

`pnpm install`

### Step3 set .env information

1 TWITTER_USERNAME  
2 TWITTER_PASSWORD

### Step4 Twitter Collection

ex)  
npm run twitter -- metaplex

## 2 Create an agent

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

change  
1 name  
2 clients  
3 modelProvider

delete  
1 bio  
2 lore  
3 knowledge  
4 messageExamples only one message  
5 topics  
6 style -> all  
7 adjectives

### Step5 set postExamples

1 file path  
pipeline -> twittername -> processed -> finetuning.jsonl

2 format the file  
Ctrl + A -> Ctrl + K -> instruction  
ex)  
`Extract the text field values from each JSON object, wrap them in double quotes, and separate them with commas.`

3 paste these to postExamples

### Step6 Start the agent

`pnpm start --character="characters/metaplex.character.json"`
