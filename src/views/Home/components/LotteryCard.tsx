import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, useModal } from '@pancakeswap-libs/uikit'
import { Timeline } from 'react-twitter-widgets'
import { useWeb3React } from '@web3-react/core'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import useTokenBalance from 'hooks/useTokenBalance'
import { useMultiClaimLottery } from 'hooks/useBuyLottery'
import { useTotalClaim } from 'hooks/useTickets'
import { useLotteryAllowance } from 'hooks/useAllowance'
import { useApproval } from 'hooks/useApproval'
import PurchaseWarningModal from 'views/Lottery/components/TicketCard/PurchaseWarningModal'
import BuyTicketModal from 'views/Lottery/components/TicketCard/BuyTicketModal'

const StyledLotteryCard = styled(Card)`
  min-height: 376px;
`

const LotteryCard = () => {
  const { account } = useWeb3React()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const [requestClaim, setRequestedClaim] = useState(false)
  const TranslateString = useI18n()
  const allowance = useLotteryAllowance()
  const [onPresentApprove] = useModal(<PurchaseWarningModal />)
  const { claimAmount, setLastUpdated } = useTotalClaim()
  const { onMultiClaim } = useMultiClaimLottery()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const { handleApprove, requestedApproval } = useApproval(onPresentApprove)

  const handleClaim = useCallback(async () => {
    try {
      setRequestedClaim(true)
      const txHash = await onMultiClaim()
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedClaim(false)
        setLastUpdated()
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiClaim, setRequestedClaim, setLastUpdated])

  const renderLotteryTicketButtonBuyOrApprove = () => {
    if (!allowance.toNumber()) {
      return (
        <Button width="100%" disabled={requestedApproval} onClick={handleApprove}>
          {TranslateString(494, 'Approve CAKE')}
        </Button>
      )
    }
    return (
      <Button id="dashboard-buy-tickets" variant="secondary" onClick={onPresentBuy} disabled={lotteryHasDrawn}>
        {TranslateString(558, 'Buy Tickets')}
      </Button>
    )
  }

  const [onPresentBuy] = useModal(<BuyTicketModal max={cakeBalance} />)

  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(550, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            url: "https://twitter.com/seaswapco?ref_src=twsrc%5Etfw"
          }}
          options={{
            chrome: "noheader, nofooter", height: '400'
          }}
        /> 
      </CardBody>
    </StyledLotteryCard>
  )
}

export default LotteryCard
