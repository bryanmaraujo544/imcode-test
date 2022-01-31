import { Container } from './styles';

const functionalities = [
  {
    number: '01',
    title: 'Cadastrar o colaborador.', 
    text: 'Esta função tem como objetivo salvar dados do colaborador, como: nome completo, seto e função. E há um termo em que o colaboraador deverá aceitar, esse termo destaca as obrigações do empregador e do empregado',
  },
  {
    number: '02',
    title: 'Adicionar EPI.',  
    text: 'Aqui, você seguirá todas as informações obrigatórias para registraar o EPI do seu colaborador por exemplo: Descrição do equipamento, quantidade, certificado de aprovação, data em que o EPI foi solicitado, fabricante e motivos para entrega e recebimento.',
  },
  {
    number: '03',
    title: 'Consultar fichas.',  
    text: 'Destaque as fichas de cada colaborador atrav[es de uma busca simples pelo nome completo ou CPF',
  },
  {
    number: '04',
    title: 'Registrar equipamento.',  
    text: 'E por fim o tão amado registro de equipamento. Aqui você vai descrever qual o nome do equipamento, certificado de arpvação fabricante e a validade do equipamento.', 
  },
]

export const Functionalities = () => {
  return (
    <Container>
      <div className="left-container">
        <h3 className="title">
          Os 4 <br />mestres.
        </h3>
        <p className="subtitle">As funcionalidades mais simples e fáceis de usar.</p>
      </div>
      <div className="right-container">
        {functionalities.map(({ number, title, text }) => (
          <div className="functionality">
            <header className="title">
              <span>{number}</span> {title}
            </header>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}