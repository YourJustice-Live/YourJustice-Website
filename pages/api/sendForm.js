import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fieldNames = {
  name: 'Имя',
  email: 'Email',
  country: 'Страна',
  business: 'Бизнес',
  skills: 'Навыки',
  about: 'Мотивация',
  interests: 'Что было интересно в проекте',
}

function getMessageText(formData) {
  return Object.keys(formData)
    .map(field => `${fieldNames[field] || field}: ${formData[field]}`)
    .join('\r\n')
}

export default async function sendForm(req, res) {
  try {
    await sgMail.send({
      to: ['sunny.mckaffi@gmail.com'],
      from: 'noreply@yourjustice.life',
      subject: 'Тестирование отправки форм',
      text: getMessageText(req.body),
    })
    res.status(200).json({ status: 'success' })
  } catch (error) {
    res.status(200).json({ status: 'error', error })
  }
}
