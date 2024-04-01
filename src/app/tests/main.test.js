import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import Main from '../components/main/adicaoGastos';

describe('Testes de visibilidade de imagens na seção pagamento e categoria ', () => {
  
    let getByTestId;
  
    beforeEach(() => {
      ({ getByTestId } = render(<Main />));
    });

  test('Verifica se as categorias "casa" e "saude" fica visível ao clicar em "botaoExpandir', async () => {
   
    fireEvent.click(getByTestId('botaoExpandir'));
    
    await waitFor(() => {
      expect(getByTestId('categoriaCasa').style.display).toBe('flex');
      expect(getByTestId('categoriaSaude').style.display).toBe('flex');
    });
  });

  test('Verifica se a imagem "pagado_img-selecionado" fica visível ao clicar em "botaoPagado"', async () => {

    fireEvent.click(getByTestId('botaoPagado'));

    await waitFor(() => {
      expect(getByTestId('pagado_img-selecionado').style.display).toBe('flex');
    });
  });

  test('Verifica se a imagem "nao_pagado_img-selecionado" fica visível ao clicar em "botaoNaoPagado"', async () => {

    fireEvent.click(getByTestId('botaoNaoPagado'));

    await waitFor(() => {
      expect(getByTestId('nao_pagado_img-selecionado').style.display).toBe('flex');
    });
  });
});

