import DashboardQuadrados from '../../components/DashboardQuadrados/DashboardQuadrados';
import DashboardRetangulo from '../../components/DashboardRetangulo/DahboardRetangulo';
import { Header } from '../../components/Header/Header';
import { Button, ButtonGroup, PageWrapper, SectionHeader, SectionTitle } from './style';
import { CardsContainer } from './style';
import { Title } from './style';

function Dashboard() {
  return (
    <>
    <Header />
    <PageWrapper>
        <Title>DASHBOARD</Title>

        <CardsContainer>
            <DashboardRetangulo title="INQUILINOS" number={2400} label="inquilinos" />
            <DashboardRetangulo title="IMÓVEIS" number={150} label="ativos" />
            <DashboardRetangulo title="CONTRATOS" number={1200} label="vigentes" />
        </CardsContainer>

        <SectionHeader>
        <SectionTitle>Gerenciamento institucional</SectionTitle>

        <ButtonGroup>
          <Button>Pesquisar</Button>
          <Button>Filtrar</Button>
        </ButtonGroup>
      </SectionHeader>

    <CardsContainer>
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Contribuintes" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
      <DashboardQuadrados title="Funcionários" number={2400} label="inquilinos"  />
    </CardsContainer>

    </PageWrapper>
    </>
  );
}

export default Dashboard;