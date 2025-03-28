import styled from '@emotion/styled';

export const AppContainer = styled.div({
  padding: 20,
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 600,
  margin: 'auto',
});

export const StyledForm = styled.form({
  width: '100%',
  display: 'flex',
  gap: '10px',
  borderBottom: '1px solid #f5f5f5',
});

export const StyledInput = styled.input({
  width: '100%',
  border: 'none',
  height: 60,
  padding: '8px 16px',
});

export const TodosList = styled.ul({
  width: '100%',
  padding: 0,
  listStyle: 'none',
  margin: 0,
});

export const TodoItem = styled.li({
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #f5f5f5',
  display: 'flex',
  alignItems: 'center',
  height: 60,
  padding: '8px 16px',
});

export const StyledBottomContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  width: '100%',
  padding: '8px 16px',
  boxSizing: 'border-box',
});

export const StyledText = styled.p({
  fontFamily: 'Roboto Condensed, sans-serif',
  fontSize: 14,
});

export const Header = styled(StyledText)({
  fontSize: 36,
});

export const StyledButton = styled.button<{ active?: boolean }>(({ active }) => ({
  border: active ? '1px solid #f5f5f5' : 'none',
  backgroundColor: 'transparent',
}));
