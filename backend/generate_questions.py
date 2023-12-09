import os
import openai
from openai import OpenAI
from openai import AzureOpenAI

AZURE_OPENAI_DEPLOYMENT_NAME = "GPT35"
AZURE_OPENAI_KEY = "ffcb3ff9a52e48cdbbd51d69fdea957e"
AZURE_OPENAI_ENDPOINT = "https://genai-instance.openai.azure.com/"

openai.api_type = "azure"
openai.api_base = AZURE_OPENAI_ENDPOINT
openai.api_key = AZURE_OPENAI_KEY
openai.api_version = "2023-05-15"

def generate_questions(job_prompt):
    # gets the API Key from environment variable AZURE_OPENAI_API_KEY
    client = AzureOpenAI(
        # https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#rest-api-versioning
    api_version="2023-05-15",
        # https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    api_key = AZURE_OPENAI_KEY
    )

    response = client.chat.completions.create(
        model=AZURE_OPENAI_DEPLOYMENT_NAME,  # e.g. gpt-35-instant
        messages=[
            {
                "role": "system",
                "content": f"You are a human resources manager. You task to take take a job description and generate 10 relevant interview questions based on the job description. Make sure the questions cover all the skill requirements mentioned in the job description.",
                "role": "user",
                "content": f"This is the job prompt: {job_prompt}",
            },
        ],
    )

    return response.choices[0].message.content.split("\n")