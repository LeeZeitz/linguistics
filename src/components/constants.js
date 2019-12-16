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
        'audio': 'Dist11_Norm.mp3'
    },
    {
        'audio': 'Dist12_Norm.mp3'
    },
    {
        'audio': 'Dist13_Norm.mp3'
    },
    {
        'audio' : 'Dist14_Norm.mp3'
    },
    {
        'audio' : 'Dist15_Norm.mp3'
    },
    {
        'audio' : 'Dist16_Norm.mp3'
    },
    {
        'audio': 'Dist17_Norm.mp3'
    },
    {
        'audio': 'Dist18_Norm.mp3'
    },
    {
        'audio': 'Dist19_Norm.mp3'
    },
    {
        'audio': 'Dist20_Norm.mp3'
    },
    {
        'audio': 'Dist21_Norm.mp3'
    },
    {
        'audio': 'Dist22_Norm.mp3'
    },
    {
        'audio': 'Dist23_Norm.mp3'
    },
    {
        'audio': 'Dist24_Norm.mp3'
    },
    {
        'audio': 'Dist25_Norm.mp3'
    },
    {
        'audio': 'Dist26_Norm.mp3'
    },
    {
        'audio': 'Dist27_Norm.mp3'
    },
    {
        'audio': 'Dist28_Norm.mp3'
    },
    {
        'audio': 'Dist29_Norm.mp3'
    },
    {
        'audio': 'Dist30_Norm.mp3'
    },
    {
        'audio': 'Dist31_Norm.mp3'
    },
    {
        'audio': 'Dist32_Norm.mp3'
    },
    {
        'audio': 'Dist33_Norm.mp3'
    },
    {
        'audio': 'Dist34_Norm.mp3'
    },
    {
        'audio': 'Dist35_Norm.mp3'
    },
    {
        'audio': 'Dist36_Norm.mp3'
    },
    {
        'audio': 'HiM_Crk1_Norm.mp3'
    },
    {
        'audio': 'HiM_Crk4_Norm.mp3'
    },
    {
        'audio': 'HiM_Crk5_Norm.mp3'
    },
    {
        'audio': 'HiM_Mod1_Norm.mp3'
    },
    {
        'audio': 'HiM_Mod2_Norm.mp3'
    },
    {
        'audio': 'HiM_Mod3_Norm.mp3'
    },
    {
        'audio': 'HiM_Part4_Norm.mp3'
    },
    {
        'audio': 'HiM_Part5_Norm.mp3'
    },
    {
        'audio': 'HiM_Part6_Norm.mp3'
    },
    {
        'audio': 'HiW_Crk1_Norm.mp3'
    },
    {
        'audio': 'HiW_Crk5_Norm.mp3'
    },
    {
        'audio': 'HiW_Crk6_Norm.mp3'
    },
    {
        'audio': 'HiW_Mod2_Norm.mp3'
    },
    {
        'audio': 'HiW_Mod3_Norm.mp3'
    },
    {
        'audio': 'HiW_Mod5_Norm.mp3'
    },
    {
        'audio': 'HiW_Part1_Norm.mp3'
    },
    {
        'audio': 'HiW_Part4_Norm.mp3'
    },
    {
        'audio': 'HiW_Part5_Norm.mp3'
    },
    {
        'audio': 'LowM_Crk1.mp3'
    },
]

const mediaUrl = '/media/audio/';
const consentForm = '/media/Informed Consent Form.docx';

export { trialVars, stimLabels, mediaUrl, consentForm };
