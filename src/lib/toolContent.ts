import type { Locale } from '../config/site';
import ageCalculatorContent from '../i18n/tools/age-calculator';
import base64Content from '../i18n/tools/base64';
import caseConverterContent from '../i18n/tools/case-converter';
import characterCounterContent from '../i18n/tools/character-counter';
import colorGeneratorContent from '../i18n/tools/color-generator';
import compoundInterestContent from '../i18n/tools/compound-interest';
import countdownTimerContent from '../i18n/tools/countdown-timer';
import dateDifferenceContent from '../i18n/tools/date-difference';
import diceRollerContent from '../i18n/tools/dice-roller';
import gpaCalculatorContent from '../i18n/tools/gpa-calculator';
import gradeAverageContent from '../i18n/tools/grade-average';
import imageCompressorContent from '../i18n/tools/image-compressor';
import imageResizerContent from '../i18n/tools/image-resizer';
import jpgToPngContent from '../i18n/tools/jpg-to-png';
import jsonFormatterContent from '../i18n/tools/json-formatter';
import loveTypeContent from '../i18n/tools/love-type-test';
import mbtiContent from '../i18n/tools/mbti-test';
import mortgagePaymentContent from '../i18n/tools/mortgage-payment';
import passwordGeneratorContent from '../i18n/tools/password-generator';
import pomodoroContent from '../i18n/tools/pomodoro-timer';
import pngToJpgContent from '../i18n/tools/png-to-jpg';
import qrCodeContent from '../i18n/tools/qr-code-generator';
import randomGroupContent from '../i18n/tools/random-group-generator';
import randomNameContent from '../i18n/tools/random-name-picker';
import randomNumberContent from '../i18n/tools/random-number-picker';
import randomStudentContent from '../i18n/tools/random-student-picker';
import randomWheelContent from '../i18n/tools/random-wheel';
import savingsGoalContent from '../i18n/tools/savings-goal';
import stopwatchContent from '../i18n/tools/stopwatch';
import thisOrThatContent from '../i18n/tools/this-or-that';
import urlEncoderContent from '../i18n/tools/url-encoder';
import whatToEatContent from '../i18n/tools/what-to-eat';
import wordCounterContent from '../i18n/tools/word-counter';

export const contentBySlug = {
  'random-number-picker': randomNumberContent,
  'pomodoro-timer': pomodoroContent,
  'word-counter': wordCounterContent,
  'random-name-picker': randomNameContent,
  'random-group-generator': randomGroupContent,
  'countdown-timer': countdownTimerContent,
  'date-difference': dateDifferenceContent,
  'age-calculator': ageCalculatorContent,
  'case-converter': caseConverterContent,
  'qr-code-generator': qrCodeContent,
  'mbti-test': mbtiContent,
  'love-type-test': loveTypeContent,
  'password-generator': passwordGeneratorContent,
  'color-generator': colorGeneratorContent,
  'dice-roller': diceRollerContent,
  stopwatch: stopwatchContent,
  base64: base64Content,
  'url-encoder': urlEncoderContent,
  'json-formatter': jsonFormatterContent,
  'random-student-picker': randomStudentContent,
  'grade-average': gradeAverageContent,
  'gpa-calculator': gpaCalculatorContent,
  'random-wheel': randomWheelContent,
  'what-to-eat': whatToEatContent,
  'this-or-that': thisOrThatContent,
  'compound-interest': compoundInterestContent,
  'savings-goal': savingsGoalContent,
  'mortgage-payment': mortgagePaymentContent,
  'character-counter': characterCounterContent,
  'image-compressor': imageCompressorContent,
  'image-resizer': imageResizerContent,
  'png-to-jpg': pngToJpgContent,
  'jpg-to-png': jpgToPngContent,
} as const;

export type ToolContentSlug = keyof typeof contentBySlug;
export type ToolContent = (typeof contentBySlug)[ToolContentSlug][Locale];

export function getToolContent(slug: string, lang: Locale): ToolContent | undefined {
  return contentBySlug[slug as ToolContentSlug]?.[lang];
}
