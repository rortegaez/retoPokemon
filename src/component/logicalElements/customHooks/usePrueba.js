export const usePrueba = () => {
  const texto = (text) => {
    console.log(text);
  };

  return {
    texto,
  };
};

/* const utilities = () => {
	const txt = "hola custom hooks";
	//checkIndex(ident);
	texto({ txt });
}; 
	Tal como muestro aquí es como lo he tenido que poner en el componente donde se ubica este custom Hooks
	
*/
