from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import openai
import os

# Load OpenAI key
openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatGPTView(APIView):
    def post(self, request):
        user_message = request.data.get("message")

        if not user_message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Call OpenAI API (GPT-4 or GPT-3.5 depending on your key)
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": user_message}]
            )
            bot_reply = response['choices'][0]['message']['content']
            return Response({"reply": bot_reply})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
