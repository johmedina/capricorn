from utilities import print_emotions

from hume import HumeBatchClient, TranscriptionConfig
from hume.models.config import ProsodyConfig

new_emotion_categories = {
    'positive': ['Admiration', 'Adoration', 'Amusement', 'Awe', 'Contentment',
                  'Desire', 'Ecstasy', 'Entrancement', 'Joy', 'Love',
                  'Relief', 'Romance', 'Satisfaction', 'Triumph'],
    'negative': ['Anger', 'Contempt', 'Disappointment', 'Disgust',
                 'Distress', 'Empathic Pain', 'Envy', 'Fear', 'Guilt', 'Horror', 'Pain', 'Sadness', 'Shame'],

    'confident': ['Calmness', 'Concentration', 'Contemplation',
                  'Contentment', 'Determination', 'Realization', 'Satisfaction', 'Triumph'],
    'hesitant': ['Anxiety', 'Awkwardness', 'Confusion', 'Dissappointment', 'Doubt', 'Embarrassment', 'Fear', 'Shame'],

    'enthusiastic': ['Admiration', 'Adoration', 'Awe', 'Craving', 'Desire', 'Determination',
                     'Ecstasy', 'Entrancement', 'Interest', 'Joy', 'Love', 'Relief', 'Satisfaction', 'Surprise (positive)', 'Triumph'],
    'reserved': ['Awkwardness', 'Boredom', 'Confusion', 'Dissappointment', 'Doubt', 'Embarrassment', 'Fear', 'Shame', 'Tiredness'],

    'determined': ['Contentment', 'Desire', 'Determination', 'Pride', 'Satisfaction', 'Triumph'],
    'doubtful': ['Anxiety', 'Boredom', 'Confusion', 'Doubt', 'Surprise (negative)'],

    'etc': ['Nostalgia', 'Romance', 'Sympathy']
}

def process_emotion(emotions_list, emotion_categories):
    result = {category: 0 for category in emotion_categories}

    for emotion in emotions_list:
        for category, emotions in emotion_categories.items():
            if emotion['name'] in emotions:
                result[category] += emotion['score']

    for category in result:
        if result[category] != 0:
            result[category] /= sum(result.values())

    return result

def new_overall_emotion(chunks_data, emotion_categories):
    result = {category: 0 for category in emotion_categories}

    for chunk in chunks_data:
        chunk_duration = chunk['time']['end'] - chunk['time']['begin']

        for category in result:
            result[category] += chunk['emotions'][category] * chunk_duration

    total_emotion_score = sum(result.values())
    
    for category in result:
        
        pair_tmp = result['positive'] + result['negative']
        result['positive'] /= pair_tmp
        result['negative'] /= pair_tmp
        
        pair_tmp = result['confident'] + result['hesitant']
        result['confident'] /= pair_tmp
        result['hesitant'] /= pair_tmp
        
        pair_tmp = result['enthusiastic'] + result['reserved']
        result['enthusiastic'] /= pair_tmp
        result['reserved'] /= pair_tmp
        
        pair_tmp = result['determined'] + result['doubtful']
        result['determined'] /= pair_tmp
        result['doubtful'] /= pair_tmp
        
            
    return result


def analyze_video(video_url):
    client = HumeBatchClient("")

    urls = [video_url]
    prosody_config = ProsodyConfig()
    transcription_config = TranscriptionConfig(language="ja")  # Will detect Japanese
    job = client.submit_job(urls, [prosody_config])

    print("Running...", job)
    job.await_complete()
    print("Job completed with status: ", job.get_status())

    full_predictions = job.get_predictions()

    result = full_predictions[0]['results']['predictions'][0]['models']['prosody']['grouped_predictions'][0]['predictions']

    pro_res = [
    {'text': i['text'],
     'time': i['time'],
     'confidence': i['confidence'],
     'speaker_confidence': i['speaker_confidence'],
     'emotions': process_emotion(i['emotions'], new_emotion_categories)
    } for i in result
    ]

    transcript = "".join([i['text'] for i in pro_res])
    
    return new_overall_emotion(pro_res, new_emotion_categories), transcript
