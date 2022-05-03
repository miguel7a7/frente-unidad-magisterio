export const scrollArriba = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Funcion paa enconrar un Item Curso Gratis
export const getItemDetalleID = (id, lista) => {
  return lista.find((item) => item.id === id);
};
