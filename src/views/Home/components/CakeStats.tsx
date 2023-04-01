import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Token Name')}</Text>
          Sea Swap Global
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Token Symbol')}</Text>
          SSG
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'Total Supply')}</Text>
          1,000,000,000
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
