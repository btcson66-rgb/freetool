import AgeCalculator from '../components/tools/AgeCalculator.astro';
import Base64Tool from '../components/tools/Base64Tool.astro';
import CaseConverter from '../components/tools/CaseConverter.astro';
import CharacterCounter from '../components/tools/CharacterCounter.astro';
import ColorGenerator from '../components/tools/ColorGenerator.astro';
import CompoundInterest from '../components/tools/CompoundInterest.astro';
import CountdownTimer from '../components/tools/CountdownTimer.astro';
import DateDifference from '../components/tools/DateDifference.astro';
import DiceRoller from '../components/tools/DiceRoller.astro';
import GpaCalculator from '../components/tools/GpaCalculator.astro';
import GradeAverage from '../components/tools/GradeAverage.astro';
import ImageCompressor from '../components/tools/ImageCompressor.astro';
import ImageResizer from '../components/tools/ImageResizer.astro';
import JpgToPng from '../components/tools/JpgToPng.astro';
import JsonFormatter from '../components/tools/JsonFormatter.astro';
import LoveTypeTest from '../components/tools/LoveTypeTest.astro';
import MbtiTest from '../components/tools/MbtiTest.astro';
import MortgagePayment from '../components/tools/MortgagePayment.astro';
import PasswordGenerator from '../components/tools/PasswordGenerator.astro';
import PomodoroTimer from '../components/tools/PomodoroTimer.astro';
import PngToJpg from '../components/tools/PngToJpg.astro';
import QrCodeGenerator from '../components/tools/QrCodeGenerator.astro';
import RandomGroupGenerator from '../components/tools/RandomGroupGenerator.astro';
import RandomNamePicker from '../components/tools/RandomNamePicker.astro';
import RandomNumberPicker from '../components/tools/RandomNumberPicker.astro';
import RandomStudentPicker from '../components/tools/RandomStudentPicker.astro';
import RandomWheel from '../components/tools/RandomWheel.astro';
import SavingsGoal from '../components/tools/SavingsGoal.astro';
import Stopwatch from '../components/tools/Stopwatch.astro';
import ThisOrThat from '../components/tools/ThisOrThat.astro';
import UrlEncoder from '../components/tools/UrlEncoder.astro';
import WhatToEat from '../components/tools/WhatToEat.astro';
import WordCounter from '../components/tools/WordCounter.astro';

export const widgetBySlug = {
  'random-number-picker': RandomNumberPicker,
  'pomodoro-timer': PomodoroTimer,
  'word-counter': WordCounter,
  'random-name-picker': RandomNamePicker,
  'random-group-generator': RandomGroupGenerator,
  'countdown-timer': CountdownTimer,
  'date-difference': DateDifference,
  'age-calculator': AgeCalculator,
  'case-converter': CaseConverter,
  'qr-code-generator': QrCodeGenerator,
  'mbti-test': MbtiTest,
  'love-type-test': LoveTypeTest,
  'password-generator': PasswordGenerator,
  'color-generator': ColorGenerator,
  'dice-roller': DiceRoller,
  stopwatch: Stopwatch,
  base64: Base64Tool,
  'url-encoder': UrlEncoder,
  'json-formatter': JsonFormatter,
  'random-student-picker': RandomStudentPicker,
  'grade-average': GradeAverage,
  'gpa-calculator': GpaCalculator,
  'random-wheel': RandomWheel,
  'what-to-eat': WhatToEat,
  'this-or-that': ThisOrThat,
  'compound-interest': CompoundInterest,
  'savings-goal': SavingsGoal,
  'mortgage-payment': MortgagePayment,
  'character-counter': CharacterCounter,
  'image-compressor': ImageCompressor,
  'image-resizer': ImageResizer,
  'png-to-jpg': PngToJpg,
  'jpg-to-png': JpgToPng,
} as const;

export type ToolWidgetSlug = keyof typeof widgetBySlug;

export function getToolWidget(slug: string) {
  return widgetBySlug[slug as ToolWidgetSlug];
}
