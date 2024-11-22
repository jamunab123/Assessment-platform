// src/types/assessment.ts
export interface Question {
  id: string;
  type: 'multiple-choice' | 'coding' | 'short-answer';
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  timeLimit?: number; // in seconds
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  instructions: string;
  duration: number; // in minutes
  passingScore: number;
  questions: Question[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  category?: string;
  tags?: string[];
}

export interface AssessmentSettings {
  allowCalculator: boolean;
  randomizeQuestions: boolean;
  showProgress: boolean;
  showTimer: boolean;
  allowReview: boolean;
  proctoring: {
    enabled: boolean;
    webcamRequired: boolean;
    screenShareRequired: boolean;
    audioRequired: boolean;
    allowMultipleScreens: boolean;
  };
}

export interface AssessmentCandidate {
    id: string;
    title: string;
    description: string;
    duration: number; // in minutes
    totalQuestions: number;
    startTime: string;
    status: 'upcoming' | 'completed' | 'in-progress';
    score?: number;
  }