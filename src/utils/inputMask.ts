export const maskMoney = (event: React.FormEvent<HTMLInputElement>) => {
  const { value } = event.currentTarget;
  return  'R$ '+value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export type MaskTypes =  'money' ;

type Masks = Record<
  MaskTypes,
  (event: React.FormEvent<HTMLInputElement>) => string
>;


const masks: Masks = {
    money: maskMoney,
  };
  
  export default masks;