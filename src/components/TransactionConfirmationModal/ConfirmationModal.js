import styled, { keyframes } from 'styled-components/macro'
import { Text, Box } from 'rebass'
import { Trans } from '@lingui/macro'
import Circle from "../assets/blue-loader.svg"

const Row = styled(Box)`
    width: ${({ width }) => width ?? '100%'};
    display: flex;
    padding: 0;
    align-items: ${({ align }) => align ?? 'center'};
    justify-content: ${({ justify }) => justify ?? 'flex-start'};
    padding: ${({ padding }) => padding};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
  `

  const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
`


const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`
export const AutoColumn = styled.div`
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
    justify-items: ${({ justify }) => justify && justify};
  `

const Section = styled(AutoColumn)`
  padding: ${({ inline }) => (inline ? '0' : '0')};
`

const BottomSection = styled(Section)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const ConfirmedIcon = styled(ColumnCenter)`
  padding: ${({ inline }) => (inline ? '20px 0' : '32px 0;')};
`

const StyledLogo = styled.img`
  height: 16px;
  width: 16px;
  margin-left: 6px;
`




  
  export const RowBetween = styled(Row)`
    justify-content: space-between;
  `
  
//   export const CloseIcon = styled(X)`
//   cursor: pointer;
// `

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.img`

animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`
export const CustomLightSpinner = styled(Spinner)`
  
 
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

  
function ConfirmationPendingContent({
    inline,
  }) {

    return (
      <Wrapper>
        <AutoColumn gap="md">
          {!inline && (
            <RowBetween>
              <div />
              {/* <CloseIcon/> */}
            </RowBetween>
          )}
          <ConfirmedIcon inline={inline}>
            <CustomLightSpinner src={Circle} alt="loader" size={inline ? '40px' : '90px'} />
          </ConfirmedIcon>
          <AutoColumn gap="12px" justify={'center'}>
            <Text fontWeight={500} fontSize={20} textAlign="center">
              {/* <Trans>Waiting For Confirmation</Trans> */}
            </Text>
            <Text fontWeight={400} fontSize={16} textAlign="center">
              hello
            </Text>
            <Text fontWeight={500} fontSize={14} color="#565A69" textAlign="center" marginBottom="12px">
              {/* <Trans>Confirm this transaction in your wallet</Trans> */}
            </Text>
          </AutoColumn>
        </AutoColumn>
      </Wrapper>
    )
  }
export default ConfirmationPendingContent