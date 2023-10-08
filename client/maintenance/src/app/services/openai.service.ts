import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OpenaiService {

  openai = new OpenAI({
    apiKey: environment.openai_key, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true
  });

  botResponse$ = new Subject()
  botRespone = this.botResponse$.asObservable()

  constructor() {}

  async askQuestion(query: string)
  {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [
        { role: 'system', content: 'You are a very nice chatbot who gives suggestions to users related to their health, vehicel maintenance, home maintenance and other life style related. Keep your content limited to 100 words always' },
        { role: 'user', content: query.trim()}
      ],
      model: 'gpt-3.5-turbo',
    };

    // let chatCompletion: OpenAI.Chat.ChatCompletion = await
     this.openai.chat.completions.create(params).then((res:any) => {
      res?.choices?.length && this.botResponse$.next(res?.choices[0].message.content)
     });
 
  }
}
