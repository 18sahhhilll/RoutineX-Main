// src/integrations/openrouter/client.js


/**
 * OpenRouter API client for generating AI responses
 */
export const openRouter = {
  /**
   * Send a request to the OpenRouter API
   * @param {Object} options - Request options
   * @param {string} options.model - The model to use (e.g., "anthropic/claude-3-sonnet")
   * @param {Array} options.messages - The messages to send to the API
   * @param {Object} [options.parameters] - Additional parameters for the request
   * @returns {Promise<Object>} - The API response
   */
  async generateCompletion({
    model = "anthropic/claude-3-opus",
    messages,
    parameters = {}
  }) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": env.NEXT_PUBLIC_APP_URL, // Optional but recommended
          "X-Title": "Fitness Routine Builder" // Optional
        },
        body: JSON.stringify({
          model,
          messages,
          ...parameters
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "OpenRouter API request failed");
      }

      return await response.json();
    } catch (error) {
      console.error("OpenRouter API error:", error);
      throw error;
    }
  }
};