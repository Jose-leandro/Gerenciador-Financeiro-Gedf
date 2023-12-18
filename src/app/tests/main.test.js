import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import Main from '../components/main/main';

test('deve alterar o estilo dos elementos ao ser clicado', async () => {
  const { getByTestId} = render(<Main />);

  // Adiciona um console.log para verificar a estrutura do DOM
  // console.log(container.innerHTML);

  // Simula o clique no botão
  fireEvent.click(getByTestId('botao'));
  
  await waitFor(() => {

    expect(getByTestId('categoriaCasa').style.display).toBe('flex');
    expect(getByTestId('categoriaSaude').style.display).toBe('flex');
  });
});
