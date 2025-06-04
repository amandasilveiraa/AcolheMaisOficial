import styled from 'styled-components';

// Container geral da página
export const PageWrapper = styled.div`
  padding: 40px;
`;

// Título da seção
export const Title = styled.h1`
  font-size: 24px;
  color: black;
  margin-bottom: 30px;
`;

// Contêiner dos cards
export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 5vh;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #444;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  background-color: #006233;
  border: none;
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
`;