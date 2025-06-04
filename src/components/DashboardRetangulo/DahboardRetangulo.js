import { Content, Number } from "./style";
import { Label } from "./style";
import { Title } from "./style";
import { Card } from "./style";

const DashboardRetangulo = ({ title, number, label }) => {
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

export default DashboardRetangulo;
