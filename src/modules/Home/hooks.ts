import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import useAuth from '~/utils/auth/useAuth'

const useCustom = () => {
  const { setIsLoggedIn } = useAuth()

  const BypassLogout = () => {
    setIsLoggedIn(false)
  }

  const initialValues: any = {
    email: '',
    pin: ''
  }

  const validation = Yup.object().shape({
    email: Yup.string()
      .email('Email didnt correct')
      .required('Email is required'),
    pin: Yup.string().required('Password is required')
  })

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validation)
  })

  const onSubmit = async () => {
    try {
      console.log('[Success]: Click')
    } catch {
      console.log('[ERROR]: Click')
    }
  }

  return {
    errors,
    control,
    register,
    onSubmit,
    getValues,
    handleSubmit,
    BypassLogout
  }
}

export default useCustom
