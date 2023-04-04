import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

/**
 * Generate random prompt for give ideas for the users
 * 
 * @param {*} prompt 
 * @returns 
 */
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

/**
 * Download image
 * 
 * @param {*} _id 
 * @param {*} photo 
 */
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}