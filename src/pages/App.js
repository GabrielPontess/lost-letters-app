import './App.css';

import leviosaGif from '../assets/imgs/its-leviosa.gif';
import historyBook from '../assets/imgs/history-book.png';
import githubLogo from '../assets/imgs/github-logo.png';
import Tipography from '../components/font'; 

function App() {
  return (
    <div className="App">
        <div className='Container'>
          <div className='Container-Header'>
            <Tipography weight='680' size='3.8vh'>
              VIVA A MAGIA DAS
              <Tipography weight='800' size='3.8vh'> CARTAS PERDIDAS!</Tipography>
            </Tipography>
            <Tipography weight='900' size='3.5vh'>THE LOST LETTERS</Tipography>
            <img className='img-book' src={historyBook} height={80} width={80} />

            <Tipography weight='light' size='3vh'>Uma Dose de Magia na Sua Caixa de Entrada!</Tipography>
          </div>
          <img className='leviosa-gif' src={leviosaGif}/>

          <Tipography weight='normal' size='2.3vh'>
          Deixe seu e-mail abaixo e receba as Cartas Perdidas diretamente na sua caixa de entrada.
          <br/>
          Prepare-se para explorar segredos, curiosidades e encantos do universo mágico!
          </Tipography>       

          <div className='input-group'>
            <input placeholder='Email'></input><button>LEVIOSAR!</button>
          </div>

          <Tipography weight='normal' size='2.4vh' fontStyle='italic'>
            <b>The Lost Letters</b> é uma <span className='underline'>newsletter</span> independente criada de um fã para fãs do universo mágico.  
            Não temos qualquer afiliação oficial com J.K. Rowling, Warner Bros., ou quaisquer       
            outras entidades detentoras dos direitos autorais e de marca registrada de Harry Potter.
            Todo o conteúdo é feito com respeito e admiração pela obra original, sem intenção de infringir direitos.
          </Tipography>     
          <a href='https://github.com/GabrielPontess/lost-letters-app'>
            <img src={githubLogo} height={40} />
          </a>
          <Tipography weight='normal' size='2.5vh' >
            Enfeitiçado pelo bruxo: <br/>       
            Gabriel Pontes<br/> 
          </Tipography> 
        </div>
    </div>
  );
}

export default App;
