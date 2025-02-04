import { Box, Typography } from '@mui/material'
// import { ReactComponent as Twitter } from 'assets/svg/twitter.svg'
import Image from 'components/Image'
import { timeStampToFormat } from 'utils/dao'
import Table from 'components/Table'
import { useCallback, useMemo } from 'react'
import { JobsApplyListProp } from 'hooks/useBackedDaoServer'
import { useReviewApply } from 'hooks/useBackedTaskServer'
import { ChainId } from 'constants/chain'
import { useActiveWeb3React } from 'hooks'
import useModal from 'hooks/useModal'
import MessageBox from 'components/Modal/TransactionModals/MessageBox'
import { JobsType } from './CardView'
// import Button from 'components/Button/Button'

export default function JobApplication({
  result,
  daoChainId,
  daoAddress,
  reFetch
}: {
  result: JobsApplyListProp[]
  daoChainId: ChainId
  daoAddress: string
  reFetch: () => void
}) {
  const { showModal } = useModal()
  const { account } = useActiveWeb3React()
  const reviewApply = useReviewApply()
  const opTypeCallback = useCallback(
    (op: string, applyId: number) => {
      if (!account) return
      if (op === 'agree') {
        reviewApply(daoChainId, daoAddress, true, applyId)
          .then(res => {
            showModal(<MessageBox type="success">Agree success</MessageBox>)
            reFetch()
            console.log(res)
          })
          .catch(e => console.log(e))
      } else {
        reviewApply(daoChainId, daoAddress, false, applyId)
          .then(res => {
            showModal(<MessageBox type="success">Reject success</MessageBox>)
            reFetch()
            console.log(res)
          })
          .catch(e => console.log(e))
      }
    },
    [account, daoAddress, daoChainId, reFetch, reviewApply, showModal]
  )

  console.log(result)

  const tableList = useMemo(() => {
    return result.map((item: JobsApplyListProp) => [
      <Box
        key={item.message}
        display={'flex'}
        gap={10}
        alignItems={'center'}
        fontWeight={500}
        sx={{
          width: '100%',
          '& img': {
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: '1px solid #D4DCE2'
          }
        }}
      >
        <Image src={item.avatar}></Image>
        {item.nickname}
      </Box>,
      <Typography key={item.message} fontWeight={400} fontSize={13} color={'#80829F'}>
        {JobsType[item.applyRole]}
      </Typography>,
      <Typography key={item.message} fontWeight={400} fontSize={13} color={'#80829F'}>
        {timeStampToFormat(item.applyTime)}
      </Typography>,
      <Typography key={item.message} fontWeight={400} fontSize={13} color={'#80829F'}>
        {item.message}
      </Typography>,
      <Box
        key={item.message}
        sx={{
          gap: 10,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          '& p': {
            cursor: 'pointer'
          }
        }}
      >
        <Typography
          key={item.message + 1}
          fontWeight={400}
          fontSize={13}
          color={'#3F5170'}
          onClick={() => {
            opTypeCallback('agree', item.applyId)
          }}
        >
          Agree
        </Typography>
        <Typography key={item.message} fontWeight={400} fontSize={13} color={'#D4D7E2'}>
          |
        </Typography>
        <Typography
          key={item.message + 2}
          fontWeight={400}
          fontSize={13}
          color={'#e46767'}
          onClick={() => {
            opTypeCallback('reject', item.applyId)
          }}
        >
          Reject
        </Typography>
      </Box>
    ])
  }, [opTypeCallback, result])

  return (
    <Box sx={{}}>
      <Table
        firstAlign="left"
        variant="outlined"
        header={['User', 'Role applied for', 'Applied Time', 'Message', '']}
        rows={tableList}
      ></Table>
    </Box>
  )
}
