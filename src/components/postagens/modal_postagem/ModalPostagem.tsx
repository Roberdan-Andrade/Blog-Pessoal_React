import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

import Popup from 'reactjs-popup';
import FormularioPostagem from '../formulario_postagem/FormularioPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;