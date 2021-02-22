import ChatBot from 'react-simple-chatbot';
 
export default function ChatBox(){
    const steps = [
        {
          id: '0',
          message: 'Welcome its your boii chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: '\'Sup my man',
          end: true,
        },
      ];
       
      return(
        <div>
          <ChatBot steps={steps} />
        </div>
      );
}