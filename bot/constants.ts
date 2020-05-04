import {XY} from './types';

export const botName = 'ImageDrawBot';
export const commands: Record<string, string> = {
  draw: 'draw',
  drawCenter: 'draw_center',
  drawHd: 'draw_hd',
  drawCenterHd: 'draw_center_hd',
  drawFhd: 'draw_fhd',
  drawCenterFhd: 'draw_center_fhd',
  draw2k: 'draw_2k',
  drawCenter2k: 'draw_center_2k',
  draw4k: 'draw_4k',
  drawCenter4k: 'draw_center_4k'
};

export const resolutions: Record<string, XY> = {
  default: [256, 256],
  hd: [1280, 720],
  fhd: [1920, 1080],
  '2k': [2048, 1080],
  '4k': [3840, 2160]
}

export enum Origin {
  TopLeft,
  Center,
}
