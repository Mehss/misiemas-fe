import React, { memo } from 'react'

import { Pager } from '@progress/kendo-react-data-tools'
import { DropDownList } from '@progress/kendo-react-dropdowns'

import Typography from '~/components/atoms/Text'
import { colors } from '~/styles/theme'

import {
  Divider,
  Wrapper,
  Paginate,
  LeftContent,
  RightContent,
  WrapperDropDown,
  WrapperShownItem,
} from './styles'
import { IPagerProps } from './types'

const PagerComponent: React.FC<IPagerProps> = (props: IPagerProps) => {
  const { skip, take, total, onPageChange, onTakeChange, isPageChangeAble } =
    props

  const currentPage = Math.floor(skip / take) + 1
  const totalPages = Math.ceil((total || 0) / take)

  const onChange = (val: number) => {
    if (onTakeChange) {
      onTakeChange(val)
    }
  }

  return (
    <Wrapper>
      <LeftContent>
        <WrapperShownItem>
          <Typography color={colors.neutral.n70} types="small">
            {`Showing ${skip + 1} - ${
              skip + take < total ? skip + take : total
            } of ${total}`}
          </Typography>
        </WrapperShownItem>
        {isPageChangeAble && (
          <>
            <Divider />
            <WrapperShownItem>
              <Typography color="#333" types="small">
                Listing per Page
              </Typography>
            </WrapperShownItem>
            <WrapperDropDown>
              <DropDownList
                value={take}
                data={[10, 20, 50, 100]}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                onChange={(e) => onChange(e.target.value)}
              />
            </WrapperDropDown>
          </>
        )}
      </LeftContent>
      <RightContent>
        <Paginate
          // renderItem={(item) => (
          //   <PaginationItem
          //     component={null}
          //     components={{
          //       first: Icon.DoubleChevronLeftIcon,
          //       last: Icon.DoubleChevronRightIcon,
          //     }}
          //     {...item}
          //   />
          // )}
          showLastButton
          shape="rounded"
          showFirstButton
          count={totalPages}
          page={currentPage}
          id="m_grid-pagination"
          onChange={(e: React.ChangeEvent<unknown>, p: number) => {
            if (onPageChange) {
              onPageChange({
                take,
                skip: (p - 1) * take,
                syntheticEvent: e,
                nativeEvent: e.nativeEvent,
                target: new Pager({
                  skip: (p - 1) * take,
                  take,
                  total: totalPages,
                }),
              })
            }
          }}
        />
      </RightContent>
    </Wrapper>
  )
}
PagerComponent.defaultProps = {
  isPageChangeAble: true,
}
export default memo(PagerComponent)
