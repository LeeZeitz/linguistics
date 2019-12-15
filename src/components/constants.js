const stimLabels = {
    0: {
        'prompt': 'How friendly is the speaker?',
        'minVal': 'unfriendly',
        'maxVal': 'friendly',
        'min': -3,
        'max': 3
    },
    1: {
        'prompt': 'How sympathetic is the speaker?',
        'minVal': 'unsympathetic',
        'maxVal': 'sympathetic',
        'min': -3,
        'max': 3
    },
    2: {
        'prompt': 'How likeable is the speaker?',
        'minVal': 'unlikeable',
        'maxVal': 'likeable',
        'min': -3,
        'max': 3
    },
    3: {
        'prompt': 'How trustworthy is the speaker?',
        'minVal': 'untrustworthy',
        'maxVal': 'trustworthy',
        'min': -3,
        'max': 3
    },
    4: {
        'prompt': 'How ambitious is the speaker?',
        'minVal': 'unambitious',
        'maxVal': 'ambitious',
        'min': -3,
        'max': 3
    },
    5: {
        'prompt': 'How intelligent is the speaker?',
        'minVal': 'unintelligent',
        'maxVal': 'intelligent',
        'min': -3,
        'max': 3
    },
    6: {
        'prompt': 'How educated is the speaker?',
        'minVal': 'uneducated',
        'maxVal': 'educated',
        'min': -3,
        'max': 3
    },
    7: {
        'prompt': 'How authoritative is the speaker?',
        'minVal': 'unauthoritative',
        'maxVal': 'authoritative',
        'min': -3,
        'max': 3
    },
}

const trialVars = [
    {
        'audio': 'LowM_Crk1.mp3'
    }
]

const mediaUrl = '/media/audio/';
const consentForm = '/media/Informed Consent Form.docx';

export { trialVars, stimLabels, mediaUrl, consentForm };