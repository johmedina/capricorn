import os
import openai
from openai import AzureOpenAI

AZURE_OPENAI_DEPLOYMENT_NAME = "GPT35"
AZURE_OPENAI_KEY = "ffcb3ff9a52e48cdbbd51d69fdea957e"
AZURE_OPENAI_ENDPOINT = "https://genai-instance.openai.azure.com/"

openai.api_type = "azure"
openai.api_base = AZURE_OPENAI_ENDPOINT
openai.api_key = AZURE_OPENAI_KEY
openai.api_version = "2023-05-15"

def generate_interview_summary(interview_transcript, job_description, soft_skills, hard_skills):
    # gets the API Key from environment variable AZURE_OPENAI_API_KEY
    client = AzureOpenAI(
        # https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#rest-api-versioning
    api_version="2023-05-15",
        # https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    api_key = AZURE_OPENAI_KEY
    )

    response = client.chat.completions.create(
        model=AZURE_OPENAI_DEPLOYMENT_NAME,  
        messages=[
            {
                "role": "system",
                "content": f'''You are a human ressources manager. You need to help hiring managers and interviewers analyze potential candidtates based on their interviews. You will take in a transcript of an interview done by a candidate. You will also be provided the job description, set of hard skills (specific tools and skills), a set of soft skills (mostly interpersonal and tacit skills).
                               Given this you should write a report that describes the qualification, with examples from the transcript if any exist, of the candidate for the job position. The first part of the report should be concise summary of what the interviewee talked about in their transcript. The second part of the report should be a bullet point format report that covers each skill provided in the list of hard and soft skills. For each in the soft skill and hard skill list, 
                               mention the level of proficiency mentioned in the transcript with examples of what they said about it from the transcript. If a skill was not mentioned, say "skill was not mentioned". ''',
                "role": "user",
                "content": f"Write a report. Be sure to give the 2 component: (1) give a summary paragraph of what was said in the transcript. (2) Give a bullet point report of each soft and hard skill and describe the candidates proficiency in each of those skills based on the transcript. This is the interviewee's transcript: {interview_transcript} \n\n This is the job description: {job_description} \n\n These are the hard skills: {hard_skills} \n\n These are the soft skills: {soft_skills}",
            },
        ],
    )

    return response.choices[0].message.content.split("\n")