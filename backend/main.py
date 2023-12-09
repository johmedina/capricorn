import flask
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin

import json

from hume import HumeBatchClient, TranscriptionConfig
from hume.models.config import ProsodyConfig

from utilities import print_emotions
from generate_questions import generate_questions
from comparison_summary import generate_interview_summary
from analyze_video import analyze_video
### Map of Emotions -> Characteristic

app = Flask('app')
CORS(app)

@app.route('/generate_questions_from_job_desc', methods=['POST'])
def generate_questions_from_job_desc(job_desc):
    return generate_questions(job_desc)

@app.route('/generate_report', methods=['POST'])
def generate_report(transcript, job_desc, soft_skills, hard_skills):
    return generate_interview_summary(transcript, job_desc, soft_skills, hard_skills)

@app.route('/analyze_video', methods=['POST'])
def analyze_video(url_to_video):
    return analyze_video(url_to_video)


