import * as tf from '@tensorflow/tfjs';

const modelUrl = 'path/to/your/pretrained/model.json'; // Update with your model path

let model;

export const loadModel = async () => {
    model = await tf.loadLayersModel(modelUrl);
};

export const processData = async (brainwaveData) => {
    if (!model) {
        throw new Error('Model not loaded. Please load the model before processing data.');
    }

    const inputTensor = tf.tensor2d(brainwaveData, [1, brainwaveData.length]);
    const prediction = model.predict(inputTensor);
    const processedData = prediction.arraySync();

    return processedData;
};