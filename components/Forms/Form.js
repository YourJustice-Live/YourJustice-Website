import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { Select } from 'components'

import style from './Form.module.scss'

import { dataTabs, formTranslation } from './data'
import sendForm from 'utils/sendForm'

const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export default function Form({ type = 'developers', isOpen = false }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [status, setStatus] = useState('none')
  const { locale } = useRouter()

  const handleForm = data => {
    setStatus('sending')
    sendForm(data).then(() => setStatus('success'))
  }

  return (
    <div className={`${style.wrapper} ${isOpen ? style.opened : ''}`}>
      <div className={`${style.success} ${status === 'success' ? style.visible : ''}`}>
        <img src={`/assets/images/form-success-${type}.png`} alt={type} />
        <p>{formTranslation.success.title[locale]}</p>
        <span>{formTranslation.success.text[locale]}</span>
      </div>
      <div className={`${style.sending} ${status === 'sending' ? style.visible : ''}`}>
        <div className={style.spinner}>
          <div className={style.spinnerBlock}>
            <div></div><div><div></div></div>
          </div>
        </div>
        <p>{formTranslation.sending[locale]}</p>
      </div>
      <form action="#" className={status === 'none' ? style.visible : ''} onSubmit={handleSubmit(handleForm)}>
        <div
          className={`${style.inputWrap} ${errors.name ? style.error : ''}`}
        >
          <input
            {...register('name', {required: true})}
            name="name"
            type="text"
            placeholder={formTranslation.name.placeholder[locale]}
          />
          <span className={style.errorText}>
            {errors?.name?.type && formTranslation.name.error[errors?.name?.type][locale]}
          </span>
        </div>
        <div
          className={`${style.inputWrap} ${errors.email ? style.error : ''}`}
        >
          <input
            {...register('email', {required: true, pattern: emailPattern})}
            name="email"
            type="text"
            placeholder={formTranslation.email.placeholder[locale]}
          />
          <span className={style.errorText}>
            {errors?.email?.type && formTranslation.email.error[errors.email.type][locale]}
          </span>
        </div>
        <div
          className={`${style.inputWrap} ${errors.email ? style.error : ''}`}
        >
          <input
            {...register('contact', {required: true})}
            name="contact"
            type="text"
            placeholder={formTranslation.contact.placeholder[locale]}
          />
          <span className={style.errorText}>
            {errors?.contact?.type && formTranslation.contact.error[errors.contact.type][locale]}
          </span>
        </div>
        <div
          className={`${style.inputWrap} ${errors.email ? style.error : ''}`}
        >
          <input
            {...register('role', {required: true})}
            name="role"
            type="text"
            placeholder={formTranslation.role.placeholder[locale]}
          />
          <span className={style.errorText}>
            {errors?.role?.type && formTranslation.role.error[errors.role.type][locale]}
          </span>
        </div>
        {/* <Select
          defaultValue={formTranslation.name.placeholder[locale]}
          name="country"
          value={fields.country}
          onChange={handleChange}
          error={errors.country}
          errorText={formTranslation.country.error[locale]}
            />
            <Select
            defaultValue={formTranslation.business.placeholder[locale]}
            name="business"
            value={fields.business}
            onChange={handleChange}
            error={errors.business}
            errorText={formTranslation.business.error[locale]}
          />
          {type === 'developers' && (
          <Select
          defaultValue={formTranslation.skills.placeholder[locale]}
          name="skills"
          value={fields.skills}
          onChange={handleChange}
          error={errors.skills}
          errorText={formTranslation.skills.error[locale]}
          />
        )} */}
        <div
          className={`${style.textareaWrapper} ${errors.about ? style.error : ''}`}
        >
          <textarea
            {...register('about', {required: true})}
            name="about"
            placeholder={formTranslation.about.placeholder[locale]}
          ></textarea>
        </div>
        {/* {type === 'developers' && (
          <div
            className={`${style.textareaWrapper} ${errors.interests ? style.error : ''}`}
          >
            <textarea
          {...register('interests', {required: true})}
          name="interests"
          placeholder={formTranslation.interests.placeholder[locale]}
            ></textarea>
          </div>
        )} */}
        <button className={style.button} formNoValidate>
          <span>{formTranslation.button[locale]}</span>
        </button>
      </form>
    </div>
  )
}
