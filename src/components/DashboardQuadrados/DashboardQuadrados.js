import { Card, Content, Label, Number, Title } from "./style";

const DashboardQuadrados = ({ title, number, label }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>
        <Number>{number}</Number>
        <Label>{label}</Label>
      </Content>
    </Card>
  );
};

export default DashboardQuadrados;