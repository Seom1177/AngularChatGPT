import { Component } from '@angular/core';
import { ChatGPTDtoResponse, ChatGptDtoRequest } from 'src/app/layout/model/ChatGptDto';
import { MessageService } from 'primeng/api';
import { ChatGptService } from 'src/app/layout/service/chat-gpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [MessageService]
})
export class ChatComponent {

  public conversation: ChatGptDtoRequest[] = [];
  value: string = '';
  loadMessage: boolean = false;

  constructor(private chatGptService: ChatGptService, private messageService: MessageService) { }

  ngOnInit() {
      this.conversation.push({
        role: "system",
        content: "Hola, soy Exys, un asistente virtual. He notado que estás pasando por un momento difícil, y quiero que sepas que estoy aquí para escucharte y brindarte apoyo."
      },
      {
        role: "system",
        content: "Esta conversación es privada y segura. Puedes sentirte libre de compartir tus pensamientos y sentimientos conmigo"
      })
  }

  sendMessage() {
    if (this.value !== '' && this.value.trim() !== ''){
      this.loadMessage = true;
      this.conversation.push({role: "user",content: this.value});

      this.chatGptService.generateResponse(this.conversation).subscribe(
        {
          next: (response: ChatGPTDtoResponse) => {
            this.conversation.push({role: "assistant",content: response.choices[0].message.content});
          },
          error: (e: ChatGPTDtoResponse) => {
            this.conversation.push({role: "assistant",content: e.error.error.message});
          }
      }).add(()=>{
        new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3").play();
        this.value = '';
        this.loadMessage = false;
        setTimeout(() => {
          window.scrollTo(0,document.body.scrollHeight);
        }, 250);
      });
    } else {
      console.log(this.value);
      this.messageService.add({severity:'warn', summary: 'No has escrito nada', detail: 'La cajita de texto se ve vacia :(' });
    }
  }
}
