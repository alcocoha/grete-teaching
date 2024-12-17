import { useState } from 'react';
export const useRequest = () => {
  const [valorDelHook, setValorDelHook] = useState(0);

  const foo = (valor) => {
    setValorDelHook(valorDelHook + valor);
  };

  const request = async (url, options = {}) => {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  };

  const getRequest = async (url) => {
    return await request(url, {
      method: 'GET',
    });
  };

  const postRequest = async (url, data) => {
    return await request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const putRequest = async (url, data) => {
    return await request(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const deleteRequest = async (url) => {
    return await request(url, {
      method: 'DELETE',
    });
  };

  const returnData = {
    request,
    valorDelHook,
    foo,
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
  };

  console.log('[debugger] returnData', returnData);

  return returnData;
};
