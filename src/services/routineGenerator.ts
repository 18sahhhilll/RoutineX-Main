// src/services/routineGenerator.js
import { openRouter } from '@/integrations/openrouter/client';
// src/services/routineGenerator.ts
import { Routine } from '@/types/routine'; // ✅ named import


/**
 * Generates a fitness routine using the OpenRouter API
 * @param {Object} answers - User answers to routine questions
 * @returns {Promise<Routine>} - Generated routine
 */
export async function generateRoutine(answers) {
  try {
    // Construct a prompt for the AI model
    const messages = [
      {
        role: "system",
        content: `You are a professional fitness trainer and exercise physiologist specializing in creating personalized fitness routines. 
Your task is to create detailed fitness routines based on user information and preferences.
The response should be a valid JSON object. The structure should match this type:

type DaySchedule = {
  day: string;
  focus?: string;
  activities: Array<{
    name: string;
    duration: string;
    details: string;
    targetMuscles?: string[];
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    equipmentNeeded?: string[];
    caloriesBurn?: number;
  }>;
};

type Routine = {
  routineName: string;
  description: string;
  schedule: DaySchedule[];
  tips: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedCalories: number;
  totalTime: string;
  tags?: string[];
};

Be creative and helpful, but make sure your response is a valid JSON object.
Include specific details for each exercise and activity, with realistic durations and calorie estimates.
Provide useful tips that are specific to the user's goals and circumstances.
Schedule should include appropriate rest days, and should match their availability.`
      },
      {
        role: "user",
        content: `Create a personalized fitness routine based on the following preferences:

Primary fitness goal: ${answers.goal}
Current fitness level: ${answers.level}
Time available per session: ${answers.time}
Days per week available: ${answers.days}
Preferred activities: ${Array.isArray(answers.preferences) ? answers.preferences.join(', ') : answers.preferences}
Available equipment: ${Array.isArray(answers.equipment) ? answers.equipment.join(', ') : answers.equipment}
Physical limitations: ${Array.isArray(answers.limitations) ? answers.limitations.join(', ') : answers.limitations || 'None'}

Please format your response as a valid JSON object matching the requested type structure.`
      }
    ];

    // Call the OpenRouter API
    const response = await openRouter.generateCompletion({
      model: "anthropic/claude-3-opus",
      messages,
      parameters: {
        temperature: 0.7,
        max_tokens: 4000,
        top_p: 0.9,
      }
    });

    // Extract and parse the response
    const aiResponse = response.choices[0].message.content;
    
    // Find JSON in the response - the AI might wrap it in markdown code blocks
    const jsonMatch = aiResponse.match(/```json\n([\s\S]*?)\n```/) || 
                      aiResponse.match(/```\n([\s\S]*?)\n```/) ||
                      aiResponse.match(/{[\s\S]*}/);
    
    const jsonString = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : aiResponse;
    
    // Parse the JSON into a Routine object
    const routine = JSON.parse(jsonString);
    
    // Ensure we have proper structure
    if (!routine.schedule || !Array.isArray(routine.schedule)) {
      throw new Error("Invalid routine format returned from AI");
    }
    
    return routine;
  } catch (error) {
    console.error("Error generating routine:", error);
    throw new Error("Failed to generate fitness routine. Please try again.");
  }
}