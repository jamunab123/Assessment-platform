// src/features/assessment/components/QuestionEditor.tsx
import React, { useState } from 'react';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import type { Question } from '../../../types/assessment';

interface QuestionEditorProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
  onDelete: () => void;
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({
  question,
  onUpdate,
  onDelete,
}) => {
  const [localQuestion, setLocalQuestion] = useState<Question>(question);

  const handleChange = (field: keyof Question, value: any) => {
    const updated = { ...localQuestion, [field]: value };
    setLocalQuestion(updated);
    onUpdate(updated);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...(localQuestion.options || [])];
    newOptions[index] = value;
    handleChange('options', newOptions);
  };

  const addOption = () => {
    const newOptions = [...(localQuestion.options || []), ''];
    handleChange('options', newOptions);
  };

  const removeOption = (index: number) => {
    const newOptions = (localQuestion.options || []).filter((_, i) => i !== index);
    handleChange('options', newOptions);
  };

  return (
    <div className="border rounded-lg p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
          <h3 className="font-medium">Question</h3>
        </div>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question Type
          </label>
          <select
            value={localQuestion.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="multiple-choice">Multiple Choice</option>
            <option value="coding">Coding</option>
            <option value="short-answer">Short Answer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question Text
          </label>
          <textarea
            value={localQuestion.text}
            onChange={(e) => handleChange('text', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows={3}
          />
        </div>

        {localQuestion.type === 'multiple-choice' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Options
            </label>
            <div className="space-y-2">
              {(localQuestion.options || []).map((option, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={`Option ${index + 1}`}
                  />
                  <button
                    onClick={() => removeOption(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <button
                onClick={addOption}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
              >
                <Plus className="h-4 w-4" />
                Add Option
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Points
            </label>
            <input
              type="number"
              value={localQuestion.points}
              onChange={(e) => handleChange('points', parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Limit (seconds)
            </label>
            <input
              type="number"
              value={localQuestion.timeLimit || 0}
              onChange={(e) => handleChange('timeLimit', parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEditor;