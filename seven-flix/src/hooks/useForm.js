import {useState} from 'react';


function useForm(valoresInicial) {
    const [values, setValues] = useState(valoresInicial);
  
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
  
    function handleChenge(infosDoEvento) {
      const { name, value } = infosDoEvento.target;
      setValue(
        name, value    
        );
        
    }
    function clearForm() {
        setValues(valoresInicial)
      }
     return {
      values,
        handleChenge,
        clearForm
      }  
  }
  
export default useForm;