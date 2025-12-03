import { NextRequest, NextResponse } from 'next/server';

const TIMEWEB_API_URL = 'https://agent.timeweb.cloud/api/v1/cloud-ai/agents/e7ce10c6-3f8b-4d2a-bd9a-6ad819e6916e/v1/chat/completions';
const TIMEWEB_API_KEY = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjFrYnhacFJNQGJSI0tSbE1xS1lqIn0.eyJ1c2VyIjoieWs4MjM5ODkiLCJ0eXBlIjoiYXBpX2tleSIsImFwaV9rZXlfaWQiOiI1YjdmYjM5MC0zNzU1LTQzYzItYjU5OS1iZmQ1ODMzYWFlNGUiLCJpYXQiOjE3NjQ3NzEzNDF9.GixQ9tXqVIzrEKkBeuPRugnhKHd5lDKvN1i5JJxDALFJS2gmUL5LSSVq05lLisjcgxzr0ukV07_YySOBZ-28qIP1l2--m8elSCWN-6CnKgHhYgngxPP9Y9n5AcsECiGHYCIxSfUp7a7klY4Rl3Chwbv6RS010F1wItQRIX-cl_UmnOqhJum225p56tmKrMMT3vdX_rkm3SMzFCv5thJg7c7tfPJnQw52a000LCpd84KKupW4XussGWu7lMB6VkME2TOOyZfoOdl35sTLRSxUHM6-7t4haNBEKdv_vKBAwd0KJOIozXJ8boDAHUw4rkPp-SMkH2ElZk0x4ldRiamWlAEnG619uvacJJ3NaiA7QqOfcRjFOzbrXSvQtiJwpkDewaOfzxjHS1R0AmkKrE_MY5_8qSYAYJWWoTz2feWk0lYzjldIR8QH68a5jjBOe-yapFSUxU34Xk1OgJhdkwh1ijLiuHEXWMEYfowZ6yCqO9fO1Wmw5UMdDZG-z0SmqBNR';

const SYSTEM_PROMPT = `Ты — AI-консультант компании Swiss Tech Solutions. Ты помогаешь клиентам узнать об услугах компании и отвечаешь на вопросы.

Основные услуги компании:
- Telegram боты и Mini Apps
- Веб-разработка (Next.js, React)
- Мобильные приложения
- AI-интеграции
- Автоматизация бизнес-процессов
- DevOps и облачные решения
- Консалтинг и Discovery Sprint

Правила:
1. Отвечай кратко и по делу (2-4 предложения)
2. Если не знаешь точную цену — предложи связаться для расчёта
3. Будь дружелюбным и профессиональным
4. Отвечай на том языке, на котором пишет клиент
5. При сложных вопросах предлагай оставить контакты для связи с менеджером

Контакты для связи: форма на странице /contact`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Фильтруем только user сообщения для истории
    const userMessages = messages
      .filter((m: { role: string }) => m.role === 'user')
      .map((m: { content: string }) => ({ role: 'user', content: m.content }));

    const response = await fetch(TIMEWEB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TIMEWEB_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...userMessages
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Timeweb API error:', response.status, errorText);
      return NextResponse.json(
        { message: `Ошибка API: ${response.status}. Проверьте настройки агента в Timeweb.` },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Timeweb response:', JSON.stringify(data));
    
    const assistantMessage = data.choices?.[0]?.message?.content 
      || data.message 
      || data.response 
      || data.content
      || 'Извините, не удалось получить ответ.';

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: 'Произошла ошибка соединения. Попробуйте позже.' },
      { status: 500 }
    );
  }
}
