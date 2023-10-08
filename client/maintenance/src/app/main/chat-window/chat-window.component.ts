import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, AfterViewInit {

  @ViewChild('inputTxt') inputTxt!: ElementRef;
  @ViewChild('messageSec') messageSec!: ElementRef;
  
  @Output() toggleWindow = new EventEmitter<boolean>();
  messages:any = []
  showProgress:boolean = false
  constructor(private openaiService: OpenaiService) {
    this.openaiService.botRespone.subscribe((res:any) => {
      this.showProgress = false;
      this.messages.push({type: 'botMessage', text: res})
      setTimeout(() =>  this.messageSec.nativeElement.scrollTop = this.messageSec.nativeElement.scrollHeight, 100)
    })
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  onSearch(event: any) {
    if (event.which == 13) {
      let question = event.target.value
      this.messages.push({type: 'userMessage', text: question})
      this.sendQuestion(question)
      this.showProgress  = true
    }
  }

  sendQuestion(question: string) {
    this.inputTxt.nativeElement.value = ""
    this.openaiService.askQuestion(question)
    // .then((res:any) =>
    // {
    //   console.log(res)
    //   if(res?.choices.length)
    //   {
    //     console.log(res?.choices[0].message.content)
    //     this.messages.push({type: 'botMessage', text: res?.choices[0].message.content})
    //   }
     
    // })
   
  }

  closeChatWindow() {
    this.toggleWindow.emit(false)
  }

}
