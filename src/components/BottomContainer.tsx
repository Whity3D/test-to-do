import { StyledBottomContainer, StyledButton, StyledText } from './styles';
import { FilterState } from '../types';
import { FC } from 'react';

interface BottomContainerProps {
  activeTodosCount: number;
  filterState: FilterState;
  onFilter: (filterState: FilterState) => void;
  onClear: () => void;
}

export const BottomContainer: FC<BottomContainerProps> = ({
  onFilter,
  onClear,
  filterState,
  activeTodosCount,
}) => {
  const handleAll = () => {
    onFilter(FilterState.All);
  };
  const handleActive = () => {
    onFilter(FilterState.Active);
  };
  const handleCompleted = () => {
    onFilter(FilterState.Completed);
  };

  return (
    <StyledBottomContainer>
      <StyledText>{`${activeTodosCount} items left`}</StyledText>
      <div>
        <StyledButton active={filterState === FilterState.All} onClick={handleAll}>
          All
        </StyledButton>
        <StyledButton active={filterState === FilterState.Active} onClick={handleActive}>
          Active
        </StyledButton>
        <StyledButton active={filterState === FilterState.Completed} onClick={handleCompleted}>
          Completed
        </StyledButton>
      </div>
      <StyledButton onClick={onClear}>Clear completed</StyledButton>
    </StyledBottomContainer>
  );
};
