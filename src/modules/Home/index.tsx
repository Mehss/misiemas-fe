import React from 'react'

import AutoComplete from '~/components/atoms/AutoComplete'
import Button from '~/components/atoms/Button'
import Icon from '~/components/atoms/Icon'
import NumericInput from '~/components/atoms/NumericInput'
import Text from '~/components/atoms/Text'
import TextInput from '~/components/atoms/TextInput'
import FormInput from '~/components/molecules/FormInput'
import FormNumericInput from '~/components/molecules/FormNumericInput'
import ListingPage from '~/components/molecules/ListingPage'
import Pagination from '~/components/molecules/Pagination'
import { colors } from '~/styles/theme'

import useCustom from './hooks'
import { Row, Column, Content } from './style'

const Home = () => {
  const { BypassLogout, control, errors, onSubmit, handleSubmit } = useCustom()
  return (
    <>
      <Column>
        <Text types="body1" color={colors.blues.b400}>
          Sample Atoms
        </Text>
        <Row>
          <Content>
            <Button types="danger" sizes="large" onClick={BypassLogout}>
              Logout
            </Button>
          </Content>
          <Content>
            <Text types="body1" color={colors.blues.b400}>
              Sample Text
            </Text>
          </Content>
          <Content>
            <TextInput
              types="none" // if types = suffix/preffix then use props icon instead
              sizes="large"
            />
          </Content>
        </Row>
        <Row>
          <Content>
            <NumericInput sizes="large" />
          </Content>
          <Content>
            <AutoComplete
              options={[]}
              types="normal"
              helper={false}
              sizes="default"
              optionText="label"
              optionValueKey="id"
            />
          </Content>
          <Content>
            <Icon.WarningIcon />
            <Icon.AvailableIcon />
            <Icon.IndeterminateIcon />
          </Content>
        </Row>
      </Column>
      <Column>
        <Text types="body1" color={colors.blues.b400}>
          Sample Molecules
        </Text>
        <Row>
          <Content>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                title="Email"
                sizes="large"
                errors={errors}
                field="email"
                control={control}
              />
              <FormNumericInput
                title="Pin"
                field="pin"
                sizes="large"
                errors={errors}
                control={control}
              />
              <Button sizes="large" type="submit" types="primary">
                Submit
              </Button>
            </form>
          </Content>
        </Row>
        <Row>
          <Content>
            <ListingPage skip={0} take={10} total={100} />
          </Content>
          <Content>
            <Pagination skip={0} take={10} total={100} />
          </Content>
        </Row>
      </Column>
    </>
  )
}
export default Home
