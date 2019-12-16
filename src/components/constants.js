const stimLabels = {
    0: {
        'prompt': 'How friendly is the speaker?',
        'minVal': 'less friendly',
        'maxVal': 'friendly',
        'min': -3,
        'max': 3
    },
    1: {
        'prompt': 'How sympathetic is the speaker?',
        'minVal': 'less sympathetic',
        'maxVal': 'sympathetic',
        'min': -3,
        'max': 3
    },
    2: {
        'prompt': 'How likeable is the speaker?',
        'minVal': 'less likeable',
        'maxVal': 'likeable',
        'min': -3,
        'max': 3
    },
    3: {
        'prompt': 'How trustworthy is the speaker?',
        'minVal': 'less trustworthy',
        'maxVal': 'trustworthy',
        'min': -3,
        'max': 3
    },
    4: {
        'prompt': 'How ambitious is the speaker?',
        'minVal': 'less ambitious',
        'maxVal': 'ambitious',
        'min': -3,
        'max': 3
    },
    5: {
        'prompt': 'How intelligent is the speaker?',
        'minVal': 'less intelligent',
        'maxVal': 'intelligent',
        'min': -3,
        'max': 3
    },
    6: {
        'prompt': 'How educated is the speaker?',
        'minVal': 'less educated',
        'maxVal': 'educated',
        'min': -3,
        'max': 3
    },
    7: {
        'prompt': 'How authoritative is the speaker?',
        'minVal': 'less authoritative',
        'maxVal': 'authoritative',
        'min': -3,
        'max': 3
    },
}

const trialVars = [
    {
        'audio': 'HiM_Crk_1_Norm.mp3'
    },
    {
        'audio': 'HiM_Crk_1_Norm.mp3'
    }
]

const mediaUrl = '/media/audio/';
const consentForm = '/media/Informed Consent Form.docx';

export { trialVars, stimLabels, mediaUrl, consentForm };
