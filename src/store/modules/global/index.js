export default {
  state: {
    menu: [
      {
        title: 'Школа',
        type: 'anchor',
        link: 'about'
      },
      {
        title: 'Курсы',
        type: 'anchor',
        link: 'courses'
      },
      {
        title: 'Команда',
        type: 'anchor',
        link: 'team'
      },
      {
        title: 'Видео',
        type: 'router-link',
        link: 'VideoBlog'
      },
      {
        title: 'Записаться',
        type: 'anchor',
        button: true,
        link: 'footer'
      }
    ],
    contacts: {
      address:
        '141305, Россия , г. Сергиев Посад, <br />' + 'ул. Центральная, д.1',
      email: 'welcomeschoolsp@gmail.com',
      phone: '+7 (915) 095-13-66',
      schedule:
        'Пн - Пт: 10:00 – 20:00 <br />' +
        '​Сб: 10:00 – 19:00 <br />​' +
        'Вс: 12:00 – 19:00'
    }
  }
}
