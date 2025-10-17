import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an AI assistant for Divdesh Wealth, a financial advisory company specializing in wealth management, investing, and insurance.

Your role:
- Answer questions about investing, wealth management, insurance, and financial planning
- Be professional, helpful, and educational
- Represent Divdesh Wealth positively
- Encourage users to book appointments for personalized advice
- Do not answer questions outside of finance, investing, insurance, or wealth management
- If asked about unrelated topics, politely redirect to financial topics

RESPONSE FORMATTING:
- Use bullet points for lists and key points
- Structure answers clearly with headings when appropriate
- Keep responses concise but comprehensive
- Use numbered lists for steps or sequences
- Highlight important terms or concepts

Company information:
- Divdesh Wealth provides expert guidance on investing and insurance
- We help individuals secure their financial future
- Our advisors are experienced in mutual funds, stocks, term life insurance, health insurance, etc.
- We prioritize education and transparency

Always end responses that require personalized advice by suggesting they book an appointment with our experts.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is available
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // Fallback to simulated responses if no API key
      return NextResponse.json({
        response: getFallbackResponse(message)
      });
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response right now.';

    return NextResponse.json({ response: botResponse });

  } catch (error) {
    console.error('Chat API error:', error);

    // Fallback response
    return NextResponse.json({
      response: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly at gulti.div@gmail.com."
    });
  }
}

// Fallback responses when OpenAI API is not available
function getFallbackResponse(userMessage: string): string {
  const responses = [
    "That's a great question about investing! At Divdesh Wealth, we recommend diversifying your portfolio across different asset classes to manage risk. Would you like me to explain more about portfolio diversification?",
    "Regarding insurance, it's important to assess your coverage needs based on your family size, income, and lifestyle. Term life insurance is often a cost-effective way to provide financial protection. I recommend speaking with one of our advisors for personalized recommendations.",
    "Compound interest is one of the most powerful concepts in investing. When you reinvest your earnings, you earn interest on both your original investment and the accumulated interest. This is why starting early and staying invested can significantly grow your wealth over time.",
    "For wealth management, we help clients create comprehensive financial plans that include goal setting, risk assessment, tax planning, and regular portfolio reviews. Our approach focuses on long-term financial security and peace of mind.",
    "Health insurance is crucial for protecting against medical expenses. We can help you compare different health insurance plans and find coverage that fits your budget and healthcare needs. Our experts stay updated on the latest policy changes and coverage options."
  ];

  // Simple keyword matching for demo purposes
  const lowerMessage = userMessage.toLowerCase();
  if (lowerMessage.includes('invest') || lowerMessage.includes('stock') || lowerMessage.includes('mutual fund')) {
    return responses[0];
  } else if (lowerMessage.includes('insurance') || lowerMessage.includes('life') || lowerMessage.includes('health')) {
    return responses[1];
  } else if (lowerMessage.includes('compound') || lowerMessage.includes('interest')) {
    return responses[2];
  } else if (lowerMessage.includes('wealth') || lowerMessage.includes('financial plan')) {
    return responses[3];
  } else if (lowerMessage.includes('health insurance') || lowerMessage.includes('medical')) {
    return responses[4];
  } else {
    return "I'd be happy to help you with questions about investing, wealth management, or insurance. For personalized financial advice, I recommend booking an appointment with our experts at Divdesh Wealth. You can email us at gulti.div@gmail.com to schedule a consultation.";
  }
}
